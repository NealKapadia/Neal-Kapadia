import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <ul className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-lg border border-black/10 dark:border-white/15 bg-white/80 dark:bg-black/20 overflow-hidden">
            {p.coverImage && (
              <div className="relative aspect-[16/9] w-full bg-surface border-b border-black/10 dark:border-white/10">
                <Image src={p.coverImage} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                {p.winner && (
                  <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded bg-[color:var(--accent)] text-white shadow">🏆 Winner</span>
                )}
              </div>
            )}
            <div className="p-5">
              <h2 className="text-xl font-semibold"><Link className="hover:underline" href={`/projects/${p.slug}`}>{p.title}</Link></h2>
              {p.summary && (
                <p className="text-sm text-[color:var(--muted)] mt-1">{p.summary}</p>
              )}
              {p.tech && p.tech.length > 0 && (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tech.slice(0,4).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-surface border border-black/10 dark:border-white/15">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex gap-4 flex-wrap items-center">
                {p.links?.repo && (
                  <a href={p.links.repo} target="_blank" rel="noreferrer" className="underline text-sm">View GitHub →</a>
                )}
                {p.links?.devpost && (
                  <a href={p.links.devpost} target="_blank" rel="noreferrer" className="underline text-sm">View Devpost →</a>
                )}
                {!p.links?.repo && !p.links?.devpost && p.links?.demo && (
                  <a href={p.links.demo} target="_blank" rel="noreferrer" className="underline text-sm">View Demo →</a>
                )}
                {!p.links?.repo && !p.links?.devpost && !p.links?.demo && (
                  <Link className="underline text-sm" href={`/projects/${p.slug}`}>View details →</Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
