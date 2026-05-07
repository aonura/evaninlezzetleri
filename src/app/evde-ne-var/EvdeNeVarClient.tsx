"use client";

import { useState, useRef } from "react";

/* ── Types ── */
interface Recipe {
  title: string;
  description: string;
  time: string;
  difficulty: string;
  ingredients: string[];
  steps: string[];
  evaNote?: string;
}

type Status = "idle" | "loading" | "success" | "error";

/* ── Main component ── */
export default function EvdeNeVarClient() {
  const [status, setStatus]   = useState<Status>("idle");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [errorMsg, setError]  = useState("");
  const resultsRef            = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd   = new FormData(form);

    const ingredients = (fd.get("malzemeler") as string ?? "").trim();
    if (!ingredients) {
      setStatus("error");
      setError("Lütfen en az bir malzeme gir.");
      return;
    }

    setStatus("loading");
    setRecipes([]);
    setError("");

    try {
      const res = await fetch("/api/evde-ne-var", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ingredients,
          avoidIngredients: fd.get("haric")    ?? "",
          cookingTime:      fd.get("sure")      ?? "",
          equipment:        fd.get("ekipman")   ?? "",
          servings:         fd.get("kisi")      ?? "",
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error ?? "Bir hata oluştu.");
      }

      setRecipes(data.recipes ?? []);
      setStatus("success");

      // Scroll to results smoothly
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Bir şey ters gitti. Lütfen tekrar dene.";
      setError(msg);
      setStatus("error");
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {/* ── FORM — notebook style ── */}
      <div
        className="eva-notebook"
        style={{ padding: "1.5rem 1.5rem 1.5rem 68px" }}
      >
        {/* Notebook label */}
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
            Mutfak Notu
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
        >
          <Field label="Evdeki malzemeler" htmlFor="malzemeler">
            <textarea
              id="malzemeler"
              name="malzemeler"
              rows={4}
              className="eva-field"
              style={{ resize: "none" }}
              placeholder="örn. domates, soğan, yumurta, peynir, zeytinyağı…"
              disabled={status === "loading"}
            />
          </Field>

          <Field label="Kullanmak istemediklerin" htmlFor="haric" optional>
            <input
              id="haric"
              name="haric"
              type="text"
              className="eva-field"
              placeholder="örn. sarımsak, acı biber…"
              disabled={status === "loading"}
            />
          </Field>

          <Field label="Ne kadar zamanın var?" htmlFor="sure">
            <select id="sure" name="sure" className="eva-field" disabled={status === "loading"}>
              <option value="">Seçin</option>
              <option>15–20 dakika</option>
              <option>30 dakika</option>
              <option>45 dakika</option>
              <option>1 saat ve üzeri</option>
            </select>
          </Field>

          <Field label="Pişirme ekipmanı" htmlFor="ekipman">
            <select id="ekipman" name="ekipman" className="eva-field" disabled={status === "loading"}>
              <option value="">Seçin</option>
              <option>Tencere / tava</option>
              <option>Fırın</option>
              <option>Fırın + ocak</option>
              <option>Sadece ocak</option>
            </select>
          </Field>

          <Field label="Kaç kişilik?" htmlFor="kisi">
            <select id="kisi" name="kisi" className="eva-field" disabled={status === "loading"}>
              <option value="">Seçin</option>
              <option>1 kişi</option>
              <option>2 kişi</option>
              <option>3–4 kişi</option>
              <option>5+ kişi</option>
            </select>
          </Field>

          {/* Error message */}
          {status === "error" && (
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.82rem",
                color: "var(--color-tomato)",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="eva-btn eva-btn-olive"
            style={{ alignSelf: "flex-start", opacity: status === "loading" ? 0.65 : 1 }}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Hazırlanıyor…" : "Tarif Öner"}
          </button>
        </form>
      </div>

      {/* ── RESULTS ── */}
      <div ref={resultsRef}>
        <h2
          className="eva-section-title"
          style={{ fontSize: "1.15rem", marginBottom: "1rem" }}
        >
          Tarif Önerileri
        </h2>

        {/* Loading state */}
        {status === "loading" && (
          <div
            style={{
              padding: "2rem 1rem",
              textAlign: "center",
              border: "1.5px dashed var(--color-parchment)",
              backgroundColor: "#f8f3e6",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "var(--color-muted)",
                margin: 0,
              }}
            >
              Eva tarifleri hazırlıyor…
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.78rem",
                color: "var(--color-light-text)",
                marginTop: "0.5rem",
              }}
            >
              Bir dakika, malzemelere bakıyorum…
            </p>
          </div>
        )}

        {/* Idle placeholder */}
        {status === "idle" && (
          <PlaceholderSlips />
        )}

        {/* Success — AI results */}
        {status === "success" && recipes.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {recipes.map((recipe, i) => (
              <RecipeResultCard key={i} recipe={recipe} index={i} />
            ))}
          </div>
        )}

        {/* Error fallback */}
        {status === "error" && (
          <div
            style={{
              padding: "1rem",
              border: "1.5px solid #c09090",
              backgroundColor: "#f8f0f0",
              fontFamily: "var(--font-serif)",
              fontSize: "0.85rem",
              color: "var(--color-tomato)",
            }}
          >
            {errorMsg || "Bir şey ters gitti. Lütfen tekrar dene."}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Recipe result card ── */
function RecipeResultCard({ recipe, index }: { recipe: Recipe; index: number }) {
  const [open, setOpen] = useState(true);

  const borderColor = ["#6a9850", "#b07848", "#c49020"][index % 3];
  const bgColor     = ["#eaf2e0", "#f2e4d0", "#fdf5d8"][index % 3];

  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        outline: `1px dashed ${borderColor}55`,
        outlineOffset: "-5px",
        boxShadow: `3px 4px 0 ${borderColor}55`,
        backgroundColor: bgColor,
        backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 26px,${borderColor}20 26px,${borderColor}20 27px)`,
        overflow: "hidden",
      }}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          padding: "0.65rem 0.9rem",
          backgroundColor: `${borderColor}20`,
          borderBottom: `1px solid ${borderColor}44`,
          cursor: "pointer",
          border: "none",
          textAlign: "left",
        }}
        aria-expanded={open}
      >
        {/* Number badge */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: borderColor,
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontSize: "0.78rem",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {index + 1}
        </span>

        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontStyle: "italic",
            fontWeight: 700,
            color: "var(--color-ink)",
            flex: 1,
          }}
        >
          {recipe.title}
        </span>

        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.7rem",
            color: "var(--color-muted)",
          }}
        >
          {recipe.time} · {recipe.difficulty}
        </span>

        <span style={{ color: borderColor, fontSize: "0.7rem" }} aria-hidden>
          {open ? "▲" : "▼"}
        </span>
      </button>

      {/* Body */}
      {open && (
        <div style={{ padding: "0.85rem 0.9rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.85rem",
              color: "var(--color-muted)",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            {recipe.description}
          </p>

          {/* Ingredients */}
          {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 && (
            <div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: borderColor,
                  margin: "0 0 0.4rem",
                }}
              >
                Malzemeler
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.2rem",
                }}
              >
                {recipe.ingredients.map((ing, j) => (
                  <li
                    key={j}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.82rem",
                      color: "var(--color-muted)",
                    }}
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Steps */}
          {Array.isArray(recipe.steps) && recipe.steps.length > 0 && (
            <div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: borderColor,
                  margin: "0 0 0.4rem",
                }}
              >
                Yapılış
              </p>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: "1.1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                {recipe.steps.map((step, j) => (
                  <li
                    key={j}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.82rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Eva's note */}
          {recipe.evaNote && (
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.78rem",
                fontStyle: "italic",
                color: "var(--color-olive)",
                borderTop: `1px dashed ${borderColor}44`,
                paddingTop: "0.6rem",
                margin: 0,
              }}
            >
              <span style={{ fontWeight: 700 }}>Eva&apos;nın Notu:</span> {recipe.evaNote}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Idle placeholder slips ── */
function PlaceholderSlips() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {["Tarif 1", "Tarif 2", "Tarif 3"].map((label, i) => (
        <div
          key={i}
          className="eva-suggestion"
          style={{
            borderLeftColor: "var(--color-olive)",
            opacity: 0.5,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "var(--color-muted)",
              margin: "0 0 0.3rem",
            }}
          >
            {label}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.78rem",
              color: "var(--color-light-text)",
              margin: 0,
            }}
          >
            Malzemelerini gir, tarif burada belirecek.
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Shared field wrapper ── */
function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label
        htmlFor={htmlFor}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.82rem",
          fontWeight: 600,
          color: "var(--color-ink-light)",
        }}
      >
        {label}
        {optional && (
          <span
            style={{
              fontWeight: 400,
              marginLeft: "6px",
              color: "var(--color-light-text)",
              fontSize: "0.76rem",
            }}
          >
            (isteğe bağlı)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
