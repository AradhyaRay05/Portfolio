import React, { useState } from "react";
import { FadeIn } from "../components/ui";

interface Category {
  name: string;
  summary: string;
  skills: string[];
}

const categories: Category[] = [
  {
    name: "Programming Languages",
    summary:
      "Core languages used across coursework, internships, ML notebooks, and web apps.",
    skills: ["Python", "JavaScript", "Java", "C", "HTML5", "CSS3"],
  },
  {
    name: "AI & Machine Learning",
    summary:
      "Model training, evaluation, NLP experimentation, and deployed prediction apps.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Transformers",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "CatBoost",
      "Decision Trees",
      "Logistic Regression",
    ],
  },
  {
    name: "Data Science",
    summary:
      "Cleaning, feature engineering, visualization, and analytical storytelling.",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Excel",
      "Data Validation",
      "Predictive Analysis",
    ],
  },
  {
    name: "Web Development",
    summary:
      "Frontend and backend tooling for full-stack products and deployed demos.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Flask",
      "Streamlit",
      "Tailwind CSS",
      "AngularJS",
      "Socket.io",
      "WebRTC",
    ],
  },
  {
    name: "Databases",
    summary: "Persistent storage, querying, and application data modeling.",
    skills: ["MongoDB", "MySQL", "SQL", "SQL Workbench"],
  },
  {
    name: "Cloud & Tools",
    summary:
      "Development environments, deployment foundations, and system workflows.",
    skills: ["AWS", "Linux", "Vim", "VS Code", "Docker", "Coursera Cloud Labs"],
  },
  {
    name: "Cyber Security",
    summary:
      "VAPT fundamentals from internship practice and security-aware engineering.",
    skills: [
      "Nmap",
      "Burp Suite",
      "Wireshark",
      "SQLmap",
      "Metasploit",
      "OWASP",
      "OSINT",
      "XSS Basics",
    ],
  },
  {
    name: "Version Control",
    summary:
      "Public repositories, collaboration workflows, and open-source exploration.",
    skills: [
      "Git",
      "GitHub",
      "Pull Requests",
      "Issues",
      "Repository Documentation",
    ],
  },
];

const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const visible =
    activeCategory === "All"
      ? categories
      : categories.filter((cat) => cat.name === activeCategory);

  return (
    <section
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      id="skills"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={40}>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#D7E2EA]/58">
            Capabilities
          </p>
          <h2 className="hero-heading section-heading section-heading--display text-center uppercase">
            Tech Stack
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base font-light leading-relaxed text-[#D7E2EA]/68">
            Organized by how I actually use the tools: building models, cleaning
            data, shipping web apps, and collaborating in public.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {["All", ...categories.map((cat) => cat.name)].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] transition ${
                  activeCategory === tab
                    ? "bg-[#D7E2EA] text-[#0C0C0C]"
                    : "border border-[#D7E2EA]/15 text-[#D7E2EA]/55 hover:border-[#D7E2EA]/40 hover:text-[#D7E2EA]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {visible.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.04} y={20}>
              <article className="h-full rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] p-5 transition hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.055] sm:p-6">
                <div className="mb-5">
                  <h3 className="text-lg font-semibold text-[#D7E2EA]">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[#D7E2EA]/45">
                    {cat.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#D7E2EA]/12 bg-[#0C0C0C]/35 px-3.5 py-2 text-[0.95rem] text-[#D7E2EA]/78"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
