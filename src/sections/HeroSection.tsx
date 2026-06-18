import React from 'react'
import { FadeIn, Magnet, ContactButton } from '../components/ui'

const navLinks = ['About', 'Experience', 'Projects', 'Contact']

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden flex-shrink-0">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none
              whitespace-nowrap w-full
              text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw]
              mt-6 sm:mt-4 md:-mt-5
              px-6 md:px-10"
          >
            Hi, i&apos;m aradhya
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10
        w-[240px] sm:w-[300px] md:w-[380px] lg:w-[440px]
        top-1/2 -translate-y-1/2
        sm:top-auto sm:translate-y-0 sm:bottom-0
        pointer-events-none sm:pointer-events-auto">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-500/20 via-transparent to-transparent blur-3xl" />
            <img
              src="https://avatars.githubusercontent.com/u/179517004?v=4"
              alt="Aradhya Ray"
              className="w-full h-auto rounded-3xl"
              style={{
                filter: 'grayscale(15%) contrast(1.05)',
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              }}
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an ai &amp; ml engineer crafting intelligent systems that create real-world impact
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection
