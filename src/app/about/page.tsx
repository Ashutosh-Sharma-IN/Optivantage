import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import { Award, Briefcase, GraduationCap, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://www.optivantage.in";

export const metadata: Metadata = {
  title:
    "About Optivantage | Enterprise IT & AI Specialists | 25 Years Experience",
  description:
    "Optivantage Technologies — founder-led enterprise IT firm with 25 years at BT Global, Telstra, SITA, and Orange. Microsoft & Google certified AI trainers. ISO/IEC 42001 Lead Implementers. 1,000+ professionals trained. Specialists in AI training, network infrastructure & IT equipment rentals.",
  keywords: [
    "Optivantage Technologies about",
    "enterprise IT consultant India",
    "BT Global India",
    "Telstra India",
    "ISO 42001 lead implementer India",
    "Microsoft certified AI trainer India",
    "Google Cloud Digital Leader India",
    "AI trainer India",
    "IT consultant India 25 years experience",
    "ISO/IEC 42001 certified implementer India",
    "Ekahau WiFi engineer India",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title:
      "About Optivantage | Enterprise IT & AI Specialists | 25 Years Experience",
    description:
      "Founder-led enterprise IT firm — ex-BT Global, Telstra, SITA. Microsoft & Google certified AI trainers. ISO/IEC 42001 Lead Implementers. 1,000+ professionals trained pan-India.",
    url: `${BASE_URL}/about`,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${BASE_URL}/about`,
    },
  ],
};

const certifications = [
  {
    name: "Microsoft AI Trainer",
    img: "/certifications/ai-trainer-certificate.png",
  },
  { name: "ISO/IEC 42001", img: "/certifications/iso42001.png" },
  { name: "Google Cloud", img: "/certifications/google.png" },
  { name: "UT Austin AI", img: "/certifications/Texas AI.png" },
  { name: "AI Certs", img: "/certifications/aicerts.png" },
  { name: "AI for Non-Techies", img: "/certifications/aifornontechies.png" },
  { name: "ITIL V4", img: "/certifications/itil.png" },
  { name: "AWS", img: "/certifications/aws.png" },
];

const clients = [
  { name: "Kotak Mahindra Bank", sector: "BFSI" },
  { name: "BIAL (Bengaluru International Airport)", sector: "Aviation" },
  { name: "Hexaware", sector: "Technology" },
  { name: "Infogain", sector: "Technology" },
  { name: "MSME India", sector: "Government" },
];

export default function About() {
  return (
    <main>
      <Script
        id="schema-about-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />

      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            About Optivantage
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Optivantage Technologies is a specialist enterprise IT firm — AI
            training and advisory, IT infrastructure, and IT equipment rentals.
            Founder-led with 25 years of enterprise IT experience at BT,
            Telstra, SITA, and Orange.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-navy-900 p-8 rounded-xl border-l-4 border-brand">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-brand w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Mission</h3>
              </div>
              <p className="text-lg text-text-muted leading-relaxed">
                To empower enterprises with specialised AI transformation,
                network infrastructure, and IT services — delivering founder-led
                expertise where deep specialisation outperforms scale.
              </p>
            </div>

            <div className="bg-navy-900 p-8 rounded-xl border-l-4 border-brand">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-brand w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-lg text-text-muted leading-relaxed">
                To be the trusted partner for enterprises modernising operations
                with AI and Gen AI — where 25 years of battle-tested
                infrastructure expertise meets cutting-edge innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                The Optivantage Story
              </h2>

              <p className="text-lg text-text-muted leading-relaxed">
                After spending 25 years managing mission-critical IT
                infrastructure for global enterprises, our founders identified a
                fundamental gap in the market. Organisations were either stuck
                with legacy systems that couldn&apos;t scale, or rushing into AI
                adoption without the operational foundation to support it.
              </p>

              <p className="text-lg text-text-muted leading-relaxed">
                The real breakthrough came while leading service operations at
                BT Global — managing £100M in revenue across 100 large customers
                and building five Global Capability Centres from the ground up
                across Gurgaon, Bangalore, Pune, and Hyderabad.
              </p>

              <div className="bg-navy-800 p-6 rounded-xl border-l-4 border-brand my-8">
                <p className="text-xl text-white italic">
                  &ldquo;Optivantage was born from this unique vantage point —
                  combining deep, battle-tested infrastructure expertise with
                  cutting-edge AI innovation.&rdquo;
                </p>
              </div>

              <p className="text-lg text-text-muted leading-relaxed">
                From customer support engineering at Delhi&apos;s busiest
                airport to Director of Service Operations leading global
                professionals across four continents — our founding team brings
                the experience that true digital transformation requires: both
                technical excellence and human-centred change management.
              </p>
            </div>

            <div className="relative order-first md:order-last">
              <div className="sticky top-24 bg-navy-800 rounded-2xl p-8 border border-white/10">
                <p className="text-brand font-semibold text-sm mb-3 uppercase tracking-widest">
                  Founder-Led
                </p>
                <p className="text-white text-lg font-bold mb-2">
                  25 Years. Four Continents. Four Services.
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  BT Global · Telstra · SITA · Orange. Director-level IT
                  operations, 1,000+ professionals trained in AI, and four
                  specialist services built from the ground up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Credentials & Experience
          </h2>
          <p className="text-center text-text-muted mb-12">
            Every claim on this site is backed by a verifiable credential or
            named enterprise engagement.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Certifications */}
            <div className="bg-navy-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-brand mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Certifications
              </h3>
              <ul className="space-y-3 text-text-muted">
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> ISO/IEC 42001
                  Certified Lead Implementer
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> Microsoft Copilot &
                  Azure AI Certified Trainer
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> Google Cloud
                  Digital Leader
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> AI for Leaders —
                  University of Texas, Austin (PG Program)
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> Executive Program
                  in Leadership — IIM Kolkata
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> Ekahau Certified
                  WiFi Engineer (RF Design)
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> ITIL V4
                  Professional
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> AWS Partner
                  Accreditations
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> AI+ Chief AI
                  Officer™ — AI Certs (Accredited Trainer)
                </li>
              </ul>
            </div>

            {/* Leadership */}
            <div className="bg-navy-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-brand mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Leadership Roles
              </h3>
              <ul className="space-y-3 text-text-muted">
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> Director, Service
                  Operations — BT Global (£100M revenue, 1,000+ FTEs)
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> Principal Service
                  Delivery — Telstra Global (built 200-agent team in 3 months)
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> Head of Service,
                  Global Tech Management — BT AMEA (615 FTEs, $16M budget)
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> Head of Global
                  Field Operations — SITA (aviation IT, 20+ years sector
                  knowledge)
                </li>
                <li className="flex gap-3">
                  <span className="text-brand mt-1">•</span> Built 5 Global
                  Capability Centres — Gurgaon, Bangalore, Pune, Hyderabad
                </li>
              </ul>
            </div>
          </div>

          {/* Certification badge strip */}
          <div className="bg-navy-900 p-8 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">
              Issuing Bodies & Accreditations
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 relative flex items-center justify-center">
                    <Image
                      src={cert.img}
                      alt={cert.name}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <span className="text-xs text-text-muted text-center max-w-[80px] leading-tight">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Proof */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            <Users className="inline-block w-8 h-8 text-brand mr-3 mb-1" />
            Organisations Trained
          </h2>
          <p className="text-center text-text-muted mb-10">
            Over 1,000 professionals trained across enterprise and government
            organisations in India — in AI literacy, Microsoft Copilot 365,
            ISO/IEC 42001 governance, and agentic AI.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-navy-800 border border-white/10 rounded-xl p-5 flex flex-col gap-1"
              >
                <p className="text-white font-semibold text-sm">
                  {client.name}
                </p>
                <p className="text-xs text-brand">{client.sector}</p>
              </div>
            ))}
            <div className="bg-navy-800 border border-white/10 border-dashed rounded-xl p-5 flex items-center justify-center">
              <p className="text-text-muted text-sm text-center">
                + enterprise and MSME organisations across India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Work with our team directly
          </h2>
          <p className="text-text-muted mb-8">
            Every Optivantage engagement is founder-led. No account managers, no
            junior consultants. You work directly with someone who has done it
            at scale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand text-white rounded-lg font-semibold hover:bg-brand/90 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
