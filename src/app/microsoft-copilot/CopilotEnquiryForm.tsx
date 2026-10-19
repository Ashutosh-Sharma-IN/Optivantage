"use client";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/maqwnqnp";

const licenceOptions = [
  "None yet",
  "Copilot Chat (free)",
  "Microsoft 365 Copilot (paid)",
  "A mix",
  "Not sure",
];

const interestOptions = [
  "Assess",
  "Train",
  "Build",
  "Measure & sustain",
  "Licences",
];

const inputClass =
  "w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand text-sm";
const labelClass = "block text-sm text-text-muted mb-2";

type Status = "idle" | "sending" | "success" | "error";

export default function CopilotEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "_subject",
      "New enquiry: Microsoft Copilot for Enterprises",
    );
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        // Leave the fields as they are so the visitor can retry or copy their message.
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-navy-800 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="enq-name" className={labelClass}>
              Name *
            </label>
            <input
              id="enq-name"
              name="name"
              type="text"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="enq-email" className={labelClass}>
              Work email *
            </label>
            <input
              id="enq-email"
              name="email"
              type="email"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="enq-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="enq-phone"
              name="phone"
              type="tel"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="enq-company" className={labelClass}>
              Company *
            </label>
            <input
              id="enq-company"
              name="company"
              type="text"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="enq-role" className={labelClass}>
              Your role
            </label>
            <input
              id="enq-role"
              name="role"
              type="text"
              placeholder="e.g. Head of L&D"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="enq-employees" className={labelClass}>
              Approx. employees
            </label>
            <input
              id="enq-employees"
              name="employees"
              type="text"
              placeholder="e.g. 2,000"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="enq-licences" className={labelClass}>
            Copilot licences today
          </label>
          <select
            id="enq-licences"
            name="licences"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select one
            </option>
            {licenceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className={labelClass}>What are you interested in?</legend>
          <div className="flex flex-wrap gap-3">
            {interestOptions.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 bg-navy-900 border border-white/20 rounded-lg px-3 py-2 text-sm text-white cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="interests"
                  value={option}
                  className="accent-brand"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="enq-message" className={labelClass}>
            Anything else we should know?
          </label>
          <textarea
            id="enq-message"
            name="message"
            rows={4}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full px-6 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" /> Sending...
            </>
          ) : (
            <>
              Send enquiry <Send size={18} />
            </>
          )}
        </button>

        {/* Shown right under the button, where the visitor is looking after they tap it. */}
        {status === "success" && (
          <div
            role="alert"
            className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl flex items-start gap-4"
          >
            <CheckCircle2 className="text-green-500 h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-green-400 font-bold text-lg mb-1">
                Thank you, we&apos;ve received it.
              </h3>
              <p className="text-green-200 text-sm">
                Our team will be in touch shortly.
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-4"
          >
            <AlertCircle className="text-red-500 h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-red-400 font-bold text-lg mb-1">
                That didn&apos;t send.
              </h3>
              <p className="text-red-200 text-sm">
                Something went wrong. Please email{" "}
                <a href="mailto:contact@optivantage.in" className="underline">
                  contact@optivantage.in
                </a>
                . Your details are still in the form above.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
