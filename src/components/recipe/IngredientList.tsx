"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { RecipeIngredient } from "@/types";

interface IngredientListProps {
  ingredients: RecipeIngredient[];
}

// Checkable ingredient list — checks persist only in component state
export default function IngredientList({ ingredients }: IngredientListProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(id: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <ul className="space-y-2">
      {ingredients.map((ing) => {
        const isChecked = checked.has(ing.id);
        return (
          <li key={ing.id}>
            <button
              onClick={() => toggle(ing.id)}
              className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                isChecked
                  ? "bg-[#6B7C4F]/10 text-[#A89A8A] line-through"
                  : "bg-[#FFFEF9] hover:bg-[#FAF7F2] text-[#2C2218]"
              } border border-[#E8DDD0]`}
            >
              <span
                className={`flex-none mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  isChecked
                    ? "bg-[#6B7C4F] border-[#6B7C4F]"
                    : "border-[#E8DDD0]"
                }`}
              >
                {isChecked && <Check size={12} className="text-white" />}
              </span>
              <span className="flex-1 text-sm">
                <span className="font-medium">{ing.name}</span>
                {" — "}
                <span className="text-[#7A6A5A]">{ing.amount}</span>
                {ing.notes && (
                  <span className="text-[#A89A8A] text-xs ml-1">
                    ({ing.notes})
                  </span>
                )}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
