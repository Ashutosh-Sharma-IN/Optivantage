"use client";
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <nav className="fixed w-full z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO + COMPANY NAME */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Ensure your logo file in public/ is named 'logo.png' or 'optivantage-logo.png' */}
              <Image 
                src="/logo.png" 
                alt="Optivantage Logo" 
                width={50} 
                height={50}
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none group-hover:text-brand transition-colors">
                  OPTIVANTAGE
                </span>
                <span className="text-[10px] uppercase tracking-widest text-text-muted font-medium leading-tight mt-1">
                  Technologies Private Ltd
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
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
  );
}
