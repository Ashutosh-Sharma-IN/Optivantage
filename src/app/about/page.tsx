import Navbar from '@/components/Navbar';
import { Award, Briefcase, GraduationCap, Target } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <main>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">The Optivantage Story</h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Founded to bridge the gap between legacy systems and AI-enabled futures.
          </p>
        </div>
      </section>

  {/* Story Content with Photo */}
<section className="py-20 px-4 bg-navy-900">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      
      {/* Left Column: The Story */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          The Optivantage Story
        </h1>
        
        <p className="text-lg text-text-muted leading-relaxed">
          After spending 25 years managing mission-critical IT infrastructure for global enterprises, I witnessed a fundamental gap in the market. Organizations were either stuck with legacy systems that couldn't scale, or they were rushing into AI adoption without the operational foundation to support it. 
        </p>
        
        <p className="text-lg text-text-muted leading-relaxed">
          The real breakthrough came while leading service operations at BT Global, where I managed £100M in revenue across 100 large customers and built five Global Capability Centers from the ground up.
        </p>

        <div className="bg-navy-800 p-6 rounded-xl border-l-4 border-brand my-8">
          <p className="text-xl text-white italic mb-0">
            "Optivantage was born from this unique vantage point—combining deep, battle-tested infrastructure expertise with cutting-edge AI innovation."
          </p>
        </div>

        <p className="text-lg text-text-muted leading-relaxed">
          My journey from a customer support engineer at Delhi's busiest airport to Director of Service Operations leading 2,000 global professionals taught me that true digital transformation requires both technical excellence and human-centered change management.
        </p>
      </div>

      {/* Right Column: Founder Photo */}
      <div className="relative order-first md:order-last">
        <div className="sticky top-24">
          <Image 
            src="/founder.jpg" 
            alt="Ashutosh Sharma - Founder Optivantage"
            width={600}
            height={700}
            className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10"
            priority // Ensures image loads fast
          />
          
          {/* Optional: Small text label below photo */}
          <div className="mt-4 flex items-center gap-2">
             <div className="h-1 w-8 bg-brand rounded-full"></div>
             <p className="text-sm text-text-muted font-medium">Ashutosh Sharma</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Credentials Grid */}
      <section className="py-16 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Elite Credentials</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="bg-navy-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-brand mb-6 flex items-center gap-2">
                <GraduationCap /> Certifications
              </h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex gap-3"><span className="text-brand">•</span> PG Program in AI for Leaders — University of Texas, Austin</li>
                <li className="flex gap-3"><span className="text-brand">•</span> Google Cloud Digital Leader</li>
                <li className="flex gap-3"><span className="text-brand">•</span> AWS Partner Accreditations</li>
                <li className="flex gap-3"><span className="text-brand">•</span> Executive Program in Leadership — IIM Kolkata</li>
                <li className="flex gap-3"><span className="text-brand">•</span> Microsoft Copilot & Azure AI Certified Trainer</li>
              </ul>
            </div>

            {/* Leadership */}
            <div className="bg-navy-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-brand mb-6 flex items-center gap-2">
                <Briefcase /> Leadership Roles
              </h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex gap-3"><span className="text-brand">•</span> Director, Service Operations — BT Global (Led 2,000 FTEs, £100M Revenue)</li>
                <li className="flex gap-3"><span className="text-brand">•</span> Principal Service Delivery — Telstra Global (Built 200-agent team in 3 months)</li>
                <li className="flex gap-3"><span className="text-brand">•</span> Head of Service, Global Tech Management — BT (Managed 615 FTEs, $16M Budget)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
