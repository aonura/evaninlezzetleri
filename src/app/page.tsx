import Link from "next/link";

export const dynamic = "force-static";

/* Overlay positions — unchanged */
const tiles = [
  { href: "/bugun-ne-pisirsem",  label: "Bugün Ne Pişirsem?", left: 0,     top: 28, width: 33.33, height: 24 },
  { href: "/evde-ne-var",        label: "Evde Ne Var?",        left: 33.33, top: 28, width: 33.33, height: 24 },
  { href: "/tarifini-kaydet",    label: "Tarifini Kaydet",     left: 66.66, top: 28, width: 33.34, height: 24 },
  { href: "/hizli-yemekler",     label: "Hızlı Yemekler",     left: 0,     top: 52, width: 33.33, height: 24 },
  { href: "/ana-yemekler",       label: "Ana Yemekler",        left: 33.33, top: 52, width: 33.33, height: 24 },
  { href: "/tatlilar",           label: "Tatlılar",            left: 66.66, top: 52, width: 33.34, height: 24 },
  { href: "/hafif-tarifler",     label: "Hafif Tarifler",      left: 0,     top: 76, width: 33.33, height: 24 },
  { href: "/haftalik-menu",      label: "Haftalık Menü",       left: 33.33, top: 76, width: 33.33, height: 24 },
  { href: "/kolay-alisveris",    label: "Kolay Alışveriş",     left: 66.66, top: 76, width: 33.34, height: 24 },
];

export default function HomePage() {
  return (
    /* posterPage ─ full-viewport container, dark bg fills any space not covered by the image */
    <div
      style={{
        minHeight: "100svh",
        width: "100%",
        background: "#2b160d",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      {/* posterWrap ─ constrains width so the poster isn't stretched across huge screens */}
      <div
        style={{
          position: "relative",
          width: "min(100vw, 1086px)",
          maxWidth: "100%",
          margin: "0 auto",
          lineHeight: 0,
        }}
      >
        {/* posterImage ─ no cropping, no forced height, natural aspect ratio */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/reference-homepage.png"
          alt="Eva'nın Lezzetleri — Ana Sayfa"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            margin: 0,
            padding: 0,
          }}
          draggable={false}
        />

        {/* Invisible clickable overlays — positions unchanged */}
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            aria-label={tile.label}
            className="absolute transition-colors duration-200 hover:bg-[rgba(255,180,80,0.13)]"
            style={{
              left:   `${tile.left}%`,
              top:    `${tile.top}%`,
              width:  `${tile.width}%`,
              height: `${tile.height}%`,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
