import Link from "next/link";

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-[#6a6b6c]" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
      <path fill="currentColor" d="M6.5 8.5 7.5 9.5 10 7" />
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-[#6a6b6c]" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" d="M8 5.5v5M5.5 8h5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-[#f4f4f6]" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M8 1.5 3 3.5v4c0 2.8 2.1 5.4 5 6 2.9-.6 5-3.2 5-6v-4L8 1.5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M2.5 4.5h11v7h-11v-7Zm0 0 5.5 4 5.5-4"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 4l4 4-4 4" />
    </svg>
  );
}

const aiControlCenter = [
  "Organisation-Wide Reporting",
  "Custom Integrations",
  "API Access",
  "Dedicated Support",
];

const orgAdminControls = [
  "SAML and SCIM",
  "Domain Capture",
  "Full Cloud Sync Control",
  "2FA Enforcement",
  "Data Export Controls",
  "IP Allow-List",
];

export default function RaycastEnterpriseCard() {
  return (
    <section className="pricing-enterprise-section">
      <div className="pricing-enterprise-card">
        <div className="pricing-enterprise-left">
          <div className="pricing-enterprise-header">
            <h2>Syntrak for Enterprise</h2>
            <p>For ski resorts, academies, and training programmes</p>
          </div>

          <div className="pricing-enterprise-highlights">
            <div className="pricing-enterprise-highlight">
              <PlusCircleIcon />
              <span>Everything in Team Pro</span>
            </div>
            <div className="pricing-enterprise-highlight pricing-enterprise-highlight-white">
              <ShieldIcon />
              <span>End-to-end encrypted data</span>
              <ArrowRightIcon />
            </div>
          </div>

          <div className="pricing-enterprise-columns">
            <div>
              <h3>Enterprise Analytics:</h3>
              <ul>
                {aiControlCenter.map((item) => (
                  <li key={item}>
                    <CheckCircleIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Resort Admin Controls:</h3>
              <ul>
                {orgAdminControls.map((item) => (
                  <li key={item}>
                    <CheckCircleIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pricing-enterprise-divider" aria-hidden="true" />

        <div className="pricing-enterprise-right">
          <div className="pricing-enterprise-pricing">
            <p className="pricing-enterprise-price-label">Custom Pricing</p>
            <p className="pricing-enterprise-billing">Only billed annually</p>
          </div>
          <Link href="mailto:hello@syntrak.com" className="pricing-enterprise-cta">
            <MailIcon />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
