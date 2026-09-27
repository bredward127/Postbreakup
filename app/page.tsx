import type { Metadata } from "next";
import Image from "next/image";
import "@fontsource/fraunces/700.css";
import "./five-reasons.css";
import PayPalCheckout from "@/components/PayPalCheckout";
import StickyBar from "@/components/StickyBar";
import { days, phases, beforeYouText } from "@/content/journal";
import { product, priceLabel } from "@/lib/product";

// Five-Reasons page (ClickDose "Five-Reasons" format, built from the Listicle
// blueprint) for cold, problem-aware traffic. The full sales page lives at /journal.

export const metadata: Metadata = {
  title: "Five reasons you keep texting your ex (and what actually stops it)",
  description:
    "Blocking them doesn't stop the thinking, and willpower runs out at 2am. Here's what actually helps, plus a 30-day guided journal built around it.",
  openGraph: {
    title: "Five reasons you keep texting your ex (and what actually stops it)",
    images: ["/journal-cover.png"],
  },
};

// "What am I feeling right now? (Name it: …)" → "What am I feeling right now?"
const shortPrompt = (p: string) => p.replace(/ \(.*\)$/, "").replace(/ Write here.*$/, "");

// Real reader reviews only. The section stays hidden while this is empty.
const reviews: { quote: string; name: string }[] = [];

const faqs = [
  {
    q: "What exactly do I get?",
    a: `A ${product.pages}-page PDF: 30 daily pages (a short note, three prompts with space to write, and a no-contact check-in), four weekly intro pages, two copies of the “Before you text them” page, and a closing page.`,
  },
  {
    q: "How do I get it after paying?",
    a: "The download is on the very next screen. Bookmark that page. It keeps working for your order number, which is also on your PayPal receipt.",
  },
  {
    q: "Can I use it on my phone or tablet?",
    a: "Yes. Open the PDF in a note-taking app (GoodNotes, Notability, or similar) and write on the lines, or print it at home on US Letter or A4.",
  },
  {
    q: "Do I need a PayPal account?",
    a: "No. PayPal's checkout also takes debit and credit cards without an account (card options depend on your country).",
  },
  {
    q: "I already texted them. Is it too late?",
    a: "No. The journal expects slips. Tick “no” in that day's check-in, write about what happened, and pick up again tomorrow.",
  },
  {
    q: "Is this therapy?",
    a: "No. It's a structured writing tool. If low mood isn't lifting, a counsellor or therapist can help. If you're thinking about harming yourself, in the US call or text 988, or contact your local emergency number.",
  },
];

export default function FiveReasons() {
  const day1 = days[0];
  return (
    <div className="fr">
      <div className="fr-disclosure">
        <span>Advertorial · from the makers of The No-Contact Journal</span>
        <a href="#offer">Get the journal →</a>
      </div>

      <header className="fr-header">
        <div className="fr-col fr-header-inner">
          <a href="/" className="fr-logo">
            NO-CONTACT <span>JOURNAL</span>
          </a>
          <a href="#offer" className="fr-btn fr-btn-sm">
            Get the journal
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="fr-col fr-hero">
          <p className="fr-eyebrow">Breakups + habits · Updated September 2026</p>
          <h1 className="fr-h1">Five reasons you keep texting your ex, and what actually stops it.</h1>
          <p className="fr-dek">
            It starts small. You check if they&apos;ve been online. Then it&apos;s 1am and you&apos;ve typed the same
            message four times. The phone was never the problem. Where the feeling goes is.
          </p>
          <div className="fr-byline">
            <span className="fr-avatar" aria-hidden="true">
              NC
            </span>
            <span>
              <strong>By the No-Contact Journal team</strong>
              <br />5 minute read
            </span>
          </div>

          <figure id="hero" className="fr-hero-fig">
            <div className="fr-hero-art">
            <div className="fr-phone" aria-hidden="true">
              <div className="fr-phone-top">
                <span className="fr-phone-name">them</span>
                <span className="fr-phone-time">1:12 AM</span>
              </div>
              <div className="fr-bubble fr-bubble-them">ok. take care of yourself</div>
              <div className="fr-bubble fr-bubble-draft">
                hey, i know you said you needed space but i just
                <span className="fr-caret" />
              </div>
              <div className="fr-phone-input">Not sent</div>
            </div>
            <Image
              src="/journal-cover.png"
              alt="The No-Contact Journal"
              width={816}
              height={1056}
              priority
              sizes="(max-width: 700px) 42vw, 260px"
              className="fr-hero-journal"
            />
            </div>
            <figcaption>The message you want to send, and somewhere else to put it.</figcaption>
          </figure>

          <p>
            Most people who break no contact don&apos;t do it because they&apos;ve decided to get back together. They do
            it because a feeling showed up at a bad hour and the phone was the nearest place to put it.
          </p>
          <p>
            <strong>The No-Contact Journal</strong> is a 30-day guided journal built around that one idea. Below are the
            five reasons the usual advice (&ldquo;just don&apos;t text them&rdquo;) falls apart, and what to do instead.
          </p>
          <blockquote className="fr-pull">
            The goal isn&apos;t to stop missing them. It&apos;s to stop handing the feeling to your phone.
          </blockquote>
        </section>

        {/* REASON 01 */}
        <section className="fr-col fr-reason">
          <p className="fr-reason-num">Reason 01</p>
          <h2 className="fr-h2">The problem isn&apos;t that you miss them. It&apos;s that the feeling has nowhere to go.</h2>
          <p>
            A thought about them feels urgent, so it turns into a draft. The draft turns into a message, or an hour on
            their profile. &ldquo;Don&apos;t text them&rdquo; only takes the outlet away. It doesn&apos;t give you a
            new one.
          </p>
          <p>
            Writing gives the same urge a place to land. You still get to say all of it. It just goes on a page instead
            of into their inbox.
          </p>
          <div className="fr-compare-cards">
            <div className="fr-card">
              <p className="fr-card-label">Your phone at 1:12am</p>
              <div className="fr-mini-chat" aria-hidden="true">
                <div className="fr-bubble fr-bubble-draft">
                  do you ever think about us
                  <span className="fr-caret" />
                </div>
                <div className="fr-send">Send ↑</div>
              </div>
              <p className="fr-card-cap">One tap, and tomorrow starts over.</p>
            </div>
            <div className="fr-card fr-card-accent">
              <p className="fr-card-label">The journal at 1:12am</p>
              <div className="fr-mini-page">
                <p className="fr-mini-title">{beforeYouText.title}</p>
                <ol>
                  {beforeYouText.prompts.slice(0, 3).map((p) => (
                    <li key={p}>{shortPrompt(p)}</li>
                  ))}
                </ol>
              </div>
              <p className="fr-card-cap">Six questions before you pick up the phone.</p>
            </div>
          </div>
        </section>

        {/* REASON 02 */}
        <section className="fr-col fr-reason">
          <p className="fr-reason-num">Reason 02</p>
          <h2 className="fr-h2">Blocking them stops the messages. It doesn&apos;t stop the thinking.</h2>
          <p>
            Muting, archiving and blocking all help, and the journal asks you to do some of them on Day 2. But they only
            remove the door. The conversation you want to have keeps running in your head, usually at night.
          </p>
          <p>
            Each day&apos;s page gives that conversation somewhere to go: what you&apos;d say to them, what you&apos;re
            really asking for, and whether you can give some of it to yourself.
          </p>
        </section>

        {/* REASON 03 */}
        <section className="fr-col fr-reason">
          <p className="fr-reason-num">Reason 03</p>
          <h2 className="fr-h2">Willpower runs out at 2am. A plan doesn&apos;t.</h2>
          <p>
            The urge is strongest when you&apos;re tired, lonely or a few drinks in, which is exactly when willpower is
            weakest. So the journal includes a page for that moment. You answer every question before you pick up the
            phone:
          </p>
          <div className="fr-list" role="list" aria-label={beforeYouText.title}>
            {beforeYouText.prompts.map((p, i) => {
              const last = i === beforeYouText.prompts.length - 1;
              return (
                <div className="fr-list-row" role="listitem" key={p}>
                  <span>{shortPrompt(p)}</span>
                  <span className={last ? "fr-pill fr-pill-alert" : "fr-pill"}>{last ? "Then decide" : "Answer first"}</span>
                </div>
              );
            })}
          </div>
          <p className="fr-note">From the “{beforeYouText.title}” page. There are two copies in the journal.</p>
        </section>

        {/* STATS: real product facts only */}
        <section className="fr-col fr-stats">
          <div>
            <span className="fr-stat">30</span>
            <span>guided days, one page each</span>
          </div>
          <div>
            <span className="fr-stat">90</span>
            <span>writing prompts across four weeks</span>
          </div>
          <div>
            <span className="fr-stat">~10</span>
            <span>minutes a day is all a page takes</span>
          </div>
        </section>

        {/* REASON 04 */}
        <section className="fr-col fr-reason">
          <p className="fr-reason-num">Reason 04</p>
          <h2 className="fr-h2">Healing isn&apos;t one decision. It&apos;s four different weeks.</h2>
          <p>
            Week one is about getting through the day. By week three the problem is empty evenings, not the urge to
            text. The journal changes with you, so you&apos;re not answering the same question for a month.
          </p>
          <div className="fr-stages">
            {phases.map((p, i) => (
              <div className="fr-stage" key={p.name}>
                <p className="fr-stage-label">
                  Week {i + 1} <span>· {p.days}</span>
                </p>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REASON 05 */}
        <section className="fr-col fr-reason">
          <p className="fr-reason-num">Reason 05</p>
          <h2 className="fr-h2">Seventeen dollars costs less than one more 2am text.</h2>
          <p>
            You know what the text costs: the wait for a reply, the reply that doesn&apos;t come, the week of progress
            that resets. The journal is {priceLabel}, once. No subscription and no app to install. The download is on
            the next screen.
          </p>
          <p>
            It isn&apos;t therapy, and it won&apos;t make you stop missing them. What it does is give the next 30 days a
            structure, and give every urge to reach out somewhere else to go.
          </p>
          <a href="#offer" className="fr-btn fr-btn-block">
            Get the journal · {priceLabel}
          </a>
        </section>

        {/* REVIEWS: only when real ones exist */}
        {reviews.length > 0 && (
          <section className="fr-col fr-reason">
            <p className="fr-reason-num">From readers</p>
            <h2 className="fr-h2">What people actually said.</h2>
            <div className="fr-quotes">
              {reviews.map((r) => (
                <figure className="fr-quote" key={r.name}>
                  <blockquote>“{r.quote}”</blockquote>
                  <figcaption>{r.name}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* FREE DAY 1 (stands in for reviews) */}
        <section className="fr-col fr-reason">
          <p className="fr-reason-num">Try it tonight</p>
          <h2 className="fr-h2">Here&apos;s Day 1, free.</h2>
          <div className="fr-quote">
            <p className="fr-quote-title">
              Day 1 · {day1.title}
            </p>
            <blockquote>{day1.note}</blockquote>
            <ol className="fr-prompts">
              {day1.prompts.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
          </div>
          <p className="fr-note">That&apos;s one page. There are 29 more, and each one builds on the last.</p>
        </section>

        {/* DARK BAND (facts only; no invented guarantee) */}
        <section className="fr-band">
          <div className="fr-col">
            <p className="fr-eyebrow fr-eyebrow-light">No surprises</p>
            <h2 className="fr-h2">One payment. One PDF. Yours to keep.</h2>
            <p>
              No subscription, no account, no emails you didn&apos;t ask for. Pay once with PayPal or a card, then
              download the journal on the next screen. Print it or write on it with a tablet.
            </p>
          </div>
        </section>

        {/* OFFER */}
        <section id="offer" className="fr-col fr-offer-wrap">
          <p className="fr-eyebrow">The 30-day offer</p>
          <h2 className="fr-h2 fr-h2-lg">Somewhere to put it. Anywhere but their inbox.</h2>
          <div className="fr-offer">
            <div className="fr-offer-top">
              <Image
                src="/journal-cover.png"
                alt="The No-Contact Journal cover"
                width={816}
                height={1056}
                sizes="120px"
                className="fr-offer-img"
                loading="lazy"
              />
              <div>
                <p className="fr-offer-name">{product.shortName}</p>
                <p className="fr-price">
                  {priceLabel} <span>one-time · instant PDF</span>
                </p>
              </div>
            </div>
            <ul className="fr-checks">
              <li>30 daily pages, 90 guided prompts</li>
              <li>The “Before you text them” page (×2)</li>
              <li>Daily no-contact check-in and mood tracker</li>
              <li>Four weekly intro pages</li>
              <li>{product.pages} pages: print it or use it on a tablet</li>
            </ul>
            <PayPalCheckout />
            <p className="fr-fine">Secure checkout by PayPal. Pay with PayPal or a debit/credit card. Download starts on the next screen.</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="fr-col fr-faq-wrap">
          <h2 className="fr-h2 fr-h2-lg">The useful questions</h2>
          <div className="fr-faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p className="fr-more">
            Want the full rundown? <a href="/journal">See everything inside the journal →</a>
          </p>
          <p className="fr-more">
            Not ready yet? <a href="/free">Get the free 3-day starter and printable worksheet →</a>
          </p>
        </section>
      </main>

      <footer className="fr-footer">
        <div className="fr-col">
          <p>
            <strong>Advertorial disclosure:</strong> this article is published by the makers of The No-Contact Journal,
            which is sold on this page. It is a self-help writing tool, not therapy or medical advice.
          </p>
          <p>
            If you&apos;re thinking about harming yourself, in the US call or text <a href="tel:988">988</a> (Suicide
            &amp; Crisis Lifeline), or contact your local emergency number.
          </p>
          <p>
            <a href="/guides">Breakup guides</a> · <a href="/free">Free resources</a> · <a href="/journal">What&apos;s inside</a>
          </p>
          <p>© {new Date().getFullYear()} digitaldisconnect.shop</p>
        </div>
      </footer>

      <StickyBar label={product.shortName} price={priceLabel} cta="Get the journal" />
    </div>
  );
}
