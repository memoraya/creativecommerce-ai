// Shared editorial primitives for the "IA sin Computadora" microsite.
// This is the ACTUAL Creative Commerce brand palette (see app/globals.css
// --bg / --fg / --accent / --border), just inverted: the homepage runs
// dark-on-light-fg, this page runs the same two neutrals the other way
// around — near-black ink on the brand's warm off-white, with the same
// terracotta accent — so it reads as one identity, not a separate theme.
//
// ink   #0B0A09  — same hex as the homepage's --bg, used here as text
// paper #F2F0EB  — same hex as the homepage's --fg, used here as background
// accent #D97757 — homepage's --accent, unchanged
// muted  #57514A — a darkened tint of the same warm-gray hue as the
//                  homepage's --muted (#9a958c), needed for AA contrast
//                  on a light background instead of a dark one

export const eventDate = "2026-09-12";
export const eventStart = "2026-09-12T11:00:00-06:00";
export const eventEnd = "2026-09-12T13:00:00-06:00";

export const venue = {
  name: "Café Reynard",
  address: "Bajío 206, Roma Sur, CDMX",
  full: "Café Reynard, Bajío 206, Roma Sur, Ciudad de México",
};

export const kicker =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-[#D97757]";

export const sectionShell = "mx-auto max-w-2xl px-6 sm:px-8";

export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-[3px] bg-[#D97757] px-7 py-3.5 text-sm font-medium tracking-wide text-[#0B0A09] transition-colors hover:bg-[#C4633F]";

export const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-[3px] border border-[#0B0A09]/25 px-7 py-3.5 text-sm font-medium tracking-wide text-[#0B0A09] transition-colors hover:border-[#0B0A09]";

export const inlineLink =
  "text-[#0B0A09] underline decoration-[#D97757]/50 underline-offset-4 transition-colors hover:decoration-[#D97757]";

export const cardShell =
  "rounded-sm border border-[#0B0A09]/10 bg-white shadow-[0_1px_0_0_rgba(11,10,9,0.04)]";
