"use client";

import Link from "next/link";
import LiteModeToggle from "./LiteModeToggle";

export default function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-[color:var(--foreground)]">
          Neal Kapadia
        </Link>
        <nav className="flex items-center gap-4 text-sm text-[color:var(--foreground)]">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <LiteModeToggle />
        </nav>
      </div>
    </header>
  );
}
