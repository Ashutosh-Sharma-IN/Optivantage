"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import QuizProgress from '@/components/quiz/QuizProgress';
import { ChevronRight, ChevronLeft, Brain, Loader2 } from 'lucide-react';
import type { QuizAnswers, CompanySize, Industry } from '@/lib/crm/types';

// ─────────────────────────────────────────────
// Question definitions
// ─────────────────────────────────────────────
const QUESTIONS = [
  {
    id: 'companySize',
    step: 1,
    question: 'What is your organisation\'s headcount?',
    type: 'single',
    options: [
      { label: 'Under 100', value: 'under-100' },
      { label: '100 – 499', value: '100-499' },
      { label: '500 – 999', value: '500-999' },
      { label: '1,000 – 4,999', value: '1000-4999' },
      { label: '5,000+', value: '5000+' },
    ],
  },
  {
    id: 'industry',
    step: 2,
    question: 'Which industry best describes your organisation?',
    type: 'single',
    options: [
      { label: 'Telecom / ISP', value: 'telecom' },
      { label: 'Aviation / Airports', value: 'aviation' },
      { label: 'Banking / Financial Services', value: 'banking' },
      { label: 'Logistics / Warehousing', value: 'logistics' },
      { label: 'Retail', value: 'retail' },
      { label: 'Government / Public Sector', value: 'government' },
      { label: 'Manufacturing', value: 'manufacturing' },
      { label: 'Other', value: 'other' },
    ],
  },
  {
    id: 'leadershipAwareness',
    step: 3,
    question: 'How would you describe your leadership team\'s current understanding of AI?',
    sublabel: 'Choose the option that best reflects the reality, not the aspiration.',
    type: 'single',
    options: [
      { label: 'We discuss AI in meetings but haven\'t done anything yet', value: 'discussing' },
      { label: 'A few individuals have explored AI tools on their own', value: 'exploring' },
      { label: 'We have run 1–2 AI pilots or workshops', value: 'piloted' },
      { label: 'We have a defined AI strategy in place', value: 'strategy' },
    ],
  },
  {
    id: 'dataMaturity',
    step: 4,
    question: 'How would you describe your organisation\'s data infrastructure?',
    type: 'single',
    options: [
      { label: 'Data is scattered across spreadsheets and email', value: 'scattered' },
      { label: 'We have some systems but they don\'t talk to each other', value: 'partial' },
      { label: 'We have a data warehouse or ERP with clean data', value: 'warehouse' },
      { label: 'We have a data platform with dashboards and reporting', value: 'platform' },
    ],
  },
  {
    id: 'aiToolCount',
    step: 5,
    question: 'Which AI tools are currently used in your organisation?',
    sublabel: 'Select all that apply.',
    type: 'multi-count',
    options: [
      { label: 'Microsoft Copilot / 365 AI', value: 'copilot' },
      { label: 'Google Workspace AI / Gemini', value: 'google-ai' },
      { label: 'ChatGPT or Claude', value: 'chatgpt' },
      { label: 'Automation tools (Make / Zapier / Power Automate)', value: 'automation' },
      { label: 'Custom or vendor-specific AI', value: 'custom' },
      { label: 'No AI tools yet', value: 'none', exclusive: true },
    ],
  },
  {
    id: 'governance',
    step: 6,
    question: 'Does your organisation have an AI governance or acceptable use policy?',
    type: 'single',
    options: [
      { label: 'No, and we haven\'t discussed it', value: 'none' },
      { label: 'Informally discussed but nothing documented', value: 'discussed' },
      { label: 'We have draft guidelines', value: 'draft' },
      { label: 'We have a formal policy with training', value: 'formal' },
    ],
  },
  {
    id: 'budget',
    step: 7,
    question: 'How would you describe your organisation\'s appetite for AI investment in the next 12 months?',
    type: 'single',
    options: [
      { label: 'Exploring but no budget allocated', value: 'exploring' },
      { label: 'Budget exists for the right use case', value: 'allocated' },
      { label: 'Dedicated AI transformation budget approved', value: 'approved' },
    ],
  },
  {
    id: 'painPoint',
    step: 8,
    question: 'What is your biggest operational challenge today?',
    sublabel: 'Select the one that is most urgent.',
    type: 'single',
    options: [
      { label: 'Improving productivity and reducing manual work', value: 'ai-strategy' },
      { label: 'Network reliability and infrastructure performance', value: 'network-infra' },
      { label: 'Security risks and compliance requirements', value: 'compliance' },
      { label: 'IT support quality and response times', value: 'it-support' },
      { label: 'Lack of AI strategy and executive alignment', value: 'ai-alignment' },
    ],
  },
  {
    id: 'timeline',
    step: 9,
    question: 'When are you looking to start an AI or transformation initiative?',
    type: 'single',
    options: [
      { label: 'Within the next 3 months', value: '3months' },
      { label: 'In the next 6 months', value: '6months' },
      { label: 'In the next 12 months', value: '12months' },
      { label: 'Just exploring for now', value: 'exploring' },
    ],
  },
  {
    id: 'role',
    step: 10,
    question: 'What is your role?',
    type: 'single',
    options: [
      { label: 'CEO / MD / Founder', value: 'cxo' },
      { label: 'CTO / CIO', value: 'cto-cio' },
      { label: 'VP IT / IT Director', value: 'vp-it' },
      { label: 'L&D / HR Head', value: 'ld-hr' },
      { label: 'Operations Leader', value: 'ops' },
      { label: 'Other', value: 'other' },
    ],
  },
] as const;

const TOTAL_STEPS = QUESTIONS.length;

// ─────────────────────────────────────────────
// Contact step (shown after all 10 questions)
// ─────────────────────────────────────────────
type ContactFields = { email: string; firstName: string; lastName: string; company: string };

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
export default function AIReadyPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0 = intro, 1-10 = questions, 11 = contact, 12 = submitting
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [contact, setContact] = useState<ContactFields>({ email: '', firstName: '', lastName: '', company: '' });
  const [error, setError] = useState('');

  const currentQ = step >= 1 && step <= TOTAL_STEPS ? QUESTIONS[step - 1] : null;

  // Get current answer value
  const currentValue = currentQ ? answers[currentQ.id as keyof QuizAnswers] : undefined;

  // ── Single-select handler
  function selectOption(value: string) {
    if (!currentQ) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: value }));
    // Auto-advance after short delay
    setTimeout(() => setStep((s) => s + 1), 200);
  }

  // ── Multi-select (tool count) handler
  function toggleTool(value: string, exclusive: boolean) {
    if (exclusive) {
      setSelectedTools(['none']);
      return;
    }
    setSelectedTools((prev) => {
      const without = prev.filter((v) => v !== 'none');
      return without.includes(value)
        ? without.filter((v) => v !== value)
        : [...without, value];
    });
  }

  function confirmTools() {
    // Convert to count (capped at 3)
    const count = Math.min(3, selectedTools.filter((v) => v !== 'none').length) as 0 | 1 | 2 | 3;
    setAnswers((prev) => ({ ...prev, aiToolCount: count }));
    setStep((s) => s + 1);
  }

  // ── Submit quiz + contact info
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!contact.email || !contact.firstName) {
      setError('Please provide your name and work email.');
      return;
    }
    setStep(12); // submitting state

    try {
      const res = await fetch('/api/quiz-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: { ...answers, aiToolCount: answers.aiToolCount ?? 0 },
          email: contact.email,
          firstName: contact.firstName,
          lastName: contact.lastName,
          company: contact.company,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Submission failed');

      // Navigate to results with score params
      const params = new URLSearchParams({
        score: String(data.score),
        tier: String(data.tier ?? 1),
        pillar: data.primaryPillar,
        bullets: encodeURIComponent(JSON.stringify(data.insightBullets)),
        cta: encodeURIComponent(data.ctaText),
        name: encodeURIComponent(contact.firstName),
      });
      router.push(`/ai-ready/results?${params}`);
    } catch {
      setError('Something went wrong. Please try again.');
      setStep(11);
    }
  }

  // ─────────────────────────────────────────────
  // Render helpers
  // ─────────────────────────────────────────────
  function OptionButton({ label, value, selected, onClick }: {
    label: string; value: string; selected?: boolean; onClick: () => void;
  }) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 font-medium text-sm md:text-base ${
          selected
            ? 'border-brand bg-brand/10 text-white'
            : 'border-white/10 bg-white/5 text-text-muted hover:border-white/30 hover:bg-white/10 hover:text-white'
        }`}
      >
        {label}
      </button>
    );
  }

  // ─────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />

      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">

          {/* ── INTRO ── */}
          {step === 0 && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand/10 rounded-2xl mb-6">
                <Brain className="text-brand" size={40} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Is Your Organisation AI-Ready?
              </h1>
              <p className="text-lg text-text-muted mb-3">
                10 questions · 5 minutes · Personalised score + clear next step
              </p>
              <p className="text-sm text-text-muted mb-8 max-w-lg mx-auto">
                No email required upfront. You'll see your score at the end and choose whether to receive it in your inbox.
              </p>
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Start the Assessment <ChevronRight size={20} />
              </button>
              <p className="text-xs text-text-muted mt-6">
                Taken by 150+ Indian enterprise leaders · No spam
              </p>
            </div>
          )}

          {/* ── QUESTIONS 1–10 ── */}
          {step >= 1 && step <= TOTAL_STEPS && currentQ && (
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 md:p-10">
              <QuizProgress current={step} total={TOTAL_STEPS} />

              <div className="mt-8 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {currentQ.question}
                </h2>
                {'sublabel' in currentQ && currentQ.sublabel && (
                  <p className="text-sm text-text-muted">{currentQ.sublabel}</p>
                )}
              </div>

              {/* Single-select questions */}
              {currentQ.type === 'single' && (
                <div className="space-y-3">
                  {currentQ.options.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      label={opt.label}
                      value={opt.value}
                      selected={currentValue === opt.value}
                      onClick={() => selectOption(opt.value)}
                    />
                  ))}
                </div>
              )}

              {/* Multi-count (tools) */}
              {currentQ.type === 'multi-count' && (
                <>
                  <div className="space-y-3 mb-6">
                    {currentQ.options.map((opt) => {
                      const isExclusive = 'exclusive' in opt && opt.exclusive;
                      const isSelected = isExclusive
                        ? selectedTools.includes('none')
                        : selectedTools.includes(opt.value);
                      return (
                        <OptionButton
                          key={opt.value}
                          label={opt.label}
                          value={opt.value}
                          selected={isSelected}
                          onClick={() => toggleTool(opt.value, !!isExclusive)}
                        />
                      );
                    })}
                  </div>
                  <button
                    onClick={confirmTools}
                    disabled={selectedTools.length === 0}
                    className="w-full bg-brand hover:bg-brand/90 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
                    Continue <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Back button */}
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-4 flex items-center gap-1 text-text-muted hover:text-white text-sm transition-colors"
                >
                  <ChevronLeft size={16} /> Back
                </button>
              )}
            </div>
          )}

          {/* ── CONTACT CAPTURE (step 11) ── */}
          {step === 11 && (
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 md:p-10">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-bold px-4 py-2 rounded-full mb-4">
                  Almost there!
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Enter your details to see your score
                </h2>
                <p className="text-text-muted text-sm">
                  Your personalised AI Readiness Score will be displayed immediately and emailed to you. No spam, unsubscribe anytime.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={contact.firstName}
                      onChange={(e) => setContact((c) => ({ ...c, firstName: e.target.value }))}
                      placeholder="Raj"
                      required
                      className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={contact.lastName}
                      onChange={(e) => setContact((c) => ({ ...c, lastName: e.target.value }))}
                      placeholder="Kumar"
                      className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1.5">
                    Work Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                    placeholder="raj@company.com"
                    required
                    className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={contact.company}
                    onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand transition-colors text-sm"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base transition-all mt-2"
                >
                  Show My Score <ChevronRight size={20} />
                </button>

                <p className="text-xs text-text-muted text-center">
                  By submitting, you agree to receive your score and occasional insights from OptiVantage. No spam. Unsubscribe anytime.
                </p>
              </form>

              <button
                onClick={() => setStep((s) => s - 1)}
                className="mt-4 flex items-center gap-1 text-text-muted hover:text-white text-sm transition-colors"
              >
                <ChevronLeft size={16} /> Back
              </button>
            </div>
          )}

          {/* ── SUBMITTING ── */}
          {step === 12 && (
            <div className="text-center py-20">
              <Loader2 size={48} className="text-brand animate-spin mx-auto mb-6" />
              <p className="text-white text-xl font-semibold">Calculating your score…</p>
              <p className="text-text-muted mt-2 text-sm">This takes just a moment</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
