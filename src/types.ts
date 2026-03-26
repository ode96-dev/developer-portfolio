import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type ProficiencyLevel = "Expert" | "Advanced" | "Intermediate";

export type Skill = {
    id: string;
    name: string;
    icon: IconType | LucideIcon;
    level: ProficiencyLevel;
    experience: string;
    category: string;
};

