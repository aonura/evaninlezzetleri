import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";

export const metadata: Metadata = {
  title: "Evde Ne Var?",
  description: "Elindeki malzemelerle ne pişirebilirsin?",
};

const results = [
  {
    title: "Yumurtalı Menemen",
    desc: "Domates, biber ve yumurtayla hazırlanan klasik bir Türk kahvaltısı.",
    sure: "15 dk", zorluk: "Kolay",
    not: "Tercihe göre peynir de ekleyebilirsiniz.",
  },
  {
    title: "Peynirli Omlet",
    desc: "Hızlı hazırlanan, doyurucu bir öğün.",
    sure: "10 dk", zorluk: "Kolay",
    not: "Taze otlar ile harika oluyor.",
  },
  {
    title: "Sebzeli Makarna",
    desc: "Elde ne varsa atarak hazırlanan pratik bir makarna.",
    sure: "25 dk", zorluk: "Kolay",
    not: "Rendelenmiş kaşar ile servis edin.",
  },
];

export default function EvdeNeVarPage() {
  return (
    <VintageLayout
      title="Evde Ne Var?"
      subtitle="Elindeki malzemeleri gir, sana uygun tarifler bulalım."
      accentColor="#5c6e3a"
    >
      <div className="grid md:grid-cols-2 gap-8">

        {/* ── Form ── */}
        <div className="eva-notebook" style={{ padding: "1.5rem 1.5rem 1.5rem 68px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.25rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-olive)",
                border: "1.5px solid var(--color-olive)",
                padding: "2px 8px",
              }}
            >
              Alışveriş Notu
            </span>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <Field label="Evdeki malzemeler" htmlFor="malzemeler">
              <textarea
                id="malzemeler"
                rows={4}
                className="eva-field"
                style={{ resize: "none" }}
                placeholder={"örn. domates, soğan, yumurta, peynir, zeytinyağı…"}
              />
            </Field>

            <Field label="Kullanmak istemediklerin" htmlFor="haric" optional>
              <input id="haric" type="text" className="eva-field" placeholder="örn. sarımsak, acı biber…" />
            </Field>

            <Field label="Ne kadar zamanın var?" htmlFor="sure">
              <select id="sure" className="eva-field">
                <option value="">Seçin</option>
                <option>15–20 dakika</option>
                <option>30 dakika</option>
                <option>45 dakika</option>
                <option>1 saat ve üzeri</option>
              </select>
            </Field>

            <Field label="Pişirme ekipmanı" htmlFor="ekipman">
              <select id="ekipman" className="eva-field">
                <option value="">Seçin</option>
                <option>Tencere / tava</option>
                <option>Fırın</option>
                <option>Fırın + ocak</option>
                <option>Sadece ocak</option>
              </select>
            </Field>

            <Field label="Kaç kişilik?" htmlFor="kisi">
              <select id="kisi" className="eva-field">
                <option value="">Seçin</option>
                <option>1 kişi</option>
                <option>2 kişi</option>
                <option>3–4 kişi</option>
                <option>5+ kişi</option>
              </select>
            </Field>

            <button type="submit" className="eva-btn eva-btn-olive" style={{ alignSelf: "flex-start" }}>
              Tarif Öner
            </button>
          </form>
        </div>

        {/* ── Result slips ── */}
        <div>
          <h2 className="eva-section-title" style={{ fontSize: "1.15rem", marginBottom: "1rem" }}>
            Tarif Önerileri
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {results.map((r) => (
              <div
                key={r.title}
                className="eva-suggestion"
                style={{ borderLeftColor: "var(--color-olive)" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    color: "var(--color-ink)",
                    margin: "0 0 0.3rem",
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.85rem", color: "var(--color-muted)", margin: "0 0 0.4rem" }}>
                  {r.desc}
                </p>
                <div style={{ display: "flex", gap: "10px", fontSize: "0.75rem", fontFamily: "var(--font-serif)", color: "var(--color-light-text)", marginBottom: "0.4rem" }}>
                  <span>⏱ {r.sure}</span>
                  <span>· {r.zorluk}</span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.78rem",
                    fontStyle: "italic",
                    color: "var(--color-olive)",
                    borderTop: "1px dashed var(--color-parchment)",
                    paddingTop: "0.4rem",
                    margin: 0,
                  }}
                >
                  <strong>Eva&apos;nın Notu:</strong> {r.not}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VintageLayout>
  );
}

function Field({ label, htmlFor, optional, children }: { label: string; htmlFor: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label htmlFor={htmlFor} style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 600, color: "var(--color-ink-light)" }}>
        {label}
        {optional && <span style={{ fontWeight: 400, marginLeft: "6px", color: "var(--color-light-text)", fontSize: "0.76rem" }}>(isteğe bağlı)</span>}
      </label>
      {children}
    </div>
  );
}
