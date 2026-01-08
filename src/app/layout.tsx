import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
{/* ✅ FIX 8: FOOTER WITH NAVIGATION */}
<footer className="bg-navy-900 text-white py-12 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-4 gap-8">
      
      {/* Company Info */}
      <div>
        <h4 className="text-lg font-bold mb-4">Optivantage</h4>
        <p className="text-sm text-gray-400">
          25 years of infrastructure excellence combined with cutting-edge AI innovation.
        </p>
      </div>

      {/* Quick Links - NAVIGATION MENU */}
      <div>
        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
          <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
          <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link></li>
          <li><Link href="/case-studies" className="text-sm text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
          <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-bold mb-4">Services</h4>
        <ul className="space-y-2">
          <li><Link href="/services/ai" className="text-sm text-gray-400 hover:text-white transition-colors">AI Advisory & Training</Link></li>
          <li><Link href="/services/infrastructure" className="text-sm text-gray-400 hover:text-white transition-colors">IT Infrastructure</Link></li>
          <li><Link href="/services/managed" className="text-sm text-gray-400 hover:text-white transition-colors">Managed IT Services</Link></li>
          <li><Link href="/services/cybersecurity" className="text-sm text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-lg font-bold mb-4">Contact</h4>
        <div className="space-y-2 text-sm text-gray-400">
          <p>159, Sector 9, DDA</p>
          <p>Dwarka, New Delhi 110077</p>
          <p className="mt-4">
            <a href="mailto:contact@optivantage.in" className="hover:text-white transition-colors">contact@optivantage.in</a>
          </p>
          <p>
            <a href="tel:+919971701239" className="hover:text-white transition-colors">+91 9971701239</a>
          </p>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Optivantage Technologies Pvt Ltd. All rights reserved.</p>
    </div>
  </div>
</footer>
