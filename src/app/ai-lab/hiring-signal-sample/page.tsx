import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HiringSignalRequestForm from '@/components/HiringSignalRequestForm';
import { ChevronLeft, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request the Sample Hiring Signal Report | Optivantage AI Lab',
  description:
    'See how public hiring activity can be turned into sales intelligence for B2B service teams. Request the Optivantage Hiring Signal sample report.',
  alternates: { canonical: 'https://www.optivantage.in/ai-lab/hiring-signal-sample' },
  openGraph: {
    title: 'Request the Sample Hiring Signal Report | Optivantage AI Lab',
    description:
      'See how public hiring activity can be turned into sales intelligence for B2B service teams.',
    url: 'https://www.optivantage.in/ai-lab/hiring-signal-sample',
    type: 'website',
  },
  robots: { index: false, follow: false },
};

const stats = [
  { icon: <TrendingUp size={18} className="text-brand" />, value: '25–50', label: 'companies per weekly pack' },
  { icon: <Zap         size={18} className="text-brand" />, value: 'Weekly', label: 'fresh signals, every week' },
  { icon: <Users       size={18} className="text-brand" />, value: '100%', label: 'research-led, not scraped' },
];

const sampleSignals = [
  { company: 'JumpCloud',    role: 'Sr. Software Engineer, Security Engineering', angle: 'Cloud security, identity threat detection' },
  { company: 'Ema',          role: 'Sr. Security & DevSecOps Engineer',           angle: 'AI security readiness, DevSecOps' },
  { company: 'Interface AI', role: 'Lead, Information Security & Compliance',     angle: 'AI governance, ISO 27001, SOC 2' },
  { company: 'Lingaro',      role: 'AI DevOps Engineer',                          angle: 'MLOps, LLMOps, Azure AI deployment' },
  { company: 'ShipBob',      role: 'Security Engineer II, Cloud Security',        angle: 'SIEM tuning, vulnerability management' },
];

const bestFor = [
  'IT services & managed services firms',
  'Cybersecurity & cloud consulting firms',
  'Staffing & recruitment firms',
  'AI training & implementation companies',
];

export default function HiringSignalSamplePage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />

      {/* ── HERO — headline left, form right ── */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Back link */}
          <Link href="/ai-lab" className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-brand transition-colors mb-10">
            <ChevronLeft size={13} /> Optivantage AI Lab
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT — value prop */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/40 border border-green-700/50 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-semibold tracking-wide">Pilot-ready · Weekly delivery</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Know which companies are about to need your services —{' '}
                <span className="text-brand">before they call anyone.</span>
              </h1>

              <p className="text-lg text-text-muted leading-relaxed mb-8">
                Most B2B sales teams wait for inbound. The Hiring Signal Lead Pack gives you a weekly list of companies
                showing buying signals right now — based on what they are actively hiring for.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 mb-10">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-800 border border-white/10 flex items-center justify-center flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-none">{s.value}</p>
                      <p className="text-text-muted text-xs mt-0.5">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What you get */}
              <div className="bg-navy-800 border border-white/5 rounded-xl p-6 mb-8">
                <p className="text-white font-semibold text-sm mb-4">Each weekly pack includes:</p>
                <ul className="space-y-2.5">
                  {[
                    '25–50 companies showing relevant hiring signals',
                    'The specific role and a source link for each signal',
                    'Plain-English explanation of why the signal may matter',
                    'Suggested service angle and draft outreach message',
                    'Priority and confidence score for each lead',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle2 size={14} className="text-brand flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FOMO nudge */}
              <div className="flex items-start gap-3 bg-brand/10 border border-brand/20 rounded-xl p-4">
                <Zap size={16} className="text-brand flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80 leading-relaxed">
                  We review sample requests manually and prepare packs weekly. Request now and we will
                  include context specific to your market in the sample we send.
                </p>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="lg:sticky lg:top-28">
              <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-1">Request the sample report</h2>
                <p className="text-text-muted text-sm mb-6">
                  Free. No commitment. We will send it to your email shortly.
                </p>
                <HiringSignalRequestForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SAMPLE PREVIEW — compact ── */}
      <section className="py-14 px-4 bg-navy-800 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">What is inside the sample</h2>
              <p className="text-text-muted text-sm">
                Five signals from this week's AI, cybersecurity, and cloud hiring activity in India.
              </p>
            </div>
            <p className="text-xs text-text-muted bg-navy-900 border border-white/5 rounded-lg px-4 py-2 whitespace-nowrap">
              Full report includes outreach messages + scores
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-900 border-b border-white/10">
                  <th className="text-left py-3 px-5 text-xs text-text-muted font-semibold uppercase tracking-wide">Company</th>
                  <th className="text-left py-3 px-5 text-xs text-text-muted font-semibold uppercase tracking-wide">Role being hired</th>
                  <th className="text-left py-3 px-5 text-xs text-text-muted font-semibold uppercase tracking-wide hidden md:table-cell">Possible service angle</th>
                </tr>
              </thead>
              <tbody>
                {sampleSignals.map((row, i) => (
                  <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-navy-800' : 'bg-navy-900/50'}`}>
                    <td className="py-4 px-5 text-white font-semibold whitespace-nowrap">{row.company}</td>
                    <td className="py-4 px-5 text-text-muted">{row.role}</td>
                    <td className="py-4 px-5 text-text-muted hidden md:table-cell">{row.angle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-text-muted mt-4 text-center">
            This is a sample. A customised weekly pack covers your specific market, geography, and service angle.
          </p>
        </div>
      </section>

      {/* ── WHO IT IS FOR + DISCLAIMER — side by side ── */}
      <section className="py-14 px-4 bg-navy-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Who gets the most value from this</h3>
            <ul className="space-y-3">
              {bestFor.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-muted text-sm">
                  <CheckCircle2 size={15} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-6">
            <p className="text-amber-400 font-semibold text-sm mb-2">Important</p>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              This is not LinkedIn automation, scraping, or a generic lead list. It is a research-led
              signal report. Your sales team decides who to contact and how — the report gives you the
              context to make that call with confidence.
            </p>
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-12 px-4 bg-navy-800 border-t border-white/5 text-center">
        <p className="text-white font-semibold mb-1">Ready to see it?</p>
        <p className="text-text-muted text-sm mb-6">Fill the form above — we will email the sample to you shortly.</p>
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all text-sm"
        >
          Request the Sample Report ↑
        </a>
      </section>

    </main>
  );
}
