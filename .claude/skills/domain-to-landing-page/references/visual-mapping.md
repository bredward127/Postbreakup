# Mapping a Visual Reference onto a Blueprint

The user will often send a screenshot of a page they like (usually for a different product) and say "make mine look like this." Take the **structure and style**, never the brand, photos or copy.

## Step 1: Read the reference top to bottom

For each section note:
- Background (dark / light / image) and its approximate color
- Eyebrow label (small caps above the headline)
- Headline pattern (e.g. "plain statement. *Italic accent line.*")
- Component type: hero, ticker, stat card, image + numbered cards, numbered steps, stat circles, comparison table, testimonial cards, guarantee band, offer box with tiers, FAQ accordion, sticky bar
- Where the primary CTA appears

## Step 2: Extract the design system into tokens

```css
:root {
  --bg-dark: ;      /* hero, comparison, guarantee sections */
  --bg-light: ;     /* main reading sections */
  --surface: ;      /* cards, offer box */
  --ink: ;          /* body text */
  --muted: ;        /* secondary text */
  --accent: ;       /* buttons, italic headline accent, checks */
  --accent-ink: ;   /* darker accent for text on light backgrounds (contrast) */
  --display: ;      /* headline font */
  --body: ;         /* body font */
  --radius: ;       /* card corner radius */
}
```

Guess the fonts by feel if you can't read them (for example, a high-contrast serif with italic → Fraunces / Playfair / Cormorant; a clean sans → Inter). Load them from Google Fonts. Check accent-on-light contrast. A bright gold that works on navy usually needs a darker variant for text on cream.

## Step 3: Build the mapping table

Keep the reference's rhythm (the order of dark and light sections, where proof sits, where the CTA repeats). Fill it with the chosen blueprint's content for this product.

| Reference section | This page | Source of content |
|---|---|---|
| … | … | user facts / repo copy / placeholder-until-real |

Anything in the reference that relies on proof the user doesn't have gets a **truthful substitute**:

| Reference uses | Substitute with |
|---|---|
| Survey stat ("52% of adults…") | A quote from the product/book, or a verifiable product fact |
| "We surveyed customers: 91% / 87% / 94%" circles | Real product numbers: price, shipping cost, delivery time, number of editions or sizes |
| Star rating + review count in hero | Micro-assurances (free shipping, secure checkout, formats) |
| Testimonial cards | A section that renders only when real reviews exist; meanwhile an excerpt or product detail |
| "30 nights or every dollar back" | A promise made only of things already true, until the owner gives refund terms |

## Worked example: Sable sales page → Now I See (book preorder)

Reference: a sleep-drink sales page (navy + cream + gold, serif headlines with gold italic accent lines, gold pill buttons).

| Sable | Now I See |
|---|---|
| Announcement bar | "Free U.S. shipping on every direct preorder · Ships in about 4 weeks" |
| Header: wordmark + "Start My 30 Nights" | Wordmark + cart + "Preorder my copy" |
| Hero: "Deep, unbroken sleep. *Without the melatonin hangover.*" | "A testimony of sight restored. *Written for a divided America.*", CTA "Preorder my copy · from $22.99", 3 checkmarks, trailer video |
| Ticker "Non habit-forming • Drug-free" | "Faith-centered memoir • Free U.S. shipping • Paperback & hardcover…" |
| "52%" stat card | Quote card: "Amid blindness, *I become sight.*" |
| "The wakeup isn't random. *It's chemistry.*" + callout | "We look at each other every day. *We rarely see.*" + callout |
| "The Descent Blend: three actives" + phase cards | "America. My Testimony. *God and Me.*" + 3 theme cards |
| "The ritual: 01/02/03" | "How your preorder works: 01/02/03" |
| Survey circles 91/87/94% | $0 shipping · 2 editions · ~4 weeks |
| Comparison table vs other options | Direct preorder vs Amazon |
| Testimonials | Hidden until real reviews are added; excerpt shown instead |
| Guarantee band | "The preorder promise" (true facts only) |
| Offer box with tiers | Hardcover / paperback selector + add to cart |
| FAQ + sticky bar | Same |

Things deliberately left out: template reviews that couldn't be real, a refund guarantee the owner hadn't approved, and an AI-generated "author photo."

## Practical notes

- If the reference URL is blocked, say so and work from the screenshot.
- Very tall screenshots are downscaled when viewed; ask for section crops if details are unreadable.
- Reuse existing product images; convert big PNGs to WebP at display size.
- After building, compare your phone screenshot against the reference side by side and fix the biggest visual gaps first (colors, button shape, headline treatment, spacing).
