"use client";
import { X, Check, Target } from 'lucide-react';

export default function WhyOptivantage() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* ✅ FIX 4: CHANGED TO "THE OPTIVANTAGE EDGE" */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            The Optivantage Edge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't compete with Wipro, TCS, or Infosys. We operate in a specialized niche 
            where boutique expertise beats scale.
          </p>
        </div>

        {/* REST OF THE COMPONENT STAYS THE SAME */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                <X className="text-red-600 h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">We Are NOT:</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="text-red-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">A large IT services company doing everything for everyone</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Offshore body-shopping or staff augmentation</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Generic AI consultants reading from PowerPoint decks</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Fresh graduates learning on your critical projects</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Building custom ERP, CRM, or mobile apps</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-brand/10 via-navy-900/5 to-brand/5 rounded-2xl p-8 border-2 border-brand/30 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-brand/20 rounded-full flex items-center justify-center">
                <Check className="text-brand h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">We ARE:</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="text-brand h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900">AI Trainers & Advisors</strong>
                  <p className="text-gray-600 text-sm mt-1">1000+ professionals trained. Microsoft & Google certified. ISO 42001 Lead Implementer.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-brand h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900">Network Infrastructure Builders</strong>
                  <p className="text-gray-600 text-sm mt-1">Cisco Registered Partner. Vertiv Authorised Reseller. Fortinet & Palo Alto Networks.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-brand h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900">IT Equipment Suppliers & Rental Partners</strong>
                  <p className="text-gray-600 text-sm mt-1">Dell, HP, Lenovo, Apple — flexible terms, AMC included.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-brand h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900">Founder-Led. Always.</strong>
                  <p className="text-gray-600 text-sm mt-1">25 years of enterprise IT experience — you get the expert, not a junior consultant.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-navy-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/40 rounded-full px-4 py-2 mb-6">
              <Target className="text-brand h-5 w-5" />
              <span className="text-brand font-bold text-sm">Our Specialized Niche</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Training. IT Infrastructure. IT Equipment.
            </h3>

            <p className="text-xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-8">
              If you need ERP implementation, mobile apps, or a 500-person IT helpdesk — we&apos;ll refer you elsewhere.
              <br /><br />
              If you need someone who has actually <strong className="text-brand">trained 1000+ professionals in AI</strong>,{' '}
              <strong className="text-brand">built network infrastructure for enterprises across India</strong>,{' '}
              <strong className="text-brand">managed £100M+ telecom P&L at BT</strong>, and{' '}
              <strong className="text-brand">is ISO 42001 AI Governance certified</strong> — we&apos;re your team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand hover:bg-brand/90 text-white font-bold rounded-lg transition-all"
              >
                See Our Services
              </a>
              <a 
                href="/case-studies" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border border-white/20"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
