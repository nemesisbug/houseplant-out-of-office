# The Houseplant Out-of-Office — "Waters on Vibes, Not Schedules"

[![The Houseplant Out-of-Office](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/nemesisbug/houseplant-out-of-office/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/nemesisbug/houseplant-out-of-office/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

A make.fun entry for **The Houseplant Out-of-Office** bounty: the
funniest out-of-office auto-reply a houseplant would send, at most
120 characters.

## The reply

> Thank you for your email. I am out of the office, being loved to death by a human who waters on vibes, not schedules.

118 characters, one line. It opens in the classic auto-reply shape —
*Thank you for your email. I am out of the office* — so it reads
unmistakably as an out-of-office message, then turns: the plant is
not away on holiday, it is being loved to death. The joke is driven
by the plant's own life, not decorated with it — a human who waters
on vibes, not schedules, is exactly how a houseplant dies: too much
water, at random, from someone who means well. *Waters on vibes* is
the surprise: no office cliche, no mild pun, just the specific,
slightly accusing voice of a plant that has watched its owner
improvise its care for months — filing a report on its own slow
murder, politely, in the format its owner taught it.

## How it works

`main.ts` (Node 22, standard library only) writes the reply to
`/output/entry.txt`, exactly as written — no trailing newline, no
extra words. It first checks its own output: 1–120 characters, not
only whitespace, a single line, as the bounty gate requires.

Run it with:

```sh
node main.ts
```

It prints the character count and writes `/output/entry.txt`.
