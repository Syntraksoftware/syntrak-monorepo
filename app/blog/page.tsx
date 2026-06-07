import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastBlogPage from "@/components/raycast/RaycastBlogPage";

export const metadata: Metadata = {
  description: "News, product updates, and stories from the Syntrak team.",
};

export default function BlogPage() {
  return (
    <RaycastPageShell>
      <RaycastBlogPage />
    </RaycastPageShell>
  );
}
