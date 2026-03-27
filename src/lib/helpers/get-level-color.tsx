import { ProficiencyLevel } from "@/types";

export const getLevelColor = (level: ProficiencyLevel): string => {
  const colors: Record<ProficiencyLevel, string> = {
    Expert: "text-amber bg-amber/20 border-amber/20",
    Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/20",
    Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/20",
  };

  return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/20";
};
