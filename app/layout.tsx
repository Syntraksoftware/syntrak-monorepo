import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syntrak - Personalized Ski Coaching via Smart Thermals",
  description: "Revolutionary ski instruction through proprietary smart thermal base layers with real-time AI coaching and 3D visualization",
  icons: {
    icon: "/syntrak-logo.png",
    apple: "/syntrak-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
