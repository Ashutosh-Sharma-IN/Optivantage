"use client";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Clock, Tag, User } from 'lucide-react';
import { blogPosts, getPostBySlug, BlogCategory } from '@/lib/blog-data';

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

export default function BlogPost({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center text-white gap-4">
          <p className="text-2xl font-bold">Post not found</p>
          <Link href="/blog" className="text-brand hover:underline flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const related = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-navy-900">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-text-muted hover:text-brand mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[post.category]}`}>
              <Tag size={10} /> {post.category}
            </span>
            <span className="text-xs text-text-muted flex items-center gap-1.5">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="text-xs text-text-muted flex items-center gap-1.5">
              <User size={12} /> {post.author}
            </span>
            <span className="text-xs text-text-muted">{formatDate(post.date)}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-text-muted leading-relaxed border-l-4 border-brand pl-5">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 px-4 bg-navy-800">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-text-muted prose-p:leading-relaxed prose-p:mb-5
              prose-li:text-text-muted prose-li:mb-1
              prose-ul:my-5 prose-ol:my-5
              prose-strong:text-white
              prose-a:text-brand prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Author Card */}
      <section className="py-10 px-4 bg-navy-900 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-800 rounded-xl p-7 border border-white/5 flex items-start gap-5">
            <div className="h-14 w-14 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
              <User className="text-brand h-7 w-7" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">{post.author}</p>
              <p className="text-text-muted text-sm mt-1">
                Founder & CEO, Optivantage Technologies. 25 years in enterprise IT. AI Trainer (1000+ professionals trained).
                ISO/IEC 42001 Lead Implementer. Microsoft & Google certified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 px-4 bg-navy-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group bg-navy-900 rounded-xl border border-white/5 hover:border-brand/50 transition-all p-6 flex flex-col"
                >
                  <span className={`self-start mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryColors[relPost.category]}`}>
                    <Tag size={10} /> {relPost.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-brand transition-colors leading-snug flex-grow mb-3">
                    {relPost.title}
                  </h3>
                  <span className="text-xs text-text-muted">{formatDate(relPost.date)}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-navy-900 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Want to discuss this topic?</h2>
        <p className="text-text-muted mb-8 max-w-xl mx-auto">
          Every conversation starts with listening. Tell us your challenge — we'll be straightforward about whether and how we can help.
        </p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
