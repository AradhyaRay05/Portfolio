import React from "react";
import { FadeIn, Magnet } from "../components/ui";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HeroSection: React.FC = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-10"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(182,0,168,0.22),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(118,33,176,0.18),transparent_28%),linear-gradient(180deg,#111118_0%,#0C0C0C_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0C0C0C] to-transparent" />

      <FadeIn delay={0} y={-20} as="nav">
        <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between py-5 sm:py-6">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 px-4 py-2 text-sm font-bold tracking-[0.24em] text-[#D7E2EA]"
          >
            AR
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-[#D7E2EA]/10 bg-[#0C0C0C]/45 p-1.5 backdrop-blur md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#D7E2EA]/65 transition hover:bg-[#D7E2EA]/10 hover:text-[#D7E2EA]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="/Aradhya%20Ray%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#D7E2EA]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D7E2EA]/80 transition hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA]"
          >
            Resume
          </a>
        </div>
      </FadeIn>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl grid-cols-1 items-center gap-10 pb-16 pt-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <FadeIn delay={0.1} y={24}>
            <span className="mb-5 inline-flex rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/70">
              AI/ML Engineering · Full-stack Software · Open Source
            </span>
          </FadeIn>

          <FadeIn delay={0.18} y={34}>
            <h1 className="hero-heading hero-title text-balance uppercase">
              Hi, I&apos;m Aradhya
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <p className="mt-7 max-w-2xl text-pretty text-base font-light leading-relaxed text-[#D7E2EA]/68 sm:text-lg lg:text-xl">
              A CSE student specializing in AI & ML at The Neotia University,
              building practical machine-learning systems, full-stack products,
              and data-driven tools through internships, hackathons, and
              open-source work.
            </p>
          </FadeIn>

          <FadeIn delay={0.42} y={18}>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="rounded-full px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  boxShadow:
                    "0 14px 40px rgba(182, 0, 168, 0.25), 4px 4px 12px #7721B1 inset",
                  outline: "1px solid rgba(255,255,255,0.7)",
                  outlineOffset: "-3px",
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="rounded-full border border-[#D7E2EA]/25 px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/80 transition hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/8 hover:text-[#D7E2EA]"
              >
                Contact Me
              </a>
              <a
                href="/Aradhya%20Ray%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#D7E2EA]/25 px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/80 transition hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/8 hover:text-[#D7E2EA]"
              >
                View Resume
              </a>
              <a
                href="/Aradhya%20Ray%20Resume.pdf"
                download="Aradhya Ray Resume.pdf"
                className="rounded-full border border-[#D7E2EA]/25 px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/80 transition hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/8 hover:text-[#D7E2EA]"
              >
                Download ↓
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.52} y={16}>
            <div className="mt-9 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["Internships", "AI/ML · Web · Cybersecurity"],
                ["Hackathons", "SIH finalist · Antariksh 2025"],
                ["Public work", "ML apps · GitHub archive"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.04] p-4 backdrop-blur"
                >
                  <p className="text-sm font-semibold text-[#D7E2EA]">
                    {title}
                  </p>
                  <p className="mt-1 text-xs font-light leading-relaxed text-[#D7E2EA]/45">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.28}
          y={30}
          className="mx-auto w-full max-w-[420px] lg:max-w-[520px]"
        >
          <Magnet padding={100} strength={3}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-purple-500/25 via-[#D7E2EA]/5 to-orange-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.04] p-4 shadow-2xl backdrop-blur">
                <img
                  src="https://avatars.githubusercontent.com/u/179517004?v=4"
                  alt="Aradhya Ray"
                  className="aspect-[4/5] w-full rounded-[1.45rem] object-cover"
                  style={{ filter: "grayscale(8%) contrast(1.04)" }}
                />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-[#D7E2EA]/15 bg-[#0C0C0C]/70 p-4 backdrop-blur-md">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/45">
                    Current focus
                  </p>
                  <p className="mt-1 text-sm text-[#D7E2EA]/85">
                    Shipping ML-backed products with clean interfaces and
                    measurable outcomes.
                  </p>
                </div>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap justify-center gap-2 pb-6 md:hidden">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="rounded-full border border-[#D7E2EA]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#D7E2EA]/55"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
