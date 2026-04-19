import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LogosSection from "@/components/LogosSection";
import WhyOptivantage from "@/components/WhyOptivantage";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export const metadata: Metadata = {
  title: "Optivantage | AI Training, IT Infrastructure & Equipment Rentals | Delhi, India",
  description:
    "Optivantage Technologies — specialist AI training (Microsoft Copilot 365, ChatGPT, ISO/IEC 42001 governance), IT infrastructure (Cisco, Fortinet, Palo Alto, Vertiv), and IT equipment rentals. Founder-led. 25 years expertise. 1,000+ professionals trained across BIAL, Kotak Mahindra, Hexaware. Delhi, India.",
  alternates: { canonical: "https://www.optivantage.in" },
  openGraph: {
    title: "Optivantage | AI Training, IT Infrastructure & Equipment Rentals",
    description:
      "Specialist AI training, network infrastructure, and IT equipment rentals. Cisco & Vertiv authorised partner. 25 years expertise. Founder-led. Delhi, India.",
    url: "https://www.optivantage.in",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <LogosSection />
      <WhyOptivantage />
      <ExitIntentPopup />
    </main>
  );
}
