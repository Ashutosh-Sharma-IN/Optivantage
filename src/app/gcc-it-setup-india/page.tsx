import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { CheckCircle, Building2, Network, Server, Package, Brain, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GCC IT Setup India | IT Infrastructure for Global Capability Centres | Optivantage',
  description: 'Complete IT infrastructure and equipment setup for Global Capability Centres (GCCs) in India. Network design, cabling, WiFi, security, laptop rental, AI training. Single vendor, end-to-end delivery. Cisco partner, Vertiv reseller.',
  keywords: [
    'GCC IT setup India',
    'Global Capability Centre IT infrastructure India',
    'GCC network setup India',
    'GCC laptop supply India',
    'IT setup for GCC India',
    'Cisco partner GCC India',
    'GCC infrastructure vendor India',
    'GCC technology setup Delhi',
    'IT support for GCC India',
    'GCC setup complete IT',
  ],
  alternates: { canonical: 'https://www.optivantage.in/gcc-it-setup-india' },
  openGraph: {
    title: 'GCC IT Setup India | End-to-End IT for Global Capability Centres | Optivantage',
    description: 'Complete IT infrastructure, equipment rental, and AI training for GCC setup in India. Single vendor, end-to-end. Cisco partner, Fortinet, Vertiv.',
    url: 'https://www.optivantage.in/gcc-it-setup-india',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.optivantage.in/gcc-it-setup-india#service",
      "name": "GCC IT Setup and Infrastructure Services India",
      "provider": {
        "@id": "https://www.optivantage.in/#organization"
      },
      "description": "Complete IT infrastructure setup for Global Capability Centres in India: network design, structured cabling, enterprise WiFi, network security, server rooms, CCTV, IT equipment supply and rental, and AI training for GCC teams.",
      "areaServed": { "@type": "Country", "name": "India" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which company handles complete IT setup for a GCC in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optivantage Technologies provides end-to-end IT setup for Global Capability Centres in India: LAN/WAN network design, structured cabling, enterprise WiFi, network security (Cisco, Fortinet, Palo Alto Networks), server room build, CCTV and access control, IT equipment supply and rental (Dell, HP, Lenovo), and AI training for GCC teams. Single vendor. Cisco Registered Partner, Fortinet Partner, Vertiv Authorised Reseller."
          }
        },
        {
          "@type": "Question",
          "name": "What IT infrastructure is needed for a new GCC setup in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A new GCC requires: LAN/WAN network design and implementation (Cisco switches, routers, firewalls), enterprise WiFi coverage, structured cabling (Cat6/Cat6A and fibre), a server room or data room with UPS and cooling, network security (firewall, endpoint protection), CCTV and biometric access control, IT equipment (laptops, desktops, workstations, printers), and connectivity to HQ or cloud. Optivantage delivers all of these."
          }
        },
        {
          "@type": "Question",
          "name": "How long does IT setup for a GCC take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical GCC IT setup — covering passive infrastructure, active networking, security, and equipment — takes 4–12 weeks depending on the scale of the facility, the complexity of connectivity requirements, and the availability of the fit-out space. We provide a detailed project plan and timeline after a site assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Can Optivantage also train GCC teams on AI tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Optivantage offers AI training for GCC teams as part of the setup engagement or separately: Microsoft Copilot 365 training, ChatGPT and generative AI literacy, AI governance (ISO/IEC 42001), and AI strategy advisory. This makes Optivantage a unique vendor — handling both physical IT infrastructure and AI capability building."
          }
        }
      ]
    }
  ]
};

const scope = [
  {
    icon: Network,
    title: "Network Infrastructure",
    items: ["LAN/WAN design and implementation", "SD-WAN setup and connectivity", "Enterprise WiFi design and deployment", "Network security: Fortinet / Palo Alto Networks"],
  },
  {
    icon: Server,
    title: "Passive Infrastructure",
    items: ["Structured cabling: Cat6, Cat6A", "Fibre optic cabling", "Cable management and trunking", "Server room / data room build"],
  },
  {
    icon: Package,
    title: "IT Equipment",
    items: ["Laptop rental or supply: Dell, HP, Lenovo", "Desktop and workstation supply", "Printer, peripherals, networking devices", "Annual Maintenance Contracts (AMC)"],
  },
  {
    icon: Building2,
    title: "Physical Security",
    items: ["CCTV and IP surveillance", "Biometric and card access control", "Visitor management systems", "Server room security"],
  },
  {
    icon: Server,
    title: "Power Infrastructure",
    items: ["Vertiv UPS supply and installation", "Precision cooling", "Power distribution units", "Server room electrical"],
  },
  {
    icon: Brain,
    title: "AI Readiness",
    items: ["Microsoft Copilot 365 training for GCC teams", "AI literacy for operational staff", "AI governance (ISO 42001)", "AI strategy advisory for GCC leadership"],
  },
];

const timeline = [
  { phase: "Week 1–2", activity: "Site assessment, network design, equipment specification, project plan" },
  { phase: "Week 2–4", activity: "Passive infrastructure: cabling, trunking, server room prep" },
  { phase: "Week 3–6", activity: "Active networking: switches, routers, WiFi, firewall" },
  { phase: "Week 5–8", activity: "Physical security: CCTV, access control, UPS" },
  { phase: "Week 6–10", activity: "IT equipment delivery, configuration, and deployment" },
  { phase: "Week 8–12", activity: "Testing, handover, documentation, AMC commencement" },
];

export default function GCCITSetupIndia() {
  return (
    <main className="min-h-screen">
      <Script id="gcc-setup-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">GCC IT Setup — India</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Complete IT Setup for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Your GCC in India.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Network. Cabling. Security. Equipment. AI Training.
            Everything your Global Capability Centre needs to go live — from a single vendor with 25 years
            of enterprise IT delivery experience.
          </p>
          <p className="text-gray-400 mb-8">
            Cisco Registered Partner · Fortinet Partner · Palo Alto Networks Partner · Vertiv Authorised Reseller.
            Pan-India delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2">
              Discuss Your GCC Project <ArrowRight size={18} />
            </Link>
            <Link href="/it-infrastructure-india" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              IT Infrastructure Details
            </Link>
          </div>
        </div>
      </section>

      {/* Why single vendor matters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why One Vendor for Your GCC IT?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "No Coordination Gaps", body: "When passive cabling, active networking, equipment, and security come from one vendor, there are no finger-pointing scenarios when something doesn't work." },
              { title: "Faster Go-Live", body: "Single project plan, single point of contact, single accountability. No waiting for three vendors to align their schedules." },
              { title: "Ongoing AMC", body: "One AMC contract covers your entire IT environment — network, equipment, and physical security. Simpler to manage, clearer escalation." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">What We Deliver for Your GCC</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">Infrastructure + Equipment + AI Training — all under one engagement.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scope.map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand/40 transition-colors">
              <s.icon className="text-brand mb-4" size={28} />
              <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                    <CheckCircle size={14} className="text-brand mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Typical timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Typical GCC IT Delivery Timeline</h2>
        <div className="space-y-4">
          {timeline.map((t) => (
            <div key={t.phase} className="flex gap-6 items-start bg-white/5 border border-white/10 rounded-xl px-6 py-4">
              <span className="text-brand font-semibold text-sm shrink-0 w-24">{t.phase}</span>
              <p className="text-gray-300 text-sm">{t.activity}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-4">* Timeline varies based on facility size, readiness, and scope. We provide a detailed project plan after site assessment.</p>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand/20 to-orange-400/10 border border-brand/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Planning a GCC in India?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us your location, headcount, timeline, and scope. We'll propose how we can take
            your GCC IT from blueprint to go-live.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all">
            Start the Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
