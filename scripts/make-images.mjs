// Renders the favicon, PWA icons and OG share card to PNG with Playwright.
// Usage: node scripts/make-images.mjs
import { chromium } from "playwright";

const CORAL = "#f0603c";
const icon = (size) => `<html><body style="margin:0"><div style="width:${size}px;height:${size}px;background:${CORAL};display:flex;align-items:center;justify-content:center;font:600 ${Math.round(size * 0.62)}px system-ui,sans-serif;color:#fff;border-radius:${Math.round(size * 0.22)}px">J</div></body></html>`;
const og = `<html><body style="margin:0"><div style="width:1200px;height:630px;background:${CORAL};color:#fff;font-family:system-ui,sans-serif;display:flex;flex-direction:column;justify-content:center;padding:0 96px;box-sizing:border-box">
<div style="font-size:30px;opacity:.85">Göteborg, Sweden</div>
<div style="font-size:112px;font-weight:700;letter-spacing:-3px;margin-top:12px">Hej, I'm Jin.</div>
<div style="font-size:48px;margin-top:8px;opacity:.95">The fun lover — say hello anytime.</div></div></body></html>`;

const jobs = [
  ["app/icon.png", icon(64), 64, 64, true],
  ["app/apple-icon.png", icon(180).replace(/border-radius:\d+px/, ""), 180, 180, false],
  ["public/icon-192.png", icon(192).replace(/border-radius:\d+px/, ""), 192, 192, false],
  ["public/icon-512.png", icon(512).replace(/border-radius:\d+px/, ""), 512, 512, false],
  ["app/opengraph-image.png", og, 1200, 630, false],
];

const browser = await chromium.launch();
for (const [path, html, width, height, transparent] of jobs) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.setContent(html);
  await page.screenshot({ path, omitBackground: transparent });
  await page.close();
}
await browser.close();
console.log("images written");
