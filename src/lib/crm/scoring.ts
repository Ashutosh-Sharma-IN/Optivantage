// ─────────────────────────────────────────────────────────────────────────────
// OptiVantage CRM — Lead Scoring Engine
// Pure TypeScript, no external dependencies.
// ─────────────────────────────────────────────────────────────────────────────

import type {
  QuizAnswers,
  LeadSignals,
  LeadScore,
  ServicePillar,
  AdvisoryTier,
  QualificationLevel,
  CompanySize,
  Industry,
} from './types';

// ─────────────────────────────────────────────
// Scoring Tables
// ─────────────────────────────────────────────

const COMPANY_SIZE_SCORES: Record<CompanySize, number> = {
  'under-100': 5,
  '100-499': 10,
  '500-999': 15,
  '1000-4999': 22,
  '5000+': 25,
};

const INDUSTRY_SCORES: Record<Industry, number> = {
  telecom: 20,
  aviation: 18,
  banking: 15,
  logistics: 14,
  retail: 12,
  government: 10,
  manufacturing: 8,
  other: 5,
};

// Maps quiz answer → points (max 75 total, normalised to 100 later)
function scoreLeadershipAwareness(val: QuizAnswers['leadershipAwareness']): number {
  return { discussing: 3, exploring: 6, piloted: 10, strategy: 15 }[val] ?? 0;
}

function scoreDataMaturity(val: QuizAnswers['dataMaturity']): number {
  return { scattered: 3, partial: 7, warehouse: 12, platform: 15 }[val] ?? 0;
}

function scoreAiToolCount(count: 0 | 1 | 2 | 3): number {
  return [0, 4, 7, 10][count] ?? 0;
}

function scoreGovernance(val: QuizAnswers['governance']): number {
  return { none: 0, discussed: 5, draft: 10, formal: 15 }[val] ?? 0;
}

function scoreBudget(val: QuizAnswers['budget']): number {
  return { exploring: 2, allocated: 6, approved: 10 }[val] ?? 0;
}

function scoreTimeline(val: QuizAnswers['timeline']): number {
  return { '3months': 10, '6months': 7, '12months': 4, exploring: 1 }[val] ?? 0;
}

// ─────────────────────────────────────────────
// Pain point → primary pillar routing
// ─────────────────────────────────────────────
function routePainPoint(painPoint: QuizAnswers['painPoint']): ServicePillar {
  const map: Record<QuizAnswers['painPoint'], ServicePillar> = {
    'ai-strategy': 'ai-advisory',
    'ai-alignment': 'ai-advisory',
    'network-infra': 'infrastructure',
    compliance: 'cybersecurity',
    'it-support': 'managed-services',
  };
  return map[painPoint] ?? 'ai-advisory';
}

// Contact form service interest → pillar
export function routeServiceInterest(service?: string): ServicePillar {
  if (!service) return 'ai-advisory';
  const s = service.toLowerCase();
  if (s.includes('ai') || s.includes('training')) return 'ai-advisory';
  if (s.includes('infra') || s.includes('network')) return 'infrastructure';
  if (s.includes('cyber') || s.includes('security') || s.includes('compliance')) return 'cybersecurity';
  if (s.includes('managed') || s.includes('process') || s.includes('support')) return 'managed-services';
  return 'ai-advisory';
}

// ─────────────────────────────────────────────
// Advisory tier from quiz score
// ─────────────────────────────────────────────
function advisoryTierFromScore(score: number): AdvisoryTier {
  if (score <= 35) return 1;
  if (score <= 65) return 2;
  return 3;
}

// ─────────────────────────────────────────────
// Qualification level from score
// ─────────────────────────────────────────────
function qualificationLevel(score: number): QualificationLevel {
  if (score <= 30) return 'cold';
  if (score <= 55) return 'warm';
  if (score <= 75) return 'hot';
  return 'sales-ready';
}

// ─────────────────────────────────────────────
// Personalised insight bullets from quiz
// ─────────────────────────────────────────────
function generateInsights(answers: QuizAnswers, score: number): string[] {
  const bullets: string[] = [];

  // Data maturity insight
  if (answers.dataMaturity === 'scattered' || answers.dataMaturity === 'partial') {
    bullets.push(
      'Your data infrastructure needs attention before AI can deliver reliable results — this is the #1 barrier we see in Indian mid-market companies.'
    );
  } else {
    bullets.push(
      'Your data foundations are solid — you are better positioned than most Indian companies at your stage to see fast AI ROI.'
    );
  }

  // Governance insight
  if (answers.governance === 'none' || answers.governance === 'discussed') {
    bullets.push(
      'Without an AI governance policy, well-meaning pilot projects can stall — boards and regulators are increasingly asking for this, especially in banking and telecom.'
    );
  } else {
    bullets.push(
      'Having an AI governance framework already in place is a competitive advantage — it means you can move faster than peers without legal delays.'
    );
  }

  // Budget/timeline insight
  if (answers.budget === 'approved' && (answers.timeline === '3months' || answers.timeline === '6months')) {
    bullets.push(
      'With budget approved and a clear timeline, the biggest risk is choosing the wrong first use case. A structured roadmap prevents expensive pivots.'
    );
  } else if (answers.budget === 'exploring') {
    bullets.push(
      'Being in exploration mode is actually ideal — it means you can design your AI strategy before committing budget, avoiding the most common and costly mistakes.'
    );
  } else {
    bullets.push(
      'You have the intent and timeline — the next step is translating that into a phased roadmap with clear, measurable milestones per quarter.'
    );
  }

  return bullets.slice(0, 3);
}

// ─────────────────────────────────────────────
// CTA text and Calendly slug by tier
// ─────────────────────────────────────────────
const TIER_CTA: Record<AdvisoryTier, string> = {
  1: 'Book a Free 30-Min AI Readiness Chat',
  2: 'Book a Free 45-Min AI Strategy Call',
  3: 'Talk to Ashutosh About Advisory',
};

const TIER_CALENDLY: Record<AdvisoryTier, string> = {
  1: '',   // fill with your Calendly event slug
  2: '',
  3: '',
};

// ─────────────────────────────────────────────
// Main scorer — quiz path
// ─────────────────────────────────────────────
export function scoreQuiz(answers: QuizAnswers): LeadScore {
  // Raw quiz score (max 75)
  const rawQuizScore =
    scoreLeadershipAwareness(answers.leadershipAwareness) +
    scoreDataMaturity(answers.dataMaturity) +
    scoreAiToolCount(answers.aiToolCount) +
    scoreGovernance(answers.governance) +
    scoreBudget(answers.budget) +
    scoreTimeline(answers.timeline);

  // Normalise to 100
  const quizNorm = Math.round((rawQuizScore / 75) * 100);

  // Add firmographic bonus (capped at 45 total when combined)
  const sizeBonus = COMPANY_SIZE_SCORES[answers.companySize] ?? 5;
  const industryBonus = INDUSTRY_SCORES[answers.industry] ?? 5;

  // Final weighted score: 60% quiz + 25% company size + 15% industry (approx)
  const total = Math.min(
    100,
    Math.round(quizNorm * 0.6 + sizeBonus + industryBonus * 0.5)
  );

  const primaryPillar = routePainPoint(answers.painPoint);
  const advisoryTier =
    primaryPillar === 'ai-advisory' ? advisoryTierFromScore(total) : undefined;

  const breakdown = {
    companySize: sizeBonus,
    industry: Math.round(industryBonus * 0.5),
    intent: Math.round(quizNorm * 0.6),
    painPoint: 0,
    buyingSignals: 0,
  };

  return {
    total,
    primaryPillar,
    advisoryTier,
    qualificationLevel: qualificationLevel(total),
    insightBullets: generateInsights(answers, total),
    ctaText: advisoryTier ? TIER_CTA[advisoryTier] : 'Book a Discovery Call',
    calendlySlug: advisoryTier ? TIER_CALENDLY[advisoryTier] : '',
    breakdown,
  };
}

// ─────────────────────────────────────────────
// Main scorer — contact form / other sources
// ─────────────────────────────────────────────
export function scoreContactLead(signals: LeadSignals): LeadScore {
  let total = 0;
  const breakdown = {
    companySize: 0,
    industry: 0,
    intent: 0,
    painPoint: 0,
    buyingSignals: 0,
  };

  // Company size
  if (signals.companySize) {
    breakdown.companySize = COMPANY_SIZE_SCORES[signals.companySize] ?? 5;
    total += breakdown.companySize;
  }

  // Industry
  if (signals.industry) {
    breakdown.industry = INDUSTRY_SCORES[signals.industry] ?? 5;
    total += breakdown.industry;
  }

  // Source-based intent points
  const intentMap: Record<LeadSignals['source'], number> = {
    quiz: 15,
    'contact-form': 12,
    'exit-popup': 8,
    'resource-download': 8,
    referral: 20,
    'apollo-outbound': 0,
    newsletter: 3,
  };
  breakdown.intent = intentMap[signals.source] ?? 0;
  total += breakdown.intent;

  // Buying signals
  if (signals.mentionedBudget) { breakdown.buyingSignals += 5; total += 5; }
  if (signals.mentionedTimeline) { breakdown.buyingSignals += 5; total += 5; }

  total = Math.min(100, total);

  const primaryPillar = signals.quizAnswers
    ? routePainPoint(signals.quizAnswers.painPoint)
    : routeServiceInterest(signals.serviceInterest);

  return {
    total,
    primaryPillar,
    qualificationLevel: qualificationLevel(total),
    insightBullets: [],
    ctaText: 'Book a Discovery Call',
    calendlySlug: '',
    breakdown,
  };
}
