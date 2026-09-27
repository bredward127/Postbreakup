---
name: landing-page-builder
description: Plan and build a conversion-focused website or landing page from one of the 7 ClickDose page blueprints (Story Advertorial, Founder-Letter Advertorial, Listicle, Offer Page, Lead Gen Page, Sales Page, Comparison Page), then restyle it to match visual references the user provides and ship it. Use when the user wants a site, landing page, sales page, advertorial, listicle, offer page, lead-gen page or comparison page designed, redesigned or rebuilt, especially when they share a reference screenshot or URL to copy the look of, mention ad traffic, a "blueprint", ClickDose, or want the page audited before ad spend.
---

# Landing Page Builder

Build pages that convert paid or organic traffic, using a proven page structure (the blueprint) and the look of the user's visual references. The rule behind everything: **the ad gets the click, the page gets the sale.** The page's job depends on what the ad already did.

## Reference files

Read these when the step calls for them, not all up front:

- `references/blueprints.md`: the 7 page formats, when each fits, section order, and the most common mistake for each. **Read before step 2.**
- `references/visual-mapping.md`: how to turn a reference screenshot into sections for a different product, with a worked example. **Read before step 4.**
- `references/audit.md`: the 10-check "Where It Lands" audit and the Belief Split. **Read before steps 2 and 6.**
- `references/testing-benchmarks.md`: what ad-creative benchmark data says about testing, and how to use it without over-claiming. Read when the user asks about testing, variants, hit rate, or ad volume.
- `references/prompt-suite.md`: the 12 copywriting prompts and when to use each. Read when drafting or strengthening copy.

## Workflow

### 1. Intake (ask only what you can't find)

Look at the repo and anything the user attached first. Then ask, in one message, only for what's still missing:

1. **What's sold, to whom, at what price?** One sentence each.
2. **Where does traffic come from, and how warm is it?** Cold (never heard of them), problem-aware, solution-aware, warm/retargeting, or already pre-sold by the ad caption.
3. **What's the ad saying?** The exact hook or promise, so the page's first screen can repeat it in the same words (audit check 01).
4. **The one conversion action.** Buy, book a call, submit a form, start a quiz.
5. **Real proof on hand:** reviews, testimonials, stats, press, guarantees, credentials, case results.
6. **Visual references:** screenshots or URLs of pages whose look they want. If none yet, say you'll build the structure first and restyle when they arrive.

### 2. Pick the blueprint and say why

Use the chooser in `references/blueprints.md` to match traffic temperature to format. Decide the **belief split** (see `references/audit.md`): is the ad doing the convincing (then build a closer: Offer Page) or the page (then an advertorial, listicle or sales page)? State the pick in one or two sentences, plus a second-choice format as a later test.

### 3. Audit what exists (redesigns only)

If there's a current page, score it against the 10 checks in `references/audit.md` in a short table (pass / fail / unknown and one line why). Two or more fails means fix the page before touching the ads. This table is what justifies the redesign to the user.

### 4. Map the visual reference onto the blueprint

Follow `references/visual-mapping.md`:

1. List the reference page's sections top to bottom (eyebrow, headline pattern, component type).
2. Extract the design system: background colors per section, accent color, button shape, fonts (display + body), italic/accent treatment in headlines, card radius, spacing rhythm.
3. Map each reference section to a section for *this* product, in a table: `Reference section → This page`. Keep the reference's rhythm (dark/light alternation, where the CTA repeats), but replace its content with the blueprint's anatomy for this product.
4. Where the reference uses proof the user doesn't have (survey stats, star ratings, reviews, a money-back guarantee), substitute something **true**: product facts, process steps, a quote from the product itself, or a section that only renders once real proof is added.

If the reference URL can't be fetched, work from the screenshot and say so. Don't copy the reference's brand name, logo, photos or copy. Take the layout and style only.

Show the mapping table and plan to the user before building if the request was for a plan. If they asked to build, build.

### 5. Build

- Work in the existing stack; don't migrate frameworks. Keep existing checkout, cart, analytics, pixels and conversion tracking working exactly as before, and change only the markup and styles around them.
- Put colors and fonts in CSS variables/tokens at the top of the stylesheet.
- **Mobile is the page.** Design for a ~390px-wide phone first: 16px+ side gutters, full-width primary buttons, no horizontal scroll, a sticky bottom CTA bar that appears after the hero and hides near the offer.
- One primary action, repeated: header button, hero, after the argument, offer box, sticky bar. Secondary routes (e.g. Amazon, "call us") become quiet text links.
- The first screen must pass the five-second test: what it is, who it's for, what they get, and ideally the price.
- Compress heavy images (convert large PNGs to WebP at display size) and lazy-load below-the-fold images.
- Respect `prefers-reduced-motion` for tickers and animations.

### 6. Verify before calling it done

1. Typecheck/lint/build with the repo's own commands.
2. Render it in a headless browser at 390×844 and at desktop width. Check first screen, full page, sticky bar, and the conversion flow (e.g. add to cart opens). Confirm horizontal overflow is 0.
3. Look at the screenshots yourself and fix anything off (contrast, labels overridden by broader CSS rules, cropped images, overlaps).
4. Re-run the 10-check audit on the new page and report the result honestly, with unknowns marked unknown.
5. Send the user the screenshots.

### 7. Ship

Commit on the working branch and push. If the host (Vercel, Netlify, etc.) builds branch previews, find and share the preview URL. **Deploy to production only when the user says so.** Then confirm the production deployment reached a ready state and give the live URL. Remind them to place one real test conversion (order, form, booking) on production.

## Honesty rules (non-negotiable)

- Never invent reviews, testimonials, ratings, customer counts, survey results, press mentions, or statistics. If the repo contains ones that look like placeholders (generic names, claims that can't be true yet, like a delivered-order review for an unreleased product), don't publish them. Tell the user why.
- Never invent a guarantee or refund policy. Offer to add one once the user states the terms.
- Never use a person's photo as someone else's (e.g. an AI-generated "author photo").
- Benchmarks describe associations, not causes. Don't claim that testing more *causes* more winners.
- Build proof sections so they appear only when real proof exists (e.g. render only if the array is non-empty), and tell the user where to add it.

## Report back

End with: the live or preview link, a short `Reference → This page` table, what was left out on purpose and why, what the user still needs to supply, and whether production is updated.
