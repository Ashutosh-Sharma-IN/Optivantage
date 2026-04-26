import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { CheckCircle, Brain, Users, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Microsoft Copilot 365 Training India | Enterprise Copilot Training | Optivantage',
  description: 'Expert Microsoft Copilot 365 training for enterprise teams across India. In-person and online. Banking, aviation, telecom, MSME. 1,000+ professionals trained. Founder-led. Delhi NCR and pan-India.',
  keywords: [
    'Microsoft Copilot 365 training India',
    'Copilot training for enterprise India',
    'Microsoft Copilot course India',
    'Copilot 365 workshop India',
    'Microsoft 365 AI training India',
    'Copilot training banking India',
    'Copilot training for teams India',
    'Microsoft AI training India',
    'Copilot adoption training India',
    'enterprise Microsoft Copilot India',
  ],
  alternates: { canonical: 'https://www.optivantage.in/microsoft-copilot-training-india' },
  openGraph: {
    title: 'Microsoft Copilot 365 Training India | Optivantage Technologies',
    description: 'Expert Copilot 365 training for enterprise teams across India. 1,000+ professionals trained. Banking, aviation, telecom. In-person and online.',
    url: 'https://www.optivantage.in/microsoft-copilot-training-india',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.optivantage.in/microsoft-copilot-training-india#course",
      "name": "Microsoft Copilot 365 Training for Enterprise Teams",
      "provider": {
        "@id": "https://www.optivantage.in/#organization"
      },
      "description": "Expert Microsoft Copilot 365 training delivered across India for enterprise teams. Covers Copilot in Word, Excel, PowerPoint, Outlook, Teams, and advanced prompting. Customised by industry and role.",
      "educationalLevel": "Professional",
      "teaches": [
        "Microsoft Copilot in Word, Excel, PowerPoint, Outlook, Teams",
        "The CRAFT prompting framework",
        "Advanced Copilot prompting for business workflows",
        "Copilot for data analysis in Excel",
        "Responsible AI and data privacy with Copilot",
        "Building a personal Copilot system",
        "Copilot governance for IT administrators"
      ],
      "courseMode": ["onsite", "online"],
      "inLanguage": "en",
      "areaServed": { "@type": "Country", "name": "India" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who provides Microsoft Copilot 365 training for enterprises in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optivantage Technologies delivers Microsoft Copilot 365 training for enterprise teams across India. The firm has trained 1,000+ professionals including teams at Kotak Mahindra Bank, BIAL (Bengaluru International Airport), Hexaware, and Infogain. Training is founder-led by Ashutosh Sharma — a certified Microsoft AI trainer — and is delivered in-person across India and online."
          }
        },
        {
          "@type": "Question",
          "name": "What does Microsoft Copilot 365 training cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Copilot 365 training covers: Copilot in Word (document drafting and editing), Copilot in Excel (data analysis and formula assistance), Copilot in PowerPoint (presentation creation), Copilot in Outlook (email drafting and summarisation), Copilot in Teams (meeting summaries and action items), advanced prompting with the CRAFT framework, responsible AI use and data privacy, and building a personal Copilot productivity system."
          }
        },
        {
          "@type": "Question",
          "name": "Is Microsoft Copilot training available for specific industries like banking or aviation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Optivantage customises Copilot training for specific industries: banking (loan reports, client communication, compliance filings), aviation (operational reporting, MRO documentation, crew communications), telecom (incident reports, RCA, sales proposals), and general enterprise. Role-specific prompting guides are included for each industry."
          }
        },
        {
          "@type": "Question",
          "name": "How long is a Microsoft Copilot 365 training programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our standard Copilot 365 programme is a 1-day intensive (8 hours) covering all core applications and advanced prompting. We also offer a 4-hour half-day workshop for introductory exposure, and a 2-day deep-dive for power users and IT administrators."
          }
        }
      ]
    }
  ]
};

const outcomes = [
  "Use Copilot confidently across all Microsoft 365 applications",
  "Write prompts that produce useful, professional output (not generic results)",
  "Apply the CRAFT framework to any role or workflow",
  "Understand what data Copilot can see — and what to keep private",
  "Build a personal Copilot system that saves hours each week",
  "Know when to use Copilot and when not to",
];

const clients = [
  { name: "Kotak Mahindra Bank", sector: "BFSI" },
  { name: "BIAL (Bengaluru International Airport)", sector: "Aviation" },
  { name: "Hexaware", sector: "IT Services" },
  { name: "Infogain", sector: "IT Services" },
];

export default function MicrosoftCopilotTrainingIndia() {
  return (
    <main className="min-h-screen">
      <Script id="copilot-india-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">Microsoft Copilot 365 Training — India</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Microsoft Copilot 365<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Training Across India.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Practical, role-specific Copilot 365 training for enterprise teams. Not a demo — a real
            programme that changes how your people work. 1,000+ professionals trained across banking,
            aviation, IT services, and general enterprise.
          </p>
          <p className="text-gray-400 mb-8">
            Delivered in-person anywhere in India and online. Founder-led.
            Certified Microsoft AI trainer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/training/copilot-365" className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2">
              See the Full Programme <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              Request a Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-white/10">
        <div className="flex flex-wrap gap-6 items-center">
          <span className="text-sm text-gray-400 font-medium">Teams trained include:</span>
          {clients.map((c) => (
            <div key={c.name} className="flex items-center gap-2">
              <span className="text-white font-semibold text-sm">{c.name}</span>
              <span className="text-xs text-brand bg-brand/10 px-2 py-0.5 rounded-full">{c.sector}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">What Your Team Will Be Able to Do</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">After training, participants leave with practical skills they can apply the same day — not concepts to look up later.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {outcomes.map((o) => (
            <div key={o} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4">
              <CheckCircle size={16} className="text-brand mt-0.5 shrink-0" />
              <p className="text-gray-300 text-sm">{o}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Copilot Applications Covered</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { app: "Copilot in Word", skill: "Draft, edit, summarise, reformat documents" },
            { app: "Copilot in Excel", skill: "Analyse data, generate formulas, spot trends" },
            { app: "Copilot in PowerPoint", skill: "Create slides from a prompt or document" },
            { app: "Copilot in Outlook", skill: "Draft emails, summarise threads, prep for meetings" },
            { app: "Copilot in Teams", skill: "Meeting summaries, action items, catch-up" },
            { app: "Microsoft Copilot Chat", skill: "Research, drafting, problem-solving across M365" },
          ].map((item) => (
            <div key={item.app} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold text-sm mb-2">{item.app}</h3>
              <p className="text-gray-400 text-xs">{item.skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry customisation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Customised for Your Industry</h2>
          <p className="text-gray-300 mb-6">Generic AI training fails because the prompts, use cases, and examples don't match participants' actual work. We build industry-specific examples and prompting guides into every programme.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { industry: "Banking & BFSI", eg: "Credit analysis, regulatory filing, client communication" },
              { industry: "Aviation & Airports", eg: "Operational reports, MRO docs, crew briefings" },
              { industry: "Telecom & IT Services", eg: "Incident RCA, proposals, service reports" },
              { industry: "MSME & General Enterprise", eg: "Sales decks, client proposals, weekly reports" },
            ].map((item) => (
              <div key={item.industry} className="flex gap-3 items-start">
                <Brain size={16} className="text-brand mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{item.industry}</p>
                  <p className="text-gray-400 text-xs">{item.eg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand/20 to-orange-400/10 border border-brand/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Run Copilot Training for Your Team?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Share your team size, industry, and any specific focus areas. We'll propose the right format and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all">
              Request a Workshop <ArrowRight size={18} />
            </Link>
            <Link href="/training/copilot-365" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              View Full Programme Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
