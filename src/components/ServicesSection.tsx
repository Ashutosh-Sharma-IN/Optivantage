"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Brain, Server, Package } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: EASE,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: Brain,
    title: "AI Training & Advisory",
    href: "/services/ai-training-advisory",
    description:
      "From building AI literacy across your teams to designing your full AI implementation roadmap — including AI security & governance (ISO 42001).",
    features: [
      "Gen AI literacy: Copilot, ChatGPT, Gemini, OpenAI",
      "AI Strategy, Policy & Governance (ISO/IEC 42001)",
      "AI Implementation Roadmap & Agentic AI",
      "AI+ Certified Training Programs",
    ],
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    href: "/services/it-infrastructure",
    description:
      "End-to-end network design, build, and field support — passive cabling to active networking, with power infrastructure and network security built in.",
    features: [
      "Network Design, LAN/WAN, SD-WAN, WiFi",
      "Passive Infrastructure: cabling, fibre, data centre",
      "Network Security: Fortinet & Palo Alto Networks",
      "Power & Electrical: Vertiv (authorised reseller)",
    ],
  },
  {
    icon: Package,
    title: "IT Equipment & Rentals",
    href: "/services/it-equipment-rentals",
    description:
      "Supply, rent, and maintain enterprise IT compute — desktops, laptops, workstations, printers, and networking gear for projects, events, or long-term needs.",
    features: [
      "Laptops, Desktops, Workstations (Dell, HP, Lenovo)",
      "Printers, Peripherals & Networking Devices",
      "Short-term & Long-term Equipment Rentals",
      "Annual Maintenance Contracts (AMC)",
    ],
  },
];

const partners = [
  {
    name: "Cisco",
    logo: "/logos/Cisco logo.webp",
    badge: "Registered Partner",
  },
  { name: "Fortinet", logo: "/logos/Fortinet logo.png", badge: "Partner" },
  {
    name: "Palo Alto Networks",
    logo: "/logos/Palo Alto networks logo.png",
    badge: "Partner",
  },
  {
    name: "Vertiv",
    logo: "/logos/Liebert Vertiv Logo.png",
    badge: "Authorised Reseller",
  },
];

export default function ServicesSection() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Our Three Service Areas
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We made a deliberate choice to go deep, not wide. Every
              engagement is founder-led, not delegated to junior consultants.
            </p>
          </AnimatedSection>

          <motion.div
            ref={servicesRef}
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/5 flex flex-col group cursor-default"
                >
                  <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <CheckCircle className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-brand font-semibold hover:gap-2.5 transition-all duration-200 mt-auto cursor-pointer"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Copilot Course Banner */}
      <AnimatedSection className="py-12 px-4 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#0078D4]/10 to-brand/10 border border-[#0078D4]/30 rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/5 to-transparent pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="bg-white rounded-xl p-3 shadow-md">
                  <Image
                    src="/platforms/Microsoft Logo.jpg"
                    alt="Microsoft"
                    width={80}
                    height={32}
                    className="object-contain h-8 w-auto"
                  />
                </div>
                <span className="text-white/40 text-2xl font-light">×</span>
                <div className="bg-white rounded-xl p-3 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Optivantage"
                    width={80}
                    height={32}
                    className="object-contain h-8 w-auto"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-3 py-1 mb-3">
                  <span className="text-brand text-xs font-semibold">
                    New · Live Course
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Master Microsoft Copilot 365 — In 4 Weekends
                </h3>
                <p className="text-text-muted text-sm">
                  20 hours · 22 modules · Small cohorts · Role playbooks ·
                  Certificate. Taught by an accredited Microsoft & Google AI
                  trainer.
                </p>
              </div>
              <Link
                href="/training/copilot-365"
                className="flex-shrink-0 px-6 py-3 bg-[#0078D4] hover:bg-[#006CBE] text-white font-semibold rounded-lg transition-all flex items-center gap-2 text-sm whitespace-nowrap cursor-pointer"
              >
                See Course Details
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Strip */}
      <AnimatedSection className="py-14 px-4 bg-navy-900 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
            Technology Partners & Authorised Resellers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                className="flex flex-col items-center gap-3"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white rounded-xl p-4 w-full flex items-center justify-center h-20 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={60}
                    className="object-contain h-10 w-auto"
                  />
                </div>
                <span className="text-xs text-brand font-semibold text-center">
                  {partner.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Optivantage inline cards */}
      <section className="py-24 bg-navy-800 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Why Optivantage?
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We&apos;re not consultants who&apos;ve only read the playbook.
              We&apos;ve lived it — running operations for global enterprises
              across telecom, aviation, and banking.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              {
                icon: Brain,
                title: "AI From Training to Governance",
                body: "We cover the full AI journey — from building literacy across your teams to ISO/IEC 42001 AI governance. Certified Microsoft & Google AI trainer. 1000+ professionals trained.",
              },
              {
                icon: Server,
                title: "Infrastructure Built to Enterprise Standard",
                body: "Cisco Registered Partner. Vertiv Authorised Reseller. Fortinet & Palo Alto Networks. We design and build infrastructure that runs — from passive cabling to network security.",
              },
              {
                icon: Package,
                title: "Specialists. Not Generalists.",
                body: "Three focused services — not twenty. Every engagement is led by the founder, backed by 25 years of running enterprise IT for BT, Telstra, and SITA. You get the expert, not a junior.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/40 transition-colors duration-300 cursor-default"
              >
                <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-brand" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {title}
                </h3>
                <p className="text-text-muted leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
