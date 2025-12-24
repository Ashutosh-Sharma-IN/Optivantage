'use client';

import { useState } from 'react';
import { FaCheckCircle, FaArrowRight, FaChevronLeft, FaShieldAlt, FaBrain, FaServer, FaUsers, FaChartLine, FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: <FaShieldAlt className="text-3xl" />,
      description: 'Comprehensive security frameworks and compliance solutions',
      details: {
        frameworks: ['ISO 27001/27002', 'SOX', 'GDPR', 'NIST'],
        services: [
          'Security monitoring and incident response',
          'Vulnerability assessments and penetration testing',
          'Security awareness training and certification',
          'Compliance audit and gap analysis',
          'Security policy development and implementation'
        ]
      }
    },
    {
      id: 'ai-advisory',
      title: 'AI Advisory & Training',
      icon: <FaBrain className="text-3xl" />,
      description: 'Strategic AI implementation and training programs',
      details: {
        certifications: ['AI+ Everyone', 'AI+ Executive', 'AI+ Prompt Engineer', 'AI+ Ethics'],
        expertise: [
          'Microsoft AI ecosystem (Azure AI, Copilot)',
          'Google AI platforms (Gemini, Vertex AI)',
          'Agentic AI and autonomous systems',
          'Executive AI strategy consulting',
          'AI ethics and governance frameworks'
        ]
      }
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      icon: <FaServer className="text-3xl" />,
      description: 'End-to-end infrastructure solutions and support',
      details: {
        services: [
          'Network infrastructure design and implementation',
          'SITC (System Integration, Testing, and Commissioning)',
          'WiFi optimization and network security',
          'SD-WAN and cloud connectivity',
          'Equipment rental and AMC services'
        ]
      }
    },
    {
      id: 'managed-services',
      title: 'Managed IT Services',
      icon: <FaUsers className="text-3xl" />,
      description: '24/7 IT support and service management',
      details: {
        support: [
          '24/7 L1-L3 technical support',
          'ITIL-based service management',
          'Aviation IT specialists',
          'Process improvement and optimization',
          'Offshore BOT (Build-Operate-Transfer) models',
          'Dedicated technical teams'
        ]
      }
    },
    {
      id: 'market-activation',
      title: 'Market Activation',
      icon: <FaChartLine className="text-3xl" />,
      description: 'Go-to-market strategy and business growth',
      details: {
        services: [
          'Go-to-market strategy for SaaS/AI products',
          'Lead generation and sales enablement',
          'Market analysis and competitive intelligence',
          'Partner ecosystem development',
          'Growth strategy and scaling advisory'
        ]
      }
    }
  ];

  const caseStudies = [
    {
      title: 'Telecom Security Transformation',
      description: 'Implemented comprehensive security framework for major telecom operator',
      result: 'Reduced security incidents by 85% and achieved ISO 27001 certification',
      metrics: ['85% reduction', 'ISO 27001 certified', '24/7 monitoring']
    },
    {
      title: 'AI Training Program',
      description: 'Developed and delivered enterprise-wide AI certification program',
      result: 'Trained 500+ professionals with 95% satisfaction rate',
      metrics: ['500+ trained', '95% satisfaction', 'Enterprise-wide']
    },
    {
      title: 'Infrastructure Optimization',
      description: 'Complete network infrastructure overhaul for financial services firm',
      result: 'Improved network performance by 60% and reduced downtime by 90%',
      metrics: ['60% performance', '90% less downtime', 'Cost optimized']
    }
  ];

  const industries = [
    'Telecommunications',
    'Banking & Financial Services',
    'Healthcare',
    'Government & Public Sector',
    'Manufacturing',
    'Technology & SaaS'
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CTO, Telecom Company',
      content: 'Optivantage transformed our security posture. Their expertise in telecom and cybersecurity is unmatched.'
    },
    {
      name: 'Priya Sharma',
      role: 'Director, Financial Services',
      content: 'The AI training program was exceptional. Our team is now leveraging AI effectively across operations.'
    },
    {
      name: 'Amit Patel',
      role: 'VP Operations, Manufacturing',
      content: 'Outstanding managed services support. Their ITIL-based approach has improved our service delivery significantly.'
    }
  ];

  const ServiceDetailModal = ({ service, onClose }: { service: any, onClose: () => void }) => {
    if (!service) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="text-[#FF6B35]">{service.icon}</div>
                <h2 className="text-2xl font-bold text-[#1e3a5f]">{service.title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">{service.description}</p>

            {service.details.frameworks && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">Compliance Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {service.details.frameworks.map((framework: string, index: number) => (
                    <span key={index} className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {service.details.certifications && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">Certification Programs</h3>
                <div className="flex flex-wrap gap-2">
                  {service.details.certifications.map((cert: string, index: number) => (
                    <span key={index} className="bg-[#1e3a5f] text-white px-3 py-1 rounded-full text-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">Services & Solutions</h3>
              <ul className="space-y-2">
                {service.details.services?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#FF6B35] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                )) || service.details.support?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#FF6B35] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                )) || service.details.expertise?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#FF6B35] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <button 
                onClick={onClose}
                className="bg-[#FF6B35] text-white px-6 py-2 rounded-lg hover:bg-[#e55a2b] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Find the active service object
  const activeServiceObject = services.find(service => service.id === activeService);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-[#1e3a5f]">Optivantage</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-[#FF6B35] transition-colors">About</a>
              <a href="#case-studies" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Case Studies</a>
              <a href="#industries" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Industries</a>
              <a href="#contact" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Contact</a>
            </nav>
            <button className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#e55a2b] transition-colors">
              G
