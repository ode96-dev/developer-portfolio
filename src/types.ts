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

export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    metrics: string;
    demoUrl: string;
    githubUrl: string;
}

export interface TestimonialStat {
    value: string;
    label: string;
}

export interface NavButtonProps {
    direction: "prev" | "next";
    onClick: () => void;
}

export interface StatBadgeProps {
    stat: TestimonialStat;
}

export type Variant = "hero" | "about";

export type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
}

export interface DotIndicatorsProps {
    count: number;
    currentIndex: number;
    onSelect: (index: number) => void;
}

export type StatusType = "success" | "error" | "";

export interface FormData {
    name: string;
    email: string;
    message: string;
}

export interface FormStatus {
    type: StatusType;
    message: string;
}

export
    type AnimationType =
    | "fadeUp"
    | "fadeIn"
    | "slideLeft"
    | "slideRight"
    | "scaleIn";

export interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
}