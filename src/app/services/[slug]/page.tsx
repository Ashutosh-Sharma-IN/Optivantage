"use client";
import { useParams, Link } from 'next/navigation'; // Note: use 'next/navigation' in App Router
import Navbar from '@/components/Navbar';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Wrench, BrainCircuit, Server, BarChart3, Phone } from 'lucide-react';

// Define all your service content here
const servicesData: any = {
  ai: {
    title: "AI Advisory & Training",
    icon: <BrainCircuit className="text-brand h-10 w-10" />,
    problem: "Enterprise teams are struggling to adopt AI securely and effectively. Most technical teams lack practical skills, and business leaders lack strategic governance.",
    solution: "We deploy self-healing agents and automation workflows. We provide AI+ Certified Training for Everyone, Executives, and Engineers to ensure organizational adoption.",
    outcome: "Organizations achieve measurable ROI in 90 days. Technical teams reduce development time by 40-60%, and shadow AI incidents drop by 70%."
  },
  infrastructure: {
    title: "IT Infrastructure",
    icon: <Server className="text-brand h-10 w-10" />,
    problem: "Static capacity planning leading to over/under-provisioning and reactive scaling causing performance degradation.",
    solution: "We use Ekahau Pro for RF Heat Mapping and SD-WAN architecture for dual-link resilience. We manage Core Room setup and Structured Cabling.",
    outcome: "Predictive accuracy of ±5%. 98% scanner uptime in logistics warehouses. 50% latency reduction in retail sites."
  },
  managed: {
    title: "Managed IT Services",
    icon: <Wrench className="text-brand h-10 w-10" />,
    problem: "Manual incident detection and 4-hour mean time to detect (MTTD). High false-positive rates overwhelming NOC teams.",
    solution: "24/7 L1-L3 Support following ITIL Framework. We build offshore BOT models for cost-effective delivery and use ServiceNow/JIRA.",
    outcome: "60% reduction in MTTD. 30% cost savings. 24/7/365 coverage across time zones."
  },
  cybersecurity: {
    title: "Cybersecurity & Compliance",
    icon: <ShieldCheck className="text-brand h-10 w-10" />,
    problem: "10,000+ security alerts daily overwhelming SOC teams. 95% false-positive rate causing alert fatigue.",
    solution: "ML-Driven Detection using Random Forest and Deep Neural Networks. SOAR Integration and NLP Chatbot for L1 automation.",
    outcome: "80% detection accuracy. 50% reduction in false positives. 45% reduction in handling time."
  },
  process: {
    title: "Process Improvement",
    icon: <BarChart3 className="text-brand h-10 w-10" />,
    problem: "Broken processes causing lack of clarity, accountability gaps, and messy operations.",
    solution: "I Fix Broken Processes. We Diagnose Gaps, Redesign SOPs, Enforce Rules, and Sustain Improvements.",
    outcome: "Turn your messy operations into best practices. Increased accountability and clarity across Sales, Ops, and CRM teams."
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug as string];

  // Fallback if service not found
  if (!service) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-center px-4">
          <h1 className="text-2xl text-white mb-4">Service Not Found</h1>
          <Link href="/services" className="text-brand underline">Back to Services</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      
      {/* Top Header with Back Button */}
      <section className="pt-32 pb-12 px-4 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="inline-flex items-center text-text-muted hover:text-brand mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Services
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-navy-800 rounded-xl border border-white/5">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Problem */}
          <div className="bg-navy-900 p-8 rounded-xl border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <AlertTriangle className="text-red-500" /> The Problem
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              {service.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-navy-900 p-8 rounded-xl border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <CheckCircle2 className="text-green-500" /> The Solution
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              {service.solution}
            </p>
          </div>

          {/* Outcome */}
          <div className="bg-navy-900 p-8 rounded-xl border-l-4 border-brand">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <CheckCircle2 className="text-brand" /> The Outcome
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              {service.outcome}
            </p>
          </div>
          
        </div>
      </section>

      {/* Customer Logos (Visible on every service page) */}
      <section className="py-16 px-4 bg-navy-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-bold text-text-muted uppercase tracking-widest mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-75 hover:opacity-100 transition-all">
            {/* Replace <span> with actual Image tags when ready */}
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
               <span className="text-text-muted font-bold">Infogain</span>
            </div>
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
               <span className="text-text-muted font-bold">Hexaware</span>
            </div>
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
               <span className="text-text-muted font-bold">Kotak Bank</span>
            </div>
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
               <span className="text-text-muted font-bold">MSME India</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 bg-navy-800 text-center">
         <h2 className="text-2xl font-bold text-white mb-4">Ready to discuss?</h2>
         <Link href="/contact" className="inline-block px-8 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg">
            Contact Us
         </Link>
      </section>

    </main>
  );
}
