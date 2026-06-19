import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn } from '../components/ui'

interface Project {
  num: string
  category: string
  name: string
  desc: string
  problem: string
  tech: string[]
  github: string
  live: string | null
  gradient: string
}

const projects: Project[] = [
  {
    num: '01',
    category: 'AI / Full-Stack',
    name: 'VidyutAI',
    desc: 'AI-powered energy consumption tracker designed for Indian households. Monitors, analyzes, and predicts electricity usage with machine learning models.',
    problem: 'Helping households understand and reduce energy consumption through intelligent predictions.',
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Data Analysis'],
    github: 'https://github.com/AradhyaRay05/VidyutAI',
    live: 'https://vidyutai.duckdns.org',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    num: '02',
    category: 'Healthcare AI',
    name: 'GlucoScope ML',
    desc: 'Machine learning-based diabetes prediction tool offering real-time health insights through an interactive Streamlit dashboard with data visualizations.',
    problem: 'Enabling early diabetes risk detection using patient health parameters and ML classification.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Matplotlib'],
    github: 'https://github.com/AradhyaRay05/GlucoScope-ML',
    live: 'https://glucoscope-ml.streamlit.app',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    num: '03',
    category: 'Full-Stack / AI',
    name: 'Quizora',
    desc: 'Full-stack AI-powered quiz generation platform that dynamically creates topic-based assessments using large language models with user authentication and progress tracking.',
    problem: 'Automating quiz creation for educators by leveraging LLMs for dynamic question generation.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'LLMs'],
    github: 'https://github.com/AradhyaRay05/Quizora',
    live: 'https://quizora-web.netlify.app/',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
  {
    num: '04',
    category: 'Deep Learning',
    name: 'GeoQuakePredict',
    desc: 'Deep learning web app that predicts earthquake depth and magnitude based on geographical and seismic features using neural network regression models.',
    problem: 'Assisting geoscientists with earthquake magnitude and depth estimation from historical seismic data.',
    tech: ['Python', 'Deep Learning', 'TensorFlow', 'Streamlit', 'Pandas'],
    github: 'https://github.com/AradhyaRay05/GeoQuakePredict',
    live: 'https://geoquakepredict.streamlit.app/',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    num: '05',
    category: 'AgriTech AI',
    name: 'SmartCropAdvisor',
    desc: 'Crop and fertilizer recommendation system achieving 99% accuracy using Decision Tree classifiers based on soil composition and weather conditions.',
    problem: 'Helping farmers select optimal crops by analyzing soil nutrients, pH, rainfall, and temperature.',
    tech: ['Python', 'Decision Tree', 'Pandas', 'Seaborn', 'Streamlit'],
    github: 'https://github.com/AradhyaRay05/SmartCropAdvisor',
    live: 'https://smartcropadvisor.streamlit.app/',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
  {
    num: '06',
    category: 'Healthcare AI',
    name: 'HeartGuardAI',
    desc: 'AI-driven web app that predicts heart disease likelihood using patient health data through a classification model deployed with an interactive Streamlit interface.',
    problem: 'Enabling proactive cardiovascular health monitoring through ML-based risk assessment.',
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-learn'],
    github: 'https://github.com/AradhyaRay05/HeartGuardAI',
    live: 'https://heartguardai.streamlit.app/',
    gradient: 'linear-gradient(135deg, #ff6a88 0%, #ff99ac 100%)',
  },
  {
    num: '07',
    category: 'Hackathon',
    name: 'Swan Botanicals',
    desc: 'Hackathon project for the "Build for Botanicals" challenge — a botanical products e-commerce platform with modern responsive design and product showcase.',
    problem: 'Creating a professional digital presence for botanical product businesses during a hackathon.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/AradhyaRay05/Swan-Botanicals',
    live: 'https://swan-botanicals-website.vercel.app/',
    gradient: 'linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 50%, #c3cfe2 100%)',
  },
  {
    num: '08',
    category: 'NLP / AI',
    name: 'Contextual Autocomplete',
    desc: 'NLP-based contextual autocomplete and sentence-completion model providing real-time suggestions using fine-tuned transformers. Built during Xeta Labs internship.',
    problem: 'Enhancing text editor productivity with context-aware word, phrase, and sentence completions.',
    tech: ['Python', 'Transformers', 'Hugging Face', 'TensorFlow', 'NLP'],
    github: 'https://github.com/AradhyaRay05/Contextual_Autocomplete',
    live: null,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
]

interface ProjectCardProps {
  project: Project
  index: number
  totalCards: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.02
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} className="h-[70vh] sm:h-[75vh]" style={{ top: `${index * 25}px` }}>
      <motion.div
        style={{ scale }}
        className="sticky top-20 md:top-24
          rounded-2xl sm:rounded-3xl
          border border-[#D7E2EA]/15 bg-[#111118]
          p-5 sm:p-6 md:p-8
          origin-top"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#D7E2EA]/20 font-black text-2xl sm:text-3xl">{project.num}</span>
              <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/50">
                {project.category}
              </span>
            </div>
            <h3
              className="text-[#D7E2EA] font-bold uppercase tracking-tight"
              style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)' }}
            >
              {project.name}
            </h3>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/80
                  font-medium uppercase tracking-widest
                  px-4 py-2 sm:px-6 sm:py-2.5
                  text-xs
                  hover:bg-[#D7E2EA]/10 hover:text-[#D7E2EA] transition-all duration-200"
              >
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/60
                font-medium uppercase tracking-widest
                px-4 py-2 sm:px-6 sm:py-2.5
                text-xs
                hover:bg-[#D7E2EA]/10 hover:text-[#D7E2EA] transition-all duration-200"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
          {/* Visual */}
          <div
            className="md:col-span-2 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-5 sm:p-6 min-h-[160px] sm:min-h-[200px]"
            style={{ background: project.gradient }}
          >
            <span className="text-white/90 font-black uppercase text-xl sm:text-2xl md:text-3xl tracking-tight text-center leading-tight">
              {project.name}
            </span>
            <div className="flex flex-wrap gap-1.5 mt-3 justify-center">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="bg-white/20 text-white text-xs px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <p className="text-[#D7E2EA]/75 text-sm sm:text-base font-light leading-relaxed mb-3">
                {project.desc}
              </p>
              <p className="text-[#D7E2EA]/45 text-xs sm:text-sm font-light leading-relaxed italic">
                Problem: {project.problem}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[#D7E2EA]/40 bg-[#D7E2EA]/5 text-xs font-medium px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
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
        rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px]
        -mt-8 sm:-mt-10 md:-mt-12 relative z-10"
      id="projects"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none mb-4 sm:mb-6"
          style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
        >
          Projects
        </h2>
        <p className="text-[#D7E2EA]/40 text-center text-sm sm:text-base font-light mb-16 sm:mb-20">
          Featured work — selected for technical depth and real-world impact
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
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
