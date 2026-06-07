import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastAIPage from "@/components/raycast/RaycastAIPage";

export const metadata: Metadata = {
  title: "AI Coaching on Mountains",
  description:
    "Syntrak combines 8+ embedded sensors with AI coaching — streaming personalised cues to your earbuds in real time while you ski.",
};

export default function AIPage() {
  return (
    <RaycastPageShell>
      <RaycastAIPage />
    </RaycastPageShell>
  );
}
