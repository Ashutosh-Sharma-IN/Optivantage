import type { Metadata } from 'next';
import Script from 'next/script';
import AIAutomationClient from './AIAutomationClient';

const BASE_URL = 'https://www.optivantage.in';
const PAGE_URL = `${BASE_URL}/ai-automation`;

export const metadata: Metadata = {
  title: 'AI Automation Portfolio — Ashutosh Sharma | Make.com Expert | Delhi, India',
  description:
    'AI automation architect building production-grade pipelines for B2B sales intelligence, agentic workflows, document processing, and self-healing systems. 28+ Make.com scenarios. Enterprise clients across India and globally.',
  keywords: [
    'AI automation consultant India',
    'Make.com expert India',
    'agentic AI consultant',
    'B2B sales automation',
    'enterprise AI workflows',
    'AI consultant Delhi',
    'Make.com scenario builder',
    'sales pipeline automation India',
    'AI workflow automation',
    'enterprise AI consulting India',
    'self-healing AI agents',
    'agentic AI architecture',
    'Optivantage Technologies',
    'Ashutosh Sharma AI automation',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Ashutosh Sharma — AI Automation Architect & Make.com Expert',
    description:
      '28+ production Make.com scenarios. Enterprise clients including Hexaware, Kotak Mahindra Bank, Arvind Group. B2B sales pipelines, agentic AI, self-healing automation. Based in Delhi. Delivering globally.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'Optivantage Technologies',
    images: [{ url: `${BASE_URL}/logo.png`, width: 400, height: 120, alt: 'Optivantage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashutosh Sharma — AI Automation Architect',
    description: 'B2B pipelines, agentic AI, self-healing systems on Make.com. Delhi-based, available globally.',
    images: [`${BASE_URL}/logo.png`],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#ashutosh`,
      name: 'Ashutosh Sharma',
      jobTitle: 'AI Automation Architect & Enterprise AI Consultant',
      description:
        'AI automation architect with 25 years of operations experience across BT, Telstra, SITA and Nortel. Designs and builds production-grade Make.com pipelines, agentic AI systems, and enterprise automation for clients in India and globally. Founder of Optivantage Technologies.',
      url: BASE_URL,
      email: 'contact@optivantage.in',
      worksFor: { '@type': 'Organization', name: 'Optivantage Technologies Pvt. Ltd.', url: BASE_URL },
      knowsAbout: [
        'Make.com automation', 'Agentic AI systems', 'B2B sales pipeline automation',
        'Enterprise AI consulting', 'OpenAI integration', 'Claude AI', 'HubSpot automation',
        'AI workflow design', 'Self-healing agents', 'Voice AI',
      ],
    },
    {
      '@type': 'ProfessionalService',
      name: 'AI Automation & Workflow Design',
      provider: { '@id': `${BASE_URL}/#ashutosh` },
      description:
        'Design and delivery of production-grade AI automation pipelines — B2B sales intelligence, agentic systems, document processing, support triage, voice AI, and self-healing workflows on Make.com and connected platforms.',
      areaServed: ['IN', 'US', 'GB', 'AU', 'SG', 'AE'],
      serviceType: ['AI Automation', 'Make.com Development', 'Enterprise AI Consulting', 'Agentic AI Systems'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What kind of AI automation does Ashutosh Sharma build?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ashutosh builds multi-step AI automation pipelines on Make.com — B2B sales intelligence, support triage, document processing, HR pipelines, self-healing agents, and voice AI. 28+ live scenarios delivered for Hexaware, Kotak Mahindra Bank, Arvind Group, and others.' },
        },
        {
          '@type': 'Question',
          name: 'Is Ashutosh Sharma available for international AI automation projects?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Based in Dwarka, New Delhi, India. Delivering globally — clients in India, UK, USA, Southeast Asia, and the Middle East.' },
        },
        {
          '@type': 'Question',
          name: 'What platforms does Ashutosh use for AI automation?',
          acceptedAnswer: { '@type': 'Answer', text: 'Make.com as the primary orchestration layer, with OpenAI, Claude, Google Workspace, Microsoft 365, HubSpot, Apollo, Clay, ZeroBounce, Instantly, Lemlist, Slack, Bolna AI, and custom HTTP APIs.' },
        },
      ],
    },
  ],
};

export default function AIAutomationPage() {
  return (
    <>
      <Script
        id="schema-ai-automation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        strategy="beforeInteractive"
      />
      <AIAutomationClient />
    </>
  );
}
