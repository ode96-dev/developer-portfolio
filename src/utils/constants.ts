import { TestimonialStat } from "@/types";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export const PERSONAL_INFO = {
    name: "Ode Dev",
    title: "Full Stack Developer & Cybersecurity Enthusiast",
    email: "example@example.com",
    location: "Nairobi, Kenya",
    tagline: "Building secure, scalable, and user-focused digital solutions.",
    resume: "/resume-sample.pdf",
    bio: [
        "I am a full stack developer with a strong focus on building modern, scalable web and mobile applications using technologies like React, Next.js, and Node.js.",
        "With a growing specialization in cybersecurity, I enjoy developing secure systems, exploring vulnerabilities, and implementing best practices to protect digital assets.",
        "I have experience working on real-world projects including property platforms, business solutions, and API-driven systems, always prioritizing performance and user experience.",
        "I am passionate about continuous learning, problem-solving, and leveraging technology to create impactful solutions across Africa and beyond."
    ],
};

export const SOCIAL_LINKS = {
    github: 'https://github.com/ode96-dev',
    linkedin: 'https://github.com/ode96-dev',
    twitter: 'https://github.com/ode96-dev',
    dribble: 'https://github.com/ode96-dev',
};

export const STATS = [
    { label: 'Years of experience', value: '10+' },
    { label: 'Projects completed', value: '100+' },
    { label: 'Technologies', value: '5+' },
    { label: 'Client Satisfaction', value: '100%' },
];

export const ABOUT_STATS = [
    { label: 'Happy Clients', value: '50+' },
    { label: 'Code Commits', value: '2.5k+' },
    { label: 'Github Stars', value: '100+' },
]

export const NAV_LINKS = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
]

export const SKILLS = [
    { name: 'React.js', icon: SiReact, color: "#61DAF8" },
    { name: 'React.js', icon: SiNextdotjs, color: "#000000" },
    { name: 'React.js', icon: SiTypescript, color: "#3178C6" },
    { name: 'React.js', icon: SiTailwindcss, color: "#06B6D4" },
    { name: 'React.js', icon: SiNodedotjs, color: "#339933" },
    { name: 'React.js', icon: SiMongodb, color: "#47A248" },
]

export const TESTIMONIAL_STATS: TestimonialStat[] = [
    { value: "3x", label: "Faster Delivery" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "100%", label: "On-time Delivery" },
    { value: "5★", label: "Average Rating" },
];

export const socialIcons = {
    github: BsGithub,
    linkedin: BsLinkedin,
    twitter: BsTwitterX
}