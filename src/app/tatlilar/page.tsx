import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import VintageRecipeCard from "@/components/vintage/VintageRecipeCard";

export const metadata: Metadata = {
  title: "Tatlılar",
  description: "Ev yapımı tatlı tarifleri",
};

const recipes = [
  { title: "Mozaik Pasta",     description: "Bisküvi ve kakao kremasından yapılan, pişirmesiz bir pasta. Buzdolabında bir gece dinlenir.",    prepTime: "20 dk + bekleme", difficulty: "Kolay" as const, category: "Pasta",      note: "Şekli bozulmasın diye streç filmle sıkıca sar." },
  { title: "Sütlaç",           description: "Bol sütle pişirilen, fırında üstü hafif kızarık geleneksel Türk tatlısı. Soğuk servis edilir.", prepTime: "50 dk",           difficulty: "Orta" as const,  category: "Sütlü Tatlı", note: "Pirinçleri önceden ıslatırsan pişirme süresi kısalır." },
  { title: "İrmik Tatlısı",    description: "İrmikten yapılan, üzerine fıstık dökülen kadife dokulu bir tatlı. Şerbeti soğuk dökülür.",     prepTime: "40 dk",           difficulty: "Kolay" as const, category: "Şerbetli" },
  { title: "Muhallebi",        description: "Sade, çok hafif ve soğuk bir Türk tatlısı. Üzerine gülsuyu ve tarçın serpilir.",               prepTime: "25 dk + soğutma", difficulty: "Kolay" as const, category: "Sütlü Tatlı" },
  { title: "Elmalı Kurabiye",  description: "Tereyağlı kurabiyenin içinde elmalı iç harç. Fırından çıkınca toz şeker serpilir.",           prepTime: "45 dk",           difficulty: "Orta" as const,  category: "Kurabiye",    note: "Elmaları limon suyu ile karıştır, kararmasın." },
  { title: "Kabak Tatlısı",    description: "Balkabaklarının şekerle pişirilip üzerine dövülmüş ceviz döküldüğü klasik sonbahar tatlısı.", prepTime: "60 dk",           difficulty: "Kolay" as const, category: "Meyve" },
];

export default function TatlilarPage() {
  return (
    <VintageLayout
      title="Tatlılar"
      subtitle="Ev yapımı tatlılar — her sofraya tatlı bir son."
      accentColor="#c09070"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#c09070",
            border: "1.5px solid #c09070",
            padding: "3px 10px",
            backgroundColor: "#f0d8c833",
          }}
        >
          ✦ {recipes.length} Tarif
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
