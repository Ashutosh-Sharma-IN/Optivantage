"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function LogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // AUTO-SCROLL EFFECT for client logos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 30);
    };

    startScroll();

    // Pause on hover
    scrollContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    scrollContainer.addEventListener('mouseleave', startScroll);

    return () => clearInterval(scrollInterval);
  }, []);

  // CLIENT LOGOS - ALWAYS COLORED, BIGGER
  const clients = [
    { name: 'Hexaware', logo: '/hexaware.png' },
    { name: 'Infogain', logo: '/infogain.png' },
    { name: 'Kotak Mahindra Bank', logo: '/kotak.png' },
    { name: 'MSME India', logo: '/msme.png' },
    { name: 'upGrad', logo: '/Upgrad.png' }, // Capital U
   // { name: 'MSME PPDC', logo: '/MSME PPDC.png' },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  // EXPERIENCE LOGOS - NOW COLORED & VISIBLE
  const experience = [
    { name: 'British Telecom', logo: '/experience/BT.png', years: '14 years' },
    { name: 'Orange', logo: '/experience/Orange.png', years: 'Network Ops' },
    { name: 'SITA', logo: '/experience/sita.png', years: 'Aviation IT' },
    { name: 'Telstra', logo: '/experience/telstra.png', years: 'Global Delivery' },
    { name: 'Nortel', logo: '/experience/nortel.png', years: 'B2B Managed IT and Network Services' }, // UPDATED TEXT
  ];

  // CERTIFICATIONS
  const certifications = [
    { name: 'AI for Non-Techies', logo: '/certifications/aifornontechies.png', title: 'Accredited Trainer' },
    { name: 'AI Certs', logo: '/certifications/aicerts.png', title: 'AI+ Certified' },
    { name: 'Google Cloud', logo: '/certifications/google.png', title: 'Digital Leader' },
    { name: 'AWS', logo: '/certifications/aws.png', title: 'Partner Accreditation' },
    { name: 'Texas AI', logo: '/certifications/Texas AI.png', title: 'AI for Leaders - UT Austin' },
    { name: 'ITIL', logo: '/certifications/itil.png', title: 'IT Service Management' },
    { name: 'ISO 42001', logo: '/certifications/iso42001.png', title: 'AI Management System' },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ========== CLIENT LOGOS - AUTO-SCROLLING, COLORED, BIGGER ========== */}
        <div>
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
              Recent AI Training Clients (2024)
            </p>
            <h2 className="text-3xl font-bold text-navy-900">
              Trusted by Fortune 500 & Government
            </h2>
          </div>
          
          {/* Auto-scrolling container */}
          <div className="overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-12 overflow-x-hidden"
              style={{ scrollBehavior: 'smooth' }}
            >
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`${client.name}-${index}`} 
                  className="flex-shrink-0 transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} - AI Training Client`}
                    width={180}
                    height={90}
                    className="object-contain h-20 w-auto" // BIGGER - h-20 instead of h-14
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== EXPERIENCE SECTION - COLORED & VISIBLE ========== */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 border-2 border-brand/30 shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/40 rounded-full px-4 py-2 mb-4">
              <span className="text-brand font-bold text-sm">Founder's Credentials</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">
              25+ Years Diverse Experience in Telecom & Aviation Operations
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Managing £100M+ P&L and building Global Capability Centers from ground up
            </p>
          </div>
          
          {/* Experience Logos - NO FILTERS, FULL COLOR */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center">
            {experience.map((company) => (
              <div key={company.name} className="text-center group">
                <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white hover:border-brand/50 transition-all hover:scale-105">
                  <Image
                    src={company.logo}
                    alt={`${company.name} - ${company.years}`}
                    width={120}
                    height={60}
                    className="object-contain h-16 w-auto mx-auto mb-3" // NO FILTERS - Full Color
                  />
                  <p className="text-xs text-brand font-semibold">{company.years}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Achievements */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-brand mb-2">£100M+</div>
              <p className="text-sm text-white/80">Revenue Managed at BT Global</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-brand mb-2">5 GCCs</div>
              <p className="text-sm text-white/80">Built from Ground Up</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-brand mb-2">2000+</div>
              <p className="text-sm text-white/80">FTEs Led Globally</p>
            </div>
          </div>
        </div>

        {/* ========== CERTIFICATIONS ========== */}
        <div>
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
              Certifications & Accreditations
            </p>
            <h2 className="text-3xl font-bold text-navy-900">
              Certified AI Trainer & Cloud Expert
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brand/50 hover:shadow-lg transition-all h-full flex flex-col items-center justify-center hover:scale-105">
                  <Image
                    src={cert.logo}
                    alt={`${cert.name} - ${cert.title}`}
                    width={100}
                    height={50}
                    className="object-contain h-12 w-auto mx-auto mb-2"
                  />
                  <p className="text-xs text-gray-600 font-medium mt-2">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
