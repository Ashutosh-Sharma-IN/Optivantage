import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts, BlogCategory } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog | AI Training, IT Infrastructure & Enterprise Tech Insights',
  description:
    'Practical insights on enterprise AI adoption, Microsoft Copilot 365, ISO/IEC 42001 AI governance, network infrastructure, SD-WAN, structured cabling, and IT equipment. Written by Ashutosh Sharma — certified Microsoft AI trainer and ISO 42001 Lead Implementer.',
  keywords: [
    'AI blog India', 'enterprise AI insights', 'Microsoft Copilot tips',
    'ISO 42001 blog', 'AI governance articles', 'IT infrastructure blog',
    'structured cabling guide', 'SD-WAN explainer', 'AI for business blog India',
    'Gen AI insights', 'AI upskilling articles',
  ],
  alternates: { canonical: 'https://www.optivantage.in/blog' },
  openGraph: {
    title: 'Blog | AI Training, IT Infrastructure & Enterprise Tech | Optivantage',
    description: 'Practical AI and IT insights from 25 years of enterprise experience. Copilot 365, ISO 42001, SD-WAN, network infrastructure and more.',
    url: 'https://www.optivantage.in/blog',
    type: 'website',
  },
};

const categoryColors: Record<BlogCategory, string> = {
  'AI Training & Advisory': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'IT Infrastructure': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'IT Equipment & Rentals': 'bg-green-500/20 text-green-300 border-green-500/30',
  'AI Automation & Agentic AI': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'General': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Insights & Perspectives</h1>
          <p className="text-xl text-text-muted">
            Practical thinking on AI adoption, IT infrastructure, and enterprise technology — written from the field, not the whiteboard.
          </p>
        </div>
      </section>

      {blogPosts.length === 0 ? (
        /* Empty state */
        <section className="py-32 px-4 bg-navy-800 text-center">
          <p className="text-text-muted text-lg mb-2">First post coming soon.</p>
          <p className="text-text-muted text-sm">We publish once a week on AI, infrastructure, and enterprise IT.</p>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featured && (
            <section className="py-16 px-4 bg-navy-800">
              <div className="max-w-5xl mx-auto">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Latest Post</p>
                <Link href={`/blog/${featured.slug}`} className="group block bg-navy-900 rounded-2xl border border-white/5 hover:border-brand/50 transition-all overflow-hidden">
                  <div className="p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[featured.category]}`}>
                        <Tag size={10} /> {featured.category}
                      </span>
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Clock size={12} /> {featured.readTime}
                      </span>
                      <span className="text-xs text-text-muted">{formatDate(featured.date)}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-brand transition-colors leading-snug">
                      {featured.title}
                    </h2>
                    <p className="text-text-muted mb-6 leading-relaxed">{featured.excerpt}</p>
                    <span className="inline-flex items-center text-brand font-semibold text-sm">
                      Read Article <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </Link>
              </div>
            </section>
          )}

          {/* Rest of posts grid */}
          {rest.length > 0 && (
            <section className="py-16 px-4 bg-navy-900">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-navy-800 rounded-xl border border-white/5 hover:border-brand/50 transition-all p-7 flex flex-col"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryColors[post.category]}`}>
                          <Tag size={10} /> {post.category}
                        </span>
                        <span className="text-xs text-text-muted flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors leading-snug flex-grow">
                        {post.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs text-text-muted">{formatDate(post.date)}</span>
                        <span className="text-brand text-sm font-semibold flex items-center gap-1">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-navy-800 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Want to discuss any of these topics?</h2>
        <p className="text-text-muted mb-8 max-w-xl mx-auto">
          We're always happy to have a real conversation about AI, infrastructure, or IT strategy.
        </p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
