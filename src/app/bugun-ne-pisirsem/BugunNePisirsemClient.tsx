"use client";

import { useState } from "react";

interface Suggestion {
  title:       string;
  description: string;
  why?:        string;
  time:        string;
  difficulty:  string;
  evaNote?:    string;
}

type Status = "idle" | "loading" | "success" | "error";

/* Static placeholder data shown before AI call */
const PLACEHOLDERS: Suggestion[] = [
  { title: "Domatesli Makarna",  description: "Taze domateslerle pratik ve lezzetli bir klasik.", time: "25 dk", difficulty: "Kolay" },
  { title: "Tavuklu Pilav",      description: "Doyurucu, her öğüne uygun bir ev yemeği.",         time: "40 dk", difficulty: "Orta"  },
  { title: "Sebzeli Çorba",      description: "Mevsim sebzelerinden hafif, sıcacık bir çorba.",    time: "30 dk", difficulty: "Kolay" },
];

export default function BugunNePisirsemClient() {
  const [status,      setStatus]      = useState<Status>("idle");
  const [suggestions, setSuggestions] = useState<Suggestion[]>(PLACEHOLDERS);
  const [errorMsg,    setError]       = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/bugun-ne-pisirsem", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          peopleCount:    fd.get("kisi")    ?? "",
          mealType:       fd.get("ogun")    ?? "",
          style:          fd.get("tercih")  ?? "",
          mainIngredient: fd.get("malzeme") ?? "",
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error ?? "Hata");

      setSuggestions(data.suggestions ?? []);
      setStatus("success");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Bir şey ters gitti. Lütfen tekrar dene.");
      setStatus("error");
    }
  }

  const displayList = status === "success" ? suggestions : PLACEHOLDERS;
  const isPlaceholder = status === "idle" || status === "loading";

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {/* ── FORM ── */}
      <div className="eva-notebook" style={{ padding: "1.5rem 1.5rem 1.5rem 68px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.25rem" }}>
          <span style={{
            fontFamily: "var(--font-serif)", fontSize: "0.65rem", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em",
            color: "var(--color-tomato)", border: "1.5px solid var(--color-tomato)", padding: "2px 8px",
          }}>
            Tarif Notu
          </span>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          <Field label="Kaç kişilik?" htmlFor="kisi">
            <select id="kisi" name="kisi" className="eva-field" disabled={status === "loading"}>
              <option value="">Seçin</option>
              <option>1 kişi</option>
              <option>2 kişi</option>
              <option>3–4 kişi</option>
              <option>5+ kişi</option>
            </select>
          </Field>

          <Field label="Öğün tipi" htmlFor="ogun">
            <select id="ogun" name="ogun" className="eva-field" disabled={status === "loading"}>
              <option value="">Seçin</option>
              <option>Kahvaltı</option>
              <option>Öğle yemeği</option>
              <option>Akşam yemeği</option>
              <option>Atıştırmalık</option>
            </select>
          </Field>

          <Field label="Nasıl bir şey olsun?" htmlFor="tercih">
            <select id="tercih" name="tercih" className="eva-field" disabled={status === "loading"}>
              <option value="">Seçin</option>
              <option>Hafif bir şeyler</option>
              <option>Doyurucu bir yemek</option>
              <option>Hızlı hazırlanabilen</option>
              <option>Biraz özenli, güzel bir yemek</option>
              <option>Tatlı bir şey</option>
            </select>
          </Field>

          <Field label="Ana malzeme var mı?" htmlFor="malzeme" optional>
            <input
              id="malzeme" name="malzeme" type="text"
              className="eva-field" placeholder="örn. tavuk, patates, kabak…"
              disabled={status === "loading"}
            />
          </Field>

          {status === "error" && (
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", color: "var(--color-tomato)", fontStyle: "italic", margin: 0 }}>
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="eva-btn"
            style={{ marginTop: "0.5rem", alignSelf: "flex-start", opacity: status === "loading" ? 0.65 : 1 }}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Hazırlanıyor…" : "Önerileri Hazırla"}
          </button>
        </form>
      </div>

      {/* ── RESULTS ── */}
      <div>
        <h2 className="eva-section-title" style={{ fontSize: "1.15rem", marginBottom: "1rem" }}>
          Tarif Önerileri
        </h2>

        {status === "loading" && (
          <div style={{ padding: "1.5rem 1rem", textAlign: "center", border: "1.5px dashed var(--color-parchment)", backgroundColor: "#f8f3e6" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontStyle: "italic", color: "var(--color-muted)", margin: 0 }}>
              Eva önerileri hazırlıyor…
            </p>
          </div>
        )}

        {status !== "loading" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {displayList.map((s, i) => (
              <SuggestionCard key={i} s={s} faded={isPlaceholder} index={i} />
            ))}
          </div>
        )}

        {isPlaceholder && status !== "loading" && (
          <p style={{ marginTop: "1rem", fontFamily: "var(--font-serif)", fontSize: "0.75rem", fontStyle: "italic", color: "var(--color-light-text)", textAlign: "center" }}>
            Formu doldurarak sana özel öneriler getirebiliriz.
          </p>
        )}
      </div>
    </div>
  );
}

function SuggestionCard({ s, faded, index }: { s: Suggestion; faded: boolean; index: number }) {
  const accent = ["var(--color-tomato)", "#b07848", "#c49020"][index % 3];
  return (
    <div
      className="eva-suggestion"
      style={{ borderLeftColor: accent, opacity: faded ? 0.5 : 1, transition: "opacity 0.3s" }}
    >
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontStyle: "italic", color: "var(--color-ink)", margin: "0 0 0.3rem" }}>
        {s.title}
      </h3>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.85rem", color: "var(--color-muted)", margin: "0 0 0.35rem" }}>
        {s.description}
      </p>
      {s.why && (
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.78rem", color: "var(--color-muted)", fontStyle: "italic", margin: "0 0 0.35rem", opacity: 0.8 }}>
          {s.why}
        </p>
      )}
      <div style={{ display: "flex", gap: "10px", fontSize: "0.75rem", fontFamily: "var(--font-serif)", color: "var(--color-light-text)", marginBottom: s.evaNote ? "0.4rem" : 0 }}>
        <span>⏱ {s.time}</span>
        {s.difficulty && <span>· {s.difficulty}</span>}
      </div>
      {s.evaNote && (
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.78rem", fontStyle: "italic", color: "var(--color-olive)", borderTop: "1px dashed var(--color-parchment)", paddingTop: "0.4rem", margin: 0 }}>
          <strong>Eva&apos;nın Notu:</strong> {s.evaNote}
        </p>
      )}
    </div>
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
