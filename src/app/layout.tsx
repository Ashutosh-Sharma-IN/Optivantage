import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optivantage | AI Training, IT Infrastructure & Equipment Rentals",
  description: "We help enterprises adopt AI safely, build resilient networks, and equip teams to deliver — with 25 years of battle-tested expertise. Cisco & Vertiv authorised partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* FOOTER WITH NAVIGATION MENU */}
        <footer className="bg-navy-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              
              {/* Column 1: Company Info */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Optivantage</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  AI Training & Advisory. IT Infrastructure. IT Equipment & Rentals.
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Three focused services. 25 years of battle-tested expertise. Cisco & Vertiv authorised partner.
                </p>
              </div>

              {/* Column 2: Quick Links (NAVIGATION MENU) */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Services */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/ai-training-advisory" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      AI Training & Advisory
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/it-infrastructure" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      IT Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/it-equipment-rentals" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      IT Equipment & Rentals
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact Info */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
                <div className="space-y-3 text-sm text-gray-400">
                  <div>
                    <p className="font-semibold text-white mb-1">Address:</p>
                    <p>159, Sector 9, DDA</p>
                    <p>Dwarka, New Delhi 110077</p>
                    <p>India</p>
                  </div>
                  <div className="pt-3">
                    <p className="font-semibold text-white mb-1">Email:</p>
                    <a href="mailto:contact@optivantage.in" className="hover:text-brand transition-colors">
                      contact@optivantage.in
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone:</p>
                    <span className="block">
                      +91 9971701239
                    </span>
                    <span className="block">
                      +91 9871253355
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Optivantage Technologies Pvt Ltd. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <Link href="/privacy" className="text-gray-400 hover:text-brand transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-400 hover:text-brand transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>

              {/* Company Registration Details */}
              <div className="text-center pt-4 border-t border-white/5">
                <p className="text-xs text-gray-500">
                  CIN: U62099DL2025PTC457949 | GST No: 07AAECO9369B1ZA | Udyam No: UDYAM-DL-10-0106857
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NG6P0WPYQ0"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NG6P0WPYQ0');
            `,
          }}
        />
      </body>
    </html>
  );
}
