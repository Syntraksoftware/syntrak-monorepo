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
          <h2>One Interface.</h2>
          <p>Dozens of models.</p>
          <p className="pro-section-copy">
            Choose a <em>faster</em> model when speed matters and a smarter one for more complex
            tasks.
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
              <thead>
                <tr>
                  <th>model</th>
                  <th>speed</th>
                  <th>intelligence</th>
                  <th>context</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model) => (
                  <tr key={model.name}>
                    <td>
                      {model.name}
                      {model.advanced && "*"}
                    </td>
                    <td>
                      <Rating value={model.speed} />
                    </td>
                    <td>
                      <Rating value={model.intelligence} />
                    </td>
                    <td>{model.context}</td>
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
