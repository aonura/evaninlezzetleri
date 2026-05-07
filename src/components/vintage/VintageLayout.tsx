import Link from "next/link";

interface VintageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backLabel?: string;
  backHref?: string;
  accentColor?: string;
}

export default function VintageLayout({
  children,
  title,
  subtitle,
  backLabel = "Ana Sayfa",
  backHref = "/",
  accentColor = "#c0392b",
}: VintageLayoutProps) {
  return (
    <div style={{ backgroundColor: "var(--color-cream)", minHeight: "100vh" }}>

      {/* ── Page title hero ── */}
      <div
        style={{
          background: "#f2e8d0",
          backgroundImage:
            "radial-gradient(ellipse at 20% 60%, rgba(200,150,60,0.09) 0%, transparent 65%)," +
            "repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(140,100,40,0.055) 28px,rgba(140,100,40,0.055) 29px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Multi-colour top stripe */}
        <div
          style={{
            height: "5px",
            background: `linear-gradient(90deg, #8b2a1f 0%, ${accentColor} 30%, #c49a1e 50%, ${accentColor} 70%, #8b2a1f 100%)`,
          }}
          aria-hidden
        />

        {/* Faint outer frame line */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "14px",
            right: "14px",
            bottom: "20px",
            border: "1px solid rgba(180,120,40,0.18)",
            pointerEvents: "none",
          }}
          aria-hidden
        />

        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "1.25rem 1.5rem 0",
            position: "relative",
          }}
        >
          {/* Back link — vintage tab style */}
          <Link
            href={backHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-serif)",
              fontSize: "0.8rem",
              color: "var(--color-muted)",
              textDecoration: "none",
              paddingBottom: "2px",
              borderBottom: "1px solid var(--color-parchment)",
              transition: "color 0.2s",
            }}
          >
            ← {backLabel}
          </Link>

          {/* Sparkle row */}
          <div
            style={{ textAlign: "center", marginTop: "0.75rem", letterSpacing: "0.4em", color: "var(--color-mustard)", opacity: 0.7, fontSize: "0.75rem" }}
            aria-hidden
          >
            ✦ ✦ ✦
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 6vw, 3.4rem)",
              fontStyle: "italic",
              fontWeight: 900,
              color: "var(--color-ink)",
              lineHeight: 1.1,
              textAlign: "center",
              textShadow: "2px 3px 0 rgba(180,120,40,0.13)",
              margin: "0.3rem 0 0",
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                textAlign: "center",
                fontFamily: "var(--font-serif)",
                color: "var(--color-muted)",
                fontSize: "0.9rem",
                marginTop: "0.5rem",
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Mustard ornamental rule */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px", maxWidth: "280px", margin: "0.9rem auto 0" }}
            aria-hidden
          >
            <div style={{ flex: 1, height: "2px", background: "#c49a1e", opacity: 0.55 }} />
            <span style={{ color: "#c49a1e", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>❧</span>
            <div style={{ flex: 1, height: "2px", background: "#c49a1e", opacity: 0.55 }} />
          </div>
        </div>

        {/* Checkered bottom strip — matches homepage hero exactly */}
        <div
          style={{
            height: "16px",
            marginTop: "1.25rem",
            backgroundImage: "repeating-conic-gradient(#c0392b 0% 25%, #e8d9b8 0% 50%)",
            backgroundSize: "12px 12px",
          }}
          aria-hidden
        />
      </div>

      {/* ── Page content ── */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "2.5rem 1.25rem 4rem",
        }}
      >
        {children}
      </div>

      {/* ── Bottom ornament ── */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 1.25rem 2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
        aria-hidden
      >
        <div style={{ flex: 1, height: "1px", background: "var(--color-parchment)" }} />
        <span style={{ color: "var(--color-mustard)", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>✦ ◆ ✦</span>
        <div style={{ flex: 1, height: "1px", background: "var(--color-parchment)" }} />
      </div>
    </div>
  );
}
