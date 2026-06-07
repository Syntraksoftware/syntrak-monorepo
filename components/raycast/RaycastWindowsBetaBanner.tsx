import { WindowsIcon } from "./icons";

export default function RaycastWindowsBetaBanner() {
  return (
    <div className="pricing-windows-banner-wrap">
      <div className="pricing-windows-banner">
        <WindowsIcon />
        <div>
          <p className="pricing-windows-banner-title">Founders Edition</p>
          <p className="pricing-windows-banner-text">
            Back the Founders Edition and get Syntrak Pro for life — no subscription
            required. Ships Q4 2026 with free international shipping to 42 countries.
          </p>
        </div>
      </div>
    </div>
  );
}
