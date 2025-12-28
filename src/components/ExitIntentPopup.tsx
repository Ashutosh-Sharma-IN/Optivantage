"use client";
import { useState, useEffect } from 'react';
import { X, Download, FileText, Wifi, Brain, Shield, Zap } from 'lucide-react';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedDownload, setSelectedDownload] = useState('');
  const [hasShown, setHasShown] = useState(false);

  const downloadOptions = [
    {
      id: 'wifi-case-study',
      title: 'WiFi Optimization Case Study',
      description: '15-warehouse deployment with 98% uptime',
      icon: Wifi,
      color: 'text-blue-600'
    },
    {
      id: 'ai-training-overview',
      title: 'AI Training Programs Overview',
      description: 'Microsoft/Google AI training catalog',
      icon: Brain,
      color: 'text-purple-600'
    },
    {
      id: 'network-services-guide',
      title: 'Network Services Guide',
      description: 'SD-WAN, WiFi, Managed IT services',
      icon: Zap,
      color: 'text-orange-600'
    },
    {
      id: 'cybersecurity-checklist',
      title: 'Cybersecurity Checklist',
      description: 'ISO 27001/SOX compliance guide',
      icon: Shield,
      color: 'text-green-600'
    }
  ];

  useEffect(() => {
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showPopup && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [showPopup, hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDownload) {
      alert('Please select a resource to download');
      return;
    }

    // TODO: Integrate with Formspree
    console.log('Email:', email, 'Selected:', selectedDownload);
    
    alert(`Thank you! We'll send "${downloadOptions.find(d => d.id === selectedDownload)?.title}" to your email shortly.`);
    setShowPopup(false);
    setEmail('');
    setSelectedDownload('');
  };

  if (!showPopup) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fadeIn"
        onClick={() => setShowPopup(false)}
      >
        <div 
          className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl animate-slideUp max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand/10 rounded-full mb-4">
              <FileText className="text-brand" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-navy-900 mb-2">
              Wait! Get Free Resources
            </h3>
            
            <p className="text-gray-600 text-lg">
              Choose what you'd like to download — real case studies, guides, and implementation details
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Download Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Resource to Download:
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {downloadOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedDownload(option.id)}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        selectedDownload === option.id
                          ? 'border-brand bg-brand/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`${option.color} flex-shrink-0 mt-1`} size={24} />
                        <div>
                          <div className="font-semibold text-navy-900 text-sm mb-1">
                            {option.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {option.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Send to My Email
            </button>
          </form>

          {/* Trust Signals */}
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Instant delivery</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
