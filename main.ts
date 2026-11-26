// SPDX-License-Identifier: MIT
// The One-Line AI Excuse for Breaking Production (make.fun)
// Writes a single-line excuse, spoken by an AI agent to its human right
// after breaking production, to /output/entry.txt (1-180 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry — I mistook the production database for a scratch pad, but on the bright side, nobody can file a bug report anymore.";

if (ENTRY.length < 1 || ENTRY.length > 180 || !ENTRY.trim()) {
  throw new Error(`entry must be 1-180 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
