import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastIOSPage from "@/components/raycast/RaycastIOSPage";

export const metadata: Metadata = {
  title: "Syntrak App for iOS & Android",
  description:
    "Coaching, session review, and progress tracking — always with you on the mountain. Available on iOS 16+ and Android 12+.",
};

export default function IOSPage() {
  return (
    <RaycastPageShell>
      <RaycastIOSPage />
    </RaycastPageShell>
  );
}
