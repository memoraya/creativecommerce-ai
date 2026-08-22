// Shared editorial primitives for the "IA sin Computadora" microsite.
// Deliberately separate from components/ui.tsx — this page uses its own
// warm paper / ink / oxblood palette instead of the main site's dark theme.

export const eventDate = "2026-09-12";
export const eventStart = "2026-09-12T11:00:00-06:00";
export const eventEnd = "2026-09-12T13:00:00-06:00";

export const venue = {
  name: "Café Reynard",
  address: "Bajío 206, Roma Sur, CDMX",
  full: "Café Reynard, Bajío 206, Roma Sur, Ciudad de México",
};

export const kicker =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A2C22]";

export const sectionShell = "mx-auto max-w-2xl px-6 sm:px-8";

export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-[3px] border border-[#1C1712] bg-[#1C1712] px-7 py-3.5 text-sm font-medium tracking-wide text-[#F5EEDC] transition-colors hover:border-[#8A2C22] hover:bg-[#8A2C22]";

export const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-[3px] border border-[#1C1712]/25 px-7 py-3.5 text-sm font-medium tracking-wide text-[#1C1712] transition-colors hover:border-[#1C1712]";

export const inlineLink =
  "text-[#1C1712] underline decoration-[#8A2C22]/40 underline-offset-4 transition-colors hover:decoration-[#8A2C22]";

export const cardShell =
  "rounded-sm border border-[#E3D6B8] bg-[#FBF6E9] shadow-[0_1px_0_0_rgba(28,23,18,0.04)]";
