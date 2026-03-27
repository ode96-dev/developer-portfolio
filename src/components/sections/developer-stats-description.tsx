"use client";
import FadeIn from "@/animations/fade-in";
import { scrollToSection } from "@/hooks/use-scroll-spy";
import { PERSONAL_INFO, STATS } from "@/utils/constants";
import { Star } from "lucide-react";

const DeveloperStatsDescription = () => {
  return (
    <div className="text-left">
      <FadeIn delay={0}>
        <div className="inline-flex items-center gap-2.5 px-5 py-2.75 mb-8 bg-liner-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
          <Star className="w-4 h-4 text-white fill-white" />
          <span className="text-xs md:text-sm text-white tracking-[1.2px]">
            {PERSONAL_INFO.title} | {PERSONAL_INFO.location}
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-light">
          React.js Developer Portfolio
        </h1>
      </FadeIn>
      <FadeIn delay={200}>
        <p className="text-lg text-white/70 max-w-137.5 mt-6">
          Building modern, scalable web applications with React, JavaScript, and
          cutting-edge technologies. Transforming ideas into exceptional digital
          experience{" "}
        </p>
      </FadeIn>
      <FadeIn delay={300}>
        <button
          className="inline-flex items-center gap-0 py-12 group"
          onClick={() => scrollToSection("contact")}
        >
          <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-6.5 py-3.25 text-base font-medium border border-white">
            Get in touch
          </div>
        </button>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
          {STATS.map((stat, index) => (
            <div
              className="text-left border-r border-white/50 pr-10 last:border-r-0"
              key={index}
            >
              <div className="text-2xl font-normal text-primary mb-2 font-mono">
                {stat.value}
              </div>
              <p className="text-sm text-white leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default DeveloperStatsDescription;
