import React, { useState } from 'react'
import { FadeIn } from '../components/ui'

interface Skill {
  name: string
  icon: string
}

interface Category {
  name: string
  color: string
  skills: Skill[]
}

const d = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const categories: Category[] = [
  {
    name: 'Languages',
    color: '#3776AB',
    skills: [
      { name: 'Python', icon: `${d}/python/python-original.svg` },
      { name: 'JavaScript', icon: `${d}/javascript/javascript-original.svg` },
      { name: 'Java', icon: `${d}/java/java-original.svg` },
      { name: 'C', icon: `${d}/c/c-original.svg` },
      { name: 'HTML5', icon: `${d}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${d}/css3/css3-original.svg` },
    ],
  },
  {
    name: 'AI & Machine Learning',
    color: '#FF6F00',
    skills: [
      { name: 'TensorFlow', icon: `${d}/tensorflow/tensorflow-original.svg` },
      { name: 'Scikit-learn', icon: `${d}/scikitlearn/scikitlearn-original.svg` },
      { name: 'Hugging Face', icon: `${d}/python/python-original.svg` },
      { name: 'NLP', icon: `${d}/python/python-original.svg` },
      { name: 'Deep Learning', icon: `${d}/tensorflow/tensorflow-original.svg` },
    ],
  },
  {
    name: 'Data Science',
    color: '#150458',
    skills: [
      { name: 'Pandas', icon: `${d}/pandas/pandas-original.svg` },
      { name: 'NumPy', icon: `${d}/numpy/numpy-original.svg` },
      { name: 'Matplotlib', icon: `${d}/matplotlib/matplotlib-original.svg` },
      { name: 'Seaborn', icon: `${d}/python/python-original.svg` },
      { name: 'Jupyter', icon: `${d}/jupyter/jupyter-original.svg` },
    ],
  },
  {
    name: 'Web Development',
    color: '#61DAFB',
    skills: [
      { name: 'React', icon: `${d}/react/react-original.svg` },
      { name: 'Node.js', icon: `${d}/nodejs/nodejs-original.svg` },
      { name: 'Express', icon: `${d}/express/express-original.svg` },
      { name: 'Flask', icon: `${d}/flask/flask-original.svg` },
      { name: 'Next.js', icon: `${d}/nextjs/nextjs-original.svg` },
      { name: 'Streamlit', icon: `${d}/streamlit/streamlit-original.svg` },
      { name: 'Tailwind', icon: `${d}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    name: 'Databases',
    color: '#47A248',
    skills: [
      { name: 'MongoDB', icon: `${d}/mongodb/mongodb-original.svg` },
      { name: 'MySQL', icon: `${d}/mysql/mysql-original.svg` },
    ],
  },
  {
    name: 'Cloud & Tools',
    color: '#FF9900',
    skills: [
      { name: 'AWS', icon: `${d}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Docker', icon: `${d}/docker/docker-original.svg` },
      { name: 'Linux', icon: `${d}/linux/linux-original.svg` },
      { name: 'VS Code', icon: `${d}/vscode/vscode-original.svg` },
      { name: 'Vim', icon: `${d}/vim/vim-original.svg` },
    ],
  },
  {
    name: 'Cyber Security',
    color: '#E53E3E',
    skills: [
      { name: 'Nmap', icon: `${d}/linux/linux-original.svg` },
      { name: 'Burp Suite', icon: `${d}/linux/linux-original.svg` },
      { name: 'Wireshark', icon: `${d}/linux/linux-original.svg` },
      { name: 'SQLmap', icon: `${d}/linux/linux-original.svg` },
    ],
  },
  {
    name: 'Version Control',
    color: '#F05032',
    skills: [
      { name: 'Git', icon: `${d}/git/git-original.svg` },
      { name: 'GitHub', icon: `${d}/github/github-original.svg` },
    ],
  },
]

const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? categories.filter((c) => c.name === activeCategory)
    : categories

  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="skills">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none mb-6 sm:mb-8"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
          >
            Tech Stack
          </h2>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer
                ${!activeCategory
                  ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                  : 'border border-[#D7E2EA]/20 text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:border-[#D7E2EA]/50'
                }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
                className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer
                  ${activeCategory === cat.name
                    ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                    : 'border border-[#D7E2EA]/20 text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:border-[#D7E2EA]/50'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Categories Grid */}
        <div className="space-y-10 sm:space-y-12">
          {filtered.map((cat, ci) => (
            <FadeIn key={cat.name} delay={ci * 0.05} y={20}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
                  <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-sm sm:text-base">
                    {cat.name}
                  </h3>
                  <div className="flex-1 h-px bg-[#D7E2EA]/10" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 bg-[#D7E2EA]/5 border border-[#D7E2EA]/10
                        rounded-xl px-4 py-2.5 hover:border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/8
                        transition-all duration-200 group"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                      <span className="text-[#D7E2EA]/70 text-sm font-medium group-hover:text-[#D7E2EA] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
