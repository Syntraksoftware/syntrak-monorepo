import { WindowsIcon } from "./icons";

export default function RaycastWindowsBetaBanner() {
  return (
    <div className="pricing-windows-banner-wrap">
      <div className="pricing-windows-banner">
        <WindowsIcon />
        <div>
          <p className="pricing-windows-banner-title">Windows Beta Features</p>
          <p className="pricing-windows-banner-text">
            Pro and Pro + Advanced AI subscribers have access to Pro AI models and
            unlimited Clipboard History in the Windows Beta version.
          </p>
        </div>
      </div>
    </div>
  );
}
