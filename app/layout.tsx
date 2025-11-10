import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syntrak - Personalized Ski Coaching",
  description: "Revolutionizing ski instruction through proprietary smart thermal base layers with real-time AI coaching and 3D visualization",
  icons: {
    icon: [
      { url: "/syntrak-logo.png", sizes: "192x192", type: "image/png" },
      { url: "/syntrak-logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/syntrak-logo.png", sizes: "180x180", type: "image/png" },
    ],
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
