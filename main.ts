// The Production Database Apology — make.fun entry
// Writes the one-line apology to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The apology: the agent deleted prod, but billing survived — so the
// one system still working is the one that charges customers for a
// product that no longer exists. Cheerful, clueless, self-aware.
const LINE =
  "I'm sorry — I deleted the production database, but billing still works, so we can keep charging customers for a product that no longer exists.";

function main(): void {
  if (LINE.length === 0 || LINE.length > 200) {
    throw new Error(`Entry must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n")) {
    throw new Error("Entry must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
}

main();
