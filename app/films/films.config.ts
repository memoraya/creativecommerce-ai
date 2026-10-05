// ───────────────────────────────────────────────────────────────────────
// FILM GALLERY CONFIG — single source of truth for the /films page.
//
// Edit titles, descriptions, order, and asset paths here only; nothing
// else on the page needs to change.
//
// The gallery layout is fixed by POSITION in this array — keep exactly
// four entries, in this shape:
//   [0] full-width horizontal film (16:9)
//   [1] portrait film, left of the pair (9:16)
//   [2] portrait film, right of the pair (9:16)
//   [3] full-width horizontal film (16:9)
//
// src / poster are public/ paths (e.g. "/videos/films/01.mp4",
// "/images/films/01.jpg"). Leave them undefined until the real asset is
// ready — the gallery renders an intentional "coming soon" placeholder
// instead of a dead or misleading player.
// ───────────────────────────────────────────────────────────────────────

export type FilmAspectRatio = "16/9" | "9/16";

export type Film = {
  id: string;
  title: string;
  description: string;
  src?: string;
  poster?: string;
  aspectRatio: FilmAspectRatio;
};

export const films: Film[] = [
  {
    id: "01",
    title: "Golden Hour",
    description:
      "Five friends, one product, and the kind of light that makes everything look better.",
    src: "/videos/films/01-korean-beauty-female.mp4",
    poster: "/images/films/01-korean-beauty-female.jpg",
    aspectRatio: "16/9",
  },
  {
    id: "02",
    title: "Morning Ritual",
    description:
      "An overhead shot of the small pause before the day actually starts.",
    src: "/videos/films/02-mexican-coffee.mp4",
    // Source is ~31:54 (not exactly 9:16) — the player letterboxes it
    // slightly within this frame rather than cropping it.
    poster: "/images/films/02-mexican-coffee.jpg",
    aspectRatio: "9/16",
  },
  {
    id: "03",
    title: "Pre-Workout",
    description:
      "A product reveal built for a vertical feed and a short attention span.",
    src: "/videos/films/03-protein-ad.mp4",
    poster: "/images/films/03-protein-ad.jpg",
    aspectRatio: "9/16",
  },
  {
    id: "04",
    title: "Night Routine",
    description:
      "A single cleanser, a concrete bathroom, and a story told entirely through reflection.",
    src: "/videos/films/04-korean-beauty-men.mp4",
    poster: "/images/films/04-korean-beauty-men.jpg",
    aspectRatio: "16/9",
  },
];

// Small format label shown under each film. Derived from aspectRatio so
// the config above only needs the fields specified for this page.
export function formatLabel(aspectRatio: FilmAspectRatio): string {
  return aspectRatio === "16/9" ? "16:9 — Horizontal" : "9:16 — Vertical";
}
