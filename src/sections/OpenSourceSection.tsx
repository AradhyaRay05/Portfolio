import React from 'react'
import { FadeIn } from '../components/ui'

interface Contribution {
  icon: string
  project: string
  desc: string
  type: string
  link?: string
}

const contributions: Contribution[] = [
  {
    icon: '🗺️',
    project: 'Nominatim (OpenStreetMap)',
    desc: 'Contributed to the widely-used open-source geocoding engine that powers location search across millions of applications worldwide.',
    type: 'Fork & Contribute',
    link: 'https://github.com/AradhyaRay05/Nominatim',
  },
  {
    icon: '🎓',
    project: 'Stanford Code in Place',
    desc: 'Completed the Stanford University program — an introductory Python course taught by Stanford CS faculty to a global cohort.',
    type: 'Program Participant',
    link: 'https://github.com/AradhyaRay05/Code-In-Place-Final-Project',
  },
  {
    icon: '📊',
    project: '20+ Open-Source ML Tools',
    desc: 'Built and publicly deployed over 20 machine learning applications on Streamlit — all open source with full code on GitHub.',
    type: 'Project Author',
    link: 'https://github.com/AradhyaRay05?tab=repositories',
  },
  {
    icon: '🤝',
    project: 'Community Engagement',
    desc: 'Active GitHub contributor with 500+ LinkedIn connections, engaging with the developer community through discussions, code reviews, and knowledge sharing.',
    type: 'Community',
    link: 'https://github.com/AradhyaRay05',
  },
]

const OpenSourceSection: React.FC = () => {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="opensource">
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Open Source
          </h2>
          <p className="text-[#D7E2EA]/40 text-center text-sm sm:text-base font-light mb-14 sm:mb-18">
            Contributing to the community that taught me to code
          </p>
        </FadeIn>

        <div className="space-y-4 sm:space-y-5">
          {contributions.map((c, i) => (
            <FadeIn key={c.project} delay={i * 0.08} y={20}>
              <div className="bg-[#D7E2EA]/[0.03] border border-[#D7E2EA]/10 rounded-xl p-5 sm:p-6
                hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.06] transition-all duration-200
                flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">{c.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 mb-1.5">
                    <h3 className="text-[#D7E2EA] font-semibold text-sm sm:text-base">{c.project}</h3>
                    <span className="text-[#D7E2EA]/25 text-xs font-medium uppercase tracking-wider flex-shrink-0">{c.type}</span>
                  </div>
                  <p className="text-[#D7E2EA]/45 text-xs sm:text-sm font-light leading-relaxed">{c.desc}</p>
                </div>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D7E2EA]/30 hover:text-[#D7E2EA] transition-colors text-sm flex-shrink-0"
                  >
                    ↗
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenSourceSection
