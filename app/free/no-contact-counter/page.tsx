import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/fraunces/700.css";
import "../../five-reasons.css";
import "../../content.css";
import { SiteHeader, SiteFooter, JournalCta } from "@/components/SiteChrome";
import Counter from "./Counter";

export const metadata: Metadata = {
  title: "No-Contact Day Counter: Track Your Streak After a Breakup",
  description:
    "Free no-contact counter. Enter the day you stopped contacting your ex and track your streak and milestones. Nothing leaves your device.",
  alternates: { canonical: "/free/no-contact-counter" },
};

export default function CounterPage() {
  return (
    <div className="fr">
      <SiteHeader />
      <main className="fr-col article">
        <p className="crumbs">
          <Link href="/free">Free resources</Link> · Tool
        </p>
        <h1 className="fr-h1">No-contact day counter</h1>
        <p className="fr-dek">
          Seeing your streak grow gives you something to protect on hard nights. Your date is saved in this browser only.
        </p>
        <Counter />
        <h2 className="cat-h">How to use it</h2>
        <p>
          Bookmark this page or add it to your home screen. Open it when you feel the urge to reach out, and look at the
          number before you decide. If you&apos;re not sure how long to aim for, read{" "}
          <Link href="/guides/how-long-should-no-contact-last">how long no contact should last</Link>.
        </p>
        <JournalCta heading="Make every day of the streak count" />
      </main>
      <SiteFooter />
    </div>
  );
}
