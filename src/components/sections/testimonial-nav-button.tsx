"use client";
import { NavButtonProps } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialNavButton = ({ direction, onClick }: NavButtonProps) => {
  const isPrev = direction === "prev";
  return (
    <button
      className={[
        "absolute top-1/2 -translate-y-1/2 z-10",
        "flex items-center justify-center",
        "w-10 h-10 lg:w-12 lg:h-12 rounded-full",
        "bg-white/10 backdrop-blur-sm border border-white/20",
        "hover:bg-white/20 hover:border-white/40 hover:scale-105",
        "transition-all duration-300",
        isPrev
          ? "left-10 -translate-x-2 lg:-translate-x-4"
          : "right-10 translate-x-2 lg:translate-x-4",
      ].join(" ")}
      onClick={onClick}
      aria-label={isPrev ? "Previous testimonial" : "Next testimonial"}
    >
      {isPrev ? (
        <ChevronLeft className="w-5 h-5 text-white" />
      ) : (
        <ChevronRight className="w-5 h-5 text-white" />
      )}
    </button>
  );
};

export default TestimonialNavButton;
