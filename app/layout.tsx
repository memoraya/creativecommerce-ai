import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    default: "CreativeCommerce.ai",
    template: "%s · CreativeCommerce.ai",
  },
  description:
    "Commerce is becoming a creative discipline. CreativeCommerce.ai is where Memo Raya writes about the convergence of commerce, content, data, and AI — and what it means for how organizations are built.",
  openGraph: {
    title: "CreativeCommerce.ai",
    description:
      "Commerce is becoming a creative discipline. Notes on the convergence of commerce, content, data, and AI.",
    url: "https://creativecommerce.ai",
    siteName: "CreativeCommerce.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreativeCommerce.ai",
    description:
      "Commerce is becoming a creative discipline. Notes on the convergence of commerce, content, data, and AI.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
