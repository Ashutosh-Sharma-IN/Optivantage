"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import {
  ArrowLeft,
  CheckCircle2,
  BrainCircuit,
  Server,
  Package,
  Zap,
  Globe,
  Lock,
  Users,
  GraduationCap,
  Award,
  TrendingUp,
  ShieldCheck,
  FileText,
  Laptop,
  Printer,
  Wifi,
  Building2,
  Cable,
  Cpu,
  Fingerprint,
  Camera,
  ScanFace,
} from 'lucide-react';

// --- HERO IMAGES ---
const serviceImages: Record<string, { src: string; alt: string }[]> = {
  'ai-training-advisory': [
    { src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", alt: "AI and machine learning" },
    { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", alt: "Corporate training session" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", alt: "Team collaboration workshop" },
  ],
  'it-infrastructure': [
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", alt: "Server room and data centre" },
    { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", alt: "Network infrastructure cabling" },
    { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80", alt: "IT engineer on site" },
  ],
  'it-equipment-rentals': [
    { src: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80", alt: "Enterprise laptops and equipment" },
    { src: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80", alt: "IT equipment setup" },
    { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80", alt: "Office technology workspace" },
  ],
};

// --- AI TRAINING MODULE IMAGES ---
const trainingModules = [
  { title: "AI Models & Platforms", desc: "Hands-on training across leading AI models and interfaces", image: "/training-modules/ai-models.png" },
  { title: "No-Code Automation", desc: "Build powerful workflows without writing code", image: "/training-modules/no-code-automation.png" },
  { title: "Vibe Coding & App Building", desc: "Rapid prototyping and AI-assisted application development", image: "/training-modules/vibe-coding-apps.png" },
];

// --- AI PLATFORM LOGOS ---
const aiPlatformLogos = [
  { name: "Claude", logo: "/platforms/claude.png" },
  { name: "OpenAI / ChatGPT", logo: "/platforms/openai.png" },
  { name: "Google Gemini", logo: "/platforms/gemini.png" },
  { name: "Make.com", logo: "/platforms/make.png" },
  { name: "N8N", logo: "/platforms/n8n.png" },
  { name: "Microsoft Copilot", color: "bg-blue-600" },
  { name: "Azure AI", color: "bg-sky-600" },
  { name: "Zapier", color: "bg-orange-500" },
  { name: "LangChain", color: "bg-teal-600" },
  { name: "CrewAI", color: "bg-red-600" },
  { name: "Perplexity", color: "bg-indigo-600" },
  { name: "Hugging Face", color: "bg-yellow-600" },
  { name: "NotebookLM", color: "bg-gray-600" },
  { name: "Cursor", color: "bg-slate-700" },
  { name: "Replit", color: "bg-orange-600" },
];

// --- INFRASTRUCTURE PARTNER LOGOS ---
const infraPartners = [
  { name: 'Cisco', logo: '/logos/Cisco logo.webp', badge: 'Registered Partner via Ingram Micro India' },
  { name: 'Fortinet', logo: '/logos/Fortinet logo.png', badge: 'Partner' },
  { name: 'Palo Alto Networks', logo: '/logos/Palo Alto networks logo.png', badge: 'Partner' },
  { name: 'Vertiv', logo: '/logos/Liebert Vertiv Logo.png', badge: 'Authorised Reseller' },
];

// --- SERVICE DATA ---
const servicesData: Record<string, any> = {

  // ─── PILLAR 1: AI TRAINING & ADVISORY ───────────────────────────────────────
  'ai-training-advisory': {
    title: "AI Training & Advisory",
    icon: <BrainCircuit className="text-brand h-10 w-10" />,
    showClientLogos: true,
    showPlatformLogos: true,
    showTrainingModules: true,
    showCertificate: true,
    heroStats: [
      { val: "1000+", label: "Trained in AI across Enterprises" },
      { val: "4", label: "Continents Served" },
      { val: "15+", label: "Elite Enterprise Clients" }
    ],
    sections: [
      {
        title: "Our AI Service Offerings",
        subtitle: "From your first AI training session to full organisational AI transformation",
        type: "bento-grid",
        items: [
          {
            title: "AI for All — Literacy & Awareness",
            desc: "Build a strong AI foundation across your entire organisation. Everyone — from frontline staff to senior leaders — learns to use AI tools confidently and responsibly.",
            icon: <Users className="text-brand" />
          },
          {
            title: "Function-Specific AI Training",
            desc: "Targeted training tailored to Finance, HR, Sales, Operations, Legal and more. Role-relevant use cases, not generic demos.",
            icon: <GraduationCap className="text-brand" />
          },
          {
            title: "Generative AI for Business Professionals",
            desc: "Hands-on sessions on Copilot, ChatGPT, Gemini and OpenAI for real business productivity — emails, reports, analysis, and more.",
            icon: <BrainCircuit className="text-brand" />
          },
          {
            title: "Microsoft Copilot & Azure AI Deployment",
            desc: "End-to-end deployment and training on Microsoft's complete AI stack. Certified trainer for Copilot across M365, Teams, Word, Excel, PowerPoint and Azure AI Studio.",
            icon: <Zap className="text-brand" />
          },
          {
            title: "AI Strategy & Use Case Advisory",
            desc: "Working with leadership to identify your highest-ROI AI priorities, evaluate build vs buy, select the right tools, and create a phased implementation roadmap.",
            icon: <TrendingUp className="text-brand" />
          },
          {
            title: "AI Policy & Governance Development",
            desc: "Drafting your organisation's AI acceptable use policy, data privacy framework, ethical AI guidelines, and board-level governance structure.",
            icon: <FileText className="text-brand" />
          },
          {
            title: "AI Security & Governance — ISO/IEC 42001",
            desc: "Implementation of the ISO/IEC 42001 AI Management System standard. Risk assessment, bias mitigation, audit readiness, and responsible AI controls. Ashutosh Sharma is a certified ISO 42001 Lead Implementer — one of the very few in India.",
            icon: <ShieldCheck className="text-brand" />
          },
          {
            title: "AI+ Certification Programs",
            desc: "Industry-recognised certification programs: AI+ Everyone™, AI+ Executive™, AI+ Prompt Engineer™, and AI+ Ethics™. Internationally accredited.",
            icon: <Award className="text-brand" />
          },
          {
            title: "Agentic AI & Workflow Automation",
            desc: "Consultation and implementation using Make.com, N8N, CrewAI and other automation platforms. Build multi-agent systems and self-healing workflows.",
            icon: <Globe className="text-brand" />
          },
        ]
      },
      {
        title: "Recent Elite Engagements",
        subtitle: "Trusted by Fortune 500 companies and government institutions",
        type: "engagements-grid",
        items: [
          {
            title: "Hexaware (with upGrad)",
            desc: "Agentic AI Sessions — Comprehensive training on self-evolving agents.",
            list: ["Multi-agent system architecture", "Self-healing AI implementations", "Hands-on workshop with real use cases"]
          },
          {
            title: "Infogain",
            desc: "AI Catalyst Series — Hands-on leadership training program.",
            list: ["Executive AI strategy sessions", "Practical implementation workshops", "Change management for AI transformation"]
          },
          {
            title: "Kotak Mahindra Bank",
            desc: "BIEC Framework Training — Context Engineering for 500+ banking professionals.",
            list: ["AI literacy for banking functions", "Copilot deployment across M365", "AI acceptable use policy rollout"]
          },
          {
            title: "MSME Department, Government of India",
            desc: "National GenAI Programme — Upskilling MSMEs nationwide.",
            list: ["GenAI fundamentals for business leaders", "Practical use case development", "Digital transformation roadmaps"]
          },
          {
            title: "BIAL (Bengaluru International Airport Ltd.)",
            desc: "AI Training Programme — Founder-led training for airport operations.",
            list: ["AI fundamentals for airport operations", "Practical AI applications in aviation", "Digital transformation roadmap"]
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
            list: [
              "Microsoft Copilot: M365, Teams, Windows",
              "Azure AI Studio: Custom AI model development",
              "Azure OpenAI Service: Enterprise GPT implementations",
              "Power Platform AI Builder: No-code/low-code AI solutions"
            ]
          },
          {
            title: "Google Ecosystem",
            desc: "Expert in Google's AI platform and productivity suite.",
            list: [
              "Google Gemini: Multimodal AI model implementations",
              "Vertex AI: Machine learning platform",
              "Workspace AI: Gmail, Docs, Sheets AI features",
              "Cloud AI Services: Vision, Speech, Translation APIs"
            ]
          }
        ]
      },
      {
        title: "AI+ Certified Training Programs",
        subtitle: "Industry-recognised certification programs for enterprise teams",
        type: "program-grid",
        programs: [
          {
            title: "AI+ Everyone™",
            desc: "Foundational AI literacy for all employees.",
            list: ["AI fundamentals and terminology", "Practical AI tools for daily work", "Ethical AI use and best practices"],
            duration: "1–2 days",
            level: "Beginner",
          },
          {
            title: "AI+ Executive™",
            desc: "AI strategy and governance for C-suite.",
            list: ["AI strategy development and ROI", "Governance frameworks and compliance", "Change management and adoption", "Risk assessment and mitigation"],
            duration: "2 days",
            level: "Executive",
          },
          {
            title: "AI+ Prompt Engineer™",
            desc: "Advanced prompt engineering and AI optimisation.",
            list: ["Advanced prompting techniques", "Chain-of-thought and few-shot learning", "Model selection and fine-tuning", "Performance optimisation strategies"],
            duration: "3 days",
            level: "Advanced",
          },
          {
            title: "AI+ Ethics™",
            desc: "Responsible AI and NIST framework implementation.",
            list: ["Ethical AI principles and frameworks", "NIST AI Risk Management Framework", "Bias detection and mitigation", "Transparency and accountability"],
            duration: "2 days",
            level: "Intermediate",
          }
        ]
      },
      {
        title: "Custom Training Programs",
        subtitle: "Tailored programmes designed for your organisation's specific needs",
        type: "custom-grid",
        programs: [
          "Agentic AI for Business Leaders",
          "Self-Evolving & Self-Healing AI Agents",
          "Microsoft Copilot & Azure AI Implementation",
          "Google Workspace & Gemini AI Training",
          "Make.com Automation Masterclass",
          "Gen AI Use Cases Workshop",
          "AI Governance for Senior Leadership",
          "ISO/IEC 42001 AI Management System Implementation"
        ]
      }
    ]
  },

  // ─── PILLAR 2: IT INFRASTRUCTURE ────────────────────────────────────────────
  'it-infrastructure': {
    title: "IT Infrastructure",
    icon: <Server className="text-brand h-10 w-10" />,
    showInfraPartners: true,
    sections: [
      {
        title: "Our Infrastructure Services",
        subtitle: "Design. Build. Secure. Support. End-to-end, on-site.",
        type: "bento-grid",
        items: [
          {
            title: "Network Design & Architecture",
            desc: "LAN/WAN consultancy and design for resilient, scalable networks. SD-WAN architecture, deployment, migration, and ongoing support.",
            icon: <Globe className="text-brand" />
          },
          {
            title: "Passive Infrastructure",
            desc: "End-to-end structured cabling: copper, fibre optic, patch panels, cable management, containment systems. Data centre and server room build-outs.",
            icon: <Cable className="text-brand" />
          },
          {
            title: "Active Networking — Cisco",
            desc: "Supply, installation and commissioning of Cisco routers, switches, wireless access points and Meraki cloud-managed networking. Registered Cisco Partner via Ingram Micro India.",
            icon: <Wifi className="text-brand" />
          },
          {
            title: "Network Security — Fortinet & Palo Alto",
            desc: "Next-generation firewalls, Zero Trust Network Access, VPN, IDS/IPS, and network segmentation. Fortinet and Palo Alto Networks solutions for enterprise-grade perimeter and internal security.",
            icon: <Lock className="text-brand" />
          },
          {
            title: "Power & Electrical — Vertiv",
            desc: "UPS systems, PDUs, power distribution, and power conditioning for server rooms, data centres, and critical IT environments. Vertiv authorised reseller.",
            icon: <Zap className="text-brand" />
          },
          {
            title: "GCC & Office Setup",
            desc: "Turnkey IT infrastructure for Global Capability Centre setups — network, compute, power, cabling, and security delivered as a single project.",
            icon: <Building2 className="text-brand" />
          },
          {
            title: "Physical Security Solutions",
            desc: "SITC of enterprise biometric access control, AI-powered facial recognition, and IP CCTV surveillance. Single-vendor delivery from site survey to commissioning and AMC.",
            icon: <Camera className="text-brand" />
          },
          {
            title: "Field Engineering Support",
            desc: "Skilled field engineers deployed across industries — warehouses, offices, retail, campuses. Onsite installation, commissioning, break-fix, and ongoing support.",
            icon: <Users className="text-brand" />
          },
        ]
      },
      {
        title: "Physical Security Solutions",
        subtitle: "Supply, Installation, Testing & Commissioning (SITC) — end-to-end, on-site",
        type: "physical-security",
        intro: "Optivantage delivers converged physical security and IT — the same team that builds your network also secures your premises. One vendor, one accountability, zero integration gaps.",
        items: [
          {
            title: "Biometric Access Control",
            icon: "fingerprint",
            tagline: "Control who enters. Know exactly when.",
            desc: "Enterprise-grade biometric systems — fingerprint, palm vein, and multi-modal readers — integrated with your access control, HRMS, and payroll platforms. From a single door to a multi-site campus.",
            benefits: [
              "Eliminates buddy-punching and time-theft in attendance",
              "STQC-certified devices aligned with Indian government standards",
              "Centrally managed across multiple office locations",
              "Integrates with SAP, Darwinbox, GreytHR, and other HRMS platforms",
              "Offline fallback mode — continues working during network outages",
              "Role-based access zones — restrict floors, server rooms, and sensitive areas"
            ],
            usecases: "Corporate offices · Manufacturing plants · Warehouse gates · Data centres · Co-working spaces"
          },
          {
            title: "Facial Recognition Systems",
            icon: "scanface",
            tagline: "Contactless. Instant. Accurate.",
            desc: "AI-powered facial recognition for access control, visitor management, and workforce attendance — without physical contact. Works in real-world conditions: variable lighting, high foot-traffic, partial occlusion.",
            benefits: [
              "Sub-second identification — even in high-traffic lobbies",
              "Liveness detection prevents spoofing via photos or screens",
              "Functions with masks and in low-light environments",
              "Visitor pre-registration and VIP alert workflows out of the box",
              "On-premise data storage available for privacy-sensitive deployments",
              "Integrates with CCTV and access control for unified security events"
            ],
            usecases: "Corporate lobbies · Bank branches · Hospitals · Gated communities · Event venues"
          },
          {
            title: "CCTV & IP Surveillance",
            icon: "camera",
            tagline: "See everything. Miss nothing.",
            desc: "Full-lifecycle CCTV implementation — site survey, camera selection, structured cabling, NVR/DVR configuration, remote monitoring, and ongoing AMC. Scalable from a 4-camera office to a 500-camera campus.",
            benefits: [
              "HD and 4K IP cameras: dome, bullet, PTZ, and fisheye form factors",
              "Centralised NVR/DVR with 30–90 day retention planning",
              "Remote monitoring via mobile app and web dashboard",
              "AI-based video analytics: motion alerts, intrusion detection, crowd density",
              "Integration with access control for correlated security event timelines",
              "Runs on your existing structured cabling — no parallel infrastructure needed"
            ],
            usecases: "Corporate campuses · Warehouses · Retail chains · Hospitals · Parking facilities · Data centres"
          }
        ],
        valueAdd: {
          heading: "Why Optivantage for Physical Security?",
          points: [
            { title: "Converged IT + physical security delivery", desc: "We handle both your data network and your physical security in a single project. No coordination gaps between your cabling contractor and your security vendor — it is all us." },
            { title: "True SITC — not just supply", desc: "We do not drop equipment and leave. Our engineers handle installation, configuration, testing, commissioning, user training, and handover documentation on-site." },
            { title: "Infrastructure-native integration", desc: "Physical security runs on your existing IP network and structured cabling. Our network expertise means cameras, readers, and servers are deployed optimally — not as an afterthought bolted on later." },
            { title: "Post-commissioning AMC", desc: "Annual Maintenance Contracts covering preventive servicing, firmware updates, remote diagnostics, and priority on-site break-fix response to keep your systems running reliably year-round." }
          ]
        }
      },
      {
        title: "Technology Partners",
        subtitle: "Authorised to supply, install and support",
        type: "infra-partners-section",
      },
      {
        title: "Technology Expertise",
        type: "pillars-grid",
        items: [
          "Cisco: Switches, Routers, Meraki Cloud",
          "Fortinet: FortiGate NGFW, SD-WAN, FortiAP",
          "Palo Alto Networks: NGFW, Prisma Access, Zero Trust",
          "Vertiv: UPS, PDU, Thermal Management",
          "VMware SD-WAN (VeloCloud)",
          "Dell EMC: Servers, Storage, Data Centre",
          "Hikvision / Dahua: IP CCTV & NVR Systems",
          "ZKTeco / Suprema: Biometrics & Access Control",
          "Anviz / ESSL: Facial Recognition & Attendance"
        ]
      }
    ]
  },

  // ─── PILLAR 3: IT EQUIPMENT & RENTALS ───────────────────────────────────────
  'it-equipment-rentals': {
    title: "IT Equipment & Rentals",
    icon: <Package className="text-brand h-10 w-10" />,
    sections: [
      {
        title: "Equipment We Supply & Rent",
        subtitle: "Flexible compute and peripherals for enterprises, GCCs, events, and projects",
        type: "bento-grid",
        items: [
          {
            title: "Laptops",
            desc: "Latest-generation business laptops from Dell, HP, and Lenovo. Available for sale or rental with optional AMC.",
            icon: <Laptop className="text-brand" />
          },
          {
            title: "Desktops",
            desc: "Tower, Small Form Factor (SFF), and commercial desktop options from leading OEMs. Configured to your spec.",
            icon: <Cpu className="text-brand" />
          },
          {
            title: "Workstations",
            desc: "High-performance workstations with Intel Core i7, i9, and Xeon processors for compute-intensive tasks.",
            icon: <Server className="text-brand" />
          },
          {
            title: "Apple Devices",
            desc: "MacBooks and iPads for creative, design, and executive teams. Short and long-term rental options.",
            icon: <Laptop className="text-brand" />
          },
          {
            title: "Networking Devices",
            desc: "Routers, switches, access points, and firewalls — available for project-based or event rental. Includes Cisco, Fortinet hardware.",
            icon: <Wifi className="text-brand" />
          },
          {
            title: "Printers & Peripherals",
            desc: "Network and standalone laser printers (colour and B/W). Monitors, keyboards, mice, docking stations, and other peripherals.",
            icon: <Printer className="text-brand" />
          },
          {
            title: "UPS Systems — Vertiv",
            desc: "Online and offline UPS systems up to 100KVA for uninterrupted power. Vertiv authorised reseller.",
            icon: <Zap className="text-brand" />
          },
          {
            title: "Refurbished Equipment",
            desc: "Quality-checked refurbished laptops, desktops, servers, and network devices — ideal for cost-conscious deployments.",
            icon: <Package className="text-brand" />
          },
        ]
      },
      {
        title: "Rental Models",
        subtitle: "We match the model to your need — not the other way around",
        type: "value-card-4",
        items: [
          { num: "01", title: "Short-Term Rental", desc: "Events, training programmes, audits, conferences. 1 day to 3 months." },
          { num: "02", title: "Long-Term Rental", desc: "GCC setups, project teams, seasonal scaling. 3 months to 3 years." },
          { num: "03", title: "Lease-to-Own", desc: "Spread the cost of ownership. Ideal for startups and growing teams." },
          { num: "04", title: "AMC & Lifecycle", desc: "Annual Maintenance Contracts with SLA-backed response times. Asset refresh planning." }
        ]
      },
      {
        title: "Why Rent Instead of Buy?",
        subtitle: "The business case is often stronger than you think",
        type: "pillars-grid",
        items: [
          "No capital expenditure — preserve cash flow",
          "Always on latest hardware — avoid obsolescence",
          "Scale up or down instantly for projects",
          "AMC included — no surprise repair costs",
          "GCC setup in days, not weeks",
          "Tax benefits: rentals are fully operational expenses"
        ]
      }
    ]
  }
};

// --- HELPER COMPONENTS ---

const BentoGrid = ({ items }: { items: any[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((item: any, i: number) => (
      <div key={i} className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-all">
        <div className="mb-4 p-4 bg-navy-800 rounded-lg inline-block w-fit">
          {item.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
        {item.desc && <p className="text-text-muted">{item.desc}</p>}
      </div>
    ))}
  </div>
);

const EngagementsGrid = ({ items }: { items: any[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((item: any, i: number) => (
      <div key={i} className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-all">
        <div className="mb-4 p-4 bg-gradient-to-br from-purple-900 to-cyan-900 rounded-lg inline-block w-fit text-white">
          <span className="text-2xl">{["🎓","💡","🏦","🏛️","✈️"][i]}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
        <p className="text-text-muted mb-4 font-medium">{item.desc}</p>
        <ul className="space-y-2 text-text-muted">
          {item.list.map((d: string, di: number) => (
            <li key={di} className="flex gap-2 text-sm"><span className="text-brand font-bold">•</span> {d}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const PlatformSplit = ({ platforms }: { platforms: any[] }) => (
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

const ProgramGrid = ({ programs }: { programs: any[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {programs.map((prog: any, i: number) => (
      <div key={i} className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-all flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">{prog.title}</h3>
        <p className="text-text-muted mb-6">{prog.desc}</p>
        <ul className="space-y-2 text-text-muted flex-grow">
          {prog.list && prog.list.map((d: string, di: number) => (
            <li key={di} className="flex gap-2 text-sm"><span className="text-brand font-bold">•</span> {d}</li>
          ))}
        </ul>
        <div className="mt-auto pt-4 border-t border-white/10">
          <p className="text-brand font-semibold text-sm">{prog.duration} | {prog.level}</p>
        </div>
      </div>
    ))}
  </div>
);

const CustomGrid = ({ programs }: { programs: string[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {programs.map((prog: string, i: number) => (
      <div key={i} className="bg-navy-900 p-6 rounded-xl border border-white/5 hover:border-brand/50 transition-all">
        <h3 className="text-base font-semibold text-white">{prog}</h3>
      </div>
    ))}
  </div>
);

const PillarsGrid = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {items.map((item: string, i: number) => (
      <div key={i} className="bg-navy-900 p-5 rounded-xl border border-white/5 flex items-start gap-3">
        <CheckCircle2 size={16} className="text-brand flex-shrink-0 mt-0.5" />
        <h4 className="text-white text-sm font-medium">{item}</h4>
      </div>
    ))}
  </div>
);

const PhysicalSecurity = ({ intro, items, valueAdd }: { intro?: string; items: any[]; valueAdd?: any }) => (
  <div className="space-y-16">
    {intro && (
      <p className="text-text-muted text-lg leading-relaxed max-w-3xl border-l-4 border-brand pl-6">{intro}</p>
    )}
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item: any, i: number) => (
        <div key={i} className="bg-navy-900 rounded-xl border border-white/5 hover:border-brand/40 transition-all overflow-hidden flex flex-col">
          <div className="p-8 border-b border-white/5">
            <div className="mb-5 p-3 bg-navy-800 rounded-lg inline-block">
              {item.icon === 'fingerprint' && <Fingerprint className="text-brand h-6 w-6" />}
              {item.icon === 'scanface' && <ScanFace className="text-brand h-6 w-6" />}
              {item.icon === 'camera' && <Camera className="text-brand h-6 w-6" />}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
            <p className="text-brand font-medium text-sm mb-4">{item.tagline}</p>
            <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
          </div>
          <div className="p-8 flex-grow">
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Key Benefits</h4>
            <ul className="space-y-3">
              {item.benefits.map((b: string, bi: number) => (
                <li key={bi} className="flex gap-3 text-sm text-text-muted">
                  <CheckCircle2 className="text-brand h-4 w-4 flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-8 pb-8">
            <div className="p-3 bg-brand/10 rounded-lg border border-brand/20">
              <p className="text-xs text-brand font-medium leading-relaxed">{item.usecases}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    {valueAdd && (
      <div className="bg-navy-900 rounded-xl border border-white/5 p-8">
        <h3 className="text-2xl font-bold text-white mb-8">{valueAdd.heading}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {valueAdd.points.map((pt: any, i: number) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand/15 rounded-lg flex items-center justify-center">
                <span className="text-brand font-bold text-sm">{i + 1}</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-sm">{pt.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const ProcessSteps = ({ items }: { items: any[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {items.map((item: any, i: number) => (
      <div key={i} className="bg-navy-900 p-6 rounded-xl border border-white/5">
        <div className="text-brand font-bold text-4xl mb-4">{item.num}</div>
        <h4 className="text-white font-semibold mb-3">{item.title}</h4>
        <p className="text-text-muted text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
);

const InfraPartnersSection = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {infraPartners.map((partner) => (
      <div key={partner.name} className="flex flex-col items-center gap-3">
        <div className="bg-white rounded-xl p-5 w-full flex items-center justify-center h-24 shadow-sm">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={140}
            height={60}
            className="object-contain h-12 w-auto"
          />
        </div>
        <p className="text-xs text-brand font-semibold text-center">{partner.badge}</p>
      </div>
    ))}
  </div>
);

// --- MAIN COMPONENT ---

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = servicesData[slug];

  if (!service) return (
    <main>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center text-white gap-4">
        <p className="text-2xl font-bold">Page not found</p>
        <Link href="/services" className="text-brand hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Services
        </Link>
      </div>
    </main>
  );

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

      {/* HERO STATS (AI only) */}
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

      {/* HERO IMAGES */}
      {serviceImages[slug] && (
        <section className="py-12 px-4 bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {serviceImages[slug].map((img, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl aspect-video">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COPILOT 365 COURSE BANNER — AI page only */}
      {service.showPlatformLogos && (
        <section className="py-10 px-4 bg-navy-900">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand/10 to-orange-400/10 border border-brand/30 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Featured Course</p>
                <h3 className="text-2xl font-bold text-white mb-2">Master Microsoft Copilot 365 — In 4 Weekends</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  A live, practitioner-led course for working professionals. 20 hours · 22 modules · Small cohorts · Certificate included.
                </p>
              </div>
              <Link
                href="/training/copilot-365"
                className="flex-shrink-0 px-6 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2 text-sm whitespace-nowrap"
              >
                See Course Details <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* AI PLATFORM LOGOS */}
      {service.showPlatformLogos && (
        <section className="py-12 px-4 bg-navy-800 border-b border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-lg font-bold text-text-muted uppercase tracking-widest mb-8">
              Platforms & Technologies We Train On
            </h3>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              {aiPlatformLogos.map((platform: any, i: number) => (
                platform.logo ? (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2.5 hover:bg-white/20 transition-all hover:scale-105">
                    <img src={platform.logo} alt={platform.name} className="h-8 w-8 rounded-lg object-contain" />
                    <span className="text-white font-medium text-sm">{platform.name}</span>
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`${platform.color} px-4 py-2.5 rounded-xl text-white font-medium text-sm hover:scale-105 transition-transform`}
                  >
                    {platform.name}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI TRAINING MODULES */}
      {service.showTrainingModules && (
        <section className="py-16 px-4 bg-navy-900 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-lg font-bold text-text-muted uppercase tracking-widest mb-3">What You&apos;ll Learn</h3>
              <h2 className="text-3xl font-bold text-white">AI Training Modules</h2>
              <p className="text-text-muted mt-3 max-w-2xl mx-auto">
                Comprehensive hands-on training across the full spectrum of AI tools and platforms
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingModules.map((mod, i) => (
                <div key={i} className={`bg-navy-800 rounded-xl border border-white/5 overflow-hidden hover:border-brand/50 transition-all hover:-translate-y-1 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={mod.image} alt={mod.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-white mb-1">{mod.title}</h4>
                    <p className="text-sm text-text-muted">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI TRAINER CERTIFICATE */}
      {service.showCertificate && (
        <section className="py-12 px-4 bg-navy-900 border-b border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-bold text-text-muted uppercase tracking-widest mb-6">Certified AI Trainer</h3>
            <div className="bg-navy-800 p-6 rounded-xl border border-white/10 inline-block">
              <img
                src="/certifications/ai-trainer-certificate.png"
                alt="Become AI Trainer Certificate — Ashutosh Sharma"
                className="max-h-80 w-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <p className="text-text-muted mt-4 text-sm">
              Certified AI Trainer — accredited to deliver enterprise AI training programmes
            </p>
          </div>
        </section>
      )}

      {/* CONTENT SECTIONS */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto space-y-24">
          {service.sections && service.sections.map((section: any, i: number) => (
            <div key={i}>
              <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-2">{section.title}</h2>
                {section.subtitle && <p className="text-lg text-brand font-medium">{section.subtitle}</p>}
              </div>

              {section.type === 'bento-grid' && <BentoGrid items={section.items} />}
              {section.type === 'engagements-grid' && <EngagementsGrid items={section.items} />}
              {section.type === 'platform-split' && <PlatformSplit platforms={section.platforms} />}
              {section.type === 'program-grid' && <ProgramGrid programs={section.programs} />}
              {section.type === 'custom-grid' && <CustomGrid programs={section.programs} />}
              {section.type === 'pillars-grid' && <PillarsGrid items={section.items} />}
              {section.type === 'value-card-4' && <ProcessSteps items={section.items} />}
              {section.type === 'infra-partners-section' && <InfraPartnersSection />}
              {section.type === 'physical-security' && <PhysicalSecurity intro={section.intro} items={section.items} valueAdd={section.valueAdd} />}
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT LOGOS — AI page only */}
      {service.showClientLogos && (
        <section className="py-16 px-4 bg-navy-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-lg font-bold text-text-muted uppercase tracking-widest mb-8">
              Trusted by Leading Organisations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center opacity-75 hover:opacity-100 transition-all">
              {[
                { src: "/BIAL logo.webp", alt: "BIAL — Bengaluru International Airport" },
                { src: "/hexaware.png", alt: "Hexaware" },
                { src: "/infogain.png", alt: "Infogain" },
                { src: "/kotak.png", alt: "Kotak Mahindra Bank" },
                { src: "/msme.png", alt: "MSME India" },
                { src: "/Upgrad.png", alt: "upGrad" },
                { src: "/Arvind Fashions Logo.jpg", alt: "Arvind Fashions" },
              ].map((logo) => (
                <div key={logo.alt} className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className="h-10 w-auto opacity-90 hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-navy-800 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to discuss?</h2>
        <p className="text-text-muted mb-8 max-w-xl mx-auto">
          Every engagement starts with a conversation. No hard sell — just an honest discussion of your needs.
        </p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
