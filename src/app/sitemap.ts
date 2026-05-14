import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

const BASE_URL = 'https://www.optivantage.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/ai-training-advisory`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/services/it-infrastructure`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/it-equipment-rentals`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/training/copilot-365`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/ai-automation`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/ai-lab`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/iso-42001-training`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/microsoft-copilot-training`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/delhi-ncr-ai-training`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/advisory`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    // GEO/AEO content pages — added April 2026
    {
      url: `${BASE_URL}/it-infrastructure-india`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ai-training-banking-india`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ai-training-aviation-india`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ai-training-telecom-india`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/laptop-rental-india`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gcc-it-setup-india`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/structured-cabling-india`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/microsoft-copilot-training-india`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
