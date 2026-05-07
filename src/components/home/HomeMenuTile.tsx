"use client";

import Link from "next/link";

export interface TileData {
  number: number;
  title: string;
  href: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
  illustration: React.ReactNode;
}

export default function HomeMenuTile({
  number,
  title,
  href,
  bgColor,
  borderColor,
  accentColor,
  illustration,
}: TileData) {
  return (
    <Link
      href={href}
      aria-label={title}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: bgColor,
        border: `2.5px solid ${borderColor}`,
        outline: `1px solid ${borderColor}55`,
        outlineOffset: "-6px",
        boxShadow: `4px 5px 0 ${borderColor}66`,
        minHeight: "200px",
        textDecoration: "none",
        overflow: "hidden",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
        /* Paper line texture — very subtle */
        backgroundImage:
          `repeating-linear-gradient(0deg,transparent,transparent 24px,${borderColor}14 24px,${borderColor}14 25px)`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `5px 7px 0 ${borderColor}88`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `4px 5px 0 ${borderColor}66`;
      }}
    >
      {/* ── Number badge + title (top area) ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "8px",
          padding: "10px 10px 0",
          zIndex: 1,
          position: "relative",
        }}
      >
        {/* Number badge */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: borderColor,
            color: "#fffef9",
            fontFamily: "var(--font-display)",
            fontSize: "0.85rem",
            fontWeight: 700,
            flexShrink: 0,
            marginTop: "2px",
            boxShadow: `1px 2px 0 ${accentColor}`,
          }}
          aria-hidden
        >
          {number}
        </span>

        {/* Title */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            fontStyle: "italic",
            fontWeight: 700,
            color: "#2c1a0e",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>

      {/* ── Illustration (fills remaining space) ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: "4px 8px 8px",
          minHeight: "120px",
        }}
        aria-hidden
      >
        {illustration}
      </div>

      {/* ── Subtle bottom colour strip ── */}
      <div
        style={{
          height: "3px",
          backgroundColor: borderColor,
          opacity: 0.6,
        }}
        aria-hidden
      />
    </Link>
  );
}
