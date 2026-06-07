import { syntrakFaqs } from "./syntrak-faqs";

export { TEMPLATE_MEDIA as RAYCAST_ENTERPRISE_MEDIA } from "./template-media";

export const enterpriseAdminControls = [
  "SAML and SCIM",
  "Domain Capture",
  "Full Cloud Sync Control",
  "2FA Enforcement",
  "Data Export Controls",
  "IP Allow-List",
];

export const enterpriseAnalytics = [
  "Organisation-Wide Reporting",
  "Custom Integrations",
  "API Access",
  "Dedicated Support",
];

export const enterpriseCertifications = [
  "End-to-end encryption",
  "On-device processing",
  "GDPR compliant",
  "Data export controls",
  "2FA enforcement",
  "IP allow-list",
];

export const enterpriseCapabilities = [
  {
    title: "Coach Dashboard",
    description:
      "Monitor athlete progress, assign training plans, and review biomechanical data across your entire programme.",
    image: "widgets-bg.402d71e4.png",
  },
  {
    title: "Team Training Plans",
    description:
      "Share coaching programmes across coaches and athletes, with unlimited shared plans on Team Pro.",
    image: "shortcuts.2b54ef2f.png",
  },
  {
    title: "Custom Integrations",
    description:
      "Connect Syntrak with your existing resort systems, booking platforms, and athlete management tools.",
    image: "controls.630df93f.png",
  },
  {
    title: "Onboarding & Training",
    description:
      "Onboarding sessions for your coaching staff, custom training programmes, and best-practice workshops.",
    image: "activity-sheet.f2f38f7d.png",
  },
];

export const enterpriseFaqs = syntrakFaqs;
