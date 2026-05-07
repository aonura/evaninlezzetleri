import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";

export const metadata: Metadata = {
  title: "Tarifini Kaydet",
  description: "Kendi tarifini deftere ekle",
};

export default function TarifiniKaydetPage() {
  return (
    <VintageLayout
      title="Tarifini Kaydet"
      subtitle="Aileden öğrendiğin ya da kendi geliştirdiğin tarifleri buraya yaz."
      accentColor="#b89040"
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>

        {/* Notebook wrapper */}
        <div
          className="eva-notebook"
          style={{
            padding: "2rem 2rem 2rem 72px",
            position: "relative",
          }}
        >
          {/* Spiral holes (decorative) */}
          <div style={{ position: "absolute", left: "16px", top: "32px", display: "flex", flexDirection: "column", gap: "32px" }} aria-hidden>
            {[0,1,2,3,4,5,6].map((i) => (
              <div key={i} style={{ width: "14px", height: "14px", borderRadius: "50%", border: "2px solid var(--color-parchment)", backgroundColor: "var(--color-cream)" }} />
            ))}
          </div>

          {/* Notebook header label */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#b89040",
                border: "1.5px solid #b89040",
                padding: "2px 10px",
              }}
            >
              ✦ Tarif Defterim
            </span>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>

            {/* Tarif adı */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label
                htmlFor="tarifadi"
                style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 600, color: "var(--color-muted)" }}
              >
                Tarif Adı
              </label>
              <input
                id="tarifadi"
                type="text"
                className="eva-field"
                placeholder="örn. Annemin Ezogelin Çorbası"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic", background: "transparent", borderLeft: 0, borderRight: 0, borderTop: 0, borderRadius: 0 }}
              />
            </div>

            <Divider />

            {/* Malzemeler */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label htmlFor="malzemeler" style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 600, color: "var(--color-muted)" }}>
                Malzemeler
              </label>
              <textarea
                id="malzemeler"
                rows={5}
                className="eva-field"
                style={{ resize: "none", background: "transparent" }}
                placeholder={"Her satıra bir malzeme yaz:\n2 su bardağı un\n3 yumurta\n…"}
              />
            </div>

            {/* Yapılış */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label htmlFor="yapilis" style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 600, color: "var(--color-muted)" }}>
                Yapılış
              </label>
              <textarea
                id="yapilis"
                rows={7}
                className="eva-field"
                style={{ resize: "none", background: "transparent" }}
                placeholder="Adım adım tarifi buraya yaz…"
              />
            </div>

            {/* Eva'nın Notu */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label
                htmlFor="not"
                style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 600, color: "var(--color-olive)" }}
              >
                Eva&apos;nın Notu
                <span style={{ fontWeight: 400, marginLeft: "6px", fontSize: "0.76rem", color: "var(--color-light-text)" }}>(isteğe bağlı)</span>
              </label>
              <textarea
                id="not"
                rows={3}
                className="eva-field"
                style={{ resize: "none", fontStyle: "italic", background: "transparent" }}
                placeholder="örn. Hamuru çok yoğurmamalısın, yumuşak kalması için…"
              />
            </div>

            <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.73rem", fontStyle: "italic", color: "var(--color-light-text)", textAlign: "center" }}>
              Bu özellik yakında aktif olacak.
            </p>

            <button type="submit" className="eva-btn eva-btn-ink" style={{ alignSelf: "center", minWidth: "180px" }}>
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </VintageLayout>
  );
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", opacity: 0.5 }} aria-hidden>
      <div style={{ flex: 1, height: "1px", background: "var(--color-parchment)" }} />
      <span style={{ color: "var(--color-mustard)", fontFamily: "var(--font-display)", fontSize: "0.9rem" }}>✦</span>
      <div style={{ flex: 1, height: "1px", background: "var(--color-parchment)" }} />
    </div>
  );
}
