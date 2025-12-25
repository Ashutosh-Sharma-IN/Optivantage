import Navbar from '@/components/Navbar';
import { TrendingUp, Users, Cpu, Shield } from 'lucide-react';

export default function CaseStudies() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 px-4 bg-navy-900 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Proven Results</h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Real-world case studies demonstrating quantified impact across infrastructure optimization and AI transformation.
        </p>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        {/* Study 1: WiFi Optimization */}
        <div className="bg-navy-800 rounded-2xl p-8 mb-12 border border-white/5">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <span className="text-brand text-sm font-bold uppercase tracking-wide">Logistics & Warehousing</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">WiFi Optimization for 15 Logistics Warehouses</h2>
              <p className="text-text-muted mb-6">
                Transforming warehouse operations through RF engineering and network optimization using Ekahau tools. 
                Achieved 98% scanner uptime and 25% reduction in operational disruptions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-navy-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-brand">98%</div>
                  <div className="text-xs text-text-muted">Scanner Uptime</div>
                </div>
                <div className="bg-navy-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-brand">25%</div>
                  <div className="text-xs text-text-muted">Reduced Disruptions</div>
                </div>
                <div className="bg-navy-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-brand">$200K</div>
                  <div className="text-xs text-text-muted">Annual Savings</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col justify-center gap-4">
              <div className="bg-navy-900 p-6 rounded-lg border border-white/5">
                <Users className="text-brand mb-2" />
                <h3 className="text-white font-semibold mb-2">Client</h3>
                <p className="text-text-muted">Leading Logistics Provider</p>
              </div>
              <div className="bg-navy-900 p-6 rounded-lg border border-white/5">
                <TrendingUp className="text-brand mb-2" />
                <h3 className="text-white font-semibold mb-2">Outcome</h3>
                <p className="text-text-muted">70% Reduction in Support Tickets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Study 2: SD-WAN Migration */}
        <div className="bg-navy-800 rounded-2xl p-8 mb-12 border border-white/5">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <span className="text-brand text-sm font-bold uppercase tracking-wide">Retail</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">SD-WAN Migration for 200+ Retail Sites</h2>
              <p className="text-text-muted mb-6">
                Modernizing network infrastructure for enhanced performance. Delivered 50% latency reduction and 40% OpEx savings through dual-link strategy and application-aware routing.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-navy-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-brand">50%</div>
                  <div className="text-xs text-text-muted">Latency Reduced</div>
                </div>
                <div className="bg-navy-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-brand">40%</div>
                  <div className="text-xs text-text-muted">OpEx Savings</div>
                </div>
                <div className="bg-navy-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-brand">99.9%</div>
                  <div className="text-xs text-text-muted">Uptime SLA</div>
                </div>
              </div>
            </div>
             <div className="md:w-1/3 flex flex-col justify-center gap-4">
              <div className="bg-navy-900 p-6 rounded-lg border border-white/5">
                <Cpu className="text-brand mb-2" />
                <h3 className="text-white font-semibold mb-2">Technology</h3>
                <p className="text-text-muted">VMware SD-WAN & Dual Internet Links</p>
              </div>
               <div className="bg-navy-900 p-6 rounded-lg border border-white/5">
                <TrendingUp className="text-brand mb-2" />
                <h3 className="text-white font-semibold mb-2">Outcome</h3>
                <p className="text-text-muted">Improved Cloud App Performance</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
