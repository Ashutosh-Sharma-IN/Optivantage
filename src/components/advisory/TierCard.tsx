"use client";
import Link from 'next/link';
import { ArrowRight, Clock, IndianRupee } from 'lucide-react';

interface TierCardProps {
  tier: 1 | 2 | 3;
  name: string;
  duration: string;
  priceRange: string;
  tagline: string;
  outcomes: string[];
  includes: string[];
  isPopular?: boolean;
  calendlyUrl: string;
}

const TIER_ACCENTS: Record<1 | 2 | 3, string> = {
  1: 'border-amber-400/40 hover:border-amber-400/70',
  2: 'border-brand/50 hover:border-brand',
  3: 'border-emerald-400/40 hover:border-emerald-400/70',
};

const TIER_BADGE_COLORS: Record<1 | 2 | 3, string> = {
  1: 'bg-amber-400/10 text-amber-400',
  2: 'bg-brand/10 text-brand',
  3: 'bg-emerald-400/10 text-emerald-400',
};

const TIER_BUTTON_COLORS: Record<1 | 2 | 3, string> = {
  1: 'bg-amber-400 hover:bg-amber-300 text-navy-900',
  2: 'bg-brand hover:bg-brand/90 text-white',
  3: 'bg-emerald-400 hover:bg-emerald-300 text-navy-900',
};

export default function TierCard({
  tier,
  name,
  duration,
  priceRange,
  tagline,
  outcomes,
  includes,
  isPopular,
  calendlyUrl,
}: TierCardProps) {
  return (
    <div
      className={`relative bg-navy-800 border-2 rounded-2xl p-7 flex flex-col transition-all duration-300 ${TIER_ACCENTS[tier]}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-5">
        <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${TIER_BADGE_COLORS[tier]}`}>
          Tier {tier}
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-text-muted text-sm">{tagline}</p>
      </div>

      {/* Duration + Price */}
      <div className="flex items-center gap-5 mb-6 pb-6 border-b border-white/10">
        <div className="flex items-center gap-1.5 text-text-muted text-sm">
          <Clock size={14} className="flex-shrink-0" />
          {duration}
        </div>
        <div className="flex items-center gap-1.5 text-white font-bold text-sm">
          <IndianRupee size={14} className="flex-shrink-0 text-text-muted" />
          {priceRange}
        </div>
      </div>

      {/* Outcomes */}
      <div className="mb-5">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
          What you get
        </p>
        <ul className="space-y-2">
          {outcomes.map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-brand mt-0.5 flex-shrink-0">✓</span>
              {o}
            </li>
          ))}
        </ul>
      </div>

      {/* Includes */}
      {includes.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
            Includes
          </p>
          <ul className="space-y-1.5">
            {includes.map((inc, i) => (
              <li key={i} className="text-xs text-text-muted flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-text-muted flex-shrink-0" />
                {inc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto space-y-3">
        <a
          href={calendlyUrl}
          className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl transition-all text-sm ${TIER_BUTTON_COLORS[tier]}`}
        >
          Book a Free Intro Call <ArrowRight size={15} />
        </a>
        <Link
          href="/ai-ready"
          className="block text-center text-xs text-text-muted hover:text-white transition-colors"
        >
          Not sure which tier? Take the quiz →
        </Link>
      </div>
    </div>
  );
}
