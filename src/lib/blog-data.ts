export type BlogCategory = 'AI Training & Advisory' | 'IT Infrastructure' | 'IT Equipment & Rentals' | 'General';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;        // ISO format: "2026-04-17"
  readTime: string;    // e.g. "5 min read"
  author: string;
  content: string;     // HTML string
};

// ─── ADD NEW POSTS HERE ───────────────────────────────────────────────────────
// To add a post: copy the object structure below, fill in the fields,
// and add it to the front of this array (newest first).

export const blogPosts: BlogPost[] = [
  {
    slug: "why-ai-governance-matters-iso-42001",
    title: "Why AI Governance Is the Missing Piece in Your Enterprise AI Strategy",
    excerpt: "Most organisations are rushing to adopt AI. Very few have thought about how to govern it. ISO/IEC 42001 exists for exactly this reason — and most CXOs have never heard of it.",
    category: "AI Training & Advisory",
    date: "2026-04-17",
    readTime: "6 min read",
    author: "Ashutosh Sharma",
    content: `
      <p>There is a pattern I see repeatedly when I work with enterprise clients on AI adoption. The enthusiasm is real. The pilots are running. The tools are being deployed. But when I ask about their AI governance framework — the silence is telling.</p>

      <p>Most organisations have no formal AI governance policy. No documented framework for how AI decisions are made, reviewed, or audited. No accountability structure for when an AI tool produces a biased or incorrect output that affects a customer, an employee, or a regulatory requirement.</p>

      <h2>What Is ISO/IEC 42001?</h2>

      <p>ISO/IEC 42001 is the international standard for AI Management Systems. Published in 2023, it provides a structured framework for organisations to responsibly develop, deploy, and govern artificial intelligence. Think of it as ISO 27001 — but for AI rather than information security.</p>

      <p>It covers:</p>
      <ul>
        <li>Establishing an AI policy and governance structure</li>
        <li>Risk assessment specific to AI systems</li>
        <li>Bias detection and mitigation processes</li>
        <li>Transparency and accountability requirements</li>
        <li>Audit readiness and continual improvement</li>
      </ul>

      <h2>Why Should Your Organisation Care?</h2>

      <p>Three reasons — regulatory, reputational, and operational.</p>

      <p><strong>Regulatory:</strong> The EU AI Act is now in force. India's digital governance frameworks are evolving. Organisations that cannot demonstrate responsible AI use will face increasing scrutiny from regulators, auditors, and enterprise customers who have their own compliance requirements.</p>

      <p><strong>Reputational:</strong> AI errors are visible. A biased hiring algorithm. A customer service bot that gives wrong advice. A financial model that fails in edge cases. Without governance, these aren't just bugs — they become brand crises.</p>

      <p><strong>Operational:</strong> Ungoverned AI adoption leads to shadow AI — employees using unapproved tools with sensitive company data. A governance framework brings this into the open and creates safe, consistent practices.</p>

      <h2>What Does Implementation Look Like?</h2>

      <p>At Optivantage, we help organisations implement ISO 42001 in a practical, phased way:</p>

      <ol>
        <li><strong>AI Inventory:</strong> Map every AI tool currently in use across the organisation — approved and shadow.</li>
        <li><strong>Risk Classification:</strong> Assess each AI use case by risk level — what's the impact if it fails or produces a biased output?</li>
        <li><strong>Policy Development:</strong> Draft an AI Acceptable Use Policy, data handling guidelines, and escalation procedures.</li>
        <li><strong>Governance Structure:</strong> Establish who owns AI decisions — an AI committee, a designated AI Officer, or an existing risk function.</li>
        <li><strong>Audit & Review:</strong> Build the cadence for reviewing AI system performance, bias metrics, and policy compliance.</li>
      </ol>

      <h2>AI Governance Is a Competitive Advantage</h2>

      <p>The organisations that get ahead of governance now — before it becomes a regulatory requirement — will have a significant advantage. They'll be able to move faster, with more confidence, because they'll have the guardrails in place.</p>

      <p>If you're deploying AI and haven't yet thought about how to govern it, now is the right time to start. Not because the regulator is knocking — but because your employees, your customers, and your board deserve to know that AI is being used responsibly in your organisation.</p>

      <p>I'm a certified ISO/IEC 42001 Lead Implementer. If you'd like to discuss what AI governance looks like for your organisation, I'm happy to have that conversation.</p>
    `
  }
];

// Helper: get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

// Helper: get posts by category
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter(p => p.category === category);
}
