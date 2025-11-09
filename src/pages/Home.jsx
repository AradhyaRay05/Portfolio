import { Link } from 'react-router-dom'
import { HiOutlineArrowDown, HiOutlineArrowRight, HiOutlineDocumentText } from 'react-icons/hi2'
import { profile } from '../data/profile'
import { CopyEmailButton } from '../components/CopyEmailButton'
import { Seo } from '../components/Seo'

export default function Home() {
  return (
    <section className="space-y-16">
      <Seo title="Home" />
      <div className="rounded-3xl bg-white/80 p-10 shadow-glow ring-1 ring-slate-200/70 transition dark:bg-slate-900/80 dark:ring-slate-700/70">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {profile.tagline}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-secondary dark:text-white md:text-5xl">
            {profile.name}
          </h1>
          <p className="max-w-2xl text-lg text-secondary/80 dark:text-slate-300">
            {profile.summary}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Let&apos;s connect
              <HiOutlineArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              View resume
              <HiOutlineDocumentText className="h-4 w-4" aria-hidden="true" />
            </Link>
            <CopyEmailButton />
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 dark:border-slate-700/60 dark:bg-slate-900/70">
          <h2 className="text-xl font-semibold text-secondary dark:text-white">Focus areas</h2>
          <p className="mt-3 text-sm text-secondary/80 dark:text-slate-300">
            My projects and internships revolve around building real-time web interfaces,
            reporting on cybersecurity assessments, working with Python data pipelines,
            and strengthening Linux administration workflows.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-secondary/70 dark:text-slate-400">
            <li>• WebRTC-powered Video Conferencing Application</li>
            <li>• Spotify-style Music Streaming Web App UI</li>
            <li>• Vulnerability assessment reporting at Dataspace Academy</li>
            <li>• Data visualisation work at Edulyt India</li>
            <li>• Linux user and network management at WEBEL</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 dark:border-slate-700/60 dark:bg-slate-900/70">
          <h2 className="text-xl font-semibold text-secondary dark:text-white">Quick links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {profile.socials.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-secondary/70 dark:text-slate-300">
            <HiOutlineArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
            Scroll to explore more about my work.
          </p>
        </div>
      </div>
    </section>
  )
}
