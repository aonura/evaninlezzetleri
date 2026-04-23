import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db";
import Badge from "@/components/ui/Badge";
import FavoriteButton from "@/components/recipe/FavoriteButton";
import IngredientList from "@/components/recipe/IngredientList";
import StepList from "@/components/recipe/StepList";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import { formatTime } from "@/lib/utils";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getRecipe(slug: string) {
  return prisma.recipe.findUnique({
    where: { slug },
    include: { tags: true, ingredients: true, steps: { orderBy: { order: "asc" } } },
  });
}

async function getSimilarRecipes(category: string, excludeId: number) {
  return prisma.recipe.findMany({
    where: { category, NOT: { id: excludeId } },
    include: { tags: true },
    take: 3,
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = await getRecipe(slug);
  if (!recipe) return {};

  return {
    title: `${recipe.title} Tarifi`,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      images: [recipe.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const recipes = await prisma.recipe.findMany({ select: { slug: true } });
  return recipes.map((r) => ({ slug: r.slug }));
}

export default async function RecipeDetailPage({ params }: Props) {
  const { slug } = await params;
  const recipe = await getRecipe(slug);
  if (!recipe) notFound();

  const similar = await getSimilarRecipes(recipe.category, recipe.id);

  // JSON-LD Recipe schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    image: recipe.imageUrl,
    description: recipe.description,
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${recipe.totalTime}M`,
    recipeYield: `${recipe.servings} kişilik`,
    recipeCategory: recipe.category,
    recipeIngredient: recipe.ingredients.map(
      (i) => `${i.amount} ${i.name}${i.notes ? ` (${i.notes})` : ""}`
    ),
    recipeInstructions: recipe.steps.map((s) => ({
      "@type": "HowToStep",
      text: s.instruction,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* Hero image */}
        <div className="relative h-64 md:h-96 bg-[#E8DDD0] overflow-hidden">
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Back button */}
          <Link
            href="/tarifler"
            className="absolute top-4 left-4 flex items-center gap-1.5 px-3 h-9 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-all"
          >
            <ArrowLeft size={16} />
            Geri
          </Link>

          {/* Favorite button */}
          <div className="absolute top-4 right-4">
            <FavoriteButton recipeId={recipe.id} recipeSlug={recipe.slug} />
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <Badge variant="category" className="mb-2">
              {recipe.category}
            </Badge>
            <h1 className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight">
              {recipe.title}
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
          {/* Meta info */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 bg-[#FFFEF9] border border-[#E8DDD0] rounded-xl px-4 py-2">
              <Clock size={16} className="text-[#C4603A]" />
              <div>
                <p className="text-[10px] text-[#A89A8A] uppercase tracking-wide">
                  Toplam Süre
                </p>
                <p className="text-sm font-semibold text-[#2C2218]">
                  {formatTime(recipe.totalTime)}
                </p>
              </div>
            </div>

            {recipe.prepTime > 0 && (
              <div className="flex items-center gap-2 bg-[#FFFEF9] border border-[#E8DDD0] rounded-xl px-4 py-2">
                <Clock size={16} className="text-[#A89A8A]" />
                <div>
                  <p className="text-[10px] text-[#A89A8A] uppercase tracking-wide">
                    Hazırlık
                  </p>
                  <p className="text-sm font-semibold text-[#2C2218]">
                    {formatTime(recipe.prepTime)}
                  </p>
                </div>
              </div>
            )}

            {recipe.cookTime > 0 && (
              <div className="flex items-center gap-2 bg-[#FFFEF9] border border-[#E8DDD0] rounded-xl px-4 py-2">
                <ChefHat size={16} className="text-[#A89A8A]" />
                <div>
                  <p className="text-[10px] text-[#A89A8A] uppercase tracking-wide">
                    Pişirme
                  </p>
                  <p className="text-sm font-semibold text-[#2C2218]">
                    {formatTime(recipe.cookTime)}
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 bg-[#FFFEF9] border border-[#E8DDD0] rounded-xl px-4 py-2">
              <Users size={16} className="text-[#A89A8A]" />
              <div>
                <p className="text-[10px] text-[#A89A8A] uppercase tracking-wide">
                  Kişi Sayısı
                </p>
                <p className="text-sm font-semibold text-[#2C2218]">
                  {recipe.servings} kişi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#FFFEF9] border border-[#E8DDD0] rounded-xl px-4 py-2">
              <Badge variant="difficulty" difficulty={recipe.difficulty}>
                {recipe.difficulty}
              </Badge>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#7A6A5A] text-base leading-relaxed mb-4">
            {recipe.description}
          </p>

          {recipe.intro && (
            <p className="text-[#7A6A5A] text-sm leading-relaxed mb-6 italic border-l-2 border-[#C4603A]/30 pl-4">
              {recipe.intro}
            </p>
          )}

          {/* Tags */}
          {recipe.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {recipe.tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/ara?q=${encodeURIComponent(tag.name)}`}
                >
                  <Badge variant="tag">#{tag.name}</Badge>
                </Link>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Ingredients */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2C2218] mb-4">
                Malzemeler
              </h2>
              <IngredientList ingredients={recipe.ingredients} />
            </section>

            {/* Steps */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-[#2C2218] mb-4">
                Hazırlanışı
              </h2>
              <StepList steps={recipe.steps} />
            </section>
          </div>

          {/* Similar recipes */}
          {similar.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#E8DDD0]">
              <h2 className="font-serif text-xl font-semibold text-[#2C2218] mb-5">
                Benzer Tarifler
              </h2>
              <RecipeGrid recipes={similar} />
            </section>
          )}
        </div>
      </article>
    </>
  );
}
