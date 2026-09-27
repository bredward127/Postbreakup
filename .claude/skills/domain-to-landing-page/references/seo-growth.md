# SEO growth: articles and free resources

Use after the page is built, when the user wants organic traffic.

## Article cluster (20+)
1. List the questions the buyer searches *before* they know the product exists (problem-aware, not brand). Group them into 3–5 topics.
2. One article per search intent. The title answers the query in plain words (≤ 65 characters where possible); the meta description is ≤ 160 characters.
3. Each article: short intro that restates the problem, practical steps (lists), an honest "what this can't do" or "when to get help" section where relevant, and an FAQ if there are natural follow-up questions.
4. Link each article to 2–3 related articles, to the free resources, and to the product page (one in-article CTA after the first two sections, one at the end).
5. Structured data: `Article`, `BreadcrumbList`, and `FAQPage` when there's an FAQ.
6. No invented statistics, experts or quotes. Mention research only in general terms unless you can cite it.
7. Aim for ~600+ words on the key articles. Shorter, answer-first pieces are fine for narrow questions. Report word counts honestly.

## Free resources (lead magnets)
- A **printable sample** of the product (e.g. the first 3 days / one chapter) with a final page pointing to the full product.
- A **one-page worksheet** that solves the most urgent moment.
- A **simple tool** that runs entirely in the browser (counter, calculator, quiz). No personal data leaves the device unless there's a privacy policy and consent.
- A hub page (`/free`) linking them all.

## Technical
- `sitemap.xml` covering every page and article, and `robots.txt` pointing to it (disallow `/api/`, thank-you pages).
- A canonical URL on every page; `metadataBase` on the canonical host.
- Verify: every sitemap URL returns 200, pages have 0 horizontal overflow at 390px, and tools work (click through them).
- After going live: submit the sitemap in Google Search Console (the user has to verify the domain there).

## Using trend-research ideas (e.g. a "PDF Trend Finder" export)
- Treat each idea as one guide: target its example queries in the title, headings and FAQ.
- Ship it twice: as an article (search traffic) and as a free printable PDF built from the same content (lead magnet), with a notes page and a final page pointing to the product.
- Don't publish the tool's search-volume or opportunity numbers; they're for choosing topics.
- Add a few ideas of your own that fill obvious gaps in the cluster.
- In this repo: set `pdf: { title, subtitle }` on an article, then run `npm run guides` to build `public/free/guides/<slug>.pdf`.
