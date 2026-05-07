import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";

export const metadata: Metadata = {
  title: "Haftalık Menü",
  description: "7 günlük yemek planı",
};

const gunler = [
  { gun: "Pazartesi", yemek: "Mercimek Çorbası + Pilav",          tatli: "" },
  { gun: "Salı",      yemek: "Etli Patates Yemeği",               tatli: "Sütlaç" },
  { gun: "Çarşamba",  yemek: "Tavuklu Pilav + Salata",            tatli: "" },
  { gun: "Perşembe",  yemek: "Zeytinyağlı Kabak + Yoğurt",        tatli: "İrmik Tatlısı" },
  { gun: "Cuma",      yemek: "Karnıyarık + Bulgur Pilavı",        tatli: "" },
  { gun: "Cumartesi", yemek: "Fırında Sebzeli Köfte",             tatli: "Mozaik Pasta" },
  { gun: "Pazar",     yemek: "Kuru Fasulye + Pilav + Turşu",      tatli: "Kabak Tatlısı" },
];

export default function HaftalikMenuPage() {
  return (
    <VintageLayout
      title="Haftalık Menü"
      subtitle="7 günlük yemek planınızı önceden hazırlayın."
      accentColor="#8a9870"
    >
      <div className="grid md:grid-cols-2 gap-8">

        {/* ── Preferences form ── */}
        <div className="eva-notebook" style={{ padding: "1.5rem 1.5rem 1.5rem 68px" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#8a9870",
                border: "1.5px solid #8a9870",
                padding: "2px 8px",
              }}
            >
              Menü Tercihlerim
            </span>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {[
              { id: "kisi",  label: "Kaç kişilik?",   opts: ["1–2 kişi", "3–4 kişi", "5+ kişi"] },
              { id: "butce", label: "Haftalık bütçe",  opts: ["Ekonomik", "Orta", "Rahat"] },
              { id: "tarz",  label: "Yemek tarzı",     opts: ["Klasik Türk yemekleri", "Hafif ve zeytinyağlı", "Karışık", "Vejeteryan"] },
              { id: "tatli", label: "Tatlı olsun mu?", opts: ["Evet, haftada birkaç gün", "Sadece hafta sonu", "Hayır"] },
            ].map(({ id, label, opts }) => (
              <div key={id} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label htmlFor={id} style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 600, color: "var(--color-ink-light)" }}>
                  {label}
                </label>
                <select id={id} className="eva-field">
                  <option value="">Seçin</option>
                  {opts.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}

            <button type="submit" className="eva-btn" style={{ alignSelf: "flex-start", backgroundColor: "#8a9870", borderColor: "#5c6848" }}>
              Menü Hazırla
            </button>
          </form>
        </div>

        {/* ── Weekly planner board ── */}
        <div>
          <h2 className="eva-section-title" style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
            Örnek Haftalık Menü
          </h2>

          <div
            style={{
              border: "2px solid var(--color-parchment)",
              boxShadow: "3px 4px 0 rgba(180,140,60,0.18)",
              overflow: "hidden",
            }}
          >
            {/* Board header */}
            <div
              style={{
                padding: "0.6rem 1rem",
                backgroundColor: "var(--color-ink)",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "var(--color-aged)",
                }}
              >
                Bu Haftanın Menüsü
              </span>
            </div>

            {/* Day rows */}
            {gunler.map(({ gun, yemek, tatli }, i) => (
              <div
                key={gun}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "0.65rem 1rem",
                  borderBottom: i < gunler.length - 1 ? "1px dashed var(--color-parchment)" : undefined,
                  backgroundColor: i % 2 === 0 ? "#faf7f0" : "#f5efe0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--color-tomato)",
                    width: "72px",
                    flexShrink: 0,
                    paddingTop: "2px",
                  }}
                >
                  {gun}
                </span>
                <div>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.88rem", color: "var(--color-ink)", fontWeight: 600 }}>
                    {yemek}
                  </span>
                  {tatli && (
                    <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.75rem", fontStyle: "italic", color: "var(--color-rust)", marginTop: "1px" }}>
                      Tatlı: {tatli}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "0.75rem", fontFamily: "var(--font-serif)", fontSize: "0.73rem", fontStyle: "italic", color: "var(--color-light-text)", textAlign: "center" }}>
            Formu doldurarak kişiselleştirilmiş bir menü oluşturabilirsiniz.
          </p>
        </div>
      </div>
    </VintageLayout>
  );
}
