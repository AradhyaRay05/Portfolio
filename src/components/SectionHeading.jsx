export function SectionHeading({ title, eyebrow, description }) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-secondary dark:text-slate-100">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-secondary/80 dark:text-slate-300">{description}</p>
      ) : null}
    </div>
  )
}
