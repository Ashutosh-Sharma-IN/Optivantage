import Navbar from '@/components/Navbar';
import TierCard from '@/components/advisory/TierCard';
import Link from 'next/link';
import { Brain, Award, Users, Target, ArrowRight } from 'lucide-react';

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/optivantage';

const TIERS = [
  {
    tier: 1 as const,
    name: 'AI Readiness Snapshot',
    duration: '4 weeks',
    priceRange: '₹7L – ₹12L',
    tagline: 'Understand where you are before committing to where you\'re going.',
    outcomes: [
      'AI readiness score across 7 organisational dimensions',
      'Executive summary: where you are vs. industry benchmarks',
      'Prioritised 3–6 month action roadmap',
      'Identification of 2–3 quick-win AI use cases',
    ],
    includes: [
      '2-day facilitated workshop (on-site or virtual)',
      'Stakeholder interviews across functions',
      'Written readiness report (10–15 pages)',
      '90-minute executive debrief session',
    ],
    isPopular: false,
  },
  {
    tier: 2 as const,
    name: 'AI Adoption Roadmap',
    duration: '8–12 weeks',
    priceRange: '₹20L – ₹35L',
    tagline: 'A vendor-evaluated, implementation-ready AI strategy built for your organisation.',
    outcomes: [
      'Phased 12–24 month AI transformation roadmap',
      'Vendor shortlist + RFP support for 2–3 use cases',
      'Change management and capability-building plan',
      'ROI model per use case with measurable KPIs',
      'Quick-win identification: pilot projects showing ROI in 3–6 months',
    ],
    includes: [
      'Everything in Tier 1',
      'Process mining session (data-backed automation priority)',
      'Vendor evaluation scorecard',
      'Board / leadership presentation deck',
      '45-page strategic roadmap document',
    ],
    isPopular: true,
  },
  {
    tier: 3 as const,
    name: 'Advisory Retainer',
    duration: '12+ months',
    priceRange: '₹40L – ₹80L / year',
    tagline: 'Sustained strategic guidance from someone who\'s built this from inside large enterprises.',
    outcomes: [
      'Quarterly AI programme reviews with updated roadmap',
      '4–8 hours/month of direct advisory access',
      'Vendor relationship management and escalation support',
      'Monthly progress dashboards tied to agreed KPIs',
      'Peer network introductions and knowledge-sharing',
    ],
    includes: [
      'Everything in Tier 1 + 2 (onboarding)',
      'Priority access to Ashutosh\'s direct calendar',
      'Dedicated WhatsApp/Slack channel for real-time queries',
      'Annual AI strategy refresh',
      'Team AI competency assessments',
    ],
    isPopular: false,
  },
];

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />

      {/* HERO */}
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-bold px-4 py-2 rounded-full mb-6">
            <Brain size={16} /> AI Adoption Advisory-as-a-Service
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            AI strategy built for how Indian enterprises actually work
          </h1>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Not a course. Not a generic framework. Founder-led consulting that
            draws on 25 years of telecom and IT operations experience — including
            7 years in senior director roles at one of the world's largest telcos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-ready"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-white font-bold px-7 py-4 rounded-xl transition-all"
            >
              Take the AI Readiness Quiz <ArrowRight size={18} />
            </Link>
            <a
              href={CALENDLY_URL}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-medium px-7 py-4 rounded-xl transition-all text-sm"
            >
              Book a Free 30-Min Call
            </a>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Who this is for
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Mid-to-large Indian enterprises',
                desc: '500–10,000 employees. Complex operations. Leadership is aware of AI but unsure where to start or how to prioritise.',
              },
              {
                icon: Users,
                title: 'CXOs, VP IT, L&D heads',
                desc: 'Decision-makers who need an honest outside view — not a vendor selling tools, but an advisor who has been in the same seat.',
              },
              {
                icon: Brain,
                title: 'Telecom, aviation, banking, logistics',
                desc: 'Industries where AI meets complex operations, regulatory constraints, and large workforces. Ashutosh speaks your language.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-navy-900 border border-white/10 rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">
                  Not your typical consultancy
                </p>
                <h2 className="text-2xl font-bold text-white mb-4">
                  This is advisory, not a course library
                </h2>
                <p className="text-text-muted leading-relaxed mb-4 text-sm">
                  Most "AI adoption" services either sell you software or give you recorded videos.
                  This is different: direct access to someone who has run 1,000+ person operations,
                  saved 2,400 hours/month through ML automation at BT, and trained 1,000+
                  professionals on AI tools.
                </p>
                <p className="text-text-muted leading-relaxed text-sm">
                  Ashutosh personally delivers every engagement. No junior consultants. No generic decks.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Years in telecom/IT ops', value: '25+' },
                  { label: 'AI professionals trained', value: '1,000+' },
                  { label: 'ML automation built at BT', value: '2,400 hrs/mo saved' },
                  { label: 'Certifications', value: 'ISO 42001 · UT Austin AI' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between bg-navy-900 rounded-lg px-5 py-4"
                  >
                    <span className="text-text-muted text-sm">{label}</span>
                    <span className="text-white font-bold text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Three engagement levels
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Each tier builds on the previous. Most clients start with a Snapshot or Roadmap
              and transition to the Advisory Retainer once they see the value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {TIERS.map((t) => (
              <TierCard key={t.tier} {...t} calendlyUrl={CALENDLY_URL} />
            ))}
          </div>
          <p className="text-center text-text-muted text-xs mt-6">
            Prices shown in INR. USD pricing available for international clients.
            All engagements start with a free 30–45 minute introductory call.
          </p>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-14 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-navy-800 border border-white/10 rounded-2xl p-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-brand/10 rounded-2xl flex items-center justify-center">
                <Award size={36} className="text-brand" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ashutosh Sharma — Founder, OptiVantage Technologies
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                25 years in telecom and IT operations across BT, Telstra, Orange, SITA.
                Former Director, Service Operations at BT managing 1,000+ FTEs.
                AI certified trainer (Microsoft Copilot, Azure AI, Google AI),
                ISO 42001 certified, UT Austin AI for Leaders postgraduate.
                Clients include Hexaware, Infogain, Kotak Mahindra Bank.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Microsoft AI', 'Azure AI', 'Google AI', 'ISO 42001', 'UT Austin AI', 'BT · Telstra · Orange'].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="bg-white/5 border border-white/10 text-text-muted text-xs px-3 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 bg-brand">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/80 mb-8">
            Take our 5-minute AI Readiness Assessment. You'll get a personalised score,
            three specific insights about your organisation, and a clear recommended next step.
            No email required to begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-ready"
              className="inline-flex items-center gap-2 bg-white text-brand font-bold px-7 py-4 rounded-xl hover:bg-white/90 transition-all"
            >
              Take the Free Assessment <ArrowRight size={18} />
            </Link>
            <a
              href={CALENDLY_URL}
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-medium px-7 py-4 rounded-xl transition-all text-sm"
            >
              Book a Call Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
