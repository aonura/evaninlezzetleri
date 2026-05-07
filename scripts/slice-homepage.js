/**
 * slice-homepage.js
 * Slices public/reference-homepage.png into hero + 9 tile PNGs.
 *
 * Crop boundaries were determined by scanning every pixel row/column for
 * dark divider bands (see scripts/find-borders.js).
 *
 * Detected dark bands (brightness < 80):
 *   Horizontal:  y 426-430  (hero ↔ row 1)
 *                y 796-801  (row 1 ↔ row 2)
 *                y 1126-1131 (row 2 ↔ row 3)
 *   Vertical:    x 363-368  (col 1 ↔ col 2)
 *                x 725-729  (col 2 ↔ col 3)
 *
 * Run:  node scripts/slice-homepage.js
 */

const sharp = require("sharp");
const path  = require("path");
const fs    = require("fs");

async function main() {
  const INPUT   = path.join(__dirname, "..", "public", "reference-homepage.png");
  const OUT_DIR = path.join(__dirname, "..", "public", "homepage");

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const meta = await sharp(INPUT).metadata();
  console.log(`\nSource: ${meta.width} × ${meta.height} px\n`);

  // ── Exact pixel boundaries from border scan ──────────────────────────
  //
  // Horizontal cuts (y):
  //   Hero ends just before the dark band at y=426
  //   Row 1  starts at y=426 (includes tile top-border), ends at y=796
  //   Row 2  starts at y=796, ends at y=1126
  //   Row 3  starts at y=1126, ends at y=1448 (bottom of image)
  //
  // Vertical cuts (x):
  //   Col 1  x=0   → x=363  (width 363)
  //   Col 2  x=363 → x=725  (width 362)
  //   Col 3  x=725 → x=1086 (width 361)

  const HERO_TOP    = 0;
  const HERO_H      = 426;   // ends just before dark band at y=426

  const ROW1_TOP    = 426;
  const ROW1_H      = 370;   // 796 - 426

  const ROW2_TOP    = 796;
  const ROW2_H      = 330;   // 1126 - 796

  const ROW3_TOP    = 1126;
  const ROW3_H      = 322;   // 1448 - 1126

  const COL1_X      = 0;
  const COL1_W      = 363;

  const COL2_X      = 363;
  const COL2_W      = 362;

  const COL3_X      = 725;
  const COL3_W      = 361;

  const slices = [
    // Hero — full width, top section
    { name: "hero",   left: 0,      top: HERO_TOP, width: meta.width, height: HERO_H  },

    // Row 1
    { name: "tile-1", left: COL1_X, top: ROW1_TOP, width: COL1_W,    height: ROW1_H  },
    { name: "tile-2", left: COL2_X, top: ROW1_TOP, width: COL2_W,    height: ROW1_H  },
    { name: "tile-3", left: COL3_X, top: ROW1_TOP, width: COL3_W,    height: ROW1_H  },

    // Row 2
    { name: "tile-4", left: COL1_X, top: ROW2_TOP, width: COL1_W,    height: ROW2_H  },
    { name: "tile-5", left: COL2_X, top: ROW2_TOP, width: COL2_W,    height: ROW2_H  },
    { name: "tile-6", left: COL3_X, top: ROW2_TOP, width: COL3_W,    height: ROW2_H  },

    // Row 3
    { name: "tile-7", left: COL1_X, top: ROW3_TOP, width: COL1_W,    height: ROW3_H  },
    { name: "tile-8", left: COL2_X, top: ROW3_TOP, width: COL2_W,    height: ROW3_H  },
    { name: "tile-9", left: COL3_X, top: ROW3_TOP, width: COL3_W,    height: ROW3_H  },
  ];

  // All 9 tiles are normalised to this exact size so every grid cell is
  // identical. The hero is exported at its natural crop size (unchanged).
  const TILE_SIZE = 362;

  for (const s of slices) {
    const outPath = path.join(OUT_DIR, `${s.name}.png`);
    const pipeline = sharp(INPUT)
      .extract({ left: s.left, top: s.top, width: s.width, height: s.height });

    if (s.name !== "hero") {
      // Resize every tile to an identical square so the grid is uniform.
      // fit: "fill" matches what the CSS does (object-fit: fill on equal-size
      // images causes zero visible distortion).
      pipeline.resize(TILE_SIZE, TILE_SIZE, { fit: "fill" });
    }

    await pipeline.png({ compressionLevel: 8 }).toFile(outPath);

    const finalW = s.name === "hero" ? s.width  : TILE_SIZE;
    const finalH = s.name === "hero" ? s.height : TILE_SIZE;
    console.log(`✓  ${s.name.padEnd(8)}  (${s.left}, ${s.top})  crop ${s.width}×${s.height}  →  output ${finalW}×${finalH}`);
  }

  // Verify totals add up to source dimensions
  console.log(`\nHeight check: ${HERO_H} + ${ROW1_H} + ${ROW2_H} + ${ROW3_H} = ${HERO_H+ROW1_H+ROW2_H+ROW3_H}  (source: ${meta.height})`);
  console.log(`Width  check: ${COL1_W} + ${COL2_W} + ${COL3_W} = ${COL1_W+COL2_W+COL3_W}  (source: ${meta.width})`);
  console.log("\n✓ All slices written to public/homepage/\n");
}

main().catch((err) => { console.error(err); process.exit(1); });
