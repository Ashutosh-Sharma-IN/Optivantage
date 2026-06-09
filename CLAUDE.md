# CLAUDE.md — Optivantage Technologies Website

Context file for Claude Code sessions (CLI and Desktop app both read this at startup).
Last updated: May 2026 (session 2).

---

## Project Overview

**Company**: Optivantage Technologies Private Limited
**Website**: www.optivantage.in
**Stack**: Next.js 15 App Router + TypeScript + Tailwind CSS
**Repo**: https://github.com/Ashutosh-Sharma-IN/Optivantage
**Deployment**: Vercel — auto-deploys on push to `main` branch
**Working directory**: `C:\Users\ashu1\ClaudeCodeProjects\Optivantage\optivantage-git`

---

## AEO Audit — Live Product (added May 16 2026)

A self-serve AI visibility scoring tool. Users enter their brand, get a free teaser score, pay ₹3,499 for a full report emailed to them.

| Item               | Detail                                                                          |
| ------------------ | ------------------------------------------------------------------------------- |
| **Page**           | `src/app/aeo-audit/page.tsx`                                                    |
| **Live URL**       | https://www.optivantage.in/aeo-audit                                            |
| **Nav placement**  | Services dropdown → last item: "AEO Audit — AI Visibility Score"                |
| **Backend**        | https://aeo-visibility-tracker.onrender.com (Flask on Render.com)               |
| **Backend repo**   | https://github.com/Ashutosh-Sharma-IN/aeo-visibility-tracker                    |
| **Payment**        | Razorpay live keys — account under review for optivantage.in (approved ~May 18) |
| **Email delivery** | Resend from `reports@optivantage.in` — DNS propagating                          |

### Env vars needed in Vercel for this page to work

- `NEXT_PUBLIC_BACKEND_URL=https://aeo-visibility-tracker.onrender.com`
- `NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_...` (the public key ID, NOT the secret)

### How the page works

Five states: `form → analyzing → result → paying → done`. The teaser calls `/api/teaser` (synchronous, ~15–18s). Payment calls `/api/create-order` then `/api/purchase`. On successful payment, the backend runs the full analysis in a background thread and emails the report. The page never waits for the report — it shows "check your email" immediately after payment.

### Pending before first real paid transaction

- Razorpay account approval for optivantage.in domain (submitted May 16, 24–48 hours)
- Resend domain verification for `optivantage.in` (DNS records added May 16, propagating)

---

## Current Service Structure — FOUR PILLARS (as of May 2026)

This is the agreed taxonomy. Use it everywhere — pages, footer, llms.txt, schema, copy.

1. **AI Training & Advisory** → `/services/ai-training-advisory`
2. **IT Infrastructure** → `/services/it-infrastructure`
3. **IT Equipment & Rentals** → `/services/it-equipment-rentals`
4. **AI Automation & Agentic AI** → `/ai-automation`

Tagline: **"AI Training. Automation. Infrastructure. Equipment. Four things we do exceptionally well."**

Do NOT refer to 3 pillars, 5 services, or add/remove pillars without confirming with the owner first.

---

## Key Files — What They Do

| File                                                                  | Purpose                                                                                    |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `src/app/layout.tsx`                                                  | Organization schema (JSON-LD), GA4 tag, global nav, footer                                 |
| `src/app/page.tsx`                                                    | Homepage — FAQPage schema only (no duplicate Organization schema)                          |
| `public/llms.txt`                                                     | AI crawler discovery file — must be kept in sync with live service structure               |
| `src/app/robots.ts`                                                   | AI crawler permissions (GPTBot, ClaudeBot, PerplexityBot, etc.)                            |
| `src/app/sitemap.ts`                                                  | All pages listed for search indexing                                                       |
| `src/lib/blog-data.ts`                                                | Blog post data                                                                             |
| `src/components/AdsBanner.tsx`                                        | A/B ad test component, fires GA4 events                                                    |
| `src/components/Navbar.tsx`                                           | Global nav — edit here to add/remove nav links                                             |
| `src/app/admin/ads/page.tsx`                                          | Secret admin dashboard — NOT in nav, NOT in sitemap                                        |
| `src/app/ai-lab/page.tsx`                                             | Optivantage AI Lab landing page — 5 concept cards + detail sections                        |
| `src/app/ai-lab/hiring-signal-sample/page.tsx`                        | Sample report request page — form in hero, signal preview table                            |
| `src/components/HiringSignalRequestForm.tsx`                          | Form component for hiring signal requests — posts to Formspree                             |
| `src/app/api/hiring-signal-request/route.ts`                          | API route for hiring signal form (backup — currently not used, Formspree handles delivery) |
| `src/lib/crm/resend.ts`                                               | Resend email wrapper — sendHiringSignalNotification() added but Resend not yet configured  |
| `public/reports/public-sample-hiring-signal-report-ai-cyber-cloud.md` | Sample hiring signal report — NOT publicly linked, sent manually by Ashutosh               |

---

## Brand

- **Navy**: `#0B1120` (backgrounds, headers)
- **Orange**: `#FF4D00` (brand accent, CTAs)
- **Dark BG**: `#0a1628`
- **Google Analytics**: `G-NG6P0WPYQ0`

---

## Form / Email Infrastructure

### What actually works (sends emails today)

- **Formspree** is the active email delivery system for all forms
- Contact Us form → Formspree endpoint `maqwnqnp`
- Exit intent popup → Formspree endpoint `maqwnqnp`
- Copilot 365 page form → Formspree endpoint `maqwnqnp`
- **Hiring Signal request form** → Formspree endpoint `xqenogbw` (separate form, created May 2026)
- All Formspree forms email `contact@optivantage.in`

### What is built but NOT yet active

- **Resend** — code exists in `src/lib/crm/resend.ts` but `RESEND_API_KEY` in `.env.local` is still a placeholder
- **HubSpot** — code exists in `src/lib/crm/hubspot.ts` but `HUBSPOT_API_KEY` is still a placeholder
- Until these are configured in Vercel environment variables, only Formspree delivers emails

### To activate Resend in future

1. Create account at resend.com, verify `optivantage.in` domain
2. Get API key, add to Vercel: `RESEND_API_KEY=re_xxxxx`
3. Set `RESEND_FROM_EMAIL=contact@optivantage.in`
4. All contact forms will then also push to HubSpot + send confirmation emails

---

## Optivantage AI Lab — built May 2026

### What it is

A landing section showcasing practical AI automation concepts Optivantage is researching, validating, and piloting. Positioned as a serious business innovation lab, not a startup gimmick.

### Pages

- `/ai-lab` — main AI Lab page. In nav (between Blog and Case Studies) and footer.
- `/ai-lab/hiring-signal-sample` — dedicated request page for the Hiring Signal Lead Pack sample report. NOT in sitemap (intentional — it is a request gate, not a content page). NOT in nav.

### Five concepts on the AI Lab page

| Concept                          | Status            | Category                               |
| -------------------------------- | ----------------- | -------------------------------------- |
| Hiring Signal Lead Pack          | Pilot-ready       | Sales intelligence / B2B lead research |
| Competitive Intelligence Monitor | Researching       | Market monitoring                      |
| Executive Morning Briefing       | Researching       | Leadership intelligence                |
| AI Contract First-Pass Review    | Validation needed | Legal workflow support                 |
| Market Research Agent            | Internal tool     | Idea validation                        |

### Hiring Signal Lead Pack — CTA flow

1. User clicks "Request the Sample Hiring Signal Report" on `/ai-lab`
2. Lands on `/ai-lab/hiring-signal-sample` — redesigned landing page with form in the hero, signal preview table below
3. Form collects: name, work email, phone, company, website, service they sell, target geography, target customer type, optional message
4. Submits to Formspree endpoint `xqenogbw`
5. Ashutosh receives email at `contact@optivantage.in` with subject "New request: Hiring Signal Sample Report"
6. Ashutosh manually emails the sample report from: `public/reports/public-sample-hiring-signal-report-ai-cyber-cloud.md`
7. Source of that file: `C:\Users\ashu1\ClaudeCodeProjects\automation-idea-research-agent\sample-reports\`

### Design decisions for hiring-signal-sample page

- Form is in the hero, above the fold, sticky on desktop
- Headline focuses on business outcome and timing advantage ("before your competitors do")
- FOMO nudge: "We review requests manually and prepare packs weekly"
- Stats row: 25–50 / Weekly / 100% research-led
- Signal preview is a compact striped table — 5 rows, 3 columns
- Bottom CTA scrolls back to top using `href="#"` (no JS needed — server component)
- Page uses `robots: { index: false }` — kept out of search results intentionally

---

## Content Rules

### Vendor policy

- Body copy is vendor-neutral — no brand names in service descriptions
- Exception: `InfraPartnersSection` logo strip (Cisco, Fortinet, Palo Alto, Vertiv) — credentials, not recommendations
- **Never mention** Chinese-origin security vendors: Hikvision, Dahua, ZKTeco, Anviz, eSSL, CP Plus — restricted for Indian government/PSU work

### Geography

- Service geography is **pan-India** — do NOT add "Delhi NCR" as the primary location
- Company address (Dwarka, Delhi) is fine in contact/legal pages

### Certifications — use exact language

- "Cisco Registered Partner" (not "Cisco certified")
- "Fortinet Partner"
- "Palo Alto Networks Partner"
- "Vertiv Authorised Reseller"
- "ISO/IEC 42001 Lead Implementer" (Ashutosh personally holds this)
- "Microsoft Copilot Certified Trainer"

### Writing tone for all pages

Calm, credible, business-friendly. No hype words.
Never use: delve, harness, leverage, synergies, robust, holistic, seamless, transformative, groundbreaking, pivotal, foster, cultivate, spearhead, dynamic, impactful.

---

## AEO/GEO Work Already Done

- Organization schema: `layout.tsx` is single source of truth — do NOT add it to other pages
- AI crawlers explicitly allowed in `robots.ts`
- `public/llms.txt` exists for LLM discovery — update it whenever service structure changes
- 8 GEO pages built for high-intent searches (see `src/app/` for routes like `ai-training-banking-india`, `laptop-rental-india`, etc.)
- FAQ schema on homepage and service pages

---

## A/B Ad Testing

- 5 Google Flow ad images in `public/`
- Secret admin at `/admin/ads` — not in sitemap, not in nav
- Tracks impressions/clicks/CTR via GA4 + localStorage
- Known issue: v3 ad has headline clipping; v1/v2 say "Fortune 500" (should say "enterprise and government organisations"); all say "New Delhi" (should say "Pan-India")

---

## De-personalisation — June 9 2026

Ashutosh's name, photo, phone number, and street address were removed from all public-facing pages. This was done for professional reasons (new employment). The site remains "founder-led" in tone but without any named individual.

**To roll back to the named/personal version:**

```
git revert 960c5b4c
# or hard reset to the commit before the change:
git reset --hard a1bec855
git push origin main --force
```

**What was removed:**

- All "Ashutosh Sharma" name references → replaced with "our founder / our team / Optivantage Team"
- Founder photo (`/founder.png`) → removed from About and Training pages
- Phone `9971701239` → replaced with `9540007159` (new number)
- Street address (Dwarka, Sector 9, Pocket 1) → replaced with "New Delhi, Delhi"
- Person JSON-LD schema → removed from layout.tsx and about/page.tsx
- Blog post author field → changed to "Optivantage Team"
- `public/ai-automation.html` (the `/ai-automation` page — a static HTML file served via Next.js rewrite) — all name references removed June 9 2026 (commit `c72cf40c`)

**What was NOT changed:**

- `privacy/page.tsx` — registered office address retained (legal requirement)
- The site still credits "25 years enterprise IT at BT, Telstra, SITA" — just without a name attached
- `/Ashutosh_Sharma_AI_Profile_Flutter_v2.pdf` — PDF filename retained in the download href (not user-visible on page); button text says "Download AI Profile"

**Commits:**
| What | Commit |
|---|---|
| Before de-personalisation | `a1bec855` |
| Main de-personalisation (20 files) | `960c5b4c` |
| CLAUDE.md rollback note added | `fe5abced` |
| ai-automation.html name removal | `c72cf40c` |

**Full rollback** (restores all named/personal content):

```
git reset --hard a1bec855
git push origin main --force
```

---

## Outstanding Issues (as of May 16 2026)

1. **Apex domain redirect** — `optivantage.in` shows GoDaddy "Launching Soon" page. Must be fixed in GoDaddy domain panel (URL forwarding to `https://www.optivantage.in`). Cannot be fixed in code.
2. **Ad images need retake** — v3 clipping, v1/v2/v3/v4/v5 location text needs updating
3. **Resend configured for AEO Audit** — `RESEND_API_KEY` is active in Render (for AEO report delivery). The optivantage.in site itself (`src/lib/crm/resend.ts`) still has a placeholder key in `.env.local` — Formspree handles contact form delivery.
4. **HubSpot not configured** — placeholder key in `.env.local`. Not blocking anything.
5. **SampleReportForm.tsx** — unused component, safe to delete in a future cleanup session.
6. **Razorpay approval pending** — optivantage.in submitted for domain approval May 16. Until approved, the AEO Audit payment flow will reject transactions. Expected ~May 18.
7. **Last updated**: `CLAUDE.md` — May 16 2026

---

## Deployment Notes

- Always push to `main` — Vercel auto-deploys
- If Vercel doesn't pick up a push (webhook miss), run: `git commit --allow-empty -m "Trigger Vercel redeploy" && git push origin main`
- TypeScript check before every deploy: `npx tsc --noEmit` from the working directory
- Build errors to watch for: `onClick` handlers in server components — convert to `href="#"` or extract a `"use client"` component

---

## Who Owns This

**Ashutosh Sharma** — non-developer, senior IT executive turned AI consultant.

- Explain before you code. Keep changes simple and reversible.
- Always warn before anything that touches deployment, DNS, or deletes files.
- "Done" means the live site at www.optivantage.in reflects the change.
