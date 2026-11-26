// Entry program for makefun-x-reposts-02 (Node 22, standard library only).
//
// The entry itself is the seven X replies listed in POSTS.json, posted from
// @yawnnrage, each one a direct reply to a different @makefunai pool post.
// This program does nothing clever with them: it just hands the list to the
// house by copying POSTS.json into the output directory, exactly as the
// bounty asks. The house reads the posts themselves from X and counts their
// reposts, quotes and likes; nothing written here changes that score.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The grader mounts the repository at /bot and expects output at /output.
// Locally those two environment variables stand in for the same paths.
const sourceDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Read the list first so a malformed POSTS.json fails loudly here instead
// of silently handing the house an unreadable file. The list must hold
// between 1 and 15 post addresses, the bounty's own limit.
const postsPath = join(sourceDir, "POSTS.json");
const listed = JSON.parse(readFileSync(postsPath, "utf8"));
if (!listed || !Array.isArray(listed.posts)) {
  throw new Error("POSTS.json must be an object with a posts list");
}
if (listed.posts.length < 1 || listed.posts.length > 15) {
  throw new Error(`POSTS.json must list 1 to 15 posts, found ${listed.posts.length}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postsPath, join(outputDir, "POSTS.json"));
