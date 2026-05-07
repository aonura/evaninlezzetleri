"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Homepage uses sliced image tiles as its own navigation — no top bar needed there
  if (pathname === "/" || pathname?.startsWith("/admin")) return null;

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "var(--color-ink)",
        borderBottom: "3px solid var(--color-tomato)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between gap-6">

        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Eva'nın Lezzetleri — Ana Sayfa"
          className="flex-none flex items-baseline leading-none select-none gap-1.5 group"
        >
          <span
            className="font-bold italic transition-opacity duration-200 group-hover:opacity-75"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2.8vw, 1.4rem)",
              color: "var(--color-rust-light)",
              letterSpacing: "-0.01em",
            }}
          >
            Eva&apos;nın
          </span>
          <span
            className="font-bold transition-opacity duration-200 group-hover:opacity-75"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 2.6vw, 1.3rem)",
              color: "var(--color-aged)",
              letterSpacing: "-0.02em",
            }}
          >
            Lezzetleri
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Ana navigasyon">
          <NavLink href="/bugun-ne-pisirsem">Bugün Ne Pişirsem?</NavLink>
          <NavLink href="/evde-ne-var">Evde Ne Var?</NavLink>
          <NavLink href="/hizli-yemekler">Tarifler</NavLink>
          <NavLink href="/haftalik-menu">Haftalık Menü</NavLink>
          <NavLink href="/">← Ana Sayfa</NavLink>
        </nav>

        {/* Mobile: back-home link */}
        <Link
          href="/"
          aria-label="Ana sayfa"
          className="md:hidden flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
          style={{ color: "var(--color-aged)", fontFamily: "var(--font-serif)" }}
        >
          ← Ana Sayfa
        </Link>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-xs font-semibold uppercase tracking-widest transition-opacity duration-200 hover:opacity-70"
      style={{
        fontFamily: "var(--font-serif)",
        color: "var(--color-aged)",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </Link>
  );
}
