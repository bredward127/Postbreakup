export type Section = {
  h: string;
  p?: string[];
  list?: string[];
  ordered?: boolean;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  /** Main search phrase the article is written to answer. */
  keyword: string;
  category: "No contact" | "Getting over them" | "Journaling" | "Self-care";
  date: string; // ISO
  intro: string[];
  sections: Section[];
  faq?: { q: string; a: string }[];
  related: string[]; // slugs
};
