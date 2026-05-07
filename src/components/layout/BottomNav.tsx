"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/bugun-ne-pisirsem",
    label: "Bugün",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <ellipse cx="11" cy="14" rx="7" ry="4" />
        <path d="M4 14 Q4 7 11 7 Q18 7 18 14" />
        <path d="M8 7 Q8 4 11 4 Q14 4 14 7" />
      </svg>
    ),
  },
  {
    href: "/evde-ne-var",
    label: "Evde Ne Var",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M4 19 Q4 13 11 13 Q18 13 18 19" strokeLinecap="round" />
        <ellipse cx="11" cy="10" rx="5" ry="3" />
        <path d="M7 10 Q6 6 11 5 Q16 6 15 10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/hizli-yemekler",
    label: "Tarifler",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="3" y="5" width="16" height="14" rx="1" />
        <path d="M3 9h16" />
        <path d="M8 5V3M14 5V3" strokeLinecap="round" />
        <path d="M7 13h4M7 16h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/",
    label: "Ana Sayfa",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M3 10.5L11 3l8 7.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 9.5V19h12V9.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="13" width="6" height="6" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  // Hide only on admin routes
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      {/* Spacer so page content isn't hidden behind the fixed nav */}
      <div className="md:hidden h-16 shrink-0" aria-hidden />
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-50"
      style={{
        backgroundColor: "var(--color-ink)",
        borderTop: "2px solid var(--color-tomato)",
      }}
    >
      <div className="flex items-stretch h-16">
        {navItems.map(({ href, label, icon }) => {
          const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex-1 flex flex-col items-center justify-center gap-1 transition-opacity duration-200"
              style={{
                color: isActive ? "var(--color-rust-light)" : "var(--color-muted)",
                fontSize: "10px",
                fontFamily: "var(--font-serif)",
                fontWeight: isActive ? "600" : "400",
              }}
            >
              {icon}
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
      </nav>
    </>
  );
}
