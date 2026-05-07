import Link from "next/link";
import DecorativeDivider from "./DecorativeDivider";

interface VintageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backLabel?: string;
  backHref?: string;
}

export default function VintageLayout({
  children,
  title,
  subtitle,
  backLabel = "Ana Sayfa",
  backHref = "/",
}: VintageLayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      {/* Page hero header */}
      <div
        className="relative w-full py-10 px-4 text-center"
        style={{
          backgroundColor: "var(--color-aged)",
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 27px,rgba(140,100,40,0.06) 27px,rgba(140,100,40,0.06) 28px)",
          borderBottom: "4px double var(--color-parchment)",
        }}
      >
        {/* Back link */}
        <Link
          href={backHref}
          className="absolute top-4 left-4 md:left-8 inline-flex items-center gap-1.5 text-sm transition-colors"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-serif)" }}
        >
          <span aria-hidden>←</span>
          {backLabel}
        </Link>

        {/* Ornamental top border */}
        <div
          className="mx-auto mb-4 w-16 border-t-2"
          style={{ borderColor: "var(--color-tomato)" }}
          aria-hidden
        />

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold italic leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-ink)",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-2 text-base"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-serif)" }}
          >
            {subtitle}
          </p>
        )}

        <DecorativeDivider className="mt-4 max-w-xs mx-auto" color="var(--color-tomato)" />
      </div>

      {/* Page content */}
      <div className="max-w-4xl mx-auto px-4 py-10">{children}</div>
    </div>
  );
}
