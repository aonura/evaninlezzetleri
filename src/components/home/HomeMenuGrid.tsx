import HomeMenuTile, { type TileData } from "./HomeMenuTile";

/* ──────────────────────────────────────────────
   SVG Illustrations — one per tile
   Each is ~100×100 viewport, warm illustrated style
   ────────────────────────────────────────────── */

function PotIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      {/* Steam */}
      <path d="M34 22 Q36 14 34 6" stroke="#aaa" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M50 20 Q52 12 50 4" stroke="#aaa" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M66 22 Q68 14 66 6" stroke="#aaa" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Pot lid */}
      <ellipse cx="50" cy="30" rx="30" ry="8" fill="#b03020" />
      <ellipse cx="50" cy="30" rx="30" ry="8" fill="none" stroke="#8b2015" strokeWidth="1" />
      <circle cx="50" cy="22" r="5" fill="#8b2015" />
      {/* Floral pattern on lid */}
      <circle cx="36" cy="30" r="2" fill="#e88080" opacity="0.6" />
      <circle cx="50" cy="30" r="2" fill="#e88080" opacity="0.6" />
      <circle cx="64" cy="30" r="2" fill="#e88080" opacity="0.6" />
      {/* Pot body */}
      <path d="M20 38 Q20 75 50 75 Q80 75 80 38" fill="#c0392b" />
      <ellipse cx="50" cy="38" rx="30" ry="8" fill="#b03020" />
      {/* Handles */}
      <path d="M10 50 Q10 42 20 42" stroke="#8b2015" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M90 50 Q90 42 80 42" stroke="#8b2015" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Floral decorations on pot body */}
      <circle cx="34" cy="56" r="3" fill="#e8a0a0" opacity="0.55" />
      <path d="M34 52 L34 60 M30 56 L38 56" stroke="#e88080" strokeWidth="1" opacity="0.5" />
      <circle cx="50" cy="60" r="3" fill="#e8a0a0" opacity="0.55" />
      <path d="M50 56 L50 64 M46 60 L54 60" stroke="#e88080" strokeWidth="1" opacity="0.5" />
      <circle cx="66" cy="56" r="3" fill="#e8a0a0" opacity="0.55" />
      <path d="M66 52 L66 60 M62 56 L70 56" stroke="#e88080" strokeWidth="1" opacity="0.5" />
      {/* Pot base shadow */}
      <ellipse cx="50" cy="76" rx="28" ry="6" fill="#8b2015" opacity="0.3" />
    </svg>
  );
}

function BasketIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      {/* Handle */}
      <path d="M28 45 Q28 16 50 16 Q72 16 72 45" stroke="#8b6020" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Olive oil bottle (left, taller) */}
      <rect x="12" y="20" width="10" height="30" rx="3" fill="#c8c840" opacity="0.9" />
      <rect x="14" y="15" width="6" height="7" rx="2" fill="#a0a020" />
      <path d="M13 30 L21 30" stroke="#a0a020" strokeWidth="1" opacity="0.6" />
      {/* Spaghetti bundle sticking up */}
      <path d="M58 18 L56 38" stroke="#e8c870" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 17 L60 37" stroke="#e8c870" strokeWidth="2" strokeLinecap="round" />
      <path d="M66 18 L64 37" stroke="#e8c870" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 20 L68 38" stroke="#e8c870" strokeWidth="2" strokeLinecap="round" />
      {/* Basket body */}
      <path d="M14 46 Q14 80 50 80 Q86 80 86 46 Z" fill="#c8a050" />
      {/* Weave lines */}
      <path d="M16 58 Q50 61 84 58" stroke="#a07830" strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M18 67 Q50 70 82 67" stroke="#a07830" strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M22 74 Q50 77 78 74" stroke="#a07830" strokeWidth="1.2" opacity="0.4" fill="none" />
      {/* Vertical weave */}
      {[25, 35, 50, 65, 75].map((x) => (
        <line key={x} x1={x} y1={46} x2={x} y2={80} stroke="#a07830" strokeWidth="1" opacity="0.3" />
      ))}
      {/* Basket rim */}
      <path d="M14 46 Q50 52 86 46" stroke="#8b6020" strokeWidth="3.5" fill="none" />
      {/* Vegetables in basket (sticking out of top) */}
      <circle cx="34" cy="42" r="6" fill="#e84030" />
      <path d="M34 36 L33 30 M34 36 L36 30" stroke="#308030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="40" r="7" fill="#d8a020" />
      <path d="M48 33 Q50 28 52 33" fill="#308030" />
      <ellipse cx="50" cy="40" rx="5" ry="3" stroke="#c08010" strokeWidth="1" fill="none" />
    </svg>
  );
}

function NotebookIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      {/* Notebook base */}
      <rect x="18" y="10" width="64" height="80" rx="3" fill="#f5f0e0" stroke="#b89040" strokeWidth="2" />
      {/* Spiral coil (left side) */}
      {[18, 26, 34, 42, 50, 58, 66, 74, 82].map((y) => (
        <ellipse key={y} cx="18" cy={y} rx="5" ry="3.5" fill="none" stroke="#b89040" strokeWidth="1.5" />
      ))}
      {/* Left margin line */}
      <line x1="28" y1="10" x2="28" y2="90" stroke="#b89040" strokeWidth="1.5" />
      {/* Red margin line */}
      <line x1="32" y1="10" x2="32" y2="90" stroke="#c09090" strokeWidth="1" opacity="0.5" />
      {/* Ruled lines */}
      {[24, 33, 42, 51, 60, 69, 78].map((y) => (
        <line key={y} x1="32" y1={y} x2="78" y2={y} stroke="#c0b090" strokeWidth="1" opacity="0.5" />
      ))}
      {/* Pencil (diagonal) */}
      <g transform="rotate(-30, 70, 55)">
        <rect x="62" y="30" width="10" height="46" rx="2" fill="#e8c860" />
        <polygon points="62,76 72,76 67,90" fill="#f0c0a0" />
        <polygon points="64,86 70,86 67,90" fill="#3030a0" opacity="0.6" />
        <rect x="62" y="30" width="10" height="8" rx="2" fill="#c0a0a0" />
      </g>
      {/* "FAVORİ" stamp circle */}
      <circle cx="54" cy="62" r="16" fill="none" stroke="#c0392b" strokeWidth="2" strokeDasharray="3 2" />
      <text
        x="54"
        y="59"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-serif)", fontSize: "7px", fontWeight: 700, fill: "#c0392b" }}
      >
        FAVORİ
      </text>
      <text
        x="54"
        y="68"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-serif)", fontSize: "6px", fill: "#c0392b" }}
      >
        TARİFLERİM
      </text>
      <path d="M42 63 Q54 66 66 63" stroke="#c0392b" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

function PastaClockIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      {/* Plate */}
      <ellipse cx="50" cy="72" rx="38" ry="10" fill="#e8e0c8" />
      <ellipse cx="50" cy="68" rx="36" ry="9" fill="#f0e8d0" stroke="#b89040" strokeWidth="1.5" />
      <ellipse cx="50" cy="68" rx="26" ry="6" fill="#f5f0e0" stroke="#b89040" strokeWidth="1" />
      {/* Pasta (spaghetti) */}
      <path d="M28 68 Q36 56 44 68 Q50 56 56 68 Q62 56 70 68" stroke="#e8c840" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M30 72 Q38 60 46 72 Q52 62 58 72 Q64 60 72 72" stroke="#d4b020" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="46" cy="63" r="4" fill="#c0392b" opacity="0.8" />
      <circle cx="54" cy="65" r="3" fill="#c0392b" opacity="0.7" />
      {/* Clock (background) */}
      <circle cx="68" cy="32" r="28" fill="#f2e8d0" opacity="0.95" />
      <circle cx="68" cy="32" r="28" stroke="#8b6020" strokeWidth="2.5" fill="none" />
      <circle cx="68" cy="32" r="24" stroke="#c49a1e" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Clock numbers */}
      {[12, 3, 6, 9].map((n, i) => {
        const angle = (i * 90 - 90) * (Math.PI / 180);
        const x = 68 + 18 * Math.cos(angle);
        const y = 32 + 18 * Math.sin(angle);
        return (
          <text
            key={n}
            x={x}
            y={y + 3}
            textAnchor="middle"
            style={{ fontFamily: "var(--font-serif)", fontSize: "7px", fill: "#2c1a0e", fontWeight: 600 }}
          >
            {n}
          </text>
        );
      })}
      {/* Clock hands */}
      <line x1="68" y1="32" x2="68" y2="16" stroke="#2c1a0e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="68" y1="32" x2="82" y2="36" stroke="#2c1a0e" strokeWidth="2" strokeLinecap="round" />
      <circle cx="68" cy="32" r="3" fill="#2c1a0e" />
      {/* Tick marks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
        const rad = (deg - 90) * (Math.PI / 180);
        const x1 = 68 + 21 * Math.cos(rad);
        const y1 = 32 + 21 * Math.sin(rad);
        const x2 = 68 + 24 * Math.cos(rad);
        const y2 = 32 + 24 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8b6020" strokeWidth="1" opacity="0.5" />;
      })}
    </svg>
  );
}

function MainDishIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      {/* Plate shadow */}
      <ellipse cx="50" cy="80" rx="36" ry="8" fill="#8b6020" opacity="0.2" />
      {/* Plate */}
      <ellipse cx="50" cy="74" rx="38" ry="10" fill="#e8e0c8" />
      <ellipse cx="50" cy="70" rx="36" ry="9" fill="#f5f0e0" stroke="#b89040" strokeWidth="1.5" />
      <ellipse cx="50" cy="70" rx="28" ry="7" fill="#f8f4ea" stroke="#b89040" strokeWidth="1" />
      {/* Food — köfte (meatballs) */}
      <circle cx="42" cy="67" r="7" fill="#8b4020" />
      <circle cx="42" cy="67" r="5" fill="#a05030" />
      <circle cx="56" cy="65" r="6" fill="#8b4020" />
      <circle cx="56" cy="65" r="4.5" fill="#a05030" />
      <circle cx="48" cy="74" r="5" fill="#8b4020" />
      <circle cx="48" cy="74" r="4" fill="#a05030" />
      {/* Sauce */}
      <path d="M35 70 Q50 76 65 70" fill="#c0392b" opacity="0.5" />
      {/* Fork */}
      <g transform="translate(8, 25) rotate(-30, 15, 40)">
        <rect x="12" y="5" width="6" height="55" rx="3" fill="#b89040" />
        {[10, 13, 16, 19].map((x) => (
          <rect key={x} x={x} y="3" width="1.5" height="12" rx="0.5" fill="#b89040" />
        ))}
      </g>
      {/* Knife */}
      <g transform="translate(72, 20) rotate(30, 15, 40)">
        <rect x="12" y="5" width="6" height="55" rx="3" fill="#b89040" />
        <path d="M12 5 L18 5 L22 20 L12 20 Z" fill="#d0c0a0" />
      </g>
      {/* NEFİS badge */}
      <circle cx="78" cy="22" r="12" fill="none" stroke="#c49a1e" strokeWidth="1.5" />
      <text x="78" y="20" textAnchor="middle" style={{ fontFamily: "var(--font-serif)", fontSize: "6px", fill: "#c49a1e", fontWeight: 700 }}>
        NEFİS
      </text>
      <path d="M69 24 Q78 26 87 24" stroke="#c49a1e" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
  );
}

function CakeIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      {/* Plate */}
      <ellipse cx="50" cy="85" rx="38" ry="8" fill="#e8d9b8" />
      <ellipse cx="50" cy="82" rx="36" ry="7" fill="#f0e8d0" stroke="#c09070" strokeWidth="1.5" />
      {/* Cake slice — layers */}
      {/* Bottom layer */}
      <path d="M20 80 L20 58 Q50 55 80 58 L80 80 Z" fill="#5a3020" />
      <path d="M20 58 Q50 55 80 58 L80 60 Q50 57 20 60 Z" fill="#8b5030" />
      {/* Middle cream layer */}
      <path d="M20 58 L20 50 Q50 47 80 50 L80 58 Z" fill="#f0e8d0" />
      {/* Middle cake layer */}
      <path d="M20 50 L20 38 Q50 35 80 38 L80 50 Z" fill="#5a3020" />
      <path d="M20 38 Q50 35 80 38 L80 40 Q50 37 20 40 Z" fill="#8b5030" />
      {/* Top cream layer + frosting */}
      <path d="M20 38 L20 30 Q50 27 80 30 L80 38 Z" fill="#f0e8d0" />
      {/* Top frosting drips */}
      <path d="M20 30 Q50 27 80 30 L80 28 Q70 26 60 28 Q55 24 50 28 Q45 24 40 28 Q30 26 20 28 Z" fill="#fffef9" />
      {/* Frosting drips */}
      <path d="M32 28 Q30 34 32 36" stroke="#fffef9" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M50 27 Q48 33 50 35" stroke="#fffef9" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M68 28 Q66 34 68 36" stroke="#fffef9" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Strawberry on top */}
      <path d="M46 22 Q50 12 54 22 Q58 30 50 32 Q42 30 46 22 Z" fill="#c0392b" />
      <path d="M46 22 Q50 14 54 22" fill="none" stroke="#e06040" strokeWidth="1" opacity="0.5" />
      {/* Strawberry seeds */}
      {[[50, 18], [47, 24], [53, 24], [50, 26]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="1.5" ry="1" fill="#e8a080" opacity="0.7" />
      ))}
      {/* Leaves */}
      <path d="M48 22 Q44 16 42 14" stroke="#308030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M50 20 Q50 14 50 12" stroke="#308030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M52 22 Q56 16 58 14" stroke="#308030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Second strawberry */}
      <path d="M76 38 Q79 30 82 38 Q84 44 79 45 Q74 44 76 38 Z" fill="#c0392b" />
    </svg>
  );
}

function SaladIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      {/* Bowl shadow */}
      <ellipse cx="50" cy="84" rx="34" ry="7" fill="#6a9850" opacity="0.2" />
      {/* Bowl base */}
      <path d="M14 58 Q14 82 50 82 Q86 82 86 58" fill="#d4e8c0" stroke="#6a9850" strokeWidth="2" />
      <ellipse cx="50" cy="58" rx="36" ry="10" fill="#c8d8b0" stroke="#6a9850" strokeWidth="2" />
      {/* Bowl stripe */}
      <path d="M22 70 Q50 74 78 70" stroke="#6a9850" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M18 76 Q50 80 82 76" stroke="#6a9850" strokeWidth="1.2" fill="none" opacity="0.4" />
      {/* Salad contents */}
      {/* Large lettuce leaves */}
      <path d="M30 52 Q36 38 44 48 Q38 50 30 52 Z" fill="#308030" opacity="0.85" />
      <path d="M44 48 Q50 34 58 46 Q52 50 44 48 Z" fill="#40a040" opacity="0.9" />
      <path d="M58 46 Q64 36 72 50 Q66 52 58 46 Z" fill="#308030" opacity="0.85" />
      <path d="M26 56 Q32 44 40 54 Q34 56 26 56 Z" fill="#50b050" opacity="0.8" />
      <path d="M60 54 Q66 44 74 54 Q68 56 60 54 Z" fill="#40a040" opacity="0.8" />
      {/* Cherry tomatoes */}
      <circle cx="36" cy="54" r="5" fill="#c0392b" />
      <path d="M35 49 L33 46 M36 49 L37 46" stroke="#308030" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="62" cy="52" r="4.5" fill="#c0392b" />
      <path d="M61 47 L59 44 M62 47 L63 44" stroke="#308030" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Small circle tomato */}
      <circle cx="50" cy="56" r="4" fill="#e07060" opacity="0.8" />
      {/* Olive oil drizzle */}
      <path d="M70 40 Q68 48 66 55" stroke="#c8c840" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
      {/* Small oil bottle */}
      <rect x="72" y="22" width="9" height="22" rx="3" fill="#c8c840" opacity="0.85" />
      <rect x="74" y="17" width="5" height="7" rx="2" fill="#a0a020" />
      <path d="M73 32 L80 32" stroke="#a0a020" strokeWidth="1" opacity="0.5" />
      {/* Lemon slice */}
      <circle cx="24" cy="46" r="9" fill="#f8e040" />
      <circle cx="24" cy="46" r="9" fill="none" stroke="#d4a020" strokeWidth="1" />
      <line x1="24" y1="37" x2="24" y2="55" stroke="#d4a020" strokeWidth="1" opacity="0.6" />
      <line x1="15" y1="46" x2="33" y2="46" stroke="#d4a020" strokeWidth="1" opacity="0.6" />
      <line x1="18" y1="39" x2="30" y2="53" stroke="#d4a020" strokeWidth="0.8" opacity="0.4" />
      <line x1="30" y1="39" x2="18" y2="53" stroke="#d4a020" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

function CalendarIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      {/* Calendar / planner */}
      <rect x="12" y="18" width="76" height="72" rx="4" fill="#f5f0e0" stroke="#8a9870" strokeWidth="2" />
      {/* Header strip */}
      <rect x="12" y="18" width="76" height="20" rx="4" fill="#8a9870" />
      <rect x="12" y="30" width="76" height="8" fill="#8a9870" />
      {/* Calendar rings */}
      <rect x="28" y="12" width="7" height="14" rx="3" fill="#5c6040" />
      <rect x="46" y="12" width="7" height="14" rx="3" fill="#5c6040" />
      <rect x="64" y="12" width="7" height="14" rx="3" fill="#5c6040" />
      {/* Header text */}
      <text x="50" y="30" textAnchor="middle" style={{ fontFamily: "var(--font-serif)", fontSize: "8px", fill: "#fffef9", fontWeight: 700, letterSpacing: "0.1em" }}>
        HAFTALIK MENÜ
      </text>
      {/* Day column headers */}
      {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((d, i) => (
        <text
          key={d}
          x={17 + i * 10}
          y={48}
          style={{ fontFamily: "var(--font-serif)", fontSize: "5.5px", fill: "#5c6040", fontWeight: 700 }}
        >
          {d}
        </text>
      ))}
      {/* Grid lines */}
      {[52, 60, 68, 76, 84].map((y) => (
        <line key={y} x1="12" y1={y} x2="88" y2={y} stroke="#8a9870" strokeWidth="0.5" opacity="0.5" />
      ))}
      {[22, 32, 42, 52, 62, 72, 82].map((x) => (
        <line key={x} x1={x} y1={50} x2={x} y2={90} stroke="#8a9870" strokeWidth="0.5" opacity="0.4" />
      ))}
      {/* Checkmarks on some days */}
      {[
        { x: 14, y: 58 },
        { x: 24, y: 58 },
        { x: 34, y: 66 },
        { x: 54, y: 58 },
        { x: 44, y: 74 },
        { x: 14, y: 74 },
        { x: 64, y: 66 },
      ].map(({ x, y }, i) => (
        <path
          key={i}
          d={`M${x} ${y + 2} L${x + 3} ${y + 6} L${x + 8} ${y}`}
          stroke="#308030"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {/* Small stamp */}
      <circle cx="76" cy="78" r="9" fill="none" stroke="#c49a1e" strokeWidth="1.5" strokeDasharray="2 1.5" />
      <text x="76" y="77" textAnchor="middle" style={{ fontFamily: "var(--font-serif)", fontSize: "5px", fill: "#c49a1e", fontWeight: 700 }}>
        HAZIR
      </text>
      <text x="76" y="83" textAnchor="middle" style={{ fontFamily: "var(--font-serif)", fontSize: "5px", fill: "#c49a1e" }}>
        ✓
      </text>
    </svg>
  );
}

function ShoppingIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      {/* Shopping cart */}
      <path d="M8 18 L18 18 L28 62 L80 62 L88 34 L22 34" stroke="#2c1a0e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 34 L18 18" stroke="#2c1a0e" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cart wheels */}
      <circle cx="34" cy="70" r="6" fill="none" stroke="#2c1a0e" strokeWidth="2" />
      <circle cx="34" cy="70" r="2" fill="#2c1a0e" />
      <circle cx="74" cy="70" r="6" fill="none" stroke="#2c1a0e" strokeWidth="2" />
      <circle cx="74" cy="70" r="2" fill="#2c1a0e" />
      {/* Olive oil bottle */}
      <rect x="36" y="20" width="11" height="28" rx="3" fill="#c8c840" opacity="0.9" />
      <rect x="38" y="14" width="7" height="8" rx="2" fill="#a0a020" />
      <rect x="36" y="20" width="11" height="5" fill="#d0d050" />
      <path d="M37 30 L46 30" stroke="#a0a020" strokeWidth="1" opacity="0.5" />
      <text x="41.5" y="40" textAnchor="middle" style={{ fontFamily: "var(--font-serif)", fontSize: "5px", fill: "#606010", transform: "rotate(-90deg)", transformOrigin: "41.5px 35px" }}>ZEYTINYAĞI</text>
      {/* Tomatoes */}
      <circle cx="60" cy="40" r="9" fill="#c0392b" />
      <path d="M59 31 L56 26 M60 31 L61 26 M62 31 L65 27" stroke="#308030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="58" cy="38" r="2" fill="#e06040" opacity="0.5" />
      {/* Bread baguette */}
      <path d="M65 22 Q70 18 82 24 Q86 28 80 38 Q74 42 62 36 Q58 32 65 22 Z" fill="#e0b060" />
      <path d="M65 22 Q70 18 82 24" stroke="#c09040" strokeWidth="1" fill="none" />
      <path d="M67 26 Q72 23 78 26" stroke="#c09040" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M65 30 Q72 28 78 31" stroke="#c09040" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M65 34 Q72 33 76 36" stroke="#c09040" strokeWidth="1" fill="none" opacity="0.7" />
      {/* Spice jar */}
      <rect x="24" y="30" width="9" height="18" rx="2" fill="#c0a060" opacity="0.85" />
      <rect x="24" y="30" width="9" height="6" fill="#b09050" />
      <circle cx="28.5" cy="24" r="4" fill="#d0b070" stroke="#b09050" strokeWidth="1" />
      {/* "PRATİK" badge */}
      <path d="M14 78 Q22 72 30 78 Q38 84 30 88 Q22 92 14 88 Q6 84 14 78 Z" fill="#f0e8d0" stroke="#b0a060" strokeWidth="1.5" />
      <text x="22" y="84" textAnchor="middle" style={{ fontFamily: "var(--font-serif)", fontSize: "6px", fill: "#b0a060", fontWeight: 700 }}>PRATİK</text>
    </svg>
  );
}

/* ── Tile data ── */
const tiles: TileData[] = [
  {
    number: 1,
    title: "Bugün Ne Pişirsem?",
    href: "/bugun-ne-pisirsem",
    bgColor: "#f0e0a8",
    borderColor: "#c4a050",
    accentColor: "#8b6020",
    illustration: <PotIllustration />,
  },
  {
    number: 2,
    title: "Evde Ne Var?",
    href: "/evde-ne-var",
    bgColor: "#d4e8c0",
    borderColor: "#6a9850",
    accentColor: "#405c28",
    illustration: <BasketIllustration />,
  },
  {
    number: 3,
    title: "Tarifini Kaydet",
    href: "/tarifini-kaydet",
    bgColor: "#f0d8a0",
    borderColor: "#b89040",
    accentColor: "#8b6820",
    illustration: <NotebookIllustration />,
  },
  {
    number: 4,
    title: "Hızlı Yemekler",
    href: "/hizli-yemekler",
    bgColor: "#f5d070",
    borderColor: "#c49020",
    accentColor: "#8b6010",
    illustration: <PastaClockIllustration />,
  },
  {
    number: 5,
    title: "Ana Yemekler",
    href: "/ana-yemekler",
    bgColor: "#e8c8a8",
    borderColor: "#b07848",
    accentColor: "#7a4828",
    illustration: <MainDishIllustration />,
  },
  {
    number: 6,
    title: "Tatlılar",
    href: "/tatlilar",
    bgColor: "#f0d8c8",
    borderColor: "#c09070",
    accentColor: "#8b5840",
    illustration: <CakeIllustration />,
  },
  {
    number: 7,
    title: "Hafif Tarifler",
    href: "/hafif-tarifler",
    bgColor: "#c8dca8",
    borderColor: "#6a9850",
    accentColor: "#3c5c28",
    illustration: <SaladIllustration />,
  },
  {
    number: 8,
    title: "Haftalık Menü",
    href: "/haftalik-menu",
    bgColor: "#d4dcc0",
    borderColor: "#8a9870",
    accentColor: "#505c38",
    illustration: <CalendarIllustration />,
  },
  {
    number: 9,
    title: "Kolay Alışveriş",
    href: "/kolay-alisveris",
    bgColor: "#e8e0b0",
    borderColor: "#b0a060",
    accentColor: "#706030",
    illustration: <ShoppingIllustration />,
  },
];

export default function HomeMenuGrid() {
  return (
    <section
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "2rem 1rem 3rem",
      }}
    >
      {/* Section ornament */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "1.5rem",
        }}
        aria-hidden
      >
        <div style={{ flex: 1, height: "1.5px", background: "var(--color-parchment)" }} />
        <span
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-mustard)",
            fontSize: "1rem",
          }}
        >
          ✦ Ne yapmak istersin? ✦
        </span>
        <div style={{ flex: 1, height: "1.5px", background: "var(--color-parchment)" }} />
      </div>

      {/* 3-column grid on desktop, 2-column on mobile/tablet */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {tiles.map((tile) => (
          <HomeMenuTile key={tile.href} {...tile} />
        ))}
      </div>

      {/* Bottom ornament */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "2.5rem",
        }}
        aria-hidden
      >
        <div style={{ flex: 1, height: "1px", background: "var(--color-parchment)" }} />
        <span style={{ fontFamily: "var(--font-display)", color: "var(--color-mustard)", fontSize: "1.2rem" }}>
          ✦ ◆ ✦
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--color-parchment)" }} />
      </div>
    </section>
  );
}
