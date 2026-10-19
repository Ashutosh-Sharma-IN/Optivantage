// Current Microsoft Copilot capabilities shown on /microsoft-copilot.
// This file is the single place to update Copilot features. When you change it,
// re-check each status against Microsoft's own pages and update COPILOT_LAST_REVIEWED.
// Sources:
// - https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/
// - https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
// - https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing
// - https://learn.microsoft.com/en-us/viva/insights/copilot-analytics-introduction

export type CapabilityStatus = "Available" | "Early access" | "Rolling out";

export interface CopilotCapability {
  name: string;
  summary: string;
  status: CapabilityStatus;
  licence?: string;
}

export const COPILOT_LAST_REVIEWED = "October 2026";

export const copilotCapabilities: CopilotCapability[] = [
  {
    name: "Copilot Chat",
    summary:
      "Web-grounded AI chat for everyone with an eligible Microsoft 365 subscription. Chat over your work data needs the paid licence.",
    status: "Available",
    licence: "Included with eligible Microsoft 365 plans",
  },
  {
    name: "Microsoft 365 Copilot",
    summary:
      "Copilot inside Word, Excel, PowerPoint, Outlook and Teams, grounded in your emails, files and meetings.",
    status: "Available",
    licence: "Paid add-on licence",
  },
  {
    name: "Copilot Cowork",
    summary:
      "Hand Copilot a multi-step task. It works across your apps and comes back with a finished result for you to review.",
    status: "Available",
    licence: "Usage-based billing",
  },
  {
    name: "Researcher and Analyst agents",
    summary:
      "Researcher runs multi-source research with citations. Analyst cleans, analyses and charts data in Excel.",
    status: "Available",
    licence: "Paid licence",
  },
  {
    name: "Notebooks",
    summary:
      "Gather files, emails and meeting notes in one place and ask questions across all of them.",
    status: "Available",
  },
  {
    name: "Pages",
    summary:
      "Shared, AI-assisted working documents a team can build on together.",
    status: "Available",
  },
  {
    name: "Agent Builder and Copilot Studio",
    summary:
      "Build agents for your own processes. Agent Builder needs no code; Copilot Studio is for agents your IT team manages.",
    status: "Available",
  },
  {
    name: "New Copilot Home, Code and Autopilot",
    summary:
      "A new Copilot layout, building small apps from a plain-language description, and an always-on personal agent.",
    status: "Early access",
    licence: "Microsoft Frontier programme",
  },
  {
    name: "Usage-based billing and Agent 365",
    summary:
      "Agentic work such as Cowork is metered. Admins set spending policies and approvals in Agent 365.",
    status: "Rolling out",
  },
];
