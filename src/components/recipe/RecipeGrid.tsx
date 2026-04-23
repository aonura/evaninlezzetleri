import RecipeCard from "./RecipeCard";
import type { RecipeCard as RecipeCardType } from "@/types";

interface RecipeGridProps {
  recipes: Array<
    RecipeCardType & { matchScore?: number; matchCount?: number }
  >;
  totalIngredients?: number;
}

export default function RecipeGrid({
  recipes,
  totalIngredients,
}: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-16 text-[#A89A8A]">
        <p className="text-lg">Tarif bulunamadı</p>
        <p className="text-sm mt-1">Farklı bir arama yapmayı deneyin</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          matchScore={recipe.matchScore}
          matchCount={recipe.matchCount}
          totalIngredients={totalIngredients}
        />
      ))}
    </div>
  );
}
