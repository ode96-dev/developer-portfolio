"use client";
import FadeIn from "@/animations/fade-in";
import { LucideIcon } from "lucide-react";

const SectionHeader = ({
  title,
  subtitle,
  description,
  delay = 100,
}: {
  title: string;
  subtitle: string;
  description: string;
  delay?: number;
}) => {
  return (
    <FadeIn delay={delay}>
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8">
          <span className="text-sm text-primary font-medium">{title}</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4">
          {subtitle}
        </h2>
        <p className="text-lg text-white/60 mx-w-2xl mx-auto">{description}</p>
      </div>
    </FadeIn>
  );
};

export default SectionHeader;
