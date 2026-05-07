import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import VintageRecipeCard from "@/components/vintage/VintageRecipeCard";
import DecorativeDivider from "@/components/vintage/DecorativeDivider";

export const metadata: Metadata = {
  title: "Tatlılar",
  description: "Ev yapımı tatlı tarifleri",
};

const recipes = [
  {
    title: "Mozaik Pasta",
    description:
      "Bisküvi ve kakao kremasından yapılan, pişirmesiz bir pasta. Buzdolabında bir gece dinlenir, servise hazır.",
    prepTime: "20 dk + bekleme",
    difficulty: "Kolay" as const,
    category: "Pasta",
  },
  {
    title: "Sütlaç",
    description:
      "Bol sütle pişirilen, fırında üstü hafif kızarık geleneksel Türk tatlısı. Soğuk servis edilir.",
    prepTime: "50 dk",
    difficulty: "Orta" as const,
    category: "Sütlü Tatlı",
  },
  {
    title: "İrmik Tatlısı",
    description:
      "İrmikten yapılan, üzerine fıstık dökülen kadife dokulu bir tatlı. Şerbeti soğuk dökülür.",
    prepTime: "40 dk",
    difficulty: "Kolay" as const,
    category: "Şerbetli",
  },
  {
    title: "Muhallebi",
    description:
      "Sade, çok hafif ve soğuk bir Türk tatlısı. Üzerine gülsuyu ve tarçın serpilir.",
    prepTime: "25 dk + soğutma",
    difficulty: "Kolay" as const,
    category: "Sütlü Tatlı",
  },
  {
    title: "Elmalı Kurabiye",
    description:
      "Tereyağlı kurabiyenin içinde elmalı iç harç. Fırından çıkınca toz şeker serpilir.",
    prepTime: "45 dk",
    difficulty: "Orta" as const,
    category: "Kurabiye",
  },
  {
    title: "Kabak Tatlısı",
    description:
      "Balkabaklarının şekerle pişirilip üzerine dövülmüş ceviz döküldüğü klasik bir sonbahar tatlısı.",
    prepTime: "60 dk",
    difficulty: "Kolay" as const,
    category: "Meyve",
  },
];

export default function TatlilarPage() {
  return (
    <VintageLayout
      title="Tatlılar"
      subtitle="Ev yapımı tatlılar — her sofraya tatlı bir son."
    >
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-xs font-bold uppercase tracking-widest px-3 py-1"
          style={{
            backgroundColor: "var(--tile-6)",
            color: "var(--tile-6-border)",
            border: "1.5px solid var(--tile-6-border)",
            fontFamily: "var(--font-serif)",
          }}
        >
          ✦ {recipes.length} Tarif
        </span>
      </div>

      <DecorativeDivider color="var(--color-rust-light)" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
        {recipes.map((r) => (
          <VintageRecipeCard key={r.title} {...r} />
        ))}
      </div>

      <div className="flex items-center gap-3 mt-10" aria-hidden>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
        <span style={{ color: "var(--color-rust-light)", fontFamily: "var(--font-display)" }}>❧</span>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
      </div>
    </VintageLayout>
  );
}
