"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ads = [
  { src: '/Google Flow Ad v1.jpeg', alt: 'AI Training & Consulting Services - Version 1' },
  { src: '/Google Flow Ad v2.jpeg', alt: 'AI Training & Consulting Services - Version 2' },
  { src: '/Google Flow Adv3.jpeg', alt: 'AI Training & Consulting Services - Version 3' },
  { src: '/Google Flow Adv4.jpeg', alt: 'AI Training & Consulting Services - Version 4' },
  { src: '/Google Flow Adv5.jpeg', alt: 'AI Training & Consulting Services - Version 5' },
];

export default function AdsBanner() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Generate a session ID for tracking
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);

    // For A/B testing: randomly select an ad on component mount
    // This ensures each user sees a consistent ad during their session
    const randomIndex = Math.floor(Math.random() * ads.length);
    setCurrentAdIndex(randomIndex);

    // Track ad impression
    trackAdImpression(randomIndex, newSessionId);

    // Optional: Rotate ads every 30 seconds for engagement
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % ads.length;
        trackAdImpression(newIndex, newSessionId);
        return newIndex;
      });
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const trackAdImpression = (adIndex: number, session: string) => {
    // Simple client-side tracking (in production, you'd send to analytics service)
    const trackingData = {
      sessionId: session,
      adVersion: adIndex + 1,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent
    };

    // Store in localStorage for basic analytics
    const existingData = JSON.parse(localStorage.getItem('adTracking') || '[]');
    existingData.push(trackingData);
    localStorage.setItem('adTracking', JSON.stringify(existingData));

    console.log('Ad impression tracked:', trackingData);
  };

  const trackAdClick = () => {
    const clickData = {
      sessionId,
      adVersion: currentAdIndex + 1,
      timestamp: new Date().toISOString(),
      action: 'click'
    };

    const existingData = JSON.parse(localStorage.getItem('adTracking') || '[]');
    existingData.push(clickData);
    localStorage.setItem('adTracking', JSON.stringify(existingData));

    console.log('Ad click tracked:', clickData);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Transform Your Business with AI
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join 1000+ professionals who've mastered AI through our certified training programs
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl bg-white p-6 border border-gray-200">
          <Image
            src={ads[currentAdIndex].src}
            alt={ads[currentAdIndex].alt}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
            onClick={trackAdClick}
            priority
          />

          {/* Ad indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentAdIndex(index);
                  trackAdImpression(index, sessionId);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentAdIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`View ad ${index + 1}`}
              />
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-6">
            <a
              href="/contact"
              onClick={trackAdClick}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              Start Your AI Journey Today
            </a>
          </div>
        </div>

        {/* Subtle analytics note */}
        <p className="text-xs text-gray-400 text-center mt-4">
          Currently showing: Ad Version {currentAdIndex + 1}
        </p>
      </div>
    </section>
  );
}