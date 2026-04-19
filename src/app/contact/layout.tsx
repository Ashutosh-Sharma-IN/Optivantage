import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Optivantage | AI Training & IT Infrastructure Enquiries',
  description:
    'Get in touch with Optivantage Technologies for AI training (Copilot 365, ChatGPT, ISO 42001), IT infrastructure (Cisco, Fortinet, Vertiv), or IT equipment rental enquiries. Delhi, India. Response within 24 hours.',
  keywords: [
    'contact Optivantage', 'AI training enquiry India', 'IT infrastructure quote Delhi',
    'Copilot 365 training enquiry', 'ISO 42001 consultant India contact',
  ],
  alternates: { canonical: 'https://www.optivantage.in/contact' },
  openGraph: {
    title: 'Contact Optivantage | AI Training & IT Infrastructure',
    description: 'Enquire about AI training, IT infrastructure, or equipment rentals. Delhi, India. Response within 24 hours.',
    url: 'https://www.optivantage.in/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
