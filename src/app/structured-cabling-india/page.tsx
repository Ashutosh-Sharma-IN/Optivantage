import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { CheckCircle, Network, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Structured Cabling Contractor India | Cat6, Fibre Optic, Data Centre Cabling | Optivantage',
  description: 'Structured cabling installation across India. Cat6, Cat6A, fibre optic cabling, data cabling, trunking, and passive network infrastructure for offices, GCCs, data centres, and campuses. Cisco partner.',
  keywords: [
    'structured cabling contractor India',
    'structured cabling installation India',
    'Cat6 cabling India',
    'fibre optic cabling India',
    'data cabling India',
    'passive network infrastructure India',
    'structured cabling office India',
    'data centre cabling India',
    'network cabling GCC India',
    'LAN cabling India',
    'TIA EIA cabling standards India',
  ],
  alternates: { canonical: 'https://www.optivantage.in/structured-cabling-india' },
  openGraph: {
    title: 'Structured Cabling India | Cat6, Fibre Optic, Office & Data Centre Cabling | Optivantage',
    description: 'Professional structured cabling installation across India. Cat6/Cat6A, fibre optic, data centres, GCCs, offices. Cisco Registered Partner.',
    url: 'https://www.optivantage.in/structured-cabling-india',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.optivantage.in/structured-cabling-india#service",
      "name": "Structured Cabling Services",
      "provider": {
        "@id": "https://www.optivantage.in/#organization"
      },
      "description": "Professional structured cabling design and installation across India: Cat6, Cat6A, fibre optic cabling, trunking, patch panels, and data centre cabling for offices, GCCs, warehouses, and campuses.",
      "areaServed": { "@type": "Country", "name": "India" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who provides structured cabling installation for offices and GCCs in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optivantage Technologies is a structured cabling contractor delivering Cat6, Cat6A, and fibre optic cabling for offices, GCCs, data centres, warehouses, and campuses across India. As a Cisco Registered Partner, we also connect passive cabling to active networking (switches, routers, WiFi) — all under one engagement."
          }
        },
        {
          "@type": "Question",
          "name": "What types of cabling does Optivantage install?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optivantage installs: Cat6 and Cat6A copper cabling for standard office and data networking, single-mode and multi-mode fibre optic cabling for high-speed backbone and long-distance runs, coaxial cabling for CCTV, and associated passive infrastructure: trunking, cable trays, conduit, patch panels, face plates, and cabinets."
          }
        },
        {
          "@type": "Question",
          "name": "Does Optivantage follow TIA/EIA cabling standards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All structured cabling work is delivered to TIA/EIA and ISO/IEC 11801 cabling standards. On completion, clients receive full as-built documentation including cable schedules, test results (Fluke DTX), and cabinet layouts."
          }
        },
        {
          "@type": "Question",
          "name": "Can Optivantage handle cabling for a large office or warehouse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Optivantage has delivered structured cabling for large corporate offices, multi-floor GCCs, logistics warehouses, and multi-site rollouts across India. We scale from a single-floor office fitout to a 200,000 sq ft warehouse cabling project."
          }
        }
      ]
    }
  ]
};

const cableTypes = [
  { name: "Cat6 Copper Cabling", detail: "Standard office data cabling supporting up to 1 Gbps at 100m. Most common for office LAN deployments." },
  { name: "Cat6A Copper Cabling", detail: "Supports 10 Gbps at 100m. Recommended for high-density environments, server rooms, and future-proofing." },
  { name: "Single-Mode Fibre (OS2)", detail: "For long-distance runs — building-to-building, campus backbone, and WAN hand-off. Supports 100 Gbps+." },
  { name: "Multi-Mode Fibre (OM3/OM4)", detail: "For high-speed data centre interconnects and short backbone runs within a building." },
  { name: "Coaxial (RG6/RG59)", detail: "For CCTV, IP cameras, and video distribution systems." },
];

const deliverables = [
  "Cable schedule and as-built drawings",
  "Fluke DTX test results for every cable",
  "Labelled cables, patch panels, and face plates",
  "Cabinet layout diagrams",
  "Warranty documentation",
  "Handover pack for facilities / IT team",
];

export default function StructuredCablingIndia() {
  return (
    <main className="min-h-screen">
      <Script id="cabling-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">Passive Infrastructure — India</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Structured Cabling.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Done Right, Pan-India.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Cat6, Cat6A, fibre optic, and coaxial cabling for offices, GCCs, data centres, warehouses,
            and campuses across India. Delivered to TIA/EIA standards. Full documentation on handover.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2">
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link href="/it-infrastructure-india" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              Full Infrastructure Services
            </Link>
          </div>
        </div>
      </section>

      {/* Cable types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Cable Types We Install</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">We specify the right cable type for your application — don't over-engineer or under-spec.</p>
        <div className="space-y-4">
          {cableTypes.map((c) => (
            <div key={c.name} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand/30 transition-colors">
              <div className="flex items-start gap-4">
                <Network className="text-brand shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="text-white font-semibold mb-1">{c.name}</h3>
                  <p className="text-gray-400 text-sm">{c.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Full Passive Infrastructure Scope</h2>
            <ul className="space-y-3">
              {[
                "Cable survey and design",
                "Structured cabling installation (copper and fibre)",
                "Trunking, cable trays, conduit, and J-hooks",
                "Patch panels and 19\" rack mounting",
                "Face plates, outlets, and work area components",
                "Floor and ceiling voids, raised floors",
                "Server room and data room cabling",
                "Cable testing and certification (Fluke DTX)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-brand mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Environments We Cable</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Corporate offices", "GCC facilities", "Data centres", "Server rooms", "Warehouses", "Campuses", "Retail chains", "Hotels & hospitality"].map((env) => (
                <div key={env} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-300">
                  {env}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">What You Get on Completion</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div key={d} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-brand mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand/20 to-orange-400/10 border border-brand/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Cabling Quote?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Share your floor area, number of outlets, cable type preference, and location.
            We'll respond with a scoped proposal within 48 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
