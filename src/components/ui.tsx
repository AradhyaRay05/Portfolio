import React from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

/* ─── FadeIn Component ─── */
interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
}) => {
  const Component = motion.create(as as any)
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}

/* ─── Magnet Component ─── */
interface MagnetProps {
  children: React.ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [style, setStyle] = React.useState<React.CSSProperties>({
    transition: inactiveTransition,
    willChange: 'transform',
  })

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const threshold = Math.max(rect.width, rect.height) / 2 + padding

      if (dist < threshold) {
        setStyle({
          transform: `translate3d(${dx / strength}px, ${dy / strength}px, 0)`,
          transition: activeTransition,
          willChange: 'transform',
        })
      } else {
        setStyle({
          transform: 'translate3d(0, 0, 0)',
          transition: inactiveTransition,
          willChange: 'transform',
        })
      }
    }

    const handleMouseLeave = () => {
      setStyle({
        transform: 'translate3d(0, 0, 0)',
        transition: inactiveTransition,
        willChange: 'transform',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

/* ─── AnimatedText (Character-by-character scroll reveal) ─── */
interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

interface WordProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const chars = children.split('')
  const amount = range[1] - range[0]
  const step = amount / chars.length
  return (
    <span className="inline-block mr-[0.25em]">
      {chars.map((char, i) => {
        const start = range[0] + i * step
        const end = start + step
        return <Char key={i} progress={progress} range={[start, end]}>{char}</Char>
      })}
    </span>
  )
}

interface CharProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{children}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {children}
      </motion.span>
    </span>
  )
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = React.useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  const totalChars = text.replace(/ /g, '').length
  let charIndex = 0

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const wordChars = word.length
        const start = charIndex / totalChars
        const end = (charIndex + wordChars) / totalChars
        charIndex += wordChars
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

/* ─── ContactButton ─── */
export const ContactButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <button
    className={`rounded-full font-medium uppercase tracking-widest text-white
      px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
      text-xs sm:text-sm md:text-base
      cursor-pointer ${className}`}
    style={{
      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      outline: '2px solid white',
      outlineOffset: '-3px',
    }}
  >
    Contact Me
  </button>
)

/* ─── LiveProjectButton ─── */
export const LiveProjectButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <button
    className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
      font-medium uppercase tracking-widest
      px-8 py-3 sm:px-10 sm:py-3.5
      text-sm sm:text-base
      hover:bg-[#D7E2EA]/10 transition-colors duration-200
      cursor-pointer ${className}`}
  >
    Live Project
  </button>
)
