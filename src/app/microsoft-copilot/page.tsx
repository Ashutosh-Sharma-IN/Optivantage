import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ClipboardCheck,
  GraduationCap,
  KeyRound,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  CRAFT,
  faqs,
  hrDeliverables,
  journeySteps,
  licenceSupply,
  partnerStatus,
  principles,
  proofItems,
  usageResult,
  type JourneyStepId,
} from "@/lib/copilot-offer";
import {
  COPILOT_LAST_REVIEWED,
  copilotCapabilities,
} from "@/lib/copilot-updates";
import CopilotDiagnostic from "./CopilotDiagnostic";
import FormatCards from "./FormatCards";
import CopilotEnquiryForm from "./CopilotEnquiryForm";

const BASE_URL = "https://www.optivantage.in";
const PAGE_URL = `${BASE_URL}/microsoft-copilot`;

export const metadata: Metadata = {
  title:
    "Microsoft Copilot for Enterprises | Adoption, Training & Agents | Optivantage",
  description:
    "Get real value from your Microsoft Copilot licences. Readiness checks, leadership and team training, custom agents and workflows, and adoption measurement for enterprises across India.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Microsoft Copilot for Enterprises | Optivantage",
    description:
      "Readiness checks, leadership and team training, custom agents and workflows, and adoption measurement for Microsoft Copilot.",
    url: PAGE_URL,
    type: "website",
    siteName: "Optivantage Technologies",
    images: [
      {
        url: `${BASE_URL}/logo.png`,
        width: 400,
        height: 120,
        alt: "Optivantage",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Microsoft Copilot for Enterprises",
  serviceType: "Microsoft Copilot adoption and training",
  description:
    "Copilot readiness assessment, leadership and team training, custom agents and workflows, adoption measurement, and Microsoft 365 and Copilot licence supply.",
  url: PAGE_URL,
  areaServed: "IN",
  provider: { "@id": `${BASE_URL}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const stepIcons: Record<JourneyStepId, typeof ClipboardCheck> = {
  assess: ClipboardCheck,
  train: GraduationCap,
  build: Wrench,
  measure: BarChart3,
};

const problems = [
  {
    title: "Licences bought, usage flat",
    text: "Copilot is switched on, but most people open it a few times and go back to old habits.",
  },
  {
    title: "Emails and nothing else",
    text: "Teams use it to draft emails and never reach Excel, meetings, research or agents.",
  },
  {
    title: "No proof for leadership",
    text: "HR and L&D can't show what the licence spend is returning, or who should have a paid licence at all.",
  },
];

const guardrails = [
  {
    title: "Consumer vs enterprise tools",
    text: "Why Microsoft 365 Copilot keeps work inside your tenant, and why free consumer AI tools don't.",
  },
  {
    title: "Data classification",
    text: "Public, internal, restricted, confidential: what can go into which tool, on one page.",
  },
  {
    title: "Shadow AI",
    text: "How leaders spot teams using free tools such as ChatGPT, Claude or Gemini with company data, and what to do about it.",
  },
  {
    title: "Human in the loop",
    text: "Copilot drafts, people decide. Exercises where Copilot is confidently wrong show why review matters.",
  },
  {
    title: "Agent cost control",
    text: "Cowork and other agentic features are billed by usage. We help set spending policies before costs surprise you.",
  },
];

const clients = [
  { name: "PwC India", logo: null },
  { name: "BIAL", logo: "/BIAL logo.webp" },
  { name: "Kotak Mahindra Bank", logo: "/kotak.png" },
  { name: "Hexaware", logo: "/hexaware.png" },
  { name: "Infogain", logo: "/infogain.png" },
  { name: "MSME India", logo: "/msme.png" },
  { name: "upGrad", logo: "/Upgrad.png" },
  { name: "Arvind Fashions", logo: "/Arvind Fashions Logo.jpg" },
];

const accreditationLogos = [
  { name: "AI Certs", logo: "/certifications/aicerts.png" },
  { name: "AI for Non-Techies", logo: "/certifications/aifornontechies.png" },
  { name: "Google Cloud", logo: "/certifications/google.png" },
  { name: "ISO/IEC 42001", logo: "/certifications/iso42001.png" },
  { name: "ITIL V4", logo: "/certifications/itil.png" },
  { name: "AWS", logo: "/certifications/aws.png" },
  { name: "UT Austin AI", logo: "/certifications/Texas AI.png" },
];

const teamAccreditations = [
  "Microsoft Copilot Certified Trainer",
  "ISO/IEC 42001 Lead Implementer",
  "1,000+ professionals trained",
];

const statusStyles: Record<string, string> = {
  Available: "bg-green-500/10 text-green-400 border-green-500/30",
  "Early access": "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
  "Rolling out": "bg-blue-500/10 text-blue-300 border-blue-500/30",
  Delivered: "bg-green-500/10 text-green-400 border-green-500/30",
  "Current engagement": "bg-blue-500/10 text-blue-300 border-blue-500/30",
  "Programme design": "bg-white/5 text-text-muted border-white/20",
};

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="text-center mb-12">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      {intro && <p className="text-text-muted max-w-2xl mx-auto">{intro}</p>}
    </div>
  );
}

export default function MicrosoftCopilotPage() {
  return (
    <main className="bg-navy-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
          <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
            <Image
              src="/platforms/Microsoft Logo.jpg"
              alt="Microsoft"
              width={120}
              height={36}
              className="object-contain h-8 w-auto"
            />
          </div>
          <span className="text-gray-500 text-xl">×</span>
          <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
            <Image
              src="/logo.png"
              alt="Optivantage"
              width={120}
              height={36}
              className="object-contain h-8 w-auto"
            />
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-2 mb-6">
          <span className="text-brand text-sm font-semibold">
            For enterprises · Assess · Train · Build · Measure
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Microsoft Copilot for Enterprises.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">
            Get real value from your licences.
          </span>
        </h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
          We help HR, L&amp;D and business leaders turn Copilot licences into
          daily use: readiness checks, training built on your own work, agents
          for your processes, and numbers you can show leadership.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#enquire"
            className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            Talk to us about your Copilot rollout <ArrowRight size={20} />
          </a>
          <a
            href="#journey"
            className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all"
          >
            See how we work
          </a>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-16 px-4 bg-navy-800 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="The problem"
            title="You have Copilot. Are your people using it?"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map(({ title, text }) => (
              <div
                key={title}
                className="bg-navy-900 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUICK DIAGNOSTIC */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Quick diagnostic"
            title="What's holding your Copilot rollout back?"
            intro="Select every statement that sounds familiar. We'll show you where we would start."
          />
          <CopilotDiagnostic />
        </div>
      </section>

      {/* 4. THE JOURNEY */}
      <section
        id="journey"
        className="py-20 px-4 bg-navy-800 border-y border-white/5 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="How we work with you"
            title="Assess. Train. Build. Measure."
            intro="Start at any step. Most clients begin with an assessment and a first training batch, then add agents and measurement."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, i) => {
              const Icon = stepIcons[step.id];
              return (
                <div
                  key={step.id}
                  className="bg-navy-900 border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 bg-brand/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">{step.summary}</p>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <CheckCircle className="text-brand h-4 w-4 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-8 bg-brand/10 border border-brand/30 rounded-2xl p-6 flex items-start gap-4">
            <KeyRound className="text-brand h-6 w-6 flex-shrink-0 mt-0.5" />
            <p className="text-white text-sm leading-relaxed">
              {licenceSupply}
            </p>
          </div>
          <p className="text-center text-sm text-text-muted mt-6">
            Need automation beyond Copilot?{" "}
            <Link href="/ai-automation" className="text-brand hover:underline">
              See AI Automation &amp; Agentic AI
            </Link>
          </p>
        </div>
      </section>

      {/* 5. TRAINING FORMATS */}
      <section id="formats" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Training formats"
            title="Three formats, built around your people"
            intro="Every programme is shaped to your licence, your functions and the tasks your people name in a short pre-survey."
          />
          <FormatCards />
          <div className="mt-12 bg-navy-800 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
              Our prompting method
            </p>
            <h3 className="text-2xl font-bold text-white mb-6">CRAFT</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {CRAFT.map(({ letter, word, desc }) => (
                <div
                  key={letter}
                  className="bg-navy-900 border border-white/10 rounded-xl p-5 text-center w-36"
                >
                  <div className="text-4xl font-black text-brand mb-2">
                    {letter}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {word}
                  </div>
                  <div className="text-text-muted text-xs leading-tight">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mt-6 max-w-xl mx-auto">
              One repeatable structure for every Copilot request, used in every
              format.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK */}
      <section className="py-20 px-4 bg-navy-800 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Our approach"
            title="Six things we do on every programme"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map(({ title, body }, i) => (
              <div
                key={title}
                className="bg-navy-900 border border-white/10 rounded-xl p-6"
              >
                <div className="text-brand font-black text-2xl mb-2">
                  {i + 1}
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHAT'S CURRENT IN COPILOT */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="What's current in Copilot"
            title="We train on today's Copilot"
            intro="Copilot changes every month. This is what we cover now, checked against Microsoft's own release notes."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {copilotCapabilities.map((cap) => (
              <div
                key={cap.name}
                className="bg-navy-800 border border-white/10 rounded-xl p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-white font-semibold">{cap.name}</h3>
                  <span
                    className={`text-xs font-semibold border rounded-full px-2.5 py-0.5 whitespace-nowrap ${statusStyles[cap.status]}`}
                  >
                    {cap.status}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {cap.summary}
                </p>
                {cap.licence && (
                  <p className="text-gray-500 text-xs mt-2">{cap.licence}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">
            {`Last reviewed: ${COPILOT_LAST_REVIEWED}.`} Early-access features
            depend on Microsoft&apos;s rollout and your tenant settings.
          </p>
        </div>
      </section>

      {/* 8. GUARDRAILS & GOVERNANCE */}
      <section className="py-20 px-4 bg-navy-800 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Guardrails & governance"
            title="Safe use is taught inside every demo"
            intro="Not saved for a compliance slide at the end."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {guardrails.map(({ title, text }) => (
              <div
                key={title}
                className="bg-navy-900 border border-white/10 rounded-xl p-5"
              >
                <ShieldCheck className="text-brand h-5 w-5 mb-3" />
                <h3 className="text-white font-semibold text-sm mb-2">
                  {title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHAT HR & L&D RECEIVE */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="What you receive"
            title="Something to use, not just a session"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "For every participant",
                items: hrDeliverables.participants,
              },
              {
                title: "For your HR and L&D team",
                items: hrDeliverables.learningTeam,
              },
            ].map(({ title, items }) => (
              <div
                key={title}
                className="bg-navy-800 border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <CheckCircle className="text-brand h-4 w-4 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PROOF */}
      <section className="py-20 px-4 bg-navy-800 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Our work"
            title="Programmes we've run and designed"
          />
          <div className="bg-brand/10 border border-brand/30 rounded-2xl p-6 mb-8 text-center">
            <p className="text-white text-lg font-semibold">{usageResult}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {proofItems.map((item) => (
              <div
                key={item.label}
                className="bg-navy-900 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-semibold">{item.label}</h3>
                  <span
                    className={`text-xs font-semibold border rounded-full px-2.5 py-0.5 whitespace-nowrap ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
            Organisations we've trained
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-xl px-4 py-3 flex items-center justify-center h-16 shadow-sm"
              >
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={110}
                    height={50}
                    className="object-contain h-10 w-auto"
                  />
                ) : (
                  <span className="text-gray-900 font-bold text-sm">
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PARTNER STATUS & ACCREDITATIONS */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Credentials"
            title="Microsoft partner status and team accreditations"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {partnerStatus.map((line) => (
              <div
                key={line}
                className="bg-navy-800 border border-white/10 rounded-xl p-6 flex items-center gap-4"
              >
                <ShieldCheck className="text-brand h-6 w-6 flex-shrink-0" />
                <p className="text-white font-semibold text-sm">{line}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {teamAccreditations.map((item) => (
              <span
                key={item}
                className="bg-white/5 border border-white/10 text-white text-sm px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {accreditationLogos.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-xl px-4 py-3 flex items-center justify-center h-16 shadow-sm"
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={110}
                  height={50}
                  className="object-contain h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-20 px-4 bg-navy-800 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions HR and IT teams ask us"
          />
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-navy-900 border border-white/10 rounded-xl overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 text-white font-medium text-sm hover:bg-white/5 flex justify-between gap-4">
                  {q}
                  <span className="text-brand group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-text-muted text-sm leading-relaxed">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13. ENQUIRY */}
      <section id="enquire" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="Get in touch"
            title="Talk to us about your Copilot rollout"
            intro="Tell us where you are today. We'll suggest a starting point, usually within a single call."
          />
          <CopilotEnquiryForm />
        </div>
      </section>
    </main>
  );
}
