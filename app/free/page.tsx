import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/fraunces/700.css";
import "../five-reasons.css";
import "../content.css";
import { SiteHeader, SiteFooter, JournalCta } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Free Breakup Resources: Printables, No-Contact Counter and More",
  description:
    "Free tools for getting through a breakup: a printable 'Before you text them' worksheet, a 3-day journal starter, a no-contact day counter and a 'Should I text my ex?' check.",
  alternates: { canonical: "/free" },
};

const resources = [
  {
    href: "/free/before-you-text-them-worksheet.pdf",
    tag: "Printable PDF",
    title: "“Before you text them” worksheet",
    text: "Six questions to answer before you message your ex. Keep it by your bed or save it as your lock screen.",
    download: true,
  },
  {
    href: "/free/no-contact-journal-3-day-starter.pdf",
    tag: "Printable PDF · 8 pages",
    title: "The 3-day starter journal",
    text: "The first three days of The No-Contact Journal, free: daily notes, prompts, check-ins and the worksheet.",
    download: true,
  },
  {
    href: "/free/no-contact-counter",
    tag: "Tool",
    title: "No-contact day counter",
    text: "Enter the day you started and see your streak and milestones. Saved on your device only.",
  },
  {
    href: "/free/should-i-text-my-ex",
    tag: "Tool · 1 minute",
    title: "Should I text my ex? A quick check",
    text: "Six honest questions that help you decide in the moment, before you hit send.",
  },
  {
    href: "/guides/breakup-journal-prompts",
    tag: "Guide",
    title: "40 breakup journal prompts",
    text: "Prompts for every stage, from the first raw days to moving forward.",
  },
];

export default function FreeResources() {
  return (
    <div className="fr">
      <SiteHeader />
      <main className="fr-col article">
        <div className="page-intro">
          <p className="fr-eyebrow">Free resources</p>
          <h1 className="fr-h1">Free tools for the first month after a breakup.</h1>
          <p className="fr-dek">No sign-up, no email required. Download, print, or use them right here.</p>
        </div>
        <div className="card-grid">
          {resources.map((r) =>
            r.download ? (
              <a key={r.href} href={r.href} className="link-card" download>
                <span className="tag">{r.tag}</span>
                <strong>{r.title}</strong>
                <span>{r.text}</span>
              </a>
            ) : (
              <Link key={r.href} href={r.href} className="link-card">
                <span className="tag">{r.tag}</span>
                <strong>{r.title}</strong>
                <span>{r.text}</span>
              </Link>
            ),
          )}
        </div>
        <JournalCta heading="Liked the 3-day starter? Get all 30 days." />
      </main>
      <SiteFooter />
    </div>
  );
}
