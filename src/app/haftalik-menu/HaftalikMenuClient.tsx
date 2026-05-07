"use client";

import { useState } from "react";

interface DayMenu {
  day:    string;
  lunch:  string;
  dinner: string;
  note?:  string;
}

type Status = "idle" | "loading" | "success" | "error";

/* Static placeholder — same data as before */
const PLACEHOLDER: DayMenu[] = [
  { day: "Pazartesi", lunch: "Mercimek Çorbası", dinner: "Pilav + Salata",       note: "" },
  { day: "Salı",      lunch: "Ezogelin Çorbası", dinner: "Etli Patates",         note: "Sütlaç tatlısı eklenebilir." },
  { day: "Çarşamba",  lunch: "Yoğurtlu Kabak",   dinner: "Tavuklu Pilav",        note: "" },
  { day: "Perşembe",  lunch: "Nohutlu Salata",    dinner: "Zeytinyağlı Kabak",   note: "İrmik tatlısı hafif bir son." },
  { day: "Cuma",      lunch: "Peynirli Börek",    dinner: "Karnıyarık",          note: "" },
  { day: "Cumartesi", lunch: "Menemen",            dinner: "Fırında Sebzeli Köfte", note: "Hafta sonu pasta fırsatı." },
  { day: "Pazar",     lunch: "Tarhana Çorbası",   dinner: "Kuru Fasulye + Pilav", note: "Turşu unutulmasın." },
];

export default function HaftalikMenuClient() {
  const [status,   setStatus]   = useState<Status>("idle");
  const [week,     setWeek]     = useState<DayMenu[]>(PLACEHOLDER);
  const [evaNote,  setEvaNOte]  = useState("");
  const [errorMsg, setError]    = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/haftalik-menu", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          peopleCount:    fd.get("kisi")  ?? "",
          budget:         fd.get("butce") ?? "",
          style:          fd.get("tarz")  ?? "",
          includeDessert: fd.get("tatli") ?? "",
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error ?? "Hata");

      setWeek(data.week ?? []);
      setEvaNOte(data.evaNote ?? "");
      setStatus("success");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Bir şey ters gitti. Lütfen tekrar dene.");
      setStatus("error");
    }
  }

  const displayWeek  = week;
  const isPlaceholder = status === "idle";
  const boardTitle   = status === "success" ? "Eva'nın Haftalık Menüsü" : "Örnek Haftalık Menü";

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {/* ── FORM ── */}
      <div className="eva-notebook" style={{ padding: "1.5rem 1.5rem 1.5rem 68px" }}>
        <div style={{ marginBottom: "1.25rem" }}>
          <span style={{
            fontFamily: "var(--font-serif)", fontSize: "0.65rem", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em",
            color: "#8a9870", border: "1.5px solid #8a9870", padding: "2px 8px",
          }}>
            Menü Tercihlerim
          </span>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
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
              <select id={id} name={id} className="eva-field" disabled={status === "loading"}>
                <option value="">Seçin</option>
                {opts.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}

          {status === "error" && (
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", color: "var(--color-tomato)", fontStyle: "italic", margin: 0 }}>
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="eva-btn"
            style={{ alignSelf: "flex-start", backgroundColor: "#8a9870", borderColor: "#5c6848", opacity: status === "loading" ? 0.65 : 1 }}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Hazırlanıyor…" : "Menü Hazırla"}
          </button>
        </form>
      </div>

      {/* ── PLANNER BOARD ── */}
      <div>
        <h2 className="eva-section-title" style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          {boardTitle}
        </h2>

        {status === "loading" && (
          <div style={{ padding: "1.5rem 1rem", textAlign: "center", border: "1.5px dashed var(--color-parchment)", backgroundColor: "#f8f3e6" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontStyle: "italic", color: "var(--color-muted)", margin: 0 }}>
              Eva haftalık menüyü hazırlıyor…
            </p>
          </div>
        )}

        {status !== "loading" && (
          <>
            <div style={{
              border: "2px solid var(--color-parchment)",
              boxShadow: "3px 4px 0 rgba(180,140,60,0.18)",
              overflow: "hidden",
              opacity: isPlaceholder ? 0.6 : 1,
              transition: "opacity 0.3s",
            }}>
              {/* Board header */}
              <div style={{ padding: "0.6rem 1rem", backgroundColor: "var(--color-ink)", textAlign: "center" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--color-aged)" }}>
                  {boardTitle}
                </span>
              </div>

              {/* Day rows */}
              {displayWeek.map(({ day, lunch, dinner, note }, i) => (
                <div
                  key={day}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "0.6rem 1rem",
                    borderBottom: i < displayWeek.length - 1 ? "1px dashed var(--color-parchment)" : undefined,
                    backgroundColor: i % 2 === 0 ? "#faf7f0" : "#f5efe0",
                  }}
                >
                  {/* Day label */}
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-tomato)", width: "70px", flexShrink: 0, paddingTop: "2px" }}>
                    {day}
                  </span>

                  {/* Meals */}
                  <div style={{ flex: 1 }}>
                    {lunch && (
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.8rem", color: "var(--color-muted)", margin: "0 0 1px", fontStyle: "italic" }}>
                        Öğle: {lunch}
                      </p>
                    )}
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.85rem", color: "var(--color-ink)", fontWeight: 600, margin: "0 0 1px" }}>
                      {dinner}
                    </p>
                    {note && (
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.72rem", fontStyle: "italic", color: "var(--color-rust)", margin: 0 }}>
                        {note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Eva's general note */}
            {evaNote && status === "success" && (
              <p style={{ marginTop: "0.75rem", fontFamily: "var(--font-serif)", fontSize: "0.78rem", fontStyle: "italic", color: "var(--color-olive)" }}>
                <strong>Eva&apos;nın Notu:</strong> {evaNote}
              </p>
            )}

            {isPlaceholder && (
              <p style={{ marginTop: "0.75rem", fontFamily: "var(--font-serif)", fontSize: "0.73rem", fontStyle: "italic", color: "var(--color-light-text)", textAlign: "center" }}>
                Formu doldurarak kişiselleştirilmiş bir menü oluşturabilirsiniz.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
