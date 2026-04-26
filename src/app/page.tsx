import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Zap, Globe, Shield, Server, Network, Brain, Wrench, Headphones, Rocket, Briefcase, Plane } from 'lucide-react';
import LogosSection from '@/components/LogosSection';
import WhyOptivantage from '@/components/WhyOptivantage';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import AdsBanner from '@/components/AdsBanner';
import AdAnalytics from '@/components/AdAnalytics';

const services = [
  {
    icon: Brain,
    title: "AI Advisory & Training",
    href: "/services/ai",
    features: [
      "AI Strategy Development & Consulting",
      "Generative AI Training Programs (Microsoft, Google)",
      "Agentic AI deployment and support",
      "Go-to-market strategy for AI/SaaS products"
    ]
  },
  {
    icon: Server,
    title: "IT & Network Infrastructure",
    href: "/services/infrastructure",
    features: [
      "IT Infrastructure deployment, support & maintenance",
      "End user devices support and rentals (Laptops, Servers)",
      "LAN/WAN architecture, Firewall, VPN & router configuration",
      "Structured cabling, data center setup & network performance"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    href: "/services/cybersecurity",
    features: [
      "ISO 27001/27002 Implementation & Certification",
      "Security Risk Assessment & Audit",
      "Compliance Management (SOX, GDPR, NIST)",
      "Continuous Security Monitoring"
    ]
  },
  {
    icon: Headphones,
    title: "Managed Services & Process Improvement",
    href: "/services/managed",
    features: [
      "L1-L3 Support: Helpdesk, troubleshooting & infrastructure management",
      "Technical Field Engineering & onsite support",
      "Process diagnosis, redesign & optimization",
      "Patch management, monitoring & preventive maintenance"
    ]
  }
];
export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
  Enterprise IT Operations Meets{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">AI Innovation</span>
</h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
  50+ years combined experience running enterprise networks for BT, Telstra, SITA & global airlines.
  <br />
  <span className="text-white font-semibold">Now helping businesses transform with AI implementation, training & managed IT services.</span>
</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
              Start Transformation <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              Our Services
            </Link>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10">
          <div className="text-center">
            <Briefcase className="h-8 w-8 text-brand mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">50+</div>
            <div className="text-sm text-text-muted">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <Globe className="h-8 w-8 text-brand mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">Global</div>
            <div className="text-sm text-text-muted">Airlines, Airports & Fortune 500 Networks Managed</div>
          </div>
          <div className="text-center">
            <Plane className="h-8 w-8 text-brand mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">20+</div>
            <div className="text-sm text-text-muted">Years Aviation IT</div>
          </div>
          <div className="text-center">
            <Brain className="h-8 w-8 text-brand mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">AI Ready</div>
            <div className="text-sm text-text-muted">Training & Implementation</div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Optivantage?</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We're not consultants who've only read the playbook. We've lived it - running service operations for the world's largest telecom and aviation enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Network className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Network DNA</h3>
              <p className="text-text-muted">
                25+ years managing B2B service operations at BT, Telstra, and SITA. Service design, delivery, desk operations, and technical management at scale.
              </p>
            </div>

            <div className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Plane className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Aviation IT Expertise</h3>
              <p className="text-text-muted">
                20+ years in airlines IT - customer support, field engineering, projects and program management. We understand mission-critical systems.
              </p>
            </div>

            <div className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Future</h3>
              <p className="text-text-muted">
                Already delivering AI training for corporates. Now expanding into AI implementation, consulting, and helping businesses leverage Generative AI for real results.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Comprehensive IT solutions tailored for enterprise needs - from cybersecurity to AI transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-navy-800 p-6 rounded-xl border border-white/5 hover:border-brand/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5"
                >
                  <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">{service.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-text-muted">
                        <CheckCircle className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="inline-flex items-center text-brand font-semibold hover:underline">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all"
            >
              View All Services <ArrowRight size={20} />
            </Link>
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

