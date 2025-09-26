"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Typewriter from "./Typewriter";

const Scene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[60vh] w-full rounded-lg border border-black/10 dark:border-white/15 bg-surface animate-pulse" />
  ),
});

export default function ClientHome() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 space-y-8">
      <Scene />

      <section className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          <Typewriter text="Neal Kapadia" />
        </h1>
        <p className="text-[color:var(--muted)] max-w-2xl">AI/ML • Biotech • 3D UX</p>
        <div className="flex gap-3">
          <Link href="/projects" className="px-4 py-2 rounded bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90">Explore Projects</Link>
          <Link href="/resume" className="px-4 py-2 rounded border border-black/10 dark:border-white/15 hover:bg-surface">Resume</Link>
          <Link href="/contact" className="px-4 py-2 rounded border border-black/10 dark:border-white/15 hover:bg-surface">Contact</Link>
        </div>
      </section>

      <p className="text-xs text-[color:var(--muted)]">Tip: Drag to orbit • Click a card to open GitHub/Devpost.</p>
    </div>
  );
}
