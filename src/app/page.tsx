import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Zap, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            25 Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Excellence.</span><br />
            Future-Ready AI.
          </h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            Bridging the gap between legacy IT infrastructure and the AI-enabled future. 
            We provide the operational maturity and AI innovation your enterprise needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
              Start Transformation <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all">
              Our Services
            </Link>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10">
          <div className="text-center">
            <Users className="h-8 w-8 text-brand mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">1000+</div>
            <div className="text-sm text-text-muted">Professionals Trained</div>
          </div>
          <div className="text-center">
            <Globe className="h-8 w-8 text-brand mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">5</div>
            <div className="text-sm text-text-muted">Global GCCs Built</div>
          </div>
          <div className="text-center">
            <Zap className="h-8 w-8 text-brand mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">35%</div>
            <div className="text-sm text-text-muted">Incident Effort Reduced</div>
          </div>
          <div className="text-center">
            <CheckCircle className="h-8 w-8 text-brand mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">£100M</div>
            <div className="text-sm text-text-muted">Revenue Managed</div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Optivantage?</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We don't just fix servers or run training workshops. We understand the operational complexity of running a global enterprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Battle-Tested Operations</h3>
              <p className="text-text-muted">
                From BT Global to SITA, we've managed mission-critical infrastructure for the world's most demanding organizations.
              </p>
            </div>
            
            <div className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Innovation</h3>
              <p className="text-text-muted">
                We bring cutting-edge Generative AI capabilities. Not just theory, but practical implementations that drive real ROI.
              </p>
            </div>

            <div className="bg-navy-900 p-8 rounded-xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="h-12 w-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Human-Centric Transformation</h3>
              <p className="text-text-muted">
                Technology is useless without adoption. We focus on change management and culture to ensure your projects succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
