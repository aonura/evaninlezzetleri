"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import type { RecipeCard } from "@/types";
import { Heart } from "lucide-react";

export default function FavoritesList() {
  const [recipes, setRecipes] = useState<RecipeCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const ids: number[] = JSON.parse(
          localStorage.getItem("eva-favorites") ?? "[]"
        );
        if (ids.length === 0) {
          setLoading(false);
          return;
        }
        const res = await fetch(
          `/api/tarifler?ids=${ids.join(",")}`
        );
        if (res.ok) {
          const data = await res.json();
          setRecipes(data);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-[#E8DDD0] rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center py-20">
        <Heart size={48} className="mx-auto text-[#E8DDD0] mb-4" />
        <h2 className="font-serif text-xl text-[#2C2218] mb-2">
          Henüz favori eklemediniz
        </h2>
        <p className="text-[#7A6A5A] mb-6">
          Tariflerdeki kalp ikonuna tıklayarak favorilerinize ekleyebilirsiniz.
        </p>
        <Link
          href="/tarifler"
          className="inline-flex items-center px-5 h-11 rounded-xl bg-[#C4603A] text-white text-sm font-medium hover:bg-[#9E4A2B] transition-all"
        >
          Tarifleri Keşfet
        </Link>
      </div>
    );
  }

  return <RecipeGrid recipes={recipes} />;
}
