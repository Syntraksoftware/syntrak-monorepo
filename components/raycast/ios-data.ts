import { syntrakFaqs } from "./syntrak-faqs";

export { TEMPLATE_MEDIA as RAYCAST_IOS_MEDIA } from "./template-media";

export const iosModelPresets = [
  "Syntrak AI",
  "Carving Coach",
  "Edge Angle",
  "Mogul Technique",
  "Session Review",
  "Drill Plan",
  "Form Score",
  "Progress Tracker",
  "Turn Analysis",
  "Audio Cues",
  "COM Balance",
  "Powder Form",
];

export const iosKeyboardSlides = [
  "keyboard-recents",
  "keyboard-ai",
  "keyboard-snippets",
  "keyboard-quicklinks",
  "keyboard-dictation",
];

export const iosIntegrations = [
  {
    title: "Widgets",
    description:
      "Bring your favorites to your Home Screen for even faster access. Or launch commands from your Lock Screen.",
    variant: "widgets" as const,
  },
  {
    title: "Shortcuts",
    description:
      "We've bundled a bunch of Shortcuts, allowing you to get started straight away, or integrate Syntrak features into more complex workflows.",
    variant: "default" as const,
  },
  {
    title: "Controls",
    description:
      "New for iOS 18, update your Control Center or Lock Screen with useful controls — start a session or open session review.",
    variant: "controls" as const,
  },
  {
    title: "Action Button",
    description:
      "Don't have a use for your Action button? Now you do — start coaching instantly or use any other Syntrak action.",
    variant: "action" as const,
  },
];

export const iosFaqs = syntrakFaqs;
