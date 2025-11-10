"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why real-time coaching vs. traditional instruction?",
      answer:
        "Real-time AI coaching means you get feedback and corrections as you ski, not after. This helps you improve faster, develop better technique, and build muscle memory more effectively.",
    },
    {
      question: "Who is Syntrak for?",
      answer:
        "Syntrak is perfect for skiers of all levels - from beginners learning the basics to advanced skiers refining their technique. Whether you're training for competition or just want to improve your skills, Syntrak provides personalized coaching.",
    },
    {
      question: "Is Syntrak free?",
      answer:
        "We offer a free tier with basic features. For advanced features like unlimited sessions, detailed analytics, and priority support, check out our pricing plans.",
    },
    {
      question: "How does the smart thermal technology work?",
      answer:
        "Syntrak uses proprietary sensors integrated into your base layer that track your movements, balance, and technique. The data is processed in real-time to provide personalized coaching feedback through our app.",
    },
    {
      question: "What ski disciplines are supported?",
      answer:
        "We support alpine skiing, freestyle, racing, and more. Syntrak adapts to your skiing style and provides discipline-specific coaching and insights.",
    },
    {
      question: "Can I talk to customer support?",
      answer:
        "Yes! We offer email support for all users and priority support for enterprise customers. You can reach us at support@syntrak.com or through our help center.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-white">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-[#a1a1aa] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#a1a1aa] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

