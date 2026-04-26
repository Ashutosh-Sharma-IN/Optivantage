import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Optivantage Technologies',
  description: 'Terms of Service for Optivantage Technologies Private Limited. Terms governing use of our website and services.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.optivantage.in/terms' },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-400 mb-10">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website at <strong>www.optivantage.in</strong> (&quot;Website&quot;), you agree to be
              bound by these Terms of Service. If you do not agree, please do not use this Website.
              These terms apply to all visitors, clients, and others who access the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. About Optivantage</h2>
            <p>
              Optivantage Technologies Private Limited is a company registered in India
              (CIN: U62099DL2025PTC457949, GST: 07AAECO9369B1ZA) providing AI training and advisory,
              IT infrastructure, and IT equipment supply and rental services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Services</h2>
            <p>
              The Website provides information about our services and enables you to contact us, complete
              assessments, and book consultations. Engagement for specific services is governed by separate
              proposals, statements of work, or service agreements entered into between Optivantage and the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content on this Website — including text, images, graphics, training materials, assessments,
              blog posts, and branding — is the property of Optivantage Technologies Private Limited or its
              licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute,
              or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Disclaimer of Warranties</h2>
            <p>
              The Website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties
              of any kind, express or implied. Optivantage does not warrant that the Website will be error-free,
              uninterrupted, or free of viruses. Information on the Website is for general informational purposes only
              and does not constitute professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Optivantage Technologies Private Limited shall not be liable
              for any indirect, incidental, special, or consequential damages arising from your use of or inability
              to use the Website or our services. Our total liability in any matter arising out of or related to
              these terms shall not exceed INR 10,000.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Links to Third-Party Websites</h2>
            <p>
              Our Website may contain links to third-party websites. These links are provided for convenience only.
              Optivantage does not endorse and is not responsible for the content, privacy practices, or reliability
              of any third-party website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of India.
              Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the
              courts in New Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted on this page
              with an updated date. Continued use of the Website after changes constitutes your acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at:{' '}
              <a href="mailto:contact@optivantage.in" className="text-brand hover:underline">contact@optivantage.in</a>
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
