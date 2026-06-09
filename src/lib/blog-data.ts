export type BlogCategory =
  | "AI Training & Advisory"
  | "IT Infrastructure"
  | "IT Equipment & Rentals"
  | "AI Automation & Agentic AI"
  | "General";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO format: "2026-04-17"
  readTime: string; // e.g. "5 min read"
  author: string;
  content: string; // HTML string
};

// ─── ADD NEW POSTS HERE ───────────────────────────────────────────────────────
// To add a post: copy the object structure below, fill in the fields,
// and add it to the front of this array (newest first).

export const blogPosts: BlogPost[] = [
  {
    slug: "why-ai-training-india-fails-skills-gap",
    title: "Why AI Training in India Fails to Close the Skills Gap",
    excerpt:
      "India doubled its AI training output last year. The skills gap widened anyway. The problem is not the volume of training — it is what the training is designed to do.",
    category: "AI Training & Advisory",
    date: "2026-05-13",
    readTime: "6 min read",
    author: "Optivantage Team",
    content: `
      <p>India doubled its AI training output last year. The skills gap widened anyway. That is not a contradiction — it is what happens when you mistake volume for design.</p>

      <p>Most of what passes for AI training right now is awareness training. One-day workshops covering what large language models are, how generative AI works, which tools exist. Participants leave with a certificate and a vague sense that something useful just happened. Three months later, nothing has changed in how they actually work.</p>

      <h2>Volume is not the same as capability</h2>

      <p>I have trained professionals at Kotak Mahindra Bank, BIAL (Bengaluru International Airport), and Hexaware. The people who genuinely change how they work are not the ones with the most certificates. They are the ones who practised on real tasks — their actual job, their actual documents, their actual emails — not demo datasets curated for a workshop.</p>

      <p>Most AI training in India is still teaching people how AI works. What enterprises need is training in how to work with AI. The distinction sounds small. The outcome difference is not.</p>

      <h2>The wrong people are being trained</h2>

      <p>The pattern repeats across every sector. Organisations send junior staff to AI workshops because senior people are too busy. But AI adoption stalls when the people making procurement decisions and evaluating pilots cannot evaluate what they are looking at. I have watched this happen across BFSI, aviation, and IT services.</p>

      <p>Junior staff get trained. Managers stay uninformed. The AI tool gets licensed, deployed, and quietly ignored — because the people who could drive usage from the top have no vocabulary for it. By the time leadership realises adoption is flat, the team has already decided the tool is not useful.</p>

      <h2>Training without a use case is theatre</h2>

      <p>The question I ask every L&amp;D head before we start working together: what specific task do you want your people doing differently in 30 days? If they cannot answer that, I already know the training will not stick.</p>

      <p>Use-case-first design changes retention. Role-specific prompting beats general AI awareness every time. And the measurable outcome has to be defined before training begins — not written into the evaluation sheet after it ends.</p>

      <h2>What actually closes the gap</h2>

      <p>Short, repeated sessions beat one-day boot camps. Cohort-based learning beats self-paced video. Post-training check-ins that ask whether people are actually using the tools — not just whether they enjoyed the session — are what turn attendance into habit.</p>

      <p>That last part is where most programmes quietly give up. Training delivered, invoice raised, feedback form filled. Nobody checks whether anything changed six weeks later.</p>

      <p>If you are planning an AI training rollout this year, get one thing right before anything else: define what good looks like at the desk, in a real week, six weeks from now. Not in the classroom. Not on a certification exam. At the desk, on a Tuesday afternoon. If you can answer that clearly, the rest of the programme design becomes much easier. <a href="/services/ai-training-advisory">Here is how we approach it at Optivantage</a> — or <a href="/contact">book a 30-minute call</a> and we can work through it together.</p>
    `,
  },
  {
    slug: "copilot-licence-unused-why",
    title: "Your Copilot Licence Is Collecting Dust. Here's Why.",
    excerpt:
      "Microsoft Copilot licences are being purchased by enterprises across India at pace. Most of them are not being used three months in. The reason is not the tool — it is how the rollout was done.",
    category: "AI Training & Advisory",
    date: "2026-04-29",
    readTime: "5 min read",
    author: "Optivantage Team",
    content: `
      <p>Accenture just deployed Microsoft Copilot to all 743,000 of its employees. That is a large number. It tells you nothing about whether those employees are actually using it.</p>

      <p>I have seen this at scale closer to home. Copilot licences sitting unused at BFSI and aviation clients three months after purchase. The tool works. The rollout did not. Procurement happened. Training did not.</p>

      <h2>A licence gives access. It does not give capability.</h2>

      <p>Deploying a licence takes a procurement sign-off and an IT ticket. What it does not do is change how people write emails, run meetings, or process documents. The tool is in their hands. The habit is not. Accenture's 743,000-seat deployment is a supply decision, not a demand decision.</p>

      <p>Large-scale rollouts are not inherently wrong. But if you do not build the capability alongside the access, you end up with expensive shelf-ware and a team that has already decided the tool is not useful — before anyone showed them how to use it properly.</p>

      <h2>What employees actually ask first</h2>

      <p>When I run Copilot sessions at enterprises, the first question is never about features. It is always some version of: "Will this read my personal emails?" Privacy anxiety is real, especially among teams already aware of conversations around data handling and the RBI circular. Trust has to be built before productivity can follow.</p>

      <p>Most employees also conflate Copilot with public ChatGPT. They assume their prompts are going somewhere public. They are not — Copilot runs within your Microsoft 365 tenant. But if your rollout skips this explanation, people will limit their usage out of caution, and you will read that as low adoption.</p>

      <h2>The prompt is the real skill gap</h2>

      <p>At Kotak and at BIAL, the pattern was identical. An AI tool was live. Adoption metrics were flat. When I asked employees why they were not using it, the answer was almost always the same: "I am not sure what to type."</p>

      <p>Copilot does not fail because of the model. It fails because people type three words and expect a finished report. Prompting is a learnable skill, and most organisations are not teaching it. Vague prompt: "Summarise the meeting." Structured prompt using the CRAFT framework — role, request, context, format, tone — produces output your team can actually use. The difference is not subtle.</p>

      <h2>What a real rollout looks like</h2>

      <p>Start with 20 to 30 power users, not the whole organisation at once. Map one genuinely painful workflow per team before training begins. Measure time saved on real tasks, not satisfaction scores. Put a local champion in each team — someone who is not from IT, who can answer "how does this apply to my actual work?" without escalating to the helpdesk.</p>

      <p>In Indian GCC and enterprise environments there is an added layer. Many employees still use WhatsApp as their primary work communication tool. Copilot lives inside Outlook, Teams, and Word. The behaviour shift required is larger than in a Microsoft-native organisation. Your training has to account for that, not assume it away.</p>

      <p>If your organisation has Copilot licences and flat adoption, the training design is almost certainly the issue — not the tool. <a href="/training/copilot-365">Our 20-hour Copilot 365 programme</a> is built specifically for enterprise teams in India. Or <a href="/contact">book a 30-minute call</a> and we can look at your specific situation together.</p>
    `,
  },
  {
    slug: "craft-prompting-framework-copilot",
    title: "CRAFT: The Prompting Framework That Changes What Copilot Returns",
    excerpt:
      "Most people prompt Copilot the way they type into a search bar — a few words and a hope. The CRAFT framework is a five-step structure that consistently produces output worth using.",
    category: "AI Training & Advisory",
    date: "2026-05-08",
    readTime: "5 min read",
    author: "Optivantage Team",
    content: `
      <p>Most people prompt Copilot the way they type into a search bar — a few words and an expectation that something useful will come back. It rarely does. Not because Copilot is weak, but because a vague question gets a vague answer.</p>

      <p>The CRAFT framework is a five-step structure I teach in every Copilot training I run. It is not a workaround for a bad tool. It is a systematic way of giving any AI model — Copilot, ChatGPT, Gemini — enough context to produce output worth using.</p>

      <h2>C — Character</h2>

      <p>Before you tell Copilot what to do, tell it who to be. "Act as a senior HR business partner summarising a policy change for non-technical staff" gets a fundamentally different output than "summarise this policy." The character instruction sets the lens Copilot uses for the entire response.</p>

      <p>Without it, you get average-of-the-internet output. With it, you get something tailored to your actual audience. This is the step that produces the most visible improvement in workshops, and it costs you about ten seconds.</p>

      <h2>R — Request</h2>

      <p>Be specific about what you want. Not "write an email" but "write a 150-word email that opens with the key decision, gives two supporting reasons, and ends with a clear next step." Precision in the request cuts editing time significantly. Generic requests produce generic outputs that need heavy reworking.</p>

      <h2>A — Add Context</h2>

      <p>This is the step almost everyone skips. Copilot does not know your audience, your organisation's vocabulary, or the political sensitivity of what you are working on — unless you tell it. One extra sentence of context changes the output more than any other part of the prompt.</p>

      <p>"This is for a team in Pune with no prior AI exposure" will change the register, complexity, and assumptions in everything that follows. Context eliminates assumption. Assumption is why AI drafts often feel slightly off.</p>

      <h2>F — Format</h2>

      <p>Tell Copilot how to structure the output. Bullet points or prose? Under 150 words or a full page? Table or narrative? If you do not specify, you will spend more time reformatting than you saved generating. Format instructions take five seconds to write and routinely save twenty minutes of editing.</p>

      <h2>T — Tune</h2>

      <p>Set the tone. Formal but not stiff. Confident but not aggressive. Technical enough for the audience but no more. Tune is the instruction that stops Copilot from defaulting to generic corporate language when you need something that sounds like you actually wrote it.</p>

      <h2>What this looks like in practice</h2>

      <p>Without CRAFT: "Write a summary of last week's project update."</p>

      <p>With CRAFT: "Act as a project manager writing for a steering committee with no operational detail. Summarise the three key decisions from last week's project update, flag one open risk, and close with a recommended next step. Use bullet points, under 200 words, formal but plain language."</p>

      <p>Same raw material. Very different output. The second prompt takes about 45 seconds longer to write. It saves 20 minutes of editing and produces something you can send without rewriting it from scratch.</p>

      <p>The people who get the best results from Copilot are not the most technical people in the room. They are the ones who have learned to give clear instructions. CRAFT is a repeatable structure for exactly that.</p>

      <p>CRAFT is one of the core frameworks in our <a href="/training/copilot-365">Copilot 365 training programme</a>. If you want your team to get real value from the licences already in place, <a href="/contact">a 30-minute conversation</a> is a good place to start.</p>
    `,
  },
  {
    slug: "iso-42001-indian-enterprises-beyond-the-badge",
    title: "ISO 42001: What Indian Enterprises Are Missing Beyond the Badge",
    excerpt:
      "KPMG just got ISO 42001 certified. India's IT heads are fast-tracking their own governance programmes. Most of them could not answer basic questions about what the standard actually requires.",
    category: "AI Training & Advisory",
    date: "2026-04-27",
    readTime: "7 min read",
    author: "Optivantage Team",
    content: `
      <p>KPMG in India just received ISO 42001 certification. India's IT leaders are fast-tracking their own governance programmes. Most of them could not answer basic questions about what the standard actually requires — and I say that having sat across from enough of them to see the pattern.</p>

      <p>I am a certified ISO/IEC 42001 Lead Implementer. The moment I ask what an organisation's AI risk register covers, or how they have defined the boundary of their AI management system, the room tends to go quiet. The acronym is known. The substance is not.</p>

      <h2>What ISO 42001 actually is</h2>

      <p>ISO/IEC 42001 is the international standard for AI Management Systems, published in 2023. Think of it as ISO 27001 — but for AI rather than information security. It provides a structured framework for organisations to responsibly develop, deploy, and govern artificial intelligence.</p>

      <p>It is a management system standard. That means documented processes, assigned ownership, internal audits, and continual improvement cycles. It is not a one-day workshop, a vendor assessment, or a consultant's deliverable pack. The scope, the risk classification methodology, the human oversight procedures — these have to exist inside the organisation.</p>

      <h2>The shortcut most organisations are taking</h2>

      <p>Hire a consultant. Generate the documentation. Pass the audit. Frame the certificate. Six months later, nobody inside the organisation can explain what changed or what the AI management system actually covers.</p>

      <p>I have watched this pattern play out with data protection compliance after PDPB conversations started. Same approach, same result. The documentation exists. The internal capability does not. When the auditor or regulator asks a follow-up question that was not on the standard questionnaire, there is no one in the room who can answer it.</p>

      <h2>What the certificate does not tell you</h2>

      <p>It does not tell your employees what to do when an AI tool produces a biased output affecting a customer. It does not define who owns the decision when an AI recommendation conflicts with human judgement. It does not tell your procurement team what questions to ask a vendor about their model training data.</p>

      <p>These are governance problems, not documentation problems. No amount of ISO 42001 paperwork solves them unless the internal capability to think about AI risk has been built.</p>

      <h2>What actually works</h2>

      <p>Build the governance capability internally first. Your AI project leads need to understand what constitutes an AI system under the standard. Your risk team needs to know how to score AI-specific risks differently from conventional IT risks. Your leadership needs to be able to explain the scope of the AI management system in plain language — not just point at the certificate.</p>

      <p>Enterprise AI is moving from pilot to production. Production AI without governance is how you end up in a regulatory conversation you were not prepared for. The EU AI Act is in force. India's own digital governance frameworks are evolving. Organisations treating ISO 42001 as a badge rather than a management commitment will find themselves explaining that to regulators and enterprise clients sooner than they expect.</p>

      <p>If you are serious about ISO 42001 and not just the certificate, start with internal capability — not external paperwork. <a href="/iso-42001-training">Our ISO 42001 readiness programme</a> is built around this principle. Or <a href="/contact">book a call</a> and we can talk through where your organisation currently sits.</p>
    `,
  },
  {
    slug: "gcc-expansion-india-network-ai-readiness",
    title:
      "GCC Expansion in India: Why Your Network Matters More Than Your AI Licence",
    excerpt:
      "India added a record 31 million square feet of GCC space in 2025. A lot of that space is running AI workloads on infrastructure that was not designed for them. That gap is where AI deployments quietly fail.",
    category: "IT Infrastructure",
    date: "2026-05-08",
    readTime: "5 min read",
    author: "Optivantage Team",
    content: `
      <p>India added a record 31 million square feet of GCC space in 2025. That is a lot of new floors, new teams, and new AI ambitions. It is also a lot of legacy network infrastructure quietly holding everything together.</p>

      <p>An IT head at one of my clients said it plainly last month: "Our GCC just signed a five-year lease. We are still running the same network we set up in 2019." He was not embarrassed. He was frustrated. The budget went to headcount, fit-outs, and AI licences. The infrastructure refresh got pushed again.</p>

      <h2>This is more common than people admit</h2>

      <p>GCC conversations tend to focus on the visible investments — floor space, talent, tool stack. Infrastructure gets treated as a utility: it should just work. The problem is that what works fine for email and video calls does not always hold up under AI workloads.</p>

      <p>Copilot running across 300 seats, Teams calls, AI inference traffic, and real-time document processing hitting the network simultaneously is a different load profile than what most 2018-vintage networks were designed for. The symptoms look like a software problem. People assume Copilot is slow or unreliable. The AI vendor gets blamed. The L&amp;D team gets blamed. Nobody looks at the stack.</p>

      <h2>What I find when I look at the infrastructure</h2>

      <p>Fortinet on outdated firmware. Cisco switches with default QoS configurations never tuned for AI traffic. Structured cabling that was fine for its original use case but buckles when video, voice, and AI inference run simultaneously across the same links. Access points positioned for coverage, not capacity — which matters very differently when 50 people are on AI-assisted workflows at the same time.</p>

      <p>None of this is unusual. Most of it was installed when the GCC was smaller, or when AI workloads simply were not in scope. The gap between what was designed and what is now running through it has grown quietly, and usually goes unexamined until adoption metrics disappoint.</p>

      <h2>The sequence problem</h2>

      <p>AI tool procurement happens fast. Infrastructure review happens slowly, if at all. The sequence should be the other way around — or at minimum, run in parallel. A network readiness assessment for a mid-size GCC takes less than a week. Retrofitting a poorly planned deployment after adoption stalls takes months, plus the cost of the morale hit when the team has already written off the tool as unreliable.</p>

      <p>The GCC buildout in India is real and accelerating. Bengaluru, Hyderabad, Pune, Chennai — floor space is going up, headcount is going up, AI ambitions are going up. The infrastructure underneath needs to keep pace, or those AI investments will underperform in ways that are genuinely difficult to diagnose from the surface.</p>

      <p>If your GCC is expanding and you have not reviewed your network for AI readiness, that conversation is worth having before the AI rollout — not after the complaints start. <a href="/services/it-infrastructure">We design and deliver network infrastructure for GCC environments</a> across India. Or <a href="/contact">book a 30-minute call</a> to talk through your specific setup.</p>
    `,
  },
  {
    slug: "why-ai-governance-matters-iso-42001",
    title:
      "Why AI Governance Is the Missing Piece in Your Enterprise AI Strategy",
    excerpt:
      "Most organisations are rushing to adopt AI. Very few have thought about how to govern it. ISO/IEC 42001 exists for exactly this reason — and most CXOs have never heard of it.",
    category: "AI Training & Advisory",
    date: "2026-04-17",
    readTime: "6 min read",
    author: "Optivantage Team",
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
    `,
  },
];

// Helper: get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Helper: get posts by category
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
