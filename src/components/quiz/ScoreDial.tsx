"use client";

interface ScoreDialProps {
  score: number; // 0-100
  tier: 1 | 2 | 3;
}

const TIER_LABELS: Record<1 | 2 | 3, string> = {
  1: 'AI Awareness',
  2: 'AI Adopter',
  3: 'AI Leader',
};

const TIER_COLORS: Record<1 | 2 | 3, string> = {
  1: '#F59E0B', // amber
  2: '#3B82F6', // blue
  3: '#10B981', // emerald
};

export default function ScoreDial({ score, tier }: ScoreDialProps) {
  // SVG arc maths
  const radius = 70;
  const cx = 90;
  const cy = 90;
  const circumference = 2 * Math.PI * radius;
  // We only use the top 270° (from 135° to 45°, going clockwise)
  const arcLength = circumference * 0.75;
  const dashOffset = arcLength - (score / 100) * arcLength;
  const color = TIER_COLORS[tier];

  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="160" viewBox="0 0 180 160" className="overflow-visible">
        {/* Background arc */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeDashoffset={0}
          transform={`rotate(135 ${cx} ${cy})`}
        />
        {/* Score arc */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeDashoffset={dashOffset}
          transform={`rotate(135 ${cx} ${cy})`}
          style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
        />
        {/* Score number */}
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#F8FAFC"
          fontSize="36"
          fontWeight="900"
          fontFamily="Inter, sans-serif"
        >
          {score}
        </text>
        <text
          x={cx}
          y={cy + 20}
          textAnchor="middle"
          fill="rgba(248,250,252,0.5)"
          fontSize="12"
          fontFamily="Inter, sans-serif"
        >
          out of 100
        </text>
      </svg>
      <div
        className="mt-1 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider"
        style={{ backgroundColor: color + '20', color }}
      >
        {TIER_LABELS[tier]}
      </div>
    </div>
  );
}
