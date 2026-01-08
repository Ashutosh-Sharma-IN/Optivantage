"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
      
      {/* TOP BANNER (CONTACT INFO) - UPDATED: WHITE BG, NAVY TEXT */}
      <section className="bg-white py-4 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-4">
             {/* Logo and Company Name */}
             <Link href="/" className="flex items-center gap-4">
                 <Image 
  src="/logo.png" 
  alt="Optivantage Logo" 
  width={63}
  height={63}
  className="h-12 w-auto object-contain"
/>
<div className="flex flex-col">
  <span className="text-2xl font-bold text-navy-900 tracking-tight">OPTIVANTAGE</span>
  <span className="text-[11px] uppercase tracking-widest text-navy-900/70 font-medium">Technologies Private Ltd</span>
</div>
             </Link>
          </div>

          {/* Contact Details (Right Side) - NAVY TEXT */}
          <div className="flex flex-wrap justify-end gap-4 md:gap-8 text-navy-900 text-sm md:text-right">
            <div className="flex items-center gap-2">
               <Phone size={18} className="text-navy-900/90" />
               <a href="tel:+919971701239" className="hover:text-brand transition-colors">+91 9971701239</a>
            </div>
            {/* Added New Mobile Number */}
            <div className="flex items-center gap-2">
               <Phone size={18} className="text-navy-900/90" />
               <a href="tel:+91987122319" className="hover:text-brand transition-colors">+91 9871222319</a>
            </div>
            <div className="flex items-center gap-2">
               <Mail size={18} className="text-navy-900/90" />
               <a href="mailto:contact@optivantage.in" className="hover:text-brand transition-colors">contact@optivantage.in</a>
            </div>
            <div className="flex items-center gap-2">
               <MapPin size={18} className="text-navy-900/90" />
               <span className="hover:text-brand transition-colors">Dwarka, New Delhi</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN NAVIGATION */}
      <nav className="bg-navy-900/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Spacer to align with top bar */}
            <div className="hidden md:block w-12"></div>
            
          <div className="hidden md:flex space-x-8">
  {navLinks.map((link) => (
    <div key={link.name} className="relative">
      {link.dropdown ? (
        <>
          <button 
            className="flex items-center gap-1 text-sm font-medium text-white hover:text-brand transition-colors py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setTimeout(() => setServicesOpen(false), 200)}
          >
            {link.name}
            <ChevronDown size={16} />
          </button>
          
          {servicesOpen && (
            <div 
              className="absolute top-full left-0 mt-2 w-64 bg-navy-800 border border-white/10 rounded-lg shadow-xl py-2 z-50"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {link.dropdown.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-sm text-white hover:bg-brand/20 hover:text-brand transition-colors"
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

            {/* Mobile menu button */}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-navy-900 border-b border-white/10 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
