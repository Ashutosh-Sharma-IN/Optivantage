import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Users, Zap, Globe, Shield, Server, Network, Brain, Wrench, Headphones, Rocket, Briefcase, Plane, Package } from 'lucide-react';
import LogosSection from '@/components/LogosSection';
import WhyOptivantage from '@/components/WhyOptivantage';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import AdsBanner from '@/components/AdsBanner';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Optivantage | AI Training, IT Infrastructure & Equipment Rentals | India',
  description: 'Optivantage Technologies — specialist AI training (Copilot 365, ChatGPT, ISO 42001), IT infrastructure (Cisco, Fortinet, Vertiv), and IT equipment rentals. Founder-led. 25 years enterprise IT expertise at BT, Telstra, and SITA. 1,000+ professionals trained. Pan-India and online.',
  keywords: [
    'AI training India',
    'AI consulting Delhi',
    'Microsoft Copilot training',
    'ChatGPT implementation',
    'ISO 42001 AI governance',
    'AI strategy consulting India',
    'Generative AI training Delhi',
    'AI implementation services',
    'Enterprise AI coaching',
    'AI transformation India',
    'Telecom AI consulting',
    'Aviation IT AI training',
    'AI ethics training India',
    'Machine learning consulting Delhi',
    'AI governance framework'
  ],
  authors: [{ name: 'Ashutosh Sharma', url: 'https://www.optivantage.in' }],
  creator: 'Ashutosh Sharma',
  publisher: 'Optivantage Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.optivantage.in'),
  alternates: {
    canonical: 'https://www.optivantage.in',
  },
  openGraph: {
    title: 'AI Training & Consulting India | Microsoft Copilot, ISO 42001 | Optivantage',
    description: 'Expert AI training & consulting in India. Microsoft Copilot 365, ChatGPT, ISO 42001 governance. 25+ years enterprise IT experience. Pan-India and online. International AI training engagements available.',
    url: 'https://www.optivantage.in',
    siteName: 'Optivantage',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/founder.png',
        width: 1200,
        height: 630,
        alt: 'Ashutosh Sharma - AI Training & Consulting Expert, Optivantage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Training & Consulting India | Microsoft Copilot, ISO 42001',
    description: 'Expert AI training & consulting in India. Microsoft Copilot 365, ChatGPT, ISO 42001 governance. 25+ years enterprise IT experience.',
    images: ['/founder.png'],
    creator: '@optivantage_in',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What AI training services does Optivantage offer in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Optivantage offers enterprise AI training across Microsoft Copilot 365, ChatGPT, Google Gemini, Agentic AI, and ISO/IEC 42001 AI governance. Programs cover AI literacy, prompt engineering, AI strategy, and hands-on implementation — delivered in-person across India and online."
      }
    },
    {
      "@type": "Question",
      "name": "Does Optivantage provide AI training for telecom and aviation teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Optivantage founder Ashutosh Sharma has 25+ years of enterprise IT operations experience at BT (telecom), Telstra (telecom), and SITA (aviation IT). The firm delivers AI training tailored to the workflows, compliance requirements, and terminology of telecom, aviation, and airport operations teams."
      }
    },
    {
      "@type": "Question",
      "name": "What IT infrastructure services does Optivantage provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Optivantage designs and delivers end-to-end IT infrastructure: LAN/WAN network design, SD-WAN, enterprise WiFi, structured cabling, fibre optic cabling, data centre build, CCTV and access control, and power infrastructure using Vertiv UPS. Cisco registered partner, Fortinet and Palo Alto Networks partner."
      }
    },
    {
      "@type": "Question",
      "name": "Can I rent laptops or workstations for a corporate project or GCC setup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Optivantage supplies and rents Dell, HP, and Lenovo laptops, desktops, workstations, printers, and networking gear for corporate projects, GCC setup, training events, and long-term deployments pan-India. Annual Maintenance Contracts (AMC) are also available."
      }
    },
    {
      "@type": "Question",
      "name": "Is Optivantage an ISO 42001 AI governance consultant in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Optivantage is an ISO/IEC 42001 AI Management System implementation consultant in India. The firm helps organisations assess readiness, design AI governance policies, prepare for certification, and train leadership and teams on AI ethics and responsible AI practices."
      }
    }
  ]
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
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageFaqSchema),
        }}
      />
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
            Optivantage Technologies is a specialist enterprise IT firm based in India, offering AI training and advisory, IT infrastructure design and build, and IT equipment supply and rentals. Founder-led by Ashutosh Sharma with 25 years of enterprise IT experience at BT, Telstra, and SITA — 1,000+ professionals trained, pan-India and online.
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

      {/* Featured Ads Section - Prime Position */}
      <AdsBanner />

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

      {/* AI Automation Portfolio Banner */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-t-2 border-brand">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-brand font-mono text-xs tracking-widest uppercase mb-3">New · AI Automation & Agentic AI</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              28+ Production Pipelines.<br className="hidden md:block" />
              <span className="text-brand">Built. Delivered. Battle-tested.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
              B2B sales intelligence, self-healing agents, agentic AI, voice AI, document processing — all on Make.com. See the full portfolio of production builds.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <Link
              href="/ai-automation"
              className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              View AI Automation Portfolio <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all text-center whitespace-nowrap"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* AI Training Spotlight */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured AI Training Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI training designed to answer your most pressing questions about AI implementation in India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/ai-training-guide" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete AI Training Guide</h3>
                <p className="text-gray-600 mb-4">
                  Everything you need to know about AI training in India - from costs to certifications, programs to career opportunities.
                </p>
                <div className="text-blue-600 font-medium group-hover:text-blue-700">
                  Read the Complete Guide →
                </div>
              </div>
            </Link>

            <Link href="/microsoft-copilot-training" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Microsoft Copilot 365 Training</h3>
                <p className="text-gray-600 mb-4">
                  Master AI-powered productivity tools. Learn Copilot integration across Microsoft 365 for enhanced workflow automation.
                </p>
                <div className="text-purple-600 font-medium group-hover:text-purple-700">
                  Start Learning Copilot →
                </div>
              </div>
            </Link>

            <Link href="/iso-42001-training" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ISO 42001 AI Governance</h3>
                <p className="text-gray-600 mb-4">
                  Learn AI ethics, risk management, and compliance frameworks for responsible AI implementation.
                </p>
                <div className="text-green-600 font-medium group-hover:text-green-700">
                  Master AI Governance →
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/services/ai-training-advisory" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              <Globe className="h-5 w-5 mr-2" />
              AI Training — India &amp; Online
            </Link>
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

      <ExitIntentPopup />
    </main>
  );
}

