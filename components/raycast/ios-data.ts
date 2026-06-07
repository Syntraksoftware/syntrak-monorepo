import { syntrakFaqs } from "./syntrak-faqs";

export { TEMPLATE_MEDIA as RAYCAST_IOS_MEDIA } from "./template-media";

export const iosPresets = [
  "Raycast AI",
  "ChatGPT",
  "Mistral",
  "Perplexity",
  "LLama",
  "Claude",
  "DeepSeek",
  "Gemini",
  "Grok",
  "Moonshot AI",
  "Qwen",
  "Baseten",
  "MiniMax",
];

export const iosIntegrations = [
  {
    title: "Widgets",
    description:
      "Bring your favorites to your Home Screen for even faster access. Or launch commands from your Lock Screen.",
    image: "widgets-bg.402d71e4.png",
  },
  {
    title: "Shortcuts",
    description:
      "We've bundled a bunch of Shortcuts, allowing you to get started straight away, or integrate Raycast features into more complex workflows.",
    image: "shortcuts.2b54ef2f.png",
  },
  {
    title: "Controls",
    description:
      "New for iOS 18, update your Control Center or Lock Screen with useful controls — Ask AI or open Notes.",
    image: "controls.630df93f.png",
  },
  {
    title: "Action Button",
    description:
      "Don't have a use for your Action button? Now you do — talk to AI instantly or use any other Raycast action.",
    image: "activity-sheet.f2f38f7d.png",
  },
];

export const iosFaqs = syntrakFaqs;
