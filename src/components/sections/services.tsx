"use client";
import SectionHeader from "./shared/section-header";
import { services } from "@/data/services";
import { Code2 } from "lucide-react";
import FadeIn from "@/animations/fade-in";

const Services = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="services">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={"What I Offer"}
          subtitle={"Build for innovation & design"}
          description={
            "Comprehensive solutions to transform your ideas into exceptional digital experience."
          }
          delay={0}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = service.icon || Code2;

            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="cursor-pointer group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full min-h-70 flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-linear-t-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-events-none" />
                </div>
              </FadeIn>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => {
            const IconComponent = service.icon || Code2;

            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="cursor-pointer group relative bg-white/5 border border-white/10 rounded-2xl  p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
