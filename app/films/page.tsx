import FilmGallery from "./components/FilmGallery";
import FilmsHeader from "./components/FilmsHeader";
import Reveal from "./components/Reveal";
import { films } from "./films.config";
import { filmsDisplay } from "./fonts";
import { kicker, linkArrow, sectionShell, textLink } from "./theme";

export default function FilmsPage() {
  return (
    <>
      <FilmsHeader />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={`${sectionShell} pt-10 pb-10 sm:pt-16 sm:pb-14`}>
        <Reveal>
          <p className={kicker}>CreativeCommerce / AI Films</p>
        </Reveal>

        <div className="mt-5 sm:grid sm:grid-cols-12 sm:items-end sm:gap-8">
          <Reveal delay={80} className="sm:col-span-8 lg:col-span-7">
            <h1
              className={`${filmsDisplay.className} text-[clamp(2.75rem,11vw,6.5rem)] uppercase leading-[0.86] tracking-tight`}
            >
              Make them
              <br />
              feel something.
            </h1>
          </Reveal>

          <Reveal
            delay={160}
            className="mt-6 sm:col-span-4 sm:mt-0 lg:col-span-5"
          >
            <p className="max-w-xs text-base leading-relaxed text-[#141414]/65 sm:ml-auto sm:max-w-sm sm:text-right">
              AI-generated cinematic content for brands, entrepreneurs, and
              creators.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Film gallery ──────────────────────────────────────── */}
      <section className={`${sectionShell} pb-20 sm:pb-28`}>
        <FilmGallery films={films} />
      </section>

      {/* ── Service statement ─────────────────────────────────── */}
      <section className="border-t border-[#141414]/10">
        <div className={`${sectionShell} py-20 sm:py-28`}>
          <Reveal>
            <h2
              className={`${filmsDisplay.className} max-w-3xl text-[clamp(2rem,6vw,4rem)] leading-[0.95]`}
            >
              From an idea to a world you can watch.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#141414]/65">
              Cinematic content for launches, products, and stories worth
              bringing to life.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-10 flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-[#141414]/70">
              <span>Brands</span>
              <span aria-hidden className="h-1.5 w-1.5 bg-[#D7FF3F]" />
              <span>Entrepreneurs</span>
              <span aria-hidden className="h-1.5 w-1.5 bg-[#D7FF3F]" />
              <span>Creators</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="border-t border-[#141414]/10">
        <div
          className={`${sectionShell} flex flex-col items-center py-24 text-center sm:py-32`}
        >
          <Reveal>
            <h2
              className={`${filmsDisplay.className} text-[clamp(2.5rem,10vw,5.5rem)] uppercase leading-[0.88]`}
            >
              Your next big idea.
              <br />
              In motion.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <a
              href="mailto:g.raya2486@gmail.com"
              className={`${textLink} mt-10 text-lg`}
            >
              Let&rsquo;s make something
              <span aria-hidden className={linkArrow}>
                ↗
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
