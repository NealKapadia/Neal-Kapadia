"use client";

import dynamic from "next/dynamic";
import { useUI } from "../store/ui";
import Link from "next/link";

const Scene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[60vh] w-full rounded-lg border border-black/10 dark:border-white/15 bg-surface animate-pulse" />
  ),
});

export default function ClientHome() {
  const { liteMode } = useUI();
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 space-y-8">
      {!liteMode && <Scene />}

      <section className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Neal Kapadia
        </h1>
        <p className="text-[color:var(--muted)] max-w-2xl">
          I build at the intersection of AI/ML, biotech, and playful 3D UX. Curious by default, practical by design.
        </p>
        <div className="flex gap-3">
          <Link href="/projects" className="px-4 py-2 rounded bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90">Explore Projects</Link>
          <Link href="/resume" className="px-4 py-2 rounded border border-black/10 dark:border-white/15 hover:bg-surface">Resume</Link>
          <Link href="/contact" className="px-4 py-2 rounded border border-black/10 dark:border-white/15 hover:bg-surface">Contact</Link>
        </div>
        <p className="text-xs text-[color:var(--muted)]">Also into: Tennis • Golf • Weightlifting • Piano • Anime</p>
      </section>

      {liteMode && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Lite mode</h2>
          <p className="text-[color:var(--muted)]">3D disabled. Browse via text navigation:</p>
          <ul className="list-disc pl-5 text-sm">
            <li><Link href="/projects" className="underline">Projects</Link></li>
            <li><Link href="/about" className="underline">About</Link></li>
            <li><Link href="/contact" className="underline">Contact</Link></li>
          </ul>
        </section>
      )}

      {!liteMode && (
        <p className="text-xs text-[color:var(--muted)]">Tip: Drag to orbit • Click a card to open GitHub/Devpost or a case study.</p>
      )}
    </div>
  );
}
