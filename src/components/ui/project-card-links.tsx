"use client";
import Link from "next/link";
import { IconType } from "react-icons";

const ProjectCardLinks = ({
  url,
  icon: Icon,
  title,
}: {
  url: string;
  icon: IconType;
  title: string;
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
      title={title}
    >
      <Icon className="w-4 h-4 text-white" />
    </Link>
  );
};

export default ProjectCardLinks;
