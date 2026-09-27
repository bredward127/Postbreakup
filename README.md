# digitaldisconnect.shop — The No-Contact Journal

Sales page and checkout for **The No-Contact Journal**, a 30-day guided breakup-recovery journal sold as a $17 PDF.

- `app/page.tsx` — the sales page (ClickDose "Sales Page" blueprint, see `.claude/skills/landing-page-builder`)
- `content/journal.js` — the full journal text (30 days, phases, "Before you text them" page)
- `scripts/build-journal.mjs` — builds `private/no-contact-journal.pdf` and the site images from that text (`npm run journal`)
- `app/api/paypal/*` — server-side PayPal order create/capture (price is set on the server)
- `app/api/download` — serves the PDF only for a PayPal order that is `COMPLETED` for this product and price

## Environment variables (Vercel → Project → Settings → Environment Variables)

| Name | Value |
|---|---|
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | PayPal REST app **Client ID** |
| `PAYPAL_CLIENT_SECRET` | PayPal REST app **Secret** |
| `PAYPAL_ENV` | `sandbox` for testing, `live` for real payments |

Redeploy after changing them (the client ID is baked in at build time). Until they're set, the offer box shows "Checkout is being set up."

## Adding real reviews

Add them to the `reviews` array at the top of `app/page.tsx`. The section stays hidden while the array is empty. Only publish real ones.

## Local development

```
npm install
npm run dev
```

## Content and free resources

- `content/articles/` — 38 SEO guides (15 with free PDFs: `npm run guides` → `public/free/guides/`) (rendered at `/guides/[slug]`, with Article/Breadcrumb/FAQ structured data). Add an article by appending to one of the category files; `expansions.ts` holds extra sections per slug.
- `/free` — free resources hub: printable worksheet and 3-day starter (`public/free/*.pdf`, built by `npm run journal`), a no-contact counter and a "Should I text my ex?" check.
- `app/sitemap.ts` and `app/robots.ts` — canonical host is `https://www.digitaldisconnect.shop` (`lib/site.ts`).

## Skills

- `.claude/skills/domain-to-landing-page` — the step-by-step workflow: domain → product → page format (stop) → visual reference (stop) → build → preview → production on approval → SEO growth.
- `.claude/skills/landing-page-builder` — the original ClickDose blueprint skill.
