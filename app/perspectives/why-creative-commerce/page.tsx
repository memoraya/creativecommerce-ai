import Link from "next/link";
import type { Metadata } from "next";
import { filledButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Why Creative Commerce",
  description:
    "The story behind the name CreativeCommerce.ai — and why commerce is becoming a creative discipline.",
};

export default function WhyCreativeCommercePage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <Link
        href="/perspectives"
        className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
      >
        ← Perspectives
      </Link>

      <p className="mt-6 font-mono text-xs uppercase tracking-wider text-accent">
        Essay · Founding Perspective
      </p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Why Creative Commerce
      </h1>

      <p className="mt-10 text-xl leading-relaxed text-foreground">
        When people hear &ldquo;Creative Commerce,&rdquo; I think most assume
        one of two things. Either it&rsquo;s a creative agency that happens to
        work with commerce brands, or it&rsquo;s just two words that sounded
        good together.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        It&rsquo;s neither, honestly — and the gap between what the name
        sounds like and what I actually mean by it is kind of the whole point
        of this piece.
      </p>

      <h2 className="mt-14 font-display text-2xl">
        Commerce is the subject. &ldquo;Creative&rdquo; is not a department.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        When I say &ldquo;creative,&rdquo; I don&rsquo;t mean the ad, the
        campaign, the asset — the thing one team makes and another team
        places. I mean it more the way you&rsquo;d describe a person
        who&rsquo;s good at connecting things other people miss. Someone who
        can hold a bunch of seemingly unrelated pieces in their head and
        notice the shape they make together. Someone who looks at a system
        and sees not just how it works, but how it could work differently.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        That&rsquo;s synthesis, pattern recognition, connecting things that
        don&rsquo;t obviously belong together — designing a system instead of
        just optimizing one piece of it.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        That&rsquo;s what I mean by creative. And commerce — not marketing,
        not &ldquo;the creative side of the business,&rdquo; commerce itself —
        is where I think that kind of thinking is suddenly, urgently needed.
      </p>

      <h2 className="mt-14 font-display text-2xl">
        Here&rsquo;s the part I think is actually new.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        For the last twenty years or so, commerce has mostly run on one kind
        of thinking: analytical thinking. You break the business into parts,
        measure each part, and improve each part — conversion rate,
        engagement rate, data accuracy, campaign performance — usually with a
        different team owning each metric, and each team genuinely good at
        the thing they&rsquo;re measured on.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        And honestly, that wasn&rsquo;t a bad way to do it. For a long time it
        was exactly the right way to run a large organization, because the
        work really was divisible. The website was one thing. The store was
        another. The email campaign was a third. You could improve each one
        on its own terms, and the improvements mostly stacked up.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        AI is changing this in two ways, I think — and only one of them is
        getting much attention.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        The first, the one everyone&rsquo;s talking about, is that AI is
        starting to do a lot of that analytical work itself. Optimization,
        personalization, attribution, even a good chunk of content
        production — the stuff commerce teams spent twenty years building
        processes around is, more and more, just something software does now.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        The second — and this is the one I find more interesting — is
        what&rsquo;s left over once that happens.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        What&rsquo;s left is the work AI doesn&rsquo;t really do, at least not
        yet: deciding what the system should even be in the first place.
        Noticing that what your content team is producing, what your commerce
        platform is showing, and what your data is saying about the customer
        don&rsquo;t actually agree with each other — and that nobody&rsquo;s
        job is to notice that, because everybody&rsquo;s job is to optimize
        their own piece.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        That&rsquo;s not really an analytical problem. You can&rsquo;t A/B
        test your way into noticing it. It&rsquo;s a synthetic one — a
        creative one, in the sense I mean.
      </p>

      <h2 className="mt-14 font-display text-2xl">
        This is also why the org chart hasn&rsquo;t changed.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        I don&rsquo;t think it&rsquo;s because organizations are slow, or
        stubborn, or bad at change. I think it&rsquo;s that the org chart was
        built — quite sensibly, at the time — around the analytical mode: work
        that could be divided up, measured, and owned by someone. There was
        never a box on the chart for &ldquo;notices when the parts stop adding
        up to a whole,&rdquo; because for a long time, that wasn&rsquo;t really
        anyone&rsquo;s job. The parts mostly did add up.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        They don&rsquo;t anymore. Or, more accurately, the customer
        doesn&rsquo;t experience them as parts anymore. A single AI-driven
        interaction touches commerce, content, data, and whatever your AI
        strategy is — all at once — whether your org chart is ready for that
        or not.
      </p>

      <h2 className="mt-14 font-display text-2xl">
        So, that&rsquo;s the name: Creative Commerce.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Not &ldquo;commerce, plus some creative services.&rdquo; Commerce,
        approached with the kind of thinking that&rsquo;s historically been
        pretty scarce inside commerce organizations — synthetic, connective,
        big-picture thinking — because that thinking isn&rsquo;t optional
        anymore. It&rsquo;s becoming the actual job.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        If I&rsquo;m honest, that&rsquo;s the bet I&rsquo;m making with this
        whole site: that over the next several years, the valuable thing
        won&rsquo;t be better optimization — AI&rsquo;s going to mostly take
        care of that — it&rsquo;ll be better synthesis. People, and
        organizations, who can look across commerce, content, data, and AI and
        see one system instead of four.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        This isn&rsquo;t a framework I&rsquo;m trying to sell anyone.
        It&rsquo;s just the thing I keep finding myself doing — moving between
        rooms that don&rsquo;t usually talk to each other, and noticing what
        each one is missing from the others. I&rsquo;ll keep writing about
        what that looks like as I go.
      </p>

      <div className="mt-14 border-t border-border pt-10">
        <p className="text-xl text-foreground">
          And if any of this is a conversation you&rsquo;re already having —
          or one you&rsquo;ve been meaning to have — I&rsquo;d genuinely like
          to hear about it.
        </p>
        <a
          href="mailto:g.raya2486@gmail.com"
          className={`${filledButton} mt-6`}
        >
          Let&rsquo;s talk
        </a>
      </div>
    </article>
  );
}
