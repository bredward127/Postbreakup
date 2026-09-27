import type { Metadata, Viewport } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitaldisconnect.shop"),
  title: "The No-Contact Journal: a 30-day guided journal for after a breakup",
  description:
    "Don't text them. Write it here instead. 30 days of guided prompts for the first month after a breakup. Instant printable PDF, $17.",
  openGraph: {
    title: "The No-Contact Journal",
    description: "Don't text them. Write it here instead. A 30-day guided journal for the first month after a breakup.",
    images: ["/journal-cover.png"],
  },
};

export const viewport: Viewport = { themeColor: "#2b2230", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
