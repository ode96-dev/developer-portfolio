"use client";
import FadeIn from "@/animations/fade-in";
import { ABOUT_STATS, PERSONAL_INFO } from "@/utils/constants";
import { Download } from "lucide-react";

const AboutBioStats = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-full">
            <span className="text-sm text-primary font-medium">
              Fullstack Developer
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
            Crafting Digital Experiences that matter
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="flex flex-col gap-4">
            {PERSONAL_INFO.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-base text-white/70 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={300}>
        <div className="grid grid-cols-3 gap-6">
          {ABOUT_STATS.map((stat, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full" />
              <div className="text-3xl font-normal text-white mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <button
          onClick={() => window.open(PERSONAL_INFO.resume)}
          className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group cursor-pointer"
        >
          <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />{" "}
          Download Resume
        </button>
      </FadeIn>
    </div>
  );
};

export default AboutBioStats;
