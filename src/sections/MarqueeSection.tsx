import React from "react";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const skills: TechItem[] = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    color: "#FF6F00",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    color: "#150458",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    color: "#4DABCF",
  },
  {
    name: "Scikit-learn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    color: "#F7931E",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    color: "#4479A1",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    color: "#FF9900",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    color: "#FCC624",
  },
  {
    name: "Streamlit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
    color: "#FF4B4B",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    color: "#D7E2EA",
  },
];

const duplicated = [...skills, ...skills];

const MarqueePill: React.FC<{ item: TechItem }> = ({ item }) => (
  <div
    className="mx-2 flex min-w-max items-center gap-3 rounded-full border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.045] px-5 py-3 shadow-[0_0_35px_rgba(118,33,176,0.08)] backdrop-blur transition hover:border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/[0.075] sm:px-6 sm:py-4"
    style={{ boxShadow: `0 0 34px ${item.color}18` }}
  >
    <img
      src={item.icon}
      alt={item.name}
      className="h-7 w-7 object-contain sm:h-8 sm:w-8"
      loading="lazy"
    />
    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D7E2EA]/78 sm:text-base">
      {item.name}
    </span>
  </div>
);

const MarqueeSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0C0C0C] py-16 sm:py-20 md:py-24"
      aria-label="Technology marquee"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0C0C0C] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0C0C0C] to-transparent sm:w-32" />

      <div className="mb-5 flex w-max animate-marquee-left">
        {duplicated.map((item, index) => (
          <MarqueePill key={`top-${item.name}-${index}`} item={item} />
        ))}
      </div>
      <div className="flex w-max animate-marquee-left-slow">
        {[...duplicated].reverse().map((item, index) => (
          <MarqueePill key={`bottom-${item.name}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
