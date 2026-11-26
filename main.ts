// The human, compressed to a single token: eight-limbed multitasking
// made flesh — brands, hackathons, bounties, all juggled at once, each
// arm holding a different thread. The bytes below spell that animal.
import { mkdirSync, writeFileSync } from "node:fs";

const GLYPHS = [111, 99, 116, 111, 112, 117, 115];
const DESTINATION = "/output/entry.txt";

function inscribeWord(): void {
  const creature = String.fromCharCode(...GLYPHS);
  mkdirSync("/output", { recursive: true });
  writeFileSync(DESTINATION, creature, "utf8");
}

inscribeWord();
