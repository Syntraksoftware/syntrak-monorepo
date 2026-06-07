import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastWindowsBetaBanner from "@/components/raycast/RaycastWindowsBetaBanner";
import RaycastPricingCards from "@/components/raycast/RaycastPricingCards";
import RaycastEnterpriseCard from "@/components/raycast/RaycastEnterpriseCard";
import RaycastPricingFAQ from "@/components/raycast/RaycastPricingFAQ";
import RaycastPricingTable from "@/components/raycast/RaycastPricingTable";

export const metadata: Metadata = {
  title: "Raycast Pricing: Free Forever or Pro with AI for $8/month",
  description:
    "Raycast is free forever. Upgrade to Pro for AI, Cloud Sync, and custom themes. Choose flexible plans for individuals or teams.",
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
