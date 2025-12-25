import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { 
  BrainCircuit, 
  Server, 
  ShieldCheck, 
  BarChart3, 
  Wrench, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI Advisory & Training",
      desc: "Leading enterprise AI transformation with hands-on training programs for Fortune 500 companies.",
      icon: <BrainCircuit className="text-brand h-8 w-8" />,
      link: "/services/ai", // Create this detailed page later if needed
      details: ["AI+ Certification Programs", "Microsoft Copilot & Azure", "Google Gemini Ecosystem"]
    },
    {
      title: "IT Infrastructure",
      desc: "25 years of proven expertise in network optimization, equipment management, and SITC deployment.",
      icon: <Server className="text-brand h-8 w-8" />,
      link: "/services/infrastructure",
      details: ["WiFi RF Engineering", "SD-WAN Architecture", "Core Room Setup"]
    },
    {
      title: "Managed IT Services",
      desc: "24/7 L1-L3 support following ITIL framework with specialized aviation IT expertise.",
      icon: <Wrench className="text-brand h-8 w-8" />,
      link: "/services/managed",
      details: ["24/7 L1-L3 Support", "ServiceNow & JIRA", "Offshore BOT Model"]
    },
    {
      title: "Cybersecurity & Compliance",
      desc: "Protecting your enterprise with NIST-aligned security frameworks and SOC operations.",
      icon: <ShieldCheck className="text-brand h-8 w-8" />,
      link: "/services/cybersecurity",
      details: ["NIST Framework", "SOC Operations", "Compliance Audits"]
    },
    {
      title: "Process Improvement",
      desc: "I Fix Broken Processes. Clarity, Accountability, and Results for your operations.",
      icon: <BarChart3 className="text-brand h-8 w-8" />,
      link: "/services/process",
      details: ["Diagnose Gaps", "Redesign & Simplify", "Enforce & Train"]
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Services</h1>
          <p className="text-xl text-text-muted">
            Comprehensive solutions designed to solve complex enterprise challenges.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-navy-900 border border-white/5 hover:border-brand/50 rounded-xl p-8 transition-all group">
                <div className="mb-6 p-4 bg-navy-800 rounded-lg inline-block group-hover:bg-brand/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-text-muted mb-6 h-20">{service.desc}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.details.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                      <CheckCircle2 size={14} className="text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={service.link} className="inline-flex items-center text-brand font-semibold hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-navy-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Not sure what you need?</h2>
        <p className="text-text-muted mb-8 max-w-2xl mx-auto">
          Let's discuss your specific challenges. We provide bespoke solutions for Sales, Operations, and CRM teams.
        </p>
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all"
        >
          Schedule Consultation
        </Link>
      </section>
    </main>
  );
}
