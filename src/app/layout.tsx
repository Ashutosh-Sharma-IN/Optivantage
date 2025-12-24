import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Optivantage - IT Services & AI Solutions',
  description: '25+ years of expertise in IT service management, infrastructure, and AI innovation. Comprehensive cybersecurity, AI advisory, and managed IT services.',
  keywords: 'IT services, cybersecurity, AI solutions, managed services, infrastructure, IT consulting, AI training, compliance frameworks',
  authors: [{ name: 'Optivantage' }],
  creator: 'Optivantage',
  publisher: 'Optivantage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.optivantage.in'),
  openGraph: {
    title: 'Optivantage - IT Services & AI Solutions',
    description: '25+ years of expertise in IT service management, infrastructure, and AI innovation.',
    url: 'https://www.optivantage.in',
    siteName: 'Optivantage',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optivantage - IT Services & AI Solutions',
    description: '25+ years of expertise in IT service management, infrastructure, and AI innovation.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
