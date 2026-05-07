import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import VintageRecipeCard from "@/components/vintage/VintageRecipeCard";
import DecorativeDivider from "@/components/vintage/DecorativeDivider";

export const metadata: Metadata = {
  title: "Hafif Tarifler",
  description: "Zeytinyağlılar ve hafif salatalar",
};

const recipes = [
  {
    title: "Zeytinyağlı Kabak",
    description:
      "Soğan ve domatesiyle pişirilen zeytinyağlı kabak. Soğuk servisi tercih edilir, üzerine limon sıkılır.",
    prepTime: "35 dk",
    difficulty: "Kolay" as const,
    category: "Zeytinyağlı",
  },
  {
    title: "Yoğurtlu Semizotu",
    description:
      "Haşlanmış semizotunun sarımsaklı yoğurtla karıştırıldığı hafif bir meze. Yazın vazgeçilmezi.",
    prepTime: "20 dk",
    difficulty: "Kolay" as const,
    category: "Meze",
  },
  {
    title: "Nohutlu Salata",
    description:
      "Haşlanmış nohutla hazırlanan, domates, salatalık ve yeşilliklerden oluşan besleyici bir salata.",
    prepTime: "15 dk",
    difficulty: "Kolay" as const,
    category: "Salata",
  },
  {
    title: "Zeytinyağlı Enginar",
    description:
      "Havuç ve bezelye ile pişirilen enginar. Soğuk servis edilir, üzerine taze dereotu serpilir.",
    prepTime: "50 dk",
    difficulty: "Orta" as const,
    category: "Zeytinyağlı",
  },
  {
    title: "Fasulye Piyazı",
    description:
      "Kuru fasulye, soğan, maydanoz ve zeytinyağıyla hazırlanan Türk mezesi. Üzerine yumurta ve zeytin konur.",
    prepTime: "20 dk",
    difficulty: "Kolay" as const,
    category: "Meze",
  },
  {
    title: "Tarator",
    description:
      "Ceviz, sarımsak ve ekmekle yapılan Ege mezesi. Çiğ sebzelerle ya da haşlanmış sebze üzerine konur.",
    prepTime: "10 dk",
    difficulty: "Kolay" as const,
    category: "Meze",
  },
];

export default function HafifTariflerPage() {
  return (
    <VintageLayout
      title="Hafif Tarifler"
      subtitle="Zeytinyağlılar, mezeler ve salatalar."
    >
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-xs font-bold uppercase tracking-widest px-3 py-1"
          style={{
            backgroundColor: "var(--tile-7)",
            color: "var(--tile-7-border)",
            border: "1.5px solid var(--tile-7-border)",
            fontFamily: "var(--font-serif)",
          }}
        >
          ✿ {recipes.length} Tarif
        </span>
      </div>

      <DecorativeDivider color="var(--color-olive)" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
        {recipes.map((r) => (
          <VintageRecipeCard key={r.title} {...r} />
        ))}
      </div>

      <div className="flex items-center gap-3 mt-10" aria-hidden>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
        <span style={{ color: "var(--color-olive)", fontFamily: "var(--font-display)" }}>❧</span>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
      </div>
    </VintageLayout>
  );
}
