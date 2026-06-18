import React from 'react'
import { FadeIn } from '../components/ui'

const experiences = [
  {
    num: '01',
    name: 'AI & ML Engineering Intern',
    company: 'Xeta Labs Pvt. Ltd.',
    period: 'Jun 2025 – Sep 2025',
    desc: 'Built an NLP-based contextual autocomplete and sentence-completion model providing real-time suggestions using Transformers, Hugging Face, and TensorFlow.',
  },
  {
    num: '02',
    name: 'Web Development Intern',
    company: 'Edunet Foundation',
    period: 'Aug 2025 – Sep 2025',
    desc: 'Developed Quizora — an AI-powered quiz generation platform using React.js, Node.js, Express.js, and MongoDB, integrating LLMs for dynamic question generation.',
  },
  {
    num: '03',
    name: 'AI & ML Intern',
    company: 'Edulyt India Pvt. Ltd.',
    period: 'May 2025 – Jun 2025',
    desc: 'Performed data cleaning and feature engineering on credit banking datasets using Python, Pandas, and scikit-learn for machine learning pipeline preparation.',
  },
  {
    num: '04',
    name: 'Data Analyst Intern',
    company: 'Edulyt India Pvt. Ltd.',
    period: 'Jun 2023 – Sep 2023',
    desc: 'Implemented data validation and preprocessing on financial datasets, performed analytical visualization for revenue, orders, and return patterns.',
  },
]

const ExperienceSection: React.FC = () => {
  return (
    <section
      className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ borderRadius: '40px 40px 0 0' }}
      id="experience"
    >
      <div className="sm:rounded-t-[50px] md:rounded-t-[60px]">
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Experience
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.num} delay={i * 0.1} y={30}>
              <div
                className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
                style={{
                  borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                  ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : {}),
                }}
              >
                <span
                  className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {exp.num}
                </span>
                <div className="flex flex-col justify-center pt-2 sm:pt-4 md:pt-6">
                  <span
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {exp.name}
                  </span>
                  <span
                    className="font-light text-[#0C0C0C] opacity-80 mt-1"
                    style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
                  >
                    {exp.company} · {exp.period}
                  </span>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 mt-2"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
