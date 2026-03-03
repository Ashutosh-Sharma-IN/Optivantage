import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  BrainCircuit,
  Server,
  ShieldCheck,
  Wrench,
  BarChart3,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI Advisory & Training",
      desc: "Leading enterprise AI transformation with hands-on training, certification programs and Agentic AI consulting.",
      icon: <BrainCircuit className="text-brand h-8 w-8" />,
      link: "/services/ai",
      details: ["AI for All - Basic AI Training & Awareness", "Microsoft Co-pilot Enterprise & Azure AI Deployment", "AI+ Certification Programs", "Agentic AI & Workflow Automation"]
    },
    {
      title: "IT Infrastructure Management",
      desc: "Reliable, scalable and secure IT foundations - from structured LAN to data centers and SD-WAN.",
      icon: <Server className="text-brand h-8 w-8" />,
      link: "/services/infrastructure",
      details: ["Structured LAN Setup (SITC - Active & Passive)", "SD-WAN Architecture, Deployment & Support", "Core/Server Room & Data Center Setup", "CCTV & Biometric Solutions"]
    },
    {
      title: "Managed IT Services",
      desc: "Always-on IT operations with expert support - from aviation IT specialists to managed service desk.",
      icon: <Wrench className="text-brand h-8 w-8" />,
      link: "/services/managed",
      details: ["Aviation IT Trained Engineers & Specialists", "24x7 L1 & L2 Remote and Onsite Support", "Service Integration & Management (SIAM)", "IT Equipment Rentals"]
    },
    {
      title: "Cybersecurity & Compliance",
      desc: "Protecting your enterprise with ISO-aligned security frameworks, penetration testing and compliance audits.",
      icon: <ShieldCheck className="text-brand h-8 w-8" />,
      link: "/services/cybersecurity",
      details: ["ISO 27001/27002 Compliance Audits", "SOX, GDPR, NIST Regulatory Compliance", "Security Monitoring & Incident Response", "Vulnerability Assessments & Penetration Testing"]
    },
    {
      title: "Process Improvement",
      desc: "Hands-on process improvement for Sales, Ops & CRM teams - diagnose gaps, redesign SOPs, enforce and sustain.",
      icon: <BarChart3 className="text-brand h-8 w-8" />,
      link: "/services/process",
      details: ["Diagnose the Gaps - Audit Workflows & Bottlenecks", "Redesign & Simplify - Streamline SOPs & Define Handoffs", "Enforce & Train - Set Ownership & Monitor Compliance", "Sustain & Improve - Track Metrics & Feedback Loops"]
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
          <div className="grid md:grid-cols-2 gap-8">
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
