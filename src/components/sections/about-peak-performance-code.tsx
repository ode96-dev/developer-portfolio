"use client";

import { IconType } from "react-icons";

const AboutPeakPerformanceCode = ({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`${className} relative group`}>
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
        <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AboutPeakPerformanceCode;
