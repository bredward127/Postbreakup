import type { Metadata } from "next";
import Link from "next/link";
import { product } from "@/lib/product";

export const metadata: Metadata = { title: "Thank you · The No-Contact Journal", robots: { index: false } };

export default async function ThankYou({ searchParams }: { searchParams: Promise<{ order?: string }> }) {
  const { order } = await searchParams;
  const valid = typeof order === "string" && /^[A-Z0-9]{8,40}$/.test(order);
  return (
    <main className="thanks">
      <div className="thanks-card">
        <p className="eyebrow">Payment complete</p>
        <h1 className="display">
          Day 1 starts <em>whenever you're ready.</em>
        </h1>
        {valid ? (
          <>
            <p>Your copy of {product.shortName} is ready. Download it now and save it somewhere you'll find it again.</p>
            <a className="btn btn-block" href={`/api/download?order=${order}`}>
              Download the journal (PDF)
            </a>
            <p className="muted small">
              Order number: <strong>{order}</strong>. Bookmark this page. This link works any time for your order.
              PayPal has also emailed you a receipt.
            </p>
          </>
        ) : (
          <p>We couldn't find your order number. If you've paid, check your PayPal receipt for the order number.</p>
        )}
        <p className="small">
          <Link href="/">← Back to the journal</Link>
        </p>
      </div>
    </main>
  );
}
