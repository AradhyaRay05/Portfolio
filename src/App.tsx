import React from "react";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStackSection from "./sections/TechStackSection";
import ProjectsSection from "./sections/ProjectsSection";
import ProjectArchiveSection from "./sections/ProjectArchiveSection";
import OpenSourceSection from "./sections/OpenSourceSection";
import GitHubSection from "./sections/GitHubSection";
import CertificationsSection from "./sections/CertificationsSection";
import AchievementsSection from "./sections/AchievementsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";

const App: React.FC = () => {
  return (
    <div
      className="font-kanit bg-[#0C0C0C] text-[#D7E2EA]"
      style={{ overflowX: "clip" }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <ProjectArchiveSection />
      <OpenSourceSection />
      <GitHubSection />
      <CertificationsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default App;
