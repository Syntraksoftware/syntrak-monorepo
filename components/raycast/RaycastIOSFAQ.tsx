"use client";

import { useId, useState } from "react";
import { iosFaqs } from "./ios-data";

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className={`ios-faq-arrow ${open ? "ios-faq-arrow-expanded" : ""}`}
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

export default function RaycastIOSFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className="ios-faq-section">
      <div className="ios-faq-container">
        <div className="ios-faq-wrapper" id="faqs">
          <div className="ios-faq-title">
            <h2>FAQs</h2>
            <p>You&apos;ve got questions. We&apos;ve got answers</p>
          </div>

          <div className="ios-faq-accordion">
            {iosFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const titleId = `${baseId}-faq-title-${index}`;
              const contentId = `${baseId}-faq-content-${index}`;

              return (
                <div key={faq.question} className="ios-faq-panel">
                  <h4 id={titleId} className="ios-faq-question">
                    <button
                      type="button"
                      className="ios-faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDownIcon open={isOpen} />
                    </button>
                  </h4>
                  <div
                    id={contentId}
                    className="ios-faq-answer"
                    role="region"
                    aria-labelledby={titleId}
                    aria-hidden={!isOpen}
                  >
                    <div>{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
