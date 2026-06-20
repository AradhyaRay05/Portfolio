import React from "react";
import { FadeIn } from "../components/ui";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    role: "Internet of Things Intern",
    company: "Emertxe Information Technologies",
    period: "Sep 2025 – Nov 2025 · 3 months",
    location: "Internship",
    summary:
      "Strengthened embedded and IoT fundamentals by connecting sensor-driven hardware workflows with software-side data handling and monitoring concepts.",
    bullets: [
      "Worked with IoT architecture concepts including sensing, data acquisition, microcontroller workflows, and communication between device and application layers.",
      "Practiced translating hardware signals into usable software data, improving debugging discipline across constrained environments.",
      "Built a stronger foundation for real-time systems, edge devices, and the reliability concerns that appear when software interacts with physical inputs.",
    ],
    tech: ["IoT", "Embedded Systems", "Sensors", "Microcontrollers", "Python"],
  },
  {
    role: "Web Development Intern",
    company: "Edunet Foundation",
    period: "Aug 2025 – Sep 2025",
    location: "Remote, India",
    summary:
      "Delivered Quizora, a full-stack AI-powered quiz generation platform for creating topic-based assessments with LLM support.",
    bullets: [
      "Designed the product flow for generating, storing, and retrieving quizzes so learners and educators can turn topics into interactive assessments quickly.",
      "Implemented the application stack with React.js, Node.js, Express.js, and MongoDB, integrating AI models into the quiz generation workflow.",
      "Focused on practical deliverables: responsive UI, API-driven data flow, database persistence, and a deployable web experience.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "LLMs"],
  },
  {
    role: "AI & Machine Learning Engineering Intern",
    company: "Xeta Labs Pvt. Ltd.",
    period: "Jun 2025 – Sep 2025",
    location: "Remote, India",
    summary:
      "Built an NLP-based contextual autocomplete and sentence-completion model focused on real-time writing assistance.",
    bullets: [
      "Developed a model pipeline that generates word, phrase, and sentence-level suggestions based on the current typing context.",
      "Worked with transformer language-modeling concepts, Hugging Face tooling, TensorFlow, and inference logic for variable-length completions.",
      "Handled behavior-specific requirements such as pausing after full stops and resuming suggestions only when the user continues typing.",
    ],
    tech: ["Python", "NLP", "Transformers", "Hugging Face", "TensorFlow"],
  },
  {
    role: "Linux Intern",
    company: "WEBEL",
    period: "Jun 2025 – Jul 2025",
    location: "West Bengal Electronics Industry Development Corporation",
    summary:
      "Gained hands-on exposure to Linux administration, shell workflows, file systems, process control, and basic networking.",
    bullets: [
      "Practiced command-line operations, user and permission management, process monitoring, and file-system workflows used in day-to-day engineering environments.",
      "Used shell scripting to automate small administrative tasks and reinforce repeatable system operations.",
      "Improved comfort with Linux as a deployment, debugging, and development environment for backend and ML tooling.",
    ],
    tech: ["Linux", "Shell Scripting", "Networking", "System Administration"],
  },
  {
    role: "AI & ML Intern",
    company: "Edulyt India Pvt. Ltd.",
    period: "May 2025 – Jun 2025",
    location: "Remote, India",
    summary:
      "Prepared banking and credit datasets for machine-learning workflows through cleaning, transformation, feature engineering, and validation.",
    bullets: [
      "Cleaned and transformed credit banking data with Python, identifying customer segments and calculating interest-related metrics.",
      "Applied validation and feature-engineering techniques to make raw financial data reliable enough for downstream model training.",
      "Built practical understanding of how data quality directly affects model performance and business interpretation.",
    ],
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Feature Engineering",
      "Data Validation",
    ],
  },
  {
    role: "Cyber Security Intern",
    company: "Dataspace Academy",
    period: "Jun 2024 – Jul 2024",
    location: "Kolkata, India",
    summary:
      "Performed structured vulnerability assessment and penetration-testing practice across networks and web applications.",
    bullets: [
      "Conducted scanning, enumeration, exploitation practice, and web application testing with common VAPT tools and OWASP-oriented methodology.",
      "Documented findings in reports covering vulnerabilities, sensitive information exposure, risk context, and remediation direction.",
      "Built security awareness that now informs how I design APIs, authentication flows, deployments, and user-facing applications.",
    ],
    tech: ["Nmap", "Burp Suite", "Wireshark", "SQLmap", "Metasploit", "OWASP"],
  },
  {
    role: "Data Analyst Intern",
    company: "Edulyt India Pvt. Ltd.",
    period: "Jun 2023 – Sep 2023",
    location: "Remote, India",
    summary:
      "Built a banking data cleaning and business-insights dashboard from raw financial data.",
    bullets: [
      "Validated and preprocessed financial records to improve consistency and reliability before analysis.",
      "Analyzed revenue, discounts, orders, payment methods, and return patterns to convert raw tables into actionable insights.",
      "Delivered visual analysis using Python, Pandas, NumPy, Excel, and plotting libraries, strengthening my data storytelling workflow.",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Excel",
      "Data Visualization",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:px-8 sm:py-24 md:px-10 md:py-32"
      id="experience"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={40}>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#D7E2EA]/58">
            Experience
          </p>
          <h2 className="hero-heading section-heading section-heading--wide mx-auto max-w-5xl text-center uppercase">
            Internship Experience
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm font-light leading-relaxed text-[#D7E2EA]/50 sm:text-base">
            Applied work across AI/ML, web development, data analytics,
            cybersecurity, Linux systems, and IoT fundamentals.
          </p>
        </FadeIn>

        <div className="mt-14 space-y-5 sm:mt-18">
          {experiences.map((exp, i) => (
            <FadeIn key={`${exp.company}-${exp.role}`} delay={i * 0.05} y={25}>
              <article className="grid gap-5 rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.035] p-5 transition hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.055] sm:p-7 lg:grid-cols-[0.34fr_0.66fr] lg:gap-8">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D7E2EA]/58">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-[#D7E2EA] sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-[#D7E2EA]/82">
                    {exp.company}
                  </p>
                  <p className="mt-1 text-base font-light text-[#D7E2EA]/70">
                    {exp.period}
                  </p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-[#D7E2EA]/58">
                    {exp.location}
                  </p>
                </div>
                <div>
                  <p className="text-base font-light leading-relaxed text-[#D7E2EA]/68">
                    {exp.summary}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm font-light leading-relaxed text-[#D7E2EA]/56 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7621B0]/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#D7E2EA]/16 bg-[#0C0C0C]/65 px-4 py-2 text-sm font-semibold text-[#D7E2EA] shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
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

export default ExperienceSection;
