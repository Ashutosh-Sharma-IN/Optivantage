"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'AI Advisory & Training', href: '/services/ai' },
        { name: 'IT Infrastructure', href: '/services/infrastructure' },
        { name: 'Managed IT Services', href: '/services/managed' },
        { name: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
        { name: 'Process Improvement', href: '/services/process' },
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-full z-50">
      
      {/* TOP BANNER */}
      <section className="bg-white py-4 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-4">
             <Link href="/" className="flex items-center gap-4">
                  {/* ✅ FIX 3: LOGO 25% BIGGER */}
                  <Image 
                    src="/logo.png" 
                    alt="Optivantage Logo" 
                    width={79}
                    height={79}
                    className="h-[60px] w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-navy-900 tracking-tight">OPTIVANTAGE</span>
                    {/* ✅ FIX 3: CHANGED TEXT */}
                    <span className="text-[11px] uppercase tracking-widest text-navy-900/70 font-medium">TECHNOLOGIES PVT LTD</span>
                  </div>
             </Link>
          </div>

          <div className="flex flex-wrap justify-end gap-4 md:gap-8 text-navy-900 text-sm md:text-right">
            <div className="flex items-center gap-2">
               <Phone size={18} className="text-navy-900/90" />
               <a href="tel:+919971701239" className="hover:text-brand transition-colors">+91 9971701239</a>
            </div>
            <div className="flex items-center gap-2">
               <Phone size={18} className="text-navy-900/90" />
               <a href="tel:+91987122319" className="hover:text-brand transition-colors">+91 9871222319</a>
            </div>
            <div className="flex items-center gap-2">
               <Mail size={18} className="text-navy-900/90" />
               <a href="mailto:contact@optivantage.in" className="hover:text-brand transition-colors">contact@optivantage.in</a>
            </div>
            
            {/* ✅ FIX 2: ADDRESS WITH TOOLTIP */}
            <div className="relative flex items-center gap-2">
               <MapPin size={18} className="text-navy-900/90" />
               <button
                 onClick={() => setShowAddress(!showAddress)}
                 className="hover:text-brand transition-colors cursor-pointer"
               >
                 Dwarka, New Delhi
               </button>
               
               {showAddress && (
                 <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64 z-50">
                   <div className="flex items-start gap-2">
                     <MapPin size={16} className="text-brand flex-shrink-0 mt-1" />
                     <div className="text-sm text-navy-900">
                       <p className="font-semibold mb-1">Our Office</p>
                       <p>159, Sector 9, DDA,</p>
                       <p>Dwarka, New Delhi 110077</p>
                       <p className="text-xs text-gray-500 mt-2">India</p>
                     </div>
                   </div>
                   <button
                     onClick={() => setShowAddress(false)}
                     className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                   >
                     <X size={16} />
                   </button>
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FIX 1: NAVIGATION WITH FIXED DROPDOWN */}
      <nav className="bg-navy-900/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            <div className="hidden md:block w-12"></div>
            
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseLeave={() => {
                    if (link.dropdown) {
                      setTimeout(() => setServicesOpen(false), 300);
                    }
                  }}
                >
                  {link.dropdown ? (
                    <>
                      <button 
                        className="flex items-center gap-1 text-sm font-medium text-white hover:text-brand transition-colors py-2"
                        onMouseEnter={() => setServicesOpen(true)}
                      >
                        {link.name}
                        <ChevronDown size={16} />
                      </button>
                      
                      {servicesOpen && (
                        <div 
                          className="absolute top-full left-0 mt-0 w-64 bg-navy-800 border border-white/10 rounded-lg shadow-xl py-2 z-50"
                          onMouseEnter={() => setServicesOpen(true)}
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-3 text-sm text-white hover:bg-brand/20 hover:text-brand transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-sm font-medium text-white hover:text-brand transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/90 hover:text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-navy-900 border-b border-white/10 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full text-left px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/10 flex items-center justify-between"
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-sm text-white/80 hover:bg-white/10"
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
