import React from "react";
import { FadeIn } from "../components/ui";

const focus = [
  {
    num: "01",
    name: "Applied AI & ML",
    desc: "Building prediction systems, NLP prototypes, and deployed Streamlit tools around healthcare, agriculture, finance, education, and sustainability problems.",
  },
  {
    num: "02",
    name: "Full-stack Engineering",
    desc: "Designing React interfaces, REST APIs, Node/Express services, and MongoDB-backed workflows for practical products such as Quizora.",
  },
  {
    num: "03",
    name: "Data Analysis",
    desc: "Cleaning, validating, visualizing, and interpreting datasets with Python, Pandas, NumPy, Excel, and plotting libraries.",
  },
  {
    num: "04",
    name: "Security-aware Development",
    desc: "Applying cybersecurity internship learnings from VAPT, OWASP, and tooling such as Nmap, Burp Suite, Wireshark, and SQLmap.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      id="engineering-focus"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading section-heading section-heading--wide text-center uppercase">
            Engineering Focus
          </h2>
        </FadeIn>
        <div className="mt-14 space-y-0">
          {focus.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.08} y={25}>
              <div className="grid gap-4 border-t border-[#D7E2EA]/10 py-7 last:border-b sm:grid-cols-[0.18fr_0.82fr] sm:py-9">
                <span className="text-4xl font-black leading-none text-[#D7E2EA]/14 sm:text-6xl">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-xl font-semibold uppercase tracking-tight text-[#D7E2EA] sm:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm font-light leading-relaxed text-[#D7E2EA]/58 sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
