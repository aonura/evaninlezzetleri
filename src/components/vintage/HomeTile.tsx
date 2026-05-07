import Link from "next/link";

interface HomeTileProps {
  number: number;
  title: string;
  href: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
  description?: string;
}

export default function HomeTile({
  number,
  title,
  href,
  bgColor,
  borderColor,
  icon,
  description,
}: HomeTileProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-start overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: bgColor,
        border: `2px solid ${borderColor}`,
        boxShadow: `2px 3px 0px ${borderColor}88, inset 0 0 0 4px ${bgColor}, inset 0 0 0 5px ${borderColor}44`,
        minHeight: "180px",
        padding: "1.25rem",
      }}
    >
      {/* Number badge */}
      <span
        className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full z-10 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: borderColor,
          color: "#faf7f0",
          fontFamily: "var(--font-display)",
        }}
      >
        {number}
      </span>

      {/* Icon area */}
      <div
        className="ml-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color: borderColor }}
        aria-hidden
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="mt-auto text-xl font-bold leading-snug"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-ink)",
        }}
      >
        {title}
      </h3>

      {description && (
        <p
          className="text-xs mt-1 leading-snug opacity-70"
          style={{ color: "var(--color-ink)", fontFamily: "var(--font-serif)" }}
        >
          {description}
        </p>
      )}

      {/* Hover overlay — subtle vintage shimmer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${borderColor}18 0%, transparent 60%)`,
        }}
        aria-hidden
      />
    </Link>
  );
}
