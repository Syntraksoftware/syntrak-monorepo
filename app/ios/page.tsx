import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastIOSPage from "@/components/raycast/RaycastIOSPage";

export const metadata: Metadata = {
  title: "Raycast for iOS",
  description:
    "Power of Raycast, now on iOS. AI, Notes, Snippets and Quicklinks always with you.",
};

export default function IOSPage() {
  return (
    <RaycastPageShell>
      <RaycastIOSPage />
    </RaycastPageShell>
  );
}
