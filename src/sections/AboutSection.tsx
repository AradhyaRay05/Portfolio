import React from "react";
import { FadeIn } from "../components/ui";

const focusAreas = [
  "AI/ML model development",
  "Full-stack product engineering",
  "Data analysis and visualization",
  "Cybersecurity fundamentals",
  "Open-source collaboration",
  "Hackathon problem solving",
];

const AboutSection: React.FC = () => {
  return (
    <section
      className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      id="about"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn delay={0} y={40}>
          <div className="lg:sticky lg:top-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#D7E2EA]/35">
              About
            </p>
            <h2 className="hero-heading section-heading section-heading--display max-w-3xl uppercase">
              Built around real problems
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.08} y={28}>
            <p className="text-pretty text-xl font-light leading-relaxed text-[#D7E2EA]/78 sm:text-2xl">
              I&apos;m Aradhya Ray, a Computer Science & Engineering student
              specializing in Artificial Intelligence and Machine Learning at
              The Neotia University, Kolkata. My work sits at the intersection
              of software engineering, applied machine learning, and practical
              problem solving.
            </p>
          </FadeIn>
          <FadeIn delay={0.16} y={24}>
            <p className="text-base font-light leading-relaxed text-[#D7E2EA]/58 sm:text-lg">
              Through internships at Edunet Foundation, Xeta Labs, Edulyt India,
              WEBEL, Dataspace Academy, and Emertxe, I&apos;ve worked across
              full-stack development, NLP, data cleaning, Linux systems,
              cybersecurity, and IoT foundations. The common thread is building
              systems that are useful beyond a classroom demo: quiz generation
              platforms, autocomplete models, business dashboards, ML risk
              predictors, and agricultural recommendation tools.
            </p>
          </FadeIn>
          <FadeIn delay={0.24} y={24}>
            <p className="text-base font-light leading-relaxed text-[#D7E2EA]/58 sm:text-lg">
              Hackathons and open source have shaped how I work. Being selected
              for the Smart India Hackathon 2025 Grand Finale, participating in
              Bharatiya Antariksh Hackathon 2025, and taking part in national AI
              and software challenges pushed me to communicate clearly, ship
              under constraints, and turn ambiguous problems into working
              prototypes. I&apos;m continuing to grow as an engineer who can
              connect models, data, interfaces, and user needs into reliable
              products.
            </p>
          </FadeIn>

          <FadeIn delay={0.32} y={20}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] px-4 py-3 text-sm text-[#D7E2EA]/66"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
