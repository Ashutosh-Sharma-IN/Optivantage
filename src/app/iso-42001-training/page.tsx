import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ISO 42001 AI Governance Training India | AI Ethics & Compliance Certification | Optivantage',
  description: 'Master ISO 42001 AI governance framework with expert training in India. Learn AI ethics, risk management, and responsible AI implementation for enterprises.',
  keywords: [
    'ISO 42001 training India',
    'AI governance certification',
    'AI ethics training Delhi',
    'Responsible AI training',
    'AI compliance framework',
    'ISO 42001 course India',
    'AI risk management',
    'AI governance expert'
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "ISO 42001 AI Governance Training",
      "description": "Comprehensive training on ISO 42001 framework for AI governance, ethics, and responsible AI implementation.",
      "provider": {
        "@type": "Organization",
        "name": "Optivantage Technologies",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "addressCountry": "IN"
        }
      },
      "courseMode": "blended",
      "inLanguage": "en",
      "teaches": [
        "ISO 42001 framework implementation",
        "AI ethics and responsible AI",
        "AI risk assessment and management",
        "AI governance policies",
        "Compliance and regulatory requirements",
        "AI audit and monitoring"
      ],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "blended",
        "duration": "P2D",
        "instructor": {
          "@type": "Person",
          "name": "Optivantage AI Governance Experts"
        },
        "location": {
          "@type": "Place",
          "name": "India & Online"
        },
        "offers": {
          "@type": "Offer",
          "price": "45000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is ISO 42001 AI governance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ISO 42001 is the international standard for AI governance and management systems. It provides a framework for organizations to establish, implement, maintain, and continually improve AI management systems, ensuring responsible and ethical AI development and deployment."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ISO 42001 important for businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ISO 42001 helps organizations manage AI risks, ensure ethical AI practices, comply with regulations, build stakeholder trust, and demonstrate commitment to responsible AI. It's becoming essential for enterprises deploying AI solutions."
          }
        },
        {
          "@type": "Question",
          "name": "Who needs ISO 42001 certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI developers, data scientists, IT managers, compliance officers, risk managers, and executives responsible for AI governance in organizations. Particularly relevant for companies in regulated industries like healthcare, finance, and critical infrastructure."
          }
        },
        {
          "@type": "Question",
          "name": "How long does ISO 42001 training take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our intensive ISO 42001 training program is completed in 2 days with comprehensive coverage of the framework, practical implementation guidance, and certification preparation. Includes case studies and hands-on exercises."
          }
        }
      ]
    }
  ]
};

export default function ISO42001Training() {
  const modules = [
    {
      title: "AI Governance Fundamentals",
      content: "Understanding AI governance principles, regulatory landscape, and organizational responsibilities",
      duration: "4 hours"
    },
    {
      title: "ISO 42001 Framework Deep Dive",
      content: "Detailed exploration of all ISO 42001 clauses, requirements, and implementation guidelines",
      duration: "6 hours"
    },
    {
      title: "Risk Assessment & Management",
      content: "AI risk identification, assessment methodologies, and mitigation strategies",
      duration: "4 hours"
    },
    {
      title: "Ethical AI Implementation",
      content: "Bias detection, fairness principles, transparency requirements, and accountability frameworks",
      duration: "4 hours"
    },
    {
      title: "Compliance & Audit",
      content: "Internal audits, compliance monitoring, documentation requirements, and certification process",
      duration: "4 hours"
    }
  ];

  const benefits = [
    "Industry-recognized certification",
    "Enhanced AI risk management capabilities",
    "Regulatory compliance assurance",
    "Improved stakeholder trust",
    "Competitive advantage in AI adoption",
    "Framework for responsible AI deployment"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ISO 42001 AI Governance Training
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the international standard for AI governance and ensure responsible, ethical AI implementation in your organization.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Training Modules</h2>
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600 mb-2">{module.content}</p>
                <span className="text-sm text-blue-600 font-medium">{module.duration}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Attend?</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• AI project managers and developers</li>
              <li>• IT and compliance officers</li>
              <li>• Risk management professionals</li>
              <li>• Data scientists and analysts</li>
              <li>• Executive leadership teams</li>
              <li>• Regulatory compliance specialists</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get ISO 42001 Certified</h2>
          <p className="text-xl mb-6 opacity-90">
            Join India's premier ISO 42001 training program and become a certified AI governance expert.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Enroll Now - ₹45,000
            </a>
            <a
              href="/ai-training-guide"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View All Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}