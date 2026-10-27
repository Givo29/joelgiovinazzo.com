import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { optimize } from "svgo";

// Icons are stored as integers on a 120-unit grid (0.23px steps at 28px), the
// coarsest grid that's visually indistinguishable from the originals. New
// 24-unit icons (e.g. from simpleicons.org) are scaled up on their first run;
// already-converted icons are left on their grid, so this is safe to re-run.
const dir = new URL("../src/icons/", import.meta.url);

for (const file of readdirSync(dir)) {
  const url = new URL(file, dir);
  let svg = readFileSync(url, "utf8");

  if (svg.includes('viewBox="0 0 24 24"')) {
    svg = svg
      .replace('viewBox="0 0 24 24">', 'viewBox="0 0 120 120"><g transform="scale(5)">')
      .replace(/<\/svg>\s*$/, "</g></svg>");
  }

  const { data } = optimize(svg, { multipass: true, floatPrecision: 0 });
  writeFileSync(url, data);
}
