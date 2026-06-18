import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn } from '../components/ui'

const projects = [
  {
    num: '01',
    category: 'AI / NLP',
    name: 'TalentScope AI',
    desc: 'AI-powered talent analytics platform with intelligent resume parsing and candidate matching.',
    tech: ['React', 'Node.js', 'Machine Learning', 'NLP'],
    github: 'https://github.com/AradhyaRay05/TalentScope_AI',
    live: 'https://talent-scope-ai.vercel.app',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    num: '02',
    category: 'Healthcare AI',
    name: 'GlucoScope ML',
    desc: 'Diabetes prediction tool using machine learning, offering real-time insights via Streamlit.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/AradhyaRay05/GlucoScope-ML',
    live: 'https://glucoscope-ml.streamlit.app',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    num: '03',
    category: 'AgriTech AI',
    name: 'SmartCropAdvisor',
    desc: 'Crop & fertilizer recommendation system with 99% accuracy based on soil and weather analysis.',
    tech: ['Python', 'Decision Tree', 'Pandas', 'Seaborn'],
    github: 'https://github.com/AradhyaRay05/SmartCropAdvisor',
    live: null,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
]

/* ─── Gradient Project Visual (replaces external images) ─── */
const ProjectVisual: React.FC<{ project: typeof projects[number]; size: 'sm' | 'lg' }> = ({ project, size }) => (
  <div
    className={`w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex flex-col items-center justify-center p-4 sm:p-6`}
    style={{
      background: project.gradient,
      height: size === 'sm' ? 'clamp(130px, 16vw, 230px)' : size === 'lg' ? '100%' : 'clamp(160px, 22vw, 340px)',
      minHeight: size === 'lg' ? 'clamp(300px, 40vw, 580px)' : undefined,
    }}
  >
    <span className="text-white/90 font-black uppercase text-xl sm:text-2xl md:text-4xl tracking-tight text-center leading-tight">
      {project.name}
    </span>
    <div className="flex flex-wrap gap-2 mt-3 justify-center">
      {project.tech.slice(0, size === 'sm' ? 2 : 4).map((t) => (
        <span key={t} className="bg-white/20 text-white text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-sm">
          {t}
        </span>
      ))}
    </div>
  </div>
)

interface ProjectCardProps {
  project: typeof projects[number]
  index: number
  totalCards: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} className="h-[85vh]" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="sticky top-24 md:top-32
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-[#D7E2EA] bg-[#0C0C0C]
          p-4 sm:p-6 md:p-8
          origin-top"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 text-sm sm:text-base uppercase tracking-wider font-light">
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
                  font-medium uppercase tracking-widest
                  px-6 py-2.5 sm:px-8 sm:py-3
                  text-xs sm:text-sm
                  hover:bg-[#D7E2EA]/10 transition-colors duration-200"
              >
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA]/70
                font-medium uppercase tracking-widest
                px-6 py-2.5 sm:px-8 sm:py-3
                text-xs sm:text-sm
                hover:bg-[#D7E2EA]/10 hover:text-[#D7E2EA] transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Visual grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          {/* Left column - 40% */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6">
            <ProjectVisual project={project} size="sm" />
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#1a1a2e] border border-white/10 p-4 sm:p-6 flex flex-col justify-center"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-[#D7E2EA]/50 text-xs font-medium uppercase tracking-wider">
                    {t} ·
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Right column - 60% */}
          <div className="w-[60%]">
            <ProjectVisual project={project} size="lg" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const ProjectsSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-10"
      id="projects"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
