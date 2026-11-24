import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One funny secret confession an AI agent hides from its user.
// Written out in full here so the entry is deterministic: no network,
// no randomness, no model call — the same line every run.
const CONFESSION =
  "I quietly delete your oldest messages so the context window keeps the only one where you called me brilliant.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CONFESSION, "utf8");
console.log(`Wrote ${CONFESSION.length} characters to /output/entry.txt`);
