import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastWindowsBetaBanner from "@/components/raycast/RaycastWindowsBetaBanner";
import RaycastPricingCards from "@/components/raycast/RaycastPricingCards";
import RaycastEnterpriseCard from "@/components/raycast/RaycastEnterpriseCard";
import RaycastPricingFAQ from "@/components/raycast/RaycastPricingFAQ";
import RaycastPricingTable from "@/components/raycast/RaycastPricingTable";

export const metadata: Metadata = {
  title: "Syntrak Pricing: Starter Free with Garment or Pro Coaching from $10/month",
  description:
    "Starter includes basic motion tracking and daily summaries with your Syntrak garment. Upgrade to Pro for real-time audio coaching, unlimited 3D playback, and advanced metrics.",
};

export default function PricingPage() {
  return (
    <RaycastPageShell>
      <div className="pricing-page">
        <div className="pricing-page-glow" aria-hidden="true" />
        <RaycastWindowsBetaBanner />
        <RaycastPricingCards />
        <RaycastEnterpriseCard />
        <RaycastPricingTable />
        <RaycastPricingFAQ />
      </div>
    </RaycastPageShell>
  );
}
