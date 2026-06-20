import React from "react";
import { FadeIn } from "../components/ui";

interface Project {
  name: string;
  category: string;
  overview: string;
  problem: string;
  features: string[];
  challenges: string;
  results: string;
  tech: string[];
  github: string;
  live: string | null;
}

const projects: Project[] = [
  {
    name: "Quizora",
    category: "Full Stack · AI",
    overview:
      "AI-powered quiz generation platform built during the Edunet Foundation internship to turn any topic into interactive assessments.",
    problem:
      "Educators and learners often spend more time preparing questions than practicing. Quizora reduces that friction with topic-based quiz generation and reusable quiz storage.",
    features: [
      "Topic-based quiz creation using AI models",
      "React interface for creating and reviewing assessments",
      "Node/Express API layer",
      "MongoDB-backed persistence",
    ],
    challenges:
      "Designed a full-stack flow where AI output, user interaction, and database persistence stay consistent instead of feeling like disconnected demos.",
    results:
      "Produced a deployed learning tool that demonstrates practical LLM integration, API design, and full-stack delivery.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "LLMs", "REST API"],
    github: "https://github.com/AradhyaRay05/Quizora",
    live: "https://quizora-web.netlify.app/",
  },
  {
    name: "SmartCropAdvisor",
    category: "AgriTech · ML",
    overview:
      "Crop and fertilizer recommendation system that uses soil and environmental inputs to support smarter agricultural decisions.",
    problem:
      "Farmers need accessible recommendations based on soil nutrients, pH, rainfall, humidity, and temperature rather than generic advice.",
    features: [
      "Crop recommendation workflow",
      "Fertilizer guidance from soil inputs",
      "Data preprocessing and visualization",
      "Interactive Streamlit deployment",
    ],
    challenges:
      "Balanced model performance with explainable inputs so recommendations remain understandable for non-technical users.",
    results:
      "Reported 99% accuracy in resume data and shipped as a public ML application for quick experimentation.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Decision Tree",
      "Streamlit",
    ],
    github: "https://github.com/AradhyaRay05/SmartCropAdvisor",
    live: "https://smartcropadvisor.streamlit.app/",
  },
  {
    name: "GlucoScope ML",
    category: "Healthcare · ML",
    overview:
      "Diabetes likelihood prediction app that provides real-time health-risk insights through a Streamlit interface.",
    problem:
      "Early risk screening can help users understand when health indicators deserve attention before symptoms become severe.",
    features: [
      "Input-driven diabetes prediction",
      "Interactive dashboard",
      "Data cleaning and exploratory analysis",
      "Model evaluation workflow",
    ],
    challenges:
      "Converted healthcare parameters into a simple interface while keeping the prediction workflow transparent and reproducible.",
    results:
      "Published as an open-source healthcare ML tool with a live Streamlit demo.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Streamlit",
      "Jupyter Notebook",
    ],
    github: "https://github.com/AradhyaRay05/GlucoScope-ML",
    live: "https://glucoscope-ml.streamlit.app/",
  },
  {
    name: "Contextual Autocomplete & Sentence Completion",
    category: "NLP · Transformers",
    overview:
      "NLP project from the Xeta Labs internship that generates word, phrase, and sentence-level suggestions while users type.",
    problem:
      "Writing tools need suggestions that respect context, punctuation, and user flow instead of only predicting the next word blindly.",
    features: [
      "Context-aware completions",
      "Variable-length suggestion generation",
      "Pause/resume behavior after full stops",
      "Transformer-based language-modeling workflow",
    ],
    challenges:
      "Handled interaction-specific behavior, especially when to stop suggesting and when to resume after new input.",
    results:
      "Demonstrates applied NLP, transformer tooling, and inference design for productivity-focused software.",
    tech: [
      "Python",
      "NLP",
      "Transformers",
      "Hugging Face",
      "TensorFlow",
      "Jupyter Notebook",
    ],
    github:
      "https://github.com/AradhyaRay05/Contextual_Autocomplete_and_Sentence_Completion",
    live: null,
  },
  {
    name: "GeoQuakePredict",
    category: "Deep Learning · Geoscience",
    overview:
      "Deep learning web app that estimates earthquake magnitude and depth from geographical and temporal inputs.",
    problem:
      "Historical seismic datasets are hard to interpret quickly; a deployed predictor makes experimentation with earthquake parameters more accessible.",
    features: [
      "Magnitude and depth prediction",
      "Data preprocessing pipeline",
      "Neural-network regression approach",
      "Streamlit interface",
    ],
    challenges:
      "Worked with noisy real-world seismic data and regression outputs that require careful preprocessing and evaluation.",
    results:
      "Publicly deployed project showing deep-learning application beyond common tutorial datasets.",
    tech: ["Python", "TensorFlow", "Deep Learning", "Pandas", "Streamlit"],
    github: "https://github.com/AradhyaRay05/GeoQuakePredict",
    live: "https://geoquakepredict.streamlit.app/",
  },
  {
    name: "HeartGuardAI",
    category: "Healthcare · Deep Learning",
    overview:
      "Cardiovascular risk prediction app using patient health data and a TensorFlow-backed model deployed with Streamlit.",
    problem:
      "Users and students need approachable tools to understand how health indicators relate to heart disease likelihood.",
    features: [
      "Heart disease likelihood prediction",
      "Clean Streamlit UI",
      "Model training and evaluation notebook",
      "Health parameter input workflow",
    ],
    challenges:
      "Created a straightforward risk interface while keeping model assumptions and input requirements practical.",
    results:
      "Deployed healthcare AI demo that strengthens the portfolio’s applied ML and responsible-use narrative.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/AradhyaRay05/HeartGuardAI",
    live: "https://heartguardai.streamlit.app/",
  },
  {
    name: "VidyutAI",
    category: "Energy · ML",
    overview:
      "AI-powered energy consumption tracker for Indian households focused on monitoring, analysis, and usage prediction.",
    problem:
      "Households often receive electricity bills without actionable insight into usage patterns or future consumption.",
    features: [
      "Energy usage tracking concept",
      "Consumption analysis",
      "ML-based prediction workflow",
      "Household-focused framing",
    ],
    challenges:
      "Modeled a practical consumer problem where predictions need to be understandable and tied to behavior change.",
    results:
      "Shows interest in applying ML to sustainability and everyday infrastructure problems.",
    tech: ["Python", "Machine Learning", "Data Analysis", "Streamlit"],
    github: "https://github.com/AradhyaRay05/VidyutAI",
    live: null,
  },
  {
    name: "FruitSense ML",
    category: "Computer Vision · ML",
    overview:
      "Fruit freshness classifier that distinguishes fresh and rotten fruit using image-based machine-learning workflows.",
    problem:
      "Freshness classification can reduce manual inspection effort and support quality checks in food handling scenarios.",
    features: [
      "Image preprocessing",
      "Fresh/rotten classification",
      "Model training workflow",
      "Performance visualization",
    ],
    challenges:
      "Worked through feature extraction and visual data handling where input quality strongly affects model reliability.",
    results:
      "Resume data reports 95% test accuracy and demonstrates applied image-classification fundamentals.",
    tech: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    github: "https://github.com/AradhyaRay05/FruitSense-ML",
    live: null,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      className="relative z-10 -mt-8 rounded-t-[36px] bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn delay={0} y={40}>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#D7E2EA]/58">
            Featured work
          </p>
          <h2 className="hero-heading section-heading section-heading--display text-center uppercase">
            Projects
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm font-light leading-relaxed text-[#D7E2EA]/48 sm:text-base">
            Strongest projects selected from public GitHub repositories and
            resume-backed work. Low-signal practice and template repositories
            are intentionally excluded from featured cards.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.04} y={24}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#D7E2EA]/10 bg-[#111118] transition hover:-translate-y-1 hover:border-[#D7E2EA]/25 hover:bg-[#15151d]">
                <div className="border-b border-[#D7E2EA]/10 bg-gradient-to-br from-[#D7E2EA]/8 to-transparent p-5 sm:p-6">
                  <div className="mb-4 flex items-start gap-4">
                    <span className="rounded-full border border-[#D7E2EA]/18 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#D7E2EA]/68">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#D7E2EA] sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[#D7E2EA]/62 sm:text-base">
                    {project.overview}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/58">
                        Problem
                      </h4>
                      <p className="mt-2 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/72">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/58">
                        Challenges solved
                      </h4>
                      <p className="mt-2 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/72">
                        {project.challenges}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/58">
                      Key features
                    </h4>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-2 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/72"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400/70" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-5 rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03] p-4 text-[0.95rem] font-light leading-relaxed text-[#D7E2EA]/72">
                    <span className="font-medium text-[#D7E2EA]/78">
                      Result:{" "}
                    </span>
                    {project.results}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#D7E2EA]/7 px-3.5 py-1.5 text-sm font-semibold text-[#D7E2EA]/78"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#D7E2EA]/20 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/78 transition hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA]"
                    >
                      GitHub ↗
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#D7E2EA] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#0C0C0C] transition hover:scale-[1.02]"
                      >
                        Live demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
