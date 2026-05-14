"use client";

// Form for /ai-lab/hiring-signal-sample
// Submits to /api/hiring-signal-request, which emails contact@optivantage.in

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors text-sm';

const labelClass = 'block text-sm font-medium text-text-muted mb-2';

export default function HiringSignalRequestForm() {
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');

    const form = e.currentTarget;
    const d = new FormData(form);
    const get = (k: string) => (d.get(k) as string) ?? '';

    try {
      const res = await fetch('https://formspree.io/f/maqwnqnp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject:              'New request: Hiring Signal Sample Report',
          name:                  get('name'),
          email:                 get('email'),
          phone:                 get('phone') || '—',
          company:               get('company'),
          website:               get('website') || '—',
          'service they sell':   get('service_you_sell'),
          'target geography':    get('target_geography'),
          'target customer type': get('target_customer_type'),
          message:               get('message') || '—',
          source:                'AI Lab — Hiring Signal Sample Request',
        }),
      });

      setState(res.ok ? 'success' : 'error');
      if (res.ok) form.reset();
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-10 text-center">
        <CheckCircle className="text-green-400 h-12 w-12 mx-auto mb-4" />
        <h3 className="text-white font-bold text-xl mb-3">Thank you. We have received your request.</h3>
        <p className="text-text-muted leading-relaxed max-w-xl mx-auto">
          We will email the sample Hiring Signal Report shortly. If you shared your target market, we may also
          suggest how this report could be customised for your business.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {state === 'error' && (
        <div className="p-4 bg-red-900/20 border border-red-700/30 rounded-lg flex items-start gap-3">
          <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-300 text-sm">
            Something went wrong. Please try again or email us directly at{' '}
            <a href="mailto:contact@optivantage.in" className="underline">contact@optivantage.in</a>
          </p>
        </div>
      )}

      {/* Name + Company */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Your name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ashutosh Sharma"
            className={inputClass}
            disabled={state === 'submitting'}
          />
        </div>
        <div>
          <label className={labelClass}>
            Company name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="Acme IT Services Pvt Ltd"
            className={inputClass}
            disabled={state === 'submitting'}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Work email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className={inputClass}
            disabled={state === 'submitting'}
          />
        </div>
        <div>
          <label className={labelClass}>Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            className={inputClass}
            disabled={state === 'submitting'}
          />
        </div>
      </div>

      {/* Company website */}
      <div>
        <label className={labelClass}>Company website (optional)</label>
        <input
          type="url"
          name="website"
          placeholder="https://www.yourcompany.com"
          className={inputClass}
          disabled={state === 'submitting'}
        />
      </div>

      {/* What services do you sell */}
      <div>
        <label className={labelClass}>
          What services does your company sell? <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="service_you_sell"
          required
          placeholder="e.g. Managed IT, cybersecurity, cloud consulting, AI training, staffing"
          className={inputClass}
          disabled={state === 'submitting'}
        />
        <p className="text-xs text-text-muted mt-1.5">
          This helps us tune the signal selection to match what you actually sell.
        </p>
      </div>

      {/* Geography + Customer type */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Target geography <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="target_geography"
            required
            placeholder="e.g. Pan-India, Delhi NCR, Bengaluru, UK"
            className={inputClass}
            disabled={state === 'submitting'}
          />
        </div>
        <div>
          <label className={labelClass}>
            Target customer type <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="target_customer_type"
            required
            placeholder="e.g. Mid-size IT firms, banks, manufacturing SMEs"
            className={inputClass}
            disabled={state === 'submitting'}
          />
        </div>
      </div>

      {/* Optional message */}
      <div>
        <label className={labelClass}>Anything else you want us to know? (optional)</label>
        <textarea
          name="message"
          rows={3}
          placeholder="e.g. We focus on companies between 200–2000 employees. We avoid public sector."
          className={inputClass}
          disabled={state === 'submitting'}
        />
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full px-6 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending your request...
          </>
        ) : (
          <>
            <Send size={18} />
            Request Sample Report
          </>
        )}
      </button>

      <p className="text-xs text-text-muted text-center">
        No spam. No commitment. We will review your details and send the sample report shortly.
      </p>
    </form>
  );
}
