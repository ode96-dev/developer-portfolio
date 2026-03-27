"use client";

import { testimonials } from "@/data/testimonials";
import { useRef, useState, useCallback } from "react";
import SectionHeader from "./shared/section-header";
import FadeIn from "@/animations/fade-in";
import Image from "next/image";
import { Quote } from "lucide-react";
import { TESTIMONIAL_STATS } from "@/utils/constants";
import TestimonialStatusBadge from "./testimonial-status-badge";
import TestimonialAuthorRating from "./testimonial-author-rating";
import TestimonialDotIndicators from "./testimonial-dot-indicators";
import TestimonialNavButton from "./testimonial-nav-button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = useCallback((index: number): void => {
    setCurrentIndex(index);

    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  }, []);

  const nextTestimonial = useCallback((): void => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  }, [currentIndex, scrollToIndex]);

  const prevTestimonial = useCallback((): void => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  }, [currentIndex, scrollToIndex]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-90 rounded-full blur-3xl" />
      </div>

      <div>
        <SectionHeader
          title="Testimonials"
          subtitle="Trusted by forward-thinking teams"
          description="Empowering clients with design-driven, high-quality solutions built for success."
        />

        <FadeIn delay={100}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-hidden scroll-smooth"
              style={{ scrollSnapType: "x mandatory" }}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => {
                  const stat = TESTIMONIAL_STATS[index];
                  const isActive = index === currentIndex;

                  return (
                    <div
                      key={`${testimonial.id}-${index}`}
                      className="w-full shrink-0 px-4"
                      style={{ scrollSnapAlign: "start" }}
                      role="tabpanel"
                      aria-hidden={!isActive}
                    >
                      <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="relative w-full md:w-1/3">
                            <div className="relative h-72 rounded-2xl overflow-hidden ring-1 ring-white/10">
                              <Image
                                fill
                                src={testimonial.image}
                                alt={`Photo of ${testimonial.name}`}
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                              {stat && <TestimonialStatusBadge stat={stat} />}
                            </div>
                          </div>

                          <div className="flex-1 flex flex-col justify-between py-4">
                            <div className="mb-6">
                              <Quote
                                className="w-7 h-7 text-primary mb-4 opacity-50"
                                aria-hidden="true"
                              />
                              <p className="text-lg md:text-xl text-white leading-relaxed">
                                &ldquo;{testimonial.quote}&rdquo;
                              </p>
                            </div>

                            <TestimonialAuthorRating
                              testimonial={testimonial}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <TestimonialDotIndicators
              count={testimonials.length}
              currentIndex={currentIndex}
              onSelect={scrollToIndex}
            />

            <TestimonialNavButton direction="prev" onClick={prevTestimonial} />
            <TestimonialNavButton direction="next" onClick={nextTestimonial} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
