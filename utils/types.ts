import { IconType } from "react-icons";

export type ProjectTag = string | TechStack;

export type Project = {
    name: string;
    description: string;
    githubLink?: string;
    demoLink?: string;
    imgPath?: string;
    isFeatured?: boolean;
    competition?: string;
    tags?: ProjectTag[];
}

export type Feature = {
    achievement: string;
    competition: string;
    organizer: string;
    featureLink: string;
    title: string;
}

export type TechStack = {
    icon: IconType;
    name: string;
    type: "languages" | "tools" | "databases" | "frameworks/libraries"; 
}