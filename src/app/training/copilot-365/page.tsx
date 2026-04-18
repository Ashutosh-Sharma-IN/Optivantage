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
  MapPin,
  Video,
  X,
} from 'lucide-react';

// ─── PAIN POINTS ────────────────────────────────────────────────────────────
const painPoints = [
  {
    id: 'prompting',
    emoji: '✍️',
    label: "I don't know what to type to get useful results",
    modules: ['The CRAFT Framework', 'Advanced Prompting with CRAFT', 'Live Prompt Lab #1'],
  },
  {
    id: 'limited',
    emoji: '📧',
    label: 'I only use it for emails — nothing else',
    modules: ['Copilot in Excel', 'Copilot in PowerPoint', 'Copilot in Teams', 'Copilot in Word'],
  },
  {
    id: 'generic',
    emoji: '🎯',
    label: 'The results feel generic and not relevant to my work',
    modules: ['Advanced Prompting with CRAFT', 'Role Playbooks', 'Building Your Personal Copilot System'],
  },
  {
    id: 'privacy',
    emoji: '🔐',
    label: "I'm worried about data privacy and what Copilot can see",
    modules: ['AI Ethics & The SANCTITY Method', 'Claude for Office — When to Use Claude Alongside Copilot'],
  },
  {
    id: 'workflow',
    emoji: '⚙️',
    label: "I can't fit it into my actual daily workflow",
    modules: ['Power Automate + Copilot', 'Copilot as Your Workflow Manager', 'Your 90-Day Copilot Action Plan'],
  },
  {
    id: 'overwhelmed',
    emoji: '😵',
    label: 'The tool feels overwhelming — too many features, no clear starting point',
    modules: ['What Is Copilot 365 — and Why Most Users Miss 80% of It', 'Live Prompt Lab #1', 'The CRAFT Framework'],
  },
];

// ─── WEEKENDS ───────────────────────────────────────────────────────────────
const weekends = [
  {
    number: 1,
    title: 'AI Foundations & Your First Copilot Wins',
    subtitle: "Understand what Copilot is, what it's not, and start getting real results from Day 1.",
    days: [
      {
        label: 'Day 1 — Saturday',
        duration: '2.5 hrs',
        modules: [
          { title: 'What Is Copilot 365 — and Why Most Users Miss 80% of It', duration: '45 min' },
          { title: 'Live Prompt Lab #1 — Your First 10 Copilot Prompts', duration: '60 min' },
          { title: 'The CRAFT Framework — Copilot\'s 5-Part Prompting System', duration: '45 min' },
        ],
      },
      {
        label: 'Day 2 — Sunday',
        duration: '2.5 hrs',
        modules: [
          { title: 'Copilot in Outlook — Emails, Summaries & Smart Replies', duration: '45 min' },
          { title: 'Copilot in Teams — Meeting Summaries & Action Items', duration: '45 min' },
          { title: 'Copilot in Word — Documents, Drafts & Rewrites', duration: '60 min' },
        ],
      },
    ],
  },
  {
    number: 2,
    title: 'Deep-Dive: Excel, PowerPoint & Creating with AI',
    subtitle: 'Unlock Copilot\'s most powerful productivity features across your daily Microsoft 365 tools.',
    days: [
      {
        label: 'Day 1 — Saturday',
        duration: '2.5 hrs',
        modules: [
          { title: 'Copilot in Excel — Data Analysis, Formulas & Insights Without Code', duration: '75 min' },
          { title: 'Copilot in PowerPoint — Slides from Scratch in Minutes', duration: '75 min' },
        ],
      },
      {
        label: 'Day 2 — Sunday',
        duration: '2.5 hrs',
        modules: [
          { title: 'Advanced Prompting with CRAFT — Context, Tone & Iteration', duration: '60 min' },
          { title: 'Image Creation with AI — The FACE Method (25 min segment)', duration: '25 min' },
          { title: 'Copilot in OneNote & Loop — Your AI Knowledge Hub', duration: '65 min' },
        ],
      },
    ],
  },
  {
    number: 3,
    title: 'Agentic Copilot — Automation, Research & Workflows',
    subtitle: 'Move beyond single prompts. Build Copilot into your workflows and let it work for you.',
    days: [
      {
        label: 'Day 1 — Saturday',
        duration: '2.5 hrs',
        modules: [
          { title: 'Copilot as Your Research Analyst — Deep Research & Summarisation', duration: '75 min' },
          { title: 'Copilot as Your Workflow Manager — Recurring Tasks & Handoffs', duration: '75 min' },
        ],
      },
      {
        label: 'Day 2 — Sunday',
        duration: '2.5 hrs',
        modules: [
          { title: 'Power Automate + Copilot — No-Code Workflow Automation', duration: '75 min' },
          { title: 'Building Your Personal Copilot System — Role Playbooks & Templates', duration: '75 min' },
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'AI Ethics, Claude for Office & Your 90-Day Plan',
    subtitle: 'Use AI responsibly, add Claude as a Copilot companion, and lock in your next 90 days.',
    days: [
      {
        label: 'Day 1 — Saturday',
        duration: '2.5 hrs',
        modules: [
          { title: 'Claude for Office — When to Use Claude Alongside Copilot', duration: '85 min' },
          { title: 'AI Ethics & The SANCTITY Method — Protecting Sensitive Data', duration: '65 min' },
        ],
      },
      {
        label: 'Day 2 — Sunday',
        duration: '2.5 hrs',
        modules: [
          { title: 'Live Prompt Lab #2 — Showcase & Peer Review', duration: '60 min' },
          { title: 'Your 90-Day Copilot Action Plan', duration: '45 min' },
          { title: 'Certificate Ceremony + Q&A', duration: '45 min' },
        ],
      },
    ],
  },
];

// ─── DIFFERENTIATORS ────────────────────────────────────────────────────────
const differentiators = [
  {
    icon: Zap,
    title: 'Live Prompt Labs',
    desc: 'Two hands-on labs where you build real prompts for your actual job — not generic exercises. You leave with prompts you\'ll use on Monday.',
  },
  {
    icon: Brain,
    title: 'Claude for Office Module',
    desc: 'The only Copilot course that also teaches Claude — when to use it alongside Microsoft Copilot, and how the two tools complement each other.',
  },
  {
    icon: FileText,
    title: 'Role Playbooks',
    desc: 'You\'ll build a personalised Copilot playbook for your specific role — a ready-to-use reference for your top 10 use cases.',
  },
  {
    icon: Award,
    title: 'Completion Certificate',
    desc: 'A certificate of completion from Optivantage — a Microsoft and Google certified AI training provider — to add to your LinkedIn profile.',
  },
  {
    icon: MessageSquare,
    title: 'Peer Community',
    desc: 'Access to a private cohort group for Q&A, prompt sharing, and support after the course ends.',
  },
  {
    icon: Monitor,
    title: 'Small Cohorts. Live Sessions.',
    desc: 'No pre-recorded videos. Every session is live, interactive, and capped at 20 participants so you get real answers to your real questions.',
  },
];

// ─── AUDIENCES ──────────────────────────────────────────────────────────────
const audiences = [
  { icon: Briefcase, label: 'Business Professionals', desc: 'Managers, analysts, and consultants who want to do more with less time.' },
  { icon: Building2, label: 'Team Leaders & Managers', desc: 'Lead more effectively — summarise, delegate, and communicate at speed.' },
  { icon: BookOpen, label: 'HR & L&D Professionals', desc: 'Manage people, training, and documentation more efficiently with AI.' },
  { icon: FileText, label: 'Finance & Operations', desc: 'Faster data analysis, smarter reporting, and leaner workflows.' },
  { icon: MessageSquare, label: 'Sales & Marketing Teams', desc: 'Draft proposals, emails, and content faster — and more persuasively.' },
  { icon: Monitor, label: 'IT & Project Managers', desc: 'Document, plan, and communicate technical projects with AI support.' },
  { icon: Users, label: 'Executive Assistants', desc: 'Master meeting notes, email management, and executive briefing documents.' },
  { icon: Star, label: 'Anyone on Microsoft 365', desc: 'If you have a Microsoft 365 licence, this course pays for itself in week one.' },
];

// ─── FAQ ────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Do I need any technical background?', a: 'No. This course is built for working professionals — not developers or IT specialists. If you can use Word and Outlook, you\'re ready.' },
  { q: 'Do I need a Microsoft Copilot licence?', a: 'Yes — you\'ll need Microsoft 365 Copilot enabled on your account to participate fully in the live labs. If you\'re unsure, check with your IT department before joining.' },
  { q: 'Is this live or pre-recorded?', a: 'All sessions are live and interactive. There are no pre-recorded videos. You attend on the weekends listed and participate in real time.' },
  { q: 'What if I miss a session?', a: 'Sessions are recorded and shared with cohort members within 24 hours. We recommend attending live for the labs, but the recording ensures you don\'t miss content.' },
  { q: 'How is this different from Microsoft\'s own training?', a: "Microsoft's training is generic and product-focused. This course teaches you how to think in prompts, build workflows for your specific role, and get measurable results — in 20 hours." },
  { q: 'What is the CRAFT Framework?', a: 'CRAFT is Optivantage\'s 5-part prompting system: Character (role Copilot should play), Request (the task), Add Context (background details), Format (output structure), Tune (tone and length). It\'s the repeatable formula that makes every Copilot prompt work.' },
  { q: 'When is the next cohort?', a: 'Cohort dates are released to enquiries first. Submit the form below and you\'ll be among the first to know.' },
  { q: 'Is enterprise / face-to-face training available?', a: 'Yes — we offer bespoke in-person and weekday programmes for corporate teams. Use the Enterprise Training enquiry option in the form below.' },
];

// ─── CRAFT ──────────────────────────────────────────────────────────────────
const craftParts = [
  { letter: 'C', word: 'Character', desc: 'Role Copilot should play' },
  { letter: 'R', word: 'Request', desc: 'One clear task to do' },
  { letter: 'A', word: 'Add Context', desc: 'Background & audience' },
  { letter: 'F', word: 'Format', desc: 'Output type & structure' },
  { letter: 'T', word: 'Tune', desc: 'Tone and length' },
];

// ─── CERTIFICATES ───────────────────────────────────────────────────────────
const certificates = [
  { title: 'AI+ Everyone™', img: '/certificates/Certificate_AI_Everyone.png' },
  { title: 'AI+ Executive™', img: '/certificates/Certificate_AI_Executives.png' },
  { title: 'AI+ Prompt Engineer™', img: '/certificates/Certificate_AI_prompt_Engineer.png' },
  { title: 'AI+ Ethics™', img: '/certificates/certificate_AI_Ethics.png' },
  { title: 'AI+ Chief AI Officer™', img: '/certificates/Certificate_Chief_AI_Officer.png' },
  { title: 'Completion Certificate', img: '/certificates/Certificate.png' },
];

// ─── CERTIFICATION LOGOS ─────────────────────────────────────────────────────
const certLogos = [
  { name: 'AI Certs', logo: '/certifications/aicerts.png' },
  { name: 'AI for Non-Techies', logo: '/certifications/aifornontechies.png' },
  { name: 'Google Cloud', logo: '/certifications/google.png' },
  { name: 'ISO/IEC 42001', logo: '/certifications/iso42001.png' },
  { name: 'ITIL V4', logo: '/certifications/itil.png' },
  { name: 'AWS', logo: '/certifications/aws.png' },
  { name: 'UT Austin AI', logo: '/certifications/Texas AI.png' },
];

// ─── CLIENT LOGOS ────────────────────────────────────────────────────────────
const clients = [
  { name: 'BIAL', logo: '/BIAL logo.webp' },
  { name: 'Kotak Mahindra Bank', logo: '/kotak.png' },
  { name: 'Hexaware', logo: '/hexaware.png' },
  { name: 'Infogain', logo: '/infogain.png' },
  { name: 'MSME India', logo: '/msme.png' },
  { name: 'upGrad', logo: '/Upgrad.png' },
  { name: 'Arvind Fashions', logo: '/Arvind Fashions Logo.jpg' },
];

export default function Copilot365Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openWeekend, setOpenWeekend] = useState<number | null>(0);
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [formState, setFormState] = useState({ submitting: false, succeeded: false, errors: false });
  const [enquiryType, setEnquiryType] = useState<'individual' | 'enterprise'>('individual');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const togglePain = (id: string) => {
    setSelectedPains((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const highlightedModules = selectedPains.length > 0
    ? Array.from(new Set(selectedPains.flatMap((id) => painPoints.find((p) => p.id === id)?.modules ?? [])))
    : [];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, errors: false });
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('_subject', `Copilot 365 Course Enquiry — ${enquiryType === 'enterprise' ? 'Enterprise/In-Person' : 'Individual/Virtual'}`);
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

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white bg-white/10 rounded-full p-2 hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <img src={lightbox} alt="Certificate" className="max-w-4xl w-full rounded-xl shadow-2xl" />
        </div>
      )}

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        {/* Brand logos row */}
        <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
          <div className="bg-white rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm">
            <Image src="/platforms/Microsoft Logo.jpg" alt="Microsoft" width={100} height={36} className="object-contain h-8 w-auto" />
            <div className="w-px h-6 bg-gray-200" />
            <Image src="/platforms/copilot_preview.jpg" alt="Microsoft Copilot" width={100} height={36} className="object-contain h-8 w-auto" />
          </div>
          <span className="text-gray-600 text-xl">×</span>
          <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
            <Image src="/logo.png" alt="Optivantage" width={120} height={36} className="object-contain h-8 w-auto" />
          </div>
        </div>

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
          {[
            { val: '20', label: 'Hours of Live Training' },
            { val: '4', label: 'Weekends' },
            { val: '22', label: 'Hands-on Modules' },
            { val: '≤20', label: 'Participants per Cohort' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-white">{val}</div>
              <div className="text-sm text-text-muted mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AI TRAINING CREDENTIALS STRIP ── */}
      <section className="py-10 px-4 bg-navy-800 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
            Trainer Accreditations & Certifications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {certLogos.map((c) => (
              <div key={c.name} className="bg-white rounded-xl px-4 py-3 flex items-center justify-center h-16 shadow-sm">
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

      {/* ── PROBLEM SECTION ── */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">You Have Copilot. But Are You Actually Using It?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-10">
            {[
              { stat: '68%', text: 'of Microsoft Copilot users say they don\'t know how to prompt it effectively.' },
              { stat: '5 hrs', text: 'average time saved per week by professionals who learn structured Copilot workflows.' },
              { stat: 'Most', text: 'Copilot training is generic, product-demo style — not built around your actual job.' },
            ].map(({ stat, text }) => (
              <div key={stat} className="bg-navy-800 border border-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-brand mb-3">{stat}</div>
                <p className="text-text-muted text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINT QUIZ ── */}
      <section className="py-20 px-4 bg-navy-800 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Quick Diagnostic</p>
            <h2 className="text-3xl font-bold text-white mb-4">What's Your Copilot Challenge?</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Select every statement that resonates. We'll show you exactly which modules address it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {painPoints.map((pain) => {
              const selected = selectedPains.includes(pain.id);
              return (
                <button
                  key={pain.id}
                  onClick={() => togglePain(pain.id)}
                  className={`flex items-start gap-3 text-left p-4 rounded-xl border transition-all ${
                    selected
                      ? 'border-brand bg-brand/10 text-white'
                      : 'border-white/10 bg-navy-900 text-text-muted hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{pain.emoji}</span>
                  <span className="text-sm leading-relaxed">{pain.label}</span>
                  {selected && <CheckCircle2 className="text-brand flex-shrink-0 ml-auto mt-0.5" size={18} />}
                </button>
              );
            })}
          </div>

          {highlightedModules.length > 0 && (
            <div className="bg-brand/10 border border-brand/30 rounded-2xl p-6">
              <p className="text-brand font-semibold text-sm mb-4">
                This course directly addresses your challenges in these modules:
              </p>
              <ul className="space-y-2">
                {highlightedModules.map((mod) => (
                  <li key={mod} className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle className="text-brand h-4 w-4 flex-shrink-0" />
                    {mod}
                  </li>
                ))}
              </ul>
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all text-sm"
              >
                Reserve Your Spot <ArrowRight size={16} />
              </a>
            </div>
          )}

          {selectedPains.length === 0 && (
            <p className="text-center text-gray-600 text-sm">Select one or more challenges above to see your personalised course highlights.</p>
          )}
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
                            {day.modules.map((mod) => {
                              const isHighlighted = highlightedModules.includes(mod.title);
                              return (
                                <li
                                  key={mod.title}
                                  className={`flex items-start gap-3 rounded-lg px-2 py-1 transition-colors ${
                                    isHighlighted ? 'bg-brand/10 border border-brand/20' : ''
                                  }`}
                                >
                                  <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isHighlighted ? 'text-brand' : 'text-brand/50'}`} />
                                  <div>
                                    <span className={`text-sm ${isHighlighted ? 'text-white font-medium' : 'text-white'}`}>
                                      {mod.title}
                                    </span>
                                    {isHighlighted && (
                                      <span className="ml-2 text-xs text-brand font-semibold">★ Addresses your challenge</span>
                                    )}
                                    <span className="text-xs text-text-muted ml-2">({mod.duration})</span>
                                  </div>
                                </li>
                              );
                            })}
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

      {/* ── WHAT MAKES THIS DIFFERENT ── */}
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

      {/* ── ENTERPRISE TRAINING ── */}
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Corporate Option</p>
            <h2 className="text-3xl font-bold text-white mb-4">Need Enterprise Training?</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We also deliver bespoke Copilot 365 programmes for corporate teams — on your schedule, at your location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 hover:border-brand/30 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                <Video className="text-brand h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Virtual — Weekend or Weekday</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Custom cohort for your team (10–50+ people)',
                  'Weekday sessions available (morning or afternoon)',
                  'Tailored to your specific Microsoft 365 setup',
                  'Custom role playbooks for your organisation',
                  'Manager & employee tracks in parallel',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle className="text-brand h-4 w-4 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#enquire-enterprise" className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold rounded-lg transition-all">
                Enquire for Your Team <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 hover:border-brand/30 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                <MapPin className="text-brand h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">In-Person — At Your Office</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Trainer travels to your location (India & abroad)',
                  'Full-day or half-day intensive formats',
                  'Hands-on lab setup on your own devices',
                  'Ideal for leadership offsites and L&D days',
                  'Post-training support and playbooks included',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle className="text-brand h-4 w-4 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#enquire-enterprise" className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand/50 text-brand hover:bg-brand/10 text-sm font-semibold rounded-lg transition-all">
                Enquire for In-Person Training <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-text-muted mt-8">
            Group rates apply. No pricing shown — we discuss scope and fit on a short call.
          </p>
        </div>
      </section>

      {/* ── TRAINER CREDENTIALS ── */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 border border-brand/20 rounded-3xl p-10 md:p-14">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-shrink-0">
                <div className="h-44 w-44 rounded-2xl overflow-hidden border-2 border-brand/30 shadow-xl">
                  <Image
                    src="/founder.png"
                    alt="Ashutosh Sharma — AI Trainer"
                    width={176}
                    height={176}
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
                    'Microsoft Certified AI Trainer',
                    'Google Cloud Digital Leader',
                    'ISO/IEC 42001 Lead Implementer',
                    'UT Austin AI for Leaders',
                    'AI+ Chief AI Officer',
                    'AWS Cloud Partner',
                  ].map((cert) => (
                    <span key={cert} className="bg-white/5 border border-white/10 text-white text-xs px-3 py-1 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Client logos — 50% bigger */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center mb-6">
                Enterprises Trained
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {clients.map((client) => (
                  <div key={client.name} className="bg-white rounded-xl p-3 flex items-center justify-center h-20 shadow-sm">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={140}
                      height={60}
                      className="object-contain h-12 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE GALLERY ── */}
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Sample Certificates</p>
            <h2 className="text-3xl font-bold text-white mb-4">Internationally Recognised Certification</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Participants receive an Optivantage completion certificate. We also facilitate AI+ certification programmes through our accredited partners. Click any certificate to enlarge.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <button
                key={cert.title}
                onClick={() => setLightbox(cert.img)}
                className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-brand/40 transition-all hover:scale-105 shadow-lg"
              >
                <Image
                  src={cert.img}
                  alt={cert.title}
                  width={400}
                  height={285}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">{cert.title}</span>
                </div>
              </button>
            ))}
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
              <div key={idx} className="bg-navy-900 border border-white/10 rounded-xl overflow-hidden">
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
              No pricing shown — we discuss cohort dates, group rates, and fit on a short call first.
            </p>
          </div>

          {/* Toggle: Individual vs Enterprise */}
          <div id="enquire-enterprise" className="flex rounded-xl overflow-hidden border border-white/10 mb-8">
            <button
              onClick={() => setEnquiryType('individual')}
              className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                enquiryType === 'individual'
                  ? 'bg-brand text-white'
                  : 'bg-navy-800 text-text-muted hover:text-white'
              }`}
            >
              <Video size={16} /> Individual / Virtual Weekend
            </button>
            <button
              onClick={() => setEnquiryType('enterprise')}
              className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                enquiryType === 'enterprise'
                  ? 'bg-brand text-white'
                  : 'bg-navy-800 text-text-muted hover:text-white'
              }`}
            >
              <Building2 size={16} /> Enterprise / In-Person
            </button>
          </div>

          {formState.succeeded && (
            <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="text-green-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-green-400 font-bold text-lg mb-1">Enquiry Received!</h3>
                <p className="text-green-200 text-sm">We'll be in touch within 24 hours with cohort dates and next steps.</p>
              </div>
            </div>
          )}

          {formState.errors && (
            <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-4">
              <AlertCircle className="text-red-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-red-400 font-bold text-lg mb-1">Submission Failed</h3>
                <p className="text-red-200 text-sm">
                  Please try again or email{' '}
                  <a href="mailto:contact@optivantage.in" className="underline">contact@optivantage.in</a>
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-navy-800 border border-white/10 rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-text-muted mb-2">Full Name *</label>
                <input type="text" name="name" required placeholder="Your name"
                  className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm" />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">Work Email *</label>
                <input type="email" name="email" required placeholder="you@company.com"
                  className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-text-muted mb-2">Company / Organisation</label>
                <input type="text" name="company" placeholder="Company name"
                  className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm" />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">Job Role</label>
                <input type="text" name="role" placeholder="Your role / department"
                  className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm" />
              </div>
            </div>

            {enquiryType === 'individual' ? (
              <div>
                <label className="block text-sm text-text-muted mb-2">Are you enquiring for yourself or a small group?</label>
                <select name="group_size"
                  className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand text-sm">
                  <option value="">Select...</option>
                  <option value="just_me">Just me</option>
                  <option value="2_5">2–5 people</option>
                  <option value="6_plus">6+ people</option>
                </select>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-text-muted mb-2">Team Size *</label>
                    <select name="team_size"
                      className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand text-sm">
                      <option value="">Select...</option>
                      <option value="10_20">10–20</option>
                      <option value="20_50">20–50</option>
                      <option value="50_plus">50+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-text-muted mb-2">Preferred Format</label>
                    <select name="format"
                      className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand text-sm">
                      <option value="">Select...</option>
                      <option value="virtual_weekday">Virtual — Weekday</option>
                      <option value="virtual_weekend">Virtual — Weekend</option>
                      <option value="in_person">In-Person at our office</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2">Location / City (for in-person)</label>
                  <input type="text" name="location" placeholder="e.g. Mumbai, Delhi, Bangalore"
                    className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm" />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm text-text-muted mb-2">Anything specific you'd like to cover or ask?</label>
              <textarea name="message" rows={3}
                placeholder="E.g. dates, specific use cases, budget timeline..."
                className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-sm resize-none" />
            </div>

            <input type="hidden" name="course" value="Microsoft Copilot 365 — 4 Weekend Live Course" />
            <input type="hidden" name="enquiry_type" value={enquiryType} />

            <button type="submit" disabled={formState.submitting}
              className="w-full px-6 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60">
              {formState.submitting ? (
                <><Loader2 className="animate-spin h-5 w-5" /> Sending...</>
              ) : (
                <><Send size={18} /> Send Enquiry</>
              )}
            </button>

            <p className="text-center text-xs text-gray-600">No spam. No pressure. We respond within 24 hours.</p>
          </form>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 px-4 bg-navy-800 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-muted mb-2 text-sm">Looking for broader AI transformation for your enterprise?</p>
          <h3 className="text-2xl font-bold text-white mb-4">Beyond Copilot — Full AI Training & Advisory</h3>
          <p className="text-text-muted mb-6 max-w-xl mx-auto text-sm">
            We deliver custom AI and Copilot training programmes, AI strategy, and ISO 42001 governance for enterprise teams.
          </p>
          <Link href="/services/ai-training-advisory"
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand/50 text-brand hover:bg-brand/10 font-semibold rounded-lg transition-all text-sm">
            See AI Training & Advisory <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
