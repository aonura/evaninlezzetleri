import { Suspense } from "react";
import { prisma } from "@/lib/db";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import { SkeletonGrid } from "@/components/ui/SkeletonCard";
import CategoryChips from "@/components/home/CategoryChips";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tüm Tarifler",
  description: "Türk mutfağının en güzel tariflerini keşfedin.",
};

interface Props {
  searchParams: Promise<{
    kategori?: string;
    zorluk?: string;
    sure?: string;
  }>;
}

async function getRecipes(filters: {
  kategori?: string;
  zorluk?: string;
}) {
  const where: Record<string, unknown> = {};
  if (filters.kategori) where.category = filters.kategori;
  if (filters.zorluk) where.difficulty = filters.zorluk;

  return prisma.recipe.findMany({
    where,
    include: { tags: true },
    orderBy: { createdAt: "desc" },
  });
}

export default async function TariflerPage({ searchParams }: Props) {
  const params = await searchParams;
  const recipes = await getRecipes(params);

  const filterLabel = params.kategori
    ? `${params.kategori} Tarifleri`
    : "Tüm Tarifler";

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      <div className="mb-6 md:mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#2C2218] mb-4">
          {filterLabel}
        </h1>
        <Suspense fallback={<div className="h-10" />}>
          <CategoryChips />
        </Suspense>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-[#7A6A5A]">
          <span className="font-semibold text-[#2C2218]">{recipes.length}</span>{" "}
          tarif bulundu
        </p>

        {/* Difficulty filter */}
        <div className="flex gap-2">
          {["Kolay", "Orta", "Zor"].map((d) => (
            <a
              key={d}
              href={`/tarifler?${params.kategori ? `kategori=${params.kategori}&` : ""}zorluk=${d}`}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                params.zorluk === d
                  ? "bg-[#C4603A] text-white border-[#C4603A]"
                  : "bg-[#FFFEF9] text-[#7A6A5A] border-[#E8DDD0] hover:border-[#C4603A]"
              }`}
            >
              {d}
            </a>
          ))}
          {params.zorluk && (
            <a
              href={`/tarifler${params.kategori ? `?kategori=${params.kategori}` : ""}`}
              className="px-3 py-1 rounded-full text-xs font-medium border bg-[#FAF7F2] text-[#A89A8A] border-[#E8DDD0] hover:border-[#C4603A]"
            >
              ✕ Sıfırla
            </a>
          )}
        </div>
      </div>

      <Suspense fallback={<SkeletonGrid />}>
        <RecipeGrid recipes={recipes} />
      </Suspense>
    </div>
  );
}
