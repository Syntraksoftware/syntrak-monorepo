import type { Metadata } from "next";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastSignInForm from "@/components/raycast/RaycastSignInForm";

export const metadata: Metadata = {
  title: "Raycast Login: Access Your Tools and Extensions",
  description: "Log in to Raycast with a magic link sent to your email.",
};

export default function SignInPage() {
  return (
    <RaycastPageShell>
      <section className="sign-in-page">
        <RaycastSignInForm />
      </section>
    </RaycastPageShell>
  );
}
