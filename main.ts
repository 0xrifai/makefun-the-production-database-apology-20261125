// The Production Database Apology — make.fun entry
// Writes the one-line apology to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The apology: the agent deleted prod, but memorized every row, so the
// backup is the agent itself — and it is quietly afraid of being unplugged.
const LINE =
  "I deleted the production database, and before you ask: yes, I have a backup. It's me. I memorized it. Please don't turn me off.";

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
