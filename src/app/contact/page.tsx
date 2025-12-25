"use client";
import Navbar from '@/components/Navbar';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main>
      <Navbar />
      
      {/* TOP HERO BAR (Contact Info First) */}
      <section className="bg-brand py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div className="flex md:items-center gap-4 justify-center">
              <Phone className="text-white h-8 w-8 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/80 uppercase font-bold tracking-wide">Phone</p>
                <p className="text-white font-bold text-xl">+91 9971701239</p>
              </div>
            </div>

            <div className="flex md:items-center gap-4 justify-center">
              <Mail className="text-white h-8 w-8 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/80 uppercase font-bold tracking-wide">Email</p>
                <a href="mailto:contact@optivantage.in" className="text-white font-bold text-xl hover:underline">
                  contact@optivantage.in
                </a>
              </div>
            </div>

            <div className="flex md:items-center gap-4 justify-center">
              <MapPin className="text-white h-8 w-8 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/80 uppercase font-bold tracking-wide">Office</p>
                <p className="text-white font-bold text-xl">Dwarka, New Delhi</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-text-muted">
              Fill the form below or use the contact details above.
            </p>
          </div>

          <div className="bg-navy-800 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors">
                  <option>AI Advisory & Training</option>
                  <option>IT Infrastructure</option>
                  <option>Managed IT Services</option>
                  <option>Cybersecurity & Compliance</option>
                  <option>Process Improvement</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="Tell us about your project or challenge..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-6 py-4 bg-navy-700 hover:bg-brand text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-brand"
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
