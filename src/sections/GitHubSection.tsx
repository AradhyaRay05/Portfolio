import React, { useEffect, useMemo, useState } from "react";
import { FadeIn } from "../components/ui";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  updated_at: string;
}

const username = "AradhyaRay05";
const excluded = new Set([
  "TalentScope_AI",
  "AradhyaRay05",
  "HTML_Resume_Page_Assignment",
  "Resume_Website",
  "Portfolio",
]);
const featuredNames = new Set([
  "Quizora",
  "SmartCropAdvisor",
  "GlucoScope-ML",
  "GeoQuakePredict",
  "HeartGuardAI",
  "VidyutAI",
]);

const GitHubSection: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((res) =>
        res.json(),
      ),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      ).then((res) => res.json()),
    ])
      .then(([userData, repoData]) => {
        setUser(userData);
        setRepos(Array.isArray(repoData) ? repoData : []);
      })
      .catch(() => {
        setUser(null);
        setRepos([]);
      });
  }, []);

  const usefulRepos = useMemo(
    () =>
      repos.filter(
        (repo) =>
          !excluded.has(repo.name) &&
          !repo.name.toLowerCase().includes("talentscope"),
      ),
    [repos],
  );
  const originalRepos = useMemo(
    () => usefulRepos.filter((repo) => !repo.fork),
    [usefulRepos],
  );
  const forkedRepos = useMemo(
    () => usefulRepos.filter((repo) => repo.fork),
    [usefulRepos],
  );
  const liveRepos = useMemo(
    () => usefulRepos.filter((repo) => Boolean(repo.homepage)),
    [usefulRepos],
  );
  const mlRepos = useMemo(
    () =>
      usefulRepos.filter((repo) =>
        `${repo.name} ${repo.description || ""} ${repo.language || ""}`
          .toLowerCase()
          .match(
            /ai|ml|machine|predict|deep|tensorflow|health|crop|data|analysis|nlp/,
          ),
      ),
    [usefulRepos],
  );
  const languageStats = useMemo(() => {
    const counts = usefulRepos.reduce<Record<string, number>>((acc, repo) => {
      const lang = repo.language || "Mixed / Docs";
      acc[lang] = (acc[lang] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
  }, [usefulRepos]);
  const featuredRepos = useMemo(
    () =>
      usefulRepos.filter((repo) => featuredNames.has(repo.name)).slice(0, 6),
    [usefulRepos],
  );

  const stats = [
    {
      label: "Public repositories",
      value: user?.public_repos ?? repos.length,
      detail: "Total visible on GitHub",
    },
    {
      label: "Original repos",
      value: originalRepos.length,
      detail: "After portfolio/template exclusions",
    },
    {
      label: "Live demos",
      value: liveRepos.length,
      detail: "Repos with deployed links",
    },
    {
      label: "Forked contributions",
      value: forkedRepos.length,
      detail: "Open-source exploration",
    },
    {
      label: "AI/Data repos",
      value: mlRepos.length,
      detail: "ML, data, NLP, prediction work",
    },
    {
      label: "Followers",
      value: user?.followers ?? 0,
      detail: "Public GitHub followers",
    },
  ];

  return (
    <section
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      id="github"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn delay={0} y={40}>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#D7E2EA]/58">
            Developer activity
          </p>
          <h2 className="hero-heading section-heading section-heading--wide text-center uppercase">
            GitHub Snapshot
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm font-light leading-relaxed text-[#D7E2EA]/48 sm:text-base">
            Live data from the GitHub API, focused on repository activity,
            deployed demos, original work, and public open-source exploration.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.04} y={20}>
              <div className="h-full rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] p-4 text-center sm:p-5">
                <span className="block text-3xl font-black text-[#D7E2EA] sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.12em] text-[#D7E2EA]/62">
                  {stat.label}
                </span>
                <span className="mt-2 block text-sm font-light leading-relaxed text-[#D7E2EA]/62">
                  {stat.detail}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn delay={0.15} y={24}>
            <div className="h-full rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[#D7E2EA]">
                Language footprint
              </h3>
              <p className="mt-2 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/68">
                Counted from public repository primary languages, not
                third-party scorecards.
              </p>
              <div className="mt-6 space-y-4">
                {languageStats.map(([language, count]) => {
                  const percent = usefulRepos.length
                    ? Math.round((count / usefulRepos.length) * 100)
                    : 0;
                  return (
                    <div key={language}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-[#D7E2EA]/75">
                          {language}
                        </span>
                        <span className="text-[#D7E2EA]/35">
                          {count} repos · {percent}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#D7E2EA]/8">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#B600A8] to-[#BE4C00]"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={24}>
            <div className="h-full rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[#D7E2EA]">
                Repository highlights
              </h3>
              <p className="mt-2 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/68">
                Selected from the same featured project strategy used above.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {featuredRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C]/35 p-4 transition hover:border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/[0.055]"
                  >
                    <h4 className="text-base font-semibold text-[#D7E2EA]">
                      {repo.name.replace(/[_-]/g, " ")}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-[#D7E2EA]/68">
                      {repo.description || "Featured public repository."}
                    </p>
                    <span className="mt-3 inline-block text-sm font-semibold uppercase tracking-[0.13em] text-[#D7E2EA]/72">
                      View code ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.28} y={15}>
          <div className="mt-8 text-center">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[#D7E2EA]/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/78 transition hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA]"
            >
              View full GitHub profile ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default GitHubSection;
