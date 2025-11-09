import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { HiOutlineBars3, HiOutlineXMark, HiOutlinePaperAirplane } from 'react-icons/hi2'
import { profile } from '../data/profile'
import { DarkModeToggle } from './DarkModeToggle'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience & Education' },
  { to: '/skills', label: 'Skills & Certifications' },
  { to: '/gallery', label: 'Portfolio' },
  { to: '/blog', label: 'Notes' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const linkClasses = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-primary text-primary-foreground shadow-glow'
        : 'text-secondary hover:bg-primary/10 hover:text-primary'
    }`

  const handleNav = (to) => {
    navigate(to)
    setOpen(false)
  }

  const handleMailTo = () => {
    window.location.href = `mailto:${profile.email}`
  }

  return (
    <div className="min-h-screen bg-background-light/90 text-secondary-foreground transition dark:bg-background-dark dark:text-slate-100">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-16 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-background-light/90 backdrop-blur border-b border-slate-200/70 dark:border-slate-700/60 dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button
            type="button"
            className="flex items-center gap-2 text-left"
            onClick={() => handleNav('/')}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner shadow-primary/20">
              {profile.name.split(' ').map((word) => word[0]).join('')}
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary dark:text-slate-200">
                {profile.name}
              </p>
              <p className="text-xs text-secondary/70 dark:text-slate-400">{profile.tagline}</p>
            </div>
          </button>
          <nav className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <button
              type="button"
              onClick={handleMailTo}
              className="hidden items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:flex"
            >
              <HiOutlinePaperAirplane className="h-4 w-4" aria-hidden="true" />
              Email
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white p-2 text-secondary transition hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? (
                <HiOutlineXMark className="h-5 w-5" aria-hidden="true" />
              ) : (
                <HiOutlineBars3 className="h-5 w-5" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="border-t border-slate-200/80 bg-background-light/95 px-4 py-4 shadow-lg dark:border-slate-700/60 dark:bg-background-dark/95 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.to}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.to)}
                    className="w-full rounded-full bg-white/80 px-4 py-2 text-left text-sm font-semibold text-secondary shadow hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:bg-slate-900/80"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <main id="main" className="mx-auto flex max-w-6xl flex-1 flex-col gap-12 px-4 py-12 lg:px-6">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200/80 bg-background-light/80 py-8 text-sm text-secondary dark:border-slate-700/60 dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React, Vite, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {profile.socials.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
