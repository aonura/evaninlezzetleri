import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";

export const metadata: Metadata = {
  title: "Bugün Ne Pişirsem?",
  description: "Sana özel tarif önerileri",
};

const suggestions = [
  { title: "Domatesli Makarna", desc: "Taze domateslerle pratik ve lezzetli bir klasik.", sure: "25 dk", zorluk: "Kolay" },
  { title: "Tavuklu Pilav",     desc: "Doyurucu, her öğüne uygun bir ev yemeği.",        sure: "40 dk", zorluk: "Orta"  },
  { title: "Sebzeli Çorba",     desc: "Mevsim sebzelerinden hafif, sıcacık bir çorba.",   sure: "30 dk", zorluk: "Kolay" },
];

export default function BugunNePisirsemPage() {
  return (
    <VintageLayout
      title="Bugün Ne Pişirsem?"
      subtitle="Birkaç bilgi ver, sana uygun tarifler getirelim."
      accentColor="#c0392b"
    >
      <div className="grid md:grid-cols-2 gap-8">

        {/* ── Form — notebook paper style ── */}
        <div className="eva-notebook" style={{ padding: "1.5rem 1.5rem 1.5rem 68px" }}>

          {/* Corner label */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.25rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-tomato)",
                border: "1.5px solid var(--color-tomato)",
                padding: "2px 8px",
              }}
            >
              Tarif Notu
            </span>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <Field label="Kaç kişilik?" htmlFor="kisi">
              <select id="kisi" className="eva-field">
                <option value="">Seçin</option>
                <option>1 kişi</option>
                <option>2 kişi</option>
                <option>3–4 kişi</option>
                <option>5+ kişi</option>
              </select>
            </Field>

            <Field label="Öğün tipi" htmlFor="ogun">
              <select id="ogun" className="eva-field">
                <option value="">Seçin</option>
                <option>Kahvaltı</option>
                <option>Öğle yemeği</option>
                <option>Akşam yemeği</option>
                <option>Atıştırmalık</option>
              </select>
            </Field>

            <Field label="Nasıl bir şey olsun?" htmlFor="tercih">
              <select id="tercih" className="eva-field">
                <option value="">Seçin</option>
                <option>Hafif bir şeyler</option>
                <option>Doyurucu bir yemek</option>
                <option>Hızlı hazırlanabilen</option>
                <option>Biraz özenli, güzel bir yemek</option>
                <option>Tatlı bir şey</option>
              </select>
            </Field>

            <Field label="Ana malzeme var mı?" htmlFor="malzeme" optional>
              <input id="malzeme" type="text" className="eva-field" placeholder="örn. tavuk, patates, kabak…" />
            </Field>

            <button type="submit" className="eva-btn" style={{ marginTop: "0.5rem", alignSelf: "flex-start" }}>
              Önerileri Hazırla
            </button>
          </form>
        </div>

        {/* ── Suggestion cards ── */}
        <div>
          <h2
            className="eva-section-title"
            style={{ fontSize: "1.15rem", marginBottom: "1rem" }}
          >
            Tarif Önerileri
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {suggestions.map((s) => (
              <div key={s.title} className="eva-suggestion">
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    color: "var(--color-ink)",
                    margin: "0 0 0.3rem",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.85rem",
                    color: "var(--color-muted)",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {s.desc}
                </p>
                <div style={{ display: "flex", gap: "12px", fontSize: "0.75rem", fontFamily: "var(--font-serif)", color: "var(--color-light-text)" }}>
                  <span>⏱ {s.sure}</span>
                  <span>· {s.zorluk}</span>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: "1rem",
              fontFamily: "var(--font-serif)",
              fontSize: "0.75rem",
              fontStyle: "italic",
              color: "var(--color-light-text)",
              textAlign: "center",
            }}
          >
            Formu doldurarak sana özel öneriler getirebiliriz.
          </p>
        </div>
      </div>
    </VintageLayout>
  );
}

function Field({ label, htmlFor, optional, children }: { label: string; htmlFor: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label
        htmlFor={htmlFor}
        style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 600, color: "var(--color-ink-light)" }}
      >
        {label}
        {optional && (
          <span style={{ fontWeight: 400, marginLeft: "6px", color: "var(--color-light-text)", fontSize: "0.76rem" }}>
            (isteğe bağlı)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
