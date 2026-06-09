"use client";

// Form for requesting a Hiring Signal Lead Pack sample report.
// Collects sales-context fields and submits to the existing contact webhook.

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors";

const labelClass = "block text-sm font-medium text-text-muted mb-2";

export default function SampleReportForm() {
  const [state, setState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const d = new FormData(form);
    const get = (k: string) => (d.get(k) as string) ?? "";

    // Bundle the AI Lab-specific context into the message field
    const structuredMessage = [
      `Service they sell: ${get("service_you_sell")}`,
      `Company website: ${get("website") || "Not provided"}`,
      `Target geography: ${get("target_geography")}`,
      `Target customer type: ${get("target_customer_type")}`,
    ].join("\n");

    try {
      const res = await fetch("/api/contact-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          email: get("email"),
          phone: get("phone"),
          company: get("company"),
          service: "Hiring Signal Lead Pack — Sample Report",
          message: structuredMessage,
          source: "contact-form",
        }),
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-8 text-center">
        <CheckCircle className="text-green-400 h-12 w-12 mx-auto mb-4" />
        <h3 className="text-white font-bold text-xl mb-2">Request received</h3>
        <p className="text-text-muted">
          We will review your details and send a sample report within 2 business
          days. If we need anything else, we will reach out directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {state === "error" && (
        <div className="p-4 bg-red-900/20 border border-red-700/30 rounded-lg flex items-start gap-3">
          <AlertCircle
            size={18}
            className="text-red-400 flex-shrink-0 mt-0.5"
          />
          <p className="text-red-300 text-sm">
            Something went wrong. Please try again or email us at{" "}
            <a href="mailto:contact@optivantage.in" className="underline">
              contact@optivantage.in
            </a>
          </p>
        </div>
      )}

      {/* Row 1 — Name + Company */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Your name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Rahul Mehta"
            className={inputClass}
            disabled={state === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass}>
            Company <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="Acme IT Services"
            className={inputClass}
            disabled={state === "submitting"}
          />
        </div>
      </div>

      {/* Row 2 — Email + Phone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className={inputClass}
            disabled={state === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            className={inputClass}
            disabled={state === "submitting"}
          />
        </div>
      </div>

      {/* Company website */}
      <div>
        <label className={labelClass}>Company website</label>
        <input
          type="url"
          name="website"
          placeholder="https://www.yourcompany.com"
          className={inputClass}
          disabled={state === "submitting"}
        />
      </div>

      {/* Service you sell */}
      <div>
        <label className={labelClass}>
          What service does your company sell?{" "}
          <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="service_you_sell"
          required
          placeholder="e.g. Managed IT services, cybersecurity, AI training, staffing"
          className={inputClass}
          disabled={state === "submitting"}
        />
        <p className="text-xs text-text-muted mt-2">
          This helps us tune the hiring signals to match your actual service
          offering.
        </p>
      </div>

      {/* Row 3 — Geography + Customer type */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Target geography <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="target_geography"
            required
            placeholder="e.g. Pan-India, Delhi NCR, Mumbai, UK"
            className={inputClass}
            disabled={state === "submitting"}
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
            disabled={state === "submitting"}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full px-6 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending your request...
          </>
        ) : (
          <>
            <Send size={18} />
            Request a Sample Report
          </>
        )}
      </button>

      <p className="text-xs text-text-muted text-center">
        No commitment. We will send a sample within 2 business days.
      </p>
    </form>
  );
}
