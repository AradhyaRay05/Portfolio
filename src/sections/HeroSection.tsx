import React from 'react'
import { FadeIn, Magnet } from '../components/ui'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const HeroSection: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="min-h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between items-center px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8">
          <span className="text-[#D7E2EA] font-bold text-lg sm:text-xl tracking-wider">AR</span>
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#D7E2EA]/80 font-medium uppercase tracking-wider
                  text-xs sm:text-sm md:text-base
                  hover:text-[#D7E2EA] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-8">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-[0.9] text-center w-full"
            style={{ fontSize: 'clamp(3rem, 12vw, 14rem)' }}
          >
            Aradhya
            <br />
            <span className="text-[0.55em]">Ray</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA]/60 font-light uppercase tracking-[0.3em] text-center mt-4 sm:mt-6"
            style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
          >
            Software Engineer · AI/ML · Open Source
          </p>
        </FadeIn>

        {/* Portrait */}
        <FadeIn delay={0.5} y={30} className="mt-6 sm:mt-8">
          <Magnet padding={120} strength={4}>
            <div className="relative w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px]">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-b from-purple-500/15 via-transparent to-transparent blur-3xl" />
              <img
                src="https://avatars.githubusercontent.com/u/179517004?v=4"
                alt="Aradhya Ray"
                className="w-full h-auto rounded-2xl relative z-10"
                style={{
                  filter: 'grayscale(10%) contrast(1.05)',
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                }}
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-6 sm:pb-8 md:pb-10 px-5 sm:px-8 md:px-10">
        <FadeIn delay={0.6} y={20}>
          <p
            className="text-[#D7E2EA]/50 font-light text-center sm:text-left max-w-[320px]"
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1rem)' }}
          >
            Building intelligent systems that solve real-world problems through AI, machine learning, and software engineering.
          </p>
        </FadeIn>

        <FadeIn delay={0.7} y={20}>
          <div className="flex gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="rounded-full font-medium uppercase tracking-widest text-white
                px-6 py-2.5 sm:px-8 sm:py-3
                text-xs sm:text-sm cursor-pointer"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              Contact Me
            </a>
            <a
              href="/Aradhya_Ray_Resume.pdf"
              download
              className="rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA]/80
                font-medium uppercase tracking-widest
                px-6 py-2.5 sm:px-8 sm:py-3
                text-xs sm:text-sm
                hover:border-[#D7E2EA] hover:text-[#D7E2EA] transition-all duration-200"
            >
              Resume ↓
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection
