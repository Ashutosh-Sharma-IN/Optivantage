import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HiringSignalRequestForm from '@/components/HiringSignalRequestForm';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  // Keep this page out of search results — it is a request gate, not a public content page
  robots: { index: false, follow: false },
};

const bestForList = [
  'IT services firms',
  'Managed services providers',
  'Cybersecurity service providers',
  'Cloud consulting firms',
  'Staffing and recruitment firms',
  'AI implementation and training companies',
];

const sampleSignals = [
  {
    company: 'JumpCloud',
    role: 'Senior Software Engineer, Security Engineering',
    signal: 'Expanding identity threat detection and AI-powered security in India',
    angle: 'Security engineering support, cloud security, senior talent sourcing',
  },
  {
    company: 'Ema',
    role: 'Senior Security and DevSecOps Engineer',
    signal: 'AI agent platform needs security-by-design as it deepens into enterprise environments',
    angle: 'Cloud security, DevSecOps, AI security readiness',
  },
  {
    company: 'Interface AI',
    role: 'Lead, Information Security and Compliance',
    signal: 'AI products for regulated financial institutions require audit and compliance readiness',
    angle: 'AI governance, ISO 27001/SOC 2 readiness, enterprise AI risk controls',
  },
  {
    company: 'Lingaro',
    role: 'AI DevOps Engineer',
    signal: 'GenAI deployment moving from proof-of-concept into production infrastructure',
    angle: 'AI DevOps, MLOps/LLMOps, Azure AI deployment, secure cloud automation',
  },
  {
    company: 'ShipBob',
    role: 'Security Engineer II, Cloud Security',
    signal: 'Cloud security operations, SIEM, and vulnerability management are active priorities',
    angle: 'Cloud security operations, SIEM tuning, incident response workflows',
  },
];

export default function HiringSignalSamplePage() {
  return (
    <main>
      <Navbar />

      {/* BREADCRUMB */}
      <div className="bg-navy-900 pt-28 pb-0 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/ai-lab" className="hover:text-brand transition-colors flex items-center gap-1">
              <ChevronLeft size={14} />
              Optivantage AI Lab
            </Link>
            <span>/</span>
            <span className="text-white/60">Hiring Signal Sample Report</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-16 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/40 border border-green-700/50 mb-6">
            <span className="text-xs text-green-400 font-semibold">Pilot-ready</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Request the Sample Hiring Signal Report
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
            See how public hiring activity can be turned into sales intelligence for B2B service teams.
          </p>
        </div>
      </section>

      {/* WHAT THE SAMPLE SHOWS */}
      <section className="py-14 px-4 bg-navy-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">What the sample shows</h2>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                The sample report covers 5 companies hiring for AI, cybersecurity, cloud security, DevSecOps,
                and security compliance roles. For each company, it explains the hiring signal, why it may
                matter, the possible service angle, and an example outreach message.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                This gives you a clear picture of what a weekly customised pack looks like before you decide
                whether it is useful for your sales team.
              </p>

              <h3 className="text-white font-semibold text-sm mt-8 mb-3">Who it is for</h3>
              <ul className="space-y-2">
                {bestForList.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                    <ChevronRight size={13} className="text-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-5">
              <p className="text-amber-400 font-semibold text-sm mb-2">Important note</p>
              <p className="text-amber-200 text-sm leading-relaxed">
                This is not LinkedIn automation, scraping, or a generic lead database. It is a research-led
                signal report that helps sales teams decide who to contact and why. Your outreach remains
                human-controlled and conversation-led.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE SIGNAL PREVIEW */}
      <section className="py-14 px-4 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2">A preview of what is inside</h2>
          <p className="text-text-muted text-sm mb-8">
            Five signals from the sample report — the full version includes detailed outreach messages and confidence scores.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-xs text-text-muted font-semibold uppercase tracking-wide">Company</th>
                  <th className="text-left py-3 px-4 text-xs text-text-muted font-semibold uppercase tracking-wide">Role being hired</th>
                  <th className="text-left py-3 px-4 text-xs text-text-muted font-semibold uppercase tracking-wide hidden md:table-cell">Why it may matter</th>
                  <th className="text-left py-3 px-4 text-xs text-text-muted font-semibold uppercase tracking-wide hidden lg:table-cell">Possible service angle</th>
                </tr>
              </thead>
              <tbody>
                {sampleSignals.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-4 text-white font-semibold">{row.company}</td>
                    <td className="py-4 px-4 text-text-muted">{row.role}</td>
                    <td className="py-4 px-4 text-text-muted hidden md:table-cell">{row.signal}</td>
                    <td className="py-4 px-4 text-text-muted hidden lg:table-cell">{row.angle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mt-4">
            The full sample report includes source links, example outreach messages, and priority scores for each signal.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Request the sample report</h2>
          <p className="text-text-muted text-sm mb-8 leading-relaxed">
            Tell us a little about your business. We will review your details and send the sample report
            to your email shortly. If your target market differs from the sample, we may also note how a
            customised version could look for you.
          </p>
          <div className="bg-navy-900 border border-white/5 rounded-2xl p-8 md:p-10">
            <HiringSignalRequestForm />
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-12 px-4 bg-navy-900 text-center border-t border-white/5">
        <p className="text-text-muted text-sm mb-4">
          Not ready to request yet? Read more about how the Hiring Signal Lead Pack works.
        </p>
        <Link
          href="/ai-lab#hiring-signal"
          className="inline-flex items-center gap-1 text-brand text-sm font-semibold hover:underline"
        >
          <ChevronLeft size={14} />
          Back to Optivantage AI Lab
        </Link>
      </section>
    </main>
  );
}
