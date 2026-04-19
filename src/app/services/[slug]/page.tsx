import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetail from './ServicePageClient';

const BASE_URL = 'https://www.optivantage.in';

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
  return <ServiceDetail slug={slug} />;
}
