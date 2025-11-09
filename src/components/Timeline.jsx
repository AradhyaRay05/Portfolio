export function Timeline({ items, type }) {
  return (
    <ol className="relative border-slate-200/80 dark:border-slate-700/60 md:border-l">
      {items.map((item, index) => (
        <li key={`${item.program || item.role}-${index}`} className="mb-10 ml-6 md:ml-10">
          <span className="absolute -left-7 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary shadow-md dark:bg-primary/25">
            {index + 1}
          </span>
          <h3 className="text-xl font-semibold text-secondary dark:text-white">
            {type === 'experience' ? item.role : item.program}
          </h3>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            {type === 'experience'
              ? `${item.company} | ${item.start} – ${item.end}`
              : `${item.institution}${item.start ? ` | ${item.start} – ${item.end}` : ` | ${item.end}`}`}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-secondary/80 dark:text-slate-300">
            {(item.details || [item.detail]).filter(Boolean).map((detail) => (
              <li key={detail} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
