import Link from "next/link";
import { practices } from "@/lib/content";
import { Arrow, Kicker, cta, ctaMuted, filledButton, sectionGrid } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div>
          <p className="font-display text-xl text-muted sm:text-2xl">
            Creative<span className="text-foreground">Commerce</span>
            <span className="text-accent">.ai</span>
          </p>
          <p className="mt-2 font-mono text-xs text-muted">
            Memo Raya&ensp;·&ensp;Commerce&ensp;·&ensp;Cinematic
            Content&ensp;·&ensp;Education
          </p>
        </div>

        <h1 className="mt-8 max-w-3xl font-display text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Helping organizations become AI-native.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted">
          Creative Commerce brings together enterprise commerce, cinematic
          content, and executive education to help organizations redesign how
          they sell, create, and learn in the age of AI.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#contact" className={cta}>
            Start a conversation <Arrow />
          </a>
          <a href="#practices" className={ctaMuted}>
            See our practices <Arrow />
          </a>
        </div>
      </section>

      {/* ── Practices ─────────────────────────────────────────── */}
      <section id="practices" className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 lg:py-32">
          <p className="font-mono text-sm text-accent">Practices</p>

          <div className="mt-12 divide-y divide-border">
            {practices.map((practice) => (
              <div
                key={practice.id}
                id={practice.id}
                className="grid gap-8 py-12 sm:grid-cols-[240px_1fr] sm:gap-x-12 sm:py-16 lg:gap-x-16"
              >
                {/* Left: name + tagline */}
                <div className="sm:pt-0.5">
                  <h2 className="font-display text-3xl sm:text-4xl">
                    {practice.label}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {practice.tagline}
                  </p>
                </div>

                {/* Right: description + capabilities + proof + CTA */}
                <div>
                  <p className="text-lg leading-relaxed text-muted">
                    {practice.description}
                  </p>

                  <ul className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {practice.capabilities.map((cap) => (
                      <li key={cap} className="text-sm text-muted">
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-border/50 pt-6">
                    <p className="font-mono text-xs text-muted">
                      {practice.proof}
                    </p>
                    <Link href={practice.href} className={`${cta} mt-4`}>
                      {practice.cta} <Arrow />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Shift ─────────────────────────────────────────── */}
      <section id="the-shift" className="border-t border-border">
        <div className={sectionGrid}>
          <Kicker n="01" />
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">The Shift</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                For most of the last twenty years, commerce, content, data,
                and customer experience have lived in separate parts of the
                organization — different teams, different tools, different
                metrics, different budgets.
              </p>
              <p>
                That made sense, because customers experienced those
                separations too: a search here, an ad there, a store visit, a
                follow-up email. Each team owned its piece, and the pieces
                mostly added up.
              </p>
              <p>
                I think AI is changing this in two ways. The obvious one:
                it&rsquo;s starting to do a lot of the analytical work —
                optimization, personalization, attribution — that those teams
                were built around. The less obvious one, and the one I find
                more interesting, is what&rsquo;s left once that happens.
                Noticing when the pieces stop adding up. Deciding what the
                system should even be, not just how to improve its parts.
              </p>
              <p className="text-foreground">
                That second thing is mostly what I want to write about here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Lens ──────────────────────────────────────────── */}
      <section id="the-lens" className="border-t border-border">
        <div className={sectionGrid}>
          <Kicker n="02" />
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">The Lens</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              This isn&rsquo;t a lens I arrived at from outside. I&rsquo;ve
              spent most of my career sitting between the people who build
              commerce platforms, the people who create content and brand
              experiences, the agencies in between, and the business teams
              accountable for results — usually in the same room, rarely
              speaking the same language. That&rsquo;s just where this comes
              from.
            </p>

            <h3 className="mt-12 font-display text-2xl">
              Four disciplines. One system.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              I think about commerce, content, data, and AI less as four
              departments and more as four views of the same system.
            </p>

            <dl className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="font-display text-xl">Commerce</dt>
                <dd className="mt-2 leading-relaxed text-muted">
                  Every transaction is also a trust signal. How you sell
                  shapes how you&rsquo;re discovered.
                </dd>
              </div>
              <div>
                <dt className="font-display text-xl">Content</dt>
                <dd className="mt-2 leading-relaxed text-muted">
                  Content isn&rsquo;t just what you publish anymore —
                  it&rsquo;s what AI reads, summarizes, and represents on your
                  behalf.
                </dd>
              </div>
              <div>
                <dt className="font-display text-xl">Data</dt>
                <dd className="mt-2 leading-relaxed text-muted">
                  AI is only as coherent as the data it draws from. Fragmented
                  data produces fragmented experiences, just faster.
                </dd>
              </div>
              <div>
                <dt className="font-display text-xl">AI</dt>
                <dd className="mt-2 leading-relaxed text-muted">
                  AI isn&rsquo;t a layer you bolt on. It&rsquo;s a mirror — it
                  reflects, and amplifies, however connected (or disconnected)
                  everything else already is.
                </dd>
              </div>
            </dl>

            <p className="mt-8 text-lg leading-relaxed">
              Looked at separately, these are four initiatives. Looked at
              together, they&rsquo;re really one conversation about how your
              organization shows up — and seeing them that way is, I&rsquo;d
              argue, the creative part.
            </p>
          </div>
        </div>
      </section>

      {/* ── In Practice ───────────────────────────────────────── */}
      <section id="in-practice" className="border-t border-border">
        <div className={sectionGrid}>
          <Kicker n="03" />
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">In Practice</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              None of this is theoretical — it comes out of ongoing work
              across the Adobe ecosystem and enterprise commerce programs
              across Latin America: workshops, product conversations, time on
              stage, and a lot of regular conversations along the way.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  Recent
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="border-t border-border pt-3">
                    <p className="text-foreground">
                      From SEO to GEO: AI-Driven Discovery for Commerce
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-muted">
                      Speaker · Adobe · June 2026
                    </p>
                  </li>
                  <li className="border-t border-border pt-3">
                    <p className="text-foreground">Agentic Marketing Garage</p>
                    <p className="mt-0.5 font-mono text-xs text-muted">
                      Participant · Adobe HQ · June 2026
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  Ongoing
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="border-t border-border pt-3">
                    <p className="text-foreground">Adobe Commerce Champion</p>
                  </li>
                  <li className="border-t border-border pt-3">
                    <p className="text-foreground">
                      Adobe AI-Focused Champion Initiative
                    </p>
                  </li>
                  <li className="border-t border-border pt-3">
                    <p className="text-foreground">Speaker — Adobe Summit</p>
                  </li>
                  <li className="border-t border-border pt-3">
                    <p className="text-foreground">
                      Contributor — Adobe Experience League
                    </p>
                  </li>
                  <li className="border-t border-border pt-3">
                    <p className="text-foreground">
                      Ongoing collaboration with Adobe product and partner
                      teams
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Perspectives ──────────────────────────────────────── */}
      <section id="perspectives" className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 lg:py-32">
          <p className="font-mono text-sm text-accent">Perspectives</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Essays and notes on commerce, content, and AI — posted as the
            thinking develops.
          </p>

          <div className="mt-10">
            <Link
              href="/perspectives/why-creative-commerce"
              className="group block rounded-lg border border-border p-6 transition-colors hover:border-accent/50"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                Essay · Founding Perspective
              </span>
              <h3 className="mt-2 font-display text-2xl">
                Why Creative Commerce
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                The story behind the name, and why commerce is becoming a
                creative discipline. Start here.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                Read the essay <Arrow />
              </span>
            </Link>
          </div>

          <Link href="/perspectives" className={`${cta} mt-8`}>
            View all Perspectives <Arrow />
          </Link>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 lg:py-32">
          <p className="font-mono text-sm text-accent">About</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-[140px_1fr] sm:items-start">
            <div className="flex aspect-square w-28 items-center justify-center rounded-full border border-border font-display text-2xl text-muted sm:w-full">
              MR
            </div>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">Memo Raya</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                I&rsquo;m Guillermo &ldquo;Memo&rdquo; Raya — most people just
                call me Memo. I&rsquo;m an independent commerce strategist
                based in Mexico City, and I&rsquo;ve spent the last decade or
                so working across commerce, content, data, and customer
                experience for some of the largest organizations in Latin
                America. These days, as an Adobe Commerce Champion, I spend a
                lot of my time in conversations about where all of this is
                heading next.
              </p>
              <Link href="/about" className={`${cta} mt-6`}>
                More about my background <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28 lg:py-36">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Start a conversation
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">
            If you&rsquo;re navigating any of this — how you sell, how you
            create, or how your teams work with AI — that&rsquo;s the
            conversation Creative Commerce is built for.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="mailto:g.raya2486@gmail.com" className={filledButton}>
              Let&rsquo;s talk
            </a>
            <Link href="/perspectives" className={ctaMuted}>
              Read the Perspectives <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
