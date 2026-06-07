"use client";

import { useState } from "react";
import {
  proModelProviders,
  proModelsByProvider,
  type ProModelProvider,
} from "./pro-data";

function Rating({ value, of = 5 }: { value: number; of?: number }) {
  return (
    <div className="pro-model-rating" aria-hidden="true">
      {Array.from({ length: of }, (_, i) => (
        <span key={i} className={i < value ? "pro-model-rating-active" : ""} />
      ))}
    </div>
  );
}

export default function RaycastProModels() {
  const [activeProvider, setActiveProvider] = useState<ProModelProvider>("openai");
  const models = proModelsByProvider[activeProvider];
  const hasAdvanced = models.some((model) => model.advanced);

  return (
    <section className="pro-models-section">
      <div className="pro-section-inner">
        <div className="pro-section-title pro-section-title-center">
          <h2>One garment.</h2>
          <p>8+ sensors.</p>
          <p className="pro-section-copy">
            Every sensor feeds into coaching models tuned for <em>alpine skiing biomechanics</em>, 
            from edge angles to centre-of-mass tracking.
          </p>
        </div>

        <div className="pro-models-panel">
          <div className="pro-models-tabs-wrap">
            <div className="pro-models-tabs" role="tablist" aria-label="AI providers">
              {proModelProviders.map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  role="tab"
                  aria-selected={activeProvider === provider.id}
                  className={`pro-models-tab ${activeProvider === provider.id ? "pro-models-tab-active" : ""}`}
                  onClick={() => setActiveProvider(provider.id)}
                >
                  {provider.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pro-models-table-wrap">
            <table className="pro-models-table">
              <colgroup>
                <col className="pro-models-col-name" />
                <col className="pro-models-col-metric" />
                <col className="pro-models-col-metric" />
                <col className="pro-models-col-context" />
              </colgroup>
              <thead>
                <tr>
                  <th className="pro-models-cell-name">model</th>
                  <th className="pro-models-cell-metric">speed</th>
                  <th className="pro-models-cell-metric">intelligence</th>
                  <th className="pro-models-cell-context">context</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model) => (
                  <tr key={model.name}>
                    <td className="pro-models-cell-name">
                      {model.name}
                      {model.advanced && "*"}
                    </td>
                    <td className="pro-models-cell-metric">
                      <Rating value={model.speed} />
                    </td>
                    <td className="pro-models-cell-metric">
                      <Rating value={model.intelligence} />
                    </td>
                    <td className="pro-models-cell-context">{model.context}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {hasAdvanced && (
            <p className="pro-models-footnote">*requires Advanced AI add-on</p>
          )}
        </div>
      </div>
    </section>
  );
}
