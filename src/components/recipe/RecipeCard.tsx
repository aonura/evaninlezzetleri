"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import Badge from "@/components/ui/Badge";
import FavoriteButton from "@/components/recipe/FavoriteButton";
import { formatTime } from "@/lib/utils";
import type { RecipeCard as RecipeCardType } from "@/types";

interface RecipeCardProps {
  recipe: RecipeCardType;
  matchScore?: number;
  matchCount?: number;
  totalIngredients?: number;
}

export default function RecipeCard({
  recipe,
  matchScore,
  matchCount,
  totalIngredients,
}: RecipeCardProps) {
  return (
    <article className="group bg-[#FFFEF9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] border border-[#E8DDD0]/50">
      <Link href={`/tarifler/${recipe.slug}`} className="block relative">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DDD0]">
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="difficulty" difficulty={recipe.difficulty}>
            {recipe.difficulty}
          </Badge>
        </div>

        <div className="absolute top-3 right-3">
          <FavoriteButton recipeId={recipe.id} recipeSlug={recipe.slug} />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/tarifler/${recipe.slug}`}>
          <h3 className="font-serif font-semibold text-[#2C2218] text-lg leading-snug mb-1 group-hover:text-[#C4603A] transition-colors line-clamp-2">
            {recipe.title}
          </h3>
        </Link>

        <p className="text-sm text-[#7A6A5A] line-clamp-2 mb-3">
          {recipe.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-[#A89A8A]">
          <span className="flex items-center gap-1">
            <Clock size={13} aria-hidden />
            {formatTime(recipe.totalTime)}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} aria-hidden />
            {recipe.servings} kişi
          </span>
          <Badge variant="category" className="ml-auto text-xs py-0.5">
            {recipe.category}
          </Badge>
        </div>

        {matchCount !== undefined && totalIngredients !== undefined && (
          <div className="mt-2 pt-2 border-t border-[#E8DDD0]">
            <span className="text-xs font-medium text-[#6B7C4F]">
              {totalIngredients} malzemeden {matchCount}&apos;i eşleşiyor
            </span>
            <div className="mt-1 h-1.5 bg-[#E8DDD0] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#6B7C4F] rounded-full transition-all"
                style={{ width: `${(matchScore ?? 0) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
