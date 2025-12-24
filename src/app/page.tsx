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
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1e3a5f] to-[#1a365d] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Business with 
                <span className="text-[#FF6B35]"> Expert IT Services & AI Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                25+ years of experience in IT service management, infrastructure, and AI innovation. 
                Partner with industry experts who deliver results.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors">
                  Explore Services
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1e3a5f] transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">500+</div>
                <div className="text-sm">Clients Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">50+</div>
                <div className="text-sm">Industry Experts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f]">Trusted by Leading Organizations</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-[#1e3a5f]">Hexaware</div>
            <div className="text-2xl font-bold text-[#1e3a5f]">Infogain</div>
            <div className="text-2xl font-bold text-[#1e3a5f]">Kotak Mahindra</div>
            <div className="text-2xl font-bold text-[#1e3a5f]">MSME India</div>
            <div className="text-2xl font-bold text-[#1e3a5f]">upGrad</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive IT solutions tailored to your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActiveService(service)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#FF6B35]">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-[#FF6B35] hover:text-[#e55a2b]">
                  <span className="font-medium">Learn more</span>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Why Choose Optivantage?</h2>
              <p className="text-gray-600 mb-6">
                With 20+ years experience in working with leading global telecom companies, we bring unparalleled expertise 
                in IT service management, infrastructure optimization, and AI-driven transformation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1e3a5f]">Deep Industry Expertise</h4>
                    <p className="text-gray-600">25+ years in IT service management and infrastructure</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1e3a5f]">AI Innovation Leaders</h4>
                    <p className="text-gray-600">Cutting-edge AI training and implementation solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1e3a5f]">Proven Results</h4>
                    <p className="text-gray-600">98% client satisfaction with measurable business impact</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Our Customer Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-lg font-semibold text-[#1e3a5f]">Hexaware</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-lg font-semibold text-[#1e3a5f]">Infogain</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-lg font-semibold text-[#1e3a5f]">Kotak Mahindra</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-lg font-semibold text-[#1e3a5f]">MSME India</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg col-span-2">
                    <div className="text-lg font-semibold text-[#1e3a5f]">upGrad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results for real businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <p className="text-[#FF6B35] font-medium mb-4">{study.result}</p>
                <div className="flex flex-wrap gap-2">
                  {study.metrics.map((metric, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized expertise across key sectors</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{industry}</h3>
                <p className="text-gray-600">Specialized solutions and deep industry knowledge</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <FaQuoteLeft className="text-[#FF6B35] mb-4" />
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e3a5f]">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how our expertise can drive your success
          </p>
          <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with our experts</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Address</h3>
                <p className="text-gray-600">Sector 9, Dwarka, New Delhi 110077</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Email</h3>
                <p className="text-gray-600">info@optivantage.in</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"></textarea>
                </div>
                <button type="submit" className="bg-[#FF6B35] text-white px-6 py-2 rounded-lg hover:bg-[#e55a2b] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <span className="text-xl font-bold">Optivantage</span>
              </div>
              <p className="text-gray-300">
                Expert IT services and AI solutions for business transformation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Cybersecurity</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">AI Advisory</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">IT Infrastructure</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Managed Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Sector 9, Dwarka, New Delhi 110077</li>
                <li>info@optivantage.in</li>
                <li>+91 98765 43210</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Optivantage. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal */}
      {activeService && (
        <ServiceDetailModal 
          service={activeService} 
          onClose={() => setActiveService(null)} 
        />
      )}
    </div>
  );
}