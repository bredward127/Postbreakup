# postbrekup.shop — The No-Contact Journal

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
