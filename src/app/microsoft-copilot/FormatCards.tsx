"use client";
import { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { trainingFormats } from "@/lib/copilot-offer";

export default function FormatCards() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid lg:grid-cols-3 gap-6 items-start">
      {trainingFormats.map((format) => {
        const isOpen = openId === format.id;
        return (
          <div
            key={format.id}
            className="bg-navy-800 border border-white/10 rounded-2xl p-6 hover:border-brand/30 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-2">{format.name}</h3>
            <p className="text-brand text-sm font-semibold mb-4">
              {format.audience}
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-3">
              <span className="text-white font-medium">Format: </span>
              {format.shape}
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              <span className="text-white font-medium">Outcome: </span>
              {format.outcome}
            </p>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : format.id)}
              aria-expanded={isOpen}
              className="flex items-center gap-2 text-sm font-semibold text-brand hover:text-white transition-colors"
            >
              {isOpen ? "Hide outline" : "See outline"}
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {/* Outline stays in the HTML when collapsed so search engines and AI crawlers can read it. */}
            <ul
              className={`mt-4 space-y-2 border-t border-white/10 pt-4 ${isOpen ? "" : "hidden"}`}
            >
              {format.outline.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <CheckCircle className="text-brand h-4 w-4 mt-0.5 flex-shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
