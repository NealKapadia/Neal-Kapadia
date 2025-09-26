import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const hasOverview = Boolean(project.role || project.problem);
  const hasProcess = Boolean(project.process);
  const hasTech = (project.tech?.length ?? 0) > 0;
  const hasAwards = (project.awards?.length ?? 0) > 0;
  const hasLinks = Boolean(project.links?.repo || project.links?.devpost || project.links?.demo);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
      {project.summary && (
        <p className="text-[color:var(--muted)]">{project.summary}</p>
      )}

      {hasOverview && (
        <section>
          <h2 className="text-xl font-semibold">Overview</h2>
          <ul className="text-sm text-[color:var(--muted)] list-disc pl-5">
            {project.role && (
              <li><strong className="text-foreground">Role:</strong> {project.role}</li>
            )}
            {project.problem && (
              <li><strong className="text-foreground">Problem:</strong> {project.problem}</li>
            )}
          </ul>
        </section>
      )}

      {hasProcess && (
        <section>
          <h2 className="text-xl font-semibold">Process</h2>
          <p className="text-sm text-[color:var(--muted)]">{project.process}</p>
        </section>
      )}

      {hasTech && (
        <section>
          <h2 className="text-xl font-semibold">Technologies</h2>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-surface border border-black/10 dark:border-white/15">{t}</span>
            ))}
          </div>
        </section>
      )}

      {hasAwards && (
        <section>
          <h2 className="text-xl font-semibold">Awards</h2>
          <ul className="list-disc pl-5 text-sm text-[color:var(--muted)]">
            {project.awards!.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      {hasLinks && (
        <section>
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="flex gap-4 text-sm">
            {project.links?.repo && (
              <a className="underline" target="_blank" rel="noreferrer" href={project.links.repo}>GitHub</a>
            )}
            {project.links?.devpost && (
              <a className="underline" target="_blank" rel="noreferrer" href={project.links.devpost}>Devpost</a>
            )}
            {project.links?.demo && (
              <a className="underline" target="_blank" rel="noreferrer" href={project.links.demo}>Demo</a>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
