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
  { id: "free", label: "Starter" },
  { id: "pro", label: "Pro", badge: "pro" },
  { id: "teamsFree", label: "Team Starter" },
  { id: "teamsPro", label: "Team Pro", badge: "teamsPro" },
  { id: "enterprise", label: "Enterprise" },
];

export const pricingFeatureRows: PricingRow[] = [
  {
    label: "Core features",
    sublabel: "Motion tracking, session summaries, 3D playback, distance logging + more",
    values: {
      free: { type: "check" },
      pro: { type: "check" },
      teamsFree: { type: "check" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Real-Time Audio Coaching",
    values: {
      free: { type: "dash" },
      pro: { type: "check" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "3D Playback",
    values: {
      free: { type: "text", value: "1 per day" },
      pro: { type: "text", value: "Unlimited" },
      teamsFree: { type: "text", value: "1 per day" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "Advanced Metrics",
    sublabel: "Edge Angle Consistency, Centre of Mass Tracking, drill recommendations",
    values: {
      free: { type: "dash" },
      pro: { type: "check" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Progress Tracking",
    values: {
      free: { type: "text", value: "Basic" },
      pro: { type: "text", value: "Full history" },
      teamsFree: { type: "text", value: "Basic" },
      teamsPro: { type: "text", value: "Full history" },
      enterprise: { type: "text", value: "Full history" },
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
    label: "Offline Sessions",
    values: {
      free: { type: "check" },
      pro: { type: "check" },
      teamsFree: { type: "check" },
      teamsPro: { type: "check" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Data Retention",
    values: {
      free: { type: "text", value: "30 days" },
      pro: { type: "text", value: "Unlimited" },
      teamsFree: { type: "text", value: "30 days" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "Premium Coaching Models",
    values: {
      free: { type: "dash" },
      pro: { type: "text", value: "+ $8", faded: "/ month" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "text", value: "+ $8", faded: "/ user / month" },
      enterprise: { type: "text", value: "Custom" },
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
    label: "Shared Training Plans",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "text", value: "Up to 5" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "Coach Dashboard",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "text", value: "Basic" },
      teamsPro: { type: "text", value: "Full" },
      enterprise: { type: "text", value: "Full" },
    },
  },
  {
    label: "Athlete Progress Reports",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "text", value: "Up to 30" },
      teamsPro: { type: "text", value: "Unlimited" },
      enterprise: { type: "text", value: "Unlimited" },
    },
  },
  {
    label: "Resort Admin Controls, including:",
    sublabel: "SAML and SCIM, Domain Capture, Full Cloud Sync Control, 2FA Enforcement, Data Export, IP Allow-List",
    values: {
      free: { type: "dash" },
      pro: { type: "dash" },
      teamsFree: { type: "dash" },
      teamsPro: { type: "dash" },
      enterprise: { type: "check" },
    },
  },
  {
    label: "Enterprise Analytics, including:",
    sublabel: "Organisation-Wide Reporting, Custom Integrations, API Access, Dedicated Support",
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
  free: { type: "text", value: "Free with garment." },
  pro: { type: "text", value: "$12", faded: "/ month" },
  teamsFree: { type: "text", value: "$0", faded: "/ user / month" },
  teamsPro: { type: "text", value: "$18", faded: "/ user / month" },
  enterprise: { type: "dot" },
};

export const annualPricing: Record<PlanColumn, CellValue> = {
  free: { type: "text", value: "Free with garment." },
  pro: { type: "text", value: "$10", faded: "/ month" },
  teamsFree: { type: "text", value: "$0", faded: "/ user / month" },
  teamsPro: { type: "text", value: "$15", faded: "/ user / month" },
  enterprise: { type: "text", value: "Custom" },
};

export const pricingCtas: Record<PlanColumn, { label: string; href: string; primary?: boolean }> = {
  free: { label: "Get the App", href: "/#download", primary: true },
  pro: { label: "Select Plan", href: "/#download", primary: true },
  teamsFree: { label: "Create Team", href: "/#download", primary: true },
  teamsPro: { label: "Select Plan", href: "/#download", primary: true },
  enterprise: { label: "Contact Us", href: "/enterprise", primary: true },
};
