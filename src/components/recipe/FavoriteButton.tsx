"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  recipeId: number;
  recipeSlug: string;
}

function getFavorites(): number[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("eva-favorites") ?? "[]");
  } catch {
    return [];
  }
}

// Heart button that persists favorites to localStorage
export default function FavoriteButton({
  recipeId,
}: FavoriteButtonProps) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(getFavorites().includes(recipeId));
  }, [recipeId]);

  function toggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    const favs = getFavorites();
    let next: number[];

    if (favs.includes(recipeId)) {
      next = favs.filter((id) => id !== recipeId);
    } else {
      next = [...favs, recipeId];
    }

    localStorage.setItem("eva-favorites", JSON.stringify(next));
    setIsFav(next.includes(recipeId));
  }

  return (
    <button
      onClick={toggle}
      aria-label={isFav ? "Favorilerden çıkar" : "Favorilere ekle"}
      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:scale-110 transition-all duration-200"
    >
      <Heart
        size={18}
        className={isFav ? "fill-[#C4603A] text-[#C4603A]" : "text-[#7A6A5A]"}
      />
    </button>
  );
}
