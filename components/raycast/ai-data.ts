export const RAYCAST_AI_MEDIA = "https://www.raycast.com/_next/static/media";

export const aiHeroExtensions = [
  "slack",
  "github-copilot",
  "jira",
  "arc",
  "whatsapp",
  "todoist",
  "linear",
  "notion",
  "spotify",
  "calendar",
  "messages",
  "finder",
  "weather",
  "raycast-notes",
  "focus",
  "homeassistant",
];

export const aiChatSidebar = {
  pinned: ["Project Assistant", "TypeScript Expert", "Cars Expert"],
  today: [
    {
      title: "San Francisco's Top Rated Restaurants",
      preview:
        "Based on recent reviews and ratings, here are San Francisco's top restaurants…",
    },
    {
      title: "Are ice baths beneficial for recovery?",
      preview:
        "Research shows mixed benefits of ice baths for recovery. While cold water immersion can reduce muscle soreness…",
    },
    {
      title: "Understanding LLMs",
      preview:
        "Large Language Models (LLMs) work by processing vast amounts of text data through neural networks…",
    },
  ],
};

export const aiChatHighlights = [
  {
    title: "The top models in one place",
    description: "See supported models",
    image: "presets.8531e451.png",
  },
  {
    title: "Fine-tuned chat presets",
    description:
      "Create customized chat presets tailored to your tasks with the large language model of choice.",
    link: "Explore Presets",
    image: "preset-explorer.0d35ff26.png",
  },
  {
    title: "Compare models",
    description:
      "Regenerate answers with another model mid-chat to always find the best response.",
    image: "compare.11d1d0f2.png",
  },
  {
    title: "Hassle-Free Attachments",
    description:
      "Chat with PDF documents, CSV files or anything you see on your screen. The Mac app integrates with your OS to easily bring in the right context at the right time.",
    image: "attachments.aece0b9d.png",
  },
];

export const aiQuickFeatures = [
  {
    title: "Instant access to AI",
    description:
      "Quick AI lives a single hotkey away — ready to quickly appear as a floating window above your other apps.",
    image: "hotkey.48941975.png",
  },
  {
    title: "Search the web",
    description: "Get up-to-date information with inline references by enabling web search.",
    image: "web-search.32ae1b19.png",
  },
  {
    title: "Presets",
    description: "Compare models and switch between presets without leaving your flow.",
    image: "presets.8531e451.png",
  },
];

export const aiExtensionRows = [
  [
    "Calendar block my day from 4pm",
    "Web get the raycast logo",
    "Finder move all pdfs on my desktop to the trash",
    "Weather in tokyo",
    "Raycast Notes add 'buy milk' to my grocery list",
    "Stable Diffusion make an image of a cat eating a pizza",
    "Raycast Focus session for 30 minutes blocking Slack",
  ],
  [
    "Linear what are my current high priority issues?",
    "Slack set my status to 'lunch' for 1h",
    "Apple Notes what's on my grocery list?",
    "Arc open wikipedia in space 'Work'",
    "Things what are my todos for today?",
    "Jira what are my issues?",
    "Zoom start an instant meeting",
  ],
];

export const aiCommands = [
  {
    title: "Fix Spelling and Grammar",
    description: "Clean up grammatical mistakes, spelling errors and typos.",
    model: "GPT-4o mini",
  },
  {
    title: "Explain Code Step by Step",
    description: "Break down how complex code works.",
    model: "Claude 3.5 Haiku",
  },
  {
    title: "Summarise webpage",
    description: "TL;DR? Quickly find out what an article or page is about.",
    model: "Claude 3.5 Haiku",
  },
  {
    title: "Change Tone to Professional",
    description: "Adjust your writing tone for professional communication.",
    model: "Claude 3.5 Haiku",
  },
];

export const aiPrivacyItems = [
  {
    title: "Local first",
    description:
      "All your data is stored locally on your computer. If you enable Cloud Sync, AI Chats are saved on our servers, encrypted at rest and in transit.",
  },
  {
    title: "No model training",
    description:
      "Our agreements with AI providers prohibit them from using any AI interactions to train their models.",
  },
  {
    title: "Local models",
    description: "For complete privacy — use a local model through our integration with Ollama",
  },
  {
    title: "Private AI Extensions",
    description: "Share custom AI Extensions privately within your team so everyone can stay productive.",
  },
];

export const aiFaqs = [
  {
    question: "What is Raycast AI?",
    answer:
      "Raycast AI provides access to multiple LLMs from state-of-the-art providers, including OpenAI, Anthropic, Perplexity, and more. AI where it's most useful — on your OS.",
  },
  {
    question: "What is free and paid in Raycast AI?",
    answer:
      "We provide a limited number of free messages to any Raycast user to give AI a try. To continue using Raycast AI, you can upgrade to a Pro plan with a 14 day free trial. Advanced AI models are only available as an add-on to the paid Pro plan.",
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
      "Yes! A Team Manager can add the Advanced AI add-on by going to their account settings. This will activate the add-on for all members of your team.",
  },
  {
    question: "Does Raycast have a Student Program?",
    answer:
      "Yes, Raycast offers a Pro plan 50% discount to verified students. The student discount only applies to the Raycast Pro plan, and not the Advanced AI add-on.",
  },
];
