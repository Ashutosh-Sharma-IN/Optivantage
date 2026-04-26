"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Secret admin page — no nav link, not in sitemap
// Access at: optivantage.in/admin/ads
// Data shown here is from YOUR browser only (localStorage).
// For cross-visitor data, check GA4 → Explore → Events → filter by event_category = ad_ab_test

interface TrackingEntry {
  sessionId: string;
  adVersion: number;
  timestamp: string;
  page: string;
  action?: string;
}

const AD_NAMES = [
  'Google Flow Ad v1',
  'Google Flow Ad v2',
  'Google Flow Ad v3',
  'Google Flow Ad v4',
  'Google Flow Ad v5',
];

export default function AdAdminPage() {
  const [data, setData] = useState<TrackingEntry[]>([]);

  const load = () => {
    const raw = localStorage.getItem('adTracking');
    setData(raw ? JSON.parse(raw) : []);
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 5000);
    return () => clearInterval(t);
  }, []);

  const impressions = data.filter(d => !d.action);
  const clicks = data.filter(d => d.action === 'click');

  const stats = [1, 2, 3, 4, 5].map(v => {
    const imp = impressions.filter(d => d.adVersion === v).length;
    const clk = clicks.filter(d => d.adVersion === v).length;
    return { version: v, imp, clk, ctr: imp > 0 ? ((clk / imp) * 100).toFixed(1) : '0.0' };
  });

  const clear = () => {
    localStorage.removeItem('adTracking');
    setData([]);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">Ad A/B Test Dashboard</h1>
          <Link href="/" className="text-sm text-gray-400 hover:text-white">← Homepage</Link>
        </div>
        <p className="text-yellow-400 text-sm mb-8">
          ⚠️ This page shows <strong>your browser's data only</strong>.
          For all-visitor results, open <strong>GA4 → Explore → Events</strong> and filter by{' '}
          <code className="bg-white/10 px-1 rounded">event_category = ad_ab_test</code>.
        </p>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Impressions', value: impressions.length, color: 'text-blue-400' },
            { label: 'Total Clicks', value: clicks.length, color: 'text-green-400' },
            { label: 'Overall CTR', value: impressions.length > 0 ? `${((clicks.length / impressions.length) * 100).toFixed(1)}%` : '0%', color: 'text-purple-400' },
          ].map(s => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className={`text-3xl font-bold ${s.color} mb-1`}>{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Per-version table */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider">
                <th className="text-left px-6 py-4">Ad Version</th>
                <th className="text-right px-6 py-4">Impressions</th>
                <th className="text-right px-6 py-4">Clicks</th>
                <th className="text-right px-6 py-4">CTR</th>
                <th className="px-6 py-4">Bar</th>
              </tr>
            </thead>
            <tbody>
              {stats.map(s => (
                <tr key={s.version} className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-6 py-4 font-medium">{AD_NAMES[s.version - 1]}</td>
                  <td className="text-right px-6 py-4 text-blue-400">{s.imp}</td>
                  <td className="text-right px-6 py-4 text-green-400">{s.clk}</td>
                  <td className="text-right px-6 py-4 text-purple-400 font-semibold">{s.ctr}%</td>
                  <td className="px-6 py-4 w-32">
                    <div className="bg-white/10 rounded-full h-2">
                      <div
                        className="bg-brand h-2 rounded-full transition-all"
                        style={{ width: `${Math.min(parseFloat(s.ctr), 100)}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent events */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <h2 className="font-semibold mb-4 text-gray-300">Recent Events (last 20)</h2>
          <div className="space-y-2 font-mono text-xs text-gray-400 max-h-64 overflow-y-auto">
            {data.slice(-20).reverse().map((d, i) => (
              <div key={i} className="flex gap-3">
                <span className={d.action === 'click' ? 'text-green-400' : 'text-blue-400'}>
                  {d.action === 'click' ? 'CLICK' : 'VIEW '}
                </span>
                <span>v{d.adVersion}</span>
                <span className="text-gray-600">{new Date(d.timestamp).toLocaleTimeString()}</span>
              </div>
            ))}
            {data.length === 0 && <p className="text-gray-600">No data yet. Visit the homepage to generate impressions.</p>}
          </div>
        </div>

        <button
          onClick={clear}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
        >
          Clear All Local Data
        </button>

        <p className="text-xs text-gray-600 mt-4">
          URL: /admin/ads · No nav link · Not in sitemap · localStorage data only
        </p>
      </div>
    </div>
  );
}
