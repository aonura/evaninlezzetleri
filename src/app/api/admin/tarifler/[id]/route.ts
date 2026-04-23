import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

async function isAdmin() {
  const session = await auth();
  return !!session;
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const recipeId = parseInt(id);

    await prisma.recipeIngredient.deleteMany({ where: { recipeId } });
    await prisma.recipeStep.deleteMany({ where: { recipeId } });
    await prisma.recipe.update({
      where: { id: recipeId },
      data: { tags: { set: [] } },
    });
    await prisma.recipe.delete({ where: { id: recipeId } });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Silinemedi" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const recipeId = parseInt(id);
    const body = await req.json();

    const {
      tags = [],
      ingredients = [],
      steps = [],
      ...recipeData
    } = body;

    await prisma.recipeIngredient.deleteMany({ where: { recipeId } });
    await prisma.recipeStep.deleteMany({ where: { recipeId } });
    await prisma.recipe.update({
      where: { id: recipeId },
      data: { tags: { set: [] } },
    });

    const updated = await prisma.recipe.update({
      where: { id: recipeId },
      data: {
        ...recipeData,
        tags: {
          connectOrCreate: (tags as string[]).map((name: string) => ({
            where: { name },
            create: { name },
          })),
        },
        ingredients: {
          create: ingredients,
        },
        steps: {
          create: steps,
        },
      },
      include: { tags: true, ingredients: true, steps: true },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Güncellenemedi" }, { status: 500 });
  }
}
