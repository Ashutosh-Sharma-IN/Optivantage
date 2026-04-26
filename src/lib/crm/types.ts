// ─────────────────────────────────────────────────────────────────────────────
// OptiVantage CRM — Type Definitions
// ─────────────────────────────────────────────────────────────────────────────

export type ServicePillar =
  | 'ai-advisory'
  | 'infrastructure'
  | 'cybersecurity'
  | 'managed-services';

export type QualificationLevel = 'cold' | 'warm' | 'hot' | 'sales-ready';

export type AdvisoryTier = 1 | 2 | 3;

export type CompanySize =
  | 'under-100'
  | '100-499'
  | '500-999'
  | '1000-4999'
  | '5000+';

export type Industry =
  | 'telecom'
  | 'aviation'
  | 'banking'
  | 'logistics'
  | 'retail'
  | 'government'
  | 'manufacturing'
  | 'other';

export type LeadSource =
  | 'quiz'
  | 'contact-form'
  | 'exit-popup'
  | 'resource-download'
  | 'referral'
  | 'apollo-outbound'
  | 'newsletter';

// ─────────────────────────────────────────────
// Quiz Answers (raw, from the frontend)
// ─────────────────────────────────────────────
export interface QuizAnswers {
  // Q1 — firmographic (not scored)
  companySize: CompanySize;
  // Q2 — firmographic (not scored)
  industry: Industry;
  // Q3 — leadership AI awareness (0-15 pts)
  leadershipAwareness: 'discussing' | 'exploring' | 'piloted' | 'strategy';
  // Q4 — data maturity (0-15 pts)
  dataMaturity: 'scattered' | 'partial' | 'warehouse' | 'platform';
  // Q5 — current AI tools (0-10 pts, multi-select count)
  aiToolCount: 0 | 1 | 2 | 3;
  // Q6 — governance / policy (0-15 pts)
  governance: 'none' | 'discussed' | 'draft' | 'formal';
  // Q7 — budget appetite (0-10 pts + routing)
  budget: 'exploring' | 'allocated' | 'approved';
  // Q8 — biggest pain point (pillar routing, not scored)
  painPoint:
    | 'ai-strategy'
    | 'network-infra'
    | 'compliance'
    | 'it-support'
    | 'ai-alignment';
  // Q9 — timeline (0-10 pts)
  timeline: '3months' | '6months' | '12months' | 'exploring';
  // Q10 — role (persona routing, not scored)
  role: 'cxo' | 'cto-cio' | 'vp-it' | 'ld-hr' | 'ops' | 'other';
}

// ─────────────────────────────────────────────
// Lead Signals (enriched, from all sources)
// ─────────────────────────────────────────────
export interface LeadSignals {
  // Contact
  name: string;
  email: string;
  company?: string;
  phone?: string;

  // Firmographics
  companySize?: CompanySize;
  industry?: Industry;

  // Behavioural
  source: LeadSource;
  quizCompleted: boolean;
  quizAnswers?: QuizAnswers;
  resourceDownloaded?: string;
  serviceInterest?: string; // raw string from contact form select

  // Intent
  message?: string;
  mentionedBudget: boolean;
  mentionedTimeline: boolean;
}

// ─────────────────────────────────────────────
// Lead Score (output of scoring engine)
// ─────────────────────────────────────────────
export interface LeadScore {
  /** Raw score 0-100 */
  total: number;
  /** Primary service to route to */
  primaryPillar: ServicePillar;
  /** Secondary interest if detected */
  secondaryPillar?: ServicePillar;
  /** Advisory tier (only set when primaryPillar = ai-advisory) */
  advisoryTier?: AdvisoryTier;
  /** Qualification level drives CRM action */
  qualificationLevel: QualificationLevel;
  /** HubSpot sequence ID to trigger */
  hubspotSequenceId?: string;
  /** Personalised insight bullets for results page */
  insightBullets: string[];
  /** CTA text for results page */
  ctaText: string;
  /** Calendly event type slug */
  calendlySlug: string;
  /** Score breakdown for transparency */
  breakdown: {
    companySize: number;
    industry: number;
    intent: number;
    painPoint: number;
    buyingSignals: number;
  };
}

// ─────────────────────────────────────────────
// HubSpot Contact properties (what we push)
// ─────────────────────────────────────────────
export interface HubSpotContactProperties {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  company?: string;
  // Custom properties (must be created in HubSpot settings first)
  quiz_score?: string;
  quiz_tier?: string;
  primary_pillar?: string;
  lead_qualification?: string;
  company_size_bucket?: string;
  industry_vertical?: string;
  lead_source_detail?: string;
  quiz_answers_json?: string;
  resource_downloaded?: string;
  service_interest?: string;
}
