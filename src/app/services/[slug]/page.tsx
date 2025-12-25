"use client";
import { useParams, Link } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Wrench, 
  BrainCircuit, 
  Server, 
  BarChart3, 
  Zap, 
  Globe, 
  Lock,
  Users,
  GraduationCap,
  Award,
  TrendingUp
} from 'lucide-react';

// --- COMPREHENSIVE SERVICE DATA ---

const servicesData: any = {
  ai: {
    title: "AI Advisory & Training",
    icon: <BrainCircuit className="text-brand h-10 w-10" />,
    heroStats: [
      { val: "1000+", label: "Trained in 2024" },
      { val: "4", label: "Continents Served" },
      { val: "15+", label: "Elite Clients" }
    ],
    sections: [
      {
        title: "Recent Elite Engagements",
        subtitle: "Trusted by Fortune 500 companies and government institutions",
        type: "engagements-grid",
        items: [
          { 
            title: "Hexaware (with upGrad)", 
            desc: "Agentic AI Sessions - Comprehensive training on self-evolving agents.", 
            list: ["Multi-agent system architecture", "Self-healing AI implementations", "Hands-on workshop with real use cases"] 
          },
          { 
            title: "Infogain", 
            desc: "AI Catalyst Series - Hands-on leadership training program.", 
            list: ["Executive AI strategy sessions", "Practical implementation workshops", "Change management for AI transformation"] 
          },
          { 
            title: "Kotak Mahindra Bank", 
            desc: "Voice AI Implementation - Balancing human expertise with AI capabilities.", 
            list: ["Voice AI technology deployment", "Human+AI collaboration models", "Customer experience optimization"] 
          },
          { 
            title: "MSME Department, Government of India", 
            desc: "National GenAI Program - Upskilling MSMEs nationwide.", 
            list: ["GenAI fundamentals for business leaders", "Practical use case development", "Digital transformation roadmaps"] 
          },
          { 
            title: "East African Executives", 
            desc: "AI Strategy & Governance - Executive training on AI strategy.", 
            list: ["AI strategy development", "Governance and ethics frameworks", "Risk management and compliance"] 
          }
        ]
      },
      {
        title: "Platform Mastery",
        subtitle: "Deep expertise across leading AI ecosystems",
        type: "platform-split",
        platforms: [
          { 
            title: "Microsoft Ecosystem", 
            desc: "Certified trainer for Microsoft's complete AI stack.", 
            list: ["Microsoft Copilot: Microsoft 365, Teams, Windows", "Azure AI Studio: Custom AI model development", "Azure OpenAI Service: Enterprise GPT implementations", "Power Platform AI Builder: No-code/low-code AI solutions"] 
          },
          { 
            title: "Google Ecosystem", 
            desc: "Expert in Google's AI platform and productivity suite.", 
            list: ["Google Gemini: Multimodal AI model implementations", "Vertex AI: Machine learning platform", "Workspace AI: Gmail, Docs, Sheets AI features", "Cloud AI Services: Vision, Speech, Translation APIs"] 
          }
        ]
      },
      {
        title: "AI+ Certified Training Programs",
        subtitle: "Industry-recognized certification programs for enterprise teams",
        type: "program-grid",
        programs: [
          { title: "AI+ Everyone™", desc: "Foundational AI literacy program for all employees.", list: ["AI fundamentals and terminology", "Practical AI tools for daily work", "Ethical AI use and best practices"], duration: "1-2 days", level: "Beginner", icon: "Users" },
          { title: "AI+ Executive™", desc: "AI strategy and governance for C-suite.", list: ["AI strategy development and ROI", "Governance frameworks and compliance", "Change management and adoption", "Risk assessment and mitigation"], duration: "2 days", level: "Executive", icon: "Award" },
          { title: "AI+ Prompt Engineer™", desc: "Advanced prompt engineering and AI optimization.", list: ["Advanced prompting techniques", "Chain-of-thought and few-shot learning", "Model selection and fine-tuning", "Performance optimization strategies"], duration: "3 days", level: "Advanced", icon: "GraduationCap" },
          { title: "AI+ Ethics™", desc: "Responsible AI and NIST framework implementation.", list: ["Ethical AI principles and frameworks", "NIST AI Risk Management Framework", "Bias detection and mitigation", "Transparency and accountability"], duration: "2 days", level: "Intermediate", icon: "ShieldCheck" }
        ]
      },
      {
        title: "Custom Training Programs",
        subtitle: "Tailored programs designed for your organization's specific needs",
        type: "custom-grid",
        programs: [
          "Agentic AI for Business Leaders", "Self-Evolving & Self-Healing AI Agents", "Microsoft Copilot & Azure AI Implementation", "Google Workspace & Gemini AI Training", "Make.com Automation Masterclass", "Gen AI Use Cases Workshop", "AI Governance for Senior Leadership"
        ]
      },
      {
        title: "Training Partners",
        type: "partners-grid",
        partners: ["upGrad Enterprise", "Simplilearn", "MSME India"]
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
        title: "Service Delivery Models",
        type: "pillars-grid",
        items: ["Dedicated Teams", "Shared Services", "Hybrid Model", "Project-Based"]
      }
    ]
  }
};

// --- HELPER COMPONENTS ---

const EngagementsGrid = ({ items }: any) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((item: any, i: number) => (
      <div key={i} className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-all">
        <div className="mb-4 p-4 bg-gradient-to-br from-purple-900 to-cyan-900 rounded-lg inline-block w-fit text-white">
           <span className="text-2xl">{["🎓","💡","🏦","🏛️","🏛️"][i]}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
        <p className="text-text-muted mb-6 text-lg font-medium">{item.desc}</p>
        <ul className="space-y-2 text-text-muted">
            {item.list.map((d: string, di: number) => (
              <li key={di} className="flex gap-2 text-sm"><span className="text-brand font-bold">•</span> {d}</li>
            ))}
        </ul>
      </div>
    ))}
  </div>
);

const PlatformSplit = ({ platforms }: any) => (
  <div className="grid md:grid-cols-2 gap-12">
    {platforms.map((platform: any, i: number) => (
      <div key={i} className="bg-navy-900 p-8 rounded-xl border border-white/5">
        <h3 className="text-2xl font-bold text-brand mb-4">{platform.title}</h3>
        <p className="text-text-muted mb-6">{platform.desc}</p>
        <ul className="space-y-3 text-text-muted">
            {platform.list.map((d: string, di: number) => (
              <li key={di} className="flex gap-2"><span className="text-brand font-bold">•</span> {d}</li>
            ))}
        </ul>
      </div>
    ))}
  </div>
);

const ProgramGrid = ({ programs }: any) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {programs.map((prog: any, i: number) => (
      <div key={i} className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-all flex flex-col">
        <div className="mb-4 p-4 bg-navy-800 rounded-lg inline-block w-fit text-brand h-12 w-12 flex items-center justify-center">
            {prog.icon ? <prog.icon size={24}/> : <TrendingUp className="text-brand h-6 w-6"/>}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{prog.title}</h3>
        <p className="text-text-muted mb-6">{prog.desc}</p>
        <ul className="space-y-2 text-text-muted flex-grow">
            {prog.list && prog.list.map((d: string, di: number) => (
              <li key={di} className="flex gap-2 text-sm"><span className="text-brand font-bold">•</span> {d}</li>
            ))}
        </ul>
        <div className="mt-auto pt-4 border-t border-white/10">
           <p className="text-brand font-semibold text-sm">{prog.duration || "Custom"} | {prog.level || "Tailored"}</p>
        </div>
      </div>
    ))}
  </div>
);

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
              <li key={di} className="flex gap-2 text-sm"><span className="text-brand font-bold">•</span> {d}</li>
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

// --- MAIN COMPONENT ---

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug as string];

  if (!service) return <div className="min-h-screen flex items-center justify-center text-white">Service Not Found</div>;

  return (
    <main>
      <Navbar />
      
      {/* TOP HEADER */}
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

      {/* HERO STATS (AI Only) */}
      {service.heroStats && (
        <section className="py-12 px-4 bg-navy-800 border-b border-white/5">
           <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
              {service.heroStats.map((stat: any, i: number) => (
                 <div key={i} className="bg-navy-900 p-6 rounded-xl border border-white/5">
                     <div className="text-4xl font-bold text-brand mb-2">{stat.val}</div>
                     <div className="text-sm text-text-muted uppercase tracking-widest">{stat.label}</div>
                 </div>
              ))}
           </div>
        </section>
      )}

      {/* CONTENT SECTIONS */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto space-y-24">
          {service.sections && service.sections.map((section: any, i: number) => (
             <div key={i}>
                <div className="section-header mb-12 text-center md:text-left">
                     <h2 className="text-3xl font-bold text-white mb-2">{section.title}</h2>
                     {section.subtitle && <p className="text-lg text-brand font-medium">{section.subtitle}</p>}
                </div>

                {/* RENDERERS */}
                {section.type === 'bento-grid' && <BentoGrid items={section.items} />}
                {section.type === 'engagements-grid' && <EngagementsGrid items={section.items} />}
                {section.type === 'platform-split' && <PlatformSplit platforms={section.platforms} />}
                {section.type === 'program-grid' && <ProgramGrid programs={section.programs} />}
                {section.type === 'custom-grid' && <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{section.programs.map((prog: string, i: number) => (
                   <div key={i} className="bg-navy-900 p-8 rounded-xl border border-white/5">
                      <h3 className="text-2xl font-bold text-white mb-4">{prog}</h3>
                      <p className="text-text-muted">Tailored programs designed for your organization's specific needs.</p>
                   </div>
                ))}</div>}
                
                {section.type === 'partners-grid' && (
                    <div className="max-w-4xl mx-auto text-center py-12">
                        <h2 className="text-2xl font-bold text-white mb-8">Training Partners</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center opacity-75 hover:opacity-100 transition-all">
                           {section.partners.map((p: string, i: number) => (
                              <div key={i} className="bg-white/5 p-8 rounded-lg flex items-center justify-center">
                                 <span className="text-xl font-bold text-text-muted">{p}</span>
                              </div>
                           ))}
                        </div>
                    </div>
                )}

                {/* Keep existing types from previous step */}
                {section.type === 'bento-grid-2' && <div className="grid md:grid-cols-2 gap-8">{section.items.map((item:any) => (
                  <div key={item.title} className="bg-navy-900 p-8 rounded-xl border border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-text-muted mb-6">{item.desc}</p>
                    <ul className="space-y-2 text-text-muted">
                       {item.details.map((d: string, di: number) => <li key={di}>• {d}</li>)}
                    </ul>
                    {item.highlight && (
                       <div className="mt-6 p-4 bg-brand/10 rounded-lg border border-brand/20">
                          <h4 className="text-white font-bold mb-1">Case Study Result</h4>
                          <p className="text-sm text-text-muted">{item.highlight}</p>
                       </div>
                    )}
                  </div>
                ))}</div>}

                {section.type === 'value-card' && <div className="bg-navy-900 p-8 rounded-xl border-l-4 border-brand">
                   <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                   {section.subtitle && <p className="text-brand mb-6">{section.subtitle}</p>}
                   {section.content}
                </div>}

                {section.type === 'value-card-4' && (
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {section.items.map((item: any, i: number) => (
                             <div key={i} className="bg-navy-900 p-6 rounded-xl border border-white/5">
                                <div className="text-brand font-bold text-4xl mb-4">{item.num}</div>
                                <h4 className="text-white font-semibold mb-3">{item.title}</h4>
                                <ul className="space-y-2 text-text-muted text-sm">
                                   {item.desc.split(', ').map((d:string) => <li key={d}>{d}</li>)}
                                </ul>
                             </div>
                        ))}
                     </div>
                )}
                
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-75 hover:opacity-100 transition-all">
            
            {/* Infogain */}
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
               <img 
                 src="/infogain.png" 
                 alt="Infogain" 
                 className="h-12 w-auto opacity-90 hover:opacity-100 transition-all"
               />
            </div>

            {/* Hexaware */}
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
               <img 
                 src="/hexaware.png" 
                 alt="Hexaware" 
                 className="h-12 w-auto opacity-90 hover:opacity-100 transition-all"
               />
            </div>

            {/* Kotak Bank */}
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
               <img 
                 src="/kotak.png" 
                 alt="Kotak Bank" 
                 className="h-12 w-auto opacity-90 hover:opacity-100 transition-all"
               />
            </div>

            {/* MSME India */}
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
               <img 
                 src="/msme.png" 
                 alt="MSME India" 
                 className="h-12 w-auto opacity-90 hover:opacity-100 transition-all"
               />
            </div>

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
