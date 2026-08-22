import type { Metadata, Viewport } from "next";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: { absolute: "IA sin Computadora — Café Reynard, CDMX" },
  description:
    "Una conversación de dos horas para entender mejor cómo pensar, explorar y trabajar con inteligencia artificial. Sábado 12 de septiembre, Café Reynard, Roma Sur, CDMX. Cupo limitado a 20 personas.",
  openGraph: {
    title: "IA sin Computadora",
    description:
      "Para quien ya usa IA… pero siente que apenas empieza. Sábado 12 de septiembre · Café Reynard, Roma Sur, CDMX.",
    type: "website",
    url: "https://creativecommerce.ai/ia-sin-computadora",
  },
  twitter: {
    card: "summary",
    title: "IA sin Computadora",
    description:
      "Para quien ya usa IA… pero siente que apenas empieza. Sábado 12 de septiembre · Café Reynard, Roma Sur, CDMX.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F5EEDC",
};

export default function IaSinComputadoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${caveat.variable} min-h-screen bg-[#F5EEDC] font-sans text-[#1C1712] [background-image:radial-gradient(circle_at_1px_1px,rgba(28,23,18,0.05)_1px,transparent_0)] [background-size:22px_22px]`}
      style={{ colorScheme: "light" }}
    >
      {children}
    </div>
  );
}
