import { Link } from 'react-router-dom'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import { Badge } from './Badge'

export function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col gap-5 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-glow dark:border-slate-700/70 dark:bg-slate-900/70">
      <div className="flex flex-wrap items-center gap-3">
        {project.categories.map((category) => (
          <Badge key={category}>{category}</Badge>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-secondary dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {project.timeframe}
        </p>
        <p className="text-base text-secondary/80 dark:text-slate-300">{project.description}</p>
        <ul className="space-y-2 text-sm text-secondary/70 dark:text-slate-400">
          {project.bulletPoints.map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-secondary dark:bg-slate-800 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Case Study
          <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          href={project.repoUrl}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
          target="_blank"
          rel="noopener"
        >
          GitHub Profile
        </a>
        <button
          type="button"
          disabled={!project.demoUrl}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            project.demoUrl
              ? 'border-primary/30 text-primary hover:bg-primary/10'
              : 'cursor-not-allowed border-slate-200 text-slate-400 dark:border-slate-700'
          }`}
          onClick={() => {
            if (project.demoUrl) {
              window.open(project.demoUrl, '_blank', 'noopener')
            }
          }}
        >
          Live Demo
        </button>
      </div>
    </article>
  )
}
