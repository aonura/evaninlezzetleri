import HomeTile from "@/components/vintage/HomeTile";

export const dynamic = "force-static";

/* ── Tile icon SVGs ── */
function PotIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <ellipse cx="22" cy="34" rx="14" ry="5" />
      <path d="M8 34V20c0-3.3 6.3-6 14-6s14 2.7 14 6v14" />
      <ellipse cx="22" cy="20" rx="14" ry="5" />
      <path d="M5 22h3M36 22h3" strokeLinecap="round" />
      <path d="M18 10 Q18 7 22 7 Q26 7 26 10" strokeLinecap="round" />
    </svg>
  );
}

function BasketIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M6 20h32l-4 16H10L6 20Z" />
      <path d="M14 20l4-10M30 20l-4-10" strokeLinecap="round" />
      <circle cx="18" cy="30" r="2" fill="currentColor" />
      <circle cx="26" cy="30" r="2" fill="currentColor" />
      <path d="M20 25 Q22 23 24 25" strokeLinecap="round" />
    </svg>
  );
}

function NotebookIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="10" y="6" width="26" height="32" rx="2" />
      <path d="M10 6h4v32h-4" fill="currentColor" fillOpacity="0.15" />
      <path d="M10 6h4v32h-4" />
      <path d="M18 14h12M18 19h12M18 24h8" strokeLinecap="round" />
      <circle cx="30" cy="32" r="4" />
      <path d="M28 32l1.5 1.5L32 30" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockPastaIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="30" cy="16" r="10" />
      <path d="M30 10v6l4 2" strokeLinecap="round" />
      <path d="M8 34 Q12 26 20 28 Q24 29 22 34" strokeLinecap="round" />
      <path d="M10 38 Q14 32 22 34" strokeLinecap="round" />
      <path d="M6 38h20" strokeLinecap="round" />
    </svg>
  );
}

function PlateIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <ellipse cx="22" cy="26" rx="14" ry="8" />
      <ellipse cx="22" cy="26" rx="9" ry="4" />
      <path d="M8 22 Q8 12 22 12 Q36 12 36 22" />
      <path d="M14 8 Q14 6 16 6 Q17 6 17 8v10" strokeLinecap="round" />
      <path d="M28 8v4M30 8v4" strokeLinecap="round" />
      <path d="M29 12 Q29 14 27 15" strokeLinecap="round" />
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="6" y="26" width="32" height="12" rx="1" />
      <rect x="12" y="16" width="20" height="10" />
      <path d="M16 16v-4M22 16v-4M28 16v-4" strokeLinecap="round" />
      <path d="M16 12 Q16 9 18 9 Q20 9 20 12" strokeLinecap="round" />
      <path d="M22 12 Q22 9 24 9 Q26 9 26 12" strokeLinecap="round" />
      <path d="M6 30 Q12 27 18 30 Q24 33 30 30 Q36 27 38 30" strokeLinecap="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M22 38 Q8 30 8 16 Q8 6 22 6 Q36 6 36 16 Q36 30 22 38Z" />
      <path d="M22 38 Q22 20 22 6" />
      <path d="M22 22 Q28 18 34 14" />
      <path d="M22 28 Q16 24 10 20" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="4" y="10" width="36" height="30" rx="2" />
      <path d="M4 18h36" />
      <path d="M14 6v8M30 6v8" strokeLinecap="round" />
      <path d="M11 24h4M20 24h4M29 24h4" strokeLinecap="round" />
      <path d="M11 30h4M20 30h4M29 30h4" strokeLinecap="round" />
      <path d="M11 36h4" strokeLinecap="round" />
    </svg>
  );
}

function ShoppingIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M6 10h6l5 18h14l5-14H16" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="34" r="3" />
      <circle cx="30" cy="34" r="3" />
      <path d="M6 10L4 6" strokeLinecap="round" />
    </svg>
  );
}

/* ── Tile definitions ── */
const tiles = [
  {
    number: 1,
    title: "Bugün Ne Pişirsem?",
    href: "/bugun-ne-pisirsem",
    bgColor: "var(--tile-1)",
    borderColor: "var(--tile-1-border)",
    icon: <PotIcon />,
    description: "Sana özel tarif önerileri",
  },
  {
    number: 2,
    title: "Evde Ne Var?",
    href: "/evde-ne-var",
    bgColor: "var(--tile-2)",
    borderColor: "var(--tile-2-border)",
    icon: <BasketIcon />,
    description: "Elindekilerle ne pişirebilirsin?",
  },
  {
    number: 3,
    title: "Tarifini Kaydet",
    href: "/tarifini-kaydet",
    bgColor: "var(--tile-3)",
    borderColor: "var(--tile-3-border)",
    icon: <NotebookIcon />,
    description: "Tarif defterine ekle",
  },
  {
    number: 4,
    title: "Hızlı Yemekler",
    href: "/hizli-yemekler",
    bgColor: "var(--tile-4)",
    borderColor: "var(--tile-4-border)",
    icon: <ClockPastaIcon />,
    description: "30 dakikada hazır",
  },
  {
    number: 5,
    title: "Ana Yemekler",
    href: "/ana-yemekler",
    bgColor: "var(--tile-5)",
    borderColor: "var(--tile-5-border)",
    icon: <PlateIcon />,
    description: "Doyurucu ev yemekleri",
  },
  {
    number: 6,
    title: "Tatlılar",
    href: "/tatlilar",
    bgColor: "var(--tile-6)",
    borderColor: "var(--tile-6-border)",
    icon: <CakeIcon />,
    description: "Tatlı bir son",
  },
  {
    number: 7,
    title: "Hafif Tarifler",
    href: "/hafif-tarifler",
    bgColor: "var(--tile-7)",
    borderColor: "var(--tile-7-border)",
    icon: <LeafIcon />,
    description: "Zeytinyağlılar ve salatalar",
  },
  {
    number: 8,
    title: "Haftalık Menü",
    href: "/haftalik-menu",
    bgColor: "var(--tile-8)",
    borderColor: "var(--tile-8-border)",
    icon: <CalendarIcon />,
    description: "7 günlük yemek planı",
  },
  {
    number: 9,
    title: "Kolay Alışveriş",
    href: "/kolay-alisveris",
    bgColor: "var(--tile-9)",
    borderColor: "var(--tile-9-border)",
    icon: <ShoppingIcon />,
    description: "Mutfak için seçme ürünler",
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--color-cream)" }}>
      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor: "var(--color-aged)",
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 27px,rgba(140,100,40,0.06) 27px,rgba(140,100,40,0.06) 28px)",
        }}
      >
        {/* Top decorative border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-tomato)]" aria-hidden />

        <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

          {/* Chef hat + sparkle top area */}
          <div className="flex justify-center items-center gap-6 mb-4" aria-hidden>
            <span style={{ color: "var(--color-muted)", fontSize: "1.4rem" }}>✦</span>
            <ChefHatSVG />
            <span style={{ color: "var(--color-muted)", fontSize: "1.4rem" }}>✦</span>
          </div>

          {/* Main title area */}
          <div className="text-center relative">

            {/* Eva'nın */}
            <h1
              className="font-bold italic leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 9vw, 6rem)",
                color: "var(--color-ink)",
                textShadow: "2px 3px 0px rgba(180,120,60,0.2)",
              }}
            >
              Eva&apos;nın
            </h1>

            {/* Lezzetleri on ribbon */}
            <div className="relative inline-flex flex-col items-center mt-1 mb-4">
              <div
                className="relative px-10 py-1.5"
                style={{ backgroundColor: "var(--color-tomato)" }}
              >
                {/* Ribbon ears */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-4"
                  style={{
                    background: "var(--color-tomato-dark)",
                    clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
                  }}
                  aria-hidden
                />
                <div
                  className="absolute right-0 top-0 bottom-0 w-4"
                  style={{
                    background: "var(--color-tomato-dark)",
                    clipPath: "polygon(100% 50%, 0 0, 0 100%)",
                  }}
                  aria-hidden
                />

                <span
                  className="relative font-bold italic tracking-wide"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 7vw, 4.5rem)",
                    color: "#fff",
                    textShadow: "1px 2px 0px rgba(0,0,0,0.2)",
                  }}
                >
                  Lezzetleri
                </span>
              </div>

              {/* Ribbon tails */}
              <div className="flex w-full px-0" aria-hidden>
                <div
                  className="flex-1 h-3"
                  style={{
                    backgroundColor: "var(--color-tomato-dark)",
                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                  }}
                />
                <div
                  className="flex-1 h-3"
                  style={{
                    backgroundColor: "var(--color-tomato-dark)",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
                  }}
                />
              </div>
            </div>

            {/* Ornamental divider */}
            <div className="flex items-center gap-3 my-3 max-w-sm mx-auto" aria-hidden>
              <div className="flex-1 border-t-2" style={{ borderColor: "var(--color-mustard)" }} />
              <span style={{ color: "var(--color-mustard)", fontFamily: "var(--font-display)" }}>❧</span>
              <div className="flex-1 border-t-2" style={{ borderColor: "var(--color-mustard)" }} />
            </div>

            {/* Tagline */}
            <p
              className="text-sm md:text-base tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-muted)",
                letterSpacing: "0.18em",
              }}
            >
              Ev Mutfağından Seçme Tarifler
            </p>

            {/* Decorative kitchen row */}
            <div className="flex justify-center items-end gap-6 mt-6" aria-hidden>
              <div className="opacity-50">
                <WhiskSVG />
              </div>
              <div
                className="text-xs font-bold tracking-wider px-3 py-1.5 rounded-full opacity-70"
                style={{
                  border: "2px solid var(--color-muted)",
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-serif)",
                  transform: "rotate(-6deg)",
                }}
              >
                SEVGİYLE
                <br />
                HAZIRLANDI
              </div>
              <div className="opacity-50">
                <BowlSVG />
              </div>
            </div>
          </div>
        </div>

        {/* Checkered bottom strip */}
        <div
          className="h-5 w-full"
          style={{
            backgroundImage:
              "repeating-conic-gradient(var(--color-tomato) 0% 25%, var(--color-parchment) 0% 50%)",
            backgroundSize: "16px 16px",
          }}
          aria-hidden
        />
      </section>

      {/* ── 9-TILE GRID ── */}
      <section className="max-w-5xl mx-auto px-4 py-8 md:py-12">

        {/* Section intro */}
        <div className="text-center mb-6">
          <p
            className="text-sm uppercase tracking-widest"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-serif)", letterSpacing: "0.15em" }}
          >
            Ne yapmak istersin?
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {tiles.map((tile) => (
            <HomeTile key={tile.href} {...tile} />
          ))}
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center gap-3 mt-10" aria-hidden>
          <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
          <span style={{ color: "var(--color-mustard)", fontFamily: "var(--font-display)" }}>✦ ◆ ✦</span>
          <div className="flex-1 border-t" style={{ borderColor: "var(--color-parchment)" }} />
        </div>
      </section>
    </div>
  );
}

/* ── Decorative SVGs ── */
function ChefHatSVG() {
  return (
    <svg width="52" height="46" viewBox="0 0 52 46" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" aria-hidden>
      <ellipse cx="26" cy="40" rx="18" ry="5" />
      <rect x="8" y="30" width="36" height="10" rx="1" />
      <path d="M8 30 Q8 14 20 14 Q20 8 26 8 Q32 8 32 14 Q44 14 44 30" />
      <circle cx="18" cy="18" r="8" />
      <circle cx="26" cy="14" r="10" />
      <circle cx="34" cy="18" r="8" />
    </svg>
  );
}

function WhiskSVG() {
  return (
    <svg width="32" height="56" viewBox="0 0 32 56" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" aria-hidden>
      <path d="M16 4v20" strokeLinecap="round" />
      <ellipse cx="16" cy="36" rx="10" ry="14" />
      <path d="M6 30 Q16 24 26 30" strokeLinecap="round" />
      <path d="M6 36 Q16 28 26 36" strokeLinecap="round" />
      <path d="M6 42 Q16 34 26 42" strokeLinecap="round" />
      <path d="M16 50 Q10 48 10 44 Q10 40 16 50 Q22 48 22 44 Q22 40 16 50Z" />
    </svg>
  );
}

function BowlSVG() {
  return (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" aria-hidden>
      <path d="M4 16 Q4 32 24 32 Q44 32 44 16" />
      <ellipse cx="24" cy="16" rx="20" ry="6" />
      <ellipse cx="24" cy="34" rx="10" ry="2" />
      <path d="M12 8 Q16 4 24 4 Q32 4 36 8" strokeLinecap="round" />
    </svg>
  );
}
