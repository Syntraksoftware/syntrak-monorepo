"use client";

import { useState } from "react";
import Link from "next/link";

export default function RaycastSignInForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="sign-in-card">
      <h1>Log in to Syntrak</h1>

      {submitted ? (
        <p className="sign-in-success">
          We&apos;ve sent a magic link to your email inbox. Click the link to log in.
        </p>
      ) : (
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input type="password" name="password" placeholder="Password (optional)" />
          <button type="submit" className="raycast-btn-light sign-in-submit">
            Continue with Email
          </button>
        </form>
      )}

      <div className="sign-in-divider">
        <span>or</span>
      </div>

      <p className="sign-in-footer-text">
        Don&apos;t have an account?{" "}
        <Link href="/users/sign_in" className="sign-in-link">
          Sign up
        </Link>
      </p>
    </div>
  );
}
