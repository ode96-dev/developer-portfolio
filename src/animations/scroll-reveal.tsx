"use client";

import React, { CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ScrollRevealProps } from "@/types";
import { animationClasses } from "@/utils/constants";

const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
  className = "",
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const style: CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className} ${
        isVisible ? visibleClasses : animationClasses[animation]
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
