import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | AI Training, IT Infrastructure & Equipment Rentals',
  description:
    'Three specialist services — AI Training & Advisory (Copilot 365, ChatGPT, ISO 42001), IT Infrastructure (Cisco, Fortinet, Palo Alto, Vertiv, structured cabling, SD-WAN), and IT Equipment & Rentals (laptops, desktops, AMC). Founder-led. Delhi, India.',
  keywords: [
    'AI training IT infrastructure Delhi', 'IT services India specialist',
    'Cisco Fortinet Vertiv partner India', 'enterprise IT services Delhi',
    'AI training infrastructure equipment India',
  ],
  alternates: { canonical: 'https://www.optivantage.in/services' },
  openGraph: {
    title: 'Our Services | AI Training, IT Infrastructure & Equipment Rentals | Optivantage',
    description: 'Three focused specialist services — AI Training, IT Infrastructure, and IT Equipment Rentals. Founder-led. Delhi, India.',
    url: 'https://www.optivantage.in/services',
    type: 'website',
  },
};
import {
  BrainCircuit,
  Server,
  Package,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI Training & Advisory",
      desc: "From building AI literacy across your workforce to designing your full AI implementation roadmap — including AI security & governance under ISO/IEC 42001.",
      icon: <BrainCircuit className="text-brand h-8 w-8" />,
      link: "/services/ai-training-advisory",
      details: [
        "Gen AI Literacy: Copilot, ChatGPT, Gemini, OpenAI",
        "AI Strategy, Use Case Prioritisation & Policy",
        "AI Security & Governance — ISO/IEC 42001 (Lead Implementer certified)",
        "AI Implementation Roadmap & Agentic AI Deployment",
        "AI+ Certified Training Programs (Everyone, Executive, Prompt Engineer, Ethics)"
      ]
    },
    {
      title: "IT Infrastructure",
      desc: "End-to-end network design, build, and field support. Passive cabling through to active networking, power infrastructure, and network security — delivered by certified partners.",
      icon: <Server className="text-brand h-8 w-8" />,
      link: "/services/it-infrastructure",
      details: [
        "Network Design & Architecture: LAN/WAN, SD-WAN, WiFi",
        "Passive Infrastructure: structured cabling, fibre, data centre build",
        "Active Networking: Cisco routers, switches, access points",
        "Network Security: Fortinet & Palo Alto Networks (NGFW, Zero Trust, VPN)",
        "Power & Electrical: Vertiv UPS, PDU & power distribution"
      ]
    },
    {
      title: "IT Equipment & Rentals",
      desc: "Supply, rent, and maintain enterprise IT compute for GCC setups, events, projects, or long-term needs — with flexible terms and AMC support.",
      icon: <Package className="text-brand h-8 w-8" />,
      link: "/services/it-equipment-rentals",
      details: [
        "Laptops, Desktops & Workstations (Dell, HP, Lenovo, Apple)",
        "Printers, Peripherals & Networking Devices",
        "UPS & Power Equipment (Vertiv)",
        "Short-term & Long-term Equipment Rentals",
        "Annual Maintenance Contracts (AMC) & Lifecycle Management"
      ]
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-text-muted">
            Three focused areas. Deep expertise in each. No generalism.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-navy-900 border border-white/5 hover:border-brand/50 rounded-xl p-8 transition-all group flex flex-col">
                <div className="mb-6 p-4 bg-navy-800 rounded-lg inline-block group-hover:bg-brand/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-text-muted mb-6">{service.desc}</p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {service.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle2 size={14} className="text-brand flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={service.link} className="inline-flex items-center text-brand font-semibold hover:underline mt-auto">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-navy-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
        <p className="text-text-muted mb-8 max-w-2xl mx-auto">
          Every engagement starts with a conversation. Tell us your challenge and we'll tell you honestly whether and how we can help.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all"
        >
          Schedule a Free Consultation
        </Link>
      </section>
    </main>
  );
}
