import { Suspense } from "react";
import { searchRecipes, searchByIngredients } from "@/lib/search";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import { SkeletonGrid } from "@/components/ui/SkeletonCard";
import SearchForm from "./SearchForm";
import type { Metadata } from "next";
import type { RecipeCard } from "@/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tarif Ara",
};

interface Props {
  searchParams: Promise<{ q?: string; malzeme?: string }>;
}

type SearchResult = RecipeCard & { matchScore?: number; matchCount?: number };

export default async function AraPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.q ?? "";
  const malzeme = params.malzeme ?? "";

  let recipes: SearchResult[] = [];
  let totalIngredients = 0;
  let searchLabel = "";

  if (malzeme) {
    const ingredients = malzeme
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    totalIngredients = ingredients.length;
    searchLabel = `"${ingredients.join(", ")}" malzemeleri için`;
    const results = await searchByIngredients(ingredients);
    recipes = results as SearchResult[];
  } else if (query) {
    searchLabel = `"${query}" için`;
    const results = await searchRecipes(query);
    recipes = results as SearchResult[];
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#2C2218] mb-6">
        Tarif Ara
      </h1>

      <Suspense>
        <SearchForm initialQuery={query} />
      </Suspense>

      {(query || malzeme) && (
        <div className="mt-8">
          <p className="text-sm text-[#7A6A5A] mb-4">
            {searchLabel}{" "}
            <span className="font-semibold text-[#2C2218]">
              {recipes.length}
            </span>{" "}
            tarif bulundu
          </p>

          <Suspense fallback={<SkeletonGrid />}>
            <RecipeGrid
              recipes={recipes}
              totalIngredients={totalIngredients || undefined}
            />
          </Suspense>
        </div>
      )}

      {!query && !malzeme && (
        <div className="mt-12 text-center text-[#A89A8A]">
          <p className="text-lg">Ne aramak istersiniz?</p>
          <p className="text-sm mt-1">
            Tarif adı, malzeme veya kategori ile arama yapabilirsiniz.
          </p>
        </div>
      )}
    </div>
  );
}
