// Shared editorial UI primitives — small, reused across pages so the
// homepage, About, and Perspectives all stay on the same typographic system.

export const cta =
  "group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent";

export const ctaMuted =
  "group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent";

export const filledButton =
  "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent/90";

export const sectionGrid =
  "mx-auto grid max-w-4xl gap-4 px-6 py-20 sm:grid-cols-[100px_1fr] sm:gap-x-12 sm:px-8 sm:py-28 lg:py-36";

export const inlineLink =
  "text-foreground underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent";

export function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform group-hover:translate-x-0.5"
    >
      →
    </span>
  );
}

export function Kicker({ n }: { n: string }) {
  return <div className="font-mono text-sm text-accent">{n}</div>;
}
