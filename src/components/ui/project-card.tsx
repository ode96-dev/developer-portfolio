import { Project } from "@/types";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    description,
    image,
    technologies,
    metrics,
    demoUrl,
    githubUrl,
  } = project;

  return (
    <div className="group relative flex flex-col bg-white/3 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 hover:bg-white/6 transition-all duration-500 hover:shadow-[0_0_40px_-8px] hover:shadow-primary/20">
      <div className="relative h-52 overflow-hidden">
        <Image
          fill
          src={image}
          alt={title}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-[10px] tracking-widest uppercase font-semibold text-white/80 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
            {project.category}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Code"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <BsGithub className="w-4 h-4" />
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Demo"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-md border border-primary/30 text-white text-xs font-medium hover:bg-primary hover:scale-105 transition-all duration-200"
            >
              <span>Live</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="space-y-1.5">
          <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300 leading-snug">
            {title}
          </h3>
          <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 text-[10px] font-medium text-primary/80 bg-primary/10 border border-primary/15 rounded-md hover:bg-primary/20 hover:text-primary transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {metrics && (
          <div className="flex items-center gap-2 pt-3 mt-auto border-t border-white/[0.07]">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary/15">
              <TrendingUp className="w-3 h-3 text-primary" />
            </span>
            <p className="text-xs font-medium text-primary/90">{metrics}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
