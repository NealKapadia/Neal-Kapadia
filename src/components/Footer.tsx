export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/15 py-8 text-sm text-[color:var(--muted)]">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
        <p>
          © {new Date().getFullYear()} Neal Kapadia. All rights reserved.
        </p>
        <p>
          Built with Next.js & three.js
        </p>
      </div>
    </footer>
  );
}
