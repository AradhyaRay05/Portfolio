import React from "react";
import { FadeIn } from "../components/ui";

interface Contribution {
  project: string;
  desc: string;
  type: string;
  link?: string;
}

const programs: Contribution[] = [
  {
    project: "GirlScript Summer of Code (GSSoC) 2026",
    desc: "Open-source program participation focused on contributing to community projects through issues, pull requests, collaboration, and documentation-driven workflows.",
    type: "Open Source Program",
  },
  {
    project: "GirlScript Summer of Code (GSSoC) 2025",
    desc: "Participated in the GSSoC ecosystem to practice real-world contribution workflows and collaborate on public repositories.",
    type: "Open Source Program",
  },
  {
    project: "Nexus Spring of Code (NSoC)",
    desc: "Open-source contribution program experience focused on learning maintainers’ expectations, understanding codebases, and contributing in public.",
    type: "Open Source Program",
  },
];

const repositories: Contribution[] = [
  {
    project: "Nominatim / OpenStreetMap",
    desc: "Worked with the open-source geocoding/search ecosystem that powers location search on OpenStreetMap data.",
    type: "Open Source Contribution",
    link: "https://github.com/AradhyaRay05/Nominatim",
  },
  {
    project: "AgriTech",
    desc: "Contributed to an AI-powered agriculture platform covering crop recommendations, yield prediction, disease detection, and collaborative farmer tools.",
    type: "Forked Contribution",
    link: "https://github.com/AradhyaRay05/AgriTech",
  },
  {
    project: "College Daddy",
    desc: "Contributed to a student-focused academic toolkit for CGPA/internal marks calculation, semester notes, and exam productivity workflows.",
    type: "Forked Contribution",
    link: "https://github.com/AradhyaRay05/College_daddy",
  },
  {
    project: "UI-Verse",
    desc: "Explored and contributed within a component-library style open-source project focused on reusable UI patterns.",
    type: "Forked Contribution",
    link: "https://github.com/AradhyaRay05/UI-Verse",
  },
  {
    project: "AnimateItNow",
    desc: "Participated in an animation-focused frontend open-source project, strengthening HTML/CSS/JavaScript contribution workflows.",
    type: "Forked Contribution",
    link: "https://github.com/AradhyaRay05/AnimateItNow",
  },
];

const OpenSourceSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      id="opensource"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={40}>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#D7E2EA]/58">
            Community work
          </p>
          <h2 className="hero-heading section-heading section-heading--wide text-center uppercase">
            Open Source
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm font-light leading-relaxed text-[#D7E2EA]/48 sm:text-base">
            Public contribution practice through open-source programs, forked
            projects, issues, repository exploration, and community
            collaboration.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn delay={0.08} y={24}>
            <div className="h-full rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[#D7E2EA]">Programs</h3>
              <div className="mt-5 space-y-4">
                {programs.map((program) => (
                  <div
                    key={program.project}
                    className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C]/35 p-4"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-purple-200/85">
                      {program.type}
                    </span>
                    <h4 className="mt-2 text-base font-semibold text-[#D7E2EA]">
                      {program.project}
                    </h4>
                    <p className="mt-2 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/68">
                      {program.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.14} y={24}>
            <div className="h-full rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[#D7E2EA]">
                Repositories
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {repositories.map((repo) => (
                  <a
                    key={repo.project}
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C]/35 p-4 transition hover:border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/[0.055]"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/58">
                      {repo.type}
                    </span>
                    <h4 className="mt-2 text-base font-semibold text-[#D7E2EA] group-hover:text-white">
                      {repo.project}
                    </h4>
                    <p className="mt-2 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/68">
                      {repo.desc}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.13em] text-[#D7E2EA]/72 group-hover:text-[#D7E2EA]">
                      View repo ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
