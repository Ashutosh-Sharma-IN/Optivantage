import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optivantage | Infrastructure Excellence & AI Innovation",
  description: "25 years of proven IT infrastructure expertise combined with cutting-edge AI transformation services.",
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
                  25 years of infrastructure excellence combined with cutting-edge AI innovation.
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Transforming enterprises through proven IT operations and modern AI training.
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
                    <Link href="/services" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      Services
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
                    <Link href="/services/ai" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      AI Advisory & Training
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/infrastructure" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      IT Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      Managed IT Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cybersecurity" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      Cybersecurity & Compliance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/process" className="text-sm text-gray-400 hover:text-brand transition-colors">
                      Process Improvement
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
                    <a href="tel:+919971701239" className="hover:text-brand transition-colors block">
                      +91 9971701239
                    </a>
                    <a href="tel:+919871222319" className="hover:text-brand transition-colors block">
                      +91 9871222319
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
