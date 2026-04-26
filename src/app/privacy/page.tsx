import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Optivantage Technologies',
  description: 'Privacy Policy for Optivantage Technologies Private Limited. How we collect, use, and protect your information.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.optivantage.in/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-10">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Who We Are</h2>
            <p>
              Optivantage Technologies Private Limited (&quot;Optivantage&quot;, &quot;we&quot;, &quot;us&quot;) is a company registered in India
              (CIN: U62099DL2025PTC457949) with its registered office at SFS Flat No 159, Sector 9, Pocket 1, Dwarka,
              New Delhi 110077. We provide AI training, IT infrastructure, and IT equipment rental services.
            </p>
            <p className="mt-2">
              For privacy queries, contact us at: <a href="mailto:contact@optivantage.in" className="text-brand hover:underline">contact@optivantage.in</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Name, email address, phone number, and organisation when you contact us or submit an enquiry</li>
              <li>Information you share when completing our AI Readiness Assessment quiz</li>
              <li>Communications you send us by email or through our contact form</li>
            </ul>
            <p className="mt-3">We also collect usage data automatically via Google Analytics (GA4), including pages visited, session duration, and approximate location (country/city level). No personally identifiable information is shared with Google Analytics.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to enquiries and provide the services you request</li>
              <li>To send service-related communications (proposals, invoices, updates)</li>
              <li>To improve our website and understand which content is most useful</li>
              <li>To comply with legal obligations under Indian law</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary to fulfil the purpose for which it was collected,
              or as required by applicable law. Enquiry data is retained for up to 3 years unless you request deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email us at <a href="mailto:contact@optivantage.in" className="text-brand hover:underline">contact@optivantage.in</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Cookies</h2>
            <p>
              Our website uses cookies for analytics (Google Analytics GA4) and to remember your preferences.
              By using our website, you consent to our use of these cookies. You can disable cookies in your browser
              settings, but some features of the site may not function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Third-Party Services</h2>
            <p>We use the following third-party services that may process your data:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Google Analytics (GA4)</strong> — website analytics</li>
              <li><strong>HubSpot</strong> — CRM and lead management (enquiry data only)</li>
              <li><strong>Resend</strong> — transactional email delivery</li>
              <li><strong>Calendly</strong> — meeting scheduling</li>
            </ul>
            <p className="mt-3">Each third party operates under its own privacy policy and applicable data protection law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Material changes will be posted on this page
              with an updated date. Your continued use of our website after changes constitutes acceptance of the revised policy.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-brand hover:underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
