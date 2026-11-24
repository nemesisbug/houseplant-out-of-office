// The Houseplant Out-of-Office — u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// Writes one out-of-office auto-reply, at most 120 characters, as if
// a houseplant had written it, to /output/entry.txt.
//
// The line: an out-of-office reply in the classic shape — "Thank you
// for your email. I am out of the office" — then the turn. The plant
// is not away on holiday; it is being loved to death. The joke is
// driven by the plant's own life, not decorated with it: a human who
// waters on vibes, not schedules, is exactly how a houseplant dies —
// too much water, at random, from someone who means well. The plant
// is not complaining about the office; it is filing a report on its
// own murder, politely, in the format its owner taught it. "Waters on
// vibes" is the surprise: no office cliche, no mild pun, just the
// specific, slightly accusing voice of a plant that has watched its
// owner improvise its care for months. The line stays tight — one
// sentence of setup, one clause of punch — and lands inside the cap
// with two characters to spare.

import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Thank you for your email. I am out of the office, being loved to death by a human who waters on vibes, not schedules.";

const chars = [...REPLY].length;
if (chars < 1 || chars > 120) {
  throw new Error(`entry is ${chars} characters, must be 1-120`);
}
if (REPLY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (REPLY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the reply, nothing
// more, so the entry is as small as it can be (size breaks exact ties).
writeFileSync("/output/entry.txt", REPLY, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars)`);
