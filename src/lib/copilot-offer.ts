// Content for /microsoft-copilot (Microsoft Copilot for Enterprises).
// Source: docs/superpowers/specs/2026-10-18-copilot-enterprise-design.md
// Rules: no individual named, no prices, CRAFT is the only prompting framework,
// proposals are "programme designs", never "delivered".

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

export const journeySteps: JourneyStep[] = [
  {
    id: "assess",
    title: "Assess",
    summary: "Find out where you stand before anyone is trained.",
    items: [
      "Copilot readiness check: your licence mix and which features are switched on in your tenant (Notebooks, agent creation, Researcher, Analyst, Workflows)",
      "Baseline survey of how people use Copilot today, and the tasks that take most of their week",
      "Licence advice: who needs the paid Microsoft 365 Copilot licence and who is well served by free Copilot Chat",
      "Which teams have the most to gain, so the first rollout shows results quickly",
    ],
  },
  {
    id: "train",
    title: "Train",
    summary: "Programmes built on your licence and your people's real tasks.",
    items: [
      "Copilot for Leaders, for VPs, directors and function heads",
      "Copilot Adoption Workshops, matched to the licence each group has",
      "AI Practitioner Programme, for a cohort that builds and proves working AI workflows",
    ],
  },
  {
    id: "build",
    title: "Build",
    summary:
      "Agents and automations for the processes your teams run every week.",
    items: [
      "Custom agents with Agent Builder and Copilot Studio",
      "Copilot Workflows and Power Automate flows across Outlook, Teams, SharePoint and Planner",
      "A shared prompt and agent library handed over to your teams",
      "Built by our own team, with no subcontracting",
    ],
  },
  {
    id: "measure",
    title: "Measure & sustain",
    summary:
      "Show leadership what the licences are returning, and keep usage growing.",
    items: [
      "Baseline against a 60 to 90 day follow-up, with before-and-after numbers",
      "Usage reporting for HR and L&D",
      "A champions network: we train 10 to 15 internal Copilot leads who keep adoption going",
      "Office hours after the programme",
      "Governance setup: data rules, an acceptable-use policy and guardrails for agents, including spending controls for usage-billed features",
    ],
  },
];

export const licenceSupply =
  "As a Microsoft Cloud Solution Provider (CSP) indirect reseller, we can supply your Microsoft 365 and Copilot licences, so licences, setup and training come from one team.";

export const trainingFormats: TrainingFormat[] = [
  {
    id: "leaders",
    name: "Copilot for Leaders",
    audience: "VPs, directors and function heads",
    shape:
      "Two 3.5-hour sessions a few days apart, with a check-in with your L&D team in between",
    outcome:
      "Each leader leaves with three personal workflows, one workflow for their function, and a clear map of what data is safe in which tool.",
    outline: [
      "Session 1: Copilot as a co-worker. CRAFT prompting on a real business document, then Outlook, Teams and Word on your own scenarios",
      "Between sessions: every leader runs three workflows on real work",
      "Session 2: multi-step workflows in Excel and PowerPoint, a live agent build with Agent Builder, and governance (data classification, shadow AI, human checks)",
      "Close: choosing the right Microsoft tool for each task, and a personal 30-60-90 day plan",
    ],
  },
  {
    id: "workshops",
    name: "Copilot Adoption Workshops",
    audience: "Managers and teams, grouped by the licence they have",
    shape:
      "Half a day for free Copilot Chat users; a full day for paid Microsoft 365 Copilot users",
    outcome:
      "Every participant leaves with one real task to run the following Monday.",
    outline: [
      "Copilot Chat workshop: CRAFT prompting, Word, Outlook, Excel and PowerPoint, Notebooks, and building a simple no-code agent",
      "Microsoft 365 Copilot workshop: the Analyst agent in Excel, the Researcher agent, Notebooks across files, meetings and email, agents with guardrails, and Workflows",
      "Use-case clinics for finance, sales and marketing, HR and operations, built on tasks your people name in the pre-survey",
      "A short pre-survey and a technical check with your IT team beforehand, so every demo works on your setup",
    ],
  },
  {
    id: "practitioner",
    name: "AI Practitioner Programme",
    audience: "A cohort that will build, prove and teach AI workflows",
    shape: "Multi-week, in four stages: Understand, Practice, Apply, Prove",
    outcome:
      "Each participant owns a working AI workflow with before-and-after numbers, signed off by their manager, and teaches it to two colleagues.",
    outline: [
      "Understand: how generative AI works, why instructions change the output, and responsible use within your data rules",
      "Practice: daily Copilot use on each person's own tasks, reusable templates, research and reporting workflows, and checking outputs",
      "Apply: choosing a use case with the reporting manager, building the workflow, measuring the baseline and the improvement",
      "Prove: presenting the case with results, and a plan for spreading the workflow across the team",
    ],
  },
];

export const principles: Principle[] = [
  {
    title: "Built on the licence you already have",
    body: "We check your tenant first and never demo a feature your people can't use.",
  },
  {
    title: "Your work, not generic examples",
    body: "A pre-survey collects real tasks, and every exercise uses your function's own work.",
  },
  {
    title: "Guardrails inside every demo",
    body: "Data classification, shadow AI and human review are part of each exercise, including ones where Copilot fails on purpose.",
  },
  {
    title: "Current Copilot",
    body: "Notebooks, agents, Researcher, Analyst, Workflows and Cowork, not last year's feature list.",
  },
  {
    title: "Proof it worked",
    body: "A baseline, a 60 to 90 day follow-up, and before-and-after numbers you can show leadership.",
  },
  {
    title: "Built for HR and L&D, not just participants",
    body: "You get an adoption playbook, a 30-60-90 day rollout plan and a feedback summary.",
  },
];

export const hrDeliverables = {
  participants: [
    "Prompt library, tagged by function",
    "Use-case starter packs: input file, prompt and expected output",
    "Word, Excel and PowerPoint workflow templates",
    "One-page data classification guide",
    "AI tool decision map",
    "30-60-90 day personal adoption plan",
  ],
  learningTeam: [
    "Adoption playbook draft your team can extend",
    "Rollout suggestions for each function",
    "Post-programme feedback summary: themes, wins and sticking points",
    "Wrap-up call to review outcomes",
  ],
};

export const proofItems: ProofItem[] = [
  {
    label: "PwC India",
    detail:
      "Firm-wide programme for 1,000+ people across three masterclasses: leadership using AI, a Copilot masterclass, and building confidence in using AI.",
    status: "Delivered",
  },
  {
    label: "OSBI",
    detail: "AI Practitioner programme for 30 staff, starting November 2026.",
    status: "Current engagement",
  },
  {
    label: "A global BPO's senior leadership",
    detail:
      "Two 3.5-hour sessions built around seven of their own use cases, such as call transcript to case summary and QA scorecard to coaching dashboard.",
    status: "Programme design",
  },
  {
    label: "An MNC chemical company",
    detail:
      "Two workshops matched to licence: free Copilot Chat for managers, and a full day for Microsoft 365 Copilot licence holders.",
    status: "Programme design",
  },
];

export const usageResult =
  "Daily Copilot use rose from under 20% to 60–70% at a large IT services client after our programme.";

export const partnerStatus: string[] = [
  "Member of the Microsoft AI Cloud Partner Program",
  "Microsoft Cloud Solution Provider (CSP) indirect reseller",
];

export const challenges: Challenge[] = [
  {
    id: "flat-usage",
    label: "We bought licences. Usage is flat.",
    steps: ["assess", "train"],
  },
  {
    id: "email-only",
    label: "People use it for emails and nothing else.",
    steps: ["train"],
  },
  {
    id: "no-proof",
    label: "I can't show leadership what we're getting for the spend.",
    steps: ["measure"],
  },
  {
    id: "data-risk",
    label:
      "I'm worried about what data goes in, and about people using free AI tools instead.",
    steps: ["measure", "train"],
  },
  {
    id: "didnt-stick",
    label: "Generic Microsoft training didn't stick.",
    steps: ["train", "build"],
  },
  {
    id: "licence-mix",
    label: "Which of our people actually need the paid licence?",
    steps: ["assess"],
  },
  {
    id: "agent-billing",
    label:
      "Agentic features like Cowork are billed by usage. How do we control that?",
    steps: ["assess", "measure"],
  },
];

export const faqs: FaqItem[] = [
  {
    q: "Do you work with free Copilot Chat as well as the paid Microsoft 365 Copilot licence?",
    a: "Yes. We design each programme around the licences your people have. Free Copilot Chat users and paid licence holders usually get separate sessions, so nobody is shown features they can't use.",
  },
  {
    q: "What do you need from our IT team before training?",
    a: "A 15-minute technical check about a week before: that participants can sign in, that features such as Notebooks, agent creation, Researcher, Analyst and Workflows are switched on where needed, and that practice files sit on OneDrive or SharePoint.",
  },
  {
    q: "Is training virtual or on-site?",
    a: "Both. Programmes run on Microsoft Teams or in person at your office anywhere in India.",
  },
  {
    q: "How many people can join one batch?",
    a: "Typically 25 to 50, depending on the format. Leadership sessions work best at around 25 so everyone gets hands-on time.",
  },
  {
    q: "How do you keep our data safe during training?",
    a: "Every exercise uses permitted or synthetic data, and data rules are taught inside each demo. Microsoft 365 Copilot works within your tenant; we also cover why consumer AI tools are a risk for company data.",
  },
  {
    q: "How do you measure whether the training worked?",
    a: "We take a baseline survey before the programme and repeat it 60 to 90 days later, and practitioner participants measure a real workflow before and after. Your HR and L&D team gets the results.",
  },
  {
    q: "Can you supply the Copilot licences too?",
    a: "Yes. As a Microsoft Cloud Solution Provider (CSP) indirect reseller, we can supply Microsoft 365 and Copilot licences alongside setup and training.",
  },
  {
    q: "Can you build agents and automations for our processes?",
    a: "Yes. Our own team builds custom agents with Agent Builder and Copilot Studio, and Workflows or Power Automate flows for your processes, then hands them over with documentation.",
  },
];

export const CRAFT: { letter: string; word: string; desc: string }[] = [
  { letter: "C", word: "Character", desc: "The role Copilot plays" },
  { letter: "R", word: "Request", desc: "The task" },
  { letter: "A", word: "Add Context", desc: "The background it needs" },
  { letter: "F", word: "Format", desc: "The output structure" },
  { letter: "T", word: "Tune", desc: "Tone and length" },
];
