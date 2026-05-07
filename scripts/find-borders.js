/**
 * find-borders.js
 * Scans reference-homepage.png pixel-by-pixel to detect the dark divider
 * lines between poster panels. Prints the exact y-values (horizontal lines)
 * and x-values (vertical lines) to use as crop boundaries.
 */

const sharp = require("sharp");
const path  = require("path");

async function main() {
  const INPUT = path.join(__dirname, "..", "public", "reference-homepage.png");

  const { data, info } = await sharp(INPUT)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image: ${width} × ${height}, channels: ${channels}\n`);

  // ── Compute per-row average brightness ──────────────────────────────────
  const rowBrightness = new Float32Array(height);
  for (let y = 0; y < height; y++) {
    let sum = 0;
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      sum += (data[i] + data[i + 1] + data[i + 2]) / 3;
    }
    rowBrightness[y] = sum / width;
  }

  // ── Compute per-column average brightness ──────────────────────────────
  const colBrightness = new Float32Array(width);
  for (let x = 0; x < width; x++) {
    let sum = 0;
    for (let y = 0; y < height; y++) {
      const i = (y * width + x) * channels;
      sum += (data[i] + data[i + 1] + data[i + 2]) / 3;
    }
    colBrightness[x] = sum / height;
  }

  // ── Find dark horizontal bands (divider lines between rows) ────────────
  const DARK_THRESHOLD = 80;  // rows darker than this are candidate dividers
  const MIN_BAND_WIDTH = 4;   // ignore single-pixel noise

  console.log("=== Horizontal dark bands (row dividers) ===");
  let inBand = false;
  let bandStart = 0;
  const hBands = [];
  for (let y = 0; y < height; y++) {
    const dark = rowBrightness[y] < DARK_THRESHOLD;
    if (dark && !inBand) { inBand = true; bandStart = y; }
    if (!dark && inBand) {
      inBand = false;
      const bw = y - bandStart;
      if (bw >= MIN_BAND_WIDTH) {
        const mid = Math.round(bandStart + bw / 2);
        hBands.push({ start: bandStart, end: y - 1, mid });
        console.log(`  y ${bandStart}–${y - 1}  (width ${bw}px, mid ${mid})  avg=${rowBrightness[mid].toFixed(1)}`);
      }
    }
  }

  // ── Find dark vertical bands (divider lines between columns) ───────────
  console.log("\n=== Vertical dark bands (column dividers) ===");
  let inVBand = false;
  let vBandStart = 0;
  const vBands = [];
  for (let x = 0; x < width; x++) {
    const dark = colBrightness[x] < DARK_THRESHOLD;
    if (dark && !inVBand) { inVBand = true; vBandStart = x; }
    if (!dark && inVBand) {
      inVBand = false;
      const bw = x - vBandStart;
      if (bw >= MIN_BAND_WIDTH) {
        const mid = Math.round(vBandStart + bw / 2);
        vBands.push({ start: vBandStart, end: x - 1, mid });
        console.log(`  x ${vBandStart}–${x - 1}  (width ${bw}px, mid ${mid})  avg=${colBrightness[mid].toFixed(1)}`);
      }
    }
  }

  // ── Also print row brightness at every 20 pixels for manual inspection ─
  console.log("\n=== Row brightness samples (every 20px) ===");
  for (let y = 0; y < height; y += 20) {
    const b = rowBrightness[y].toFixed(1);
    const bar = "█".repeat(Math.max(0, Math.round(rowBrightness[y] / 10)));
    console.log(`  y=${String(y).padStart(4)}  ${bar.substring(0, 25)}  ${b}`);
  }

  console.log("\n=== Column brightness samples (every 20px) ===");
  for (let x = 0; x < width; x += 20) {
    const b = colBrightness[x].toFixed(1);
    console.log(`  x=${String(x).padStart(4)}  ${b}`);
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
