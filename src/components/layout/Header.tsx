"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header
      className="sticky top-0 z-50 bg-[#FFFEF9]"
      style={{
        boxShadow:
          "0 1px 0 0 #E0D5C8, 0 4px 20px 0 rgba(44, 34, 24, 0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between gap-6">

        {/* ── Wordmark ── */}
        <Link
          href="/"
          aria-label="Eva'nın Lezzetleri — Ana Sayfa"
          className="group flex-none flex items-baseline leading-none select-none"
        >
          {/* "Eva'nın" — bold italic, terracotta, personal */}
          <span
            className="font-serif font-bold italic text-[#C4603A] group-hover:text-[#9E4A2B] transition-colors duration-200"
            style={{
              fontSize: "clamp(1.6rem, 3.8vw, 2.2rem)",
              letterSpacing: "-0.015em",
            }}
          >
            Eva&apos;nın
          </span>

          {/* "Lezzetleri" — bold, dark warm brown, anchoring */}
          <span
            className="font-serif font-bold text-[#2C2218] group-hover:text-[#3D2E22] transition-colors duration-200"
            style={{
              fontSize: "clamp(1.45rem, 3.5vw, 2rem)",
              letterSpacing: "-0.025em",
              marginLeft: "0.28em",
            }}
          >
            Lezzetleri
          </span>
        </Link>

        {/* ── Desktop navigation ── */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Ana navigasyon"
        >
          <NavLink href="/tarifler">Tarifler</NavLink>
          <NavLink href="/ara">Ara</NavLink>
          <NavLink href="/favoriler">
            <Heart
              size={13}
              strokeWidth={2}
              className="inline -mt-0.5 mr-1"
              aria-hidden
            />
            Favoriler
          </NavLink>
        </nav>

        {/* ── Search icon ── */}
        <Link
          href="/ara"
          aria-label="Ara"
          className="flex items-center justify-center w-10 h-10 rounded-xl text-[#7A6A5A] hover:text-[#C4603A] hover:bg-[#FAF7F2] transition-all duration-200"
        >
          <Search size={19} strokeWidth={1.75} />
        </Link>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-[13px] font-medium tracking-wide text-[#7A6A5A] hover:text-[#C4603A] transition-colors duration-200
        after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-[#C4603A]
        after:transition-all after:duration-200 hover:after:w-full"
    >
      {children}
    </Link>
  );
}
