import type { Metadata } from "next";
import Image from "next/image";
import PayPalCheckout from "@/components/PayPalCheckout";
import StickyBar from "@/components/StickyBar";
import { days, phases, beforeYouText } from "@/content/journal";
import { product, priceLabel } from "@/lib/product";

// Real customer reviews only. Leave empty until you have them; the section
// stays hidden while this array is empty.
const reviews: { quote: string; name: string }[] = [];

const ticker = [
  "30 guided days",
  "The “Before you text them” page",
  "Printable PDF",
  "Works on a tablet",
  "About 10 minutes a day",
  "Instant download",
];

const faqs = [
  {
    q: "What exactly do I get?",
    a: `A ${product.pages}-page PDF: a “how to use” page, four weekly intro pages, 30 daily pages (a short note, three prompts with space to write, and a daily no-contact check-in), two copies of the “Before you text them” page, and a closing page.`,
  },
  {
    q: "How do I receive it?",
    a: "Straight after payment you land on a download page with your PDF. Bookmark that page. The link keeps working for your order number, which is also on your PayPal receipt.",
  },
  {
    q: "Is this a physical book?",
    a: "Not yet. It's a digital PDF. Print it at home (US Letter; it also prints fine on A4 at “fit to page”) or open it in a note-taking app on a tablet and write on the lines.",
  },
  {
    q: "Do I need a PayPal account?",
    a: "No. PayPal's checkout also takes debit and credit cards, with no account required (card options depend on your country).",
  },
  {
    q: "What if I already broke no contact?",
    a: "Start anyway. The journal expects slips: you tick “no” in that day's check-in, write about it, and keep going the next day.",
  },
  {
    q: "Is this therapy?",
    a: "No. It's a structured writing tool. If you're struggling with low mood that isn't lifting, a counsellor or therapist can help. If you're thinking about harming yourself, in the US call or text 988, or contact your local emergency number.",
  },
];

export const metadata: Metadata = {
  title: "The No-Contact Journal: a 30-day guided journal for after a breakup",
  alternates: { canonical: "/journal" },
};

export default function JournalSalesPage() {
  const day1 = days[0];
  return (
    <>
      <div className="announce">Instant digital download · 30 guided days · {priceLabel} once</div>

      <header className="site-header">
        <div className="wrap header-inner">
          <a href="/" className="wordmark">
            No-Contact <em>Journal</em>
          </a>
          <a href="#offer" className="btn btn-sm">
            Get the journal
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="section dark hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">For the first 30 days after a breakup</p>
              <h1 className="display">
                Don&apos;t text them.
                <br />
                <em>Write it here instead.</em>
              </h1>
              <p className="lede">
                A 30-day guided journal that gives every “I miss you,” “why did you…” and “I just want to talk” somewhere to
                go that isn&apos;t their inbox.
              </p>
              <a href="#offer" className="btn btn-block-mobile">
                Get the journal · {priceLabel}
              </a>
              <ul className="assure">
                <li>Instant PDF download</li>
                <li>Print it or write on a tablet</li>
                <li>Secure checkout with PayPal or card</li>
              </ul>
            </div>
            <div className="hero-art">
              <Image
                src="/journal-cover.png"
                alt="Cover of The No-Contact Journal"
                width={816}
                height={1056}
                priority
                sizes="(max-width: 800px) 70vw, 380px"
                className="cover-img"
              />
              <Image
                src="/journal-day1.png"
                alt="Day 1 page of the journal, with prompts and writing lines"
                width={816}
                height={1056}
                sizes="(max-width: 800px) 50vw, 280px"
                className="page-img"
              />
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="ticker" aria-label="What's included">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} aria-hidden={i >= ticker.length}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* QUOTE CARD */}
        <section className="section light">
          <div className="wrap narrow">
            <blockquote className="quote-card">
              <p className="display">
                You don&apos;t have to decide how you feel about them today.{" "}
                <em>You only have to not reach out today.</em>
              </p>
              <cite>From Day 1 of the journal</cite>
            </blockquote>
          </div>
        </section>

        {/* THE REAL PROBLEM */}
        <section className="section light tight-top">
          <div className="wrap narrow">
            <p className="eyebrow">The real problem</p>
            <h2 className="display">
              It&apos;s not only that you miss them. <em>Your thoughts have nowhere to go.</em>
            </h2>
            <p>
              After a breakup, every thought about them feels urgent. So it turns into a draft message. Then a text you
              regret, or an hour spent refreshing their profile. Willpower alone rarely lasts, because the feeling still
              needs an outlet.
            </p>
            <div className="callout">
              <strong>The journal gives the urge a job.</strong> Instead of “don&apos;t text them,” it says “write it
              here,” with a specific prompt, every day, for 30 days. When the urge hits hardest, there&apos;s a page
              built for exactly that moment.
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section className="section cream">
          <div className="wrap">
            <p className="eyebrow center">What&apos;s inside</p>
            <h2 className="display center">
              Four weeks. <em>One page a day.</em>
            </h2>
            <p className="center sub">Each week has one job, so the month actually goes somewhere.</p>
            <div className="cards four">
              {phases.map((p, i) => (
                <article key={p.name} className="card">
                  <span className="num">0{i + 1}</span>
                  <p className="card-eyebrow">{p.days}</p>
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                </article>
              ))}
            </div>
            <div className="btt">
              <div>
                <p className="eyebrow">Plus: the emergency page</p>
                <h3 className="display-sm">{beforeYouText.title}</h3>
                <p>{beforeYouText.intro}</p>
              </div>
              <ol>
                {beforeYouText.prompts.slice(0, 4).map((p) => (
                  <li key={p}>{p}</li>
                ))}
                <li className="muted">…and two more.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section light">
          <div className="wrap">
            <p className="eyebrow center">How it works</p>
            <h2 className="display center">
              Ten minutes a day. <em>That&apos;s the whole ritual.</em>
            </h2>
            <ol className="steps">
              <li>
                <span className="num">01</span>
                <h3>Download it now</h3>
                <p>Pay with PayPal or card and your PDF is ready on the next screen.</p>
              </li>
              <li>
                <span className="num">02</span>
                <h3>Print it or go digital</h3>
                <p>Print at home, or open it in a note-taking app (like GoodNotes or Notability) and write on the lines.</p>
              </li>
              <li>
                <span className="num">03</span>
                <h3>One page a day</h3>
                <p>A short note, three prompts, a no-contact check-in. Slipped up? Tick “no” and keep going tomorrow.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* NUMBERS (real product facts) */}
        <section className="section cream">
          <div className="wrap">
            <div className="stats">
              <div className="stat">
                <span className="stat-num">30</span>
                <span>guided days, 90 prompts</span>
              </div>
              <div className="stat">
                <span className="stat-num">{product.pages}</span>
                <span>printable pages</span>
              </div>
              <div className="stat">
                <span className="stat-num">{priceLabel}</span>
                <span>once. No subscription.</span>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="section dark">
          <div className="wrap">
            <p className="eyebrow center">Honest comparison</p>
            <h2 className="display center">
              What should you do <em>with the urge?</em>
            </h2>
            <div className="table-scroll">
              <table className="compare">
                <thead>
                  <tr>
                    <th></th>
                    <th className="us">This journal</th>
                    <th>A blank notebook</th>
                    <th>Therapy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cost</td>
                    <td className="us">{priceLabel} once</td>
                    <td>A few dollars</td>
                    <td>Often $100+ per session</td>
                  </tr>
                  <tr>
                    <td>Tells you what to write</td>
                    <td className="us">Yes, 90 prompts</td>
                    <td>No</td>
                    <td>Guided conversation</td>
                  </tr>
                  <tr>
                    <td>There at 2am</td>
                    <td className="us">Yes</td>
                    <td>Yes</td>
                    <td>Usually not</td>
                  </tr>
                  <tr>
                    <td>A plan for the urge to text</td>
                    <td className="us">A dedicated page</td>
                    <td>No</td>
                    <td>Yes, tailored to you</td>
                  </tr>
                  <tr>
                    <td>A trained professional</td>
                    <td className="us">No</td>
                    <td>No</td>
                    <td className="win">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="center small muted-on-dark">
              If you&apos;re really struggling, therapy is the better choice. Many people use a journal alongside it.
            </p>
          </div>
        </section>

        {/* REVIEWS: only rendered when real reviews exist */}
        {reviews.length > 0 && (
          <section className="section light">
            <div className="wrap">
              <p className="eyebrow center">From readers</p>
              <div className="cards three">
                {reviews.map((r) => (
                  <figure key={r.name} className="card review">
                    <blockquote>“{r.quote}”</blockquote>
                    <figcaption>{r.name}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FREE PREVIEW (stands in for reviews) */}
        <section className="section light">
          <div className="wrap preview-grid">
            <div>
              <p className="eyebrow">Read Day 1 free</p>
              <h2 className="display">
                {day1.title}. <em>Try it right now.</em>
              </h2>
              <p className="note">{day1.note}</p>
              <ol className="prompts">
                {day1.prompts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
              <p className="muted">That&apos;s one page. There are 29 more, and each one builds on the last.</p>
              <a href="#offer" className="btn btn-block-mobile">
                Get all 30 days · {priceLabel}
              </a>
            </div>
            <Image
              src="/journal-day1.png"
              alt="The Day 1 page as it appears in the journal"
              width={816}
              height={1056}
              sizes="(max-width: 800px) 90vw, 420px"
              className="preview-img"
              loading="lazy"
            />
          </div>
        </section>

        {/* WHAT YOU'RE GETTING (facts only, no invented guarantee) */}
        <section className="section dark band">
          <div className="wrap narrow center">
            <p className="eyebrow">No surprises</p>
            <h2 className="display">
              One payment. <em>One PDF. Yours to keep.</em>
            </h2>
            <p>
              No subscription, no account to create, no emails you didn&apos;t ask for. You pay once through PayPal and
              download the journal on the next screen.
            </p>
            <a href="#offer" className="btn">
              Get the journal · {priceLabel}
            </a>
          </div>
        </section>

        {/* OFFER */}
        <section id="offer" className="section cream">
          <div className="wrap">
            <div className="offer">
              <div className="offer-art">
                <Image
                  src="/journal-cover.png"
                  alt="The No-Contact Journal cover"
                  width={816}
                  height={1056}
                  sizes="(max-width: 800px) 60vw, 320px"
                  loading="lazy"
                />
              </div>
              <div className="offer-body">
                <p className="eyebrow">Digital edition</p>
                <h2 className="display-sm">{product.shortName}</h2>
                <p className="price">
                  {priceLabel} <span>USD · one-time</span>
                </p>
                <ul className="checks">
                  <li>30 daily pages with 90 guided prompts</li>
                  <li>Four weekly intro pages</li>
                  <li>The “Before you text them” emergency page (×2)</li>
                  <li>Daily no-contact check-in and mood tracker</li>
                  <li>{product.pages}-page printable, tablet-friendly PDF</li>
                </ul>
                <PayPalCheckout />
                <p className="small muted">Download starts on the next screen after payment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section light">
          <div className="wrap narrow">
            <p className="eyebrow center">FAQ</p>
            <h2 className="display center">
              Fair questions <em>before you buy.</em>
            </h2>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <p className="center">
              <a href="#offer" className="btn">
                Get the journal · {priceLabel}
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p className="wordmark">
            No-Contact <em>Journal</em>
          </p>
          <p className="small">
            A self-help writing tool, not therapy or medical advice. If you&apos;re thinking about harming yourself, in the
            US call or text <a href="tel:988">988</a> (Suicide &amp; Crisis Lifeline), or contact your local emergency
            number.
          </p>
          <p className="small">
            <a href="/guides">Breakup guides</a> · <a href="/free">Free resources</a>
          </p>
          <p className="small">© {new Date().getFullYear()} digitaldisconnect.shop</p>
        </div>
      </footer>

      <StickyBar label={product.shortName} price={priceLabel} />
    </>
  );
}
