import React from "react";
import { FadeIn } from "../components/ui";

interface Education {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  coursework?: string[];
}

const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "The Neotia University, Diamond Harbour, West Bengal",
    period: "2023 – 2027",
    detail:
      "Specialization in Artificial Intelligence and Machine Learning · Current CGPA: 9.04/10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Machine Learning",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
    ],
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Baruipur High School, West Bengal",
    period: "2023",
    detail: "West Bengal Board of Secondary Education (WBBSE)",
  },
  {
    degree: "Secondary (X)",
    institution: "Baruipur High School, West Bengal",
    period: "2021",
    detail: "West Bengal Board of Primary Education (WBBPE)",
  },
];

const EducationSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      id="education"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading section-heading section-heading--display mb-14 text-center uppercase sm:mb-18 md:mb-24">
            Education
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-[#D7E2EA]/10" />

          <div className="space-y-10 sm:space-y-12">
            {education.map((edu, i) => (
              <FadeIn key={edu.degree} delay={i * 0.1} y={25}>
                <div className="flex gap-5 sm:gap-8 relative">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-8 sm:w-12 flex justify-center pt-1">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-b from-purple-400 to-purple-600 ring-4 ring-[#0C0C0C] relative z-10" />
                  </div>

                  <div className="flex-1 pb-2">
                    <span className="text-[#D7E2EA]/58 text-sm font-semibold uppercase tracking-[0.14em]">
                      {edu.period}
                    </span>
                    <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-[#D7E2EA]/70 text-base font-light mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-[#D7E2EA]/68 text-base font-light mt-1">
                      {edu.detail}
                    </p>
                    {edu.coursework && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="text-[#D7E2EA]/72 bg-[#D7E2EA]/6 text-sm font-medium px-3.5 py-1.5 rounded-full"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
