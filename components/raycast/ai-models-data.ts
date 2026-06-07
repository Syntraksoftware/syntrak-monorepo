export type AIModel = {
  name: string;
  speed: number;
  intelligence: number;
  context: string;
  advanced?: boolean;
};

export const aiModelProviders = [
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

export type AIModelProvider = (typeof aiModelProviders)[number]["id"];

export const aiModelsByProvider: Record<AIModelProvider, AIModel[]> = {
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
