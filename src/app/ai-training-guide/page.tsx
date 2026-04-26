import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Training India | Complete Guide to AI Skills Development | Optivantage',
  description: 'Comprehensive guide to AI training in India. Learn Microsoft Copilot 365, ChatGPT, ISO 42001 governance. Expert-led AI courses for enterprises, telecom, and aviation professionals.',
  keywords: [
    'AI training India',
    'AI courses Delhi',
    'Microsoft Copilot training',
    'ChatGPT training India',
    'ISO 42001 training',
    'AI skills development',
    'Enterprise AI training',
    'AI certification India',
    'AI coaching Delhi',
    'Generative AI training'
  ],
  openGraph: {
    title: 'AI Training India | Complete Guide to AI Skills Development',
    description: 'Master AI skills with India\'s leading training provider. Expert-led courses for Microsoft Copilot, ISO 42001, and enterprise AI implementation.',
    url: 'https://optivantage.in/ai-training-guide',
    siteName: 'Optivantage',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Training India | Complete Guide to AI Skills Development',
    description: 'Master AI skills with India\'s leading training provider. Expert-led courses for Microsoft Copilot, ISO 42001, and enterprise AI implementation.',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the best AI training programs available in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "India offers world-class AI training programs through institutions like Optivantage, IITs, and corporate training providers. Optivantage specializes in practical AI implementation training including Microsoft Copilot 365, ChatGPT, and ISO 42001 governance frameworks."
          }
        },
        {
          "@type": "Question",
          "name": "How much does AI training cost in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI training costs in India vary from ₹50,000 to ₹5,00,000 depending on the program duration, certification level, and provider. Optivantage offers customized enterprise programs with flexible pricing based on organization size and specific requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Which companies provide AI training in Delhi NCR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Leading AI training providers in Delhi NCR include Optivantage Technologies, Microsoft Learning Partners, Google AI training centers, and various IIT Delhi programs. Optivantage stands out with 25+ years of enterprise IT experience and founder-led training."
          }
        },
        {
          "@type": "Question",
          "name": "What AI skills are most in demand in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most demanded AI skills in India include prompt engineering, Microsoft Copilot 365, ChatGPT integration, AI ethics and governance (ISO 42001), machine learning implementation, and AI strategy development. Telecom and aviation sectors particularly need AI automation skills."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to learn AI in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI learning duration varies: basic AI literacy (2-4 weeks), intermediate skills (3-6 months), advanced implementation (6-12 months). Optivantage offers accelerated programs like 'AI in 4 Weekends' for working professionals."
          }
        }
      ]
    },
    {
      "@type": "Course",
      "name": "Microsoft Copilot 365 Training",
      "description": "Master productivity AI tools for enterprise use. Learn to integrate Copilot across Microsoft 365 suite.",
      "provider": {
        "@type": "Organization",
        "name": "Optivantage Technologies"
      },
      "courseMode": "online",
      "inLanguage": "en",
      "coursePrerequisites": "Basic computer skills",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "blended",
        "instructor": {
          "@type": "Person",
          "name": "Optivantage Expert Faculty"
        },
        "location": {
          "@type": "Place",
          "name": "Delhi NCR, India"
        }
      }
    },
    {
      "@type": "Course",
      "name": "ISO 42001 AI Governance Training",
      "description": "Learn AI ethics, risk management, and compliance frameworks for responsible AI implementation.",
      "provider": {
        "@type": "Organization",
        "name": "Optivantage Technologies"
      },
      "courseMode": "online",
      "inLanguage": "en",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "blended",
        "location": {
          "@type": "Place",
          "name": "Delhi NCR, India"
        }
      }
    }
  ]
};

export default function AITrainingGuide() {
  const faqs = [
    {
      question: "What are the best AI training programs available in India?",
      answer: "India offers world-class AI training programs through institutions like Optivantage, IITs, and corporate training providers. Optivantage specializes in practical AI implementation training including Microsoft Copilot 365, ChatGPT, and ISO 42001 governance frameworks."
    },
    {
      question: "How much does AI training cost in India?",
      answer: "AI training costs in India vary from ₹50,000 to ₹5,00,000 depending on the program duration, certification level, and provider. Optivantage offers customized enterprise programs with flexible pricing based on organization size and specific requirements."
    },
    {
      question: "Which companies provide AI training in Delhi NCR?",
      answer: "Leading AI training providers in Delhi NCR include Optivantage Technologies, Microsoft Learning Partners, Google AI training centers, and various IIT Delhi programs. Optivantage stands out with 25+ years of enterprise IT experience and founder-led training."
    },
    {
      question: "What AI skills are most in demand in India?",
      answer: "Most demanded AI skills in India include prompt engineering, Microsoft Copilot 365, ChatGPT integration, AI ethics and governance (ISO 42001), machine learning implementation, and AI strategy development. Telecom and aviation sectors particularly need AI automation skills."
    },
    {
      question: "How long does it take to learn AI in India?",
      answer: "AI learning duration varies: basic AI literacy (2-4 weeks), intermediate skills (3-6 months), advanced implementation (6-12 months). Optivantage offers accelerated programs like 'AI in 4 Weekends' for working professionals."
    }
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Complete Guide to AI Training in India
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Master AI skills with India's leading training provider. From Microsoft Copilot 365 to ISO 42001 governance,
            get expert-led training designed for enterprise professionals.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AI Training in India?</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Expert Faculty:</strong> 25+ years enterprise IT experience</li>
            <li><strong>Industry Focus:</strong> Specialized training for telecom, aviation, and enterprise sectors</li>
            <li><strong>Practical Learning:</strong> Real-world AI implementation projects</li>
            <li><strong>Certification:</strong> Microsoft, ISO 42001, and custom certifications</li>
            <li><strong>Flexible Formats:</strong> Weekend programs, corporate training, online sessions</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular AI Training Programs</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Microsoft Copilot 365 Training</h3>
              <p className="text-gray-600 mb-4">Master productivity AI tools for enterprise use. Learn to integrate Copilot across Microsoft 365 suite.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Duration: 4 weekends</li>
                <li>• Certification: Microsoft certified</li>
                <li>• Hands-on projects included</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">ISO 42001 AI Governance</h3>
              <p className="text-gray-600 mb-4">Learn AI ethics, risk management, and compliance frameworks for responsible AI implementation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Duration: 2 days</li>
                <li>• Certification: ISO recognized</li>
                <li>• Enterprise case studies</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-gray-600 mb-6">
              Join 1000+ professionals who've transformed their careers with our AI training programs.
              Get personalized guidance for your industry and experience level.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free AI Training Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}