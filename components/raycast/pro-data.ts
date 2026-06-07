export type ProModel = {
  name: string;
  speed: number;
  intelligence: number;
  context: string;
  advanced?: boolean;
};

export const proModelProviders = [
  { id: "openai", label: "OpenAI" },
  { id: "mistral", label: "Mistral" },
  { id: "perplexity", label: "Perplexity" },
  { id: "meta", label: "Meta" },
  { id: "anthropic", label: "Anthropic" },
  { id: "google", label: "Google" },
  { id: "xai", label: "xAI" },
  { id: "moonshotai", label: "Moonshot AI" },
  { id: "qwen", label: "Qwen" },
  { id: "baseten", label: "Baseten" },
  { id: "minimax", label: "MiniMax" },
] as const;

export type ProModelProvider = (typeof proModelProviders)[number]["id"];

export const proModelsByProvider: Record<ProModelProvider, ProModel[]> = {
  openai: [
    { name: "GPT-5 mini", speed: 5, intelligence: 4, context: "400k" },
    { name: "GPT-4.1", speed: 4, intelligence: 5, context: "1M", advanced: true },
    { name: "GPT-4o", speed: 4, intelligence: 4, context: "127k", advanced: true },
    { name: "GPT-5", speed: 3, intelligence: 5, context: "400k", advanced: true },
    { name: "o3-mini", speed: 3, intelligence: 5, context: "200k" },
  ],
  mistral: [
    { name: "Mistral Nemo", speed: 5, intelligence: 3, context: "128k" },
    { name: "Mistral Large", speed: 3, intelligence: 5, context: "128k", advanced: true },
    { name: "Codestral", speed: 4, intelligence: 4, context: "256k" },
  ],
  perplexity: [
    { name: "Sonar", speed: 5, intelligence: 3, context: "127k" },
    { name: "Sonar Pro", speed: 4, intelligence: 4, context: "200k", advanced: true },
    { name: "Sonar Reasoning Pro", speed: 3, intelligence: 5, context: "127k", advanced: true },
  ],
  meta: [
    { name: "Llama 3.1 8B (Groq)", speed: 5, intelligence: 3, context: "128k" },
    { name: "Llama 3.3 70B (Groq)", speed: 4, intelligence: 4, context: "128k" },
    { name: "Llama 4 Scout (Groq)", speed: 4, intelligence: 4, context: "128k" },
  ],
  anthropic: [
    { name: "Claude Haiku 4.5", speed: 5, intelligence: 4, context: "200k" },
    { name: "Claude Sonnet 4.6", speed: 4, intelligence: 5, context: "200k", advanced: true },
    { name: "Claude Opus 4.8", speed: 3, intelligence: 5, context: "200k", advanced: true },
  ],
  google: [
    { name: "Gemini 2.5 Flash", speed: 5, intelligence: 4, context: "1M" },
    { name: "Gemini 2.5 Pro", speed: 3, intelligence: 5, context: "1M", advanced: true },
    { name: "Gemini 3.1 Pro", speed: 3, intelligence: 5, context: "1M", advanced: true },
  ],
  xai: [
    { name: "Grok-3 Mini Beta", speed: 5, intelligence: 3, context: "131k" },
    { name: "Grok-4.20", speed: 4, intelligence: 5, context: "256k", advanced: true },
  ],
  moonshotai: [{ name: "Kimi K2.5 (Baseten)", speed: 4, intelligence: 4, context: "256k", advanced: true }],
  qwen: [{ name: "Qwen3-32B (Groq)", speed: 4, intelligence: 4, context: "131k" }],
  baseten: [{ name: "Kimi K2.6 (Baseten)", speed: 4, intelligence: 5, context: "256k", advanced: true }],
  minimax: [{ name: "MiniMax M2.5 (Baseten)", speed: 4, intelligence: 4, context: "256k", advanced: true }],
};

export const proProductivityFeatures = [
  {
    id: "translator",
    title: "Hear it on every turn.",
    subtitle: "Real-time audio coaching streams personalised cues to your earbuds — under 10 ms from sensor to sound.",
    label: "Audio Coaching",
    image: "translator-graphic.6f2faef3.png",
    icon: "command-translator-icon-16.60865da6.png",
  },
  {
    id: "cloud-sync",
    title: "Stay in sync.",
    subtitle: "Cloud Sync keeps your sessions, progress, and coaching history consistent across every device.",
    label: "Cloud Sync",
    image: "quick-ai-mobile.a1c4047f.png",
    icon: "command-cloud-sync-16.9f8dc93f.png",
  },
  {
    id: "clipboard",
    title: "Never lose a run.",
    subtitle: "With unlimited 3D playback, revisit any session — from your best turns to the ones that need work.",
    label: "3D Playback",
    image: "quick-ai-mobile.a1c4047f.png",
    icon: "command-clipboard-history-16.41c42c43.png",
  },
  {
    id: "windows",
    title: "Track what matters.",
    subtitle: "Edge angle consistency, centre-of-mass tracking, and personalised drill recommendations.",
    label: "Advanced Metrics",
    image: "app-window-item0.6d89dad5.jpg",
    icon: "command-window-management-16.19cfb07d.png",
  },
  {
    id: "notes",
    title: "Train with purpose.",
    subtitle: "Progress tracking and session summaries help you see improvement run after run, season after season.",
    label: "Progress Tracking",
    image: "quick-ai-mobile.a1c4047f.png",
    icon: "command-cloud-sync-16.9f8dc93f.png",
  },
];

export { TEMPLATE_MEDIA as RAYCAST_PRO_MEDIA } from "./template-media";
