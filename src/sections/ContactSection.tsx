import React from 'react'
import { FadeIn } from '../components/ui'

const socials = [
  { name: 'GitHub', url: 'https://github.com/AradhyaRay05', icon: '↗' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rayaradhya', icon: '↗' },
  { name: 'Instagram', url: 'https://www.instagram.com/muse_in_machines/', icon: '↗' },
  { name: 'Email', url: 'mailto:aradhyaray05@gmail.com', icon: '↗' },
]

const ContactSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-14 md:pb-16"
      id="contact"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none mb-8 sm:mb-12 md:mb-16"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s Talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <p
            className="text-[#D7E2EA]/70 text-center font-light leading-relaxed max-w-xl mx-auto mb-12 sm:mb-16 md:mb-20"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            I&apos;m always open to discussing new projects, internship opportunities,
            research collaborations, or just having a conversation about AI and technology.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} y={30}>
          <div className="flex justify-center mb-14 sm:mb-18 md:mb-24">
            <a
              href="mailto:aradhyaray05@gmail.com"
              className="rounded-full font-medium uppercase tracking-widest text-white
                px-10 py-4 sm:px-14 sm:py-5
                text-sm sm:text-base md:text-lg
                hover:scale-105 transition-transform duration-300"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              Get In Touch
            </a>
          </div>
        </FadeIn>

        {/* Social links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-16 sm:mb-20">
          {socials.map((social, i) => (
            <FadeIn key={social.name} delay={0.3 + i * 0.08} y={20}>
              <a
                href={social.url}
                target={social.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2
                  border border-[#D7E2EA]/20 rounded-2xl py-4
                  text-[#D7E2EA]/70 font-medium uppercase tracking-wider text-sm
                  hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-all duration-300
                  hover:bg-[#D7E2EA]/5"
              >
                {social.name}
                <span className="text-xs opacity-50">{social.icon}</span>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Footer */}
        <FadeIn delay={0.6} y={10}>
          <div className="border-t border-[#D7E2EA]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#D7E2EA]/30 text-sm font-light">
              © 2026 Aradhya Ray. Built with React & Framer Motion.
            </p>
            <p className="text-[#D7E2EA]/30 text-sm font-light">
              Kolkata, India
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default ContactSection
