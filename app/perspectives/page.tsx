import Link from "next/link";
import type { Metadata } from "next";
import { Arrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "Essays, talks, and shorter notes on commerce, content, data, and AI — posted as the thinking develops, not on any kind of schedule.",
};

export default function PerspectivesPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Perspectives
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Essays, talks, and shorter notes on commerce, content, data, and AI —
        posted as the thinking develops, not on any kind of schedule.
      </p>

      <div className="mt-12 space-y-6">
        <Link
          href="/perspectives/why-creative-commerce"
          className="group block rounded-lg border border-border p-6 transition-colors hover:border-accent/50"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            Essay · Founding Perspective
          </span>
          <h2 className="mt-2 font-display text-2xl">
            Why Creative Commerce
          </h2>
          <p className="mt-2 leading-relaxed text-muted">
            The story behind the name, and why I think commerce is becoming a
            creative discipline. Probably start here.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            Read the essay <Arrow />
          </span>
        </Link>

        <div className="rounded-lg border border-border/50 p-6 opacity-50">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">
            Field Note
          </span>
          <p className="mt-2 font-display text-xl">
            Notes from the Agentic Marketing Garage
          </p>
          <p className="mt-1 text-sm text-muted">Coming soon</p>
        </div>

        <div className="rounded-lg border border-border/50 p-6 opacity-50">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">
            Article ↗ Experience League
          </span>
          <p className="mt-2 font-display text-xl">Title TBD</p>
          <p className="mt-1 text-sm text-muted">Coming soon</p>
        </div>
      </div>
    </div>
  );
}
