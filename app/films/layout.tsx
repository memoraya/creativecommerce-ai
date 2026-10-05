import type { Metadata, Viewport } from "next";

const title = "Films — AI-Generated Cinematic Content";
const description =
  "CreativeCommerce creates high-quality, AI-generated cinematic content for brands, entrepreneurs, and content creators.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://creativecommerce.ai/films",
    siteName: "Creative Commerce",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F5F1",
};

export default function FilmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-[#F6F5F1] font-sans text-[#141414]"
      style={{ colorScheme: "light" }}
    >
      {children}
    </div>
  );
}
