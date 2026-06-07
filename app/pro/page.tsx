import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastProPage from "@/components/raycast/RaycastProPage";

export const metadata: Metadata = {
  title: "Syntrak Pro: Real-Time Coaching, 3D Playback & Advanced Metrics",
  description:
    "Unlock real-time audio coaching, unlimited 3D playback, advanced biomechanical metrics, and full progress tracking with Syntrak Pro.",
};

export default function ProPage() {
  return (
    <RaycastPageShell>
      <RaycastProPage />
    </RaycastPageShell>
  );
}
