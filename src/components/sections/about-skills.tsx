"use client";
import FadeIn from "@/animations/fade-in";
import { skills } from "@/data/skills";

const AboutSkills = () => {
  return (
    <FadeIn delay={500}>
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-normal text-white mb-2">
            Tech Stack & Expertise
          </h3>
          <p className="text-sm text-white/60">
            Technologies I work with to build amazing projects.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
          {skills.map((skill, index) => (
            <div
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-100"
              key={index}
            >
              <skill.icon className="text-3xl text-primary" />
              <div className="text-sm text-white/80 font-medium text-center">
                {skill.name}
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-primary/8 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default AboutSkills;
