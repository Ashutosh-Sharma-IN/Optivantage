// Checks for the enterprise Copilot redesign (docs/superpowers/specs/2026-10-18-copilot-enterprise-design.md).
// Usage:
//   node scripts/check-copilot-redesign.mjs                      static content checks
//   node scripts/check-copilot-redesign.mjs --base-url <url>     static + live redirect/page checks
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(
  /^\/([A-Za-z]:)/,
  "$1",
);
const failures = [];
const fail = (msg) => failures.push(msg);

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const read = (file) => readFileSync(file, "utf8");
const rel = (file) => relative(ROOT, file).replace(/\\/g, "/");

function findMatches(files, pattern) {
  const hits = [];
  for (const file of files) {
    read(file)
      .split("\n")
      .forEach((line, i) => {
        if (pattern.test(line)) hits.push(`${rel(file)}:${i + 1}`);
      });
  }
  return hits;
}

// 1. Site-wide: the weekend course and old Copilot URLs are gone.
const siteFiles = [
  ...walk(join(ROOT, "src")),
  join(ROOT, "public", "llms.txt"),
].filter(existsSync);
for (const pattern of [
  /weekend/i,
  /\/training\/copilot-365/,
  /\/microsoft-copilot-training/,
]) {
  const hits = findMatches(siteFiles, pattern);
  if (hits.length) fail(`site-wide: ${pattern} found in ${hits.join(", ")}`);
}

// 2. New-page files: nothing that must never be published.
const pageFiles = [
  ...walk(join(ROOT, "src", "app", "microsoft-copilot")),
  join(ROOT, "src", "lib", "copilot-offer.ts"),
  join(ROOT, "src", "lib", "copilot-updates.ts"),
].filter(existsSync);

const banned = [
  /Ashutosh/,
  /Concentrix/,
  /\bSRF\b/,
  /India AI Labs/,
  /Solutions Partner/,
  /Certified Partner/,
  /Gold Partner/,
  /CRTF/,
  /5-Part/,
  /68%/,
  /₹/,
  /\bINR\b/,
  /\bRs\./,
  /\b(delve|harness|leverage|synergies|robust|holistic|seamless|transformative|groundbreaking|pivotal|foster|cultivate|spearhead|dynamic|impactful)\b/i,
];
for (const pattern of banned) {
  const hits = findMatches(pageFiles, pattern);
  if (hits.length)
    fail(`new page: banned ${pattern} found in ${hits.join(", ")}`);
}

// 3. New-page files: required wording is present.
const pageText = pageFiles.map(read).join("\n");
const required = [
  "Member of the Microsoft AI Cloud Partner Program",
  "Microsoft Cloud Solution Provider (CSP) indirect reseller",
  "CRAFT",
  "PwC",
  "OSBI",
  "Last reviewed",
  "large IT services client",
  "formspree.io/f/maqwnqnp",
];
for (const text of required) {
  if (!pageText.includes(text))
    fail(`new page: required text missing: "${text}"`);
}

// 3b. Form result messages must be announced and placed next to the submit button.
const formFile = join(
  ROOT,
  "src",
  "app",
  "microsoft-copilot",
  "CopilotEnquiryForm.tsx",
);
if (existsSync(formFile)) {
  const form = read(formFile);
  if ((form.match(/role="alert"/g) || []).length < 2) {
    fail('enquiry form: success and error messages need role="alert"');
  }
  if (form.indexOf('type="submit"') > form.indexOf('status === "success"')) {
    fail(
      "enquiry form: result messages must come after the submit button, where the visitor is looking",
    );
  }
}

// 3c. No Microsoft logo beside partner-status claims (spec 4.6): only the hero lockup may use it.
const pagePath = join(ROOT, "src", "app", "microsoft-copilot", "page.tsx");
if (existsSync(pagePath)) {
  const logoUses = (read(pagePath).match(/Microsoft Logo\.jpg/g) || []).length;
  if (logoUses > 1)
    fail(
      `new page: Microsoft logo used ${logoUses} times; only the hero may use it`,
    );
}

// 4. Live checks against a running site.
const urlFlag = process.argv.indexOf("--base-url");
if (urlFlag !== -1) {
  const base = process.argv[urlFlag + 1].replace(/\/$/, "");
  const redirects = [
    ["/training/copilot-365", "/microsoft-copilot"],
    ["/microsoft-copilot-training", "/microsoft-copilot"],
    ["/microsoft-copilot-training-india", "/microsoft-copilot"],
    [
      "/training/copilot-365?utm_source=linkedin",
      "/microsoft-copilot?utm_source=linkedin",
    ],
  ];
  for (const [from, to] of redirects) {
    try {
      const res = await fetch(base + from, { redirect: "manual" });
      const location = res.headers.get("location") || "";
      if (res.status !== 308 || !location.endsWith(to)) {
        fail(
          `redirect ${from}: got ${res.status} -> "${location}", expected 308 -> ...${to}`,
        );
      }
    } catch (err) {
      fail(`redirect ${from}: request failed (${err.message})`);
    }
  }
  try {
    const res = await fetch(base + "/microsoft-copilot");
    const html = await res.text();
    if (res.status !== 200)
      fail(`/microsoft-copilot: status ${res.status}, expected 200`);
    for (const text of [
      "Member of the Microsoft AI Cloud Partner Program",
      "Copilot for Leaders",
      "AI Practitioner Programme",
      "CRAFT",
      "Last reviewed",
    ]) {
      if (!html.includes(text))
        fail(`/microsoft-copilot: server HTML missing "${text}"`);
    }
  } catch (err) {
    fail(`/microsoft-copilot: request failed (${err.message})`);
  }
}

if (failures.length) {
  console.log(`FAIL: ${failures.length} problem(s)`);
  failures.forEach((f) => console.log(" - " + f));
  process.exit(1);
}
console.log("PASS: all checks passed");
