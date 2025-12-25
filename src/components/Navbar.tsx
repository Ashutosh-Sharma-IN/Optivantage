"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-full z-50">
      
      {/* TOP BANNER (CONTACT INFO) */}
      <section className="bg-brand py-4 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-4">
             <Image 
                src="/logo.png" 
                alt="Optivantage Logo" 
                width={50} 
                height={50}
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">OPTIVANTAGE</span>
                <span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">Technologies Private Ltd</span>
              </div>
          </div>

          <div className="flex flex-wrap justify-end gap-4 md:gap-8 text-white text-sm md:text-right">
            <div className="flex items-center gap-2">
               <Phone size={18} className="text-white/90" />
               <a href="tel:+919971701239" className="hover:text-white/70 transition-colors">+91 9971701239</a>
            </div>
            <div className="flex items-center gap-2">
               <Mail size={18} className="text-white/90" />
               <a href="mailto:contact@optivantage.in" className="hover:text-white/70 transition-colors">contact@optivantage.in</a>
            </div>
            <div className="flex items-center gap-2">
               <MapPin size={18} className="text-white/90" />
               <span className="hover:text-white/70 transition-colors">Dwarka, New Delhi</span>
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
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-brand transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-text-muted hover:text-white"
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
                  className="block px-3 py-3 rounded-md text-base font-medium text-text-muted hover:text-white hover:bg-white/5"
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
