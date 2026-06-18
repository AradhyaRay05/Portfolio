import React, { useRef, useState, useEffect } from 'react'

interface TechItem {
  name: string
  icon: string
  color: string
}

const row1Items: TechItem[] = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3776AB' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: '#47A248' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', color: '#ED8B00' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', color: '#FFFFFF' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', color: '#1572B6' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#F05032' },
]

const row2Items: TechItem[] = [
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', color: '#150458' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', color: '#013243' },
  { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', color: '#F7931E' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#4479A1' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#FF9900' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', color: '#FCC624' },
  { name: 'Streamlit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg', color: '#FF4B4B' },
  { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg', color: '#11557C' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', color: '#007ACC' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: '#2496ED' },
]

// Triple for seamless scrolling
const row1Tripled = [...row1Items, ...row1Items, ...row1Items]
const row2Tripled = [...row2Items, ...row2Items, ...row2Items]

const TechCard: React.FC<{ item: TechItem }> = ({ item }) => (
  <div
    className="w-[280px] sm:w-[320px] md:w-[360px] h-[180px] sm:h-[200px] md:h-[220px] rounded-2xl flex-shrink-0 flex flex-col items-center justify-center gap-4 border border-white/10"
    style={{
      background: `radial-gradient(ellipse at bottom, ${item.color}15 0%, #0C0C0C 70%)`,
    }}
  >
    <img
      src={item.icon}
      alt={item.name}
      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
      loading="lazy"
    />
    <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base">
      {item.name}
    </span>
  </div>
)

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.offsetTop
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(raw)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - moves right */}
      <div className="flex gap-3 mb-3" style={{
        transform: `translateX(${offset - 200}px)`,
        willChange: 'transform',
      }}>
        {row1Tripled.map((item, i) => (
          <TechCard key={`r1-${i}`} item={item} />
        ))}
      </div>

      {/* Row 2 - moves left */}
      <div className="flex gap-3" style={{
        transform: `translateX(${-(offset - 200)}px)`,
        willChange: 'transform',
      }}>
        {row2Tripled.map((item, i) => (
          <TechCard key={`r2-${i}`} item={item} />
        ))}
      </div>
    </section>
  )
}

export default MarqueeSection
