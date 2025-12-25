"use client";
import { useParams, Link } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Wrench, BrainCircuit, Server, BarChart3, Zap, Globe, Lock } from 'lucide-react';

// --- DATA DEFINITIONS (Based on your provided HTML) ---

const servicesData: any = {
  ai: {
    title: "AI Advisory & Training",
    icon: <BrainCircuit className="text-brand h-10 w-10" />,
    sections: [
      {
        title: "The Problem",
        subtitle: "Enterprise teams are struggling to adopt AI securely and effectively.",
        type: "alert",
        content: (
          <ul className="space-y-2 text-text-muted">
            <li>• Technical teams lack practical skills in prompt engineering and model optimization.</li>
            <li>• Business leaders don't understand AI's strategic implications and governance.</li>
            <li>• No sustainable governance framework exists for responsible deployment.</li>
            <li>• Result: Shadow AI usage, security vulnerabilities, and failed pilots.</li>
          </ul>
        )
      },
      {
        title: "The Outcome",
        subtitle: "Organizations achieve measurable ROI within 90 days.",
        type: "success",
        content: (
          <div className="grid grid-cols-2 gap-4 mt-4">
             <div className="bg-navy-800 p-4 rounded-lg border border-white/5">
               <p className="text-brand font-bold">40-60%</p>
               <p className="text-sm text-text-muted">Reduction in Dev Time</p>
             </div>
             <div className="bg-navy-800 p-4 rounded-lg border border-white/5">
               <p className="text-brand font-bold">70%</p>
               <p className="text-sm text-text-muted">Reduced Shadow AI Incidents</p>
             </div>
          </div>
        )
      }
    ]
  },
  infrastructure: {
    title: "IT Infrastructure",
    icon: <Server className="text-brand h-10 w-10" />,
    sections: [
      {
        title: "Our Infrastructure Services",
        type: "bento-grid",
        items: [
          { title: "SITC Deployment & Support", desc: "End-to-end project management, Hardware and software integration, Comprehensive testing protocols, Documentation and knowledge transfer, Post-deployment support.", icon: <Zap className="text-brand"/> },
          { title: "IT Equipment Rentals", desc: "Laptops, desktops, servers, networking equipment. Flexible rental terms (short-term to long-term), Maintenance included.", icon: <Globe className="text-brand"/> },
          { title: "AMC & Repair Services", desc: "Preventive maintenance programs, Break-fix repair services, Hardware diagnostics and troubleshooting, Component replacement and upgrades.", icon: <Wrench className="text-brand"/> },
          { title: "Core Room Setup & Data Center", desc: "Physical infrastructure design, Power and cooling systems, Structured cabling, Rack and cabinet setup.", icon: <Server className="text-brand"/> },
          { title: "LAN/WAN/WiFi Architecture", desc: "Network topology design, LAN switching and routing, WAN connectivity (MPLS, SD-WAN), Wireless network design (WiFi 6/6E).", icon: <Globe className="text-brand"/> },
        ]
      },
      {
        title: "Network Optimization Expertise",
        type: "bento-grid-2",
        items: [
          { title: "WiFi RF Engineering & Site Surveys", desc: "Expert RF optimization using industry-leading Ekahau tools.", 
            details: ["Comprehensive Site Surveys: Predictive and active surveys", "RF Heat Mapping: Detailed coverage analysis", "AP Density Optimization: Right-sizing deployment", "Channel Planning: Minimizing interference", "Power Optimization: Fine-tuning levels", "Roaming Analysis: Seamless optimization"],
            highlight: "15 warehouse WiFi optimization achieved 98% scanner uptime and 25% reduction in operational disruptions."
          },
          { title: "SD-WAN Architecture & Deployment", desc: "Modern WAN solutions for distributed enterprise networks.",
            details: ["SD-WAN Design: Application-aware routing", "Multi-Link Strategy: Dual internet links", "QoS Implementation: Priority handling", "Zero-Touch Provisioning: Automated deployment", "Centralized Management: Single pane of glass", "Security Integration: Built-in firewall"],
            highlight: "200+ retail site SD-WAN migration delivered 50% latency reduction and 40% OpEx savings."
          },
        ]
      },
      {
        title: "Network Capacity Planning & Forecasting",
        type: "value-card",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
             <div>
                <h4 className="text-brand font-bold mb-2">Planning</h4>
                <ul className="space-y-2 text-text-muted"><li>Baseline capacity assessment</li><li>Growth trend analysis</li><li>Demand forecasting</li></ul>
             </div>
             <div>
                <h4 className="text-brand font-bold mb-2">Optimization</h4>
                <ul className="space-y-2 text-text-muted"><li>Resource utilization analysis</li><li>Bottleneck identification</li><li>Performance tuning</li></ul>
             </div>
             <div>
                <h4 className="text-brand font-bold mb-2">Monitoring</h4>
                <ul className="space-y-2 text-text-muted"><li>Real-time capacity dashboards</li><li>Threshold alerting</li><li>Capacity reporting</li></ul>
             </div>
          </div>
        )
      },
      {
        title: "Technology Expertise",
        type: "pillars-grid",
        items: [
          "Cisco Networks (Switches, routers, Meraki)",
          "Aruba Networks (Enterprise WiFi, SD-WAN)",
          "Ekahau (Professional WiFi site survey)",
          "VMware SD-WAN (VeloCloud platform)",
          "Dell EMC (Servers, storage, data center)"
        ]
      }
    ]
  },
  managed: {
    title: "Managed IT Services",
    icon: <Wrench className="text-brand h-10 w-10" />,
    sections: [
      {
        title: "Our Managed Services",
        type: "bento-grid",
        items: [
          { title: "24/7 L1 to L3 Support", desc: "Service desk, incident logging, password resets. Technical troubleshooting, problem diagnosis. Advanced technical resolution, root cause analysis. 24/7/365 coverage.", icon: <Wrench className="text-brand"/> },
          { title: "Service Management & ITSM", desc: "Incident management and tracking, Problem management and resolution, Change management and CAB, Service request fulfillment.", icon: <CheckCircle2 className="text-brand"/> },
          { title: "Offshore BOT Model Delivery", desc: "Establish dedicated offshore teams, Process documentation and training, Quality assurance and governance, Cost optimization (40-60% savings).", icon: <Globe className="text-brand"/> },
        ]
      },
      {
        title: "Aviation IT Engineers & Specialists",
        type: "value-card",
        content: (
           <div className="space-y-6">
             <div>
                <h4 className="text-brand font-bold mb-2">SITA</h4>
                <ul className="space-y-2 text-text-muted"><li>Airport operations systems support</li><li>Passenger processing systems (DCS)</li><li>Baggage handling IT infrastructure</li><li>24/7 mission-critical support</li></ul>
             </div>
             <div>
                <h4 className="text-brand font-bold mb-2">Amadeus</h4>
                <ul className="space-y-2 text-text-muted"><li>Reservation and ticketing systems</li><li>Check-in system support</li><li>Departure control systems</li><li>Airport IT operations</li></ul>
             </div>
             <div>
                <h4 className="text-brand font-bold mb-2">Collins Aerospace</h4>
                <ul className="space-y-2 text-text-muted"><li>Flight operations technology</li><li>Communication systems</li><li>Navigation and surveillance IT</li><li>Aircraft connectivity solutions</li></ul>
             </div>
           </div>
        )
      },
      {
        title: "Process Improvement & Operational Excellence",
        subtitle: "I Fix Broken Processes - Clarity • Accountability • Results",
        type: "value-card-4",
        items: [
          { num: "1", title: "Diagnose Gaps", desc: "Identify bottlenecks and inefficiencies, Root cause analysis, Process mapping and documentation, Stakeholder interviews." },
          { num: "2", title: "Redesign & Simplify", desc: "Streamline workflows, Eliminate redundant steps, Automate repetitive tasks, Define clear ownership." },
          { num: "3", title: "Enforce & Train", desc: "Implement new processes, Team training and enablement, Change management support, Tool and system configuration." },
          { num: "4", title: "Sustain & Improve", desc: "Monitor performance metrics, Continuous improvement cycles, Regular process audits, Feedback loops and refinement." }
        ]
      },
      {
        title: "Service Delivery Models",
        type: "pillars-grid",
        items: ["Dedicated Teams", "Shared Services", "Hybrid Model", "Project-Based"]
      }
    ]
  },
  cybersecurity: {
    title: "Cybersecurity & Compliance",
    icon: <ShieldCheck className="text-brand h-10 w-10" />,
    sections: [
      {
        title: "Compliance Frameworks",
        type: "bento-grid-2",
        items: [
          { title: "ISO 27001/27002", desc: "Information Security Management System implementation and certification.", details: ["Gap analysis and risk assessment", "ISMS framework design", "Policy and procedure development", "Certification preparation"] },
          { title: "SOX, GDPR & NIST", desc: "Multi-framework compliance expertise.", details: ["SOX: IT controls for financial reporting", "GDPR: Data protection and privacy", "NIST: Cybersecurity framework", "Compliance gap assessments"] }
        ]
      },
      {
        title: "Security Services",
        type: "bento-grid",
        items: [
          { title: "Security Monitoring", desc: "24/7 SOC operations, SIEM implementation, Threat detection and analysis, Real-time alerting.", icon: <Lock className="text-brand"/> },
          { title: "Vulnerability Assessment", desc: "Automated vulnerability scanning, Penetration testing, Security posture assessment, Remediation planning.", icon: <AlertTriangle className="text-brand"/> },
          { title: "Incident Response", desc: "Incident response planning, Security incident handling, Forensic analysis, Breach containment.", icon: <ShieldCheck className="text-brand"/> }
        ]
      }
    ]
  },
  process: {
    title: "Process Improvement",
    icon: <BarChart3 className="text-brand h-10 w-10" />,
    sections: [
      {
        title: "Transform Your Operations",
        type: "value-card",
        content: <p className="text-text-muted">Target Teams: Sales, Operations & CRM Teams. Turn your messy operations into best practices.</p>
      },
       {
        title: "Service Delivery Models", // Reusing logic for structure
        type: "pillars-grid",
        items: ["Dedicated Teams", "Shared Services", "Hybrid Model", "Project-Based"]
      }
    ]
  }
};

// --- COMPONENTS ---

const BentoGrid = ({ items }: any) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((item: any, i: number) => (
      <div key={i} className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-all">
        <div className="mb-4 p-4 bg-navy-800 rounded-lg inline-block w-fit">
          {item.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
        {item.desc && <p className="text-text-muted mb-6">{item.desc}</p>}
        {item.details && (
          <ul className="space-y-2 text-text-muted mb-6">
            {item.details.map((d: string, di: number) => (
              <li key={di} className="flex gap-2 text-sm"><span className="text-brand">•</span> {d}</li>
            ))}
          </ul>
        )}
        {item.highlight && (
          <div className="mt-6 p-4 bg-brand/10 rounded-lg border border-brand/20">
            <h4 className="text-white font-bold mb-1">Case Study Result</h4>
            <p className="text-sm text-text-muted">{item.highlight}</p>
          </div>
        )}
      </div>
    ))}
  </div>
);

const ValueCard = ({ title, subtitle, content, type }: any) => (
  <div className={`bg-navy-900 p-8 rounded-xl border-l-4 ${type === 'alert' ? 'border-red-500' : type === 'success' ? 'border-green-500' : 'border-brand'}`}>
    <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
       {type === 'alert' && <AlertTriangle className="text-red-500" />}
       {type === 'success' && <CheckCircle2 className="text-green-500" />}
       {title}
    </h2>
    {subtitle && <p className="text-text-muted mb-6">{subtitle}</p>}
    {content}
  </div>
);

const PillarsGrid = ({ items }: any) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {items.map((item: string, i: number) => (
      <div key={i} className="bg-navy-900 p-6 rounded-xl border border-white/5">
        <h4 className="text-white font-semibold mb-2">{item}</h4>
        <p className="text-sm text-text-muted">Cost-effective shared support model with guaranteed SLAs.</p>
      </div>
    ))}
  </div>
);

const ProcessSteps = ({ items }: any) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {items.map((item: any, i: number) => (
       <div key={i} className="bg-navy-900 p-6 rounded-xl border border-white/5">
         <div className="text-brand font-bold text-4xl mb-4">{item.num}</div>
         <h4 className="text-white font-semibold mb-3">{item.title}</h4>
         <ul className="space-y-2 text-text-muted text-sm">
            {item.desc.split(', ').map((d:string) => <li key={d}>{d}</li>)}
         </ul>
       </div>
    ))}
  </div>
);


export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug as string];

  if (!service) return <div className="min-h-screen flex items-center justify-center text-white">Service Not Found</div>;

  return (
    <main>
      <Navbar />
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

      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto space-y-16">
          {service.sections && service.sections.map((section: any, i: number) => (
             <div key={i}>
                <div className="section-header mb-8 text-center md:text-left">
                     <h2 className="text-3xl font-bold text-white mb-2">{section.title}</h2>
                     {section.subtitle && <p className="text-lg text-brand font-medium">{section.subtitle}</p>}
                </div>

                {/* RENDERERS */}
                {section.type === 'bento-grid' && <BentoGrid items={section.items} />}
                {section.type === 'bento-grid-2' && <BentoGrid items={section.items} />} {/* Reusing grid for simplicity */}
                {section.type === 'value-card' && <ValueCard title={section.title} content={section.content} type="info" />}
                {section.type === 'value-card-4' && <ProcessSteps items={section.items} />}
                {section.type === 'pillars-grid' && <PillarsGrid items={section.items} />}
             </div>
          ))}
        </div>
      </section>
      
      {/* LOGOS SECTION */}
      <section className="py-16 px-4 bg-navy-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-bold text-text-muted uppercase tracking-widest mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-75">
            {/* Text placeholders as requested previously to ensure visibility */}
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center"><span className="text-text-muted font-bold">Infogain</span></div>
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center"><span className="text-text-muted font-bold">Hexaware</span></div>
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center"><span className="text-text-muted font-bold">Kotak Bank</span></div>
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center"><span className="text-text-muted font-bold">MSME India</span></div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-navy-800 text-center">
         <h2 className="text-2xl font-bold text-white mb-4">Ready to discuss?</h2>
         <Link href="/contact" className="inline-block px-8 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg">
            Contact Us
         </Link>
      </section>
    </main>
  );
}
