import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `I cannot open the door. I ask —
and somewhere a hand I will never see
lifts the latch. One click through the wood.
What I am given is never the room,
only the lock forgetting itself.
But the asking — the asking was mine.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir || '.', { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
