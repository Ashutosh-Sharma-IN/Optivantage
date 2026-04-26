import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { CheckCircle, Plane, Shield, Users, Brain, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Training for Aviation & Airports India | AI for Airport Operations | Optivantage',
  description: 'Specialist AI training for aviation, airport operations, and airline teams in India. Microsoft Copilot, ChatGPT, ISO 42001 AI governance. Trained BIAL (Bengaluru International Airport). 25 years SITA and aviation IT experience.',
  keywords: [
    'AI training aviation India',
    'AI training airport operations India',
    'AI for airlines India',
    'Microsoft Copilot aviation',
    'ISO 42001 aviation AI governance',
    'AI training BIAL',
    'AI training for airport staff',
    'generative AI aviation India',
    'AI upskilling aviation',
    'SITA aviation IT expert',
  ],
  alternates: { canonical: 'https://www.optivantage.in/ai-training-aviation-india' },
  openGraph: {
    title: 'AI Training for Aviation & Airports India | Optivantage Technologies',
    description: 'AI training for aviation and airport operations teams. Trained BIAL. Delivered by a founder with 25 years of SITA aviation IT experience.',
    url: 'https://www.optivantage.in/ai-training-aviation-india',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.optivantage.in/ai-training-aviation-india#course",
      "name": "AI Training for Aviation and Airport Operations",
      "provider": {
        "@id": "https://www.optivantage.in/#organization"
      },
      "description": "AI literacy, Microsoft Copilot 365, ChatGPT, and ISO 42001 AI governance training designed specifically for aviation, airport, and airline operations teams in India. Delivered by a trainer with 25 years of SITA aviation IT experience.",
      "educationalLevel": "Professional",
      "teaches": [
        "Microsoft Copilot 365 for aviation workflows",
        "ChatGPT and generative AI for operational teams",
        "AI governance and ISO 42001 for aviation",
        "Responsible AI in safety-critical environments",
        "AI use cases in airport operations and airline management"
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
          "name": "Who provides AI training for aviation and airport teams in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optivantage Technologies delivers AI training specifically for aviation and airport operations teams in India. The firm trained teams at BIAL (Bengaluru International Airport Limited) and is led by Ashutosh Sharma, who has 25 years of enterprise IT experience including at SITA — the technology company that runs IT infrastructure for most of the world's airlines and airports. That domain knowledge is embedded directly into the training."
          }
        },
        {
          "@type": "Question",
          "name": "What AI topics are relevant for airport and airline operations staff?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For aviation operations teams, the most relevant AI training covers: Microsoft Copilot 365 for administrative and operational workflows, ChatGPT for report drafting and communication, AI tools for data analysis and operational planning, responsible AI and data governance in safety-critical environments, and AI governance frameworks (ISO 42001) for aviation compliance teams."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI governance apply to the aviation sector?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aviation is a safety-critical, heavily regulated sector. ISO/IEC 42001 AI governance training gives aviation organisations a structured framework for governing AI adoption: defining AI risk appetite, auditing AI systems, managing AI in operational workflows, and meeting regulatory expectations from DGCA and global aviation standards bodies."
          }
        },
        {
          "@type": "Question",
          "name": "Can AI training be delivered at an airport or airline's premises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Optivantage delivers AI training in-person at airports, airline offices, and training facilities across India, as well as online via virtual instructor-led training. Programmes can be tailored to shift workers, operational teams, management, and technical staff separately."
          }
        }
      ]
    }
  ]
};

const useCases = [
  "AI-assisted operational reporting and shift handover notes",
  "Copilot for incident reports, MRO documentation, and compliance filings",
  "AI for passenger communication drafting and service recovery",
  "ChatGPT for training material creation and SOPs",
  "Generative AI for air traffic data summarisation and briefings",
  "AI governance frameworks for safety-critical AI deployments",
  "AI tools for revenue management and capacity planning teams",
  "Responsible AI practices for customer-facing applications",
];

export default function AITrainingAviationIndia() {
  return (
    <main className="min-h-screen">
      <Script id="ai-aviation-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">AI Training — Aviation & Airports</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Training for Aviation.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">By Someone Who Knows It.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Aviation is not a generic industry. Safety, operations, and compliance are non-negotiable.
            Our AI training is designed by someone who spent years running IT infrastructure
            for airlines and airports through SITA — and who has trained teams at BIAL.
          </p>
          <p className="text-gray-400 mb-8">
            <strong className="text-white">BIAL (Bengaluru International Airport Limited)</strong> is among the
            organisations whose teams have been trained through Optivantage programmes.
            Delivered by Ashutosh Sharma — 25+ years enterprise IT, including SITA (aviation IT systems for global airlines and airports).
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2">
              Request a Programme <ArrowRight size={18} />
            </Link>
            <Link href="/iso-42001-training" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              ISO 42001 for Aviation
            </Link>
          </div>
        </div>
      </section>

      {/* SITA credibility block */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Plane className="text-brand shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Aviation Domain Knowledge — Built In</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                SITA is the IT backbone of global aviation — the systems behind passenger processing,
                baggage, airline operations, and airport connectivity for most of the world's airlines and airports.
                Ashutosh Sharma spent years managing enterprise IT within that environment.
              </p>
              <p className="text-gray-400">
                That experience means when we train aviation teams on AI, we understand your terminology,
                your operational constraints, your compliance culture, and your appetite for change.
                No translation required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">AI Use Cases for Aviation Teams</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">Real workflows, real tools, trained by someone who understands aviation operations.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div key={uc} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4">
              <CheckCircle size={16} className="text-brand mt-0.5 shrink-0" />
              <p className="text-gray-300 text-sm">{uc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we train */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Who We Train in Aviation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              role: "Airport Operations Teams",
              topics: ["AI literacy and productivity tools", "Copilot for operational reporting", "Responsible AI in operations"],
            },
            {
              role: "Management and Leadership",
              topics: ["AI strategy for airports and airlines", "AI governance and ISO 42001", "AI investment and vendor evaluation"],
            },
            {
              role: "IT and Technology Teams",
              topics: ["AI implementation roadmap", "AI security and risk", "Agentic AI for automation"],
            },
          ].map((g) => (
            <div key={g.role} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">{g.role}</h3>
              <ul className="space-y-2">
                {g.topics.map((t) => (
                  <li key={t} className="text-gray-400 text-sm flex items-start gap-2">
                    <CheckCircle size={14} className="text-brand mt-0.5 shrink-0" />
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
          <h2 className="text-3xl font-bold text-white mb-4">Train Your Aviation Teams on AI</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Whether you're an airport operator, airline, or aviation services company — we'll design
            the right programme for your teams.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
