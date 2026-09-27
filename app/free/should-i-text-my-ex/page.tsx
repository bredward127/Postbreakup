import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/fraunces/700.css";
import "../../five-reasons.css";
import "../../content.css";
import { SiteHeader, SiteFooter, JournalCta } from "@/components/SiteChrome";
import Quiz from "./Quiz";

export const metadata: Metadata = {
  title: "Should I Text My Ex? Take This 1-Minute Check",
  description:
    "About to message your ex? Answer six quick, honest questions and get a clear suggestion: send, sleep on it, or put the phone down.",
  alternates: { canonical: "/free/should-i-text-my-ex" },
};

export default function QuizPage() {
  return (
    <div className="fr">
      <SiteHeader />
      <main className="fr-col article">
        <p className="crumbs">
          <Link href="/free">Free resources</Link> · Tool
        </p>
        <h1 className="fr-h1">Should I text my ex?</h1>
        <p className="fr-dek">Six quick questions. Answer honestly. Nobody sees your answers, and nothing is saved.</p>
        <Quiz />
        <h2 className="cat-h">Why a quick check helps</h2>
        <p>
          The urge to message an ex usually peaks when you&apos;re tired, lonely or have had a drink, which is exactly when
          it&apos;s hardest to think clearly. Slowing down for one minute is often enough to let the peak pass. For the full
          version, read <Link href="/guides/how-to-stop-texting-your-ex">how to stop texting your ex</Link>.
        </p>
        <JournalCta heading="Have a page ready for the next time" />
      </main>
      <SiteFooter />
    </div>
  );
}
