---
name: domain-to-landing-page
description: Step-by-step workflow for turning a domain into a live product landing page. Starts from the domain name, picks the product, presents the ClickDose Page Lab page formats and waits for the user to choose one, waits for a visual reference, then builds, previews and ships only on approval, with optional SEO articles and free resources afterwards. Use when the user gives a domain (or says "here's the domain") and wants a product chosen and a page built or redesigned, mentions Page Lab / ClickDose page types, or wants to redo a landing page "the right way" with approval stops.
---

# Domain → Landing Page

This workflow has **hard stops**. At each 🛑 you end your turn and wait for the user. Never skip a stop because the answer seems obvious or because building feels faster: the user wants to steer the format and the look *before* anything is built. Everything between stops, do without asking.

References (read when the step says so):
- `references/page-formats.md`: the 19 Page Lab formats, what each is for, and which blueprint builds it. **Step 3.**
- `references/blueprints.md`: section-by-section anatomy of the 7 core blueprints. **Steps 3 and 5.**
- `references/visual-mapping.md`: how to map a reference screenshot onto the chosen format. **Step 5.**
- `references/audit.md`: the 10-check audit and belief split. **Steps 3 and 6.**
- `references/prompt-suite.md`: copy prompts, for drafting headlines and sections.
- `references/ship-checklist.md`: repo, hosting and domain checks that prevent costly mistakes. **Steps 1 and 7.**
- `references/seo-growth.md`: SEO articles and free lead magnets. **Step 8.**

---

## Step 1: Domain intake and ground truth

The user gives a domain (or says they will). Before proposing anything, find out what already exists. Do these checks yourself and don't ask for things you can look up:

1. **Repo:** is it empty or existing? What stack? Is it **public or private**? (If public, don't commit paid files such as PDFs or downloads until it's private. Say so up front.)
2. **Hosting:** list the hosting projects (e.g. Vercel) and find **which project the domain is attached to**, and whether that project is already linked to this repo. Don't create a new project if one already owns the domain or the repo. Follow `references/ship-checklist.md`.
3. **Domain spelling:** read it letter by letter. Flag typos or look-alikes (e.g. "postbrekup" vs "postbreakup") that would hurt type-in traffic.
4. **Existing site:** if something is live on the domain, note what it is. A redesign will replace it.

Report these facts in a few lines.

## Step 2: Choose the product

Decide what to sell from the domain name, the user's resources, and what they can actually fulfil. Give **one recommendation** plus two alternatives, each with price, format (digital, physical, service) and fulfilment effort. Also ask:
- How will they get paid? (PayPal, Stripe, Shopify: which credentials exist)
- Where will traffic come from? (cold social, search, retargeting)
- Their ad hook, if they have one.

🛑 **Stop.** Wait for the product choice and payment method.

## Step 3: Present the page formats and recommend one

Read `references/page-formats.md`. Show the user the menu of formats (a compact table: format → what it's for → fits this product? yes/no/maybe). Then make **one recommendation and one second choice**, with the reasoning in two or three sentences:
- traffic temperature → format (cold skimmers → Listicle/Five-Reasons; cold readers → Story/Pain Point; pre-sold → Offer Page; warm → Sales Page; vs. a named rival → Comparison)
- belief split: is the ad or the page doing the convincing?
- price point (impulse buys want short pages; considered buys can carry a long argument)

🛑 **Stop.** Wait for the user to pick a format. Do not build a page yet, not even a draft.

## Step 4: Ask for the visual reference

Ask for a screenshot or URL of a page whose **look** they want (it can be for a totally different product). Ask for:
- full-width screenshots (tall screenshots get downscaled; ask for section crops if details matter)
- or a URL (it may be blocked from the sandbox; if so, say so and work from the screenshot)

🛑 **Stop.** Wait for the visual. If the user explicitly says "just build it" or "no reference", use a clean default and say you'll restyle when a reference arrives.

## Step 5: Map and build

1. Follow `references/visual-mapping.md`. List the reference's sections top to bottom and extract its design tokens (colors, fonts, button shape, radius, rhythm).
2. Build a **Reference section → This page** table. Where the reference uses proof the user doesn't have (stats, reviews, guarantees, author personas), substitute something true: product facts, a free sample, a section that only renders when real proof exists.
3. Build in the existing stack. Payment runs server-side with the price set on the server; paid files stay outside `public/` and are served only after a verified payment.
4. Mobile first: 390px wide, 16–20px gutters, full-width primary buttons, a sticky bottom CTA that appears after the hero and hides at the offer, no horizontal scroll, reduced-motion respected, AA contrast (check accent-on-light and white-on-accent).

## Step 6: Verify

1. Typecheck and build.
2. Headless screenshots at 390×844 and at desktop width: first screen, full page, sticky bar at top/middle/offer, horizontal overflow = 0.
3. Look at every screenshot yourself and fix what's off.
4. Re-run the 10-check audit (`references/audit.md`). Mark unknowns as unknown.
5. Send the user the screenshots and the mapping table.

## Step 7: Preview, then production on approval

1. Commit to the working branch and push. Deploy a **preview** on the project that owns the domain (see `references/ship-checklist.md`).
2. Share the preview link and what's still missing (payment keys, reviews, refund terms).

🛑 **Stop.** Production only when the user says so, in this conversation.

3. On approval: deploy to production the way the repo expects (merge/push to the production branch, or promote the preview). If a permission rule blocks a push to the production branch, don't work around it. Tell the user exactly which permission or dashboard click is needed.
4. Confirm the production deployment is READY and the domain serves it. Remind them to place one real test purchase.

## Step 8 (optional): Grow traffic

If asked, follow `references/seo-growth.md`: a cluster of 20+ search-intent articles linking to the page, free lead magnets (printable samples, simple tools), sitemap, robots and structured data.

---

## Honesty rules (non-negotiable)

- Never invent reviews, testimonials, ratings, customer counts, statistics, press mentions or author personas. Reference pages often use illustrative ones; don't copy them.
- Never write a guarantee or refund policy the owner hasn't approved.
- Health, money and relationship topics: no medical or financial claims; include crisis or support resources where relevant.
- Describe research carefully (no numbers you can't source).

## Report back

At the end of each build: preview/live link, the `Reference → This page` table, the audit table, what was left out on purpose, what the user still needs to supply, and whether production is updated.
