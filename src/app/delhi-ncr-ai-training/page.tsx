import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Training Delhi NCR | Best AI Courses in Delhi, Gurgaon, Noida | Optivantage',
  description: 'Premier AI training institute in Delhi NCR. Microsoft Copilot, ISO 42001, ChatGPT courses in Delhi, Gurgaon, Noida. Expert AI training for professionals in India\'s capital region.',
  keywords: [
    'AI training Delhi',
    'AI courses Gurgaon',
    'AI training Noida',
    'AI institute Delhi NCR',
    'Microsoft Copilot training Delhi',
    'ISO 42001 training Gurgaon',
    'AI certification Delhi',
    'Best AI courses NCR'
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "name": "Optivantage Technologies",
      "description": "Leading AI training institute in Delhi NCR offering comprehensive AI courses and certifications",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi NCR",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Delhi"
        },
        {
          "@type": "City",
          "name": "Gurgaon"
        },
        {
          "@type": "City",
          "name": "Noida"
        },
        {
          "@type": "City",
          "name": "Faridabad"
        },
        {
          "@type": "City",
          "name": "Ghaziabad"
        }
      ],
      "offers": [
        {
          "@type": "Course",
          "name": "Microsoft Copilot 365 Training",
          "areaServed": "Delhi NCR"
        },
        {
          "@type": "Course",
          "name": "ISO 42001 AI Governance Training",
          "areaServed": "Delhi NCR"
        },
        {
          "@type": "Course",
          "name": "ChatGPT and Generative AI Training",
          "areaServed": "Delhi NCR"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "areaServed": "Delhi NCR"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find AI training centers in Delhi NCR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optivantage Technologies offers premier AI training in Delhi NCR with centers and online options serving Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. Our expert-led programs include Microsoft Copilot 365, ISO 42001 governance, and ChatGPT training."
          }
        },
        {
          "@type": "Question",
          "name": "What AI courses are available in Gurgaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gurgaon professionals can access our comprehensive AI training portfolio including Microsoft Copilot for productivity, ISO 42001 for AI governance, Generative AI with ChatGPT, and enterprise AI implementation courses. Programs designed for corporate professionals in Gurgaon's business districts."
          }
        },
        {
          "@type": "Question",
          "name": "Are there weekend AI training programs in Noida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer flexible weekend AI training programs in Noida for working professionals. Our 'AI in 4 Weekends' program covers essential AI skills, while specialized courses in Microsoft Copilot and ISO 42001 are available in intensive weekend formats."
          }
        }
      ]
    }
  ]
};

export default function DelhiNCRTraining() {
  const locations = [
    {
      city: "Delhi",
      areas: ["Connaught Place", "Karol Bagh", "Lajpat Nagar", "Online"],
      programs: ["All AI Programs", "Corporate Training", "Weekend Batches"]
    },
    {
      city: "Gurgaon",
      areas: ["Cyber City", "Golf Course Road", "MG Road", "Online"],
      programs: ["Enterprise AI", "Microsoft Copilot", "ISO 42001"]
    },
    {
      city: "Noida",
      areas: ["Sector 62", "Sector 18", "Sector 16", "Online"],
      programs: ["AI Fundamentals", "Weekend Programs", "Corporate Workshops"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Mahindra, Gurgaon",
      text: "Excellent Microsoft Copilot training. The practical approach helped me implement AI tools immediately in my work.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Deloitte, Delhi",
      text: "ISO 42001 training was comprehensive and directly applicable to our AI governance requirements.",
      rating: 5
    },
    {
      name: "Amit Singh",
      company: "HCL Technologies, Noida",
      text: "The weekend format was perfect for working professionals. Highly recommend for AI skills development.",
      rating: 5
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Training in Delhi NCR
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's leading AI training institute serving Delhi, Gurgaon, Noida, and surrounding areas.
            Expert-led programs for professionals in the National Capital Region.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.city}</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Service Areas:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {location.areas.map((area, idx) => (
                    <li key={idx}>• {area}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Available Programs:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {location.programs.map((program, idx) => (
                    <li key={idx}>• {program}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Optivantage in Delhi NCR?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Expert Faculty</h3>
              <p className="text-gray-600 mb-4">
                25+ years of enterprise IT experience with deep AI expertise. Our trainers are industry veterans
                who have implemented AI solutions across Fortune 500 companies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Local Presence</h3>
              <p className="text-gray-600 mb-4">
                Strategic locations across Delhi NCR with flexible online options. Training designed for
                the unique needs of NCR's corporate and IT sectors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Industry Focus</h3>
              <p className="text-gray-600 mb-4">
                Specialized programs for telecom, aviation, BFSI, and technology sectors prevalent in Delhi NCR.
                Real-world case studies from local industries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Flexible Learning</h3>
              <p className="text-gray-600 mb-4">
                Weekend batches, corporate training, and online sessions to accommodate busy professionals
                in India's corporate capital.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Delhi NCR Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your AI Journey in Delhi NCR</h2>
          <p className="text-xl mb-6 opacity-90">
            Join 1000+ professionals from Delhi NCR who've transformed their careers with our AI training.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation
            </a>
            <a
              href="/ai-training-guide"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}