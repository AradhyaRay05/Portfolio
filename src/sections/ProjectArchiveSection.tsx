import React, { useState, useEffect, useMemo } from 'react'
import { FadeIn } from '../components/ui'

interface Repo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
  topics: string[]
}

const EXCLUDE = [
  'TalentScope_AI',
  'AradhyaRay05',
  'HTML_Resume_Page_Assignment',
  'Resume_Website',
]

// Repos already featured — still shown but with "Featured" badge
const FEATURED = [
  'VidyutAI', 'GlucoScope-ML', 'Quizora', 'GeoQuakePredict',
  'SmartCropAdvisor', 'HeartGuardAI', 'Swan-Botanicals', 'Contextual_Autocomplete',
]

const CATEGORY_MAP: Record<string, string[]> = {
  'AI & ML': ['python', 'jupyter notebook', 'tensorflow', 'scikit-learn', 'ml', 'ai', 'predict', 'deep learning', 'nlp'],
  'Data Science': ['data', 'analysis', 'pandas', 'numpy', 'visualization', 'cleaning'],
  'Web Dev': ['javascript', 'html', 'css', 'react', 'node', 'next', 'web', 'clone', 'frontend'],
  'Full Stack': ['mongodb', 'express', 'fullstack', 'full-stack', 'mern'],
  'Cyber Security': ['security', 'nmap', 'burp', 'wireshark', 'cyber', 'vulnerability'],
  'Open Source': ['open-source', 'nominatim', 'openstreetmap', 'contribution'],
}

function classifyRepo(repo: Repo): string {
  const text = `${repo.name} ${repo.description || ''} ${repo.language || ''} ${repo.topics.join(' ')}`.toLowerCase()
  for (const [cat, keywords] of Object.entries(CATEGORY_MAP)) {
    if (keywords.some(k => text.includes(k))) return cat
  }
  return 'Other'
}

const FILTER_TABS = ['All', 'AI & ML', 'Data Science', 'Web Dev', 'Full Stack', 'Cyber Security', 'Open Source', 'Other']

const ProjectArchiveSection: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/AradhyaRay05/repos?per_page=100&sort=updated')
      .then(res => res.json())
      .then((data: Repo[]) => {
        const filtered = data.filter(r =>
          !EXCLUDE.includes(r.name) &&
          !r.fork &&
          r.name !== 'AradhyaRay05'
        )
        setRepos(filtered)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const classified = useMemo(() => repos.map(r => ({
    ...r,
    category: classifyRepo(r),
    isFeatured: FEATURED.includes(r.name),
  })), [repos])

  const displayed = useMemo(() => {
    let result = classified
    if (filter !== 'All') result = result.filter(r => r.category === filter)
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(r =>
        r.name.toLowerCase().includes(q) ||
        (r.description || '').toLowerCase().includes(q) ||
        (r.language || '').toLowerCase().includes(q)
      )
    }
    return result
  }, [classified, filter, search])

  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="archive">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none mb-3"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            All Projects
          </h2>
          <p className="text-[#D7E2EA]/40 text-center text-sm sm:text-base font-light mb-10 sm:mb-14">
            Complete repository archive — {repos.length} public projects and counting
          </p>
        </FadeIn>

        {/* Search */}
        <FadeIn delay={0.1} y={20}>
          <div className="max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Search projects by name, tech, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-5 py-3
                text-[#D7E2EA] text-sm placeholder:text-[#D7E2EA]/30
                focus:outline-none focus:border-[#D7E2EA]/40 transition-colors"
            />
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.15} y={15}>
          <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
            {FILTER_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer
                  ${filter === tab
                    ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                    : 'border border-[#D7E2EA]/15 text-[#D7E2EA]/50 hover:text-[#D7E2EA] hover:border-[#D7E2EA]/40'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        {loading ? (
          <div className="text-center text-[#D7E2EA]/40 py-20">
            <div className="inline-block w-8 h-8 border-2 border-[#D7E2EA]/20 border-t-[#D7E2EA]/60 rounded-full animate-spin" />
            <p className="mt-4 text-sm">Loading from GitHub...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayed.map((repo) => (
              <FadeIn key={repo.name} delay={0} y={15}>
                <div className="bg-[#D7E2EA]/[0.03] border border-[#D7E2EA]/10 rounded-xl p-5
                  hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.06] transition-all duration-200 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-[#D7E2EA] font-semibold text-sm sm:text-base leading-snug">
                      {repo.name.replace(/_/g, ' ').replace(/-/g, ' ')}
                    </h4>
                    {repo.isFeatured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 border border-purple-400/30 rounded-full px-2 py-0.5 flex-shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-[#D7E2EA]/45 text-xs sm:text-sm font-light leading-relaxed flex-1 mb-3 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      {repo.language && (
                        <span className="text-[#D7E2EA]/35 text-xs font-medium flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#D7E2EA]/25" />
                          {repo.language}
                        </span>
                      )}
                      <span className="text-[#D7E2EA]/25 text-xs">
                        {repo.category}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D7E2EA]/40 text-xs hover:text-[#D7E2EA] transition-colors"
                        >
                          Live ↗
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D7E2EA]/40 text-xs hover:text-[#D7E2EA] transition-colors"
                      >
                        Code ↗
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {!loading && displayed.length === 0 && (
          <p className="text-center text-[#D7E2EA]/30 py-16 text-sm">
            No projects found matching your search.
          </p>
        )}
      </div>
    </section>
  )
}

export default ProjectArchiveSection
