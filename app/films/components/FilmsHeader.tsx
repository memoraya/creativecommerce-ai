import Link from "next/link";
import { linkArrow, sectionShell, textLink } from "../theme";

// Minimal header: brand on the left keeps access to the rest of the main
// site, contact CTA on the right. No nav links — this page has one job.
export default function FilmsHeader() {
  return (
    <header className="border-b border-[#141414]/10">
      <div
        className={`${sectionShell} flex items-center justify-between py-5 sm:py-6`}
      >
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-[#141414] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414]"
        >
          CreativeCommerce<span className="text-[#141414]/40">.ai</span>
        </Link>

        <a href="mailto:g.raya2486@gmail.com" className={textLink}>
          Start a project
          <span aria-hidden className={linkArrow}>
            ↗
          </span>
        </a>
      </div>
    </header>
  );
}
