import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/journal", "/guides", "/free", "/free/no-contact-counter", "/free/should-i-text-my-ex"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, priority: p === "" ? 1 : 0.8 })),
    ...articles.map((a) => ({ url: `${SITE_URL}/guides/${a.slug}`, lastModified: new Date(a.date), priority: 0.7 })),
  ];
}
