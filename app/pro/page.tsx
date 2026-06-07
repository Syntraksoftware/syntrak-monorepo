import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastProPage from "@/components/raycast/RaycastProPage";

export const metadata: Metadata = {
  title: "Raycast Pro: AI, Cloud Sync & Custom Themes, Your Way",
  description:
    "Turn Pro to harness the power of AI, make Raycast your own with custom themes, keep your Macs in sync and more.",
};

export default function ProPage() {
  return (
    <RaycastPageShell>
      <RaycastProPage />
    </RaycastPageShell>
  );
}
