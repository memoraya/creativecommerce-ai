import { Bebas_Neue } from "next/font/google";

// Oversized condensed display face for /films headlines only. Deliberately
// NOT wired into the shared `font-display` Tailwind utility — that name is
// already mapped to Fraunces for the rest of the site (see
// app/globals.css's `@theme inline`), and this page runs its own,
// unrelated art direction. Apply `filmsDisplay.className` directly to
// headline elements instead.
export const filmsDisplay = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
