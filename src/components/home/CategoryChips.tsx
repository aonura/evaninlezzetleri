"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/utils";

const categoryEmoji: Record<string, string> = {
  Kahvaltı: "☀️",
  "Ana Yemek": "🍽️",
  Tatlı: "🍮",
  Çorba: "🥣",
  Salata: "🥗",
  Pratik: "⚡",
  Vejetaryen: "🥦",
};

export default function CategoryChips() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("kategori");

  return (
    <section aria-label="Kategoriler">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
        <Link
          href="/tarifler"
          className={`snap-start flex-none flex items-center gap-1.5 px-4 h-10 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
            !activeCategory
              ? "bg-[#C4603A] text-white border-[#C4603A] shadow-sm"
              : "bg-[#FFFEF9] text-[#7A6A5A] border-[#E8DDD0] hover:border-[#C4603A] hover:text-[#C4603A]"
          }`}
        >
          Tümü
        </Link>

        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={`/tarifler?kategori=${encodeURIComponent(cat)}`}
            className={`snap-start flex-none flex items-center gap-1.5 px-4 h-10 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
              activeCategory === cat
                ? "bg-[#C4603A] text-white border-[#C4603A] shadow-sm"
                : "bg-[#FFFEF9] text-[#7A6A5A] border-[#E8DDD0] hover:border-[#C4603A] hover:text-[#C4603A]"
            }`}
          >
            <span aria-hidden>{categoryEmoji[cat]}</span>
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
}
