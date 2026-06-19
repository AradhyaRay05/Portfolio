import React from 'react'
import { FadeIn } from '../components/ui'

interface Experience {
  num: string
  role: string
  company: string
  type: string
  period: string
  bullets: string[]
  tech: string[]
}

const experiences: Experience[] = [
  {
    num: '01',
    role: 'Internet of Things Intern',
    company: 'Emertxe Information Technologies',
    type: 'Internship',
    period: 'Sep 2025 – Nov 2025',
    bullets: [
      'Worked on IoT-based embedded systems projects integrating hardware sensors with software applications.',
      'Gained practical experience in microcontroller programming, sensor data acquisition, and real-time system design.',
      'Developed end-to-end IoT solutions bridging hardware interfacing with cloud-based monitoring dashboards.',
    ],
    tech: ['IoT', 'Embedded Systems', 'Python', 'Sensors'],
  },
  {
    num: '02',
    role: 'AI & ML Engineering Intern',
    company: 'Xeta Labs Pvt. Ltd.',
    type: 'Internship',
    period: 'Jun 2025 – Sep 2025',
    bullets: [
      'Built an NLP-based contextual autocomplete and sentence-completion model that provides real-time word, phrase, and sentence suggestions with variable-length completions.',
      'Fine-tuned transformer-based language models using Hugging Face and TensorFlow to generate context-aware predictions, pausing after full stops and resuming on user input.',
      'Engineered the inference pipeline for low-latency predictions suitable for production text editor integration.',
    ],
    tech: ['Python', 'NLP', 'Transformers', 'Hugging Face', 'TensorFlow'],
  },
  {
    num: '03',
    role: 'Web Development Intern',
    company: 'Edunet Foundation',
    type: 'Internship',
    period: 'Aug 2025 – Sep 2025',
    bullets: [
      'Developed Quizora — a full-stack AI-powered quiz generation platform that dynamically creates topic-based assessments using large language models.',
      'Designed and implemented the system architecture using React.js, Node.js, Express.js, and MongoDB, integrating multiple AI models for quiz generation.',
      'Built an interactive interface for creating, storing, and retrieving quizzes with user authentication and progress tracking.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'LLMs'],
  },
  {
    num: '04',
    role: 'Linux Intern',
    company: 'WEBEL (West Bengal Electronics Industry Development Corporation)',
    type: 'Internship',
    period: 'Jun 2025 – Jul 2025',
    bullets: [
      'Gained hands-on experience in Linux system administration including command-line operations, file management, and process control.',
      'Worked on user management, shell scripting automation, and basic networking tasks to strengthen system-level problem-solving skills.',
    ],
    tech: ['Linux', 'Shell Scripting', 'System Administration', 'Networking'],
  },
  {
    num: '05',
    role: 'AI & ML Intern',
    company: 'Edulyt India Pvt. Ltd.',
    type: 'Internship',
    period: 'May 2025 – Jun 2025',
    bullets: [
      'Performed data cleaning and transformation on a credit banking dataset using Python, identifying key customer segments and calculating interest metrics.',
      'Applied feature engineering and validation techniques to prepare data for machine learning pipelines, gaining hands-on experience with Pandas and scikit-learn.',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering'],
  },
  {
    num: '06',
    role: 'Cyber Security Intern',
    company: 'Dataspace Academy',
    type: 'Internship',
    period: 'Jun 2024 – Jul 2024',
    bullets: [
      'Conducted network and web application vulnerability assessments using industry-standard tools including Nmap, Burp Suite, Wireshark, and SQLmap.',
      'Identified and reported security flaws through structured VAPT (Vulnerability Assessment and Penetration Testing) reports, including scanning, exploitation, and enumeration of sensitive information.',
    ],
    tech: ['Nmap', 'Burp Suite', 'Wireshark', 'SQLmap', 'VAPT'],
  },
  {
    num: '07',
    role: 'Data Analyst Intern',
    company: 'Edulyt India Pvt. Ltd.',
    type: 'Internship',
    period: 'Jun 2023 – Sep 2023',
    bullets: [
      'Implemented data validation and preprocessing techniques to clean and structure raw financial datasets, ensuring accurate and reliable data for analysis.',
      'Performed analytical visualization to examine revenue, discounts, orders, payment methods, and return patterns, generating actionable business insights.',
      'Delivered a Banking Data Cleaning & Business Insights Dashboard using Python, Pandas, NumPy, and Excel.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Excel', 'Data Visualization'],
  },
]

const ExperienceSection: React.FC = () => {
  return (
    <section
      className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ borderRadius: '40px 40px 0 0' }}
      id="experience"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
          >
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.num} delay={i * 0.06} y={25}>
              <div
                className="py-8 sm:py-10 md:py-12"
                style={{
                  borderBottom: '1px solid rgba(12, 12, 12, 0.12)',
                  ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.12)' } : {}),
                }}
              >
                <div className="flex items-start gap-4 sm:gap-6 md:gap-10">
                  <span
                    className="font-black text-[#0C0C0C]/15 leading-none flex-shrink-0 hidden sm:block"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
                  >
                    {exp.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h3
                        className="font-semibold text-[#0C0C0C] uppercase tracking-wide"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
                      >
                        {exp.role}
                      </h3>
                      <span className="text-[#0C0C0C]/50 text-sm font-light flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#0C0C0C]/60 text-sm sm:text-base font-light mb-3">
                      {exp.company} · {exp.type}
                    </p>
                    <ul className="space-y-1.5 mb-4">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="text-[#0C0C0C]/55 text-sm sm:text-base font-light leading-relaxed flex gap-2">
                          <span className="text-[#0C0C0C]/30 mt-1.5 flex-shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-[#0C0C0C]/5 text-[#0C0C0C]/60 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
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
