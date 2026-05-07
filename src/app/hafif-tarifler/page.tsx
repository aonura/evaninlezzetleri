import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import VintageRecipeCard from "@/components/vintage/VintageRecipeCard";

export const metadata: Metadata = {
  title: "Hafif Tarifler",
  description: "Zeytinyağlılar ve hafif salatalar",
};

const recipes = [
  { title: "Zeytinyağlı Kabak",     description: "Soğan ve domatesiyle pişirilen zeytinyağlı kabak. Soğuk servisi tercih edilir, üzerine limon sıkılır.",            prepTime: "35 dk", difficulty: "Kolay" as const, category: "Zeytinyağlı", note: "En az bir saat dinlendirerek servis et." },
  { title: "Yoğurtlu Semizotu",     description: "Haşlanmış semizotunun sarımsaklı yoğurtla karıştırıldığı hafif bir meze. Yazın vazgeçilmezi.",                    prepTime: "20 dk", difficulty: "Kolay" as const, category: "Meze" },
  { title: "Nohutlu Salata",        description: "Haşlanmış nohutla hazırlanan, domates, salatalık ve yeşilliklerden oluşan besleyici bir salata.",                  prepTime: "15 dk", difficulty: "Kolay" as const, category: "Salata",      note: "Üzerine limon ve nar ekşisi eklemeyi unutma." },
  { title: "Zeytinyağlı Enginar",   description: "Havuç ve bezelye ile pişirilen enginar. Soğuk servis edilir, üzerine taze dereotu serpilir.",                      prepTime: "50 dk", difficulty: "Orta" as const,  category: "Zeytinyağlı" },
  { title: "Fasulye Piyazı",        description: "Kuru fasulye, soğan, maydanoz ve zeytinyağıyla hazırlanan Türk mezesi. Üzerine yumurta ve zeytin konur.",         prepTime: "20 dk", difficulty: "Kolay" as const, category: "Meze" },
  { title: "Tarator",               description: "Ceviz, sarımsak ve ekmekle yapılan Ege mezesi. Çiğ sebzelerle ya da haşlanmış sebze üzerine konur.",              prepTime: "10 dk", difficulty: "Kolay" as const, category: "Meze",        note: "Cevizleri iri döversen daha iyi oluyor." },
];

export default function HafifTariflerPage() {
  return (
    <VintageLayout
      title="Hafif Tarifler"
      subtitle="Zeytinyağlılar, mezeler ve salatalar."
      accentColor="#5c6e3a"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#5c6e3a",
            border: "1.5px solid #5c6e3a",
            padding: "3px 10px",
            backgroundColor: "#c8dca833",
          }}
        >
          ✿ {recipes.length} Tarif
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
