import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight whitespace-nowrap transition-opacity hover:opacity-80"
        >
          <span className="sm:hidden">
            CC<span className="text-accent">.ai</span>
          </span>
          <span className="hidden sm:inline">
            CreativeCommerce<span className="text-accent">.ai</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-xs sm:gap-8 sm:text-sm">
          <Link
            href="/#practices"
            className="text-muted transition-colors hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="/perspectives"
            className="text-muted transition-colors hover:text-foreground"
          >
            Perspectives
          </Link>
          <Link
            href="/about"
            className="text-muted transition-colors hover:text-foreground"
          >
            About
          </Link>
          <a
            href="mailto:g.raya2486@gmail.com"
            className="group inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
          >
            Let&rsquo;s talk
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
