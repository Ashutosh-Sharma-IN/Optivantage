"use client";
import { useState, useEffect } from 'react';
import { X, Download, FileText } from 'lucide-react';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false); // Only show once per session

  useEffect(() => {
    // Don't show if already shown in this session
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves from top of page (user about to close tab)
      if (e.clientY <= 0 && !showPopup && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    // Add event listener after 5 seconds (give user time to read)
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
    
    // TODO: Integrate with your Formspree or email service
    // For now, just log and close
    console.log('Email submitted:', email);
    
    // You can send this to Formspree or Mailchimp here
    // Example: 
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, interest: 'case-study' }),
    //   headers: { 'Content-Type': 'application/json' }
    // });
    
    alert('Thank you! Check your email for the case study.');
    setShowPopup(false);
    setEmail('');
  };

  if (!showPopup) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fadeIn"
        onClick={() => setShowPopup(false)}
      >
        {/* Popup Card */}
        <div 
          className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl animate-slideUp"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button */}
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          {/* Icon */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand/10 rounded-full mb-4">
              <FileText className="text-brand" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-navy-900 mb-2">
              Wait! Before You Go...
            </h3>
            
            <p className="text-gray-600 text-lg">
              Download our <strong className="text-brand">Network Optimization Case Study</strong>
            </p>
            
            <p className="text-sm text-gray-500 mt-2">
              Real metrics from 15-warehouse WiFi deployment
            </p>
          </div>

          {/* Value Props */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Download size={16} className="text-brand flex-shrink-0" />
              <span>Detailed technical implementation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Download size={16} className="text-brand flex-shrink-0" />
              <span>ROI analysis with actual costs</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Download size={16} className="text-brand flex-shrink-0" />
              <span>Before/after performance metrics</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
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
            
            <button
              type="submit"
              className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Free Case Study
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

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

/*
===============================================
TO INTEGRATE WITH FORMSPREE:
===============================================

Replace the handleSubmit function with:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      method: 'POST',
      body: JSON.stringify({ 
        email: email,
        interest: 'WiFi Optimization Case Study',
        source: 'Exit Intent Popup'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      alert('Thank you! Check your email for the case study.');
      setShowPopup(false);
      setEmail('');
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  } catch (error) {
    alert('Error submitting form. Please email us directly at contact@optivantage.in');
  }
};

===============================================
*/
