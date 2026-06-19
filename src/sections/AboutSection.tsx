import React from 'react'
import { FadeIn, AnimatedText } from '../components/ui'

const aboutText =
  "I'm Aradhya — a Computer Science student at The Neotia University, Kolkata, specializing in Artificial Intelligence and Machine Learning. Over the past two years, I've worked across AI engineering, web development, data analytics, and cybersecurity through multiple internships. I was selected for the Grand Finale of Smart India Hackathon 2025 and placed 2nd at PARIKALPANA's Software Hackathon. I build tools that tackle real challenges — from predicting diabetes risk to recommending crops for farmers. When I'm not writing code, I contribute to open-source projects and explore new ways to make technology more accessible."

const AboutSection: React.FC = () => {
  return (
    <section
      className="min-h-[80vh] flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      id="about"
    >
      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10 max-w-4xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px]"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
        />

        <FadeIn delay={0.2} y={20}>
          <div className="flex flex-wrap gap-3 justify-center">
            {['AI/ML Engineering', 'Full-Stack Development', 'Data Analytics', 'Open Source', 'Cybersecurity'].map((tag) => (
              <span
                key={tag}
                className="text-[#D7E2EA]/60 border border-[#D7E2EA]/20 rounded-full px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default AboutSection
