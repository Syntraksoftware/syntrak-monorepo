import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastAIPage from "@/components/raycast/RaycastAIPage";

export const metadata: Metadata = {
  title: "AI that works with your OS - Raycast AI",
  description:
    "Raycast AI combines leading models with powerful extensions — right on your OS.",
};

export default function AIPage() {
  return (
    <RaycastPageShell>
      <RaycastAIPage />
    </RaycastPageShell>
  );
}
