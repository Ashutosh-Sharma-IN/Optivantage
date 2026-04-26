"use client";

interface QuizProgressProps {
  current: number; // 1-based
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-text-muted uppercase tracking-widest">
          Question {current} of {total}
        </span>
        <span className="text-xs font-bold text-brand">{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
