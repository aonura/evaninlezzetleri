"use client";
/* Improved VintageRecipeCard — cookbook-section style, closer to homepage tiles */

interface VintageRecipeCardProps {
  title: string;
  description: string;
  prepTime: string;
  difficulty: "Kolay" | "Orta" | "Zor";
  category?: string;
  note?: string;
}

const DIFFICULTY: Record<string, { color: string; bg: string }> = {
  Kolay: { color: "#3c5c28", bg: "#d4e8c0" },
  Orta:  { color: "#7a5c10", bg: "#f5d070" },
  Zor:   { color: "#7a2010", bg: "#f0c8b8" },
};

export default function VintageRecipeCard({
  title,
  description,
  prepTime,
  difficulty,
  category,
  note,
}: VintageRecipeCardProps) {
  const diff = DIFFICULTY[difficulty] ?? DIFFICULTY.Kolay;

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "#faf7f0",
        border: "2px solid var(--color-parchment)",
        outline: "1px solid rgba(180,140,60,0.25)",
        outlineOffset: "-5px",
        boxShadow: "3px 4px 0 rgba(180,140,60,0.25)",
        backgroundImage:
          "repeating-linear-gradient(0deg,transparent,transparent 27px,rgba(140,100,40,0.045) 27px,rgba(140,100,40,0.045) 28px)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "4px 6px 0 rgba(180,140,60,0.35)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "3px 4px 0 rgba(180,140,60,0.25)";
      }}
    >
      {/* Coloured top stripe */}
      <div style={{ height: "4px", background: `linear-gradient(90deg, var(--color-tomato), #c49a1e)` }} aria-hidden />

      {/* Body */}
      <div style={{ padding: "0.9rem 1rem 0.8rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>

        {/* Category chip */}
        {category && (
          <span
            style={{
              display: "inline-block",
              alignSelf: "flex-start",
              fontFamily: "var(--font-serif)",
              fontSize: "0.65rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-muted)",
              border: "1px solid var(--color-parchment)",
              padding: "1px 6px",
            }}
          >
            {category}
          </span>
        )}

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontStyle: "italic",
            fontWeight: 700,
            color: "var(--color-ink)",
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.85rem",
            color: "var(--color-muted)",
            lineHeight: 1.55,
            margin: 0,
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Eva's note */}
        {note && (
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.78rem",
              fontStyle: "italic",
              color: "var(--color-olive)",
              borderTop: "1px dashed var(--color-parchment)",
              paddingTop: "0.5rem",
              margin: 0,
            }}
          >
            <span style={{ fontWeight: 700 }}>Eva&apos;nın Notu:</span> {note}
          </p>
        )}
      </div>

      {/* Footer bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "0.5rem 1rem",
          borderTop: "1px solid var(--color-parchment)",
          backgroundColor: "rgba(242,232,208,0.5)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-serif)", fontSize: "0.75rem", color: "var(--color-muted)" }}>
          <ClockIcon /> {prepTime}
        </span>

        <span style={{ marginLeft: "auto" }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.68rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: diff.color,
              backgroundColor: diff.bg,
              padding: "1px 7px",
              border: `1px solid ${diff.color}44`,
            }}
          >
            {difficulty}
          </span>
        </span>
      </div>
    </article>
  );
}

VintageRecipeCard.displayName = "VintageRecipeCard";

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="6" cy="6" r="5" />
      <path d="M6 3.5v2.5l1.5 1" strokeLinecap="round" />
    </svg>
  );
}
