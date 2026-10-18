"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle, CheckCircle2 } from "lucide-react";
import { challenges, journeySteps } from "@/lib/copilot-offer";

export default function CopilotDiagnostic() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const matchedIds = new Set(
    selected.flatMap((id) => challenges.find((c) => c.id === id)?.steps ?? []),
  );
  const matchedSteps = journeySteps.filter((step) => matchedIds.has(step.id));

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {challenges.map((challenge) => {
          const isSelected = selected.includes(challenge.id);
          return (
            <button
              key={challenge.id}
              type="button"
              onClick={() => toggle(challenge.id)}
              aria-pressed={isSelected}
              className={`flex items-start gap-3 text-left p-4 rounded-xl border transition-all ${
                isSelected
                  ? "border-brand bg-brand/10 text-white"
                  : "border-white/10 bg-navy-900 text-text-muted hover:border-white/30 hover:text-white"
              }`}
            >
              <span className="text-sm leading-relaxed">{challenge.label}</span>
              {isSelected && (
                <CheckCircle2
                  className="text-brand flex-shrink-0 ml-auto mt-0.5"
                  size={18}
                />
              )}
            </button>
          );
        })}
      </div>

      {matchedSteps.length > 0 ? (
        <div className="bg-brand/10 border border-brand/30 rounded-2xl p-6">
          <p className="text-brand font-semibold text-sm mb-4">
            Where we would start with you:
          </p>
          <ul className="space-y-3">
            {matchedSteps.map((step) => (
              <li
                key={step.id}
                className="flex items-start gap-2 text-sm text-white"
              >
                <CheckCircle className="text-brand h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  <a href="#journey" className="font-semibold hover:text-brand">
                    {step.title}
                  </a>
                  <span className="text-text-muted">: {step.summary}</span>
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all text-sm"
          >
            Talk to us <ArrowRight size={16} />
          </a>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-sm">
          Select one or more challenges to see where we would start.
        </p>
      )}
    </div>
  );
}
