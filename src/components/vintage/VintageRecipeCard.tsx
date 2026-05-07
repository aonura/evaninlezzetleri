"use client";

/* VintageRecipeCard
   Each card gets a warm background colour keyed to its category,
   matching the tile-colour palette from the homepage.
   Double-border (solid outer + dashed inner via outline) + paper-line texture.
*/

interface VintageRecipeCardProps {
  title: string;
  description: string;
  prepTime: string;
  difficulty: "Kolay" | "Orta" | "Zor";
  category?: string;
  note?: string;
}

/* Category → warm background + border (mirrors homepage tile colours) */
const CAT: Record<string, { bg: string; border: string }> = {
  Makarna:      { bg: "#f5d07088", border: "#c49020" },
  Börek:        { bg: "#f0e0a8",   border: "#c4a050" },
  Zeytinyağlı:  { bg: "#c8dca8",   border: "#6a9850" },
  Kahvaltı:     { bg: "#f0d8a0",   border: "#b89040" },
  Sebze:        { bg: "#d4e8c0",   border: "#6a9850" },
  Etli:         { bg: "#e8c8a8",   border: "#b07848" },
  Tavuk:        { bg: "#f0d8c8",   border: "#c09070" },
  Baklagil:     { bg: "#d4dcc0",   border: "#8a9870" },
  Patlıcan:     { bg: "#e8d0b0",   border: "#a08040" },
  Pasta:        { bg: "#f0d0c0",   border: "#c08060" },
  "Sütlü Tatlı":{ bg: "#f5eedc",   border: "#c0a070" },
  Şerbetli:     { bg: "#f5e0a0",   border: "#c09020" },
  Kurabiye:     { bg: "#f0e0b0",   border: "#b09040" },
  Meyve:        { bg: "#f0d8c0",   border: "#c09070" },
  Meze:         { bg: "#c8dca8",   border: "#6a9850" },
  Salata:       { bg: "#d4e8c0",   border: "#6a9850" },
};

const DEFAULT_CAT = { bg: "#f0e8d0", border: "#b8a060" };

const DIFF: Record<string, { color: string; bg: string }> = {
  Kolay: { color: "#2e5020", bg: "#d4e8c0" },
  Orta:  { color: "#6a4e08", bg: "#f5d070" },
  Zor:   { color: "#7a200e", bg: "#f0c0b0" },
};

export default function VintageRecipeCard({
  title,
  description,
  prepTime,
  difficulty,
  category,
  note,
}: VintageRecipeCardProps) {
  const cat  = CAT[category ?? ""] ?? DEFAULT_CAT;
  const diff = DIFF[difficulty]    ?? DIFF.Kolay;

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: cat.bg,
        /* Paper ruled lines in the card's accent colour */
        backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 26px,${cat.border}28 26px,${cat.border}28 27px)`,
        border: `2.5px solid ${cat.border}`,
        /* Inner dashed border via outline */
        outline: `1px dashed ${cat.border}70`,
        outlineOffset: "-6px",
        boxShadow: `3px 4px 0 ${cat.border}66`,
        minHeight: "220px",
        overflow: "hidden",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) rotate(0.3deg)";
        (e.currentTarget as HTMLElement).style.boxShadow = `5px 7px 0 ${cat.border}88`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0) rotate(0deg)";
        (e.currentTarget as HTMLElement).style.boxShadow = `3px 4px 0 ${cat.border}66`;
      }}
    >
      {/* ── Coloured header bar ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.45rem 0.85rem",
          backgroundColor: `${cat.border}22`,
          borderBottom: `1px solid ${cat.border}44`,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.6rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.13em",
            color: cat.border,
          }}
        >
          {category ?? "Tarif"}
        </span>

        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: "var(--font-serif)",
            fontSize: "0.68rem",
            color: "var(--color-muted)",
          }}
        >
          <ClockSVG /> {prepTime}
        </span>
      </div>

      {/* ── Card body ── */}
      <div
        style={{
          padding: "0.75rem 0.85rem 0.65rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.55rem",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.08rem",
            fontStyle: "italic",
            fontWeight: 700,
            color: "var(--color-ink)",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.83rem",
            color: "var(--color-muted)",
            lineHeight: 1.55,
            margin: 0,
            flex: 1,
          }}
        >
          {description}
        </p>

        {note && (
          <div
            style={{
              borderTop: `1px dashed ${cat.border}55`,
              paddingTop: "0.45rem",
              marginTop: "auto",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.76rem",
                fontStyle: "italic",
                color: "var(--color-olive)",
                margin: 0,
              }}
            >
              <span style={{ fontWeight: 700 }}>Eva&apos;nın Notu:</span> {note}
            </p>
          </div>
        )}
      </div>

      {/* ── Footer ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0.4rem 0.85rem",
          borderTop: `1px solid ${cat.border}40`,
          backgroundColor: `${cat.border}14`,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.62rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: diff.color,
            backgroundColor: diff.bg,
            padding: "1px 8px",
            border: `1px solid ${diff.color}44`,
          }}
        >
          {difficulty}
        </span>
      </div>

      {/* Corner ornament */}
      <span
        style={{
          position: "absolute",
          bottom: "6px",
          left: "8px",
          fontSize: "0.6rem",
          color: cat.border,
          opacity: 0.45,
          fontFamily: "var(--font-display)",
          pointerEvents: "none",
        }}
        aria-hidden
      >
        ❧
      </span>
    </article>
  );
}

function ClockSVG() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="5.5" cy="5.5" r="4.5" />
      <path d="M5.5 3v2.5l1.5 1" strokeLinecap="round" />
    </svg>
  );
}
