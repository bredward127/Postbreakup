import { noContactArticles } from "./no-contact";
import { movingOnArticles } from "./moving-on";
import { journalingArticles } from "./journaling";
import { selfCareArticles } from "./self-care";
import { expansions } from "./expansions";
import type { Article } from "./types";

export type { Article, Section } from "./types";

export const articles: Article[] = [
  ...noContactArticles,
  ...movingOnArticles,
  ...journalingArticles,
  ...selfCareArticles,
].map((a) => ({ ...a, sections: [...a.sections, ...(expansions[a.slug] ?? [])] }));

export const categories = ["No contact", "Getting over them", "Journaling", "Self-care"] as const;

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
