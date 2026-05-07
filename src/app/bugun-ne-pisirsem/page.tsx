import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import DecorativeDivider from "@/components/vintage/DecorativeDivider";

export const metadata: Metadata = {
  title: "Bugün Ne Pişirsem?",
  description: "Sana özel tarif önerileri",
};

export default function BugunNePisirsemPage() {
  return (
    <VintageLayout
      title="Bugün Ne Pişirsem?"
      subtitle="Birkaç bilgi ver, sana uygun tarifler getirelim."
    >
      <div className="grid md:grid-cols-2 gap-8">

        {/* Form */}
        <div>
          <form className="flex flex-col gap-5">

            {/* Kişi sayısı */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="kisi"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Kaç kişilik?
              </label>
              <select
                id="kisi"
                className="vintage-field w-full rounded-none"
              >
                <option value="">Seçin</option>
                <option>1 kişi</option>
                <option>2 kişi</option>
                <option>3–4 kişi</option>
                <option>5+ kişi</option>
              </select>
            </div>

            {/* Öğün tipi */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ogun"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Öğün tipi
              </label>
              <select id="ogun" className="vintage-field w-full rounded-none">
                <option value="">Seçin</option>
                <option>Kahvaltı</option>
                <option>Öğle yemeği</option>
                <option>Akşam yemeği</option>
                <option>Atıştırmalık</option>
              </select>
            </div>

            {/* Nasıl bir şey */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="tercih"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Nasıl bir şey olsun?
              </label>
              <select id="tercih" className="vintage-field w-full rounded-none">
                <option value="">Seçin</option>
                <option>Hafif bir şeyler</option>
                <option>Doyurucu bir yemek</option>
                <option>Hızlı hazırlanabilen</option>
                <option>Biraz özenli, güzel bir yemek</option>
                <option>Tatlı bir şey</option>
              </select>
            </div>

            {/* Ana malzeme */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="malzeme"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Ana malzeme var mı?
                <span
                  className="font-normal ml-1"
                  style={{ color: "var(--color-light-text)" }}
                >
                  (isteğe bağlı)
                </span>
              </label>
              <input
                id="malzeme"
                type="text"
                placeholder="örn. tavuk, patates, kabak…"
                className="vintage-field w-full rounded-none"
                style={{ fontFamily: "var(--font-serif)" }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 py-3 px-6 font-semibold uppercase tracking-widest text-sm transition-all duration-200 hover:opacity-85 active:scale-95"
              style={{
                backgroundColor: "var(--color-tomato)",
                color: "#fff",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.12em",
                border: "2px solid var(--color-tomato-dark)",
              }}
            >
              Önerileri Hazırla
            </button>
          </form>
        </div>

        {/* Result placeholder */}
        <div>
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
          >
            Tarif Önerileri
          </h2>

          <DecorativeDivider color="var(--color-mustard)" />

          {/* Placeholder cards */}
          {[
            {
              title: "Domatesli Makarna",
              desc: "Pratik, lezzetli ve hızlı hazırlanabilen klasik bir tarif.",
              sure: "25 dk",
              zorluk: "Kolay",
            },
            {
              title: "Tavuklu Pilav",
              desc: "Doyurucu, her öğüne uygun bir ev yemeği.",
              sure: "40 dk",
              zorluk: "Orta",
            },
            {
              title: "Sebzeli Çorba",
              desc: "Mevsim sebzelerinden hafif ama sıcacık bir çorba.",
              sure: "30 dk",
              zorluk: "Kolay",
            },
          ].map((r) => (
            <PlaceholderCard key={r.title} {...r} />
          ))}

          <p
            className="mt-4 text-xs text-center italic"
            style={{ color: "var(--color-light-text)", fontFamily: "var(--font-serif)" }}
          >
            Formu doldurarak sana özel öneriler getirebiliriz.
          </p>
        </div>
      </div>
    </VintageLayout>
  );
}

function PlaceholderCard({
  title,
  desc,
  sure,
  zorluk,
}: {
  title: string;
  desc: string;
  sure: string;
  zorluk: string;
}) {
  return (
    <div
      className="mb-4 p-4 relative"
      style={{
        backgroundColor: "var(--color-warm-white)",
        border: "1.5px solid var(--color-parchment)",
        borderLeft: "4px solid var(--color-tomato)",
      }}
    >
      <h3
        className="font-bold text-base mb-1"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm mb-2"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-serif)" }}
      >
        {desc}
      </p>
      <div className="flex gap-3 text-xs" style={{ color: "var(--color-light-text)", fontFamily: "var(--font-serif)" }}>
        <span>⏱ {sure}</span>
        <span>· {zorluk}</span>
      </div>
    </div>
  );
}
