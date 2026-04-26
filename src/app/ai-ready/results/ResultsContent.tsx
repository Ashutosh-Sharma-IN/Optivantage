"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ScoreDial from '@/components/quiz/ScoreDial';
import CalendlyEmbed from '@/components/quiz/CalendlyEmbed';
import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';

const TIER_HEADLINES: Record<string, string> = {
  '1': 'You\'re in the AI Awareness Stage',
  '2': 'You\'re at the AI Adopter Stage',
  '3': 'You\'re an AI Leader',
};

const TIER_DESCRIPTIONS: Record<string, string> = {
  '1':
    'Your organisation has the curiosity but needs a structured starting point. The most valuable next step is a guided AI Readiness Snapshot — a 4-week engagement that gives you a clear picture of where you stand and what to do first.',
  '2':
    'You have solid foundations. What you need now is a clear, phased AI Adoption Roadmap — an 8–12 week engagement that translates your existing work into a vendor-evaluated, implementation-ready strategy.',
  '3':
    'Your organisation is ahead of the curve. What accelerates results at this stage is an experienced advisory partner to navigate complex decisions, manage vendor relationships, and sustain momentum quarter over quarter.',
};

const TIER_CTA: Record<string, string> = {
  '1': 'Book a Free 30-Min AI Readiness Chat',
  '2': 'Book a Free 45-Min AI Strategy Call',
  '3': 'Talk to Ashutosh About Advisory',
};

const TIER_COLORS: Record<string, string> = {
  '1': 'text-amber-400',
  '2': 'text-blue-400',
  '3': 'text-emerald-400',
};

export default function ResultsContent() {
  const params = useSearchParams();

  const score = parseInt(params.get('score') ?? '50', 10);
  const tier = (params.get('tier') ?? '1') as '1' | '2' | '3';
  const name = decodeURIComponent(params.get('name') ?? 'there');
  const bulletsRaw = params.get('bullets') ?? '[]';
  const bullets: string[] = JSON.parse(decodeURIComponent(bulletsRaw));
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/optivantage';

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-2">
            AI Readiness Assessment
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Hi {name}! Here are your results.
          </h1>
          <p className="text-text-muted">
            We've also sent a copy to your email.
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 md:p-10 mb-6 text-center">
          <ScoreDial score={score} tier={parseInt(tier, 10) as 1 | 2 | 3} />

          <h2 className={`text-2xl font-bold mt-6 mb-3 ${TIER_COLORS[tier]}`}>
            {TIER_HEADLINES[tier]}
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-xl mx-auto">
            {TIER_DESCRIPTIONS[tier]}
          </p>
        </div>

        {/* Insights */}
        {bullets.length > 0 && (
          <div className="mb-6">
            <h3 className="text-white font-bold text-lg mb-4">
              3 things that stand out from your answers:
            </h3>
            <div className="space-y-3">
              {bullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-navy-800 border border-white/10 rounded-xl p-5"
                >
                  <CheckCircle
                    size={20}
                    className="text-brand flex-shrink-0 mt-0.5"
                  />
                  <p className="text-text-muted text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended next step */}
        <div className="bg-brand/10 border border-brand/30 rounded-2xl p-6 md:p-8 mb-8">
          <p className="text-brand text-xs font-bold uppercase tracking-widest mb-2">
            Recommended Next Step
          </p>
          <h3 className="text-white text-xl font-bold mb-3">
            {TIER_CTA[tier]}
          </h3>
          <p className="text-text-muted text-sm mb-5">
            30–45 minutes with Ashutosh Sharma — 25 years in telecom and IT ops,
            AI certified, ISO 42001. No sales pitch. Just an honest conversation
            about where your organisation is and what would actually move the needle.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={calendlyUrl}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm"
            >
              {TIER_CTA[tier]} <ArrowRight size={16} />
            </a>
            <Link
              href="/advisory"
              className="inline-flex items-center gap-1 text-text-muted hover:text-white text-sm transition-colors"
            >
              See our advisory tiers →
            </Link>
          </div>
        </div>

        {/* Inline Calendly */}
        <div className="mb-8">
          <h3 className="text-white font-bold text-lg mb-4 text-center">
            Or book directly below:
          </h3>
          <CalendlyEmbed url={calendlyUrl} />
        </div>

        {/* Retake / Share */}
        <div className="text-center">
          <Link
            href="/ai-ready"
            className="inline-flex items-center gap-2 text-text-muted hover:text-white text-sm transition-colors"
          >
            <RotateCcw size={14} /> Retake the assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
