import { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  CheckCircle,
  Network,
  Server,
  Shield,
  Wifi,
  Zap,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "IT Infrastructure Services India | Network Design, Cisco, Cabling, Security | Optivantage",
  description:
    "End-to-end IT infrastructure services across India. LAN/WAN, SD-WAN, WiFi, structured cabling, network security (Cisco, Fortinet, Palo Alto), Vertiv UPS. Cisco Registered Partner. Founder-led, 25 years experience.",
  keywords: [
    "IT infrastructure services India",
    "network design India",
    "Cisco partner India",
    "SD-WAN implementation India",
    "enterprise WiFi design India",
    "structured cabling contractor India",
    "network security India",
    "Fortinet partner India",
    "Vertiv UPS reseller India",
    "data centre setup India",
    "IT infrastructure consulting",
    "GCC IT setup India",
  ],
  alternates: {
    canonical: "https://www.optivantage.in/it-infrastructure-india",
  },
  openGraph: {
    title: "IT Infrastructure Services India | Optivantage Technologies",
    description:
      "End-to-end network design, cabling, security, and power infrastructure across India. Cisco Registered Partner. Fortinet, Palo Alto, Vertiv.",
    url: "https://www.optivantage.in/it-infrastructure-india",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.optivantage.in/it-infrastructure-india#service",
      name: "IT Infrastructure Services",
      provider: {
        "@id": "https://www.optivantage.in/#organization",
      },
      description:
        "End-to-end IT infrastructure services across India: LAN/WAN network design, SD-WAN, enterprise WiFi, structured cabling, fibre optic cabling, network security, CCTV, biometric access control, and Vertiv power infrastructure.",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Delhi" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT Infrastructure Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "LAN/WAN Network Design and Implementation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "SD-WAN Implementation" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise WiFi Design and Deployment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Structured Cabling and Fibre Optic Cabling",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Network Security: Fortinet, Palo Alto Networks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CCTV, IP Surveillance, and Biometric Access Control",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vertiv UPS and Power Infrastructure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Centre and Server Room Setup",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which company provides end-to-end IT infrastructure services across India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Optivantage Technologies is a Cisco Registered Partner offering end-to-end IT infrastructure services pan-India: LAN/WAN network design, SD-WAN, enterprise WiFi, structured cabling, fibre optic, network security (Fortinet, Palo Alto Networks), CCTV and access control, and Vertiv UPS. Founder-led with 25 years of enterprise IT operations experience at BT, Telstra, and SITA.",
          },
        },
        {
          "@type": "Question",
          name: "Can Optivantage handle IT infrastructure for a GCC setup in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Optivantage designs and delivers complete IT infrastructure for Global Capability Centre (GCC) setups in India, including network design, structured cabling, WiFi, server rooms, network security, CCTV, and access control. We also supply and rent IT hardware (Dell, HP, Lenovo) and provide ongoing AMC support.",
          },
        },
        {
          "@type": "Question",
          name: "Is Optivantage a Cisco partner in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Optivantage Technologies is a Cisco Registered Partner in India. We design and implement Cisco network solutions including switches, routers, wireless access points, and SD-WAN across enterprise and GCC environments.",
          },
        },
        {
          "@type": "Question",
          name: "What network security vendors does Optivantage partner with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Optivantage is a Fortinet partner and Palo Alto Networks partner in India, delivering next-generation firewalls, unified threat management, zero-trust network access (ZTNA), and SD-WAN-integrated security.",
          },
        },
        {
          "@type": "Question",
          name: "Does Optivantage install structured cabling for offices and data centres?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Optivantage provides structured cabling (Cat6, Cat6A), fibre optic cabling, trunking, and passive infrastructure for offices, data centres, warehouses, campuses, and GCC facilities across India. Work is delivered to TIA/EIA and ISO/IEC cabling standards.",
          },
        },
        {
          "@type": "Question",
          name: "Is Optivantage a Vertiv authorised reseller in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Optivantage is a Vertiv Authorised Reseller in India, supplying and installing Vertiv UPS systems, precision cooling, and power distribution units for server rooms and data centres.",
          },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: Network,
    title: "Network Design & Implementation",
    items: [
      "LAN/WAN architecture and design",
      "SD-WAN implementation and migration",
      "Cisco switching and routing",
      "Network virtualisation (VLANs, VRFs)",
    ],
  },
  {
    icon: Wifi,
    title: "Enterprise WiFi",
    items: [
      "RF site surveys and heat mapping",
      "WiFi design for offices, warehouses, campuses",
      "Access point deployment and configuration",
      "WiFi optimisation and troubleshooting",
    ],
  },
  {
    icon: Server,
    title: "Passive Infrastructure & Cabling",
    items: [
      "Structured cabling: Cat6, Cat6A",
      "Fibre optic cabling and splicing",
      "Data centre and server room cabling",
      "Trunking, cable management, patch panels",
    ],
  },
  {
    icon: Shield,
    title: "Network Security",
    items: [
      "Fortinet Next-Generation Firewalls",
      "Palo Alto Networks deployment",
      "Zero-Trust Network Access (ZTNA)",
      "Network segmentation and monitoring",
    ],
  },
  {
    icon: Zap,
    title: "Power Infrastructure",
    items: [
      "Vertiv UPS supply and installation",
      "Precision cooling and PDUs",
      "Server room power planning",
      "Electrical infrastructure for data centres",
    ],
  },
  {
    icon: CheckCircle,
    title: "Physical Security",
    items: [
      "CCTV and IP surveillance systems",
      "Biometric and card access control",
      "Visitor management integration",
      "Remote monitoring and NVR setup",
    ],
  },
];

const partners = [
  { name: "Cisco", badge: "Registered Partner" },
  { name: "Fortinet", badge: "Partner" },
  { name: "Palo Alto Networks", badge: "Partner" },
  { name: "Vertiv", badge: "Authorised Reseller" },
];

export default function ITInfrastructureIndia() {
  return (
    <main className="min-h-screen">
      <Script
        id="it-infra-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">
            IT Infrastructure Services — India
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Enterprise IT Infrastructure.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">
              Built to Last.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            End-to-end network design, cabling, security, and power
            infrastructure delivered across India. Cisco Registered Partner.
            Fortinet, Palo Alto Networks, and Vertiv authorised. Founder-led, 25
            years of enterprise IT operations at BT, Telstra, and SITA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Partner badges */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-white/10">
        <div className="flex flex-wrap gap-6 items-center">
          <span className="text-sm text-gray-400 font-medium">
            Vendor Partnerships:
          </span>
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <span className="text-white font-semibold">{p.name}</span>
              <span className="text-xs text-brand bg-brand/10 px-2 py-0.5 rounded-full">
                {p.badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What We Deliver
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          From passive cabling to active networking to physical security and
          power — all under one roof, with direct accountability from a single
          point of contact.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand/40 transition-colors"
            >
              <s.icon className="text-brand mb-4" size={28} />
              <h3 className="text-lg font-semibold text-white mb-3">
                {s.title}
              </h3>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-400 text-sm flex items-start gap-2"
                  >
                    <CheckCircle
                      size={14}
                      className="text-brand mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Companies Choose Optivantage for Infrastructure
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "25 Years of Enterprise Operations",
                body: "Our founders ran IT infrastructure for BT, Telstra, and SITA — global carriers operating mission-critical networks. That experience is in every design we deliver.",
              },
              {
                title: "Cisco Registered Partner",
                body: "Certified to design and implement Cisco switching, routing, wireless, and SD-WAN. Not a reseller — an implementation partner with hands-on delivery capability.",
              },
              {
                title: "Single Contractor, Full Scope",
                body: "Passive cabling, active networking, security, power, and physical security — all from one vendor. No coordination overhead. One SLA, one point of contact.",
              },
              {
                title: "GCC and Enterprise Ready",
                body: "Experienced in delivering greenfield IT infrastructure for Global Capability Centres, corporate offices, warehouses, campuses, and data centres across India.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          Industries We Have Delivered For
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Aviation & Airport Operations",
            "Telecom & ISPs",
            "BFSI",
            "Logistics & Warehousing",
            "Retail & Multi-site",
            "GCCs & MNCs",
            "Manufacturing",
            "Corporate Offices",
          ].map((industry) => (
            <div
              key={industry}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-300"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand/20 to-orange-400/10 border border-brand/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us about your project — office setup, GCC build, SD-WAN
            migration, or network security upgrade. We'll respond with a scoped
            proposal within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all"
          >
            Start the Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
