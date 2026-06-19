import React, { useState, useEffect } from 'react'
import { FadeIn } from '../components/ui'

interface GitHubStats {
  publicRepos: number
  followers: number
  following: number
}

const GitHubSection: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const username = 'AradhyaRay05'

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setStats({
          publicRepos: data.public_repos,
          followers: data.followers,
          following: data.following,
        })
      })
      .catch(() => {})
  }, [])

  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="github">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            GitHub
          </h2>
          <p className="text-[#D7E2EA]/40 text-center text-sm sm:text-base font-light mb-12 sm:mb-16">
            Open source contributions and development activity
          </p>
        </FadeIn>

        {/* Stats Cards */}
        {stats && (
          <FadeIn delay={0.1} y={20}>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto mb-10 sm:mb-14">
              {[
                { label: 'Repositories', value: stats.publicRepos },
                { label: 'Followers', value: stats.followers },
                { label: 'Following', value: stats.following },
              ].map(s => (
                <div key={s.label} className="bg-[#D7E2EA]/[0.03] border border-[#D7E2EA]/10 rounded-xl p-4 text-center">
                  <span className="text-[#D7E2EA] font-bold text-2xl sm:text-3xl block">{s.value}</span>
                  <span className="text-[#D7E2EA]/35 text-xs uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* GitHub Stats Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
          <FadeIn delay={0.15} y={20}>
            <div className="bg-[#D7E2EA]/[0.03] border border-[#D7E2EA]/10 rounded-xl p-4 flex items-center justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=D7E2EA&text_color=a0adb8&icon_color=7621B0&bg_color=00000000`}
                alt="GitHub Stats"
                className="w-full max-w-[400px] h-auto"
                loading="lazy"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <div className="bg-[#D7E2EA]/[0.03] border border-[#D7E2EA]/10 rounded-xl p-4 flex items-center justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=D7E2EA&text_color=a0adb8&bg_color=00000000`}
                alt="Top Languages"
                className="w-full max-w-[400px] h-auto"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* Streak */}
        <FadeIn delay={0.25} y={20}>
          <div className="bg-[#D7E2EA]/[0.03] border border-[#D7E2EA]/10 rounded-xl p-4 flex items-center justify-center mb-8">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=7621B0&fire=B600A8&currStreakLabel=D7E2EA&sideLabels=a0adb8&dates=a0adb8&currStreakNum=D7E2EA&sideNums=D7E2EA&background=00000000`}
              alt="GitHub Streak"
              className="w-full max-w-[700px] h-auto"
              loading="lazy"
            />
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3} y={15}>
          <div className="text-center">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/70
                font-medium uppercase tracking-widest px-6 py-3 text-xs sm:text-sm
                hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-all duration-200"
            >
              View Full Profile ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default GitHubSection
