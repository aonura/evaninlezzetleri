import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import VintageRecipeCard from "@/components/vintage/VintageRecipeCard";

export const metadata: Metadata = {
  title: "Ana Yemekler",
  description: "Doyurucu ev yemekleri",
};

const recipes = [
  { title: "Fırında Sebzeli Köfte",  description: "Patates, biber ve domatesle fırınlanmış sulu köfteler. Hafta sonu sofrasının klasiği.",           prepTime: "55 dk", difficulty: "Orta" as const, category: "Etli",    note: "Köfteleri pişirmeden önce kısa süre dinlendir." },
  { title: "Etli Patates Yemeği",    description: "Kuşbaşı etle pişirilen, sulu ve doyurucu bir patates yemeği. Yanına pilav şart.",               prepTime: "60 dk", difficulty: "Orta" as const, category: "Etli" },
  { title: "Tavuklu Pilav",          description: "Tavuk suyu ile pişirilen tereyağlı pilav ve üzerine konan ızgara tavuk. Tam ölçülü tarif.",     prepTime: "50 dk", difficulty: "Orta" as const, category: "Tavuk",   note: "Pilavı demleyerek beklet, taneler dağılmasın." },
  { title: "Kuru Fasulye",           description: "Salçalı, kuşbaşılı ya da sade — ata yediğin gibi pişirilen gerçek bir kuru fasulye.",           prepTime: "90 dk", difficulty: "Orta" as const, category: "Baklagil" },
  { title: "Karnıyarık",             description: "Kıymalı iç harcıyla fırınlanan, hafif baskılı patlıcan. Yanına bulgur pilavı yakışır.",         prepTime: "70 dk", difficulty: "Orta" as const, category: "Patlıcan", note: "Patlıcanları tuzlu suda bekletmek acılığı giderir." },
  { title: "İzmir Köfte",            description: "Bol domatesli sosuyla tencerede pişirilen, pratik ama tatmin edici bir köfte yemeği.",          prepTime: "45 dk", difficulty: "Orta" as const, category: "Etli" },
];

export default function AnaYemeklerPage() {
  return (
    <VintageLayout
      title="Ana Yemekler"
      subtitle="Sofraya layık, doyurucu ev yemekleri."
      accentColor="#b07848"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#b07848",
            border: "1.5px solid #b07848",
            padding: "3px 10px",
            backgroundColor: "#e8c8a833",
          }}
        >
          🍽 {recipes.length} Tarif
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--color-parchment)" }} />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {recipes.map((r) => (
          <VintageRecipeCard key={r.title} {...r} />
        ))}
      </div>
    </VintageLayout>
  );
}
