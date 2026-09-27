# Testing Benchmarks (Creative Benchmarks 2026)

Source: Motion's *Creative Benchmarks 2026*: an aggregated, anonymous dataset of 578,750 Meta (Facebook/Instagram) ad creatives from 6,015 advertiser accounts, about $1.29B in spend, September 1, 2025 to January 1, 2026 (pre-holiday, BFCM, post-holiday). It measures **spend distribution**, not ROAS, revenue or conversion.

Use it to set expectations and plan tests. It is about **ad creative**, not page design.

## Definitions

- **Winner:** spend ≥10× the account's median ad and ≥$500.
- **Mid-range:** ≥28 days of spend, not a winner.
- **Loser:** turned off before 28 days.
- **Hit rate:** winners ÷ total creatives × 100 (per account, unweighted).
- **Spend use ratio:** a format's share of spend ÷ its share of usage. >1.0 means it punches above its weight; <1.0 means it's overused relative to results.

## Key findings

- Winners are rare: roughly 5–8% of ads. Don't expect more than about 1 in 10–13 creatives to be a winner.
- About 55% of spend goes to winners, 28% to mid-range, 17% to losers.
- Mid-range ads keep accounts stable. They aren't failures.
- Accounts that launch more creatives per week tend to find more winners. This is an **association**, not proof of cause.
- A high hit rate can mean good judgment *or* too little testing.
- Offer-first banners and demos show up as scale formats. Text-forward assets (text-only, product image with text, simple GIFs) win more often than teams expect because they're fast to make and clear.
- Hooks signalling immediacy or a concrete reason to act (price, offer, urgency, newness) surface often; curiosity and bold claims can interrupt scrolling. Results are time-bound (holiday season).

| Spend tier (monthly) | Avg creatives / week | Avg hit rate | Top-25% creatives / week |
|---|---|---|---|
| Micro (<$10K) | 2.8 | 4.0% | 4.8 |
| Small ($10K–$50K) | 4.1 | 6.4% | 8.0 |
| Medium ($50K–$200K) | 6.6 | 8.1% | 15.9 |
| Large ($200K–$1M) | 11.2 | 8.6% | 31.1 |
| Enterprise ($1M+) | 18.8 | 8.8% | 54.6 |

## How to apply it to a page build

- **Plan the test (audit check 10).** Build so a challenger is easy: a second headline, the other belief split, or a different blueprint for the same offer. One page is a guess.
- **Message match across many ads.** If the user runs several ad hooks, the page's first screen should either match the top hook or be easy to vary (e.g. a headline chosen from a URL parameter).
- **Set expectations.** At micro spend (~3 ads/week, ~4% hit rate), winners are occasional. Judge pages on conversion rate from matched traffic, not on one ad's luck.

## Don't

- Don't claim testing more *causes* more winners. Say "is associated with."
- Don't infer ROAS, revenue or conversion impact from this data.
- Don't present these as the user's own numbers or as guarantees.
