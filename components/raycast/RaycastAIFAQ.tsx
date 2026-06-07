"use client";

import { useState } from "react";
import { aiFaqs } from "./ai-data";

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className={`h-4 w-4 shrink-0 text-[#9c9c9d] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.25 5.75 8 10.25l-4.25-4.5"
      />
    </svg>
  );
}

export default function RaycastAIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="ai-faq-section">
      <div className="ai-section-inner">
        <div className="ai-section-title ai-section-title-center">
          <h2>FAQs</h2>
          <p>You&apos;ve got questions. We&apos;ve got answers</p>
        </div>
        <div className="pricing-faq-list">
          {aiFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="pricing-faq-item">
                <button
                  type="button"
                  className="pricing-faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon open={isOpen} />
                </button>
                {isOpen && <div className="pricing-faq-answer">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
