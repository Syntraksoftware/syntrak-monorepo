"use client";

import { useState } from "react";
import { syntrakFaqs } from "@/components/raycast/syntrak-faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = syntrakFaqs;

  return (
    <section className="raycast-section">
      <div className="raycast-section-inner max-w-3xl">
        <div className="raycast-section-title text-center">
          <h2>Frequently asked questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="raycast-card overflow-hidden">
              <button
                type="button"
                className="raycast-faq-button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-medium text-[#f4f4f6]">{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-[#9c9c9d] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-[#9c9c9d]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
