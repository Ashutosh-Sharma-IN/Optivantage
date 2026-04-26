import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Users, Zap, Globe, Shield, Server, Network, Brain, Wrench, Headphones, Rocket, Briefcase, Plane, Package } from 'lucide-react';
import LogosSection from '@/components/LogosSection';
import WhyOptivantage from '@/components/WhyOptivantage';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import AdsBanner from '@/components/AdsBanner';
import AdAnalytics from '@/components/AdAnalytics';

export const metadata: Metadata = {
  title: 'Optivantage | AI Training, IT Infrastructure & Equipment Rentals | Delhi, India',
  description:
    'Optivantage Technologies — specialist AI training (Microsoft Copilot 365, ChatGPT, ISO/IEC 42001 governance), IT infrastructure (Cisco, Fortinet, Palo Alto, Vertiv), and IT equipment rentals. Founder-led. 25 years expertise. 1,000+ professionals trained across BIAL, Kotak Mahindra, Hexaware. Delhi, India.',
  alternates: { canonical: 'https://www.optivantage.in' },
  openGraph: {
    title: 'Optivantage | AI Training, IT Infrastructure & Equipment Rentals',
    description:
      'Specialist AI training, network infrastructure, and IT equipment rentals. Cisco & Vertiv authorised partner. 25 years expertise. Founder-led. Delhi, India.',
    url: 'https://www.optivantage.in',
    type: 'website',
  },
};

const services = [
  {
    icon: Brain,
    title: "AI Training & Advisory",
    href: "/services/ai-training-advisory",
    description: "From building AI literacy across your teams to designing your full AI implementation roadmap — including AI security & governance (ISO 42001).",
    features: [
      "Gen AI literacy: Copilot, ChatGPT, Gemini, OpenAI",
      "AI Strategy, Policy & Governance (ISO/IEC 42001)",
      "AI Implementation Roadmap & Agentic AI",
      "AI+ Certified Training Programs"
    ]
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    href: "/services/it-infrastructure",
    description: "End-to-end network design, build, and field support — passive cabling to active networking, with power infrastructure and network security built in.",
    features: [
      "Network Design, LAN/WAN, SD-WAN, WiFi",
      "Passive Infrastructure: cabling, fibre, data centre",
      "Network Security: Fortinet & Palo Alto Networks",
      "Power & Electrical: Vertiv (authorised reseller)"
    ]
  },
  {
    icon: Package,
    title: "IT Equipment & Rentals",
    href: "/services/it-equipment-rentals",
    description: "Supply, rent, and maintain enterprise IT compute — desktops, laptops, workstations, printers, and networking gear for projects, events, or long-term needs.",
    features: [
      "Laptops, Desktops, Workstations (Dell, HP, Lenovo)",
      "Printers, Peripherals & Networking Devices",
      "Short-term & Long-term Equipment Rentals",
      "Annual Maintenance Contracts (AMC)"
    ]
  }
];

const partners = [
  { name: 'Cisco', logo: '/logos/Cisco logo.webp', badge: 'Registered Partner' },
  { name: 'Fortinet', logo: '/logos/Fortinet logo.png', badge: 'Partner' },
  { name: 'Palo Alto Networks', logo: '/logos/Palo Alto networks logo.png', badge: 'Partner' },
  { name: 'Vertiv', logo: '/logos/Liebert Vertiv Logo.png', badge: 'Authorised Reseller' },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            AI. Infrastructure.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Equipment.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand font-semibold mb-4">
            Three things we do exceptionally well.
          </p>
          <p className="text-lg text-text-muted mb-10 leading-relaxed max-w-3xl mx-auto">
            We help enterprises adopt AI safely, build resilient networks, and equip teams to deliver —
            with 25 years of battle-tested expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
              Start a Conversation <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              Our Services
            </Link>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10">
          <div className="text-center">
            <div className="text-4xl font-bold text-white">25+</div>
            <div className="text-sm text-text-muted mt-1">Years IT Expertise</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">1000+</div>
            <div className="text-sm text-text-muted mt-1">Trained in AI across Enterprises</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">15+</div>
            <div className="text-sm text-text-muted mt-1">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">3</div>
            <div className="text-sm text-text-muted mt-1">Focused Areas. Zero Generalism.</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Three Service Areas</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We made a deliberate choice to go deep, not wide. Every engagement is founder-led, not delegated to junior consultants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5 flex flex-col"
                >
                  <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-5">
                    <IconComponent className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-text-muted text-sm mb-5 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-text-muted">
                        <CheckCircle className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="inline-flex items-center text-brand font-semibold hover:underline mt-auto">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Copilot 365 Course Banner */}
      <section className="py-12 px-4 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#0078D4]/10 to-brand/10 border border-[#0078D4]/30 rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/5 to-transparent pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="bg-white rounded-xl p-3 shadow-md">
                  <Image src="/platforms/Microsoft Logo.jpg" alt="Microsoft" width={80} height={32} className="object-contain h-8 w-auto" />
                </div>
                <span className="text-white/40 text-2xl font-light">×</span>
                <div className="bg-white rounded-xl p-3 shadow-md">
                  <Image src="/logo.png" alt="Optivantage" width={80} height={32} className="object-contain h-8 w-auto" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-3 py-1 mb-3">
                  <span className="text-brand text-xs font-semibold">New · Live Course</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Master Microsoft Copilot 365 — In 4 Weekends</h3>
                <p className="text-text-muted text-sm">
                  20 hours · 22 modules · Small cohorts · Role playbooks · Certificate. Taught by an accredited Microsoft & Google AI trainer.
                </p>
              </div>
              <Link
                href="/training/copilot-365"
                className="flex-shrink-0 px-6 py-3 bg-[#0078D4] hover:bg-[#006CBE] text-white font-semibold rounded-lg transition-all flex items-center gap-2 text-sm whitespace-nowrap"
              >
                See Course Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-14 px-4 bg-navy-900 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
            Technology Partners & Authorised Resellers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-3">
                <div className="bg-white rounded-xl p-4 w-full flex items-center justify-center h-20 shadow-sm">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={60}
                    className="object-contain h-10 w-auto"
                  />
                </div>
                <span className="text-xs text-brand font-semibold text-center">{partner.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Optivantage inline cards */}
      <section className="py-20 bg-navy-800 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Optivantage?</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We're not consultants who've only read the playbook. We've lived it — running operations for global enterprises across telecom, aviation, and banking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI From Training to Governance</h3>
              <p className="text-text-muted">
                We cover the full AI journey — from building literacy across your teams to ISO/IEC 42001 AI governance. Certified Microsoft & Google AI trainer. 1000+ professionals trained.
              </p>
            </div>

            <div className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Server className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure Built to Enterprise Standard</h3>
              <p className="text-text-muted">
                Cisco Registered Partner. Vertiv Authorised Reseller. Fortinet & Palo Alto Networks. We design and build infrastructure that runs — from passive cabling to network security.
              </p>
            </div>

            <div className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Specialists. Not Generalists.</h3>
              <p className="text-text-muted">
                Three focused services — not twenty. Every engagement is led by the founder, backed by 25 years of running enterprise IT for BT, Telstra, and SITA. You get the expert, not a junior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTIONS */}
      <LogosSection />
      <WhyOptivantage />
      <AdsBanner />

      {/* Analytics Section (for development/testing) */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <details className="bg-white rounded-lg shadow">
            <summary className="cursor-pointer p-4 font-semibold text-gray-800 hover:bg-gray-50">
              📊 Ad Performance Analytics (Click to expand)
            </summary>
            <div className="p-4 border-t">
              <AdAnalytics />
            </div>
          </details>
        </div>
      </section>

      <ExitIntentPopup />
    </main>
  );
}

