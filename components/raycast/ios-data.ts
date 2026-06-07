import { syntrakFaqs } from "./syntrak-faqs";

export { TEMPLATE_MEDIA as RAYCAST_IOS_MEDIA } from "./template-media";

export const iosPresets = [
  "Carving Coach",
  "Mogul Technique",
  "Edge Angle",
  "Powder Form",
  "Parallel Turns",
  "Session Review",
  "Drill Plan",
  "Progress Tracker",
  "COM Balance",
  "Turn Analysis",
  "Form Score",
  "Audio Cues",
];

export const iosIntegrations = [
  {
    title: "Widgets",
    description:
      "See your latest form score and session summary on your Home Screen — or check in from your Lock Screen before hitting the slopes.",
    image: "widgets-bg.402d71e4.png",
  },
  {
    title: "Shortcuts",
    description:
      "Start a coaching session, review your last run, or check progress with a single tap — or build Syntrak into your morning routine.",
    image: "shortcuts.2b54ef2f.png",
  },
  {
    title: "Controls",
    description:
      "Add Syntrak to your Control Center or Lock Screen — start a session, check form score, or review today's summary instantly.",
    image: "controls.630df93f.png",
  },
  {
    title: "Action Button",
    description:
      "Start a coaching session or hear your latest form score with one press — your Action button, repurposed for the mountain.",
    image: "activity-sheet.f2f38f7d.png",
  },
];

export const iosFaqs = syntrakFaqs;
