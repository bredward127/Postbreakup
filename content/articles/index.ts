import { noContactArticles } from "./no-contact";
import { movingOnArticles } from "./moving-on";
import { journalingArticles } from "./journaling";
import { selfCareArticles } from "./self-care";
import { trendArticlesOne } from "./trends-1";
import { trendArticlesTwo } from "./trends-2";
import { trendArticlesThree } from "./trends-3";
import { expansions } from "./expansions";
import type { Article } from "./types";

export type { Article, Section } from "./types";

export const articles: Article[] = [
  ...noContactArticles,
  ...movingOnArticles,
  ...journalingArticles,
  ...selfCareArticles,
  ...trendArticlesOne,
  ...trendArticlesTwo,
  ...trendArticlesThree,
].map((a) => ({ ...a, sections: [...a.sections, ...(expansions[a.slug] ?? [])] }));

export const categories = ["No contact", "Getting over them", "Journaling", "Self-care"] as const;

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
