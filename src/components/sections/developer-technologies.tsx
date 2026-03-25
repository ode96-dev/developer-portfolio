"use client";
import React from "react";
import DeveloperTechnology from "./developer-technology";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const DeveloperTechnologies = () => {
  return (
    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-6">
      <DeveloperTechnology icon={SiReact} />
      <DeveloperTechnology icon={SiNextdotjs} />
      <DeveloperTechnology icon={SiNodedotjs} />
      <DeveloperTechnology icon={SiTailwindcss} />
      <DeveloperTechnology icon={SiMongodb} />
    </div>
  );
};

export default DeveloperTechnologies;
