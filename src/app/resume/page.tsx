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
      </div>
      <div className="mt-4 h-[80vh] w-full border border-black/10 dark:border-white/15 rounded overflow-hidden bg-surface">
        <object data="/Resume.pdf" type="application/pdf" className="h-full w-full">
          <p className="p-4 text-sm">PDF preview unavailable. Please use the download button above.</p>
        </object>
      </div>
    </div>
  );
}
