// Shared editorial primitives for the "/films" cinematic content page.
//
// Standalone art direction, intentionally distinct from the main site's
// dark theme (see app/globals.css): warm white canvas, near-black ink,
// acid green accent used sparingly. Same standalone-microsite pattern as
// /ia-sin-computadora — its own layout, its own palette, the main site's
// Header/Footer are skipped (see components/SiteChrome.tsx).
//
// ink    #141414  — near-black typography
// paper  #F6F5F1  — warm white background
// accent #D7FF3F  — acid green; reserve for small, high-contrast touches
//                    (hover/focus states on dark video frames, tiny
//                    decorative dividers) — it reads poorly as text on the
//                    warm white background, so it never carries copy here.

export const ink = "#141414";
export const paper = "#F6F5F1";
export const accent = "#D7FF3F";

export const kicker =
  "font-mono text-[11px] uppercase tracking-[0.2em] text-[#141414]/55";

export const sectionShell = "mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12";

export const textLink =
  "group inline-flex items-center gap-1.5 text-sm font-medium text-[#141414] transition-colors hover:text-[#141414]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414]";

// Note: the accent is intentionally NOT used here. At equal lightness,
// #D7FF3F text/glyphs on #F6F5F1 sit at ~1.05:1 contrast — effectively
// invisible. Motion carries the hover affordance instead.
export const linkArrow =
  "inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";
