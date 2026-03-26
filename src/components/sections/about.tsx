"use client";
import RadialGradientBackground from "@/backgrounds/radial-gradient-background";
import AboutBioStats from "./about-bio-stats";
import AboutPeak from "./about-peak";
import AboutSkills from "./about-skills";

const About = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="about">
      <RadialGradientBackground variant="about" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <AboutBioStats />
          <AboutPeak />
        </div>
        <AboutSkills />
      </div>
    </section>
  );
};

export default About;
