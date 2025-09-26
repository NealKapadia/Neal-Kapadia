export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
      <p className="text-[color:var(--muted)] text-sm">Download a PDF or view inline below.</p>
      <div className="flex gap-3">
        <a
          href="/Resume.pdf"
          className="px-4 py-2 rounded bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90"
          download
        >
          Download PDF
        </a>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded border border-black/10 dark:border-white/15 hover:bg-surface"
        >
          Open in new tab
        </a>
      </div>
      <div className="mt-4 w-full rounded overflow-hidden">
        {/* On small screens, avoid embedding (mobile dark mode PDF viewers can invert colors). */}
        <div className="md:hidden">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-2 rounded border border-black/10 dark:border-white/15 hover:bg-surface"
          >
            View PDF →
          </a>
        </div>
        <div className="hidden md:block h-[80vh] w-full border border-black/10 dark:border-white/15 rounded overflow-hidden bg-white">
          <object data="/Resume.pdf#toolbar=1" type="application/pdf" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
