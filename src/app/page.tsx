/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const dynamic = "force-static";

const tiles = [
  { n: 1, href: "/bugun-ne-pisirsem", alt: "Bugün Ne Pişirsem?" },
  { n: 2, href: "/evde-ne-var",        alt: "Evde Ne Var?" },
  { n: 3, href: "/tarifini-kaydet",    alt: "Tarifini Kaydet" },
  { n: 4, href: "/hizli-yemekler",     alt: "Hızlı Yemekler" },
  { n: 5, href: "/ana-yemekler",       alt: "Ana Yemekler" },
  { n: 6, href: "/tatlilar",           alt: "Tatlılar" },
  { n: 7, href: "/hafif-tarifler",     alt: "Hafif Tarifler" },
  { n: 8, href: "/haftalik-menu",      alt: "Haftalık Menü" },
  { n: 9, href: "/kolay-alisveris",    alt: "Kolay Alışveriş" },
];

export default function HomePage() {
  return (
    <main className="evaHome">

      {/* Hero — sliced from reference-homepage.png (top 29%) */}
      <section className="evaHero">
        <img src="/homepage/hero.png" alt="Eva'nın Lezzetleri" />
      </section>

      {/* 9 clickable tiles — sliced from reference-homepage.png (bottom 71%) */}
      <section className="evaTileGrid">

        <Link href="/bugun-ne-pisirsem" aria-label="Bugün Ne Pişirsem?">
          <img src="/homepage/tile-1.png" alt="Bugün Ne Pişirsem?" />
        </Link>

        <Link href="/evde-ne-var" aria-label="Evde Ne Var?">
          <img src="/homepage/tile-2.png" alt="Evde Ne Var?" />
        </Link>

        <Link href="/tarifini-kaydet" aria-label="Tarifini Kaydet">
          <img src="/homepage/tile-3.png" alt="Tarifini Kaydet" />
        </Link>

        <Link href="/hizli-yemekler" aria-label="Hızlı Yemekler">
          <img src="/homepage/tile-4.png" alt="Hızlı Yemekler" />
        </Link>

        <Link href="/ana-yemekler" aria-label="Ana Yemekler">
          <img src="/homepage/tile-5.png" alt="Ana Yemekler" />
        </Link>

        <Link href="/tatlilar" aria-label="Tatlılar">
          <img src="/homepage/tile-6.png" alt="Tatlılar" />
        </Link>

        <Link href="/hafif-tarifler" aria-label="Hafif Tarifler">
          <img src="/homepage/tile-7.png" alt="Hafif Tarifler" />
        </Link>

        <Link href="/haftalik-menu" aria-label="Haftalık Menü">
          <img src="/homepage/tile-8.png" alt="Haftalık Menü" />
        </Link>

        <Link href="/kolay-alisveris" aria-label="Kolay Alışveriş">
          <img src="/homepage/tile-9.png" alt="Kolay Alışveriş" />
        </Link>

      </section>
    </main>
  );
}
