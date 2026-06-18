import React from 'react'
import { FadeIn } from '../components/ui'

const services = [
  {
    num: '01',
    name: '3D Modeling',
    desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    num: '02',
    name: 'Rendering',
    desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    num: '03',
    name: 'Motion Design',
    desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    num: '04',
    name: 'Branding',
    desc: 'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
  },
  {
    num: '05',
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

const ServicesSection: React.FC = () => {
  return (
    <section
      className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ borderRadius: '40px 40px 0 0' }}
      id="services"
    >
      <div className="sm:rounded-t-[50px] md:rounded-t-[60px]">
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.1} y={30}>
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
                  {service.num}
                </span>
                <div className="flex flex-col justify-center pt-2 sm:pt-4 md:pt-6">
                  <span
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </span>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 mt-2"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.desc}
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

export default ServicesSection
