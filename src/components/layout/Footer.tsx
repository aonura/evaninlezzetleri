import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-ink)",
        color: "var(--color-muted)",
        borderTop: "3px solid var(--color-tomato)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">

        {/* Ornamental top divider */}
        <div className="flex items-center gap-3 mb-8" aria-hidden>
          <div className="flex-1 border-t border-[#4a3728]" />
          <span style={{ color: "var(--color-tomato)", fontSize: "1.1rem" }}>✦</span>
          <div className="flex-1 border-t border-[#4a3728]" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <Link href="/" className="flex flex-col items-center md:items-start gap-1 group">
            <span
              className="font-bold italic transition-opacity group-hover:opacity-75"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                color: "var(--color-rust-light)",
              }}
            >
              Eva&apos;nın
            </span>
            <span
              className="font-bold -mt-1 transition-opacity group-hover:opacity-75"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                color: "var(--color-aged)",
              }}
            >
              Lezzetleri
            </span>
            <span
              className="text-xs mt-1 uppercase tracking-widest"
              style={{ color: "var(--color-light-text)", fontFamily: "var(--font-serif)" }}
            >
              Ev Mutfağından Seçme Tarifler
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm" aria-label="Alt navigasyon">
            {[
              { href: "/bugun-ne-pisirsem", label: "Bugün Ne Pişirsem?" },
              { href: "/evde-ne-var", label: "Evde Ne Var?" },
              { href: "/hizli-yemekler", label: "Hızlı Yemekler" },
              { href: "/ana-yemekler", label: "Ana Yemekler" },
              { href: "/tatlilar", label: "Tatlılar" },
              { href: "/hafif-tarifler", label: "Hafif Tarifler" },
              { href: "/haftalik-menu", label: "Haftalık Menü" },
              { href: "/kolay-alisveris", label: "Kolay Alışveriş" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--color-light-text)", fontFamily: "var(--font-serif)" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center gap-3 mt-8 mb-4" aria-hidden>
          <div className="flex-1 border-t border-[#4a3728]" />
          <span style={{ color: "var(--color-tomato)", fontSize: "1.1rem" }}>✦</span>
          <div className="flex-1 border-t border-[#4a3728]" />
        </div>

        <p
          className="text-center text-xs"
          style={{ color: "var(--color-light-text)", fontFamily: "var(--font-serif)" }}
        >
          © {new Date().getFullYear()} Eva&apos;nın Lezzetleri — Sevgiyle hazırlandı
        </p>
      </div>
    </footer>
  );
}
