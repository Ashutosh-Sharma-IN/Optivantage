"use client";
import { useState, useEffect } from 'react';
import { X, Brain, Sparkles, Send, Bot, BookOpen } from 'lucide-react';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const aiResources = [
    { id: 'prompt-guide', label: 'AI Prompt Engineering Guide', icon: Sparkles },
    { id: 'agent-guide', label: 'AI Agent Implementation Guide', icon: Bot },
    { id: 'copilot-guide', label: 'Microsoft Copilot Playbook', icon: BookOpen },
    { id: 'ai-strategy', label: 'Enterprise AI Strategy Framework', icon: Brain },
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

    try {
      await fetch('https://formspree.io/f/maqwnqnp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          interest,
          source: 'AI Resources Popup',
        }),
      });
    } catch {
      // silent fail
    }

    setSubmitted(true);
  };

  if (!showPopup) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fadeIn"
        onClick={() => setShowPopup(false)}
      >
        <div
          className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl animate-slideUp max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-brand/20 rounded-full mb-4">
                  <Brain className="text-brand" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  Get Free AI Resources
                </h3>

                <p className="text-gray-600">
                  Practical guides on prompts, AI agents, and enterprise AI - used by our Fortune 500 clients.
                </p>
              </div>

              {/* Resource Previews */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {aiResources.map((resource) => {
                  const Icon = resource.icon;
                  return (
                    <div key={resource.id} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                      <Icon size={16} className="text-brand flex-shrink-0" />
                      <span className="text-xs font-medium text-navy-900">{resource.label}</span>
                    </div>
                  );
                })}
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-sm"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-sm"
                />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-sm"
                />
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-sm text-gray-600"
                >
                  <option value="">What interests you most?</option>
                  <option value="prompt-engineering">Prompt Engineering & AI Tools</option>
                  <option value="agentic-ai">Agentic AI & Automation</option>
                  <option value="copilot-deployment">Microsoft Copilot Deployment</option>
                  <option value="ai-strategy">Enterprise AI Strategy</option>
                  <option value="ai-training">AI Training for Teams</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Get Free AI Resources
                </button>
              </form>

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
            </>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Sparkles className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">You&apos;re All Set!</h3>
              <p className="text-gray-600 mb-4">
                Check your inbox for your AI resources. We&apos;ll also share exclusive AI insights and updates.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-brand text-white rounded-lg hover:bg-brand/90 transition-all"
              >
                Continue Browsing
              </button>
            </div>
          )}
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
