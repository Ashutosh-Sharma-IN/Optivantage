"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

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
  visible: { transition: { staggerChildren: 0.08 } },
};

const clients = [
  { name: "BIAL", logo: "/BIAL logo.webp" },
  { name: "Hexaware", logo: "/hexaware.png" },
  { name: "Infogain", logo: "/infogain.png" },
  { name: "Kotak Mahindra Bank", logo: "/kotak.png" },
  { name: "MSME India", logo: "/msme.png" },
  { name: "upGrad", logo: "/Upgrad.png" },
  { name: "Arvind Fashions", logo: "/Arvind Fashions Logo.jpg" },
];

const experienceCompanies = [
  { name: "British Telecom", logo: "/experience/BT.png" },
  { name: "Orange", logo: "/experience/Orange.png" },
  { name: "SITA", logo: "/experience/sita.png" },
  { name: "Telstra", logo: "/experience/telstra.png" },
  { name: "Nortel", logo: "/experience/nortel.png" },
];

const workExpertise = [
  { text: "B2B Managed IT and Network Services", link: "/services/it-infrastructure" },
  { text: "Global Service Delivery & Field Engineering", link: "/services/it-infrastructure" },
  { text: "IT Infrastructure Design & Build", link: "/services/it-infrastructure" },
  { text: "IT Equipment Supply & Rentals", link: "/services/it-equipment-rentals" },
  { text: "AI Training, Advisory & Governance", link: "/services/ai-training-advisory" },
];

const certifications = [
  {
    name: "AI Certs",
    logo: "/certifications/aicerts.png",
    details: ["AI+ Prompt Engineer", "AI+ Ethics", "AI+ Governance", "AI+ Chief AI Officer", "AI+ Executive"],
  },
  {
    name: "AI for Non-Techies",
    logo: "/certifications/aifornontechies.png",
    details: ["Accredited Trainer"],
  },
  {
    name: "Google Cloud",
    logo: "/certifications/google.png",
    details: ["Google Cloud Digital Leader"],
  },
  {
    name: "ISO 42001",
    logo: "/certifications/iso42001.png",
    details: ["ISO/IEC 42001", "Certified Lead Implementer"],
  },
  {
    name: "ITIL",
    logo: "/certifications/itil.png",
    details: ["ITIL V4 Professional"],
  },
  {
    name: "AWS",
    logo: "/certifications/aws.png",
    details: ["Cloud Economics", "Business Partner"],
  },
  {
    name: "Texas AI",
    logo: "/certifications/Texas AI.png",
    details: ["AI for Leaders", "UT Austin"],
  },
];

export default function LogosSection() {
  return (
    <div className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Client Logos */}
        <div>
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
              Recent AI Training Clients
            </p>
            <h2 className="font-heading text-3xl font-bold text-navy-900">
              Trusted by Fortune 500 & Government
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="cursor-default"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} - AI Training Client`}
                  width={180}
                  height={90}
                  className="object-contain h-20 w-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Founder Experience */}
        <motion.div
          className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 md:p-14 border-2 border-brand/30 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/40 rounded-full px-4 py-2 mb-5">
              <span className="text-brand font-bold text-sm">Founder&apos;s Credentials</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-3">
              25+ Years Diverse Experience in Telecom & Aviation Operations
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Managing £100M+ P&amp;L and building Global Capability Centers from ground up
            </p>
          </div>

          {/* Experience companies */}
          <div className="mb-10">
            <div className="flex items-center gap-2 justify-center mb-6">
              <Briefcase className="text-brand h-5 w-5" />
              <h3 className="text-xl font-semibold text-white">Worked For</h3>
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experienceCompanies.map((company) => (
                <motion.div
                  key={company.name}
                  variants={fadeUp}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-default"
                >
                  <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={140}
                      height={70}
                      className="object-contain h-16 w-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Work expertise pills */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {workExpertise.map(({ text, link }) => (
                <Link
                  key={text}
                  href={link}
                  className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-brand/20 border border-white/20 hover:border-brand/40 rounded-full text-sm text-white/80 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>

          {/* Key achievements */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { stat: "£100M+", label: "Revenue Managed at BT Global" },
              { stat: "5 GCCs", label: "Built from Ground Up" },
              { stat: "2000+", label: "FTEs Led Globally" },
            ].map(({ stat, label }) => (
              <motion.div
                key={stat}
                variants={fadeUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-brand/30 transition-colors duration-300 cursor-default"
              >
                <div className="font-heading text-3xl font-bold text-brand mb-2">{stat}</div>
                <p className="text-sm text-white/80">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <div>
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 justify-center mb-3">
              <GraduationCap className="text-brand h-6 w-6" />
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                Certifications & Accreditations
              </p>
            </div>
            <h2 className="font-heading text-3xl font-bold text-navy-900">
              Certified AI Trainer & Cloud Expert
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={fadeUp}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brand/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center cursor-default"
                whileHover={{ y: -4 }}
              >
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
                  {cert.details.map((detail, i) => (
                    <p
                      key={i}
                      className={`text-xs font-medium ${
                        i === 0 ? "text-navy-900 font-semibold" : "text-gray-600"
                      } ${i > 0 ? "mt-1" : ""}`}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
