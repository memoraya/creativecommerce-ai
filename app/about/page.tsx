import Link from "next/link";
import type { Metadata } from "next";
import { filledButton, inlineLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Guillermo “Memo” Raya — independent commerce strategist based in Mexico City, Adobe Commerce Champion, working across commerce, content, data, and AI.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-sm text-accent">About</p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Guillermo &ldquo;Memo&rdquo; Raya
      </h1>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border font-display text-lg text-muted">
          MR
        </div>
        <p className="text-sm text-muted">
          Independent commerce strategist · Mexico City
        </p>
      </div>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
        <p className="text-xl text-foreground">
          I&rsquo;m Guillermo &ldquo;Memo&rdquo; Raya, though most people call
          me Memo.
        </p>
        <p>
          I&rsquo;ve never been the deepest specialist in any one room. What
          I&rsquo;ve usually been is the person who&rsquo;s spent time in the
          most rooms — agency rooms, platform rooms, enterprise rooms,
          boardrooms, workshops. Commerce teams, content teams, data teams,
          technology teams, and the business leaders accountable for all of
          it.
        </p>
        <p>
          Most people doing this kind of work spend their careers on one side
          of those walls. I&rsquo;ve spent mine moving between them, which
          mostly means translating — explaining to a platform team why
          something the brand team cares about isn&rsquo;t just a detail, and
          explaining to a business stakeholder why a technical constraint
          isn&rsquo;t just a technicality.
        </p>
        <p>
          Somewhere in all that translating, I started noticing the same
          thing over and over: the divisions between commerce, content, data,
          and customer experience aren&rsquo;t natural. They&rsquo;re
          organizational — just a way the work got carved up a long time ago,
          for reasons that made sense at the time. Customers never
          experienced those divisions the way an org chart does. They never
          saw the chart.
        </p>
        <p>
          AI is what&rsquo;s making that gap impossible to keep ignoring — I
          wrote more about that in the first thing I published here:{" "}
          <Link href="/perspectives/why-creative-commerce" className={inlineLink}>
            Why Creative Commerce →
          </Link>
        </p>
      </div>

      <h2 className="mt-14 font-display text-2xl">Where this plays out</h2>
      <div className="mt-4 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          My background is mostly enterprise commerce, content, and data
          programs across some of the largest organizations in Latin America —
          most of it within or around the Adobe ecosystem.
        </p>
        <p>
          I&rsquo;m an Adobe Commerce Champion, and I recently joined
          Adobe&rsquo;s first AI-focused Champion initiative — a small group
          of us thinking specifically about how AI is reshaping the ecosystem
          and the wider industry. I&rsquo;ve spoken at Adobe Summit, write for
          Adobe Experience League, and stay pretty close to Adobe&rsquo;s
          product and partner teams as all of this develops in real time.
        </p>
      </div>

      <h2 className="mt-14 font-display text-2xl">How I work</h2>
      <div className="mt-4 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          I&rsquo;m not a developer, and I don&rsquo;t run an agency. Mostly
          what I do is sit between disciplines — commerce, content, data,
          technology, and increasingly AI — and help people in each of those
          rooms understand what the others are seeing.
        </p>
        <p>
          Most of that happens through conversation: workshops, advisory
          work, strategy sessions, and more and more, talks and writing like
          this.
        </p>
        <p>
          I&rsquo;m based in Mexico City, and I work with organizations across
          Latin America and the wider Adobe ecosystem.
        </p>
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <p className="text-xl text-foreground">
          If any of this resonates — or you just want to compare notes —
          let&rsquo;s talk.
        </p>
        <a href="mailto:g.raya2486@gmail.com" className={`${filledButton} mt-6`}>
          Let&rsquo;s talk
        </a>
      </div>
    </article>
  );
}
