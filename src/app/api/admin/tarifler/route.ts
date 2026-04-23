import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { tags = [], ingredients = [], steps = [], ...recipeData } = body;

    const recipe = await prisma.recipe.create({
      data: {
        ...recipeData,
        tags: {
          connectOrCreate: (tags as string[]).map((name: string) => ({
            where: { name },
            create: { name },
          })),
        },
        ingredients: { create: ingredients },
        steps: { create: steps },
      },
      include: { tags: true, ingredients: true, steps: true },
    });

    return NextResponse.json(recipe, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Olusturulamadi" }, { status: 500 });
  }
}
