"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function LogosSection() {
  // CLIENT LOGOS - NO SCROLLING (FIX 5 & 6)
  const clients = [
    { name: 'Hexaware', logo: '/hexaware.png' },
    { name: 'Infogain', logo: '/infogain.png' },
    { name: 'Kotak Mahindra Bank', logo: '/kotak.png' },
    { name: 'MSME India', logo: '/msme.png' },
    { name: 'upGrad', logo: '/Upgrad.png' },
    { name: 'MSME PPDC', logo: '/MSME PPDC.png' },
  ];

  // EXPERIENCE COMPANIES - NO SCROLLING (FIX 6)
  const experienceCompanies = [
    { name: 'British Telecom', logo: '/experience/BT.png' },
    { name: 'Orange', logo: '/experience/Orange.png' },
    { name: 'SITA', logo: '/experience/sita.png' },
    { name: 'Telstra', logo: '/experience/telstra.png' },
    { name: 'Nortel', logo: '/experience/nortel.png' },
  ];

  // ✅ FIX 7: WORK EXPERTISE WITH CLICKABLE LINKS
  const workExpertise = [
    { 
      text: 'B2B Managed IT and Network Services', 
      link: '/services/managed'
    },
    { 
      text: 'Aviation IT', 
      link: '/services/managed'
    },
    { 
      text: 'Global Service Delivery', 
      link: '/services/managed'
    },
    { 
      text: 'Process Improvement and Infrastructure Optimization', 
      link: '/services/process'
    },
    { 
      text: 'AI consulting, advisory and training', 
      link: '/services/ai'
    }
  ];

  // CERTIFICATIONS
  const certifications = [
    { 
      name: 'AI Certs', 
      logo: '/certifications/aicerts.png', 
      details: [
        'AI+ Prompt Engineer',
        'AI+ Ethics',
        'AI+ Governance',
        'AI+ Chief AI Officer',
        'AI+ Executive'
      ]
    },
    { 
      name: 'AI for Non-Techies', 
      logo: '/certifications/aifornontechies.png', 
      details: ['Accredited Trainer']
    },
    { 
      name: 'Google Cloud', 
      logo: '/certifications/google.png', 
      details: ['Google Cloud Digital Leader']
    },
    { 
      name: 'ISO 42001', 
      logo: '/certifications/iso42001.png', 
      details: ['ISO/IEC 42001', 'Certified Lead Implementer']
    },
    { 
      name: 'ITIL', 
      logo: '/certifications/itil.png', 
      details: ['ITIL V4 Professional']
    },
    { 
      name: 'AWS', 
      logo: '/certifications/aws.png', 
      details: ['Cloud Economics', 'Business Partner']
    },
    { 
      name: 'Texas AI', 
      logo: '/certifications/Texas AI.png', 
      details: ['AI for Leaders', 'UT Austin']
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ✅ CLIENT LOGOS - STATIC GRID (NO SCROLLING) */}
        <div>
          <div className="text-center mb-12">
            {/* ✅ FIX 3: REMOVED (2024) */}
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
              Recent AI Training Clients
            </p>
            <h2 className="text-3xl font-bold text-navy-900">
              Trusted by Fortune 500 & Government
            </h2>
          </div>
          
          {/* STATIC GRID - NO AUTO-SCROLL */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clients.map((client) => (
              <div 
                key={client.name} 
                className="transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} - AI Training Client`}
                  width={180}
                  height={90}
                  className="object-contain h-20 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FOUNDER'S EXPERIENCE SECTION */}
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
          
          {/* ✅ COMPANIES - STATIC GRID (NO SCROLLING) */}
          <div className="mb-10">
            <div className="flex items-center gap-2 justify-center mb-6">
              <Briefcase className="text-brand h-5 w-5" />
              <h3 className="text-xl font-semibold text-white text-center">
                Worked For
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {experienceCompanies.map((company) => (
                <div 
                  key={company.name} 
                  className="transition-all duration-300 hover:scale-110"
                >
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={140}
                      height={70}
                      className="object-contain h-16 w-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ FIX 7: AREAS OF EXPERTISE - LIGHT BLUE + CLICKABLE */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-white text-center mb-6">
              Areas of Expertise
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {workExpertise.map((expertise, index) => (
                <Link
                  key={index}
                  href={expertise.link}
                  className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <p className="text-white/90 font-medium group-hover:text-white transition-colors">{expertise.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* KEY ACHIEVEMENTS */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
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

        {/* CERTIFICATIONS */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center gap-2 justify-center mb-3">
              <GraduationCap className="text-brand h-6 w-6" />
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                Certifications & Accreditations
              </p>
            </div>
            <h2 className="text-3xl font-bold text-navy-900">
              Certified AI Trainer & Cloud Expert
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brand/50 hover:shadow-lg transition-all h-full flex flex-col items-center hover:scale-105">
                  <div className="mb-4 h-16 flex items-center justify-center">
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={100}
                      height={50}
                      className="object-contain h-12 w-auto"
                    />
                  </div>
                  
                  <div className="text-center">
                    {cert.details.map((detail, index) => (
                      <p 
                        key={index} 
                        className={`text-xs font-medium ${
                          index === 0 ? 'text-navy-900 font-semibold' : 'text-gray-600'
                        } ${index > 0 ? 'mt-1' : ''}`}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
