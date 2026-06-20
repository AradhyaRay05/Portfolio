import React, { useState, useEffect, useMemo } from "react";
import { FadeIn } from "../components/ui";

interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  topics?: string[];
}

const EXCLUDE = new Set([
  "TalentScope_AI",
  "AradhyaRay05",
  "HTML_Resume_Page_Assignment",
  "Resume_Website",
  "Portfolio",
]);

const FEATURED = new Set([
  "Quizora",
  "SmartCropAdvisor",
  "GlucoScope-ML",
  "Contextual_Autocomplete_and_Sentence_Completion",
  "GeoQuakePredict",
  "HeartGuardAI",
  "VidyutAI",
  "FruitSense-ML",
]);

const FILTER_TABS = [
  "All",
  "AI & ML",
  "Data Science",
  "Web Development",
  "Cyber Security",
  "Open Source",
  "Full Stack",
  "Other",
];

const CATEGORY_MAP: Record<string, string[]> = {
  "AI & ML": [
    "ml",
    "ai",
    "machine",
    "deep",
    "tensorflow",
    "scikit",
    "predict",
    "prediction",
    "classifier",
    "catboost",
    "health",
    "crop",
    "fruit",
    "quake",
    "autocomplete",
    "nlp",
  ],
  "Data Science": [
    "analysis",
    "dashboard",
    "data",
    "netflix",
    "airbnb",
    "visualization",
    "sales",
  ],
  "Web Development": [
    "html",
    "css",
    "javascript",
    "react",
    "frontend",
    "web",
    "clone",
    "weather",
    "botanicals",
  ],
  "Cyber Security": [
    "security",
    "fraud",
    "vulnerability",
    "vapt",
    "nmap",
    "owasp",
  ],
  "Open Source": [
    "nominatim",
    "openstreetmap",
    "open-source",
    "ui-verse",
    "animate",
  ],
  "Full Stack": [
    "mern",
    "mongodb",
    "express",
    "node",
    "full-stack",
    "full stack",
    "quizora",
  ],
};

function classifyRepo(repo: Repo): string {
  const text =
    `${repo.name} ${repo.description || ""} ${repo.language || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
  const priority = [
    "Full Stack",
    "Open Source",
    "Cyber Security",
    "AI & ML",
    "Data Science",
    "Web Development",
  ];
  for (const cat of priority) {
    if (CATEGORY_MAP[cat].some((keyword) => text.includes(keyword))) return cat;
  }
  return "Other";
}

const ProjectArchiveSection: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.github.com/users/AradhyaRay05/repos?per_page=100&sort=updated",
    )
      .then((res) => res.json())
      .then((data: Repo[]) => {
        setRepos(
          data.filter(
            (repo) =>
              !EXCLUDE.has(repo.name) &&
              !repo.name.toLowerCase().includes("talentscope"),
          ),
        );
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  const classified = useMemo(
    () =>
      repos.map((repo) => ({
        ...repo,
        category: classifyRepo(repo),
        isFeatured: FEATURED.has(repo.name),
      })),
    [repos],
  );

  const displayed = useMemo(() => {
    const query = search.trim().toLowerCase();
    return classified.filter((repo) => {
      const matchesFilter = filter === "All" || repo.category === filter;
      const searchable =
        `${repo.name} ${repo.description || ""} ${repo.language || ""} ${(repo.topics || []).join(" ")} ${repo.category}`.toLowerCase();
      const matchesSearch = !query || searchable.includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [classified, filter, search]);

  return (
    <section
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      id="archive"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn delay={0} y={40}>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#D7E2EA]/58">
            Repository explorer
          </p>
          <h2 className="hero-heading section-heading section-heading--wide text-center uppercase">
            Project Archive
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm font-light leading-relaxed text-[#D7E2EA]/48 sm:text-base">
            Dynamically synced from public GitHub repositories, with low-signal
            resume/template repositories excluded. Use search and filters to
            explore compact project history without overwhelming the featured
            showcase.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] p-2">
            <input
              type="text"
              placeholder="Search by project name, technology, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-transparent bg-[#0C0C0C]/45 px-4 py-3 text-sm text-[#D7E2EA] outline-none placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA]/25"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={16}>
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] transition ${
                  filter === tab
                    ? "bg-[#D7E2EA] text-[#0C0C0C]"
                    : "border border-[#D7E2EA]/15 text-[#D7E2EA]/55 hover:border-[#D7E2EA]/40 hover:text-[#D7E2EA]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        {loading ? (
          <div className="py-20 text-center text-[#D7E2EA]/40">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-[#D7E2EA]/20 border-t-[#D7E2EA]/70" />
            <p className="mt-4 text-sm">Loading repositories from GitHub...</p>
          </div>
        ) : (
          <>
            <p className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/58">
              Showing {displayed.length} of {repos.length} public repositories
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {displayed.map((repo) => (
                <FadeIn key={repo.name} delay={0} y={16}>
                  <article className="flex h-full flex-col rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03] p-5 transition hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.055]">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold leading-snug text-[#D7E2EA]">
                        {repo.name.replace(/[_-]/g, " ")}
                      </h3>
                      <div className="flex flex-shrink-0 gap-1">
                        {repo.isFeatured && (
                          <span className="rounded-full border border-purple-400/30 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-200">
                            Featured
                          </span>
                        )}
                        {repo.fork && (
                          <span className="rounded-full border border-[#D7E2EA]/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/58">
                            Fork
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="line-clamp-3 flex-1 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/68">
                      {repo.description ||
                        "Public repository available on GitHub. Open the code link to inspect implementation details and recent updates."}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {repo.language && (
                        <span className="rounded-full bg-[#D7E2EA]/7 px-3 py-1.5 text-sm font-medium text-[#D7E2EA]/72">
                          {repo.language}
                        </span>
                      )}
                      <span className="rounded-full bg-[#D7E2EA]/7 px-3 py-1.5 text-sm font-medium text-[#D7E2EA]/72">
                        {repo.category}
                      </span>
                    </div>
                    <div className="mt-5 flex gap-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold uppercase tracking-[0.13em] text-[#D7E2EA]/72 hover:text-[#D7E2EA]"
                      >
                        Code ↗
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold uppercase tracking-[0.13em] text-[#D7E2EA]/72 hover:text-[#D7E2EA]"
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </>
        )}

        {!loading && displayed.length === 0 && (
          <p className="py-16 text-center text-sm text-[#D7E2EA]/35">
            No repositories found for this search/filter.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectArchiveSection;
