import React from 'react'
import { FadeIn } from '../components/ui'

interface Achievement {
  icon: string
  title: string
  subtitle: string
  year: string
}

const achievements: Achievement[] = [
  {
    icon: '🏆',
    title: 'Smart India Hackathon (SIH) 2025',
    subtitle: 'Selected for the Grand Finale — one of India\'s largest national hackathons organized by the Government of India',
    year: '2025',
  },
  {
    icon: '🥈',
    title: 'PARIKALPANA 2K25 Software Hackathon',
    subtitle: 'Secured 2nd Place in the inter-college Software Hackathon competition',
    year: '2025',
  },
  {
    icon: '🥇',
    title: 'Quiz Competition — National Education Day',
    subtitle: 'Won 1st Prize in the university-level quiz competition on National Education Day',
    year: '2024',
  },
  {
    icon: '🎓',
    title: 'Stanford Code in Place',
    subtitle: 'Completed the Stanford University Code in Place program — an introductory Python course taught by Stanford faculty',
    year: '2024',
  },
  {
    icon: '💻',
    title: '20+ ML Projects Deployed',
    subtitle: 'Built and deployed over 20 machine learning projects on Streamlit covering healthcare, agriculture, finance, and energy',
    year: '2024–25',
  },
  {
    icon: '🌐',
    title: 'Open Source Contributor',
    subtitle: 'Contributed to Nominatim (OpenStreetMap) — a widely-used open-source geocoding engine serving millions of queries',
    year: '2025',
  },
]

const AchievementsSection: React.FC = () => {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="achievements">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none mb-14 sm:mb-18 md:mb-24"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
          >
            Achievements
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {achievements.map((ach, i) => (
            <FadeIn key={ach.title} delay={i * 0.06} y={20}>
              <div className="bg-[#D7E2EA]/[0.03] border border-[#D7E2EA]/10 rounded-xl p-6
                hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.06] transition-all duration-200 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{ach.icon}</span>
                  <span className="text-[#D7E2EA]/30 text-xs font-medium uppercase tracking-wider">{ach.year}</span>
                </div>
                <h3 className="text-[#D7E2EA] font-semibold text-sm sm:text-base mb-2 leading-snug">
                  {ach.title}
                </h3>
                <p className="text-[#D7E2EA]/45 text-xs sm:text-sm font-light leading-relaxed flex-1">
                  {ach.subtitle}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
