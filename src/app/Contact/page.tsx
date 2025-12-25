import Navbar from '@/components/Navbar';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-text-muted">
            Ready to transform your operations? Let's start the conversation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="flex items-start gap-4">
              <div className="bg-navy-900 p-3 rounded-lg text-brand">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-text-muted text-lg mt-1">+91 9971701239</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy-900 p-3 rounded-lg text-brand">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <a href="mailto:contact@optivantage.in" className="text-text-muted text-lg mt-1 hover:text-brand transition-colors">
                  contact@optivantage.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy-900 p-3 rounded-lg text-brand">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Office</h3>
                <p className="text-text-muted text-lg mt-1">Dwarka, New Delhi</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-navy-900 p-8 rounded-xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors">
                  <option>AI Advisory & Training</option>
                  <option>IT Infrastructure</option>
                  <option>Managed IT Services</option>
                  <option>Process Improvement</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-white/10 text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-6 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
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
