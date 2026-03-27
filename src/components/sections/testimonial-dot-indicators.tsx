"use client";
import { DotIndicatorsProps } from "@/types";

const TestimonialDotIndicators = ({
  count,
  currentIndex,
  onSelect,
}: DotIndicatorsProps) => {
  return (
    <div
      className="flex items-center justify-center gap-2 mt-10"
      role="tablist"
    >
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          role="tab"
          aria-selected={index === currentIndex}
          aria-label={`Go to testimonial ${index + 1}`}
          onClick={() => onSelect(index)}
          className={[
            "rounded-full transition-all duration-300",
            index === currentIndex
              ? "bg-white w-6 h-2"
              : "bg-white/30 w-2 h-2 hover:bg-white/50",
          ].join(" ")}
        />
      ))}
    </div>
  );
};

export default TestimonialDotIndicators;
