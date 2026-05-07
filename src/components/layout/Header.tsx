"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

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
            className="font-bold italic transition-colors duration-200 group-hover:opacity-80"
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
            className="font-bold transition-colors duration-200 group-hover:opacity-80"
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
        </nav>

        {/* Home link visible only on non-home pages (mobile) */}
        <Link
          href="/"
          aria-label="Ana sayfa"
          className="md:hidden flex items-center justify-center w-9 h-9 rounded transition-opacity duration-200 hover:opacity-70"
          style={{ color: "var(--color-aged)" }}
        >
          <HomeIcon />
        </Link>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-xs font-semibold uppercase tracking-widest transition-colors duration-200 hover:opacity-70"
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

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 9.5L10 3l7 6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 8.5V17h10V8.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7.5" y="12" width="5" height="5" />
    </svg>
  );
}
