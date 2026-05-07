import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import DecorativeDivider from "@/components/vintage/DecorativeDivider";

export const metadata: Metadata = {
  title: "Kolay Alışveriş",
  description: "Mutfak için seçme ürünler",
};

const kategoriler = [
  {
    baslik: "Zeytinyağı",
    renk: "var(--tile-2-border)",
    urunler: [
      {
        ad: "Naturel Sızma Zeytinyağı",
        aciklama: "Soğuk sıkım, erken hasat. Salata ve zeytinyağlı yemekler için.",
        link: "#",
      },
      {
        ad: "Rafine Zeytinyağı",
        aciklama: "Kavurma ve kızartma için uygun, hafif aromalı.",
        link: "#",
      },
    ],
  },
  {
    baslik: "Baharatlar",
    renk: "var(--color-tomato)",
    urunler: [
      {
        ad: "Pul Biber",
        aciklama: "Türk mutfağının vazgeçilmezi, orta acılıkta.",
        link: "#",
      },
      {
        ad: "Karışık Baharat Seti",
        aciklama: "Kimyon, köri, zerdaçal — dünya mutfaklarına açılan kapı.",
        link: "#",
      },
      {
        ad: "Nane & Kekik",
        aciklama: "Kuru otlar, çorba ve salatalara.",
        link: "#",
      },
    ],
  },
  {
    baslik: "Bakliyat",
    renk: "var(--color-olive)",
    urunler: [
      {
        ad: "Yeşil Mercimek",
        aciklama: "Çorba ve pilav için organik yeşil mercimek.",
        link: "#",
      },
      {
        ad: "Kuru Fasulye",
        aciklama: "Barbunya karışımlı, 500 gramlık paket.",
        link: "#",
      },
      {
        ad: "Nohut",
        aciklama: "Pişmiş ya da kuru — her ikisi de işe yarar.",
        link: "#",
      },
    ],
  },
  {
    baslik: "Mutfak Gereçleri",
    renk: "var(--color-ink-light)",
    urunler: [
      {
        ad: "Ağır Taban Tencere",
        aciklama: "Düdüklü ya da standart tencere. Uzun pişirme için şart.",
        link: "#",
      },
      {
        ad: "Döküm Tava",
        aciklama: "Yumurta, börek, et — her şey için.",
        link: "#",
      },
      {
        ad: "Tahta Kaşık Seti",
        aciklama: "Yapışmaz kaplama korur, uzun ömürlü.",
        link: "#",
      },
    ],
  },
  {
    baslik: "Tatlı Malzemeleri",
    renk: "var(--color-rust)",
    urunler: [
      {
        ad: "Un (Çok Amaçlı)",
        aciklama: "Kek, kurabiye, hamur — her ikisine de uygun.",
        link: "#",
      },
      {
        ad: "Kakao Tozu",
        aciklama: "Şekersiz, yoğun aromalı kakao.",
        link: "#",
      },
      {
        ad: "Vanilya Özü",
        aciklama: "Suni aroma yerine gerçek vanilya.",
        link: "#",
      },
    ],
  },
];

export default function KolayAlisverisPage() {
  return (
    <VintageLayout
      title="Kolay Alışveriş"
      subtitle="Mutfağın için seçilmiş, güvenilir ürünler."
    >
      <div className="space-y-10">
        {kategoriler.map(({ baslik, renk, urunler }) => (
          <section key={baslik}>
            {/* Category title */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-1 h-8 shrink-0"
                style={{ backgroundColor: renk }}
                aria-hidden
              />
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
              >
                {baslik}
              </h2>
            </div>

            <DecorativeDivider color={renk} />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {urunler.map(({ ad, aciklama, link }) => (
                <ProductCard key={ad} ad={ad} aciklama={aciklama} link={link} accentColor={renk} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer ornament */}
      <div className="flex items-center gap-3 mt-12" aria-hidden>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
        <span style={{ color: "var(--color-mustard)", fontFamily: "var(--font-display)" }}>✦ ◆ ✦</span>
        <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
      </div>
    </VintageLayout>
  );
}

function ProductCard({
  ad,
  aciklama,
  link,
  accentColor,
}: {
  ad: string;
  aciklama: string;
  link: string;
  accentColor: string;
}) {
  return (
    <div
      className="flex flex-col gap-3 p-4 relative"
      style={{
        backgroundColor: "var(--color-warm-white)",
        border: "1.5px solid var(--color-parchment)",
        borderTop: `3px solid ${accentColor}`,
        boxShadow: "1px 2px 0 var(--color-parchment)",
      }}
    >
      <h3
        className="font-bold text-base"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
      >
        {ad}
      </h3>
      <p
        className="text-sm flex-1"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-serif)" }}
      >
        {aciklama}
      </p>
      <a
        href={link}
        className="inline-block text-center py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-80"
        style={{
          border: `1.5px solid ${accentColor}`,
          color: accentColor,
          fontFamily: "var(--font-serif)",
          letterSpacing: "0.1em",
        }}
      >
        Ürüne Git →
      </a>
    </div>
  );
}
