import React from "react";
import { FadeIn } from "../components/ui";

interface Cert {
  title: string;
  org: string;
  year: string;
  skills: string[];
}

const certifications: Cert[] = [
  {
    title: "Microsoft Azure Machine Learning",
    org: "Microsoft",
    year: "2025",
    skills: [
      "Azure ML",
      "Cloud Computing",
      "Machine Learning",
      "Model Deployment",
    ],
  },
  {
    title: "Digital Transformation with Google Cloud",
    org: "Google Cloud · Coursera",
    year: "2024",
    skills: [
      "Cloud Computing",
      "Cloud Infrastructure",
      "Digital Transformation",
    ],
  },
];

const CertificationsSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      id="certifications"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading section-heading section-heading--wide mb-14 text-center uppercase sm:mb-18 md:mb-24">
            Certifications
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.1} y={20}>
              <div
                className="bg-[#D7E2EA]/[0.03] border border-[#D7E2EA]/10 rounded-xl p-6
                hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.06] transition-all duration-200 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20
                    flex items-center justify-center text-lg border border-[#D7E2EA]/10"
                  >
                    📜
                  </div>
                  <span className="text-[#D7E2EA]/58 text-sm font-semibold uppercase tracking-[0.14em]">
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-[#D7E2EA] font-semibold text-base sm:text-lg mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[#D7E2EA]/68 text-sm sm:text-base font-light mb-4">
                  {cert.org}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[#D7E2EA]/72 bg-[#D7E2EA]/6 text-sm font-medium px-3.5 py-1.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
