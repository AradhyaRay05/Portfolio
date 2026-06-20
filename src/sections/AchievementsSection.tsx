import React from "react";
import { FadeIn } from "../components/ui";

interface Item {
  title: string;
  subtitle: string;
  year: string;
  badge: string;
}

const highlights: Item[] = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    subtitle:
      "Selected for the Grand Finale of one of India’s largest national innovation hackathons.",
    year: "2025",
    badge: "National finalist",
  },
  {
    title: "Bharatiya Antariksh Hackathon 2025",
    subtitle:
      "Participated in a national-level space-tech hackathon, strengthening problem framing, rapid prototyping, and team-based engineering under constraints.",
    year: "2025",
    badge: "Space-tech hackathon",
  },
  {
    title: "Stanford Code in Place",
    subtitle:
      "Completed Stanford University’s global introductory Python program taught by Stanford CS faculty.",
    year: "2024",
    badge: "Global program",
  },
  {
    title: "Open Source Programs",
    subtitle:
      "Participated in GirlScript Summer of Code 2025/2026 and Nexus Spring of Code to build public contribution experience.",
    year: "2025–26",
    badge: "GSSoC · NSoC",
  },
];

const hackathons: Item[] = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    subtitle:
      "Selected for the Smart India Hackathon 2025 Grand Finale, working through a national-level innovation challenge with team-based problem solving and prototype development.",
    year: "2025",
    badge: "Grand finale",
  },
  {
    title: "Bharatiya Antariksh Hackathon 2025",
    subtitle:
      "Priority hackathon participation focused on space-tech problem solving and prototype-oriented teamwork.",
    year: "2025",
    badge: "Priority",
  },
  {
    title: "Code For Bharat Season 2 Hackathon",
    subtitle:
      "Participated from The Neotia University as Team Fusion_Storm in the national hackathon organized by Tech Masters India.",
    year: "2025",
    badge: "Team Fusion_Storm",
  },
  {
    title: "Bytewars",
    subtitle:
      "Participated from The Neotia University as Team NeuroStackAI in Bytewars organized by the Department of Commerce, Delhi School of Economics, New Delhi.",
    year: "2025",
    badge: "Team NeuroStackAI",
  },
  {
    title: "Multi Modal AI Hackathon",
    subtitle:
      "Participated in the Multi Modal AI Hackathon organized by Indian Institute of Technology (IIT), Mandi.",
    year: "2025",
    badge: "IIT Mandi",
  },
  {
    title: "Convolve 4.0 — Pan-IIT AI/ML Hackathon",
    subtitle:
      "Participated in Convolve 4.0, a Pan-IIT AI/ML Hackathon under Unstop Holiday Fest 2025, organized by IIT Guwahati.",
    year: "2025",
    badge: "IIT Guwahati",
  },
  {
    title: "Build for Botanicals — Swan Website Design Challenge",
    subtitle:
      "Participated in “Seed the Idea of Build for Botanicals” organized by Swan Botanicals and built the Swan Botanicals web project.",
    year: "2025",
    badge: "Website challenge",
  },
  {
    title: "PARIKALPANA 2K24",
    subtitle:
      "Participated in The Neotia University’s annual technical fest, strengthening competition exposure and presentation skills.",
    year: "2024",
    badge: "Participation",
  },
];

const competitions: Item[] = [
  {
    title: "Quiz Competition on National Education Day",
    subtitle: "Won 1st prize in the university-level quiz competition.",
    year: "2023",
    badge: "1st prize",
  },
  {
    title: "FIT India Quiz Competition",
    subtitle: "Participated in the FIT India 2023 quiz competition.",
    year: "2023",
    badge: "Quiz",
  },
  {
    title: "E-Poster Competition",
    subtitle:
      "Participated in the E-Poster Competition organized by DIT-IEEE-SPS Student Branch Chapter.",
    year: "2024",
    badge: "IEEE SPS",
  },
  {
    title: "AI/ML Signal Processing STTP",
    subtitle:
      "Completed a one-week STTP on “Revolutionizing Signal Processing: The Impact of Artificial Intelligence and Machine Learning”.",
    year: "2024",
    badge: "STTP",
  },
];

const workshops = [
  "Basic Algorithm Development and Its Business Applications",
  "Foundation and Practical Application of AWS",
  "Business application development using advance Java and Oracle",
  "NLP in Clinical Practice: Optimizing Drug Prescription Workflows",
  "Generative AI and Machine Learning",
];

const Card: React.FC<{ item: Item; showBadge?: boolean }> = ({
  item,
  showBadge = true,
}) => (
  <article className="h-full rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] p-5 transition hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.055] sm:p-6">
    <div
      className={`mb-4 flex items-center gap-3 ${showBadge ? "justify-between" : "justify-end"}`}
    >
      {showBadge && (
        <span className="rounded-full border border-purple-300/25 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-purple-100/85">
          {item.badge}
        </span>
      )}
      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/58">
        {item.year}
      </span>
    </div>
    <h3 className="text-lg font-semibold leading-snug text-[#D7E2EA]">
      {item.title}
    </h3>
    <p className="mt-3 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/68">
      {item.subtitle}
    </p>
  </article>
);

const AchievementsSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      id="achievements"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn delay={0} y={40}>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#D7E2EA]/58">
            Recognition & learning
          </p>
          <h2 className="hero-heading section-heading section-heading--wide text-center uppercase">
            Achievements
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05} y={20}>
              <Card item={item} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1} y={24}>
          <div className="mt-10 rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.025] p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#D7E2EA]">
                  Hackathons & build challenges
                </h3>
                <p className="mt-2 max-w-2xl text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/68">
                  Prioritized by national-level exposure, AI/ML depth,
                  space-tech relevance, and shipped project outcomes.
                </p>
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/58">
                {hackathons.length} participations
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {hackathons.map((item) => (
                <Card key={item.title} item={item} showBadge={false} />
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn delay={0.14} y={24}>
            <div className="rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.025] p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[#D7E2EA]">
                Competitions & academic events
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {competitions.map((item) => (
                  <Card key={item.title} item={item} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.18} y={24}>
            <div className="h-full rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.025] p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[#D7E2EA]">
                Workshops attended
              </h3>
              <div className="mt-5 space-y-3">
                {workshops.map((workshop) => (
                  <div
                    key={workshop}
                    className="flex gap-3 rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C]/35 p-4 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/72"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-300/80" />
                    <span>{workshop}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
