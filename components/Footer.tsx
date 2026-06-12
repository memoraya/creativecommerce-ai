import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono">
          © {year} CreativeCommerce.ai — Memo Raya, Mexico City
        </p>
        <nav className="flex items-center gap-6">
          <Link
            href="/perspectives"
            className="transition-colors hover:text-foreground"
          >
            Perspectives
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>
          <a
            href="mailto:g.raya2486@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Let&rsquo;s talk
          </a>
        </nav>
      </div>
    </footer>
  );
}
