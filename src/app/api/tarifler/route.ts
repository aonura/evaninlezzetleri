import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get("ids");

    if (idsParam) {
      const ids = idsParam
        .split(",")
        .map(Number)
        .filter((n) => !isNaN(n));

      const recipes = await prisma.recipe.findMany({
        where: { id: { in: ids } },
        include: { tags: true },
      });
      return NextResponse.json(recipes);
    }

    const recipes = await prisma.recipe.findMany({
      include: { tags: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(recipes);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
