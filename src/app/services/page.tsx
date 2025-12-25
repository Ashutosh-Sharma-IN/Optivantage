import Navbar from '@/components/Navbar';
import { Shield, Network, Wrench, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';

export default function Services() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 bg-navy-900 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Practical solutions for complex enterprise challenges.
        </p>
      </section>

      {/* GEN AI SECTION */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Gen AI Training & Transformation</h2>
            <p className="text-text-muted mb-6 text-lg">
              Enterprise teams are struggling to adopt AI securely. We bridge the gap between technical implementation and business strategy.
            </p>
            
            <div className="space-y-6">
              <div className="bg-navy-800 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-white flex items-center gap-2 mb-2"><AlertTriangle className="text-red-500" size={18}/> The Problem</h3>
                <p className="text-sm text-text-muted">Technical teams lack practical prompt engineering skills. Leaders lack strategic AI governance. This results in shadow AI usage and failed pilot projects.</p>
              </div>
              
              <div className="bg-navy-800 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-white flex items-center gap-2 mb-2"><CheckCircle2 className="text-green-500" size={18}/> The Outcome</h3>
                <p className="text-sm text-text-muted">Organizations achieve measurable ROI in 90 days. Technical teams reduce dev time by 40-60%. 70% reduction in shadow AI incidents.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-navy-800 p-6 rounded-xl hover:bg-navy-700 transition">
               <h3 className="text-white font-semibold mb-2">AI+ Prompt Engineer</h3>
               <p className="text-sm text-text-muted">Hands-on mastery of chain-of-thought reasoning and model optimization.</p>
             </div>
             <div className="bg-navy-800 p-6 rounded-xl hover:bg-navy-700 transition">
               <h3 className="text-white font-semibold mb-2">AI+ Executive</h3>
               <p className="text-sm text-text-muted">Strategy, ROI measurement, and governance frameworks based on NIST.</p>
             </div>
             <div className="bg-navy-800 p-6 rounded-xl hover:bg-navy-700 transition">
               <h3 className="text-white font-semibold mb-2">AI+ Everyone</h3>
               <p className="text-sm text-text-muted">Foundational literacy for all employees to drive adoption.</p>
             </div>
             <div className="bg-navy-800 p-6 rounded-xl hover:bg-navy-700 transition">
               <h3 className="text-white font-semibold mb-2">AI+ Ethics</h3>
               <p className="text-sm text-text-muted">Responsible deployment frameworks ensuring compliance.</p>
             </div>
          </div>
        </div>

        {/* MANAGED SERVICES - THE NEW IMAGE CONTENT */}
        <div className="mt-24">
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="text-brand h-10 w-10" />
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  I Fix Broken Processes
                </h2>
              </div>
              
              <p className="text-xl text-text-muted mb-12 max-w-3xl">
                Consulting for Operational Excellence. <br />
                <span className="text-white">Clarity • Accountability • Results</span>
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                {/* Step 1 */}
                <div className="bg-navy-900/50 p-6 rounded-xl border border-white/5">
                  <div className="text-brand font-bold text-4xl mb-4">01</div>
                  <h3 className="text-white font-semibold mb-3">Diagnose Gaps</h3>
                  <p className="text-sm text-text-muted">Audit processes, identify bottlenecks, and discover ownership gaps in your current workflow.</p>
                </div>

                {/* Step 2 */}
                <div className="bg-navy-900/50 p-6 rounded-xl border border-white/5">
                  <div className="text-brand font-bold text-4xl mb-4">02</div>
                  <h3 className="text-white font-semibold mb-3">Redesign & Simplify</h3>
                  <p className="text-sm text-text-muted">Simplify SOPs, define hand-offs clearly, and set up metrics and SLAs.</p>
                </div>

                {/* Step 3 */}
                <div className="bg-navy-900/50 p-6 rounded-xl border border-white/5">
                  <div className="text-brand font-bold text-4xl mb-4">03</div>
                  <h3 className="text-white font-semibold mb-3">Enforce & Train</h3>
                  <p className="text-sm text-text-muted">Establish rules, train teams on new processes, and monitor for compliance.</p>
                </div>

                {/* Step 4 */}
                <div className="bg-navy-900/50 p-6 rounded-xl border border-white/5">
                  <div className="text-brand font-bold text-4xl mb-4">04</div>
                  <h3 className="text-white font-semibold mb-3">Sustain & Improve</h3>
                  <p className="text-sm text-text-muted">Track performance metrics, review regularly, and gather feedback for continuous improvement.</p>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-brand/10 rounded-lg border border-brand/20">
                <p className="text-white font-medium text-center text-lg">
                  Turn your messy operations into best practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INFRASTRUCTURE BRIEF */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Network /> Infrastructure & Operations
          </h2>
          <p className="text-text-muted max-w-3xl">
            We provide end-to-end infrastructure management, from SITC deployment and AMC services to Core Room setup and WiFi RF engineering using Ekahau tools.
          </p>
        </div>

      </section>
    </main>
  );
}
