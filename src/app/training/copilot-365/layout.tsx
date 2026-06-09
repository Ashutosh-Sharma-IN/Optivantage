import { Metadata } from "next";
import Script from "next/script";

const BASE_URL = "https://www.optivantage.in";
const PAGE_URL = `${BASE_URL}/training/copilot-365`;

export const metadata: Metadata = {
  title: "Microsoft Copilot 365 Training Course — 4 Weekends | Live Online",
  description:
    "Master Microsoft Copilot 365 in 4 weekends — 20 hours live training, 22 modules. Learn the CRAFT prompting framework, build role-specific playbooks, and earn a certificate. Certified Microsoft AI trainer. Small cohorts. India & online.",
  keywords: [
    "Microsoft Copilot 365 training",
    "Copilot 365 course India",
    "Copilot training online",
    "Microsoft Copilot training for professionals",
    "learn Microsoft Copilot",
    "Copilot 365 workshop",
    "Microsoft AI training India",
    "M365 Copilot training",
    "AI productivity training",
    "Copilot prompting course",
    "CRAFT prompting framework",
    "Microsoft Copilot certification",
    "AI training for working professionals",
    "Microsoft Copilot for business",
    "enterprise Copilot training",
    "Copilot in Word Excel PowerPoint Teams",
    "AI upskilling course India",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Master Microsoft Copilot 365 — In 4 Weekends | Optivantage",
    description:
      "Live, practitioner-led Copilot 365 course for working professionals. 20 hours · 22 modules · CRAFT framework · Role playbooks · Certificate. Certified Microsoft AI trainer.",
    url: PAGE_URL,
    type: "website",
    siteName: "Optivantage Technologies",
    images: [
      {
        url: `${BASE_URL}/logo.png`,
        width: 400,
        height: 120,
        alt: "Optivantage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Microsoft Copilot 365 — In 4 Weekends",
    description:
      "Live Copilot 365 training for working professionals. 20 hrs · 22 modules · Certificate. Certified Microsoft AI trainer.",
    images: [`${BASE_URL}/logo.png`],
  },
};

// ─── Course JSON-LD Schema ───────────────────────────────────────────────────
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${PAGE_URL}#course`,
  name: "Master Microsoft Copilot 365 — In 4 Weekends",
  description:
    "A practitioner-led live online course for working professionals who want to master Microsoft Copilot 365. 20 hours across 4 weekends covering the CRAFT prompting framework, Copilot in Word, Excel, PowerPoint, Teams, Outlook, Power Automate, Claude for Office, AI ethics, and role-specific playbooks.",
  url: PAGE_URL,
  image: `${BASE_URL}/logo.png`,
  provider: {
    "@id": `${BASE_URL}/#organization`,
    "@type": "Organization",
    name: "Optivantage Technologies Private Limited",
  },
  instructor: {
    "@type": "Organization",
    name: "Optivantage Technologies",
  },
  courseMode: ["online", "onsite"],
  educationalLevel: "Intermediate",
  teaches: [
    "Microsoft Copilot 365",
    "CRAFT prompting framework",
    "Copilot in Microsoft Word",
    "Copilot in Microsoft Excel",
    "Copilot in Microsoft PowerPoint",
    "Copilot in Microsoft Teams",
    "Copilot in Microsoft Outlook",
    "Copilot in OneNote and Loop",
    "Power Automate with Copilot",
    "Agentic AI workflows",
    "AI ethics and SANCTITY method",
    "Claude for Office",
    "Role-specific AI playbooks",
    "Prompt engineering",
  ],
  coursePrerequisites: "Microsoft 365 subscription with Copilot enabled",
  numberOfCredits: 20,
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "online",
      name: "Virtual Weekend Cohort",
      description:
        "Live online sessions across 4 weekends (Saturday & Sunday, 2.5 hrs each)",
      instructor: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "CourseInstance",
      courseMode: "onsite",
      name: "In-Person Enterprise Training",
      description:
        "Bespoke in-person training at your office. Weekday and weekend formats available.",
      instructor: { "@id": `${BASE_URL}/#organization` },
    },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
    seller: { "@id": `${BASE_URL}/#organization` },
  },
  keywords: [
    "Microsoft Copilot 365",
    "Copilot training",
    "AI productivity",
    "CRAFT framework",
    "prompt engineering",
    "M365 AI",
    "enterprise AI training",
  ],
};

// ─── FAQ JSON-LD Schema ───────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need any technical background for the Copilot 365 course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This course is built for working professionals — not developers or IT specialists. If you can use Word and Outlook, you are ready.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Microsoft Copilot licence to attend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — you will need Microsoft 365 Copilot enabled on your account to participate fully in the live labs. Check with your IT department before joining.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Microsoft Copilot 365 training live or pre-recorded?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All sessions are live and interactive. There are no pre-recorded videos. You attend on the weekends listed and participate in real time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the CRAFT Framework for Microsoft Copilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRAFT is Optivantage's 5-part prompting system for Microsoft Copilot 365: Character (the role Copilot should play), Request (the task), Add Context (background details), Format (output structure), and Tune (tone and length). It is the repeatable formula that makes every Copilot prompt work consistently.",
      },
    },
    {
      "@type": "Question",
      name: "Is enterprise or in-person Microsoft Copilot training available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer bespoke in-person and weekday Copilot 365 training programmes for corporate teams — tailored to your Microsoft 365 setup, team size, and schedule. Trainer travels to your location across India.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the Microsoft Copilot 365 course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The course is 20 hours total — 4 weekends, 2 days each, 2.5 hours per session. It covers 22 modules from Copilot basics to agentic workflows, ethics, and Claude for Office.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the Microsoft Copilot 365 trainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Optivantage founding team — certified Microsoft AI trainers, Google Cloud Digital Leaders, ISO/IEC 42001 Lead Implementers, with 1,000+ professionals trained across enterprises including BIAL, Kotak Mahindra Bank, Hexaware, Infogain, and MSME India.",
      },
    },
  ],
};

export default function Copilot365Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="schema-copilot-course"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-copilot-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
