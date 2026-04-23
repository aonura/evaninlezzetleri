import { Suspense } from "react";
import { prisma } from "@/lib/db";
import HeroSearch from "@/components/home/HeroSearch";
import CategoryChips from "@/components/home/CategoryChips";
import IngredientsWidget from "@/components/home/IngredientsWidget";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import { SkeletonGrid } from "@/components/ui/SkeletonCard";
import Link from "next/link";

async function getHomeData() {
  const [featured, popular, recent] = await Promise.all([
    prisma.recipe.findMany({
      where: { featured: true },
      include: { tags: true },
      take: 6,
    }),
    prisma.recipe.findMany({
      where: { popular: true },
      include: { tags: true },
      take: 6,
    }),
    prisma.recipe.findMany({
      include: { tags: true },
      orderBy: { createdAt: "desc" },
      take: 6,
    }),
  ]);
  return { featured, popular, recent };
}

export default async function HomePage() {
  const { featured, popular, recent } = await getHomeData();

  return (
    <>
      <HeroSearch />

      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 space-y-10">
        <Suspense fallback={<div className="h-10" />}>
          <CategoryChips />
        </Suspense>

        {featured.length > 0 && (
          <section>
            <SectionHeader title="Öne Çıkan Tarifler" href="/tarifler" />
            <RecipeGrid recipes={featured} />
          </section>
        )}

        <IngredientsWidget />

        {popular.length > 0 && (
          <section>
            <SectionHeader title="Popüler Tarifler" href="/tarifler" />
            <Suspense fallback={<SkeletonGrid count={3} />}>
              <RecipeGrid recipes={popular} />
            </Suspense>
          </section>
        )}

        <section>
          <SectionHeader title="Son Eklenen Tarifler" href="/tarifler" />
          <Suspense fallback={<SkeletonGrid count={6} />}>
            <RecipeGrid recipes={recent} />
          </Suspense>
        </section>
      </div>
    </>
  );
}

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#2C2218]">
        {title}
      </h2>
      <Link
        href={href}
        className="text-sm text-[#C4603A] hover:text-[#9E4A2B] font-medium transition-colors"
      >
        Tümünü gör →
      </Link>
    </div>
  );
}
