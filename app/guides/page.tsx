import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/fraunces/700.css";
import "../five-reasons.css";
import "../content.css";
import { SiteHeader, SiteFooter, JournalCta } from "@/components/SiteChrome";
import { articles, categories } from "@/content/articles";

export const metadata: Metadata = {
  title: "Breakup Guides: No Contact, Moving On and Journaling",
  description:
    "Free, practical guides for getting through a breakup: the no-contact rule, how to stop texting your ex, journal prompts, sleep, loneliness and more.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndex() {
  return (
    <div className="fr">
      <SiteHeader />
      <main className="fr-col article">
        <div className="page-intro">
          <p className="fr-eyebrow">Breakup guides</p>
          <h1 className="fr-h1">Practical help for the hardest part of a breakup.</h1>
          <p className="fr-dek">
            Plain-language guides on no contact, moving on, journaling and looking after yourself. No games, no tricks to
            win anyone back.
          </p>
        </div>
        {categories.map((c) => (
          <section key={c}>
            <h2 className="cat-h">{c}</h2>
            <div className="card-grid two">
              {articles
                .filter((a) => a.category === c)
                .map((a) => (
                  <Link key={a.slug} href={`/guides/${a.slug}`} className="link-card">
                    <strong>{a.title}</strong>
                    <span>{a.description}</span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
        <JournalCta heading="Put it into practice for 30 days" />
      </main>
      <SiteFooter />
    </div>
  );
}
