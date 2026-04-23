import { NextRequest, NextResponse } from "next/server";
import { searchRecipes, searchByIngredients } from "@/lib/search";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") ?? "";
    const malzeme = searchParams.get("malzeme") ?? "";

    if (malzeme) {
      const ingredients = malzeme
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const results = await searchByIngredients(ingredients);
      return NextResponse.json(results);
    }

    if (query) {
      const results = await searchRecipes(query);
      return NextResponse.json(results);
    }

    return NextResponse.json([]);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
