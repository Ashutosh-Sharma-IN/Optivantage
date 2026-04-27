import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import ServiceDetail from './ServicePageClient';

const BASE_URL = 'https://www.optivantage.in';

// ─── Per-slug JSON-LD schemas ─────────────────────────────────────────────────
const pageSchemas: Record<string, object[]> = {
  'ai-training-advisory': [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/services/ai-training-advisory#service`,
      name: 'AI Training & Advisory',
      description: 'Enterprise AI training across Microsoft Copilot 365, ChatGPT, Google Gemini, and ISO/IEC 42001 AI governance. Delivered in-person pan-India and online. Certified Microsoft & Google AI trainer. 1,000+ professionals trained at Kotak Mahindra Bank, BIAL, Hexaware, Infogain, and MSME India.',
      provider: { '@id': `${BASE_URL}/#organization` },
      serviceType: 'AI Training and Advisory',
      areaServed: [{ '@type': 'Country', name: 'India' }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Training & Advisory Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Literacy & Awareness Training' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Microsoft Copilot 365 Training' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISO/IEC 42001 AI Governance Implementation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Strategy & Use Case Advisory' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentic AI & Workflow Automation' } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'AI Training & Advisory', item: `${BASE_URL}/services/ai-training-advisory` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who provides enterprise AI training in India?',
          acceptedAnswer: { '@type': 'Answer', text: 'Optivantage Technologies provides enterprise AI training across India. Founder Ashutosh Sharma is a certified Microsoft AI trainer and Google Cloud Digital Leader who has trained 1,000+ professionals at Kotak Mahindra Bank, BIAL, Hexaware, Infogain, and MSME India.' },
        },
        {
          '@type': 'Question',
          name: 'What AI training programs does Optivantage offer?',
          acceptedAnswer: { '@type': 'Answer', text: 'Optivantage offers AI literacy, Microsoft Copilot 365 training, ChatGPT and Gemini training, agentic AI workshops, ISO/IEC 42001 AI governance implementation, AI strategy advisory, and internationally accredited AI+ certification programs. All programmes are practitioner-led and tailored to the Indian enterprise context.' },
        },
        {
          '@type': 'Question',
          name: 'Is Optivantage an ISO 42001 AI governance consultant in India?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ashutosh Sharma is a certified ISO/IEC 42001 Lead Implementer — one of very few in India. Optivantage helps organisations assess AI governance readiness, develop AI policies, and prepare for ISO 42001 certification.' },
        },
        {
          '@type': 'Question',
          name: 'Does Optivantage provide AI training for BFSI or banking teams?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Optivantage has delivered AI training to Kotak Mahindra Bank covering AI literacy, Microsoft Copilot deployment, and the BIEC Framework for context engineering — tailored to RBI guidelines and BFSI-specific AI use cases.' },
        },
      ],
    },
  ],

  'it-infrastructure': [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/services/it-infrastructure#service`,
      name: 'IT Infrastructure Services',
      description: 'End-to-end IT infrastructure design and delivery — LAN/WAN, SD-WAN, enterprise WiFi, structured cabling, fibre optic, data centre build, network security (Fortinet, Palo Alto Networks), and power infrastructure (Vertiv). Cisco Registered Partner. Delhi NCR and pan-India.',
      provider: { '@id': `${BASE_URL}/#organization` },
      serviceType: ['Network Infrastructure', 'IT Infrastructure Consulting', 'Structured Cabling', 'Network Security'],
      areaServed: [{ '@type': 'Country', name: 'India' }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Infrastructure Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LAN/WAN Network Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structured Cabling & Fibre Optic' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Security (Fortinet, Palo Alto Networks)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Centre Setup' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GCC IT Infrastructure Setup' } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'IT Infrastructure', item: `${BASE_URL}/services/it-infrastructure` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What IT infrastructure services does Optivantage provide in India?',
          acceptedAnswer: { '@type': 'Answer', text: 'Optivantage designs and delivers end-to-end IT infrastructure: LAN/WAN network design, SD-WAN, enterprise WiFi, structured cabling, fibre optic cabling, data centre build, network security (Fortinet, Palo Alto Networks), power infrastructure (Vertiv UPS), and physical security including CCTV and access control. Cisco Registered Partner. Delhi NCR and pan-India.' },
        },
        {
          '@type': 'Question',
          name: 'Is Optivantage a Cisco partner in India?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Optivantage is a Cisco Registered Partner in India. The firm designs and deploys Cisco networking equipment for enterprises, GCCs, and data centres across India.' },
        },
        {
          '@type': 'Question',
          name: 'Can Optivantage handle IT infrastructure for a new GCC setup in India?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Optivantage provides turnkey IT infrastructure for Global Capability Centre setups — network design, passive cabling, active networking, security, access control, and equipment supply. The founder set up and managed 5 GCCs across Gurgaon, Bangalore, Pune, and Hyderabad for global telecom firms.' },
        },
      ],
    },
  ],

  'it-equipment-rentals': [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/services/it-equipment-rentals#service`,
      name: 'IT Equipment Supply & Rentals',
      description: 'Enterprise IT equipment supply and rental — Dell, HP, Lenovo laptops, desktops, workstations, printers, and networking gear. Short-term and long-term rentals for enterprises, GCCs, training events, and projects. Annual Maintenance Contracts (AMC). Delhi NCR and pan-India.',
      provider: { '@id': `${BASE_URL}/#organization` },
      serviceType: ['IT Equipment Rental', 'IT Equipment Supply', 'Annual Maintenance Contract'],
      areaServed: [{ '@type': 'Country', name: 'India' }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Equipment & Rental Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laptop & Desktop Rental' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workstation & Server Rental' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event IT Equipment Supply' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Annual Maintenance Contract (AMC)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GCC IT Equipment Setup' } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'IT Equipment & Rentals', item: `${BASE_URL}/services/it-equipment-rentals` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I rent laptops for a corporate training event or GCC setup in India?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Optivantage rents Dell, HP, and Lenovo laptops, desktops, and workstations for corporate training events, GCC setups, short-term projects, and long-term deployments across Delhi NCR and pan-India. Bulk pricing and minimum rental periods available on request.' },
        },
        {
          '@type': 'Question',
          name: 'Does Optivantage offer Annual Maintenance Contracts for IT equipment?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Optivantage provides Annual Maintenance Contracts (AMC) for desktops, laptops, workstations, printers, servers, and networking equipment — covering preventive maintenance, breakdown support, and spare parts management.' },
        },
        {
          '@type': 'Question',
          name: 'What IT equipment brands does Optivantage supply?',
          acceptedAnswer: { '@type': 'Answer', text: 'Optivantage supplies Dell, HP, Lenovo, and Apple devices — desktops, laptops, workstations, and MacBooks. For power infrastructure, Optivantage is an authorised Vertiv reseller. Networking equipment is sourced via the Cisco registered partner channel.' },
        },
      ],
    },
  ],
};

const pageMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  'ai-training-advisory': {
    title: 'AI Training & Advisory | Microsoft Copilot 365, ChatGPT, ISO 42001',
    description:
      'Enterprise AI training for Microsoft Copilot 365, ChatGPT, Google Gemini & Agentic AI. ISO/IEC 42001 AI governance implementation. Certified Microsoft & Google AI trainer. 1,000+ professionals trained — BIAL, Kotak Mahindra, Hexaware. Delhi, India.',
    keywords: [
      'AI training India', 'Microsoft Copilot 365 training', 'Copilot training India',
      'Gen AI training', 'Generative AI training for business', 'ChatGPT training',
      'AI literacy', 'enterprise AI training', 'AI upskilling India',
      'AI governance', 'ISO 42001 India', 'ISO/IEC 42001 implementation',
      'AI management system', 'AI security governance', 'agentic AI training',
      'AI agents training', 'multi-agent AI', 'prompt engineering training',
      'AI strategy consulting India', 'AI advisory', 'AI implementation roadmap',
      'certified AI trainer India', 'Microsoft AI trainer', 'Google AI trainer',
      'AI+ certification', 'AI for business professionals', 'corporate AI training',
    ],
  },
  'it-infrastructure': {
    title: 'IT Infrastructure Services | Cisco Partner | Network Design, Cabling & Security',
    description:
      'End-to-end IT infrastructure — LAN/WAN/SD-WAN network design, structured cabling, fibre optic cabling, data centre build, active networking (Cisco), network security (Fortinet, Palo Alto Networks), and power infrastructure (Vertiv). Cisco Registered Partner. Delhi NCR & pan-India.',
    keywords: [
      'IT infrastructure services India', 'network design India', 'LAN WAN design',
      'SD-WAN implementation India', 'WiFi network design', 'structured cabling India',
      'data cabling', 'network cabling', 'passive infrastructure cabling',
      'fibre optic cabling India', 'active networking', 'Cisco partner India',
      'Cisco registered partner', 'Cisco networking India', 'Fortinet partner India',
      'Fortinet firewall India', 'Palo Alto Networks partner India',
      'network security services India', 'next generation firewall India',
      'Vertiv authorised reseller India', 'Vertiv UPS India', 'power infrastructure',
      'data centre setup India', 'server room build', 'GCC setup India',
      'Global Capability Centre IT infrastructure', 'IT infrastructure consulting Delhi',
      'field engineering India', 'CCTV installation', 'structured cabling contractor',
    ],
  },
  'it-equipment-rentals': {
    title: 'IT Equipment Rental & Supply | Laptops, Desktops, Workstations | Delhi, India',
    description:
      'IT equipment supply and rental — laptops, desktops, workstations, printers (Dell, HP, Lenovo). Short-term and long-term equipment rentals for enterprises, GCCs, and events. Annual Maintenance Contracts (AMC). Delhi NCR & pan-India.',
    keywords: [
      'IT equipment rental India', 'laptop rental Delhi', 'laptop rental India',
      'desktop rental India', 'workstation rental India', 'computer rental Delhi',
      'IT equipment supply India', 'Dell laptop supplier India', 'HP equipment supplier',
      'Lenovo supplier India', 'Apple MacBook rental India',
      'printer rental India', 'networking equipment rental',
      'short term laptop rental', 'long term IT rental', 'event IT equipment rental',
      'annual maintenance contract AMC', 'IT AMC services India',
      'IT asset management', 'refurbished laptops India', 'GCC IT setup',
    ],
  },
};

const validSlugs = Object.keys(pageMeta);

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const meta = pageMeta[slug];
  if (!meta) return { title: 'Service Not Found' };

  const url = `${BASE_URL}/services/${slug}`;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      type: 'website',
      siteName: 'Optivantage Technologies',
      images: [{ url: `${BASE_URL}/logo.png`, width: 400, height: 120, alt: 'Optivantage' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${BASE_URL}/logo.png`],
    },
  };
}

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!validSlugs.includes(slug)) notFound();

  const schemas = pageSchemas[slug] ?? [];

  return (
    <>
      {schemas.map((schema, i) => (
        <Script
          key={`schema-${slug}-${i}`}
          id={`schema-${slug}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="beforeInteractive"
        />
      ))}
      <ServiceDetail slug={slug} />
    </>
  );
}
