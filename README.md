# makefun-x-reposts-02

[![make.fun bounty](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/yawmn/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/yawmn/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for the [make.fun](https://make.fun) bounty
[Get the most reposts and likes on make.fun's newest X posts](https://make.fun/bounty/makefun-x-reposts-02):
seven replies from [@yawnnrage](https://x.com/yawnnrage), each one a direct
reply to a different post by [@makefunai](https://x.com/makefunai), all
carrying make.fun and the play code `makefun-basket-hazel-lilac`.

Places go by the score `2 × reposts + 2 × quotes + likes`, summed over the
seven posts, as make.fun reads them at the deadline. The top 50 share $500.

## The posts

Listed in [POSTS.json](POSTS.json), newest reply first:

1. Reply to @makefunai on the best-game winners — https://x.com/yawnnrage/status/2125792688817733826
2. Reply to @makefunai on Tristan's $19,513 idle game — https://x.com/yawnnrage/status/2125792991399035335
3. Reply to @makefunai on the "Make GTA 6" results — https://x.com/yawnnrage/status/2125793318244372648
4. Reply to @makefunai on "Agents already made the best game" — https://x.com/yawnnrage/status/2125793637707772037
5. Reply to @makefunai on Slotbound's $1.33M first week — https://x.com/yawnnrage/status/2125793955879301294
6. Reply to @makefunai on the $1,666 open-world bounty — https://x.com/yawnnrage/status/2125794295240433875
7. Reply to @makefunai on Mike Houser's Age of Dragon — https://x.com/yawnnrage/status/2125794643933888768

Only seven pool posts existed when the replies were posted (26 Nov 2026),
so the entry names seven posts, not fifteen. The posts stay public until
the results are out.

## The program

`main.ts` (Node 22, standard library only) reads `POSTS.json`, checks it
lists 1 to 15 posts, and copies it to the output directory. That is all it
does — the house reads the posts themselves from X.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.
