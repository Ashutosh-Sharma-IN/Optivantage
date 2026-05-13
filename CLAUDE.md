# CLAUDE.md — Optivantage Technologies Website

Context file for Claude Code sessions (CLI and Desktop app both read this at startup).
Last updated: May 2026.

---

## Project Overview

**Company**: Optivantage Technologies Private Limited
**Website**: www.optivantage.in
**Stack**: Next.js 14 App Router + TypeScript + Tailwind CSS
**Repo**: https://github.com/Ashutosh-Sharma-IN/Optivantage
**Deployment**: Vercel — auto-deploys on push to `main` branch
**Working directory**: `C:\Users\ashu1\ClaudeCodeProjects\Optivantage\optivantage-git`

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

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Organization schema (JSON-LD), GA4 tag, global nav, footer |
| `src/app/page.tsx` | Homepage — FAQPage schema only (no duplicate Organization schema) |
| `public/llms.txt` | AI crawler discovery file — must be kept in sync with live service structure |
| `src/app/robots.ts` | AI crawler permissions (GPTBot, ClaudeBot, PerplexityBot, etc.) |
| `src/app/sitemap.ts` | All pages listed for search indexing |
| `src/lib/blog-data.ts` | Blog post data |
| `src/components/AdsBanner.tsx` | A/B ad test component, fires GA4 events |
| `src/app/admin/ads/page.tsx` | Secret admin dashboard — NOT in nav, NOT in sitemap |

---

## Brand

- **Navy**: `#0B1120` (backgrounds, headers)
- **Orange**: `#FF4D00` (brand accent, CTAs)
- **Dark BG**: `#0a1628`
- **Google Analytics**: `G-NG6P0WPYQ0`

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

## Outstanding Issues (as of May 2026)

1. **Apex domain redirect** — `optivantage.in` shows GoDaddy "Launching Soon" page. Must be fixed in GoDaddy domain panel (URL forwarding to `https://www.optivantage.in`). Cannot be fixed in code.
2. **Ad images need retake** — v3 clipping, v1/v2/v3/v4/v5 location text needs updating

---

## Who Owns This

**Ashutosh Sharma** — non-developer, senior IT executive turned AI consultant.
- Explain before you code. Keep changes simple and reversible.
- Always warn before anything that touches deployment, DNS, or deletes files.
- "Done" means the live site at www.optivantage.in reflects the change.
