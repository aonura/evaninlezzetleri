import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";

export const metadata: Metadata = {
  title: "Kolay Alışveriş",
  description: "Mutfak için seçme ürünler",
};

const kategoriler = [
  {
    baslik: "Zeytinyağı",
    renk: "#5c6e3a",
    simge: "🫒",
    urunler: [
      { ad: "Naturel Sızma Zeytinyağı", aciklama: "Soğuk sıkım, erken hasat. Salata ve zeytinyağlı yemekler için.", link: "#" },
      { ad: "Rafine Zeytinyağı",         aciklama: "Kavurma ve kızartma için uygun, hafif aromalı.",                   link: "#" },
    ],
  },
  {
    baslik: "Baharatlar",
    renk: "#c0392b",
    simge: "🌶",
    urunler: [
      { ad: "Pul Biber",          aciklama: "Türk mutfağının vazgeçilmezi, orta acılıkta.",                 link: "#" },
      { ad: "Karışık Baharat Seti", aciklama: "Kimyon, köri, zerdaçal — dünya mutfaklarına açılan kapı.", link: "#" },
      { ad: "Nane & Kekik",       aciklama: "Kuru otlar, çorba ve salatalara.",                             link: "#" },
    ],
  },
  {
    baslik: "Bakliyat",
    renk: "#8b6020",
    simge: "🫘",
    urunler: [
      { ad: "Yeşil Mercimek", aciklama: "Çorba ve pilav için organik yeşil mercimek.",  link: "#" },
      { ad: "Kuru Fasulye",   aciklama: "Barbunya karışımlı, 500 gramlık paket.",        link: "#" },
      { ad: "Nohut",          aciklama: "Pişmiş ya da kuru — her ikisi de işe yarar.",  link: "#" },
    ],
  },
  {
    baslik: "Mutfak Gereçleri",
    renk: "#4a3728",
    simge: "🥄",
    urunler: [
      { ad: "Ağır Taban Tencere", aciklama: "Uzun pişirme için şart. Döküm ya da çelik.",     link: "#" },
      { ad: "Döküm Tava",          aciklama: "Yumurta, börek, et — her şey için.",              link: "#" },
      { ad: "Tahta Kaşık Seti",    aciklama: "Yapışmaz kaplama korur, uzun ömürlü.",           link: "#" },
    ],
  },
  {
    baslik: "Tatlı Malzemeleri",
    renk: "#c09070",
    simge: "🍫",
    urunler: [
      { ad: "Un (Çok Amaçlı)",  aciklama: "Kek, kurabiye, hamur — hepsine uygun.",    link: "#" },
      { ad: "Kakao Tozu",        aciklama: "Şekersiz, yoğun aromalı kakao.",            link: "#" },
      { ad: "Vanilya Özü",       aciklama: "Suni aroma yerine gerçek vanilya.",         link: "#" },
    ],
  },
];

export default function KolayAlisverisPage() {
  return (
    <VintageLayout
      title="Kolay Alışveriş"
      subtitle="Mutfağın için seçilmiş, güvenilir ürünler."
      accentColor="#b0a060"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {kategoriler.map(({ baslik, renk, simge, urunler }) => (
          <section key={baslik}>
            {/* Category heading */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div style={{ width: "4px", height: "28px", backgroundColor: renk, flexShrink: 0 }} aria-hidden />
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  margin: 0,
                }}
              >
                {simge} {baslik}
              </h2>
              <div style={{ flex: 1, height: "1px", background: "var(--color-parchment)" }} aria-hidden />
            </div>

            {/* Product cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {urunler.map(({ ad, aciklama, link }) => (
                <div
                  key={ad}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    padding: "0.9rem 1rem",
                    backgroundColor: "#faf7f0",
                    border: "2px solid var(--color-parchment)",
                    borderTop: `3px solid ${renk}`,
                    outline: "1px solid rgba(180,140,60,0.2)",
                    outlineOffset: "-5px",
                    boxShadow: "2px 3px 0 rgba(180,140,60,0.18)",
                    backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 27px,rgba(140,100,40,0.04) 27px,rgba(140,100,40,0.04) 28px)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.98rem",
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: "var(--color-ink)",
                      margin: 0,
                    }}
                  >
                    {ad}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.83rem",
                      color: "var(--color-muted)",
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {aciklama}
                  </p>
                  <a
                    href={link}
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "0.45rem 0.75rem",
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: renk,
                      border: `1.5px solid ${renk}`,
                      textDecoration: "none",
                      transition: "background 0.15s",
                    }}
                  >
                    Ürüne Git →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </VintageLayout>
  );
}
