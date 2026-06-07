export type PlanColumn = "free" | "pro" | "teamsFree" | "teamsPro" | "enterprise";

export type CellValue =
  | { type: "check" }
  | { type: "dash" }
  | { type: "text"; value: string; faded?: string }
  | { type: "dot" };

export type PricingRow = {
  label: string;
  sublabel?: string;
  values: Record<PlanColumn, CellValue>;
};

export const planColumns: { id: PlanColumn; label: string; badge?: "pro" | "teamsPro" }[] = [
  { id: "free", label: "Free" },
  { id: "pro", label: "Pro", badge: "pro" },
  { id: "teamsFree", label: "Teams Free" },
  { id: "teamsPro", label: "Teams Pro", badge: "teamsPro" },
  { id: "enterprise", label: "Enterprise" },
];

export const pricingFeatureRows: PricingRow[] = [
  {
    label: "Core features",
    sublabel: "Clipboard History, Quicklinks, Calculator, Snippets, Window Management + more",
    values: {
      free: { type: "check" },
      pro: { type: "check" },
      teamsFree: { type: "check" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Thousands of extensions",
    values: {
      free: { type: "check" },
      pro: { type: "check" },
      teamsFree: { type: "check" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Custom Extensions",
    values: {
      free: { type: "check" },
      pro: { type: "check" },
      teamsFree: { type: "check" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Developer Tooling",
    values: {
      free: { type: "check" },
      pro: { type: "check" },
      teamsFree: { type: "check" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Clipboard History Size",
    values: {
      free: { type: "text", value: "3 months" },
      pro: { type: "text", value: "Unlimited" },
      teamsFree: { type: "text", value: "3 months" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "Raycast AI",
    values: {
      free: { type: "text", value: "50 messages" },
      pro: { type: "check" },
      teamsFree: { type: "text", value: "50 messages" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Advanced AI Add-on",
    values: {
      free: { type: "dash" },
      pro: { type: "text", value: "+ $8", faded: "/ month" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "text", value: "+ $8", faded: "/ user / month" },
      enterprise: { type: "text", value: "Custom" },
    },
  },
  {
    label: "Cloud Sync",
    values: {
      free: { type: "dash" },
      pro: { type: "check" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Custom Themes",
    values: {
      free: { type: "dash" },
      pro: { type: "check" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Translator",
    values: {
      free: { type: "dash" },
      pro: { type: "check" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Raycast Notes",
    values: {
      free: { type: "text", value: "5 notes" },
      pro: { type: "text", value: "Unlimited" },
      teamsFree: { type: "text", value: "5 notes" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "Custom Window Management Commands",
    values: {
      free: { type: "dash" },
      pro: { type: "check" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Team Members",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "text", value: "Unlimited" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "Shared Commands",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "text", value: "Up to 5" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "Shared Quicklinks",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "text", value: "Up to 30" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "Shared Snippets",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "text", value: "Up to 30" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "AI Control Center, including:",
    sublabel: "Organization-Wide Toggle, Bring Your Own Keys, AI Provider Allow-List, Custom AI Provider",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "dash" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Organization Admin Controls, including:",
    sublabel: "SAML and SCIM, Domain Capture, Full Cloud Sync Control, 2FA Enforcement, Extensions Allow-List, IP Allow-List",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "dash" },
      enterprise: { type: "check" },
    },
  },
];

export const monthlyPricing: Record<PlanColumn, CellValue> = {
  free: { type: "text", value: "Free, Forever." },
  pro: { type: "text", value: "$10", faded: "/ month" },
  teamsFree: { type: "text", value: "$0", faded: "/ user / month" },
  teamsPro: { type: "text", value: "$15", faded: "/ user / month" },
  enterprise: { type: "dot" },
};

export const annualPricing: Record<PlanColumn, CellValue> = {
  free: { type: "text", value: "Free, Forever." },
  pro: { type: "text", value: "$8", faded: "/ month" },
  teamsFree: { type: "text", value: "$0", faded: "/ user / month" },
  teamsPro: { type: "text", value: "$12", faded: "/ user / month" },
  enterprise: { type: "text", value: "Custom" },
};

export const pricingCtas: Record<PlanColumn, { label: string; href: string; primary?: boolean }> = {
  free: { label: "Download", href: "/#download", primary: true },
  pro: { label: "Select Plan", href: "/#download", primary: true },
  teamsFree: { label: "Create Organization", href: "/#download", primary: true },
  teamsPro: { label: "Select Plan", href: "/#download", primary: true },
  enterprise: { label: "Select Plan", href: "/#download", primary: true },
};

export const pricingFaqs = [
  {
    question: "Why is Raycast free for personal use?",
    answer:
      "We think of Raycast as a productivity layer that everybody should use to get work done faster. To make it accessible, we don't charge for the individual plan. The plan covers all built-in extensions, such as Clipboard History, Calendar or Window Management and provides access to all public extensions built by our community.",
  },
  {
    question: "Is the Raycast Free and Team plans available for organizational use?",
    answer:
      "Yes, the Raycast Free and Team plans are available for both personal and organizational use, including in corporate environments. You are not required to upgrade to a paid tier to use the free features for your organization.",
  },
  {
    question: "Is it possible to get the Pro plan without AI?",
    answer:
      "No, we only offer Pro plans that include AI. However, you can choose to turn off AI completely in Settings, which will disable all AI features.",
  },
  {
    question: "What is free and paid in Raycast AI?",
    answer:
      "We provide a limited number of free messages to any Raycast user to give AI a try. These free messages can be used to access all the AI features we have to offer. To continue using Raycast AI, you can upgrade to a Pro plan. The Pro plan comes with an additional 14 day free trial to try all the additional features it offers. The Advanced AI models are only available as an add-on to the paid Pro plan and are not available during the trial.",
  },
  {
    question: "Is the free Team plan a trial?",
    answer:
      "No, the free plan for Teams doesn't expire, and isn't a trial. You can use this plan for as long as you want within your organization, however you are limited to just 30 shared Snippets, 30 shared Quicklinks, and 5 Commands across all of your Extensions.",
  },
  {
    question: "How many seats do I get in a Team plan?",
    answer:
      "There is no minimum or maximum amount of seats that your team can have. You add users to your plan when you need to add to your team, and pay per user, per month.",
  },
  {
    question: "Can I have personal Extensions and Team Extensions?",
    answer:
      "Yes, you can create personal Extensions that are personalized to you, and have team Extensions that can be shared around in your organization for everyone to use. Team Extensions will be available in the Store command, behind a filter for your Team.",
  },
  {
    question: "Can I be part of multiple organizations?",
    answer:
      "Yes, there is no limit to how many organizations you can be part of. It's important to remember to avoid using multiple email addresses for different organizations, as you need to log in to the app in order to access the shared Snippets, Quicklinks and Extensions.",
  },
  {
    question: "Does Raycast have a Student Program?",
    answer:
      "Yes, Raycast offers a Pro plan 50% discount to verified students. You can apply for it by completing the student form. Please note that the student discount only applies to the Raycast Pro plan, and not the Advanced AI add-on.",
  },
];
