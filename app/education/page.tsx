import Link from "next/link";
import type { Metadata } from "next";
import { filledButton } from "@/components/ui";
import { practices } from "@/lib/content";

const practice = practices.find((p) => p.id === "education")!;

export const metadata: Metadata = {
  title: "Education",
  description: practice.tagline,
};

export default function EducationPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <Link
        href="/#practices"
        className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
      >
        ← Practices
      </Link>

      <p className="mt-6 font-mono text-xs uppercase tracking-wider text-accent">
        Practice
      </p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        {practice.label}
      </h1>
      <p className="mt-6 text-xl leading-relaxed text-muted">
        {practice.tagline}
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        {practice.description}
      </p>

      <ul className="mt-10 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {practice.capabilities.map((cap) => (
          <li key={cap} className="text-sm text-muted">
            {cap}
          </li>
        ))}
      </ul>

      <div className="mt-14 border-t border-border pt-10">
        <p className="text-xl text-foreground">
          Ready to explore what this looks like for your organization?
        </p>
        <a href="mailto:g.raya2486@gmail.com" className={`${filledButton} mt-6`}>
          Start a conversation
        </a>
      </div>
    </article>
  );
}
