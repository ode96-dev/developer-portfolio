import { ProficiencyLevel } from "@/types";

export const getProficiencyLevel = (level: ProficiencyLevel): number => {
    const levels: Record<ProficiencyLevel, number> = {
        "Expert": 95,
        "Advanced": 80,
        "Intermediate": 65,
    }

    return levels[level] || 50
}