// Builds a free PDF for every article with a `pdf` field:
//   public/free/guides/<slug>.pdf
// Run: npm run guides
import { chromium } from "playwright";
import { mkdirSync, readFileSync } from "node:fs";
import { articles, type Section } from "../content/articles";

const font = (family: string, pkg: string, file: string, weight: number, style: string) =>
  `@font-face{font-family:${family};font-weight:${weight};font-style:${style};src:url(data:font/woff2;base64,${readFileSync(
    `node_modules/@fontsource/${pkg}/files/${file}`,
  ).toString("base64")}) format("woff2");}`;
const fonts = [
  font("Fraunces", "fraunces", "fraunces-latin-400-normal.woff2", 400, "normal"),
  font("Fraunces", "fraunces", "fraunces-latin-700-normal.woff2", 700, "normal"),
  font("Fraunces", "fraunces", "fraunces-latin-400-italic.woff2", 400, "italic"),
  font("Inter", "inter", "inter-latin-400-normal.woff2", 400, "normal"),
  font("Inter", "inter", "inter-latin-600-normal.woff2", 600, "normal"),
].join("\n");

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const css = `${fonts}
@page { size: Letter; margin: 0.8in 0.85in 0.9in; }
@page :first { margin: 0; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, sans-serif; color: #1c1917; font-size: 11pt; line-height: 1.55; }
.cover { height: 11in; background: #1c1917; color: #f6f0e7; padding: 1in .9in; display: flex; flex-direction: column; justify-content: space-between; page-break-after: always; }
.cover .eyebrow { color: #f6c7a4; }
.cover h1 { font-family: Fraunces, serif; font-weight: 700; font-size: 42pt; line-height: 1.05; margin: 0 0 16pt; }
.cover .sub { font-family: Fraunces, serif; font-style: italic; font-size: 16pt; color: #e8ddd2; max-width: 5.4in; }
.cover .bar { width: 64pt; height: 6pt; background: #ea5b2a; margin-bottom: 22pt; }
.cover .foot { font-size: 10pt; color: #b9b0a7; }
.eyebrow { font-size: 8.5pt; letter-spacing: .16em; text-transform: uppercase; font-weight: 600; color: #b3401a; }
h2 { font-family: Fraunces, serif; font-weight: 700; font-size: 17pt; line-height: 1.2; margin: 22pt 0 6pt; page-break-after: avoid; }
p { margin: 0 0 8pt; }
ul, ol { margin: 0 0 10pt; padding-left: 18pt; }
li { margin-bottom: 4pt; }
.intro p { font-family: Fraunces, serif; font-size: 13pt; color: #3b332d; }
.faq h3 { font-size: 11pt; margin: 12pt 0 4pt; }
.notes { page-break-before: always; }
.line { height: 24pt; border-bottom: 1px solid #e4d9cb; }
.cta { page-break-before: always; padding-top: 1.4in; }
.cta h2 { font-size: 26pt; }
.cta .box { border: 1.5px solid #1c1917; border-radius: 12pt; padding: 18pt 20pt; margin-top: 16pt; }
.small { font-size: 9pt; color: #625a53; }
`;

const block = (s: Section) => {
  const list = s.list
    ? `<${s.ordered ? "ol" : "ul"}>${s.list.map((l) => `<li>${esc(l)}</li>`).join("")}</${s.ordered ? "ol" : "ul"}>`
    : "";
  return `<h2>${esc(s.h)}</h2>${(s.p ?? []).map((p) => `<p>${esc(p)}</p>`).join("")}${list}`;
};

const main = async () => {
  mkdirSync("public/free/guides", { recursive: true });
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
  const page = await browser.newPage();
  for (const a of articles.filter((x) => x.pdf)) {
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>
<section class="cover">
  <div class="eyebrow">Free guide · The No-Contact Journal</div>
  <div><div class="bar"></div><h1>${esc(a.pdf!.title)}</h1><p class="sub">${esc(a.pdf!.subtitle)}</p></div>
  <div class="foot">digitaldisconnect.shop/guides/${a.slug}</div>
</section>
<div class="intro">${a.intro.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
${a.sections.map(block).join("")}
${a.faq ? `<div class="faq"><h2>Questions people ask</h2>${a.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}</div>` : ""}
<section class="notes"><div class="eyebrow">Your notes</div><h2>What I'm taking from this guide</h2>${'<div class="line"></div>'.repeat(20)}</section>
<section class="cta">
  <div class="eyebrow">Next step</div>
  <h2>Put it into practice for 30 days.</h2>
  <p>The No-Contact Journal is a printable 30-day guided journal: 90 prompts, a daily no-contact check-in, and a "Before you text them" page for the moments you're about to reach out.</p>
  <div class="box"><strong>Get it at digitaldisconnect.shop</strong><br/>Or start free with the 3-day starter at digitaldisconnect.shop/free</div>
  <p class="small" style="margin-top:28pt">This guide is general self-help information, not therapy, medical or legal advice. If you're thinking about harming yourself, in the US call or text 988 (Suicide &amp; Crisis Lifeline), or contact your local emergency number.</p>
  <p class="small">© The No-Contact Journal · Free to share in full with credit.</p>
</section>
</body></html>`;
    await page.setContent(html, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: `public/free/guides/${a.slug}.pdf`,
      format: "Letter",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: "<span></span>",
      footerTemplate: `<div style="width:100%;font-size:8pt;color:#8a8079;text-align:center;font-family:sans-serif">${esc(a.pdf!.title)} · <span class="pageNumber"></span></div>`,
    });
    console.log("Built", `public/free/guides/${a.slug}.pdf`);
  }
  await browser.close();
};

main();
