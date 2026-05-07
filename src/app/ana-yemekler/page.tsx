import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import VintageRecipeCard from "@/components/vintage/VintageRecipeCard";
import DecorativeDivider from "@/components/vintage/DecorativeDivider";

export const metadata: Metadata = {
  title: "Ana Yemekler",
  description: "Doyurucu ev yemekleri",
};

const recipes = [
  {
    title: "Fırında Sebzeli Köfte",
    description:
      "Patates, biber ve domatesle fırınlanmış sulu köfteler. Hafta sonu sofrasının klasiği.",
    prepTime: "55 dk",
    difficulty: "Orta" as const,
    category: "Etli",
  },
  {
    title: "Etli Patates Yemeği",
    description:
      "Kuşbaşı etle pişirilen, sulu ve doyurucu bir patates yemeği. Yanına pilav şart.",
    prepTime: "60 dk",
    difficulty: "Orta" as const,
    category: "Etli",
  },
  {
    title: "Tavuklu Pilav",
    description:
      "Tavuk suyu ile pişirilen tereyağlı pilav ve üzerine konan ızgara tavuk. Tam ölçülü tarif.",
    prepTime: "50 dk",
    difficulty: "Orta" as const,
    category: "Tavuk",
  },
  {
    title: "Kuru Fasulye",
    description:
      "Salçalı, kuşbaşılı ya da sade — ata yediğin gibi pişirilen gerçek bir kuru fasulye.",
    prepTime: "90 dk",
    difficulty: "Orta" as const,
    category: "Baklagil",
  },
  {
    title: "Karnıyarık",
    description:
      "Kıymalı iç harcıyla fırınlanan, hafif baskılı patlıcan. Yanına bulgur pilavı yakışır.",
    prepTime: "70 dk",
    difficulty: "Orta" as const,
    category: "Patlıcan",
  },
  {
    title: "İzmir Köfte",
    description:
      "Bol domatesli sosuyla tencerede pişirilen, pratik ama tatmin edici bir köfte yemeği.",
    prepTime: "45 dk",
    difficulty: "Orta" as const,
    category: "Etli",
  },
];

export default function AnaYemeklerPage() {
  return (
    <VintageLayout
      title="Ana Yemekler"
      subtitle="Sofraya layık, doyurucu ev yemekleri."
    >
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-xs font-bold uppercase tracking-widest px-3 py-1"
          style={{
            backgroundColor: "var(--tile-5)",
            color: "var(--tile-5-border)",
            border: "1.5px solid var(--tile-5-border)",
            fontFamily: "var(--font-serif)",
          }}
        >
          🍽 {recipes.length} Tarif
        </span>
      </div>

      <DecorativeDivider color="var(--color-rust)" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
        {recipes.map((r) => (
          <VintageRecipeCard key={r.title} {...r} />
        ))}
      </div>

      <div className="flex items-center gap-3 mt-10" aria-hidden>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
        <span style={{ color: "var(--color-rust)", fontFamily: "var(--font-display)" }}>❧</span>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
      </div>
    </VintageLayout>
  );
}
