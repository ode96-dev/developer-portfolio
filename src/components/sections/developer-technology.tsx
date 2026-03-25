"use client";
import { IconType } from "react-icons";

const DeveloperTechnology = ({ icon: Icon }: { icon: IconType }) => {
  return (
    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
      <Icon className="w-full h-full text-primary" />
    </div>
  );
};

export default DeveloperTechnology;
