"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { FileText, Wifi, Brain, Shield, Zap, Download, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const RESOURCES = [
  {
    id: 'ai-advisory-onepager',
    title: 'AI Advisory-as-a-Service: One-Pager',
    description: 'Overview of all three advisory tiers, pricing guidance, and what to expect from each engagement.',
    icon: Brain,
    iconColor: 'text-brand',
    iconBg: 'bg-brand/10',
    tag: 'AI Advisory',
    tagColor: 'bg-brand/10 text-brand',
  },
  {
    id: 'wifi-case-study',
    title: 'WiFi Optimization Case Study',
    description: '15-warehouse deployment achieving 98% uptime and $200K annual infrastructure savings.',
    icon: Wifi,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/10',
    tag: 'Infrastructure',
    tagColor: 'bg-blue-400/10 text-blue-400',
  },
  {
    id: 'ai-training-overview',
    title: 'AI Training Programs Overview',
    description: 'Full catalogue of Microsoft Copilot, Azure AI, and Google AI training programs available for enterprise teams.',
    icon: Brain,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-400/10',
    tag: 'AI Training',
    tagColor: 'bg-purple-400/10 text-purple-400',
  },
  {
    id: 'network-services-guide',
    title: 'Network Services Guide',
    description: 'End-to-end guide to SD-WAN, WiFi RF engineering, structured cabling, and managed IT services.',
    icon: Zap,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10',
    tag: 'Infrastructure',
    tagColor: 'bg-amber-400/10 text-amber-400',
  },
  {
    id: 'cybersecurity-checklist',
    title: 'Cybersecurity Compliance Checklist',
    description: 'Practical ISO 27001, SOX, and GDPR compliance guide for Indian enterprises. 40-point checklist.',
    icon: Shield,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10',
    tag: 'Cybersecurity',
    tagColor: 'bg-emerald-400/10 text-emerald-400',
  },
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ResourcesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ firstName: '', email: '', company: '' });

  const selectedResource = RESOURCES.find((r) => r.id === selectedId);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedId || !form.email || !form.firstName) return;
    setFormState('submitting');

    try {
      const res = await fetch('/api/contact-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName}`,
          email: form.email,
          company: form.company,
          source: 'resource-download',
          resourceId: selectedId,
          resourceTitle: selectedResource?.title,
        }),
      });

      if (res.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />

      {/* HERO */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-text-muted text-sm px-4 py-2 rounded-full mb-6">
            <FileText size={14} /> Free Resources
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Practical guides for IT leaders
          </h1>
          <p className="text-text-muted text-lg">
            Real case studies, checklists, and service overviews. Select what's most relevant to you and we'll email it straight to your inbox.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* Resource Grid */}
            <div>
              <h2 className="text-white font-bold text-lg mb-4">
                Select a resource
              </h2>
              <div className="space-y-3">
                {RESOURCES.map((resource) => {
                  const Icon = resource.icon;
                  const isSelected = selectedId === resource.id;
                  return (
                    <button
                      key={resource.id}
                      type="button"
                      onClick={() => {
                        setSelectedId(resource.id);
                        setFormState('idle');
                      }}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                        isSelected
                          ? 'border-brand bg-brand/5'
                          : 'border-white/10 bg-navy-800 hover:border-white/25 hover:bg-navy-800/80'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 ${resource.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Icon size={20} className={resource.iconColor} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="text-white font-semibold text-sm">{resource.title}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${resource.tagColor}`}>
                              {resource.tag}
                            </span>
                          </div>
                          <p className="text-text-muted text-xs leading-relaxed">{resource.description}</p>
                        </div>
                        {isSelected && (
                          <CheckCircle size={18} className="text-brand flex-shrink-0 mt-1" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Download Form */}
            <div className="md:sticky md:top-8">
              {!selectedId ? (
                <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 text-center">
                  <FileText size={32} className="text-text-muted mx-auto mb-4" />
                  <p className="text-text-muted">
                    Select a resource on the left to get your download link.
                  </p>
                </div>
              ) : formState === 'success' ? (
                <div className="bg-navy-800 border border-emerald-400/30 rounded-2xl p-8 text-center">
                  <CheckCircle size={40} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">Check your inbox!</h3>
                  <p className="text-text-muted text-sm mb-6">
                    We've sent <strong className="text-white">{selectedResource?.title}</strong> to <strong className="text-white">{form.email}</strong>.
                    It should arrive within a few minutes.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => { setSelectedId(null); setFormState('idle'); setForm({ firstName: '', email: '', company: '' }); }}
                      className="block w-full text-center text-sm text-text-muted hover:text-white transition-colors"
                    >
                      Download another resource
                    </button>
                    <Link
                      href="/advisory"
                      className="flex items-center justify-center gap-2 bg-brand hover:bg-brand/90 text-white font-bold py-3 rounded-xl text-sm transition-all"
                    >
                      See AI Advisory Services <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-navy-800 border border-white/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/10">
                    {selectedResource && (
                      <>
                        <div className={`w-10 h-10 ${selectedResource.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          {(() => {
                            const Icon = selectedResource.icon;
                            return <Icon size={20} className={selectedResource.iconColor} />;
                          })()}
                        </div>
                        <div>
                          <p className="text-xs text-text-muted mb-0.5">Sending you:</p>
                          <h3 className="text-white font-bold text-sm">{selectedResource.title}</h3>
                        </div>
                      </>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-1.5">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                        placeholder="Raj"
                        required
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-1.5">
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="raj@company.com"
                        required
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-1.5">
                        Company (optional)
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand transition-colors text-sm"
                      />
                    </div>

                    {formState === 'error' && (
                      <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                        Something went wrong. Please try again or email us at contact@optivantage.in
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-brand hover:bg-brand/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-sm"
                    >
                      {formState === 'submitting' ? (
                        <><Loader2 size={16} className="animate-spin" /> Sending…</>
                      ) : (
                        <><Download size={16} /> Send to My Email</>
                      )}
                    </button>

                    <p className="text-xs text-text-muted text-center">
                      No spam. Unsubscribe anytime. We'll only reach out if it's relevant.
                    </p>
                  </form>
                </div>
              )}

              {/* Quiz CTA below form */}
              <div className="mt-4 bg-brand/5 border border-brand/20 rounded-xl p-5 text-center">
                <p className="text-white font-semibold text-sm mb-2">
                  Want a personalised assessment?
                </p>
                <p className="text-text-muted text-xs mb-3">
                  Take our 5-min AI Readiness Quiz and get a score, insights, and a clear next step.
                </p>
                <Link
                  href="/ai-ready"
                  className="inline-flex items-center gap-1.5 text-brand hover:text-brand/80 font-bold text-sm transition-colors"
                >
                  Take the Free Quiz <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
