/* HomeHero — vintage cookbook header, inspired by the top portion of reference-homepage.png */
export default function HomeHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#f2e8d0",
        backgroundImage:
          "radial-gradient(ellipse at 20% 50%, rgba(200,150,60,0.08) 0%, transparent 60%)," +
          "radial-gradient(ellipse at 80% 30%, rgba(180,80,40,0.06) 0%, transparent 55%)," +
          "repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(140,100,40,0.05) 28px,rgba(140,100,40,0.05) 29px)",
      }}
    >
      {/* Top border stripe */}
      <div
        style={{
          height: "5px",
          background: "linear-gradient(90deg, #8b2a1f 0%, #c0392b 30%, #c49a1e 50%, #c0392b 70%, #8b2a1f 100%)",
        }}
        aria-hidden
      />

      {/* Outer decorative frame line */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "12px",
          right: "12px",
          bottom: "20px",
          border: "1px solid rgba(180,120,40,0.25)",
          pointerEvents: "none",
        }}
        aria-hidden
      />

      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "2rem 1.5rem 0",
          position: "relative",
        }}
      >
        {/* ── TOP DECOR ROW ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginBottom: "6px",
          }}
          aria-hidden
        >
          <span style={{ color: "#c49a1e", opacity: 0.7, fontSize: "1rem" }}>✦</span>
          <ChefHatSVG />
          <span style={{ color: "#c49a1e", opacity: 0.7, fontSize: "1rem" }}>✦</span>

          {/* Stamp badge — top right in reference */}
          <div
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "0.5rem",
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: "2.5px solid #7a6a5a",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(-12deg)",
              backgroundColor: "rgba(242,232,208,0.9)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "7px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#7a6a5a",
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              SEVGİYLE
              <br />
              HAZIRLANDI
              <br />
              ♥
            </span>
          </div>
        </div>

        {/* ── MAIN TITLE AREA ── */}
        <div style={{ textAlign: "center", position: "relative" }}>

          {/* Eva'nın */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.8rem, 11vw, 7.5rem)",
              fontStyle: "italic",
              fontWeight: 900,
              color: "#2c1a0e",
              lineHeight: 0.95,
              margin: 0,
              textShadow: "3px 4px 0 rgba(180,120,40,0.16)",
              letterSpacing: "-0.02em",
            }}
          >
            Eva&apos;nın
          </h1>

          {/* Lezzetleri on ribbon */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "4px 0 8px",
            }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Ribbon body */}
              <div
                style={{
                  backgroundColor: "#c0392b",
                  padding: "0.3rem 2.5rem",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {/* Left ear */}
                <div
                  style={{
                    position: "absolute",
                    left: "-14px",
                    top: 0,
                    bottom: 0,
                    width: "14px",
                    background: "#8b2a1f",
                    clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
                  }}
                  aria-hidden
                />
                {/* Right ear */}
                <div
                  style={{
                    position: "absolute",
                    right: "-14px",
                    top: 0,
                    bottom: 0,
                    width: "14px",
                    background: "#8b2a1f",
                    clipPath: "polygon(100% 50%, 0 0, 0 100%)",
                  }}
                  aria-hidden
                />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                    fontStyle: "italic",
                    fontWeight: 900,
                    color: "#fff",
                    textShadow: "2px 3px 0 rgba(0,0,0,0.22)",
                    letterSpacing: "-0.015em",
                    position: "relative",
                  }}
                >
                  Lezzetleri
                </span>
              </div>
            </div>

            {/* Ribbon tails */}
            <div style={{ display: "flex", width: "min(400px, 80%)" }} aria-hidden>
              <div
                style={{
                  flex: 1,
                  height: "10px",
                  backgroundColor: "#8b2a1f",
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: "10px",
                  backgroundColor: "#8b2a1f",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
                }}
              />
            </div>
          </div>

          {/* Mustard ornamental rule */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              maxWidth: "360px",
              margin: "0 auto 8px",
            }}
            aria-hidden
          >
            <div style={{ flex: 1, height: "2px", background: "#c49a1e", opacity: 0.65 }} />
            <span
              style={{
                fontFamily: "var(--font-display)",
                color: "#c49a1e",
                fontSize: "1.2rem",
              }}
            >
              ❧
            </span>
            <div style={{ flex: 1, height: "2px", background: "#c49a1e", opacity: 0.65 }} />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              color: "#7a6a5a",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              margin: "0 0 16px",
            }}
          >
            Ev Mutfağından Seçme Tarifler
          </p>
        </div>

        {/* ── BOTTOM DECOR ROW — whisk / hearts / bowl ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "28px",
            paddingBottom: "16px",
          }}
          aria-hidden
        >
          <WhiskSVG />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              alignSelf: "center",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{ color: "#c0392b", opacity: 0.55 - i * 0.12, fontSize: "0.75rem" }}
              >
                ♥
              </span>
            ))}
          </div>

          <BowlSVG />
        </div>
      </div>

      {/* ── Checkered bottom strip ── */}
      <div
        style={{
          height: "20px",
          backgroundImage:
            "repeating-conic-gradient(#c0392b 0% 25%, #e8d9b8 0% 50%)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden
      />
    </section>
  );
}

/* ── Inline SVG decorations ── */
function ChefHatSVG() {
  return (
    <svg
      width="52"
      height="44"
      viewBox="0 0 52 44"
      fill="none"
      stroke="#2c1a0e"
      strokeWidth="1.4"
      aria-hidden
    >
      <ellipse cx="26" cy="38" rx="18" ry="5" fill="#f0e8d0" stroke="#4a3728" />
      <rect x="8" y="28" width="36" height="11" rx="1" fill="#f0e8d0" stroke="#4a3728" />
      <circle cx="16" cy="17" r="9" fill="#fffef9" stroke="#4a3728" />
      <circle cx="26" cy="13" r="11" fill="#fffef9" stroke="#4a3728" />
      <circle cx="36" cy="17" r="9" fill="#fffef9" stroke="#4a3728" />
      <path d="M8 28 Q8 14 26 14 Q44 14 44 28" fill="#fffef9" stroke="#4a3728" />
    </svg>
  );
}

function WhiskSVG() {
  return (
    <svg width="28" height="52" viewBox="0 0 28 52" fill="none" aria-hidden>
      <line x1="14" y1="2" x2="14" y2="20" stroke="#4a3728" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="14" cy="36" rx="10" ry="14" stroke="#4a3728" strokeWidth="1.5" fill="none" />
      <path d="M4 26 Q14 20 24 26" stroke="#4a3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M4 33 Q14 25 24 33" stroke="#4a3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M4 40 Q14 32 24 40" stroke="#4a3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="14" cy="48" rx="5" ry="2" fill="#4a3728" opacity="0.4" />
    </svg>
  );
}

function BowlSVG() {
  return (
    <svg width="52" height="36" viewBox="0 0 52 36" fill="none" aria-hidden>
      <path
        d="M4 14 Q4 32 26 32 Q48 32 48 14"
        fill="#f0e8d0"
        stroke="#4a3728"
        strokeWidth="1.5"
      />
      <ellipse cx="26" cy="14" rx="22" ry="6" fill="#e8d9b8" stroke="#4a3728" strokeWidth="1.5" />
      <ellipse cx="26" cy="34" rx="10" ry="2.5" fill="#d4c8a8" />
      {/* decorative stripes on bowl */}
      <path d="M10 22 Q26 24 42 22" stroke="#c49a1e" strokeWidth="1" opacity="0.5" fill="none" />
      <path d="M8 27 Q26 30 44 27" stroke="#c49a1e" strokeWidth="1" opacity="0.4" fill="none" />
    </svg>
  );
}
