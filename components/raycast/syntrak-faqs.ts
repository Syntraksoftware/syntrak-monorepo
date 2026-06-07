export type SyntrakFaq = {
  question: string;
  answer: string;
  category?: string;
};

/** Template FAQ content for the marketing site. */
export const syntrakFaqs: SyntrakFaq[] = [
  {
    category: "Product",
    question: "What is Syntrak, exactly?",
    answer:
      "Syntrak is the world's first smart performance thermal — a base layer with 8+ embedded sensors that capture your biomechanics in real time and stream personalised coaching cues to your earbuds while you ski.",
  },
  {
    category: "Product",
    question: "Do I need a smartphone to use it?",
    answer:
      "Yes. The Syntrak app pairs via Bluetooth and processes the sensor stream. It runs on iOS 16+ and Android 12+, and works offline once you've started a session.",
  },
  {
    category: "Technology",
    question: "How accurate is the AI coaching?",
    answer:
      "Validated at 93.4% exercise-classification accuracy in the peer-reviewed SeamFit study. Latency from sensor to audio cue is under 10 ms — fast enough to feel like a coach speaking in real time.",
  },
  {
    category: "Technology",
    question: "How does it stay accurate after washing?",
    answer:
      "Our textile electrodes are independently rated at 97.7% reliability after 7+ wash cycles. Just toss it in with your tech-fabric load — no special handling needed.",
  },
  {
    category: "Technology",
    question: "Is my data private?",
    answer:
      "Always. All processing happens on-device by default. Optional cloud sync is encrypted end-to-end, and you own and can delete your data at any time.",
  },
  {
    category: "Pricing",
    question: "What's included in the free Starter tier?",
    answer:
      "Basic motion tracking, daily session summaries, and a single 3D playback per day. No subscription required — but you do need to own a Syntrak garment.",
  },
  {
    category: "Pricing",
    question: "Can I cancel my subscription any time?",
    answer:
      "Absolutely. Pro and Premium tiers are month-to-month with no contract. Founders Edition backers get Pro for life — no subscription required ever.",
  },
  {
    category: "Shipping",
    question: "When will Founders Edition ship?",
    answer:
      "Q4 2026, in time for the Northern Hemisphere winter season. Backers will receive tracking information two weeks before shipping.",
  },
  {
    category: "Shipping",
    question: "Do you ship internationally?",
    answer:
      "Yes — we ship to all countries including the EU, UK, US, Canada, Japan, Australia, and most of South America. Shipping is free for Founders Edition.",
  },
  {
    category: "Product",
    question: "Can I use it for sports other than skiing?",
    answer:
      "The current model is tuned specifically for alpine skiing biomechanics. Snowboard, cross-country skiing, backcountry skiing, and more models are on the roadmap for 2027.",
  },  
];
