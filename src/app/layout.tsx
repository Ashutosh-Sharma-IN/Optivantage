import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.optivantage.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Optivantage | AI Training, Automation, IT Infrastructure & Equipment | India & Online",
    template: "%s | Optivantage",
  },
  description:
    "Optivantage Technologies — specialist AI training (Copilot 365, ChatGPT, ISO 42001), IT infrastructure (Cisco, Fortinet, Vertiv), and IT equipment rentals. Founder-led. 25 years enterprise IT expertise. 1,000+ professionals trained. Pan-India and online.",
  keywords: [
    // AI Training
    "AI training India", "Gen AI training", "Generative AI training", "enterprise AI training",
    "Microsoft Copilot 365 training", "Copilot training India", "ChatGPT training for business",
    "AI literacy training", "AI upskilling", "AI advisory", "AI strategy consulting India",
    "ISO 42001 implementation India", "ISO/IEC 42001 AI governance", "AI governance training",
    "agentic AI training", "AI agents training", "prompt engineering training",
    "certified AI trainer India", "Microsoft AI trainer", "Google AI trainer",
    // IT Infrastructure
    "IT infrastructure services India", "network infrastructure design", "LAN WAN design India",
    "SD-WAN implementation", "WiFi network design", "structured cabling", "data cabling",
    "passive infrastructure cabling", "fibre optic cabling", "active networking",
    "Cisco partner India", "Cisco registered partner", "Fortinet partner India",
    "Palo Alto Networks partner", "network security services", "Vertiv authorised reseller India",
    "Vertiv UPS India", "power infrastructure", "data centre setup", "GCC setup India",
    "IT infrastructure consulting Delhi",
    // Equipment
    "IT equipment rental India", "laptop rental Delhi", "desktop rental India",
    "workstation rental", "IT equipment supply", "Dell HP Lenovo supplier India",
    "annual maintenance contract AMC", "IT AMC services", "printer rental India",
  ],
  authors: [{ name: "Ashutosh Sharma", url: `${BASE_URL}/about` }],
  creator: "Optivantage Technologies Pvt Ltd",
  publisher: "Optivantage Technologies Pvt Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Optivantage Technologies",
    title: "Optivantage | AI Training, Automation, IT Infrastructure & Equipment",
    description:
      "Specialist enterprise IT services — AI training (Copilot 365, ChatGPT, ISO 42001), AI automation (Make.com, agentic AI), IT infrastructure (Cisco, Fortinet, Vertiv), and IT equipment supply & rentals. Founder-led. Pan-India and online.",
    images: [
      {
        url: `${BASE_URL}/logo.png`,
        width: 400,
        height: 120,
        alt: "Optivantage Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optivantage | AI Training, Automation, IT Infrastructure & Equipment",
    description:
      "Specialist AI training, AI automation, IT infrastructure, and IT equipment supply & rentals. Founder-led. 25 years enterprise IT expertise at BT, Telstra, SITA. Pan-India and online.",
    images: [`${BASE_URL}/logo.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "G-NG6P0WPYQ0",
  },
};

// ─── GLOBAL JSON-LD SCHEMA ───────────────────────────────────────────────────
const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization + LocalBusiness
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${BASE_URL}/#organization`,
      name: "Optivantage Technologies Private Limited",
      alternateName: ["Optivantage", "Optivantage Technologies"],
      legalName: "OPTIVANTAGE TECHNOLOGIES PRIVATE LIMITED",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 400,
        height: 120,
      },
      image: `${BASE_URL}/logo.png`,
      description:
        "Optivantage Technologies is a specialist enterprise IT firm offering AI training and advisory (Microsoft Copilot 365, ChatGPT, Gemini, ISO/IEC 42001 AI governance), IT infrastructure services (Cisco, Fortinet, Palo Alto Networks, Vertiv), and IT equipment supply and rentals. Founder-led by Ashutosh Sharma with 25 years of enterprise IT expertise.",
      foundingDate: "2025",
      address: {
        "@type": "PostalAddress",
        streetAddress: "SFS Flat No 159, Sector 9, Pocket 1, Dwarka",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110077",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.5921,
        longitude: 77.046,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9971701239",
          contactType: "customer service",
          areaServed: ["IN", "GB", "AU", "AE"],
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          email: "contact@optivantage.in",
          contactType: "sales",
        },
      ],
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Australia" },
      ],
      knowsAbout: [
        "Artificial Intelligence Training",
        "Generative AI",
        "Gen AI",
        "Microsoft Copilot 365",
        "Microsoft Copilot training",
        "ChatGPT training",
        "Google Gemini training",
        "AI for business",
        "AI literacy",
        "AI upskilling",
        "AI governance",
        "ISO/IEC 42001",
        "AI Management System",
        "Agentic AI",
        "AI agents",
        "Multi-agent systems",
        "Prompt engineering",
        "AI strategy",
        "AI advisory",
        "AI implementation roadmap",
        "AI security",
        "AI ethics",
        "IT infrastructure",
        "Network design",
        "LAN design",
        "WAN design",
        "SD-WAN",
        "WiFi design",
        "Wireless networking",
        "Structured cabling",
        "Data cabling",
        "Network cabling",
        "Fibre optic cabling",
        "Passive infrastructure",
        "Data centre build",
        "Active networking",
        "Cisco networking",
        "Cisco registered partner",
        "Fortinet firewall",
        "Palo Alto Networks",
        "Network security",
        "Vertiv UPS",
        "Vertiv power infrastructure",
        "IT equipment rental",
        "Laptop rental",
        "Desktop rental",
        "Workstation rental",
        "Annual Maintenance Contract",
        "AMC",
        "GCC setup India",
        "Global Capability Centre",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Optivantage Service Catalogue",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/services/ai-training-advisory#service`,
              name: "AI Training & Advisory",
              url: `${BASE_URL}/services/ai-training-advisory`,
              description:
                "Enterprise AI training for Microsoft Copilot 365, ChatGPT, Google Gemini, and Agentic AI. AI strategy advisory, AI policy development, and ISO/IEC 42001 AI governance implementation.",
              provider: { "@id": `${BASE_URL}/#organization` },
              areaServed: "India",
              keywords: [
                "AI training", "Gen AI training", "Microsoft Copilot training",
                "ChatGPT training", "AI governance", "ISO 42001", "AI advisory",
                "AI strategy", "agentic AI", "prompt engineering",
              ],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/ai-automation#service`,
              name: "AI Automation & Agentic AI",
              url: `${BASE_URL}/ai-automation`,
              description:
                "Design and delivery of production-grade AI automation pipelines on Make.com — B2B sales intelligence, self-healing agents, agentic AI systems, document processing, support triage, voice AI, and self-evolving workflows. 28+ live scenarios delivered.",
              provider: { "@id": `${BASE_URL}/#organization` },
              areaServed: ["IN", "US", "GB", "AU", "SG", "AE"],
              keywords: [
                "AI automation", "Make.com", "agentic AI", "self-healing agents",
                "B2B sales pipeline", "AI workflow automation", "enterprise AI",
              ],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/services/it-infrastructure#service`,
              name: "IT Infrastructure",
              url: `${BASE_URL}/services/it-infrastructure`,
              description:
                "End-to-end IT network infrastructure — LAN/WAN/SD-WAN design, structured cabling, fibre optic cabling, data centre build, network security (Fortinet, Palo Alto Networks), and power infrastructure (Vertiv). Cisco Registered Partner.",
              provider: { "@id": `${BASE_URL}/#organization` },
              areaServed: "India",
              keywords: [
                "IT infrastructure", "network design", "LAN WAN", "SD-WAN",
                "structured cabling", "data cabling", "fibre optic", "Cisco partner",
                "Fortinet", "Palo Alto Networks", "Vertiv", "data centre", "network security",
              ],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/services/it-equipment-rentals#service`,
              name: "IT Equipment & Rentals",
              url: `${BASE_URL}/services/it-equipment-rentals`,
              description:
                "IT equipment supply and rental — laptops, desktops, workstations, printers (Dell, HP, Lenovo). Short and long-term equipment rentals, Annual Maintenance Contracts (AMC) for enterprises.",
              provider: { "@id": `${BASE_URL}/#organization` },
              areaServed: "India",
              keywords: [
                "IT equipment rental", "laptop rental", "desktop rental",
                "workstation rental", "Dell HP Lenovo", "AMC", "annual maintenance contract",
              ],
            },
          },
        ],
      },
      sameAs: ["https://www.linkedin.com/company/optivantage"],
    },
    // Founder Person Schema
    {
      "@type": "Person",
      "@id": `${BASE_URL}/about#ashutosh-sharma`,
      name: "Ashutosh Sharma",
      givenName: "Ashutosh",
      familyName: "Sharma",
      jobTitle: "Founder & Director",
      worksFor: { "@id": `${BASE_URL}/#organization` },
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/founder.png`,
      description:
        "25 years in enterprise IT operations. Former Director of Service Operations at BT Global (£100M revenue, 1,000+ FTEs). Principal Service Delivery at Telstra. Microsoft and Google certified AI trainer. ISO/IEC 42001 Certified Lead Implementer. 1,000+ professionals trained in AI across BIAL, Kotak Mahindra Bank, Hexaware, Infogain, and MSME India.",
      knowsAbout: [
        "Artificial Intelligence training",
        "Generative AI",
        "Microsoft Copilot 365",
        "Gen AI for business",
        "AI governance",
        "ISO/IEC 42001",
        "AI strategy",
        "Agentic AI",
        "Enterprise IT operations",
        "Network infrastructure",
        "IT service management",
        "ITIL",
        "Telecom IT operations",
        "Aviation IT",
        "Global Capability Centre setup",
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "ISO/IEC 42001 Certified Lead Implementer" },
        { "@type": "EducationalOccupationalCredential", name: "Microsoft Certified AI Trainer (Copilot & Azure AI)" },
        { "@type": "EducationalOccupationalCredential", name: "Google Cloud Digital Leader" },
        { "@type": "EducationalOccupationalCredential", name: "AI for Leaders — UT Austin" },
        { "@type": "EducationalOccupationalCredential", name: "AI+ Chief AI Officer — AI Certs" },
        { "@type": "EducationalOccupationalCredential", name: "AI for Non-Techies — Accredited Trainer" },
        { "@type": "EducationalOccupationalCredential", name: "ITIL V4 Professional" },
        { "@type": "EducationalOccupationalCredential", name: "AWS Cloud Economics Business Partner" },
      ],
      alumniOf: [
        { "@type": "Organization", name: "British Telecom — BT Global" },
        { "@type": "Organization", name: "Telstra Global" },
        { "@type": "Organization", name: "SITA (aviation IT)" },
        { "@type": "Organization", name: "Orange" },
        { "@type": "Organization", name: "Nortel" },
      ],
    },
    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Optivantage Technologies",
      description:
        "AI Training, AI Automation, IT Infrastructure & IT Equipment — Specialist enterprise IT services. Founder-led. Pan-India and online.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Global JSON-LD Schema */}
        <Script
          id="schema-global"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
          strategy="beforeInteractive"
        />

        {children}

        {/* FOOTER */}
        <footer className="bg-navy-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Optivantage</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  AI Training &amp; Advisory. AI Automation. IT Infrastructure. IT Equipment &amp; Rentals.
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Four focused services. 25 years of battle-tested expertise. Cisco &amp; Vertiv authorised partner.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-sm text-gray-400 hover:text-brand transition-colors">Home</Link></li>
                  <li><Link href="/about" className="text-sm text-gray-400 hover:text-brand transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="text-sm text-gray-400 hover:text-brand transition-colors">Blog</Link></li>
                  <li><Link href="/ai-lab" className="text-sm text-gray-400 hover:text-brand transition-colors">AI Lab</Link></li>
                  <li><Link href="/training/copilot-365" className="text-sm text-gray-400 hover:text-brand transition-colors">Copilot 365 Course</Link></li>
                  <li><Link href="/ai-automation" className="text-sm text-gray-400 hover:text-brand transition-colors">AI Automation Portfolio</Link></li>
                  <li><Link href="/case-studies" className="text-sm text-gray-400 hover:text-brand transition-colors">Case Studies</Link></li>
                  <li><Link href="/contact" className="text-sm text-gray-400 hover:text-brand transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
                <ul className="space-y-3">
                  <li><Link href="/services/ai-training-advisory" className="text-sm text-gray-400 hover:text-brand transition-colors">AI Training &amp; Advisory</Link></li>
                  <li><Link href="/ai-automation" className="text-sm text-gray-400 hover:text-brand transition-colors">AI Automation &amp; Agentic AI</Link></li>
                  <li><Link href="/services/it-infrastructure" className="text-sm text-gray-400 hover:text-brand transition-colors">IT Infrastructure</Link></li>
                  <li><Link href="/services/it-equipment-rentals" className="text-sm text-gray-400 hover:text-brand transition-colors">IT Equipment &amp; Rentals</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
                <div className="space-y-3 text-sm text-gray-400">
                  <div>
                    <p className="font-semibold text-white mb-1">Address:</p>
                    <p>159, Sector 9, Dwarka</p>
                    <p>New Delhi 110077, India</p>
                  </div>
                  <div className="pt-3">
                    <p className="font-semibold text-white mb-1">Email:</p>
                    <a href="mailto:contact@optivantage.in" className="hover:text-brand transition-colors">contact@optivantage.in</a>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone:</p>
                    <span className="block">+91 9971701239</span>
                    <span className="block">+91 9871253355</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Optivantage Technologies Pvt Ltd. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <Link href="/privacy" className="text-gray-400 hover:text-brand transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="text-gray-400 hover:text-brand transition-colors">Terms of Service</Link>
                </div>
              </div>
              <div className="text-center pt-4 border-t border-white/5">
                <p className="text-xs text-gray-500">
                  CIN: U62099DL2025PTC457949 | GST No: 07AAECO9369B1ZA | Udyam No: UDYAM-DL-10-0106857
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-NG6P0WPYQ0" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NG6P0WPYQ0');`,
          }}
        />
      </body>
    </html>
  );
}
