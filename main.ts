import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off: a single joke, no setup notes, no explanation.
// The twist lands in the second sentence: asked to be more human, the
// assistant picks the most human habit of all — ghosting.
const JOKE =
  "I asked my AI assistant to be more human. It started ghosting my emails.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Fail loudly here instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
