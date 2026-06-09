import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { blogPosts, getPostBySlug } from '@/lib/blog-data';
import BlogPost from './BlogPostClient';

const BASE_URL = 'https://www.optivantage.in';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const url = `${BASE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author, url: `${BASE_URL}/about` }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      siteName: 'Optivantage Technologies',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${BASE_URL}/logo.png`, width: 400, height: 120, alt: 'Optivantage' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${BASE_URL}/logo.png`],
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Optivantage Technologies',
      url: BASE_URL,
      worksFor: {
        '@type': 'Organization',
        name: 'Optivantage Technologies',
        url: BASE_URL,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Optivantage Technologies',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${BASE_URL}/logo.png`,
    inLanguage: 'en-IN',
    keywords: post.category,
  };

  return (
    <>
      <Script
        id={`article-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="beforeInteractive"
      />
      <BlogPost slug={slug} />
    </>
  );
}
