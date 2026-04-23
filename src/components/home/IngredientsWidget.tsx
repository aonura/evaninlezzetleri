"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { COMMON_INGREDIENTS } from "@/lib/search";
import { X } from "lucide-react";

// "Evde şunlar var" ingredient picker
export default function IngredientsWidget() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function toggle(ingredient: string) {
    setSelected((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  }

  function handleSearch() {
    if (selected.length === 0) return;
    startTransition(() => {
      router.push(`/ara?malzeme=${encodeURIComponent(selected.join(","))}`);
    });
  }

  return (
    <section className="bg-[#FFFEF9] rounded-2xl border border-[#E8DDD0] p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-serif text-xl font-semibold text-[#2C2218]">
            Evde şunlar var…
          </h2>
          <p className="text-sm text-[#A89A8A] mt-0.5">
            Malzemeleri seç, tarifi bul
          </p>
        </div>

        {selected.length > 0 && (
          <button
            onClick={() => setSelected([])}
            className="text-xs text-[#A89A8A] hover:text-[#7A6A5A] flex items-center gap-1"
          >
            <X size={14} />
            Temizle
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {COMMON_INGREDIENTS.map((ingredient) => {
          const isSelected = selected.includes(ingredient);
          return (
            <button
              key={ingredient}
              onClick={() => toggle(ingredient)}
              aria-pressed={isSelected}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                isSelected
                  ? "bg-[#C4603A] text-white border-[#C4603A] shadow-sm scale-105"
                  : "bg-[#FAF7F2] text-[#7A6A5A] border-[#E8DDD0] hover:border-[#C4603A] hover:text-[#C4603A]"
              }`}
            >
              {ingredient}
            </button>
          );
        })}
      </div>

      {selected.length > 0 && (
        <div className="flex items-center gap-3">
          <p className="text-sm text-[#7A6A5A]">
            <span className="font-semibold text-[#2C2218]">
              {selected.length}
            </span>{" "}
            malzeme seçildi
          </p>
          <button
            onClick={handleSearch}
            disabled={isPending}
            className="ml-auto px-5 h-10 rounded-xl bg-[#C4603A] text-white text-sm font-medium hover:bg-[#9E4A2B] disabled:opacity-50 transition-all"
          >
            {isPending ? "Aranıyor…" : "Tarif Bul"}
          </button>
        </div>
      )}
    </section>
  );
}
