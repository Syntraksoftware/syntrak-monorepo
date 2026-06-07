import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./raycast.css";
import ScrollRestoration from "./ScrollRestoration";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syntrak AI Powered Motion Wearables",
  description:
    "World's first smart performance thermals with embedded motion capture and AI coaching for skiers and snowboarders",
  icons: {
    icon: [
      { url: "/logos/white_logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logos/white_logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logos/white_logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body className={`antialiased h-full ${inter.className}`}>
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
