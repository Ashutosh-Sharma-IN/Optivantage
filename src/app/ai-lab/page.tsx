import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  FlaskConical,
  Target,
  Users,
  TrendingUp,
  Scale,
  Wrench,
  Database,
  Brain,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Search,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Optivantage AI Lab | Practical AI Experiments for Business Workflows',
  description:
    'Optivantage AI Lab researches, tests, and validates practical AI automation concepts for real business workflows — hiring signals, competitive intelligence, executive briefings, contract review, and more.',
  keywords: [
    'AI automation India', 'AI workflow tools', 'B2B AI tools', 'hiring signal intelligence',
    'AI lab India', 'business AI automation', 'AI consulting India', 'AI experiments',
    'practical AI tools', 'AI workflow validation',
  ],
  alternates: { canonical: 'https://www.optivantage.in/ai-lab' },
  openGraph: {
    title: 'Optivantage AI Lab | Practical AI Experiments for Business',
    description:
      'We research, test, and build small AI-powered tools and automations that help business teams save time, spot signals, and make better decisions.',
    url: 'https://www.optivantage.in/ai-lab',
    type: 'website',
  },
};

// ── STATUS BADGE COLOURS ─────────────────────────────────────────────────────
const statusConfig: Record<string, { label: string; classes: string }> = {
  'pilot-ready':       { label: 'Pilot-ready',       classes: 'bg-green-900/40 text-green-400 border border-green-700/50' },
  'researching':       { label: 'Researching',        classes: 'bg-amber-900/40 text-amber-400 border border-amber-700/50' },
  'internal-tool':     { label: 'Internal tool',      classes: 'bg-blue-900/40 text-blue-400 border border-blue-700/50' },
  'validation-needed': { label: 'Validation needed',  classes: 'bg-purple-900/40 text-purple-400 border border-purple-700/50' },
};

function StatusBadge({ status }: { status: string }) {
  const cfg = statusConfig[status] ?? { label: status, classes: 'bg-white/10 text-white border border-white/20' };
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cfg.classes}`}>
      {cfg.label}
    </span>
  );
}

// ── DATA ─────────────────────────────────────────────────────────────────────

const evaluationCriteria = [
  { icon: <TrendingUp size={20} className="text-brand" />, label: 'Market demand',                    desc: 'Is there evidence people need this?' },
  { icon: <Users      size={20} className="text-brand" />, label: 'User pain',                        desc: 'Does it solve a real, felt problem?' },
  { icon: <Scale      size={20} className="text-brand" />, label: 'Willingness to pay',               desc: 'Would buyers pay for this today?' },
  { icon: <Search     size={20} className="text-brand" />, label: 'Existing alternatives',            desc: 'What already exists? How good is it?' },
  { icon: <Wrench     size={20} className="text-brand" />, label: 'Ease of implementation',           desc: 'How much build effort does it take?' },
  { icon: <Database   size={20} className="text-brand" />, label: 'Data access risk',                 desc: 'Can we reliably source the data?' },
  { icon: <Brain      size={20} className="text-brand" />, label: 'Human behaviour risk',             desc: 'Will people actually use it?' },
  { icon: <Target     size={20} className="text-brand" />, label: "Fit with Optivantage's strengths", desc: 'Does this play to what we know?' },
];

const concepts = [
  {
    id: 'hiring-signal',
    title: 'Hiring Signal Lead Pack',
    status: 'pilot-ready',
    category: 'Sales intelligence / B2B lead research',
    description:
      'We monitor hiring activity in a target market and identify companies whose job postings may indicate current business needs. Each weekly pack includes company signals, source links, suggested service angles, and draft outreach messages.',
    bestFor: ['IT services firms', 'Managed services providers', 'Staffing firms', 'Training companies', 'B2B service teams'],
  },
  {
    id: 'competitive-intelligence',
    title: 'Competitive Intelligence Monitor',
    status: 'researching',
    category: 'Market monitoring',
    description:
      'A weekly monitor that tracks competitor websites, pricing pages, job postings, press releases, and customer reviews, then summarises what changed and why it matters.',
    bestFor: ['Founders', 'Sales leaders', 'Marketing teams', 'Product teams', 'Consultants'],
  },
  {
    id: 'executive-briefing',
    title: 'Executive Morning Briefing',
    status: 'researching',
    category: 'Leadership intelligence',
    description:
      'A daily or weekly briefing that combines KPIs, market news, competitor updates, customer issues, and pipeline signals into a concise leadership summary.',
    bestFor: ['Founders', 'CEOs', 'Business unit heads', 'Sales leaders', 'Operations teams'],
  },
  {
    id: 'contract-review',
    title: 'AI Contract First-Pass Review',
    status: 'validation-needed',
    category: 'Legal workflow support',
    description:
      'An AI-assisted first-pass review service for routine contracts such as NDAs and vendor agreements. It highlights risk areas, unusual clauses, and suggested changes for human review.',
    bestFor: ['SMEs', 'Procurement teams', 'Founders', 'Legal teams handling routine contracts'],
  },
  {
    id: 'market-research-agent',
    title: 'Market Research Agent',
    status: 'internal-tool',
    category: 'Idea validation',
    description:
      'A research workflow that evaluates automation ideas using current market signals, competitor research, user pain, build difficulty, and tech-versus-behaviour risk.',
    bestFor: ['Optivantage', 'Consultants', 'Founders', 'Business operators exploring AI automation ideas'],
  },
];

const processSteps = [
  { step: '01', title: 'Research the idea',                          desc: 'We scan market signals, buyer conversations, and existing tools.' },
  { step: '02', title: 'Score the opportunity',                      desc: 'We evaluate demand, pain, willingness to pay, and build risk.' },
  { step: '03', title: 'Build a small pilot',                        desc: 'We build the smallest version that can be tested with real users.' },
  { step: '04', title: 'Test with real users',                       desc: 'We observe how people actually use it, not how we expect them to.' },
  { step: '05', title: 'Turn proven workflows into services or tools', desc: 'What works becomes a client-ready service or repeatable tool.' },
];

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function AILabPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 bg-navy-900 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/30 mb-8">
            <FlaskConical size={16} className="text-brand" />
            <span className="text-sm text-brand font-medium tracking-wide uppercase">Optivantage AI Lab</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Practical AI experiments for real business workflows
          </h1>
          <p className="text-xl text-text-muted mb-6 max-w-3xl mx-auto leading-relaxed">
            We research, test, and build small AI-powered tools and automations that help business teams save time, spot signals, and make better decisions.
          </p>
          <p className="text-base text-text-muted mb-10 max-w-2xl mx-auto">
            These are researched and validated concepts — some are prototypes, some are pilot-ready services.
            Every idea here is evaluated against real market signals and actual buyer pain before we build anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#concepts"
              className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all"
            >
              Explore Concepts
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 hover:border-brand/50 text-white font-semibold rounded-lg transition-all"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS AI LAB */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is Optivantage AI Lab?</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                AI tools are easy to demo, but harder to apply well. Optivantage AI Lab is our space for testing
                practical AI workflows against real market signals, buyer pain, build effort, and adoption risk.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                This is where we work before a concept becomes a client-ready service. We build the smallest version
                that can be tested, observe how it performs with real users, and only expand what actually works.
              </p>
              <p className="text-text-muted leading-relaxed">
                Nothing here is overstated. Each concept is labelled with its current status — whether it is a live
                pilot, something we are still researching, or a tool we use internally.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Researched first',    desc: 'Every concept starts with market and buyer research before any build.' },
                { label: 'Honest about status', desc: 'We use clear labels — Pilot-ready, Researching, Internal tool, Validation needed.' },
                { label: 'Business-first',      desc: 'We start from a business problem, not from a technology we want to use.' },
                { label: 'No hype',             desc: 'If something does not work well enough to recommend, we say so.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-navy-900 rounded-lg p-4 border border-white/5">
                  <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-text-muted text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVALUATION METHOD */}
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Evaluation Method</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Before we build anything, we score every idea across eight criteria. An idea that scores well on all
              eight is worth building. An idea that fails two or three tells us why — and stops us from wasting time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {evaluationCriteria.map((criterion, i) => (
              <div key={i} className="bg-navy-800 border border-white/5 hover:border-brand/30 rounded-xl p-5 transition-all">
                <div className="mb-3">{criterion.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{criterion.label}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{criterion.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CONCEPTS CARDS */}
      <section id="concepts" className="py-20 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Concepts</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Five ideas currently in our research and build pipeline. Each one has been evaluated against our
              scoring method.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concepts.map((concept) => (
              <div
                key={concept.id}
                className="bg-navy-900 border border-white/5 hover:border-brand/30 rounded-xl p-6 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-xs text-text-muted font-medium uppercase tracking-wide">{concept.category}</span>
                  <StatusBadge status={concept.status} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{concept.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">{concept.description}</p>
                <div className="mb-5">
                  <p className="text-xs text-white/60 font-semibold uppercase tracking-wide mb-2">Best for</p>
                  <ul className="space-y-1">
                    {concept.bestFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-text-muted">
                        <ChevronRight size={12} className="text-brand flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`#${concept.id}`}
                  className="inline-flex items-center text-brand text-sm font-semibold hover:underline mt-auto"
                >
                  View Concept <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCEPT DETAIL: HIRING SIGNAL LEAD PACK (FULL) ── */}
      <section id="hiring-signal" className="py-20 px-4 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <StatusBadge status="pilot-ready" />
            <span className="text-xs text-text-muted uppercase tracking-wide font-medium">Sales intelligence / B2B lead research</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Hiring Signal Lead Pack</h2>
          <p className="text-xl text-brand mb-10">Weekly B2B lead research from live hiring activity</p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">The problem</h3>
              <p className="text-text-muted leading-relaxed">
                Many B2B sales teams know their target market, but they do not have a reliable weekly system to spot
                which companies may be entering a buying window. Hiring activity often reveals internal priorities,
                pressure points, or growth areas that a company has not yet announced publicly.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">What we provide</h3>
              <ul className="space-y-3">
                {[
                  '25 to 50 companies showing relevant hiring signals',
                  'Job role and source link for each signal',
                  'Plain-English explanation of why the signal may matter',
                  'Suggested service angle for your team',
                  'Draft outreach message',
                  'Priority and confidence score',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle2 size={14} className="text-brand flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-800 border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Best-fit users</h3>
              <ul className="space-y-2">
                {[
                  'IT services companies',
                  'Managed services providers',
                  'Staffing and recruitment firms',
                  'Training companies',
                  'AI automation consultants',
                  'Cybersecurity, cloud, network, or helpdesk service providers',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                    <ChevronRight size={14} className="text-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-800 border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">What we are testing</h3>
              <ul className="space-y-3">
                {[
                  'Whether signal-to-meeting conversion improves versus cold outreach lists',
                  'Which hiring roles produce the most actionable signals',
                  'How long a signal stays relevant after it is first spotted',
                  'Whether a confidence score helps teams prioritise their outreach',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle2 size={14} className="text-brand flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-5 mb-10">
            <p className="text-amber-300 text-sm leading-relaxed">
              <span className="font-bold">Important note: </span>
              This is not LinkedIn auto-sending, scraping, or spam automation. It is a research-led signal report
              that helps sales teams decide who to contact and why. Your outreach remains human-controlled.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all"
            >
              Request a Sample Report <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONCEPT DETAIL: COMPETITIVE INTELLIGENCE MONITOR ── */}
      <section id="competitive-intelligence" className="py-16 px-4 bg-navy-800 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <StatusBadge status="researching" />
            <span className="text-xs text-text-muted uppercase tracking-wide font-medium">Market monitoring</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Competitive Intelligence Monitor</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            A weekly monitor that tracks competitor websites, pricing pages, job postings, press releases, and customer
            reviews, then summarises what changed and why it matters.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                label: 'Problem it solves',
                text:  'Sales and marketing teams spend hours manually tracking competitors and often miss changes that matter. A structured weekly summary saves time and surfaces signals earlier.',
              },
              {
                label: 'Who it is for',
                text:  'Founders, sales leaders, marketing teams, product teams, and consultants who need to stay close to their competitive landscape without manual effort.',
              },
              {
                label: 'First version',
                text:  'A weekly PDF or structured summary covering 3–5 competitors, flagging changes, and adding a plain-English "so what" for each signal.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-xl p-5">
                <p className="text-brand text-xs font-semibold uppercase tracking-wide mb-2">{item.label}</p>
                <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center text-brand font-semibold hover:underline text-sm">
            Interested in this concept? <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* ── CONCEPT DETAIL: EXECUTIVE MORNING BRIEFING ── */}
      <section id="executive-briefing" className="py-16 px-4 bg-navy-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <StatusBadge status="researching" />
            <span className="text-xs text-text-muted uppercase tracking-wide font-medium">Leadership intelligence</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Executive Morning Briefing</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            A daily or weekly briefing that combines KPIs, market news, competitor updates, customer issues, and pipeline
            signals into a concise leadership summary.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                label: 'Problem it solves',
                text:  'Senior leaders spend the first hour of their day pulling information from five different tools. A single, AI-compiled briefing restores that time and improves decision quality.',
              },
              {
                label: 'Who it is for',
                text:  'Founders, CEOs, business unit heads, sales leaders, and operations teams who need a clear picture of the day without spending an hour assembling it.',
              },
              {
                label: 'First version',
                text:  'A structured daily or weekly email combining 4–6 data sources: pipeline summary, market headlines, one competitor signal, one customer risk flag.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-navy-800 border border-white/5 rounded-xl p-5">
                <p className="text-brand text-xs font-semibold uppercase tracking-wide mb-2">{item.label}</p>
                <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center text-brand font-semibold hover:underline text-sm">
            Interested in this concept? <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* ── CONCEPT DETAIL: AI CONTRACT FIRST-PASS REVIEW ── */}
      <section id="contract-review" className="py-16 px-4 bg-navy-800 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <StatusBadge status="validation-needed" />
            <span className="text-xs text-text-muted uppercase tracking-wide font-medium">Legal workflow support</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">AI Contract First-Pass Review</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            An AI-assisted first-pass review service for routine contracts such as NDAs and vendor agreements. It
            highlights risk areas, unusual clauses, and suggested changes for human review.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                label: 'Problem it solves',
                text:  'SMEs and founders often sign contracts without proper review because legal fees are high and turnaround is slow. AI can flag common issues in minutes, not days.',
              },
              {
                label: 'Who it is for',
                text:  'SMEs, procurement teams, founders, and legal teams handling routine contracts like NDAs, vendor agreements, and service contracts.',
              },
              {
                label: 'What we are testing',
                text:  'Whether buyers trust AI-assisted reviews enough to act on them, and whether accuracy is sufficient for routine low-to-medium risk contracts.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-xl p-5">
                <p className="text-brand text-xs font-semibold uppercase tracking-wide mb-2">{item.label}</p>
                <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center text-brand font-semibold hover:underline text-sm">
            Interested in this concept? <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* ── CONCEPT DETAIL: MARKET RESEARCH AGENT ── */}
      <section id="market-research-agent" className="py-16 px-4 bg-navy-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <StatusBadge status="internal-tool" />
            <span className="text-xs text-text-muted uppercase tracking-wide font-medium">Idea validation</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Market Research Agent</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            A research workflow that evaluates automation ideas using current market signals, competitor research, user
            pain, build difficulty, and tech-versus-behaviour risk.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                label: 'Problem it solves',
                text:  'People with AI automation ideas spend weeks researching feasibility manually. This agent runs a structured evaluation in hours, not weeks.',
              },
              {
                label: 'Who it is for',
                text:  'Currently used internally at Optivantage. Useful for consultants, founders, and business operators who want to evaluate AI automation ideas before committing build budget.',
              },
              {
                label: 'Current status',
                text:  'This is our internal validation tool — the same one used to evaluate every concept on this page. We are assessing whether to offer it as a service to clients.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-navy-800 border border-white/5 rounded-xl p-5">
                <p className="text-brand text-xs font-semibold uppercase tracking-wide mb-2">{item.label}</p>
                <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center text-brand font-semibold hover:underline text-sm">
            Interested in this concept? <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 px-4 bg-navy-800 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Every concept in the AI Lab follows the same five-stage process before it becomes a client-ready service.
            </p>
          </div>

          {/* Steps — horizontal on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-navy-900 border-2 border-brand/40 flex items-center justify-center mb-4 flex-shrink-0">
                  <span className="text-brand font-bold">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to test an AI workflow before building it?
          </h2>
          <p className="text-text-muted mb-10 leading-relaxed">
            If you have a business process that feels repetitive, research-heavy, or signal-driven, we can help
            assess whether AI automation is worth testing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all text-lg"
          >
            Contact Optivantage <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
