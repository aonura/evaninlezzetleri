interface VintageRecipeCardProps {
  title: string;
  description: string;
  prepTime: string;
  difficulty: "Kolay" | "Orta" | "Zor";
  category?: string;
}

const difficultyColor: Record<string, string> = {
  Kolay: "var(--color-olive)",
  Orta: "var(--color-mustard)",
  Zor: "var(--color-tomato)",
};

export default function VintageRecipeCard({
  title,
  description,
  prepTime,
  difficulty,
  category,
}: VintageRecipeCardProps) {
  return (
    <article
      className="relative flex flex-col gap-3 p-5 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        backgroundColor: "var(--color-warm-white)",
        border: "2px solid var(--color-parchment)",
        boxShadow: "2px 3px 0 var(--color-parchment)",
        backgroundImage:
          "repeating-linear-gradient(0deg,transparent,transparent 27px,rgba(140,100,40,0.04) 27px,rgba(140,100,40,0.04) 28px)",
      }}
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: "var(--color-tomato)" }}
        aria-hidden
      />

      {/* Title */}
      <h3
        className="text-lg font-bold leading-snug pt-1"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-serif)" }}
      >
        {description}
      </p>

      {/* Meta row */}
      <div className="flex items-center gap-3 mt-auto pt-2 flex-wrap">
        <span
          className="flex items-center gap-1 text-xs"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-serif)" }}
        >
          <ClockIcon />
          {prepTime}
        </span>

        <span
          className="text-xs font-semibold px-2 py-0.5 rounded"
          style={{
            color: difficultyColor[difficulty] ?? "var(--color-muted)",
            border: `1px solid ${difficultyColor[difficulty] ?? "var(--color-muted)"}`,
            fontFamily: "var(--font-serif)",
          }}
        >
          {difficulty}
        </span>

        {category && (
          <span
            className="ml-auto text-xs italic"
            style={{ color: "var(--color-light-text)", fontFamily: "var(--font-serif)" }}
          >
            {category}
          </span>
        )}
      </div>
    </article>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="6.5" cy="6.5" r="5.5" />
      <path d="M6.5 3.5v3l2 1.5" strokeLinecap="round" />
    </svg>
  );
}
