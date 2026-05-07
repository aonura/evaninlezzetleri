import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import VintageRecipeCard from "@/components/vintage/VintageRecipeCard";

export const metadata: Metadata = {
  title: "Hızlı Yemekler",
  description: "30 dakikada hazır pratik tarifler",
};

const recipes = [
  { title: "Domatesli Pratik Makarna",  description: "Taze domatesler ve sarımsakla hazırlanan sade ama lezzetli bir makarna. Üzerine rendelenmiş kaşar servis edilir.", prepTime: "25 dk", difficulty: "Kolay" as const, category: "Makarna",     note: "Sarımsakları rendelersen aroması çok daha güzel çıkar." },
  { title: "Peynirli Tava Böreği",       description: "Yufkayı tava ile çıtır çıtır pişirdiğiniz, içi peynirli pratik bir börek. Kahvaltı ve ara öğüne uygun.",         prepTime: "20 dk", difficulty: "Kolay" as const, category: "Börek",      note: "Tava iyice ısındıktan sonra yufkayı koy." },
  { title: "Yoğurtlu Kabak Kavurma",     description: "Zeytinyağında kavrulan kabakların üzerine sarımsaklı yoğurt dökülen, hafif ve lezzetli bir yemek.",               prepTime: "15 dk", difficulty: "Kolay" as const, category: "Zeytinyağlı" },
  { title: "Yumurtalı Menemen",          description: "Biber, domates ve yumurtayla hazırlanan Türk mutfağının vazgeçilmezi. Sabahların en iyi arkadaşı.",               prepTime: "15 dk", difficulty: "Kolay" as const, category: "Kahvaltı",   note: "Yumurtaları geç ekle, aksi halde pişer gider." },
  { title: "Soğanlı Patates Yemeği",     description: "Az malzemeyle çok lezzetli. Domatesi ve biberiyle pişirilen sade patates yemeği.",                                prepTime: "30 dk", difficulty: "Kolay" as const, category: "Sebze" },
  { title: "Peynirli Omlet",             description: "Doldurulmuş omlet: içine dilediğin peynir, domates, maydanoz. Hızlı ve doyurucu.",                                prepTime: "10 dk", difficulty: "Kolay" as const, category: "Kahvaltı" },
];

export default function HizliYemeklerPage() {
  return (
    <VintageLayout
      title="Hızlı Yemekler"
      subtitle="30 dakikada hazır, pratik ve doyurucu tarifler."
      accentColor="#c49020"
    >
      {/* Section header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#c49020",
            border: "1.5px solid #c49020",
            padding: "3px 10px",
            backgroundColor: "#f5d07033",
          }}
        >
          ⏱ {recipes.length} Tarif
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
