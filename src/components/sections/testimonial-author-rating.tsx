"use client";
import { Testimonial } from "@/types";
import { Star } from "lucide-react";

const TestimonialAuthorRating = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="text-white font-medium mb-0.5 truncate">
          {testimonial.name}
        </p>
        <p className="text-white/60 text-sm truncate">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>

      <div
        className="flex gap-0.5 shrink-0"
        aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={[
              "w-4 h-4 transition-colors",
              i < testimonial.rating
                ? "fill-amber-400 text-amber-400"
                : "fill-white/10 text-white/10",
            ].join(" ")}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialAuthorRating;
