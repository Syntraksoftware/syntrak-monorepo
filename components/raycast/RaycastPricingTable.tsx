import Link from "next/link";
import { AppleIcon } from "./icons";
import {
  annualPricing,
  monthlyPricing,
  planColumns,
  pricingCtas,
  pricingFeatureRows,
  type CellValue,
  type PlanColumn,
} from "./pricing-data";

function ProBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="#A2DFFD"
        fillRule="evenodd"
        d="M12.23 4.47 11.2 3.36a3.4 3.4 0 0 0-4.97 0L5.1 4.47a.07.07 0 0 1-.053.022l-1.34-.045a3.4 3.4 0 0 0-3.51 3.51l.045 1.339a.07.07 0 0 1-.022.053L.12 10.5a3.4 3.4 0 0 0 0 4.97l.98.915a.07.07 0 0 1 .022.053l-.045 1.339a3.4 3.4 0 0 0 3.51 3.51l1.339-.045a.07.07 0 0 1 .053.022l.915.98a3.4 3.4 0 0 0 4.97 0l.915-.98a.07.07 0 0 1 .053-.022l1.339.045a3.4 3.4 0 0 0 3.51-3.51l-.045-1.339a.07.07 0 0 1 .022-.053l.98-.915a3.4 3.4 0 0 0 0-4.97l-.98-.915a.07.07 0 0 1-.022-.053l.045-1.339a3.4 3.4 0 0 0-3.51-3.51l-1.339.045a.07.07 0 0 1-.053-.022Zm-4.67.158a1.74 1.74 0 0 1 2.54 0l.915.98c.16.17.38.26.61.26l1.339-.045a1.74 1.74 0 0 1 1.8 1.8l-.046 1.339c-.017.5.18.98.55 1.33l.98.915a1.74 1.74 0 0 1 0 2.54l-.98.915c-.37.35-.567.83-.55 1.33l.046 1.339a1.74 1.74 0 0 1-1.8 1.8l-1.339-.046c-.23 0-.45.09-.61.26l-.915.98a1.74 1.74 0 0 1-2.54 0l-.915-.98a1.33 1.33 0 0 0-.61-.26l-1.339.046a1.74 1.74 0 0 1-1.8-1.8l.046-1.339c.017-.5-.18-.98-.55-1.33l-.98-.915a1.74 1.74 0 0 1 0-2.54l.98-.915c.37-.35.567-.83.55-1.33l-.046-1.339a1.74 1.74 0 0 1 1.8-1.8l1.339.045c.23 0 .45-.09.61-.26l.915-.98Zm3.09 5.13a.84.84 0 0 1 1.23 1.13l-2.09 2.88a.84.84 0 0 1-1.39.34l-2.08-2.08a.84.84 0 1 1 1.19-1.19l1.18 1.18.97-1.33.01-.01Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TeamsProBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="#96B3FF"
        fillRule="evenodd"
        d="M12.23 4.47 11.2 3.36a3.4 3.4 0 0 0-4.97 0L5.1 4.47a.07.07 0 0 1-.053.022l-1.34-.045a3.4 3.4 0 0 0-3.51 3.51l.045 1.339a.07.07 0 0 1-.022.053L.12 10.5a3.4 3.4 0 0 0 0 4.97l.98.915a.07.07 0 0 1 .022.053l-.045 1.339a3.4 3.4 0 0 0 3.51 3.51l1.339-.045a.07.07 0 0 1 .053.022l.915.98a3.4 3.4 0 0 0 4.97 0l.915-.98a.07.07 0 0 1 .053-.022l1.339.045a3.4 3.4 0 0 0 3.51-3.51l-.045-1.339a.07.07 0 0 1 .022-.053l.98-.915a3.4 3.4 0 0 0 0-4.97l-.98-.915a.07.07 0 0 1-.022-.053l.045-1.339a3.4 3.4 0 0 0-3.51-3.51l-1.339.045a.07.07 0 0 1-.053-.022Zm-4.67.158a1.74 1.74 0 0 1 2.54 0l.915.98c.16.17.38.26.61.26l1.339-.045a1.74 1.74 0 0 1 1.8 1.8l-.046 1.339c-.017.5.18.98.55 1.33l.98.915a1.74 1.74 0 0 1 0 2.54l-.98.915c-.37.35-.567.83-.55 1.33l.046 1.339a1.74 1.74 0 0 1-1.8 1.8l-1.339-.046c-.23 0-.45.09-.61.26l-.915.98a1.74 1.74 0 0 1-2.54 0l-.915-.98a1.33 1.33 0 0 0-.61-.26l-1.339.046a1.74 1.74 0 0 1-1.8-1.8l.046-1.339c.017-.5-.18-.98-.55-1.33l-.98-.915a1.74 1.74 0 0 1 0-2.54l.98-.915c.37-.35.567-.83.55-1.33l-.046-1.339a1.74 1.74 0 0 1 1.8-1.8l1.339.045c.23 0 .45-.09.61-.26l.915-.98Zm3.09 5.13a.84.84 0 0 1 1.23 1.13l-2.09 2.88a.84.84 0 0 1-1.39.34l-2.08-2.08a.84.84 0 1 1 1.19-1.19l1.18 1.18.97-1.33.01-.01Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4 text-[#59d499]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 11.5 3.5 8.5l1.06-1.06L6.5 9.38l5.44-5.44 1.06 1.06z"
      />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4 text-[#6a6b6c]" aria-hidden="true">
      <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function PricingCell({ value }: { value: CellValue }) {
  if (value.type === "check") {
    return <CheckIcon />;
  }
  if (value.type === "dash") {
    return <span className="pricing-cell-dash" aria-hidden="true" />;
  }
  if (value.type === "dot") {
    return <DotIcon />;
  }
  return (
    <span className="pricing-cell-text">
      {value.value}
      {value.faded && <span className="pricing-cell-faded">{value.faded}</span>}
    </span>
  );
}

function PlanHeader({ label, badge }: { label: string; badge?: "pro" | "teamsPro" }) {
  return (
    <div className="pricing-plan-head">
      {badge === "pro" && (
        <span className="pricing-table-head-badge" aria-hidden="true">
          <ProBadge />
        </span>
      )}
      {badge === "teamsPro" && (
        <span className="pricing-table-head-badge" aria-hidden="true">
          <TeamsProBadge />
        </span>
      )}
      <span className="pricing-plan-head-label">{label}</span>
    </div>
  );
}

function FeatureLabel({ label, sublabel }: { label: string; sublabel?: string }) {
  return (
    <div className="pricing-feature-label">
      <span>{label}</span>
      {sublabel && <span className="pricing-feature-sublabel">{sublabel}</span>}
    </div>
  );
}

function PricingRowCells({ values }: { values: Record<PlanColumn, CellValue> }) {
  return (
    <>
      {planColumns.map((col) => (
        <div key={col.id} className="pricing-table-cell">
          <PricingCell value={values[col.id]} />
        </div>
      ))}
    </>
  );
}

export default function RaycastPricingTable() {
  return (
    <section className="pricing-table-section">
      <div className="pricing-table-scroll">
        <div className="pricing-table">
          <div className="pricing-table-row pricing-table-head-row">
            <div className="pricing-table-cell pricing-table-label-cell" />
            {planColumns.map((col) => (
              <div key={col.id} className="pricing-table-cell pricing-table-head-cell">
                <PlanHeader label={col.label} badge={col.badge} />
              </div>
            ))}
          </div>

          {pricingFeatureRows.map((row) => (
            <div key={row.label} className="pricing-table-row">
              <div className="pricing-table-cell pricing-table-label-cell">
                <FeatureLabel label={row.label} sublabel={row.sublabel} />
              </div>
              <PricingRowCells values={row.values} />
            </div>
          ))}

          <div className="pricing-table-row pricing-table-price-row">
            <div className="pricing-table-cell pricing-table-label-cell">
              <span className="pricing-feature-label">Monthly Subscription</span>
            </div>
            <PricingRowCells values={monthlyPricing} />
          </div>

          <div className="pricing-table-row pricing-table-price-row">
            <div className="pricing-table-cell pricing-table-label-cell">
              <span className="pricing-feature-label">
                Annual Subscription
                <span className="pricing-badge">-20%</span>
              </span>
            </div>
            <PricingRowCells values={annualPricing} />
          </div>

          <div className="pricing-table-row pricing-table-cta-row">
            <div className="pricing-table-cell pricing-table-label-cell" />
            {planColumns.map((col) => {
              const cta = pricingCtas[col.id];
              return (
                <div key={col.id} className="pricing-table-cell">
                  <Link href={cta.href} className="raycast-btn-light pricing-cta w-full">
                    {col.id === "free" && <AppleIcon />}
                    {cta.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
