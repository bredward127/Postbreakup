import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fr-header">
      <div className="fr-col fr-header-inner fr-header-wide">
        <Link href="/" className="fr-logo">
          NO-CONTACT <span>JOURNAL</span>
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/guides">Guides</Link>
          <Link href="/free">Free tools</Link>
          <Link href="/#offer" className="fr-btn fr-btn-sm">
            <span className="hide-sm">Get the&nbsp;</span>journal
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="fr-footer">
      <div className="fr-col">
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/">The No-Contact Journal</Link>
          <Link href="/guides">Breakup guides</Link>
          <Link href="/free">Free resources</Link>
          <Link href="/journal">What&apos;s inside</Link>
        </nav>
        <p>
          The No-Contact Journal is a self-help writing tool, not therapy or medical advice. If you&apos;re thinking about
          harming yourself, in the US call or text <a href="tel:988">988</a> (Suicide &amp; Crisis Lifeline), or contact
          your local emergency number.
        </p>
        <p>© {new Date().getFullYear()} digitaldisconnect.shop</p>
      </div>
    </footer>
  );
}

export function JournalCta({ heading }: { heading?: string }) {
  return (
    <aside className="journal-cta">
      <p className="fr-eyebrow">The No-Contact Journal</p>
      <p className="journal-cta-h">{heading ?? "Want a plan for the next 30 days?"}</p>
      <p>
        90 guided prompts, a daily no-contact check-in, and a page for the moments you&apos;re about to text them.
        Printable PDF, $17.
      </p>
      <Link href="/#offer" className="fr-btn">
        See the journal
      </Link>
    </aside>
  );
}
