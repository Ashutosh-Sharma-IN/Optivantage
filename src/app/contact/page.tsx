"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    errors: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, errors: false });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/maqwnqnp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, errors: false });
        form.reset(); // Clear the form
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setFormState({ submitting: false, succeeded: false, errors: false });
        }, 5000);
      } else {
        setFormState({ submitting: false, succeeded: false, errors: true });
      }
    } catch (error) {
      setFormState({ submitting: false, succeeded: false, errors: true });
    }
  };

  return (
    <main>
      <Navbar />

      {/* FORM SECTION */}
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-text-muted">
              Fill the form below or use the contact details above.
            </p>
          </div>

          {/* SUCCESS MESSAGE */}
          {formState.succeeded && (
            <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl flex items-start gap-4">
              <CheckCircle className="text-green-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-green-500 font-bold text-lg mb-1">Thank You!</h3>
                <p className="text-green-200">
                  Your message has been received. We'll get back to you within 24-48 hours.
                </p>
              </div>
            </div>
          )}

          {/* ERROR MESSAGE */}
          {formState.errors && (
            <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-4">
              <AlertCircle className="text-red-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-red-500 font-bold text-lg mb-1">Submission Failed</h3>
                <p className="text-red-200">
                  There was an error submitting your form. Please try again or email us directly at contact@optivantage.in
                </p>
              </div>
            </div>
          )}

          <div className="bg-navy-800 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                    placeholder="John Doe"
                    disabled={formState.submitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                    placeholder="john@company.com"
                    disabled={formState.submitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Phone Number (Optional)
                </label>
                <input 
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="+91 9876543210"
                  disabled={formState.submitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Service Interest <span className="text-red-500">*</span>
                </label>
                <select 
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                  disabled={formState.submitting}
                >
                  <option value="">Select a service...</option>
                  <option>AI Advisory & Training</option>
                  <option>IT Infrastructure</option>
                  <option>Managed IT Services</option>
                  <option>Cybersecurity & Compliance</option>
                  <option>Process Improvement</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="Tell us about your project or challenge..."
                  disabled={formState.submitting}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState.submitting}
                className="w-full px-6 py-4 bg-navy-700 hover:bg-brand text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-brand disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.submitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> 
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> 
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
