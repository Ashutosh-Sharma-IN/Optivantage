"use client";
import { useState, useEffect } from 'react';

interface TrackingData {
  sessionId: string;
  adVersion: number;
  timestamp: string;
  page: string;
  userAgent?: string;
  action?: string;
}

export default function AdAnalytics() {
  const [analytics, setAnalytics] = useState<{
    totalImpressions: number;
    totalClicks: number;
    impressionsByVersion: Record<number, number>;
    clicksByVersion: Record<number, number>;
    ctrByVersion: Record<number, number>;
  }>({
    totalImpressions: 0,
    totalClicks: 0,
    impressionsByVersion: {},
    clicksByVersion: {},
    ctrByVersion: {}
  });

  useEffect(() => {
    const loadAnalytics = () => {
      const trackingData: TrackingData[] = JSON.parse(localStorage.getItem('adTracking') || '[]');

      const impressions = trackingData.filter(item => !item.action);
      const clicks = trackingData.filter(item => item.action === 'click');

      const impressionsByVersion: Record<number, number> = {};
      const clicksByVersion: Record<number, number> = {};

      impressions.forEach(item => {
        impressionsByVersion[item.adVersion] = (impressionsByVersion[item.adVersion] || 0) + 1;
      });

      clicks.forEach(item => {
        clicksByVersion[item.adVersion] = (clicksByVersion[item.adVersion] || 0) + 1;
      });

      const ctrByVersion: Record<number, number> = {};
      [1, 2, 3, 4, 5].forEach(version => {
        const imp = impressionsByVersion[version] || 0;
        const clk = clicksByVersion[version] || 0;
        ctrByVersion[version] = imp > 0 ? (clk / imp) * 100 : 0;
      });

      setAnalytics({
        totalImpressions: impressions.length,
        totalClicks: clicks.length,
        impressionsByVersion,
        clicksByVersion,
        ctrByVersion
      });
    };

    loadAnalytics();
    // Refresh analytics every 5 seconds
    const interval = setInterval(loadAnalytics, 5000);
    return () => clearInterval(interval);
  }, []);

  const clearAnalytics = () => {
    localStorage.removeItem('adTracking');
    setAnalytics({
      totalImpressions: 0,
      totalClicks: 0,
      impressionsByVersion: {},
      clicksByVersion: {},
      ctrByVersion: {}
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Ad Performance Analytics</h3>
        <button
          onClick={clearAnalytics}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
        >
          Clear Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded">
          <div className="text-2xl font-bold text-blue-600">{analytics.totalImpressions}</div>
          <div className="text-sm text-blue-800">Total Impressions</div>
        </div>
        <div className="bg-green-50 p-4 rounded">
          <div className="text-2xl font-bold text-green-600">{analytics.totalClicks}</div>
          <div className="text-sm text-green-800">Total Clicks</div>
        </div>
        <div className="bg-purple-50 p-4 rounded">
          <div className="text-2xl font-bold text-purple-600">
            {analytics.totalImpressions > 0 ? ((analytics.totalClicks / analytics.totalImpressions) * 100).toFixed(1) : 0}%
          </div>
          <div className="text-sm text-purple-800">Overall CTR</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Ad Version</th>
              <th className="text-right py-2">Impressions</th>
              <th className="text-right py-2">Clicks</th>
              <th className="text-right py-2">CTR</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map(version => (
              <tr key={version} className="border-b">
                <td className="py-2">Version {version}</td>
                <td className="text-right py-2">{analytics.impressionsByVersion[version] || 0}</td>
                <td className="text-right py-2">{analytics.clicksByVersion[version] || 0}</td>
                <td className="text-right py-2">{analytics.ctrByVersion[version]?.toFixed(1) || 0}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Data is stored locally in your browser. Refresh the page to see real-time updates.
      </div>
    </div>
  );
}