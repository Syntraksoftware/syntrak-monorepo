import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastResearchPage from "@/components/raycast/RaycastResearchPage";

export const metadata: Metadata = {
  description:
    "Empirical research, raw analytics, and actionable proof.",
};

export default function ResearchPage() {
  return (
    <RaycastPageShell>
      <RaycastResearchPage />
    </RaycastPageShell>
  );
}
