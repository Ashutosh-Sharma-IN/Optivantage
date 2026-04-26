import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { CheckCircle, Shield, Users, Brain, ArrowRight, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Training for Banking & BFSI India | Microsoft Copilot, ISO 42001 for Banks | Optivantage',
  description: 'Specialist AI training for Indian banks, NBFCs, and financial services firms. Microsoft Copilot 365, ChatGPT, ISO 42001 AI governance for BFSI. Trained teams at Kotak Mahindra Bank. Pan-India, online and in-person.',
  keywords: [
    'AI training for banks India',
    'AI training BFSI India',
    'Microsoft Copilot training banks',
    'ChatGPT training for banking teams',
    'ISO 42001 AI governance banks',
    'AI literacy training banking India',
    'generative AI training financial services',
    'AI upskilling NBFC India',
    'AI training Kotak',
    'responsible AI banking India',
  ],
  alternates: { canonical: 'https://www.optivantage.in/ai-training-banking-india' },
  openGraph: {
    title: 'AI Training for Banking & BFSI India | Optivantage Technologies',
    description: 'Specialist AI training for Indian banks and financial services. Kotak Mahindra Bank client. Microsoft Copilot, ChatGPT, ISO 42001 for BFSI teams.',
    url: 'https://www.optivantage.in/ai-training-banking-india',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.optivantage.in/ai-training-banking-india#course",
      "name": "AI Training for Banking and Financial Services",
      "provider": {
        "@id": "https://www.optivantage.in/#organization"
      },
      "description": "AI literacy, Microsoft Copilot 365, ChatGPT, and ISO 42001 AI governance training designed specifically for banking, NBFC, and financial services teams in India.",
      "educationalLevel": "Professional",
      "teaches": [
        "Microsoft Copilot 365 for banking workflows",
        "ChatGPT and generative AI for financial analysis",
        "ISO/IEC 42001 AI governance for banks",
        "AI risk management and compliance in BFSI",
        "Responsible AI practices for regulated industries",
        "AI use cases in lending, credit, and customer service"
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
          "name": "Who provides AI training for banking teams in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optivantage Technologies delivers specialist AI training for Indian banks and financial services firms. Clients include Kotak Mahindra Bank (AI training delivered via UpGrad for Enterprise). Programs cover Microsoft Copilot 365, ChatGPT, generative AI, and ISO/IEC 42001 AI governance — all tailored to the workflows, compliance requirements, and risk culture of BFSI organisations."
          }
        },
        {
          "@type": "Question",
          "name": "What AI topics are most relevant for bank employees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For banking and financial services teams, the most valuable AI training covers: Microsoft Copilot 365 for productivity (report writing, email, data analysis in Excel), ChatGPT and generative AI for research and summarisation, AI governance and ISO 42001 for compliance and risk teams, and responsible AI practices for customer-facing applications."
          }
        },
        {
          "@type": "Question",
          "name": "Does AI training for banks need to address RBI and SEBI compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our BFSI AI training explicitly addresses regulatory context: AI data governance, customer data privacy, model risk, and responsible AI deployment in line with RBI guidance on technology governance. ISO/IEC 42001 training gives compliance and risk teams a structured AI management system framework."
          }
        },
        {
          "@type": "Question",
          "name": "Can Optivantage deliver AI training across multiple branches or locations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We deliver AI training in-person across India and online via virtual instructor-led training (VILT). For large-scale rollouts across branches, we offer a train-the-trainer model so your internal teams can continue delivery at scale."
          }
        },
        {
          "@type": "Question",
          "name": "What is ISO 42001 and why does it matter for banks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ISO/IEC 42001 is the international standard for AI Management Systems — the governance framework for organisations that develop or use AI. For banks, it provides a structured approach to AI risk management, auditability, and responsible AI deployment, which is increasingly expected by regulators, board members, and institutional clients."
          }
        }
      ]
    }
  ]
};

const modules = [
  {
    title: "AI Literacy for BFSI Teams",
    desc: "What AI actually is (and isn't), how LLMs work, and how to use AI tools safely in a regulated environment.",
    audience: "All staff",
  },
  {
    title: "Microsoft Copilot 365 for Banking",
    desc: "Practical Copilot use across Word, Excel, Outlook, and Teams — with banking-specific prompts for reports, analysis, and client communication.",
    audience: "Relationship managers, analysts, operations",
  },
  {
    title: "Responsible AI and Data Governance",
    desc: "Customer data privacy, AI hallucination risks, what to share and what not to share with AI tools, and your obligations under Indian data protection law.",
    audience: "All staff, compliance, risk",
  },
  {
    title: "ISO 42001 AI Governance for Financial Services",
    desc: "Building an AI Management System: policy design, risk assessment, model governance, and certification preparation for BFSI-specific AI risks.",
    audience: "CRO, compliance officers, IT heads, board",
  },
  {
    title: "AI Strategy for Banking Leadership",
    desc: "AI opportunity landscape for BFSI, vendor evaluation, build vs. buy decisions, and how to govern AI adoption at scale without stifling innovation.",
    audience: "CXOs, heads of business, digital and technology leaders",
  },
];

export default function AITrainingBankingIndia() {
  return (
    <main className="min-h-screen">
      <Script id="ai-banking-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">AI Training — Banking & BFSI</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Training Built for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Indian Banks and BFSI.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Banking teams face unique pressures when adopting AI: regulatory scrutiny, customer data obligations,
            model risk, and institutional caution. Our AI training is designed for this reality —
            not a generic tech workshop dropped into a financial services context.
          </p>
          <p className="text-gray-400 mb-8">
            <strong className="text-white">Kotak Mahindra Bank</strong> is among the organisations whose teams
            have been trained through Optivantage programmes. Delivered via UpGrad for Enterprise and direct corporate engagement.
            1,000+ professionals trained across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2">
              Request a Programme <ArrowRight size={18} />
            </Link>
            <Link href="/iso-42001-training" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              ISO 42001 Details
            </Link>
          </div>
        </div>
      </section>

      {/* What BFSI organisations need */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-6">What Makes AI Training Different in Banking</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Compliance-First Framing",
                body: "Every AI tool and use case is taught in the context of customer data privacy, RBI technology governance, and your internal risk appetite.",
              },
              {
                icon: Users,
                title: "Role-Specific Programmes",
                body: "Separate tracks for frontline staff, relationship managers, analysts, risk & compliance, technology, and CXO/board level. No one-size-fits-all.",
              },
              {
                icon: Brain,
                title: "Real BFSI Use Cases",
                body: "Loan report drafting, credit analysis, customer communication, regulatory filing summaries, branch operations — AI training on workflows your teams actually run.",
              },
              {
                icon: TrendingUp,
                title: "Governance-Ready",
                body: "ISO/IEC 42001 AI governance training for compliance, risk, and IT teams — giving leadership a structured framework to govern AI adoption responsibly.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="text-brand shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Training Programmes</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">Each programme can be delivered as a standalone engagement or as part of a phased AI adoption rollout across your organisation.</p>
        <div className="space-y-4">
          {modules.map((m) => (
            <div key={m.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{m.title}</h3>
                  <p className="text-gray-400">{m.desc}</p>
                </div>
                <div className="shrink-0">
                  <span className="text-xs text-brand bg-brand/10 px-3 py-1.5 rounded-full whitespace-nowrap">{m.audience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery formats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">How We Deliver</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              format: "In-Person",
              detail: "At your office, branch, or training centre. Anywhere in India. Best for cohorts of 15–40 people.",
            },
            {
              format: "Virtual Instructor-Led (VILT)",
              detail: "Live online sessions via Teams or Zoom. Works well for geographically distributed teams.",
            },
            {
              format: "Train-the-Trainer",
              detail: "We train your internal L&D or HR team to deliver the programme independently for large-scale bank-wide rollouts.",
            },
          ].map((d) => (
            <div key={d.format} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-brand font-semibold mb-2">{d.format}</p>
              <p className="text-gray-400 text-sm">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand/20 to-orange-400/10 border border-brand/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Upskill Your Banking Teams on AI?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us your team size, role mix, and key concerns. We'll propose the right programme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all">
              Request a Programme <ArrowRight size={18} />
            </Link>
            <Link href="/training/copilot-365" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              View Copilot 365 Programme
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
