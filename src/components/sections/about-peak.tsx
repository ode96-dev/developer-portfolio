"use client";
import FadeIn from "@/animations/fade-in";
import { Code2, Computer, Download } from "lucide-react";
import AboutPeakGuarantees from "./about-peak-guarantees";
import AboutPeakPerformanceCode from "./about-peak-performance-code";

const AboutPeak = () => {
  return (
    <FadeIn delay={200}>
      <div className="grid grid-cols-2 gap-4">
        <AboutPeakPerformanceCode
          className="col-span-2"
          icon={Code2}
          title={"Expertise"}
          description={
            " Specialized in building scalable web application with modern technologies and best practices."
          }
        />
        <AboutPeakPerformanceCode
          icon={Computer}
          title={"Clean Code"}
          description={
            "Writing maintainable, well-documented code that scales."
          }
        />
        <AboutPeakPerformanceCode
          icon={Download}
          title={"Performance"}
          description={"Optimizing for speed and efficiency in every project."}
        />
        <AboutPeakGuarantees />
      </div>
    </FadeIn>
  );
};

export default AboutPeak;
