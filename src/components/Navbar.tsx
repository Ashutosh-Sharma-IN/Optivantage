"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "AI Training & Advisory", href: "/services/ai-training-advisory" },
      { name: "IT Infrastructure", href: "/services/it-infrastructure" },
      { name: "IT Equipment & Rentals", href: "/services/it-equipment-rentals" },
      { name: "Copilot 365 Course", href: "/training/copilot-365" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full z-50 fixed top-0 left-0 right-0">
      {/* Top contact banner — hides on scroll */}
      <motion.div
        animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col md:flex-row justify-between items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Optivantage Logo"
              width={79}
              height={79}
              className="h-[48px] w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-navy-900 tracking-tight">
                OPTIVANTAGE
              </span>
              <span className="text-[10px] uppercase tracking-widest text-navy-900/60 font-medium">
                TECHNOLOGIES PVT LTD
              </span>
            </div>
          </Link>

          <div className="flex flex-wrap justify-end gap-5 text-sm text-navy-900">
            <div className="flex items-center gap-1.5">
              <Phone size={14} className="text-navy-900/70" />
              <span>+91 9971701239</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={14} className="text-navy-900/70" />
              <span>+91 9871253355</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={14} className="text-navy-900/70" />
              <a
                href="mailto:contact@optivantage.in"
                className="hover:text-brand transition-colors"
              >
                contact@optivantage.in
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-lg shadow-xl shadow-black/20"
            : "bg-navy-900/95 backdrop-blur-md"
        } border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo (shown only when scrolled) */}
            <AnimatePresence>
              {scrolled && (
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/logo.png"
                      alt="Optivantage"
                      width={36}
                      height={36}
                      className="h-8 w-auto object-contain"
                    />
                    <span className="font-heading font-bold text-white text-sm tracking-wide">
                      OPTIVANTAGE
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop nav links */}
            <div className={`hidden md:flex items-center gap-8 ${!scrolled ? "mx-auto" : ""}`}>
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseLeave={() => link.dropdown && setTimeout(() => setServicesOpen(false), 200)}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        className="flex items-center gap-1 text-sm font-medium text-white hover:text-brand transition-colors duration-200 py-2 cursor-pointer"
                        onMouseEnter={() => setServicesOpen(true)}
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-1 w-64 bg-navy-800 border border-white/10 rounded-xl shadow-2xl py-2 z-50"
                            onMouseEnter={() => setServicesOpen(true)}
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2.5 text-sm text-white hover:bg-brand/15 hover:text-brand transition-colors duration-150"
                                onClick={() => setServicesOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white hover:text-brand transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-5 py-2 bg-brand hover:bg-brand-hover text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md shadow-brand/20 cursor-pointer"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-brand transition-colors p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-navy-900 border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full text-left px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/8 flex items-center justify-between cursor-pointer"
                        >
                          {link.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 overflow-hidden"
                            >
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block px-3 py-2.5 rounded-lg text-sm text-white/80 hover:bg-white/8 hover:text-brand transition-colors"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setServicesOpen(false);
                                  }}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/8 hover:text-brand transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-3 pb-1">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
