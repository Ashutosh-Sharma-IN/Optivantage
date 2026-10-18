# Microsoft Copilot for Enterprises: Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the weekend-course Copilot pages with one enterprise Copilot page at `/microsoft-copilot`, and remove the weekend course from the whole site.

**Architecture:** One server-rendered page (so search and AI crawlers read all content) with three small client components (diagnostic, format accordions, enquiry form). All page content lives in two typed data files: one for the offer, one for the dated Copilot capability list. Old URLs get permanent redirects in `next.config.js`. A no-dependency Node check script acts as the test suite.

**Tech Stack:** Next.js 15.5 App Router, React 19, TypeScript, Tailwind 3, lucide-react, Formspree.

**Spec:** `docs/superpowers/specs/2026-10-18-copilot-enterprise-design.md` (read it first; this plan argues from it).

## Global Constraints

- No individual named anywhere. Team voice ("our team", "we").
- Never name Concentrix, SRF, or India AI Labs. Use "a global BPO" and "an MNC chemical company", always as "designed for", never "delivered".
- OSBI: "AI Practitioner programme, starting November 2026". No outcome claims.
- PwC India: firm-wide, 1,000+ people across 2 masterclasses (leadership using AI; Copilot masterclass; confidence in using AI).
- Usage result wording: "daily Copilot use rose from under 20% to 60–70% at a large IT services client".
- Partner wording, exact: "Member of the Microsoft AI Cloud Partner Program" and "Microsoft Cloud Solution Provider (CSP) indirect reseller". Never "Solutions Partner", "Certified Partner", "Gold Partner".
- Prompting framework is **CRAFT** only (Character, Request, Add Context, Format, Tune). Never CRTF or "5-Part Framework".
- No prices (no ₹, INR, Rs.).
- Banned words: delve, harness, leverage, synergies, robust, holistic, seamless, transformative, groundbreaking, pivotal, foster, cultivate, spearhead, dynamic, impactful.
- Remove the "68%" and "5 hrs" stats (unsourced).
- Brand: navy `#0B1120`, orange `#FF4D00`; reuse existing Tailwind tokens (`bg-navy-900`, `bg-navy-800`, `text-brand`, `bg-brand`, `hover:bg-brand-hover`, `text-text-muted`).
- Organization schema stays only in `src/app/layout.tsx`.
- Enquiry form posts to Formspree `https://formspree.io/f/maqwnqnp`.
- All work on branch `feature/copilot-enterprise`. Never push to `main` until the owner approves the Vercel preview.
- `npx tsc --noEmit` and `npm run build` must pass before every commit that touches code.

## Review Focus

1. **Old links with tracking codes** (`/training/copilot-365?utm_source=linkedin`) must still land on `/microsoft-copilot` with the query kept. Covered in Task 3's HTTP check.
2. **Crawlers and no-JavaScript readers** must see the full offer (formats, partner wording, CRAFT) in the raw HTML, not only after client scripts run. Covered in Task 3's HTTP check (fetch raw HTML, assert strings).
3. **Enquiry fails to send** (network down, Formspree error): visitor sees an error naming `contact@optivantage.in`, and what they typed stays in the form. Covered in Task 2 Step 6.
4. **Phone width (375px):** journey, format cards, diagnostic and form must stack without sideways scrolling. Covered in Task 5 owner checklist and Task 2 Step 6.
5. **Stale Copilot features:** every capability must carry a status from the allowed set, and the section must show the last-reviewed month. Enforced by the type in Task 1 and asserted by the check script.

---

## File Map

| File                                                                                                                         | Responsibility                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `scripts/check-copilot-redesign.mjs` (create)                                                                                | The test suite: static content checks + optional HTTP checks                                      |
| `src/lib/copilot-updates.ts` (create)                                                                                        | Dated list of current Copilot capabilities                                                        |
| `src/lib/copilot-offer.ts` (create)                                                                                          | All offer content: journey, formats, principles, deliverables, proof, FAQs, diagnostic challenges |
| `src/app/microsoft-copilot/page.tsx` (create)                                                                                | Server page: metadata, Service + FAQPage schema, all sections                                     |
| `src/app/microsoft-copilot/CopilotDiagnostic.tsx` (create)                                                                   | Client: select challenges, show matching journey steps                                            |
| `src/app/microsoft-copilot/FormatCards.tsx` (create)                                                                         | Client: three expandable training-format cards                                                    |
| `src/app/microsoft-copilot/CopilotEnquiryForm.tsx` (create)                                                                  | Client: Formspree enquiry form                                                                    |
| `next.config.js` (modify)                                                                                                    | Add `redirects()`                                                                                 |
| `src/app/training/copilot-365/`, `src/app/microsoft-copilot-training/`, `src/app/microsoft-copilot-training-india/` (delete) | Old pages                                                                                         |
| Navbar, footer, homepage, service page, sitemap, llms.txt, 5 smaller pages, blog data (modify)                               | Links and weekend references                                                                      |

---

### Task 1: Branch, check script, and content data files

**Files:**

- Create: `scripts/check-copilot-redesign.mjs`
- Create: `src/lib/copilot-updates.ts`
- Create: `src/lib/copilot-offer.ts`

**Interfaces:**

- Produces (in `src/lib/copilot-updates.ts`):
  ```ts
  export type CapabilityStatus = "Available" | "Early access" | "Rolling out";
  export interface CopilotCapability {
    name: string;
    summary: string;
    status: CapabilityStatus;
    licence?: string;
  }
  export const COPILOT_LAST_REVIEWED: string; // "October 2026"
  export const copilotCapabilities: CopilotCapability[];
  ```
- Produces (in `src/lib/copilot-offer.ts`):

  ```ts
  export type JourneyStepId = "assess" | "train" | "build" | "measure";
  export interface JourneyStep {
    id: JourneyStepId;
    title: string;
    summary: string;
    items: string[];
  }
  export interface TrainingFormat {
    id: "leaders" | "workshops" | "practitioner";
    name: string;
    audience: string;
    shape: string;
    outcome: string;
    outline: string[];
  }
  export interface Principle {
    title: string;
    body: string;
  }
  export interface ProofItem {
    label: string;
    detail: string;
    status: "Delivered" | "Current engagement" | "Programme design";
  }
  export interface Challenge {
    id: string;
    label: string;
    steps: JourneyStepId[];
  }
  export interface FaqItem {
    q: string;
    a: string;
  }
  export const journeySteps: JourneyStep[]; // 4, in order assess, train, build, measure
  export const licenceSupply: string; // CSP licence supply sentence
  export const trainingFormats: TrainingFormat[]; // 3
  export const principles: Principle[]; // 6, spec 4.3 order
  export const hrDeliverables: {
    participants: string[];
    learningTeam: string[];
  };
  export const proofItems: ProofItem[];
  export const usageResult: string;
  export const partnerStatus: string[]; // exactly the two allowed lines
  export const challenges: Challenge[]; // 7, spec Section 3 list
  export const faqs: FaqItem[];
  export const CRAFT: { letter: string; word: string; desc: string }[]; // C,R,A,F,T
  ```

- [ ] **Step 1: Create the branch**

Run: `git checkout -b feature/copilot-enterprise`
Expected: `Switched to a new branch 'feature/copilot-enterprise'`

- [ ] **Step 2: Write the check script**

`scripts/check-copilot-redesign.mjs`, plain Node (no dependencies), exits 1 on any failure and prints each failure. Checks:

1. **Site-wide (all files under `src/` plus `public/llms.txt`):** no match for `/weekend/i`, `/training/copilot-365`, `/microsoft-copilot-training`.
2. **New-page files (`src/app/microsoft-copilot/**`, `src/lib/copilot-offer.ts`, `src/lib/copilot-updates.ts`):** no match for `Ashutosh`, `Concentrix`, `\bSRF\b`, `India AI Labs`, `Solutions Partner`, `Certified Partner`, `Gold Partner`, `CRTF`, `5-Part`, `68%`, `₹`, `\bINR\b`, `\bRs\.`, or any banned word (whole word, case-insensitive).
3. **Required strings present somewhere in the new-page files:** `Member of the Microsoft AI Cloud Partner Program`, `Microsoft Cloud Solution Provider (CSP) indirect reseller`, `CRAFT`, `PwC`, `OSBI`, `Last reviewed`, `large IT services client`, `formspree.io/f/maqwnqnp`.
4. **HTTP mode**, only when run with `--base-url <url>` (Task 3 uses this):
   - `GET /training/copilot-365`, `/microsoft-copilot-training`, `/microsoft-copilot-training-india` with `redirect: "manual"` → status `308`, `location` ends with `/microsoft-copilot`.
   - `GET /training/copilot-365?utm_source=linkedin` → `308`, `location` ends with `/microsoft-copilot?utm_source=linkedin`.
   - `GET /microsoft-copilot` → `200`, and raw HTML contains `Member of the Microsoft AI Cloud Partner Program`, `Copilot for Leaders`, `AI Practitioner Programme`, `CRAFT`, `Last reviewed`.

- [ ] **Step 3: Run it to confirm it fails**

Run: `node scripts/check-copilot-redesign.mjs`
Expected: FAIL. Lists weekend matches in `src/app/page.tsx`, `src/components/Navbar.tsx` and others, plus all required strings missing.

- [ ] **Step 4: Write `src/lib/copilot-updates.ts`**

`COPILOT_LAST_REVIEWED = "October 2026"`. Capabilities are the 9 rows of spec Section 6, with statuses mapped: "Available" / "Generally available" → `"Available"`; "Early access (Frontier) / preview" → `"Early access"`; "Rolling out" → `"Rolling out"`. Before writing, re-check each status against the four Microsoft source URLs in spec Section 6. Add a top-of-file comment listing those URLs and saying this file is the single place to update Copilot features.

- [ ] **Step 5: Write `src/lib/copilot-offer.ts`**

Content comes from spec Sections 3, 4.1–4.6 and the FAQ list in Section 5 item 12. Pinned values:

- `partnerStatus = ["Member of the Microsoft AI Cloud Partner Program", "Microsoft Cloud Solution Provider (CSP) indirect reseller"]`
- `licenceSupply`: "As a Microsoft Cloud Solution Provider (CSP) indirect reseller, we can supply your Microsoft 365 and Copilot licences, so licences, setup and training come from one team."
- `usageResult`: "Daily Copilot use rose from under 20% to 60–70% at a large IT services client after our programme."
- `proofItems`: PwC India (`Delivered`, detail per Global Constraints); OSBI (`Current engagement`, "AI Practitioner programme for 30 staff, starting November 2026"); "A global BPO's senior leadership" (`Programme design`, 2 × 3.5h, 7 use cases e.g. call transcript → case summary, QA scorecard → coaching dashboard); "An MNC chemical company" (`Programme design`, two licence-based workshops).
- `CRAFT`: Character (the role Copilot plays), Request (the task), Add Context (background), Format (output structure), Tune (tone and length).
- Format names, exact: "Copilot for Leaders", "Copilot Adoption Workshops", "AI Practitioner Programme".
- Build step must say the work is done by "our own team, with no subcontracting".
- Each `Challenge.steps` maps the problem to the journey step(s) that solve it (e.g. "Which of our people actually need the paid licence?" → `["assess"]`; agentic billing → `["assess", "measure"]`).

- [ ] **Step 6: Type-check**

Run: `npx tsc --noEmit`
Expected: no output, exit 0.

- [ ] **Step 7: Commit**

```bash
git add docs/superpowers/plans/2026-10-18-copilot-enterprise-page.md scripts/check-copilot-redesign.mjs src/lib/copilot-updates.ts src/lib/copilot-offer.ts
git commit -m "feat: add Copilot offer content, capability list and redesign checks"
```

---

### Task 2: The new `/microsoft-copilot` page

**Files:**

- Create: `src/app/microsoft-copilot/page.tsx`
- Create: `src/app/microsoft-copilot/CopilotDiagnostic.tsx`
- Create: `src/app/microsoft-copilot/FormatCards.tsx`
- Create: `src/app/microsoft-copilot/CopilotEnquiryForm.tsx`

**Interfaces:**

- Consumes: everything exported from `src/lib/copilot-offer.ts` and `src/lib/copilot-updates.ts` (Task 1).
- Produces:
  - `export default function CopilotDiagnostic(): JSX.Element` ("use client"; reads `challenges`, `journeySteps`)
  - `export default function FormatCards(): JSX.Element` ("use client"; reads `trainingFormats`; outline text must be in the DOM even when collapsed, hidden with CSS, so crawlers see it)
  - `export default function CopilotEnquiryForm(): JSX.Element` ("use client")
  - Page anchors: `#journey`, `#formats`, `#enquire`

- [ ] **Step 1: Build `page.tsx`** (server component, no `"use client"`)

Sections in spec Section 5 order (1–13). `<Navbar />` at top as other pages do. Metadata:

- title: `"Microsoft Copilot for Enterprises | Adoption, Training & Agents | Optivantage"`
- description: `"Get real value from your Microsoft Copilot licences. Readiness checks, leadership and team training, custom agents and workflows, and adoption measurement for enterprises across India."`
- canonical: `https://www.optivantage.in/microsoft-copilot`

JSON-LD: one `Service` schema (provider `{"@id": "https://www.optivantage.in/#organization"}`, `areaServed: "IN"`, `serviceType: "Microsoft Copilot adoption and training"`) and one `FAQPage` schema built from `faqs`. Render the schema with a plain `<script type="application/ld+json">` in the page. Hero CTAs: "Talk to us about your Copilot rollout" → `#enquire`; "See how we work" → `#journey`. The "What's current" section renders `copilotCapabilities` with a status badge each, plus the text `Last reviewed: {COPILOT_LAST_REVIEWED}`. Logo strip reuses the existing client logos from `/training/copilot-365/page.tsx` (BIAL, Kotak, Hexaware, Infogain, MSME India, upGrad, Arvind Fashions); copy that array before Task 3 deletes the old page.

- [ ] **Step 2: Build `CopilotDiagnostic.tsx`**

Same toggle pattern as the old page's pain-point quiz (`selectedPains` state). Output: the journey steps matching the selected challenges, each linking to `#journey`, plus a "Talk to us" link to `#enquire`. No emojis; use lucide icons.

- [ ] **Step 3: Build `FormatCards.tsx`**

Three cards (name, audience, shape, outcome); click expands `outline`. One open at a time.

- [ ] **Step 4: Build `CopilotEnquiryForm.tsx`**

Fields per spec Section 5 item 13. The licence select options are exactly: "None yet", "Copilot Chat (free)", "Microsoft 365 Copilot (paid)", "A mix", "Not sure". The interest checkboxes are exactly: Assess, Train, Build, Measure & sustain, Licences. Hidden `_subject`: "New enquiry: Microsoft Copilot for Enterprises". POST JSON to `https://formspree.io/f/maqwnqnp` with `Accept: application/json`, following the old page's `handleSubmit` (around lines 455–490). States: idle, sending, success, error. On error, keep the field values and show "Something went wrong. Please email contact@optivantage.in." Input text must be readable: `text-white` on `bg-navy-900` (the AEO page had a white-on-white bug).

- [ ] **Step 5: Type-check, build and run the static checks**

Run: `npx tsc --noEmit; npm run build; node scripts/check-copilot-redesign.mjs`
Expected: tsc and build succeed, and the build output lists `/microsoft-copilot`. The check script still FAILS, but only on site-wide check 1 (old links and weekend references, fixed in Tasks 3–4). Checks 2 and 3 pass.

- [ ] **Step 6: Manual check in the browser**

Run: `npm run dev`, open `http://localhost:3000/microsoft-copilot`.
Expected: all 13 sections in order; diagnostic shows matching steps; format cards expand; at 375px width (browser dev tools) nothing scrolls sideways. In dev tools, set Network to Offline and submit the form: the error message appears and the typed values stay.

- [ ] **Step 7: Commit**

```bash
git add src/app/microsoft-copilot
git commit -m "feat: add enterprise Microsoft Copilot page"
```

---

### Task 3: Redirects, remove old pages, sitemap and llms.txt

**Files:**

- Modify: `next.config.js` (add `async redirects()` next to the existing `rewrites()`)
- Delete: `src/app/training/copilot-365/`, `src/app/microsoft-copilot-training/`, `src/app/microsoft-copilot-training-india/`
- Modify: `src/app/sitemap.ts` (remove entries around lines 52, 90 and 157; add `/microsoft-copilot`, `lastModified: new Date('2026-10-18')`, `changeFrequency: 'monthly'`, `priority: 0.95`)
- Modify: `public/llms.txt` (around line 92: replace the course line with `- Microsoft Copilot for Enterprises (adoption, training, agents, licences): https://www.optivantage.in/microsoft-copilot`, and update any surrounding description of the Copilot course)

**Interfaces:**

- Consumes: `/microsoft-copilot` route (Task 2).

- [ ] **Step 1: Add redirects**

Three entries, each `{ source, destination: '/microsoft-copilot', permanent: true }`, for `/training/copilot-365`, `/microsoft-copilot-training`, `/microsoft-copilot-training-india`. (Next.js sends 308 for `permanent: true`. Search engines treat it the same as a 301.)

- [ ] **Step 2: Delete the three old page folders, then update the sitemap and llms.txt**

Run: `git rm -r src/app/training/copilot-365 src/app/microsoft-copilot-training src/app/microsoft-copilot-training-india`

- [ ] **Step 3: Build and run the HTTP checks**

Run: `npm run build`, then `npm run start` in a background terminal, then `node scripts/check-copilot-redesign.mjs --base-url http://localhost:3000`
Expected: all HTTP checks pass (3 redirects → 308, query string kept, page 200 with server-rendered strings). Static check 1 still fails on the remaining links (fixed in Task 4). Stop the server afterwards.

- [ ] **Step 4: Commit**

```bash
git add next.config.js src/app/sitemap.ts public/llms.txt
git commit -m "feat: redirect old Copilot course URLs to /microsoft-copilot"
```

---

### Task 4: Remove the weekend course from the rest of the site

**Files:**

- Modify: `src/components/Navbar.tsx:28`: `{ name: "Microsoft Copilot for Enterprises", href: "/microsoft-copilot" }`
- Modify: `src/app/layout.tsx` (footer, around line 422): same label and href
- Modify: `src/app/page.tsx` around 393: card link → `/microsoft-copilot`, title "Microsoft Copilot for Enterprises", text about adoption for teams. Around 456–490: replace the "Master Microsoft Copilot 365 — In 4 Weekends" banner with an enterprise banner. Badge "For enterprises"; heading "Get real value from your Copilot licences"; one-line summary of Assess → Train → Build → Measure; CTA "See how we work" → `/microsoft-copilot`. Keep the Microsoft × Optivantage logo pair.
- Modify: `src/app/services/[slug]/ServicePageClient.tsx` around 744–764: same replacement for the "Featured Course" banner (label "Featured: Microsoft Copilot for Enterprises", link `/microsoft-copilot`)
- Modify: `src/app/ai-training-guide/page.tsx` around 178 and 188: remove "Weekend programs" from the formats list; replace "Duration: 4 weekends" with "Format: leadership sessions, team workshops or multi-week practitioner programmes"
- Modify: `src/app/delhi-ncr-ai-training/page.tsx`: remove the weekend FAQ (around 99–102), the "Weekend Batches" and "Weekend Programs" tags (around 115 and 125), **delete the weekend testimonial entirely (around 145; do not reword a client's quote)**, and change around 222 to "Corporate training, on-site or online"
- Modify: `src/app/ai-training-banking-india/page.tsx:262`, `src/app/ai-training-telecom-india/page.tsx:147`: href → `/microsoft-copilot`
- Modify: `src/lib/blog-data.ts:154`: href → `/microsoft-copilot`, link text "enterprise Copilot programmes"

- [ ] **Step 1: Make the edits above**

- [ ] **Step 2: Run the full check, type-check and build**

Run: `npx tsc --noEmit; npm run build; node scripts/check-copilot-redesign.mjs`
Expected: tsc and build succeed; the check script prints all checks passed, exit 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx src/app/layout.tsx src/app/page.tsx "src/app/services/[slug]/ServicePageClient.tsx" src/app/ai-training-guide/page.tsx src/app/delhi-ncr-ai-training/page.tsx src/app/ai-training-banking-india/page.tsx src/app/ai-training-telecom-india/page.tsx src/lib/blog-data.ts
git commit -m "feat: replace weekend course links with enterprise Copilot page site-wide"
```

---

### Task 5: Preview, owner review, go live

**Files:**

- Modify: `CLAUDE.md`: add a "Microsoft Copilot for Enterprises — Oct 2026" section (route, data files, how to update `copilot-updates.ts`, redirects) and update the nav/key-files tables

- [ ] **Step 1: Update CLAUDE.md and commit**

```bash
git add CLAUDE.md
git commit -m "docs: document enterprise Copilot page in CLAUDE.md"
```

- [ ] **Step 2: Push the branch**

Run: `git push -u origin feature/copilot-enterprise`
Expected: the branch appears on GitHub. Vercel builds a preview within about 2 minutes. Get the preview URL from the Vercel dashboard (Deployments tab) or from the GitHub branch's deployment status. If no preview appears, check that preview deployments are enabled for the Optivantage project in Vercel.

- [ ] **Step 3: Run the HTTP checks against the preview**

Run: `node scripts/check-copilot-redesign.mjs --base-url <preview-url>`
Expected: all checks pass.

- [ ] **Step 4: Owner checklist on the preview** (spec Section 10)

The owner opens the preview link and confirms all 8 items, including a real test enquiry arriving at contact@optivantage.in and a phone-width check.

- [ ] **Step 5: Go live (only after the owner says yes)**

Run: `git checkout main; git merge --no-ff feature/copilot-enterprise; git push origin main`
Expected: Vercel deploys to www.optivantage.in. Re-run `node scripts/check-copilot-redesign.mjs --base-url https://www.optivantage.in`; all pass.
