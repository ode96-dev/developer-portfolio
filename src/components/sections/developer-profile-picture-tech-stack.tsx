"use client";
import FadeIn from "@/animations/fade-in";
import Image from "next/image";
import DeveloperTechnologies from "./developer-technologies";

const DeveloperProfilePictureTechStack = () => {
  return (
    <FadeIn delay={200}>
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-125 ml-auto group">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]">
            <Image
              fill
              src={"/images/developer/developer.jpg"}
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 z-20">
            <FadeIn delay={500}>
              <DeveloperTechnologies />
            </FadeIn>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default DeveloperProfilePictureTechStack;
