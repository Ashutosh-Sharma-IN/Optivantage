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
    <section className="py-8 px-4 bg-red-100 border-4 border-red-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-red-800 mb-2">
            🚨 ADS SECTION - TESTING VISIBILITY 🚨
          </h3>
          <p className="text-lg text-red-600 font-semibold">
            If you can see this bright red section, the ads are working!
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-lg bg-white p-4 border-4 border-blue-500">
          <Image
            src={ads[currentAdIndex].src}
            alt={ads[currentAdIndex].alt}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg cursor-pointer border-2 border-green-500"
            onClick={trackAdClick}
            priority
          />

          {/* Ad indicator dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentAdIndex(index);
                  trackAdImpression(index, sessionId);
                }}
                className={`w-4 h-4 rounded-full transition-colors border-2 border-black ${
                  index === currentAdIndex ? 'bg-red-500' : 'bg-gray-300'
                }`}
                aria-label={`View ad ${index + 1}`}
              />
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-4">
            <a
              href="/contact"
              onClick={trackAdClick}
              className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors border-2 border-black"
            >
              Get Started Today - TEST BUTTON
            </a>
          </div>
        </div>

        {/* Analytics note for A/B testing */}
        <p className="text-lg text-red-800 text-center mt-4 font-bold border-2 border-red-500 p-2 bg-yellow-200">
          Currently showing: Ad Version {currentAdIndex + 1} | Session: {sessionId.slice(-8)}
        </p>
      </div>
    </section>
  );
}