import Link from "next/link";
import { Arrow, Kicker, cta, ctaMuted, filledButton, sectionGrid } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <p className="font-display text-xl text-muted sm:text-2xl">
          CreativeCommerce<span className="text-accent">.ai</span>
        </p>
        <div className="mt-6">
          <p className="font-display text-base">Memo Raya</p>
          <p className="mt-1 text-sm text-muted">Adobe Commerce Champion · AI &amp; Commerce Strategist</p>
        </div>
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Someone asked AI about your product today.
          <br />
          It was either part of the answer.
          <br />
          Or it wasn&rsquo;t.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Creative Commerce is where I work on what determines which side of
          that line your products land on.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/perspectives/why-creative-commerce" className={cta}>
            Read the thinking <Arrow />
          </Link>
          <a href="mailto:g.raya2486@gmail.com" className={ctaMuted}>
            Let&rsquo;s talk <Arrow />
          </a>
        </div>
      </section>

      {/* 01 — The Shift */}
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

      {/* 02 — The Lens */}
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
                  reflects, and amplifies, however connected (or
                  disconnected) everything else already is.
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

      {/* 03 — In Practice */}
      <section id="in-practice" className="border-t border-border">
        <div className={sectionGrid}>
          <Kicker n="03" />
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">In Practice</h2>
            <h3 className="mt-6 font-display text-2xl">
              Where these ideas get tested
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              None of this is theoretical for me — it comes out of ongoing
              work across the Adobe ecosystem and enterprise commerce programs
              across Latin America: workshops, product conversations, time on
              stage, and a lot of regular conversations along the way.
            </p>
            <ul className="mt-8 space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-accent">—</span> Speaker — From SEO to GEO: AI-Driven Discovery for Commerce (Adobe, June 2026)
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span> Participant — Adobe Agentic Marketing Garage, Adobe HQ (June 2026)
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span> Adobe Commerce Champion
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span> Member, Adobe&rsquo;s AI-focused Champion initiative
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span> Speaker — Adobe Summit
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span> Contributor — Adobe Experience League
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span> Ongoing collaboration with Adobe product and partner teams
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 04 — Recent Writing */}
      <section id="recent-writing" className="border-t border-border">
        <div className={sectionGrid}>
          <Kicker n="04" />
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">
              Recent Writing
            </h2>
            <h3 className="mt-6 font-display text-2xl">Perspectives</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Essays, talks, and shorter notes on commerce, content, data, and
              AI — posted as the thinking develops, not on any kind of
              schedule.
            </p>

            <div className="mt-10 space-y-6">
              <Link
                href="/perspectives/why-creative-commerce"
                className="group block rounded-lg border border-border p-6 transition-colors hover:border-accent/50"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  Essay
                </span>
                <h4 className="mt-2 font-display text-2xl">
                  Why Creative Commerce
                </h4>
                <p className="mt-2 leading-relaxed text-muted">
                  The story behind the name, and why I think commerce is
                  becoming a creative discipline. Probably start here.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  Read the essay <Arrow />
                </span>
              </Link>

            </div>

            <Link href="/perspectives" className={`${cta} mt-10`}>
              View all Perspectives <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — About */}
      <section id="about" className="border-t border-border">
        <div className={sectionGrid}>
          <Kicker n="05" />
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">About</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-[140px_1fr] sm:items-start">
              <div className="flex aspect-square w-28 items-center justify-center rounded-full border border-border font-display text-2xl text-muted sm:w-full">
                MR
              </div>
              <div>
                <p className="text-lg leading-relaxed text-muted">
                  I&rsquo;m Guillermo &ldquo;Memo&rdquo; Raya — most people
                  just call me Memo. I&rsquo;m an independent commerce
                  strategist based in Mexico City, and I&rsquo;ve spent the
                  last decade or so working across commerce, content, data,
                  and customer experience for some of the largest
                  organizations in Latin America. These days, as an Adobe
                  Commerce Champion, I spend a lot of my time in conversations
                  about where all of this is heading next.
                </p>
                <Link href="/about" className={`${cta} mt-6`}>
                  More about my background <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28 lg:py-36">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">
            If this is a conversation you&rsquo;re already having inside your
            organization — or one you&rsquo;ve been meaning to have —
            let&rsquo;s have it here.
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
