import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { CheckCircle, Package, Wrench, Users, ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Laptop Rental India | Corporate Laptop & Workstation Rental | Optivantage Technologies',
  description: 'Corporate laptop rental, workstation rental, and IT equipment rental across India. Dell, HP, Lenovo. Short-term and long-term. Events, projects, GCC setup, training programmes. Annual Maintenance Contracts (AMC) available.',
  keywords: [
    'laptop rental India',
    'corporate laptop rental',
    'laptop rental for companies India',
    'workstation rental India',
    'IT equipment rental India',
    'laptop rental Delhi NCR',
    'laptop rental for events India',
    'laptop rental GCC setup',
    'Dell HP Lenovo rental India',
    'short term laptop rental India',
    'AMC services India',
    'annual maintenance contract laptops India',
  ],
  alternates: { canonical: 'https://www.optivantage.in/laptop-rental-india' },
  openGraph: {
    title: 'Laptop & IT Equipment Rental India | Optivantage Technologies',
    description: 'Corporate laptop and workstation rental across India. Dell, HP, Lenovo. Short-term, long-term, events, GCC setup. AMC services available.',
    url: 'https://www.optivantage.in/laptop-rental-india',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.optivantage.in/laptop-rental-india#service",
      "name": "Corporate Laptop and IT Equipment Rental",
      "provider": {
        "@id": "https://www.optivantage.in/#organization"
      },
      "description": "Corporate laptop rental, workstation rental, desktop rental, printer rental, and full IT equipment supply across India. Dell, HP, Lenovo. Short-term, long-term, events, and GCC setup. Annual Maintenance Contracts available.",
      "areaServed": [
        { "@type": "Country", "name": "India" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Equipment Rental Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Laptop Rental", "brand": ["Dell", "HP", "Lenovo"] } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Workstation Rental" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Desktop Rental" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Printer Rental" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Annual Maintenance Contract (AMC)" } },
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I rent laptops for a corporate project or GCC setup in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optivantage Technologies supplies and rents Dell, HP, and Lenovo laptops, workstations, and desktops for corporate projects, GCC setups, training programmes, and events across India. Both short-term (daily/weekly) and long-term rental arrangements are available, with delivery and setup support."
          }
        },
        {
          "@type": "Question",
          "name": "What brands of laptops are available for rental in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optivantage supplies and rents Dell, HP, and Lenovo laptops and workstations. Configurations range from entry-level business laptops to high-performance workstations. Specifications can be customised to match your project requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can I rent IT equipment for a training programme or corporate event?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Optivantage provides short-term laptop and equipment rental for corporate training programmes, conferences, product launches, and events across India. We deliver, set up, and collect equipment. Quantities from 10 to 200+ units."
          }
        },
        {
          "@type": "Question",
          "name": "Does Optivantage provide AMC for laptops, desktops, and printers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Optivantage offers Annual Maintenance Contracts (AMC) for laptops, desktops, workstations, printers, and networking devices. AMC covers preventive maintenance, breakdown support, and spare parts management for your IT hardware fleet."
          }
        },
        {
          "@type": "Question",
          "name": "Can Optivantage supply IT equipment for a new GCC in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Optivantage supplies and rents the full range of IT compute hardware for Global Capability Centre (GCC) setups in India — laptops, workstations, desktops, printers, and peripherals. Combined with our IT infrastructure services (networking, cabling, security), we can equip an entire GCC from a single vendor."
          }
        }
      ]
    }
  ]
};

const equipment = [
  {
    name: "Laptops",
    detail: "Business laptops and ultrabooks — Dell Latitude/Vostro, HP EliteBook/ProBook, Lenovo ThinkPad/IdeaPad. Core i5 to Core i7, 8GB–32GB RAM, SSD storage.",
    useCase: "Projects, training, GCC onboarding, events",
  },
  {
    name: "Workstations",
    detail: "High-performance desktop workstations for engineering, design, and data-intensive roles. Dell Precision, HP Z-series, Lenovo ThinkStation.",
    useCase: "GCC setup, engineering teams, creative teams",
  },
  {
    name: "Desktops",
    detail: "Corporate desktops for standard office use. Dell OptiPlex, HP ProDesk, Lenovo ThinkCentre. All configurations available.",
    useCase: "Office setup, long-term workforce deployment",
  },
  {
    name: "Printers & Peripherals",
    detail: "A4/A3 laser printers, multifunction printers, monitors, keyboards, mice, webcams, and headsets.",
    useCase: "Office setup, event support, hybrid teams",
  },
  {
    name: "Networking Devices",
    detail: "Managed switches, access points, routers, and firewalls for temporary and permanent deployments.",
    useCase: "Events, pop-up offices, GCC build",
  },
];

const rentalTypes = [
  {
    type: "Short-Term Rental",
    duration: "1 day – 3 months",
    ideal: "Corporate events, training programmes, product launches, audits",
    icon: Clock,
  },
  {
    type: "Long-Term Rental",
    duration: "3 months – 3 years",
    ideal: "GCC setup, project-based workforce, cost-efficient hardware deployment",
    icon: Package,
  },
  {
    type: "Supply + AMC",
    duration: "Ongoing",
    ideal: "Buy or finance equipment with an ongoing maintenance contract for full-fleet support",
    icon: Wrench,
  },
];

export default function LaptopRentalIndia() {
  return (
    <main className="min-h-screen">
      <Script id="laptop-rental-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">IT Equipment — Rental & Supply</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Laptop & IT Equipment<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Rental Across India.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Dell, HP, and Lenovo laptops, workstations, desktops, and printers — for corporate projects,
            GCC setups, training programmes, and events. Short-term or long-term.
            Delivered, configured, and maintained.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2">
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link href="/services/it-equipment-rentals" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              Full Equipment Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Rental types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Rental Options</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {rentalTypes.map((r) => (
            <div key={r.type} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand/40 transition-colors">
              <r.icon className="text-brand mb-4" size={28} />
              <h3 className="text-lg font-semibold text-white mb-1">{r.type}</h3>
              <p className="text-brand text-sm font-medium mb-3">{r.duration}</p>
              <p className="text-gray-400 text-sm">{r.ideal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Equipment Available</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">All equipment is business-grade, regularly maintained, and delivered with standard configuration or customised to your specifications.</p>
        <div className="space-y-4">
          {equipment.map((e) => (
            <div key={e.name} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{e.name}</h3>
                  <p className="text-gray-400 text-sm">{e.detail}</p>
                </div>
                <div className="shrink-0">
                  <span className="text-xs text-brand bg-brand/10 px-3 py-1.5 rounded-full">{e.useCase}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Why Rent from Optivantage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "One Vendor, Full Scope",
                body: "IT equipment rental + IT infrastructure (networking, cabling, security) from a single vendor. Ideal for GCC builds and new office setups.",
              },
              {
                title: "Delivery and Setup Included",
                body: "We deliver, image, configure, and set up equipment at your location. You get work-ready devices, not boxes.",
              },
              {
                title: "Flexible Quantities",
                body: "From 10 devices for a training room to 500+ for a GCC. We scale to your requirements.",
              },
              {
                title: "AMC for Peace of Mind",
                body: "Annual Maintenance Contracts for your full hardware fleet — preventive maintenance, breakdown cover, and spares.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle className="text-brand shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand/20 to-orange-400/10 border border-brand/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Quote for Laptop Rental?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us the quantity, duration, and any specific configuration requirements.
            We'll respond with pricing within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
