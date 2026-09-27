import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "@fontsource/fraunces/700.css";
import "../../five-reasons.css";
import "../../content.css";
import { SiteHeader, SiteFooter, JournalCta } from "@/components/SiteChrome";
import { articles, getArticle, type Section } from "@/content/articles";
import { SITE_URL, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  const url = `/guides/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: url },
    openGraph: { type: "article", title: a.title, description: a.description, url, images: ["/journal-cover.png"] },
  };
}

function SectionBlock({ s }: { s: Section }) {
  const List = s.ordered ? "ol" : "ul";
  return (
    <>
      <h2>{s.h}</h2>
      {s.p?.map((p) => <p key={p}>{p}</p>)}
      {s.list && (
        <List>
          {s.list.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </List>
      )}
    </>
  );
}

export default async function GuidePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const related = a.related.map(getArticle).filter((r) => r !== undefined);
  const mid = Math.min(2, a.sections.length);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.description,
      datePublished: a.date,
      dateModified: a.date,
      mainEntityOfPage: `${SITE_URL}/guides/${a.slug}`,
      image: `${SITE_URL}/journal-cover.png`,
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: a.title, item: `${SITE_URL}/guides/${a.slug}` },
      ],
    },
    ...(a.faq?.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]
      : []),
  ];

  return (
    <div className="fr">
      <SiteHeader />
      <main className="fr-col article">
        <p className="crumbs">
          <Link href="/guides">Guides</Link> · {a.category}
        </p>
        <h1 className="fr-h1">{a.title}</h1>
        <p className="article-meta">By the No-Contact Journal team · Updated {new Date(a.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        {a.intro.map((p) => (
          <p key={p} className="fr-dek">
            {p}
          </p>
        ))}
        {a.sections.slice(0, mid).map((s) => (
          <SectionBlock key={s.h} s={s} />
        ))}
        <JournalCta />
        {a.sections.slice(mid).map((s) => (
          <SectionBlock key={s.h} s={s} />
        ))}
        {a.faq && (
          <section className="faq-block">
            <h2>Frequently asked questions</h2>
            {a.faq.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>
        )}
        <aside className="journal-cta">
          <p className="fr-eyebrow">Free resources</p>
          <p className="journal-cta-h">Try the free tools</p>
          <p>
            Download the printable <Link href="/free">&ldquo;Before you text them&rdquo; worksheet</Link> and the free
            3-day starter, count your <Link href="/free/no-contact-counter">no-contact days</Link>, or take the{" "}
            <Link href="/free/should-i-text-my-ex">&ldquo;Should I text my ex?&rdquo; check</Link>.
          </p>
        </aside>
        <h2>Keep reading</h2>
        <div className="card-grid">
          {related.map((r) => (
            <Link key={r.slug} href={`/guides/${r.slug}`} className="link-card">
              <strong>{r.title}</strong>
              <span>{r.description}</span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
