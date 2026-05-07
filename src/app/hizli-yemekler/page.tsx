import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import VintageRecipeCard from "@/components/vintage/VintageRecipeCard";
import DecorativeDivider from "@/components/vintage/DecorativeDivider";

export const metadata: Metadata = {
  title: "Hızlı Yemekler",
  description: "30 dakikada hazır pratik tarifler",
};

const recipes = [
  {
    title: "Domatesli Pratik Makarna",
    description:
      "Taze domatesler ve sarımsakla hazırlanan, sade ama lezzetli bir makarna. Üzerine rendelenmiş kaşar servis edilir.",
    prepTime: "25 dk",
    difficulty: "Kolay" as const,
    category: "Makarna",
  },
  {
    title: "Peynirli Tava Böreği",
    description:
      "Yufkayı tava ile çıtır çıtır pişirdiğiniz, içi peynirli pratik bir börek. Kahvaltı ve ara öğüne uygun.",
    prepTime: "20 dk",
    difficulty: "Kolay" as const,
    category: "Börek",
  },
  {
    title: "Yoğurtlu Kabak Kavurma",
    description:
      "Zeytinyağında kavrulan kabakların üzerine sarımsaklı yoğurt dökülen, hafif ve lezzetli bir yemek.",
    prepTime: "15 dk",
    difficulty: "Kolay" as const,
    category: "Zeytinyağlı",
  },
  {
    title: "Yumurtalı Menemen",
    description:
      "Biber, domates ve yumurtayla hazırlanan Türk mutfağının vazgeçilmezi. Sabahların en iyi arkadaşı.",
    prepTime: "15 dk",
    difficulty: "Kolay" as const,
    category: "Kahvaltı",
  },
  {
    title: "Soğanlı Patates Yemeği",
    description:
      "Az malzemeyle çok lezzetli. Domatesi ve biberiyle pişirilen sade patates yemeği.",
    prepTime: "30 dk",
    difficulty: "Kolay" as const,
    category: "Sebze",
  },
  {
    title: "Peynirli Omlet",
    description:
      "Doldurulmuş omlet: içine dilediğin peynir, domates, maydanoz. Hızlı ve doyurucu.",
    prepTime: "10 dk",
    difficulty: "Kolay" as const,
    category: "Kahvaltı",
  },
];

export default function HizliYemeklerPage() {
  return (
    <VintageLayout
      title="Hızlı Yemekler"
      subtitle="30 dakikada hazır, pratik ve doyurucu tarifler."
    >
      {/* Category badge */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-xs font-bold uppercase tracking-widest px-3 py-1"
          style={{
            backgroundColor: "var(--tile-4)",
            color: "var(--tile-4-border)",
            border: "1.5px solid var(--tile-4-border)",
            fontFamily: "var(--font-serif)",
          }}
        >
          ⏱ {recipes.length} Tarif
        </span>
      </div>

      <DecorativeDivider color="var(--color-mustard)" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
        {recipes.map((r) => (
          <VintageRecipeCard key={r.title} {...r} />
        ))}
      </div>

      {/* Bottom ornament */}
      <div className="flex items-center gap-3 mt-10" aria-hidden>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
        <span style={{ color: "var(--color-mustard)", fontFamily: "var(--font-display)" }}>❧</span>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
      </div>
    </VintageLayout>
  );
}
