import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastEnterprisePage from "@/components/raycast/RaycastEnterprisePage";

export const metadata: Metadata = {
  description:
    "Enterprise-grade analytics, admin controls, and dedicated support for ski schools, resorts, and training programmes.",
};

export default function EnterprisePage() {
  return (
    <RaycastPageShell>
      <RaycastEnterprisePage />
    </RaycastPageShell>
  );
}
