"use client";
import RadialGradientBackground from "@/backgrounds/radial-gradient-background";
import { scrollToSection } from "@/hooks/use-scroll-spy";
import DeveloperStatsDescription from "./developer-stats-description";
import DeveloperProfilePictureTechStack from "./developer-profile-picture-tech-stack";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <RadialGradientBackground variant="hero" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <DeveloperStatsDescription />
          <DeveloperProfilePictureTechStack />
        </div>
      </div>
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
