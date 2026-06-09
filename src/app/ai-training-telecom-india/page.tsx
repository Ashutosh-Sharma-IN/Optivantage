import { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  CheckCircle,
  Zap,
  Users,
  Brain,
  ArrowRight,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "AI Training for Telecom Companies India | AI for Telecom Teams | Optivantage",
  description:
    "Specialist AI training for telecom operators, ISPs, and IT service companies in India. Microsoft Copilot, ChatGPT, ISO 42001. Delivered by a trainer with 25 years at BT and Telstra. Pan-India and online.",
  keywords: [
    "AI training telecom India",
    "AI training for telecom companies",
    "AI upskilling telecom teams India",
    "Microsoft Copilot training telecom",
    "generative AI training ISP India",
    "AI for IT services companies India",
    "AI training BT Telstra experience",
    "AI literacy telecom workforce India",
    "ISO 42001 telecom AI governance",
  ],
  alternates: {
    canonical: "https://www.optivantage.in/ai-training-telecom-india",
  },
  openGraph: {
    title:
      "AI Training for Telecom & IT Services India | Optivantage Technologies",
    description:
      "AI training for telecom and IT services teams. Delivered by a founder with 25 years at BT and Telstra. Pan-India, online and in-person.",
    url: "https://www.optivantage.in/ai-training-telecom-india",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.optivantage.in/ai-training-telecom-india#course",
      name: "AI Training for Telecom and IT Services",
      provider: {
        "@id": "https://www.optivantage.in/#organization",
      },
      description:
        "AI literacy, Microsoft Copilot, ChatGPT, and ISO 42001 AI governance training designed for telecom operators, ISPs, and IT services companies in India. Delivered by a trainer with 25 years at BT and Telstra.",
      educationalLevel: "Professional",
      teaches: [
        "Microsoft Copilot 365 for telecom workflows",
        "Generative AI for IT operations and service delivery",
        "AI governance and ISO 42001 for telecom",
        "AI in network operations and NOC environments",
        "AI for customer experience and service management",
      ],
      courseMode: ["onsite", "online"],
      inLanguage: "en",
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who provides AI training for telecom companies in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Optivantage Technologies delivers AI training specifically designed for telecom operators, ISPs, and IT services companies in India. The firm was built on 25 years of enterprise IT operations experience including at BT (British Telecom) and Telstra (Australia's largest telecom). That domain experience means training is grounded in telecom-specific workflows, terminology, and operational culture.",
          },
        },
        {
          "@type": "Question",
          name: "What AI topics are most useful for telecom and IT services teams?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For telecom and IT services teams, the most impactful AI training covers: Microsoft Copilot 365 for productivity across sales, operations, and support roles; AI-powered NOC and service desk automation; ChatGPT for technical documentation, RCA reports, and client communications; AI governance for regulated telecoms environments; and AI strategy for telecoms leadership teams.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI training be delivered across multiple offices or regions for a telecom company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Optivantage delivers AI training in-person at any location in India and via virtual instructor-led training (VILT) for geographically distributed teams. We also offer a train-the-trainer model so your internal L&D team can continue delivery across large workforces.",
          },
        },
      ],
    },
  ],
};

const useCases = [
  "Copilot for incident and RCA report writing",
  "AI-assisted customer communication and complaint resolution",
  "ChatGPT for technical documentation and SOPs",
  "AI tools for sales proposals and bid writing",
  "Generative AI for service delivery analytics",
  "AI governance frameworks for regulated telecoms",
  "AI in NOC: anomaly detection and self-healing automation",
  "AI strategy for telecoms product and commercial teams",
];

export default function AITrainingTelecomIndia() {
  return (
    <main className="min-h-screen">
      <Script
        id="ai-telecom-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">
            AI Training — Telecom & IT Services
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Training for Telecom.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">
              By Someone From Telecom.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Teaching AI in a telecom context requires understanding how
            networks, service delivery, operations, and customer management
            actually work. Our founders spent years running enterprise IT at BT
            and Telstra — two of the world's largest telecoms. That experience
            is in every programme we design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2"
            >
              Request a Programme <ArrowRight size={18} />
            </Link>
            <Link
              href="/training/copilot-365"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all"
            >
              Copilot 365 Details
            </Link>
          </div>
        </div>
      </section>

      {/* BT/Telstra credibility */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Network className="text-brand shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                25 Years in Telecom IT — Applied to AI Training
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BT is the UK's largest telecoms provider. Telstra is Australia's
                largest. Both operate at massive scale with complex IT
                environments, demanding SLAs, and diverse workforces. Ashutosh
                Sharma managed enterprise IT operations within these
                environments — understanding the workflows, pressures, and
                culture of telecom organisations from the inside.
              </p>
              <p className="text-gray-400">
                When we run AI training for telecom companies, we don't have to
                translate between "general AI concepts" and "how this applies to
                my job". We already know your job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          AI Use Cases for Telecom Teams
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          Practical AI applications across telecom operations, service delivery,
          sales, and management.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div
              key={uc}
              className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4"
            >
              <CheckCircle size={16} className="text-brand mt-0.5 shrink-0" />
              <p className="text-gray-300 text-sm">{uc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we train */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          Who We Train in Telecoms
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              role: "NOC and Operations Teams",
              topics: [
                "AI for incident management",
                "Copilot for operational reporting",
                "AI-assisted RCA and documentation",
              ],
            },
            {
              role: "Sales and Commercial",
              topics: [
                "Copilot for proposals and bids",
                "AI for customer insights",
                "Generative AI for competitive analysis",
              ],
            },
            {
              role: "Leadership and Strategy",
              topics: [
                "AI strategy for telecoms",
                "AI governance (ISO 42001)",
                "AI investment and vendor evaluation",
              ],
            },
          ].map((g) => (
            <div
              key={g.role}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {g.role}
              </h3>
              <ul className="space-y-2">
                {g.topics.map((t) => (
                  <li
                    key={t}
                    className="text-gray-400 text-sm flex items-start gap-2"
                  >
                    <CheckCircle
                      size={14}
                      className="text-brand mt-0.5 shrink-0"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand/20 to-orange-400/10 border border-brand/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Train Your Telecom Teams on AI
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Share your team size, roles, and priorities. We'll propose the right
            AI training programme.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
