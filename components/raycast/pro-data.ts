export const proFaqs = [
  {
    question: "How do you handle my data?",
    answer:
      "We value privacy and never collect any sensitive information. None of your inputs are recorded or used to train models. All Raycast AI features are powered by different AI providers: OpenAI, Anthropic, Perplexity, Groq, Together AI, Mistral AI, Google (Gemini), xAI and Replicate. If Cloud Sync is enabled, all AI Chats are saved on our servers, encrypted at rest and in transit, so they can be accessed from any of your Macs.",
  },
  {
    question: "What's the difference between the Pro and Team plan?",
    answer:
      "The Pro plan is for individuals. It includes Raycast AI, Cloud Sync and more. The Team plan is for organizations. On top of all Pro features, teams can share Extensions, Snippets and Quicklinks privately.",
  },
  {
    question: "Can I use my own OpenAI API key?",
    answer:
      "Yes, you can BYOK (Bring Your Own Key) — we currently support custom keys for OpenAI, Anthropic and Google.",
  },
  {
    question: "Which model do you use for Raycast AI?",
    answer:
      "Raycast AI provides access to multiple LLMs from state-of-the-art providers, including OpenAI, Anthropic, Perplexity, and more. More advanced models are available as an add-on. Find out more on the Pricing page.",
  },
  {
    question: "Can I upgrade my Team plan to use Advanced AI?",
    answer:
      "Yes! A Team Manager can add the Advanced AI add-on by going to their account settings. Just keep in mind that this will activate the add-on for all the members of your team.",
  },
  {
    question: "Does Raycast have a Student Program?",
    answer:
      "Yes, Raycast offers a Pro plan 50% discount to verified students. Please note that the student discount only applies to the Raycast Pro plan, and not the Advanced AI add-on.",
  },
];

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
    title: "Don't get lost in translation.",
    subtitle: "Quickly translate text on the fly, check pronunciation or dictate your own words.",
    label: "Translator",
    image: "translator-graphic.6f2faef3.png",
    icon: "command-translator-icon-16.60865da6.png",
  },
  {
    id: "cloud-sync",
    title: "Stay in sync.",
    subtitle: "Cloud Sync ensures your workflow is the same across multiple Macs.",
    label: "Cloud Sync",
    image: "quick-ai-mobile.a1c4047f.png",
    icon: "command-cloud-sync-16.9f8dc93f.png",
  },
  {
    id: "clipboard",
    title: "Never forget.",
    subtitle: "With unlimited Clipboard History you can find that image you copied last year.",
    label: "Clipboard History",
    image: "quick-ai-mobile.a1c4047f.png",
    icon: "command-clipboard-history-16.41c42c43.png",
  },
  {
    id: "windows",
    title: "Keep organized.",
    subtitle: "Position and resize your windows with custom commands.",
    label: "Custom Window Management",
    image: "app-window-item0.6d89dad5.jpg",
    icon: "command-window-management-16.19cfb07d.png",
  },
  {
    id: "notes",
    title: "Unlimited notes.",
    subtitle: "Organize your thoughts and meeting notes without limits.",
    label: "Raycast Notes",
    image: "quick-ai-mobile.a1c4047f.png",
    icon: "command-cloud-sync-16.9f8dc93f.png",
  },
];

export const RAYCAST_PRO_MEDIA = "https://www.raycast.com/_next/static/media";
