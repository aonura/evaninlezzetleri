import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import DecorativeDivider from "@/components/vintage/DecorativeDivider";

export const metadata: Metadata = {
  title: "Evde Ne Var?",
  description: "Elindeki malzemelerle ne pişirebilirsin?",
};

export default function EvdeNeVarPage() {
  return (
    <VintageLayout
      title="Evde Ne Var?"
      subtitle="Elindeki malzemeleri gir, sana uygun tarifler bulalım."
    >
      <div className="grid md:grid-cols-2 gap-8">

        {/* Form */}
        <div>
          <form className="flex flex-col gap-5">

            {/* Evdeki malzemeler */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="malzemeler"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Evdeki malzemeler
              </label>
              <textarea
                id="malzemeler"
                rows={4}
                placeholder="örn. domates, soğan, yumurta, peynir, zeytinyağı…"
                className="vintage-field w-full rounded-none resize-none"
                style={{ fontFamily: "var(--font-serif)" }}
              />
            </div>

            {/* Kullanmak istemediklerin */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="haric"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Kullanmak istemediklerin
                <span
                  className="font-normal ml-1"
                  style={{ color: "var(--color-light-text)" }}
                >
                  (isteğe bağlı)
                </span>
              </label>
              <input
                id="haric"
                type="text"
                placeholder="örn. sarımsak, acı biber…"
                className="vintage-field w-full rounded-none"
                style={{ fontFamily: "var(--font-serif)" }}
              />
            </div>

            {/* Süre */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="sure"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Ne kadar zamanın var?
              </label>
              <select id="sure" className="vintage-field w-full rounded-none">
                <option value="">Seçin</option>
                <option>15–20 dakika</option>
                <option>30 dakika</option>
                <option>45 dakika</option>
                <option>1 saat ve üzeri</option>
              </select>
            </div>

            {/* Ekipman */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ekipman"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink-light)" }}
              >
                Pişirme ekipmanı
              </label>
              <select id="ekipman" className="vintage-field w-full rounded-none">
                <option value="">Seçin</option>
                <option>Tencere / tava</option>
                <option>Fırın</option>
                <option>Fırın + ocak</option>
                <option>Sadece ocak</option>
              </select>
            </div>

            {/* Kişi sayısı */}
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
                <option>1 kişi</option>
                <option>2 kişi</option>
                <option>3–4 kişi</option>
                <option>5+ kişi</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 py-3 px-6 font-semibold uppercase tracking-widest text-sm transition-all duration-200 hover:opacity-85 active:scale-95"
              style={{
                backgroundColor: "var(--color-olive)",
                color: "#fff",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.12em",
                border: "2px solid var(--color-olive-light)",
              }}
            >
              Tarif Öner
            </button>
          </form>
        </div>

        {/* Result placeholder cards */}
        <div>
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
          >
            Tarif Önerileri
          </h2>

          <DecorativeDivider color="var(--color-olive)" />

          {[
            {
              title: "Yumurtalı Menemen",
              desc: "Domates, biber ve yumurtayla hazırlanan klasik bir Türk kahvaltısı.",
              sure: "15 dk",
              zorluk: "Kolay",
              not: "Tercihe göre peynir de ekleyebilirsiniz.",
            },
            {
              title: "Peynirli Omlet",
              desc: "Hızlı hazırlanan, doyurucu bir öğün.",
              sure: "10 dk",
              zorluk: "Kolay",
              not: "Taze otlar ile harika oluyor.",
            },
            {
              title: "Sebzeli Makarna",
              desc: "Elde ne varsa atarak hazırladığınız pratik bir makarna.",
              sure: "25 dk",
              zorluk: "Kolay",
              not: "Rendelenmiş kaşar ile servis edin.",
            },
          ].map((r) => (
            <ResultCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </VintageLayout>
  );
}

function ResultCard({
  title,
  desc,
  sure,
  zorluk,
  not,
}: {
  title: string;
  desc: string;
  sure: string;
  zorluk: string;
  not: string;
}) {
  return (
    <div
      className="mb-4 p-4 relative"
      style={{
        backgroundColor: "var(--color-warm-white)",
        border: "1.5px solid var(--color-parchment)",
        boxShadow: "1px 2px 0 var(--color-parchment)",
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
      <div className="flex gap-3 text-xs mb-2" style={{ color: "var(--color-light-text)", fontFamily: "var(--font-serif)" }}>
        <span>⏱ {sure}</span>
        <span>· {zorluk}</span>
      </div>
      <p
        className="text-xs italic pt-2"
        style={{
          color: "var(--color-olive)",
          fontFamily: "var(--font-serif)",
          borderTop: "1px dashed var(--color-parchment)",
        }}
      >
        Eva&apos;nın Notu: {not}
      </p>
    </div>
  );
}
