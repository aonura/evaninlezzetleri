import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import DecorativeDivider from "@/components/vintage/DecorativeDivider";

export const metadata: Metadata = {
  title: "Haftalık Menü",
  description: "7 günlük yemek planı",
};

const gunler = [
  { gun: "Pazartesi", yemek: "Mercimek Çorbası", tali: "" },
  { gun: "Salı", yemek: "Etli Patates Yemeği", tali: "Sütlaç" },
  { gun: "Çarşamba", yemek: "Tavuklu Pilav", tali: "" },
  { gun: "Perşembe", yemek: "Zeytinyağlı Kabak", tali: "İrmik Tatlısı" },
  { gun: "Cuma", yemek: "Karnıyarık", tali: "" },
  { gun: "Cumartesi", yemek: "Fırında Sebzeli Köfte", tali: "Mozaik Pasta" },
  { gun: "Pazar", yemek: "Kuru Fasulye + Pilav", tali: "Kabak Tatlısı" },
];

export default function HaftalikMenuPage() {
  return (
    <VintageLayout
      title="Haftalık Menü"
      subtitle="7 günlük yemek planınızı önceden hazırlayın."
    >
      <div className="grid md:grid-cols-2 gap-8">

        {/* Form */}
        <div>
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
          >
            Menü Tercihlerim
          </h2>

          <form className="flex flex-col gap-5">

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="kisi"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Kaç kişilik?
              </label>
              <select id="kisi" className="vintage-field w-full rounded-none">
                <option value="">Seçin</option>
                <option>1–2 kişi</option>
                <option>3–4 kişi</option>
                <option>5+ kişi</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="butce"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Haftalık bütçe
              </label>
              <select id="butce" className="vintage-field w-full rounded-none">
                <option value="">Seçin</option>
                <option>Ekonomik</option>
                <option>Orta</option>
                <option>Rahat</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="tarz"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Yemek tarzı
              </label>
              <select id="tarz" className="vintage-field w-full rounded-none">
                <option value="">Seçin</option>
                <option>Klasik Türk yemekleri</option>
                <option>Hafif ve zeytinyağlı</option>
                <option>Karışık</option>
                <option>Vejeteryan</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="tatli"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Tatlı olsun mu?
              </label>
              <select id="tatli" className="vintage-field w-full rounded-none">
                <option value="">Seçin</option>
                <option>Evet, haftada birkaç gün</option>
                <option>Sadece hafta sonu</option>
                <option>Hayır</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 py-3 px-6 font-semibold uppercase tracking-widest text-sm transition-all duration-200 hover:opacity-85 active:scale-95"
              style={{
                backgroundColor: "var(--color-ink)",
                color: "var(--color-aged)",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.12em",
                border: "2px solid var(--color-ink-light)",
              }}
            >
              Menü Hazırla
            </button>
          </form>
        </div>

        {/* Weekly menu board */}
        <div>
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
          >
            Örnek Haftalık Menü
          </h2>

          <DecorativeDivider color="var(--color-mustard)" />

          <div
            className="mt-4"
            style={{
              border: "2px solid var(--color-parchment)",
              backgroundColor: "var(--color-warm-white)",
            }}
          >
            {/* Calendar header */}
            <div
              className="px-4 py-2 text-center text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: "var(--color-ink)",
                color: "var(--color-aged)",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.15em",
              }}
            >
              Bu Haftanın Menüsü
            </div>

            {gunler.map(({ gun, yemek, tali }, i) => (
              <div
                key={gun}
                className="flex items-start gap-3 px-4 py-3"
                style={{
                  borderBottom: i < gunler.length - 1 ? "1px dashed var(--color-parchment)" : undefined,
                }}
              >
                <span
                  className="text-xs font-bold uppercase w-20 shrink-0 pt-0.5"
                  style={{ color: "var(--color-tomato)", fontFamily: "var(--font-serif)", letterSpacing: "0.08em" }}
                >
                  {gun}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}
                  >
                    {yemek}
                  </span>
                  {tali && (
                    <span
                      className="text-xs italic"
                      style={{ color: "var(--color-rust)", fontFamily: "var(--font-serif)" }}
                    >
                      Tatlı: {tali}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p
            className="mt-3 text-xs text-center italic"
            style={{ color: "var(--color-light-text)", fontFamily: "var(--font-serif)" }}
          >
            Formu doldurarak kişiselleştirilmiş bir menü oluşturabilirsiniz.
          </p>
        </div>
      </div>
    </VintageLayout>
  );
}
