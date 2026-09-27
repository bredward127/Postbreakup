// Builds the sellable product (private/no-contact-journal.pdf) and the cover
// image used on the site (public/journal-cover.png) from content/journal.js.
// Run: npm run journal
import { chromium } from "playwright";
import { mkdirSync, readFileSync } from "node:fs";
import { days, phases, beforeYouText } from "../content/journal.js";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const lines = (n) => `<div class="lines">${'<div class="line"></div>'.repeat(n)}</div>`;

const font = (family, pkg, file, weight, style) =>
  `@font-face{font-family:${family};font-weight:${weight};font-style:${style};src:url(data:font/woff2;base64,${readFileSync(
    `node_modules/@fontsource/${pkg}/files/${file}`
  ).toString("base64")}) format("woff2");}`;
const fonts = [
  font("Fraunces", "fraunces", "fraunces-latin-400-normal.woff2", 400, "normal"),
  font("Fraunces", "fraunces", "fraunces-latin-600-normal.woff2", 600, "normal"),
  font("Fraunces", "fraunces", "fraunces-latin-400-italic.woff2", 400, "italic"),
  font("Inter", "inter", "inter-latin-400-normal.woff2", 400, "normal"),
  font("Inter", "inter", "inter-latin-600-normal.woff2", 600, "normal"),
].join("\n");

const css = `
${fonts}
@page { size: Letter; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Inter, system-ui, sans-serif; color: #2b2230; font-size: 11pt; line-height: 1.5; }
.page { width: 8.5in; height: 11in; padding: 0.75in 0.8in; position: relative; page-break-after: always; overflow: hidden; background: #fbf7f2; }
.page:last-child { page-break-after: auto; }
.serif { font-family: Fraunces, Georgia, serif; }
.eyebrow { font-size: 8.5pt; letter-spacing: .16em; text-transform: uppercase; color: #a14d38; font-weight: 600; }
h1 { font-family: Fraunces, Georgia, serif; font-weight: 600; font-size: 30pt; line-height: 1.1; }
h2 { font-family: Fraunces, Georgia, serif; font-weight: 600; font-size: 22pt; line-height: 1.15; margin: 6pt 0 10pt; }
em { font-style: italic; color: #a14d38; font-weight: 400; }
.note { font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 12.5pt; color: #4a3d4f; margin-bottom: 14pt; border-left: 3px solid #d9826b; padding-left: 12pt; }
.prompt { font-weight: 600; font-size: 10.5pt; margin-top: 12pt; }
.lines { margin-top: 4pt; }
.line { height: 22pt; border-bottom: 1px solid #d9cfc6; }
.check { position: absolute; left: .8in; right: .8in; bottom: .55in; display: flex; justify-content: space-between; font-size: 9pt; color: #6d6072; border-top: 1px solid #e3d9cf; padding-top: 8pt; }
.box { display: inline-block; width: 10pt; height: 10pt; border: 1.2px solid #6d6072; border-radius: 2px; vertical-align: -1pt; margin: 0 4pt 0 10pt; }
.cover { background: #2b2230; color: #fbf7f2; display: flex; flex-direction: column; justify-content: space-between; padding: 1in .9in; }
.cover h1 { font-size: 48pt; color: #fbf7f2; }
.cover em { color: #eea58f; }
.cover .eyebrow { color: #eea58f; }
.cover .sub { font-family: Fraunces, Georgia, serif; font-size: 15pt; color: #e6dbe8; max-width: 5in; margin-top: 18pt; }
.cover .foot { font-size: 10pt; color: #b9aebd; }
.phase { background: #3a2c40; color: #fbf7f2; display: flex; flex-direction: column; justify-content: center; }
.phase h1 { color: #fbf7f2; font-size: 40pt; }
.phase em { color: #eea58f; }
.phase .eyebrow { color: #eea58f; }
.phase p { font-family: Fraunces, Georgia, serif; font-size: 15pt; color: #e6dbe8; max-width: 5.2in; margin-top: 16pt; }
.body p { margin-bottom: 10pt; }
.body ul { margin: 0 0 12pt 16pt; }
.body li { margin-bottom: 4pt; }
.small { font-size: 9pt; color: #6d6072; }
`;

const cover = `
<section class="page cover">
  <div class="eyebrow">A 30-day guided journal</div>
  <div>
    <h1>The No-Contact<br/><em>Journal</em></h1>
    <p class="sub">Don't text them. Write it here instead. Thirty days of prompts for the first month after a breakup.</p>
  </div>
  <div class="foot">digitaldisconnect.shop</div>
</section>`;

const howTo = `
<section class="page body">
  <div class="eyebrow">Start here</div>
  <h2>How to use <em>this journal</em></h2>
  <p>This journal is for the first thirty days after a breakup, the stretch when the urge to reach out is strongest and your thoughts need somewhere to go.</p>
  <p><strong>One page a day.</strong> Each day has a short note and three prompts. Most people need about ten minutes. Write as much or as little as you want.</p>
  <p><strong>Keep going if you slip.</strong> If you contact them, you haven't failed the journal. Tick "no" in the daily check-in, write about what happened, and carry on the next day.</p>
  <p><strong>Use the "Before you text them" page</strong> (right after Day 30) every time you're about to reach out. Answer all six questions first.</p>
  <p><strong>Print it or write digitally.</strong> Print it at home, or open the PDF in a note-taking app on a tablet and write on the lines.</p>
  <p style="margin-top:18pt"><strong>The four weeks</strong></p>
  <ul>${phases.map((p) => `<li><strong>${p.days}: ${p.name}.</strong> ${p.blurb}</li>`).join("")}</ul>
  <p class="small" style="margin-top:22pt">This journal is a self-help writing tool, not therapy or medical advice. If you're having thoughts of harming yourself, please reach out now. In the US, call or text 988 (Suicide &amp; Crisis Lifeline). Elsewhere, contact your local emergency number or a crisis line in your country.</p>
</section>`;

const phasePage = (p, i) => `
<section class="page phase">
  <div class="eyebrow">Week ${i + 1} · ${p.days}</div>
  <h1 style="margin-top:10pt">${p.name.split(" ").slice(0, -1).join(" ")} <em>${p.name.split(" ").slice(-1)}</em></h1>
  <p>${p.blurb}</p>
</section>`;

const dayPage = (d, i) => `
<section class="page">
  <div class="eyebrow">Day ${i + 1} of 30</div>
  <h2>${esc(d.title)}</h2>
  <p class="note">${esc(d.note)}</p>
  ${d.prompts.map((p, j) => `<p class="prompt">${esc(p)}</p>${lines(j === 1 ? 5 : 6)}`).join("")}
  <div class="check"><span>No contact today? <span class="box"></span>Yes <span class="box"></span>No</span><span>Mood today: 1 · 2 · 3 · 4 · 5</span></div>
</section>`;

const btt = `
<section class="page">
  <div class="eyebrow">Use as often as you need</div>
  <h2>${beforeYouText.title}</h2>
  <p class="note">${esc(beforeYouText.intro)}</p>
  ${beforeYouText.prompts.map((p) => `<p class="prompt">${esc(p)}</p>${lines(3)}`).join("")}
</section>`;

const closing = `
<section class="page body">
  <div class="eyebrow">After Day 30</div>
  <h2>You did <em>thirty days.</em></h2>
  <p>Keep this journal somewhere safe. One day you'll read it and barely recognise the person who wrote Day 1, and that's the point.</p>
  <p>If some days still feel heavy, that's normal. Go back to the prompts that helped most, and use the "Before you text them" page for as long as you need it.</p>
  <p>If you're still struggling after a month, talking to a counsellor or therapist can help. Needing support isn't a failure. It's what people do after something hard.</p>
  <p class="small" style="margin-top:22pt">In the US, call or text 988 (Suicide &amp; Crisis Lifeline) any time. Elsewhere, contact your local emergency number or a crisis line in your country.</p>
  <p class="small" style="margin-top:30pt">© The No-Contact Journal · digitaldisconnect.shop · For personal use. Please don't redistribute.</p>
</section>`;

const ordered = [cover, howTo];
const phaseStart = [0, 7, 14, 21];
days.forEach((d, i) => {
  const pi = phaseStart.indexOf(i);
  if (pi !== -1) ordered.push(phasePage(phases[pi], pi));
  ordered.push(dayPage(d, i));
});
ordered.push(btt, btt, closing);

const html = `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${ordered.join("")}</body></html>`;

mkdirSync("private", { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: "private/no-contact-journal.pdf", format: "Letter", printBackground: true });

// Cover + two sample pages as images for the site.
await page.setViewportSize({ width: 816, height: 1056 });
await page.emulateMedia({ media: "screen" });
const sections = await page.$$("section.page");
await sections[0].screenshot({ path: "public/journal-cover.png" });
await sections[3].screenshot({ path: "public/journal-day1.png" }); // cover, how-to, week 1, day 1
await browser.close();
console.log(`Built private/no-contact-journal.pdf (${ordered.length} pages)`);
