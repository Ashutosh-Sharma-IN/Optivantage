"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Clock,
  Users,
  Calendar,
  Award,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
  ChevronUp,
  Zap,
  Brain,
  FileText,
  Briefcase,
  Building2,
  ArrowRight,
  Star,
  BookOpen,
  Monitor,
  MessageSquare,
} from 'lucide-react';

// --- COURSE WEEKENDS ---
const weekends = [
  {
    number: 1,
    title: "AI Foundations & Your First Copilot Wins",
    subtitle: "Understand what Copilot is, what it's not, and start getting real results from Day 1.",
    days: [
      {
        label: "Day 1 — Saturday",
        duration: "2.5 hrs",
        modules: [
          { title: "What Is Copilot 365 — and Why Most Users Miss 80% of It", duration: "45 min" },
          { title: "Live Prompt Lab #1 — Your First 10 Copilot Prompts", duration: "60 min" },
          { title: "The CRAFT Framework — Copilot's 5-Part Prompting System", duration: "45 min" },
        ],
      },
      {
        label: "Day 2 — Sunday",
        duration: "2.5 hrs",
        modules: [
          { title: "Copilot in Outlook — Emails, Summaries & Smart Replies", duration: "45 min" },
          { title: "Copilot in Teams — Meeting Summaries & Action Items", duration: "45 min" },
          { title: "Copilot in Word — Documents, Drafts & Rewrites", duration: "60 min" },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Deep-Dive: Excel, PowerPoint & Creating with AI",
    subtitle: "Unlock Copilot's most powerful productivity features across your daily Microsoft 365 tools.",
    days: [
      {
        label: "Day 1 — Saturday",
        duration: "2.5 hrs",
        modules: [
          { title: "Copilot in Excel — Data Analysis, Formulas & Insights Without Code", duration: "75 min" },
          { title: "Copilot in PowerPoint — Slides from Scratch in Minutes", duration: "75 min" },
        ],
      },
      {
        label: "Day 2 — Sunday",
        duration: "2.5 hrs",
        modules: [
          { title: "Advanced Prompting with CRAFT — Context, Tone & Iteration", duration: "60 min" },
          { title: "Image Creation with AI — The FACE Method (25 min segment)", duration: "25 min" },
          { title: "Copilot in OneNote & Loop — Your AI Knowledge Hub", duration: "65 min" },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Agentic Copilot — Automation, Research & Workflows",
    subtitle: "Move beyond single prompts. Build Copilot into your workflows and let it work for you.",
    days: [
      {
        label: "Day 1 — Saturday",
        duration: "2.5 hrs",
        modules: [
          { title: "Copilot as Your Research Analyst — Deep Research & Summarisation", duration: "75 min" },
          { title: "Copilot as Your Workflow Manager — Recurring Tasks & Handoffs", duration: "75 min" },
        ],
      },
      {
        label: "Day 2 — Sunday",
        duration: "2.5 hrs",
        modules: [
          { title: "Power Automate + Copilot — No-Code Workflow Automation", duration: "75 min" },
          { title: "Building Your Personal Copilot System — Role Playbooks & Templates", duration: "75 min" },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "AI Ethics, Claude for Office & Your 90-Day Plan",
    subtitle: "Use AI responsibly, add Claude as a Copilot companion, and lock in your next 90 days.",
    days: [
      {
        label: "Day 1 — Saturday",
        duration: "2.5 hrs",
        modules: [
          { title: "Claude for Office — When to Use Claude Alongside Copilot", duration: "85 min" },
          { title: "AI Ethics & The SANCTITY Method — Protecting Sensitive Data", duration: "65 min" },
        ],
      },
      {
        label: "Day 2 — Sunday",
        duration: "2.5 hrs",
        modules: [
          { title: "Live Prompt Lab #2 — Showcase & Peer Review", duration: "60 min" },
          { title: "Your 90-Day Copilot Action Plan", duration: "45 min" },
          { title: "Certificate Ceremony + Q&A", duration: "45 min" },
        ],
      },
    ],
  },
];

// --- DIFFERENTIATORS ---
const differentiators = [
  {
    icon: Zap,
    title: "Live Prompt Labs",
    desc: "Two hands-on labs where you build real prompts for your actual job — not generic exercises. You leave with prompts you'll use on Monday.",
  },
  {
    icon: Brain,
    title: "Claude for Office Module",
    desc: "The only Copilot course that also teaches Claude — when to use it alongside Microsoft Copilot, and how the two tools complement each other.",
  },
  {
    icon: FileText,
    title: "Role Playbooks",
    desc: "You'll build a personalised Copilot playbook for your specific role — a ready-to-use reference for your top 10 use cases.",
  },
  {
    icon: Award,
    title: "Completion Certificate",
    desc: "A certificate of completion from Optivantage — a Microsoft and Google certified AI training provider — to add to your LinkedIn profile.",
  },
  {
    icon: MessageSquare,
    title: "Peer Community",
    desc: "Access to a private cohort group for Q&A, prompt sharing, and support after the course ends.",
  },
  {
    icon: Monitor,
    title: "Small Cohorts. Live Sessions.",
    desc: "No pre-recorded videos. Every session is live, interactive, and capped at 20 participants so you get real answers to your real questions.",
  },
];

// --- AUDIENCES ---
const audiences = [
  { icon: Briefcase, label: "Business Professionals", desc: "Managers, analysts, and consultants who want to do more with less time." },
  { icon: Building2, label: "Team Leaders & Managers", desc: "Lead more effectively — summarise, delegate, and communicate at speed." },
  { icon: BookOpen, label: "HR & L&D Professionals", desc: "Manage people, training, and documentation more efficiently with AI." },
  { icon: FileText, label: "Finance & Operations", desc: "Faster data analysis, smarter reporting, and leaner workflows." },
  { icon: MessageSquare, label: "Sales & Marketing Teams", desc: "Draft proposals, emails, and content faster — and more persuasively." },
  { icon: Monitor, label: "IT & Project Managers", desc: "Document, plan, and communicate technical projects with AI support." },
  { icon: Users, label: "Executive Assistants", desc: "Master meeting notes, email management, and executive briefing documents." },
  { icon: Star, label: "Anyone on Microsoft 365", desc: "If you have a Microsoft 365 licence, this course pays for itself in week one." },
];

// --- FAQ ---
const faqs = [
  {
    q: "Do I need any technical background?",
    a: "No. This course is built for working professionals — not developers or IT specialists. If you can use Word and Outlook, you're ready.",
  },
  {
    q: "Do I need a Microsoft Copilot licence?",
    a: "Yes — you'll need Microsoft 365 Copilot enabled on your account to participate fully in the live labs. If you're unsure, check with your IT department before joining.",
  },
  {
    q: "Is this live or pre-recorded?",
    a: "All sessions are live and interactive. There are no pre-recorded videos. You attend on the weekends listed and participate in real time.",
  },
  {
    q: "What if I miss a session?",
    a: "Sessions are recorded and shared with cohort members within 24 hours. We recommend attending live for the labs, but the recording ensures you don't miss content.",
  },
  {
    q: "How is this different from Microsoft's own training?",
    a: "Microsoft's training is generic and product-focused. This course teaches you how to think in prompts, build workflows for your specific role, and get measurable results — in 20 hours.",
  },
  {
    q: "What is the CRAFT Framework?",
    a: "CRAFT is Optivantage's 5-part prompting system: Character (role Copilot should play), Request (the task), Add Context (background details), Format (output structure), Tune (tone and length). It's the repeatable formula that makes every Copilot prompt work.",
  },
  {
    q: "When is the next cohort?",
    a: "Cohort dates are released to enquiries first. Submit the form below and you'll be among the first to know.",
  },
];

// --- CRAFT PILLS ---
const craftParts = [
  { letter: "C", word: "Character", desc: "Role Copilot should play" },
  { letter: "R", word: "Request", desc: "One clear task to do" },
  { letter: "A", word: "Add Context", desc: "Background & audience" },
  { letter: "F", word: "Format", desc: "Output type & structure" },
  { letter: "T", word: "Tune", desc: "Tone and length" },
];

export default function Copilot365Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openWeekend, setOpenWeekend] = useState<number | null>(0);
  const [formState, setFormState] = useState({ submitting: false, succeeded: false, errors: false });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, errors: false });
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Tag this as coming from the Copilot 365 landing page
    formData.append('_subject', 'Copilot 365 Course Enquiry');
    try {
      const response = await fetch('https://formspree.io/f/maqwnqnp', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, errors: false });
        form.reset();
        setTimeout(() => setFormState({ submitting: false, succeeded: false, errors: false }), 6000);
      } else {
        setFormState({ submitting: false, succeeded: false, errors: true });
      }
    } catch {
      setFormState({ submitting: false, succeeded: false, errors: true });
    }
  };

  return (
    <main className="bg-navy-900">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-2 mb-6">
          <span className="text-brand text-sm font-semibold">Live Online · 4 Weekends · 20 Hours</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Master Microsoft Copilot 365.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">
            In 4 Weekends.
          </span>
        </h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
          A practitioner-led course for working professionals who have Microsoft Copilot — and want to actually use it to save 5+ hours a week.
        </p>
        <p className="text-base text-brand font-semibold mb-10">
          Taught by an accredited Microsoft & Google AI trainer. Small cohorts. Live sessions. Role-specific playbooks.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#enquire"
            className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            Enquire About the Next Cohort <ArrowRight size={20} />
          </a>
          <a
            href="#curriculum"
            className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all"
          >
            See Full Curriculum
          </a>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">20</div>
            <div className="text-sm text-text-muted mt-1">Hours of Live Training</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4</div>
            <div className="text-sm text-text-muted mt-1">Weekends</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">22</div>
            <div className="text-sm text-text-muted mt-1">Hands-on Modules</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">≤20</div>
            <div className="text-sm text-text-muted mt-1">Participants per Cohort</div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section className="py-16 px-4 bg-navy-800 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">You Have Copilot. But Are You Actually Using It?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-10">
            {[
              { stat: "68%", text: "of Microsoft Copilot users say they don't know how to prompt it effectively." },
              { stat: "5 hrs", text: "average time saved per week by professionals who learn structured Copilot workflows." },
              { stat: "Most", text: "Copilot training is generic, product-demo style — not built around your actual job." },
            ].map(({ stat, text }) => (
              <div key={stat} className="bg-navy-900 border border-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-brand mb-3">{stat}</div>
                <p className="text-text-muted text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-text-muted mt-8 max-w-2xl mx-auto">
            This course exists because generic YouTube tutorials and Microsoft's own help pages don't teach you to think in prompts — or build Copilot into your actual workflow. We do.
          </p>
        </div>
      </section>

      {/* ── CRAFT FRAMEWORK ── */}
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">The Core Method</p>
          <h2 className="text-3xl font-bold text-white mb-4">The CRAFT Framework</h2>
          <p className="text-text-muted mb-12 max-w-2xl mx-auto">
            The 5-part prompting system you'll use in every Copilot interaction — and keep using long after the course ends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {craftParts.map(({ letter, word, desc }) => (
              <div
                key={letter}
                className="bg-navy-800 border border-white/10 rounded-xl p-6 text-center w-36 hover:border-brand/40 transition-colors"
              >
                <div className="text-5xl font-black text-brand mb-2">{letter}</div>
                <div className="text-white font-semibold text-sm mb-1">{word}</div>
                <div className="text-text-muted text-xs leading-tight">{desc}</div>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-sm mt-8 max-w-xl mx-auto">
            CRAFT replaces guesswork with a repeatable formula. You'll master it in Weekend 1 and apply it across every session that follows.
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Who This Is For</p>
            <h2 className="text-3xl font-bold text-white mb-4">Built for Working Professionals</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Not for developers. Not for IT teams. For the people who use Microsoft 365 every single day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="bg-navy-900 border border-white/5 rounded-xl p-5 hover:border-brand/40 transition-colors"
              >
                <div className="h-10 w-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{label}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-20 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Full Curriculum</p>
            <h2 className="text-3xl font-bold text-white mb-4">4 Weekends. 20 Hours. 22 Modules.</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Each weekend builds on the last — from foundations to full AI-powered workflows.
            </p>
          </div>

          <div className="space-y-4">
            {weekends.map((weekend, wIdx) => (
              <div
                key={weekend.number}
                className="bg-navy-800 border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenWeekend(openWeekend === wIdx ? null : wIdx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-brand rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">W{weekend.number}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{weekend.title}</h3>
                      <p className="text-text-muted text-sm mt-1">{weekend.subtitle}</p>
                    </div>
                  </div>
                  {openWeekend === wIdx ? (
                    <ChevronUp className="text-brand flex-shrink-0 ml-4" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0 ml-4" size={20} />
                  )}
                </button>

                {openWeekend === wIdx && (
                  <div className="px-6 pb-6 border-t border-white/10 pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      {weekend.days.map((day) => (
                        <div key={day.label}>
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar className="text-brand h-4 w-4" />
                            <span className="text-white text-sm font-semibold">{day.label}</span>
                            <span className="text-text-muted text-xs">· {day.duration}</span>
                          </div>
                          <ul className="space-y-2">
                            {day.modules.map((mod) => (
                              <li key={mod.title} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="text-sm text-white">{mod.title}</span>
                                  <span className="text-xs text-text-muted ml-2">({mod.duration})</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Why This Course</p>
            <h2 className="text-3xl font-bold text-white mb-4">What Makes This Different</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-navy-900 border border-white/5 rounded-xl p-6 hover:border-brand/40 transition-colors"
              >
                <div className="h-10 w-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINER CREDENTIALS ── */}
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-brand/20 rounded-3xl p-10 md:p-14">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-shrink-0">
                <div className="h-40 w-40 rounded-2xl overflow-hidden border-2 border-brand/30 shadow-xl">
                  <Image
                    src="/founder.png"
                    alt="Ashutosh Sharma — AI Trainer"
                    width={160}
                    height={160}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-3 py-1 mb-4">
                  <span className="text-brand text-xs font-semibold">Your Trainer</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Ashutosh Sharma</h2>
                <p className="text-brand font-semibold text-sm mb-4">Founder, Optivantage Technologies</p>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  25 years running mission-critical IT operations for BT Global, Telstra, and SITA. Led teams of 2,000+ across 4 continents. Trained 1,000+ professionals in AI across enterprises including BIAL, Kotak Mahindra Bank, Hexaware, Infogain, and MSME India.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Microsoft Certified AI Trainer",
                    "Google Cloud Digital Leader",
                    "ISO/IEC 42001 Lead Implementer",
                    "UT Austin AI for Leaders",
                    "AI+ Chief AI Officer",
                    "AWS Cloud Partner",
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="bg-white/5 border border-white/10 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Client logos strip */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center mb-6">
                Enterprises Trained
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {[
                  { name: 'BIAL', logo: '/logos/BIAL logo.webp' },
                  { name: 'Kotak Mahindra Bank', logo: '/kotak.png' },
                  { name: 'Hexaware', logo: '/hexaware.png' },
                  { name: 'Infogain', logo: '/infogain.png' },
                  { name: 'MSME India', logo: '/msme.png' },
                  { name: 'upGrad', logo: '/Upgrad.png' },
                ].map((client) => (
                  <div key={client.name} className="bg-white rounded-lg p-2 h-12 flex items-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={100}
                      height={40}
                      className="object-contain h-8 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-navy-900 border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors gap-4"
                >
                  <span className="text-white font-medium text-sm">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="text-brand flex-shrink-0" size={18} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={18} />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 border-t border-white/10 pt-4">
                    <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ── */}
      <section id="enquire" className="py-20 px-4 bg-navy-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Enquire Now</p>
            <h2 className="text-3xl font-bold text-white mb-4">Reserve Your Spot</h2>
            <p className="text-text-muted">
              No pricing shown here — we discuss cohort dates, group rates, and fit on a short call first. Fill in the form and we'll be in touch within 24 hours.
            </p>
          </div>

          {formState.succeeded && (
            <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="text-green-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-green-400 font-bold text-lg mb-1">Enquiry Received!</h3>
                <p className="text-green-200 text-sm">
                  We'll be in touch within 24 hours with cohort dates and next steps.
                </p>
              </div>
            </div>
          )}

          {formState.errors && (
            <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-4">
              <AlertCircle className="text-red-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-red-400 font-bold text-lg mb-1">Submission Failed</h3>
                <p className="text-red-200 text-sm">
                  Please try again or email us at{' '}
                  <a href="mailto:contact@optivantage.in" className="underline">
                    contact@optivantage.in
                  </a>
                </p>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-navy-800 border border-white/10 rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-text-muted mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-text-muted mb-2">Company / Organisation</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">Job Role</label>
                <input
                  type="text"
                  name="role"
                  placeholder="Your role / department"
                  className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-text-muted mb-2">Are you enquiring for yourself or a team?</label>
              <select
                name="enquiry_type"
                className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand text-sm"
              >
                <option value="">Select...</option>
                <option value="individual">Individual — just me</option>
                <option value="small_team">Small team (2–5 people)</option>
                <option value="larger_group">Larger group (6+)</option>
                <option value="corporate_batch">Corporate batch for my organisation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-text-muted mb-2">Anything specific you'd like to cover or ask?</label>
              <textarea
                name="message"
                rows={3}
                placeholder="E.g. dates, pricing, group rates, specific use cases..."
                className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm resize-none"
              />
            </div>

            <input type="hidden" name="course" value="Microsoft Copilot 365 — 4 Weekend Live Course" />

            <button
              type="submit"
              disabled={formState.submitting}
              className="w-full px-6 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {formState.submitting ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Enquiry
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-600">
              No spam. No pressure. We respond within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 px-4 bg-navy-800 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-muted mb-2 text-sm">Also offer AI training for your enterprise?</p>
          <h3 className="text-2xl font-bold text-white mb-4">Looking for Bespoke Corporate AI Training?</h3>
          <p className="text-text-muted mb-6 max-w-xl mx-auto text-sm">
            We deliver custom AI and Copilot training programmes for enterprise teams — tailored to your tools, your roles, and your workflows.
          </p>
          <Link
            href="/services/ai-training-advisory"
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand/50 text-brand hover:bg-brand/10 font-semibold rounded-lg transition-all text-sm"
          >
            See AI Training & Advisory <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
