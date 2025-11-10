import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import ScrollRestoration from "./ScrollRestoration";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-eb-garamond",
  display: "swap",
});

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
    <html lang="en" className={`scroll-smooth ${ebGaramond.variable}`}>
      <body className="antialiased">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
