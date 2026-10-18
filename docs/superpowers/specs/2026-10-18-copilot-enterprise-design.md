# Microsoft Copilot for Enterprises — Website Redesign

Date: 18 October 2026
Owner: Optivantage (site is de-personalised — no individual is named anywhere)
Status: Draft for owner approval

---

## 1. Why we are doing this

The Copilot pages on www.optivantage.in were written in April 2026 to sell a **public weekend course to individuals** ("Master Copilot 365 in 4 Weekends", cohorts of up to 20, "Enquire about the next cohort").

That is no longer the business. Every recent Copilot buyer is an **enterprise buying for its people**:

| Buyer                           | What they asked for                                                               | Status                         |
| ------------------------------- | --------------------------------------------------------------------------------- | ------------------------------ |
| PwC India                       | Better day-to-day Copilot use for employees                                       | Delivered                      |
| OSBI (UK bank, first India run) | ~78-hour AI Practitioner programme for 30 staff on Copilot Chat                   | Contracted, starts 18 Nov 2026 |
| A global BPO                    | 2 × 3.5h programme for SVP/VP/Director leaders                                    | Proposal                       |
| An MNC chemical company         | Two licence-based workshops (free Copilot Chat managers; Premium licence holders) | Proposal                       |

The common ask, in the owner's words: **"better use of Copilot — context, guardrails, better efficiency, utilisation."** HR and L&D heads have licences and flat usage. They want adoption that shows up in numbers.

Copilot itself has also changed a lot since April (see Section 6). The site mentions none of Notebooks, Agent Builder, Researcher, Analyst, Workflows, Pages or Cowork.

**Success looks like:** an HR or L&D head from a 500+ person company lands on the page, recognises their problem in 10 seconds, sees a credible path (assess → train → build → measure), and sends an enquiry.

---

## 2. Goals, non-goals, anti-goals

**Goals**

1. One clear enterprise Copilot page that replaces the three overlapping Copilot pages.
2. Present the offer as a four-step journey: **Assess → Train → Build → Measure & sustain**.
3. Show the three training formats that are actually sold (leadership, licence-based workshops, practitioner).
4. Show current Copilot capabilities accurately, in a section that is easy to update.
5. Remove the weekend/individual course from the whole site.
6. Show Optivantage's Microsoft partner status accurately, including licence supply via CSP.

**Non-goals (not in this project)**

- Pricing of any kind.
- The LinkedIn "feeder" for Copilot updates — separate project, planned after this one. (This design only makes it easy to plug in later — see Section 6.)
- Rewriting `/ai-automation` (it is a separate pillar; this page links to it).
- Rewriting the GEO/industry pages beyond removing weekend-course references.
- Ad images, AEO Audit, AI Lab.

**Anti-goals (would make this a failure even if it ships)**

- Naming the owner, or any individual, anywhere.
- Naming the global BPO or the chemical company, or presenting proposals as delivered work.
- Claiming OSBI outcomes before the cohort finishes.
- Using "Microsoft Solutions Partner", "Certified Partner" or "Gold Partner".
- Reading like a consumer course (cohorts, "reserve your spot", certificate ceremonies, weekend schedules).
- A feature tour of apps as the main pitch.
- Claims that can't be backed if a procurement team asks.
- Hype words (see banned list in `CLAUDE.md`).

---

## 3. Who it's for

Primary reader: **HR head, L&D head, or business function head** at an enterprise that already has Microsoft 365 and some Copilot licences (free Copilot Chat, paid Microsoft 365 Copilot, or a mix).

Secondary reader: the **IT / M365 admin** they forward it to, who checks that the provider knows tenant settings, licences and governance.

Their problems, in their words:

- "We bought licences. Usage is flat."
- "People use it for emails and nothing else."
- "I can't show leadership what we're getting for the spend."
- "I'm worried about what data goes in, and about people using free ChatGPT instead."
- "Generic Microsoft training didn't stick."
- "Which of our people actually need the paid licence?"
- New since Sept 2026: "Agentic features (Cowork etc.) are billed by usage — how do we control that?"

---

## 4. The offer (page content)

### 4.1 The journey: Assess → Train → Build → Measure & sustain

| Step                  | What's included                                                                                                                                                                                                                                     | Evidence it's real                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Assess**            | Copilot readiness check: licence mix, tenant settings (Notebooks, agent creation, Researcher/Analyst, Workflows enabled?), baseline usage survey, which teams gain most. Licence advice: who needs paid Microsoft 365 Copilot vs free Copilot Chat. | Pre-session tech check and pre-survey used in the chemical company proposal              |
| **Train**             | Three formats (4.2), built on the client's own licence and real tasks.                                                                                                                                                                              | All four engagements                                                                     |
| **Build**             | Custom agents (Agent Builder, Copilot Studio), Copilot Workflows and Power Automate flows for the client's processes; shared prompt and agent library handed over. Built in-house by the Optivantage team — no subcontracting.                      | Owner + co-founder do this work                                                          |
| **Measure & sustain** | Baseline vs 60–90 day follow-up, usage reporting for HR/L&D, champions network (train 10–15 internal Copilot leads), office hours, governance setup (data rules, acceptable-use policy, agent guardrails).                                          | Surveys and office-hours add-ons in proposals; ISO/IEC 42001 Lead Implementer credential |

Plus: **licence supply** — as a Microsoft CSP indirect reseller, Optivantage can supply the Microsoft 365 and Copilot licences, so a client can buy licences, setup and training from one vendor.

### 4.2 Training formats

Show as three cards. No prices. Durations are fine.

| Format                                      | For                                          | Shape                                                                                                                                   | Outcome promised                                                                                                       |
| ------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Copilot for Leaders**                     | VPs, directors, function heads               | 2 × 3.5h sessions, a few days apart, with a mid-programme check-in with L&D                                                             | Each leader leaves with 3 personal workflows + 1 function workflow, and a clear map of what data is safe in which tool |
| **Copilot Adoption Workshops** (by licence) | Managers and teams                           | Half-day for free Copilot Chat users; full day for paid Microsoft 365 Copilot users (Researcher, Analyst, Notebooks, agents, Workflows) | Every participant leaves with one real task to run the next Monday                                                     |
| **AI Practitioner Programme**               | A cohort that will build and prove workflows | Multi-week, 4 stages: Understand → Practice → Apply → Prove                                                                             | Each participant owns a working workflow with before-and-after numbers, signed off by their manager                    |

Source material: `C:\Users\ashu1\OneDrive\AI Coaching Project\Microsoft Copilot\Proposals\` (Concentrix deck + module plan = Leaders; SRF V2 = Workshops; OSBI note + delivery plan = Practitioner). Copy must be anonymised for the BPO and chemical company.

### 4.3 How we work (the six principles — owner approved)

1. **Built on the licence you already have.** Tenant check first; we never demo what your people can't use.
2. **Your work, not generic examples.** Pre-survey collects real tasks; exercises use your function's work.
3. **Guardrails inside every demo.** Data classification, shadow AI, human-in-the-loop, exercises where Copilot fails on purpose.
4. **Current Copilot.** Notebooks, agents, Researcher, Analyst, Workflows, Cowork — not last year's feature list.
5. **Proof it worked.** Baseline, 60–90 day follow-up, before-and-after numbers.
6. **Built for HR and L&D, not just participants.** Adoption playbook, 30-60-90 rollout plan, feedback summary.

### 4.4 What HR / L&D receive

From proposals: participant prompt library, use-case starter packs, workflow templates, data classification one-pager, AI tool decision map, 30-60-90 adoption plan template; for L&D an adoption playbook draft, rollout suggestions per function, feedback summary, wrap-up call.

### 4.5 Proof

- **PwC India**: named, as delivered work. Firm-wide, 1,000+ people across 2 masterclasses (leadership using AI; Copilot masterclass; confidence in using AI).
- **OSBI** — named as a current engagement: "AI Practitioner programme, starting November 2026." No outcome claims.
- **"Designed for a global BPO's senior leadership"** and **"designed for an MNC chemical company"** — described as programme designs, not delivered results. Can show the shape (e.g. the BPO's 7 use cases: call transcript → case summary, QA scorecard → coaching dashboard, etc.), which demonstrates depth without naming.
- Existing client logo strip (BIAL, Kotak Mahindra Bank, Hexaware, Infogain, MSME India, upGrad, Arvind Fashions) stays, plus PwC.
- Usage result: "daily Copilot use rose from under 20% to 60–70%" at a large IT services client (source: Hexaware; see Section 12 on naming).

### 4.6 Microsoft partner status (exact wording)

Allowed:

- "Member of the Microsoft AI Cloud Partner Program"
- "Microsoft Cloud Solution Provider (CSP) indirect reseller"

Not allowed: "Solutions Partner", "Certified Partner", "Gold Partner", or Microsoft logos implying a designation. The "Microsoft 365 and Copilot" programme registration is not shown (it's a developer registration, not a credential).

Personal trainer credentials (Microsoft Copilot Certified Trainer, ISO/IEC 42001 Lead Implementer, etc.) may be shown as "our team's accreditations" without a name.

---

## 5. Page structure (main page)

Order, top to bottom:

1. **Hero** — enterprise headline about adoption, not a course. Primary CTA: "Talk to us about your Copilot rollout" → enquiry form. Secondary: "See how we work" → journey.
2. **The problem** — licences bought, usage flat; 3 short stat/claim cards. Any third-party statistic must have a cited source on the page or be removed. (The current "68%" and "5 hrs" stats have no source — remove unless sourced.)
3. **Quick diagnostic** — keep the existing interactive "select your challenges" pattern, rewritten for enterprise problems (Section 3 list), mapping each to the journey step that solves it.
4. **The journey** — Assess → Train → Build → Measure & sustain (4.1), with licence supply called out.
5. **Training formats** — three cards (4.2), each expandable to a short module outline.
6. **How we work** — six principles (4.3).
7. **What's current in Copilot** — dated, updateable section (Section 6).
8. **Guardrails & governance** — short section: consumer vs enterprise tools, data classification, shadow AI, human-in-the-loop, agent cost control.
9. **What HR & L&D receive** (4.4).
10. **Proof** — PwC, OSBI (current), the two "designed for" examples, logo strip (4.5).
11. **Partner status & team accreditations** (4.6).
12. **FAQ** — enterprise questions (licences, tenant prerequisites, virtual vs on-site, batch sizes, data safety, how success is measured, can you supply licences). Keep FAQPage schema.
13. **Enquiry form** — Formspree endpoint `maqwnqnp` (existing). Fields: name, work email, phone, company, role, approx. employees, Copilot licences today (none / Copilot Chat / Microsoft 365 Copilot / mix / not sure), interests (checkboxes: Assess, Train, Build, Measure, Licences), message.

Removed entirely: weekend schedule and curriculum accordion, cohort stats, "≤20 participants", "Reserve your spot", certificate ceremony, peer community, individual/virtual-weekend form options.

---

## 6. "What's current in Copilot" section

Copilot now changes monthly, so feature claims must live in **one data file** (builder's call on name, e.g. `src/lib/copilot-updates.ts`) with a visible "Last reviewed: <month year>" date. Main page copy elsewhere should name capabilities sparingly so it doesn't go stale.

Verified on Microsoft's own pages, 18 Oct 2026:

| Capability                             | One line                                                                           | Status                            |
| -------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------- |
| Copilot Chat (free with eligible M365) | Web-grounded chat; work-data chat needs a paid licence                             | Available                         |
| Microsoft 365 Copilot (paid)           | Copilot inside Word, Excel, PowerPoint, Outlook, Teams, grounded in work data      | Available                         |
| Copilot Cowork                         | Hand Copilot a multi-step task; it works across apps and returns a finished result | Generally available               |
| Researcher / Analyst agents            | Multi-source research with citations; data analysis in Excel                       | Available (paid licence)          |
| Notebooks                              | Gather files, emails, meetings in one place and work across them                   | Available                         |
| Pages                                  | Shared, AI-assisted working documents                                              | Available                         |
| Agent Builder / Copilot Studio         | Build agents without code / with IT                                                | Available                         |
| New Copilot Home, Code, Autopilot      | New layout; build small apps from plain language; always-on personal agent         | Early access (Frontier) / preview |
| Usage-based billing + Agent 365        | Agentic work (Cowork, Code, Autopilot) is metered; admins set spending policies    | Rolling out                       |

Sources:

- https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/
- https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
- https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing
- https://learn.microsoft.com/en-us/viva/insights/copilot-analytics-introduction

Builder must re-check statuses against these pages on the day of build. Preview items are labelled "early access" on the site, not presented as available.

The data-file approach is also what the later LinkedIn feeder project will write into.

---

## 7. Site-wide changes

**URL and redirects** (my call, owner can override): the new page lives at **`/microsoft-copilot`**. Permanent (301) redirects in `next.config.js` from:

- `/training/copilot-365`
- `/microsoft-copilot-training`
- `/microsoft-copilot-training-india`

Redirects keep the search ranking and backlinks those pages already have. Old page files are deleted once redirects are in place.

**Every weekend-course reference must go or be updated:**

| File                                                             | Change                                                                                            |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `src/components/Navbar.tsx`                                      | "Copilot 365 Course" → "Microsoft Copilot for Enterprises", href `/microsoft-copilot`             |
| `src/app/layout.tsx` (footer, ~line 422)                         | Same link update                                                                                  |
| `src/app/page.tsx` (~393, ~477–486)                              | Replace "Master Copilot 365 — In 4 Weekends" block with an enterprise Copilot block               |
| `src/app/services/[slug]/ServicePageClient.tsx` (~751)           | AI Training & Advisory service page: replace weekend block, lead with enterprise Copilot adoption |
| `src/app/ai-training-guide/page.tsx` (~178, ~188)                | Remove "4 weekends" / "weekend programs"                                                          |
| `src/app/delhi-ncr-ai-training/page.tsx` (~99–145, ~222)         | Remove weekend-batch FAQ, programme tags and testimonial wording                                  |
| `src/app/ai-training-banking-india`, `ai-training-telecom-india` | Update links to `/microsoft-copilot`                                                              |
| `src/lib/blog-data.ts` (~154)                                    | Update link                                                                                       |
| `src/app/sitemap.ts`                                             | Remove three old URLs, add `/microsoft-copilot`                                                   |
| `public/llms.txt`                                                | Replace Copilot course entry with enterprise Copilot offer                                        |
| `src/app/training/copilot-365/layout.tsx`                        | Its metadata and Course schema go with the old page; new page gets Service schema                 |

Repo-wide search for `weekend`, `copilot-365`, `microsoft-copilot-training` must return nothing user-facing when done.

---

## 8. Constraints

- Next.js 15 App Router, TypeScript, Tailwind. Match existing dark navy/orange brand (`#0B1120`, `#FF4D00`).
- No individual named. Team voice ("our team", "we").
- Pages that are server components can't use `onClick`; interactive parts (diagnostic, accordions, form) go in `"use client"` components.
- Organization schema stays only in `layout.tsx`.
- Vendor policy exception: this page is about Microsoft by nature. Claude/ChatGPT/Gemini mentioned only in the shadow-AI/governance context.
- Writing tone: calm, credible, business-friendly; banned-word list in `CLAUDE.md`.
- `npx tsc --noEmit` and `npm run build` must pass.
- **Pushing to `main` deploys live immediately.** Build on a feature branch; owner reviews the Vercel preview link before merging. (Builder to confirm Vercel creates preview deployments for branches on this project.)

---

## 9. Left to the builder

- Component breakdown, file names, exact layout and visuals within the brand.
- Final copy wording, within this document's content and rules.
- Icon choices, card designs, accordion behaviour.
- Service schema details.

## 10. How the owner checks it's done

On the preview link, before merge:

1. Open `/training/copilot-365` → lands on `/microsoft-copilot`. Same for the other two old URLs.
2. Nav and footer show "Microsoft Copilot for Enterprises".
3. The word "weekend" appears nowhere on the homepage, AI Training service page, or the new page.
4. No individual's name anywhere; Concentrix and SRF not named.
5. Partner wording matches 4.6 exactly.
6. "What's current" section shows a "Last reviewed" date.
7. Submit a test enquiry → arrives at contact@optivantage.in.
8. Page reads well on a phone.

---

## 11. Open questions for the owner

Answered by the owner, 18 Oct 2026:

1. **Prompting framework:** **CRAFT** is the public name. Used consistently on the site.
2. **PwC India:** firm-wide audience, **1,000+ people across 2 masterclasses**: leadership using AI; a Copilot masterclass; building confidence in using AI. Shown as delivered work.
3. **Usage claim** ("daily Copilot use rose from under 20% to 60–70%") comes from **Hexaware**. Usable as proof.
4. **Licence supply:** confirmed. Site says Optivantage supplies Microsoft 365 and Copilot licences as a CSP indirect reseller. Distributor not named.

## 12. Calls made by Claude (owner to check)

- New URL `/microsoft-copilot`, with 301 redirects from the three old URLs; old page files deleted.
- Nav label "Microsoft Copilot for Enterprises".
- OSBI shown as a name only (no logo) unless a logo is supplied.
- PwC named in text only; logo added later if the owner supplies an approved image.
- Hexaware usage claim worded as "at a large IT services client" rather than naming Hexaware next to the number (Hexaware stays in the logo strip). Owner can switch to naming them.
- CRAFT replaces CRTF / "5-Part Framework" everywhere on the site.
- Team accreditation logo strip kept, unnamed.
- Interactive diagnostic kept, rewritten for enterprise problems.
- Unsourced stats ("68%", "5 hrs") removed unless a source is found.
- Copilot feature list kept in one dated data file so it's easy to update and can be fed by the later LinkedIn project.
- Build on a branch and review on a Vercel preview before going live.
- `delhi-ncr-ai-training` page: only weekend references removed; its "Delhi NCR" focus (which conflicts with the pan-India rule) is left for another time.
