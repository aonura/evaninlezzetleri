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
    <div
      style={{
        backgroundColor: "var(--color-cream)",
        minHeight: "100vh",
        backgroundImage:
          "radial-gradient(ellipse at 0% 0%, rgba(180,120,40,0.04) 0%, transparent 40%)," +
          "radial-gradient(ellipse at 100% 100%, rgba(180,120,40,0.04) 0%, transparent 40%)",
      }}
    >
      {/* ── PAGE TITLE HERO ── */}
      <div
        style={{
          background: "#f0e6cc",
          backgroundImage:
            "radial-gradient(ellipse at 25% 55%, rgba(210,155,55,0.1) 0%, transparent 60%)," +
            "repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(140,100,40,0.06) 28px,rgba(140,100,40,0.06) 29px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Multi-colour top stripe */}
        <div
          style={{
            height: "5px",
            background: `linear-gradient(90deg, #8b2a1f 0%, ${accentColor} 25%, #c49a1e 50%, ${accentColor} 75%, #8b2a1f 100%)`,
          }}
          aria-hidden
        />

        {/* Faint outer frame */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "12px",
            right: "12px",
            bottom: "18px",
            border: "1px solid rgba(180,120,40,0.16)",
            pointerEvents: "none",
          }}
          aria-hidden
        />

        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "1.1rem 1.5rem 0",
            position: "relative",
          }}
        >
          {/* Back link */}
          <Link
            href={backHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontFamily: "var(--font-serif)",
              fontSize: "0.78rem",
              color: "var(--color-muted)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(180,140,60,0.3)",
              paddingBottom: "1px",
            }}
          >
            ← {backLabel}
          </Link>

          {/* Accent ornament */}
          <div
            style={{
              textAlign: "center",
              marginTop: "0.65rem",
              letterSpacing: "0.45em",
              color: accentColor,
              opacity: 0.6,
              fontSize: "0.7rem",
            }}
            aria-hidden
          >
            ✦ ✦ ✦
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 6vw, 3.3rem)",
              fontStyle: "italic",
              fontWeight: 900,
              color: "var(--color-ink)",
              lineHeight: 1.1,
              textAlign: "center",
              textShadow: "2px 3px 0 rgba(180,120,40,0.14)",
              margin: "0.25rem 0 0",
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
                fontSize: "0.88rem",
                marginTop: "0.4rem",
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Mustard rule */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              maxWidth: "260px",
              margin: "0.8rem auto 0",
            }}
            aria-hidden
          >
            <div style={{ flex: 1, height: "2px", background: "#c49a1e", opacity: 0.5 }} />
            <span style={{ color: "#c49a1e", fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>❧</span>
            <div style={{ flex: 1, height: "2px", background: "#c49a1e", opacity: 0.5 }} />
          </div>
        </div>

        {/* Checkered strip — same as homepage hero */}
        <div
          style={{
            height: "16px",
            marginTop: "1.1rem",
            backgroundImage: "repeating-conic-gradient(#c0392b 0% 25%, #e8d9b8 0% 50%)",
            backgroundSize: "12px 12px",
          }}
          aria-hidden
        />
      </div>

      {/* ── PAGE BODY ── */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "2.25rem 1.25rem 3.5rem",
          position: "relative",
        }}
      >
        {/* Decorative page frame (faint book-margin lines) */}
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "20px",
            right: "20px",
            bottom: "24px",
            border: "1px solid rgba(180,140,60,0.1)",
            pointerEvents: "none",
          }}
          aria-hidden
        />

        {/* Corner ornaments */}
        {(
          [
            { top: "2px",  left:  "14px", rotate: "0deg"   },
            { top: "2px",  right: "14px", rotate: "90deg"  },
            { bottom: "18px", left:  "14px", rotate: "270deg" },
            { bottom: "18px", right: "14px", rotate: "180deg" },
          ] as React.CSSProperties[]
        ).map((pos, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              fontSize: "0.6rem",
              color: "rgba(180,140,60,0.3)",
              fontFamily: "var(--font-display)",
              pointerEvents: "none",
              ...pos,
            }}
            aria-hidden
          >
            ◆
          </span>
        ))}

        {children}
      </div>

      {/* ── BOTTOM ORNAMENT ── */}
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
        <span style={{ color: "var(--color-mustard)", fontFamily: "var(--font-display)", fontSize: "1rem" }}>✦ ◆ ✦</span>
        <div style={{ flex: 1, height: "1px", background: "var(--color-parchment)" }} />
      </div>
    </div>
  );
}
