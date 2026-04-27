import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Microsoft Copilot 365 Training India | Expert AI Productivity Training | Optivantage',
  description: 'Master Microsoft Copilot 365 with expert training in India. Learn AI-powered productivity tools, automation, and enterprise integration. Hands-on training for professionals.',
  keywords: [
    'Microsoft Copilot training India',
    'Copilot 365 course Delhi',
    'AI productivity training',
    'Microsoft Copilot certification',
    'Copilot for business India',
    'AI automation training',
    'Microsoft 365 AI training',
    'Copilot expert training'
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Microsoft Copilot 365 Expert Training",
      "description": "Comprehensive training program to master Microsoft Copilot 365 for enterprise productivity and AI automation.",
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
      "coursePrerequisites": "Basic Microsoft 365 knowledge",
      "teaches": [
        "Microsoft Copilot integration",
        "AI-powered productivity tools",
        "Enterprise automation",
        "Copilot for Teams, Word, Excel, PowerPoint",
        "AI content creation",
        "Workflow automation"
      ],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "blended",
        "duration": "P4W",
        "instructor": {
          "@type": "Person",
          "name": "Optivantage AI Experts"
        },
        "location": {
          "@type": "Place",
          "name": "India & Online"
        },
        "offers": {
          "@type": "Offer",
          "price": "75000",
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
          "name": "What is Microsoft Copilot 365 training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Microsoft Copilot 365 training teaches professionals how to leverage AI-powered productivity tools across Microsoft 365 applications including Word, Excel, PowerPoint, Teams, and Outlook. Learn to automate workflows, generate content, and enhance productivity using AI."
          }
        },
        {
          "@type": "Question",
          "name": "Who should take Microsoft Copilot training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This training is ideal for business professionals, managers, executives, IT administrators, and anyone using Microsoft 365 who wants to boost productivity with AI tools. No prior AI experience required."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the Copilot 365 training program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our comprehensive Copilot 365 training spans 4 weekends (16 hours total) with hands-on exercises, real-world projects, and certification. Weekend format designed for working professionals."
          }
        },
        {
          "@type": "Question",
          "name": "What will I learn in Microsoft Copilot training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You'll master Copilot integration across Microsoft 365 apps, learn AI content creation, workflow automation, data analysis with AI, collaborative features, and best practices for enterprise implementation."
          }
        }
      ]
    }
  ]
};

export default function MicrosoftCopilotTraining() {
  const features = [
    {
      title: "Copilot for Microsoft Word",
      description: "AI-powered content creation, editing assistance, and document automation",
      icon: "📝"
    },
    {
      title: "Copilot for Excel",
      description: "Intelligent data analysis, formula suggestions, and automated reporting",
      icon: "📊"
    },
    {
      title: "Copilot for PowerPoint",
      description: "AI-generated presentations, slide design, and content suggestions",
      icon: "📽️"
    },
    {
      title: "Copilot for Teams",
      description: "Enhanced meeting productivity, automated summaries, and smart scheduling",
      icon: "👥"
    },
    {
      title: "Workflow Automation",
      description: "Streamline business processes with AI-powered automation",
      icon: "⚡"
    },
    {
      title: "Enterprise Integration",
      description: "Secure deployment and governance for organizational use",
      icon: "🏢"
    }
  ];

  const benefits = [
    "50% reduction in document creation time",
    "Enhanced data analysis capabilities",
    "Improved meeting productivity",
    "AI-powered content generation",
    "Streamlined workflow automation",
    "Microsoft certification upon completion"
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
            Microsoft Copilot 365 Training
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master AI-powered productivity tools and transform your workflow with expert-led Microsoft Copilot training in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master AI Productivity?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join India's leading Microsoft Copilot training program. Limited seats available for our next cohort.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Enroll Now - ₹75,000
            </a>
            <a
              href="/ai-training-guide"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}