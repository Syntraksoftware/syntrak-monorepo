import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastBlogPage from "@/components/raycast/RaycastBlogPage";

export const metadata: Metadata = {
  title: "Raycast - Blog",
  description: "News, product updates, and stories from the Raycast team.",
};

export default function BlogPage() {
  return (
    <RaycastPageShell>
      <RaycastBlogPage />
    </RaycastPageShell>
  );
}
