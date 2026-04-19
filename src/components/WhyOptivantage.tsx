"use client";
import { motion } from "framer-motion";
import { X, Check, Target } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const notList = [
  "A large IT services company doing everything for everyone",
  "Offshore body-shopping or staff augmentation",
  "Generic AI consultants reading from PowerPoint decks",
  "Fresh graduates learning on your critical projects",
  "Building custom ERP, CRM, or mobile apps",
];

const isList = [
  {
    title: "AI Trainers & Advisors",
    body: "1000+ professionals trained. Microsoft & Google certified. ISO 42001 Lead Implementer.",
  },
  {
    title: "Network Infrastructure Builders",
    body: "Cisco Registered Partner. Vertiv Authorised Reseller. Fortinet & Palo Alto Networks.",
  },
  {
    title: "IT Equipment Suppliers & Rental Partners",
    body: "Dell, HP, Lenovo, Apple — flexible terms, AMC included.",
  },
  {
    title: "Founder-Led. Always.",
    body: "25 years of enterprise IT experience — you get the expert, not a junior consultant.",
  },
];

export default function WhyOptivantage() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            The Optivantage Edge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don&apos;t compete with Wipro, TCS, or Infosys. We operate in a
            specialized niche where boutique expertise beats scale.
          </p>
        </motion.div>

        {/* Two columns */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* NOT column */}
          <motion.div
            variants={fadeUp}
            className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                <X className="text-red-600 h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-900">
                We Are NOT:
              </h3>
            </div>
            <ul className="space-y-4">
              {notList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="text-red-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ARE column */}
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-brand/10 via-navy-900/5 to-brand/5 rounded-2xl p-8 border-2 border-brand/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-brand/20 rounded-full flex items-center justify-center">
                <Check className="text-brand h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-900">
                We ARE:
              </h3>
            </div>
            <ul className="space-y-4">
              {isList.map(({ title, body }) => (
                <li key={title} className="flex items-start gap-3">
                  <Check className="text-brand h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900">{title}</strong>
                    <p className="text-gray-600 text-sm mt-0.5">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA block */}
        <motion.div
          className="bg-navy-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/40 rounded-full px-4 py-2 mb-6">
              <Target className="text-brand h-5 w-5" />
              <span className="text-brand font-bold text-sm">
                Our Specialized Niche
              </span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              AI Training. IT Infrastructure. IT Equipment.
            </h3>

            <p className="text-xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-10">
              If you need ERP implementation, mobile apps, or a 500-person IT
              helpdesk — we&apos;ll refer you elsewhere.
              <br />
              <br />
              If you need someone who has actually{" "}
              <strong className="text-brand">
                trained 1000+ professionals in AI
              </strong>
              ,{" "}
              <strong className="text-brand">
                built network infrastructure for enterprises across India
              </strong>
              ,{" "}
              <strong className="text-brand">
                managed £100M+ telecom P&amp;L at BT
              </strong>
              , and{" "}
              <strong className="text-brand">
                is ISO 42001 AI Governance certified
              </strong>{" "}
              — we&apos;re your team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-brand/20 cursor-pointer"
              >
                See Our Services
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all duration-200 border border-white/20 cursor-pointer"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
