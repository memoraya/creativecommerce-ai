import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creativecommerce.ai"),
  title: {
    default: "Creative Commerce | AI-Native Commerce, Cinematic Content & Education",
    template: "%s · Creative Commerce",
  },
  description:
    "Creative Commerce helps organizations become AI-native through enterprise commerce, cinematic content, and executive education.",
  openGraph: {
    title: "Creative Commerce | AI-Native Commerce, Cinematic Content & Education",
    description:
      "Creative Commerce helps organizations become AI-native through enterprise commerce, cinematic content, and executive education.",
    url: "https://creativecommerce.ai",
    siteName: "Creative Commerce",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Commerce | AI-Native Commerce, Cinematic Content & Education",
    description:
      "Creative Commerce helps organizations become AI-native through enterprise commerce, cinematic content, and executive education.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
