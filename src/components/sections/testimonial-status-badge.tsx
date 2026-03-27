"use client";

import { StatBadgeProps } from "@/types";

const TestimonialStatusBadge = ({ stat }: StatBadgeProps) => {
  return (
    <div className="absolute bottom-4 left-4 right-4">
      <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/10">
        <div className="text-2xl font-semibold text-primary mb-0.5 tracking-tight">
          {stat.value}
        </div>
        <div className="text-sm font-medium text-gray-300 leading-tight">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

export default TestimonialStatusBadge;
