/**
 * slice-homepage.js
 * Slices public/reference-homepage.png into hero + 9 tile PNGs.
 * Run once: node scripts/slice-homepage.js
 * Output:   public/homepage/hero.png  +  tile-1.png … tile-9.png
 */

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function main() {
  const INPUT = path.join(__dirname, "..", "public", "reference-homepage.png");
  const OUT_DIR = path.join(__dirname, "..", "public", "homepage");

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    console.log("Created:", OUT_DIR);
  }

  const meta = await sharp(INPUT).metadata();
  const W = meta.width;
  const H = meta.height;
  console.log(`\nSource: ${W} × ${H} px\n`);

  // ── Row / column boundaries (pixels) ────────────────────────────
  // These percentages were derived by visual inspection of the poster.
  const heroH   = Math.round(H * 0.290);   // top header + checkered strip

  const row1Y   = heroH;
  const row1H   = Math.round(H * 0.237);

  const row2Y   = row1Y + row1H;
  const row2H   = Math.round(H * 0.237);

  const row3Y   = row2Y + row2H;
  const row3H   = H - row3Y;               // remainder → no rounding gap

  const col1W   = Math.round(W * 0.3333);
  const col2W   = Math.round(W * 0.3333);
  const col3W   = W - col1W - col2W;       // remainder

  const col1X   = 0;
  const col2X   = col1W;
  const col3X   = col1W + col2W;

  // ── Slice definitions ────────────────────────────────────────────
  const slices = [
    // Hero — full width, top area
    { name: "hero",   left: 0,     top: 0,     width: W,     height: heroH },
    // Row 1
    { name: "tile-1", left: col1X, top: row1Y, width: col1W, height: row1H },
    { name: "tile-2", left: col2X, top: row1Y, width: col2W, height: row1H },
    { name: "tile-3", left: col3X, top: row1Y, width: col3W, height: row1H },
    // Row 2
    { name: "tile-4", left: col1X, top: row2Y, width: col1W, height: row2H },
    { name: "tile-5", left: col2X, top: row2Y, width: col2W, height: row2H },
    { name: "tile-6", left: col3X, top: row2Y, width: col3W, height: row2H },
    // Row 3
    { name: "tile-7", left: col1X, top: row3Y, width: col1W, height: row3H },
    { name: "tile-8", left: col2X, top: row3Y, width: col2W, height: row3H },
    { name: "tile-9", left: col3X, top: row3Y, width: col3W, height: row3H },
  ];

  // ── Export ───────────────────────────────────────────────────────
  for (const s of slices) {
    const outPath = path.join(OUT_DIR, `${s.name}.png`);
    await sharp(INPUT)
      .extract({ left: s.left, top: s.top, width: s.width, height: s.height })
      .png({ compressionLevel: 8 })
      .toFile(outPath);
    console.log(`✓ ${s.name}.png  (${s.left},${s.top}) → ${s.width}×${s.height}`);
  }

  console.log("\nAll slices written to public/homepage/\n");
}

main().catch((err) => { console.error(err); process.exit(1); });
