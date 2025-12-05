import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { Project, Feature, TechStack } from './types';
import { BiLogoFirebase } from "react-icons/bi";
import { 
    SiReact, 
    SiNextdotjs, 
    SiJavascript, 
    SiTypescript, 
    SiHtml5, 
    SiTailwindcss,
    SiMysql,
    SiSupabase,
    SiPython,
    SiArduino,
    SiPhp
} from "react-icons/si";

export const NAV_ITEMS = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Projects', link: '/projects' },
    { title: 'Contact', link: '/contact' }
];

export const SOCIALS = [
    { name: 'Email', link: 'mailto:johnrlnd1704@gmail.com?subject=Portfolio%20Inquiry', icon: IoMail },
    { name: 'Github', link: 'https://github.com/ChocoCodes', icon: IoLogoGithub },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/johnrlnd', icon: FaLinkedinIn },
];

export const PROJECTS: Project[] = [
    { 
        name: 'eSkolar', 
        description: 'Proof-of-Concept Centralized Scholarship Management Platform', 
        githubLink: 'https://github.com/ChocoCodes/eskolar', 
        demoLink: 'https://drive.google.com/file/d/1QrwFCAgyd5lCa1kblCC9X1f-2Bm_GMco/view?usp=sharing', 
        isFeatured: true,
        competition: 'NextGenPH'
    },
    { 
        name: 'Kinot', 
        description: 'Expense Tracking System for Harvard: CS50x', 
        githubLink: 'https://github.com/ChocoCodes/kinot', 
        demoLink: 'https://www.youtube.com/watch?v=rR93CpdobmA', 
    },
    { 
        name: 'Bantala', 
        description: 'Community-Powered Web Application with RAG',
        githubLink: 'https://github.com/ChocoCodes/solcha-bb', 
        demoLink: 'https://www.youtube.com/watch?v=EcPemPmNJa8',
        isFeatured: true,
        competition: 'Google APAC Solution Challenge 2025'
    },
    { 
        name: 'Nixar POS', 
        description: 'Point of Sale (POS) System for Nixar Auto Glass & Car Tint', 
        githubLink: 'https://github.com/ChocoCodes/nixar-pos', 
        demoLink: 'https://drive.google.com/file/d/1WrP2BQSUlMnlElFJBkaaJfB0jaCJPhhL/view?usp=sharing' 
    },
    { 
        name: 'MatrixLab', 
        description: 'Simple Matrix Arithmetic Calculator', 
        githubLink: 'https://github.com/ChocoCodes/matrix-lab' 
    },
    { 
        name: 'Smart Irrigation System', 
        description: 'Smartphone-Controlled Irrigation System using HC05 Bluetooth module.', 
        githubLink: 'https://github.com/ChocoCodes/automated-irrigation-system' 
    },
    { 
        name: 'Portfolio v0', 
        description: 'My Portfolio using Native Web Stack and PHP', 
        githubLink: 'https://github.com/ChocoCodes/cbad-midterm-portfolio', 
        demoLink: 'https://drive.google.com/file/d/1RKcgusxV9cNrQ4cSfZMmr5toLY6ZHf8J/view?usp=sharing' 
    } 
];

export const FEATURES: Feature[] = [
    { 
        achievement: 'National Finalist', 
        competition: 'NextGenPH', 
        organizer: 'Development Academy of the Philippines', 
        featureLink: 'https://youtu.be/5QVBBuQlCVs',
        title: 'eSkolar: AI-Powered Centralized Scholarship Management Platform',
    },
    { 
        achievement: 'Participant', 
        competition: 'Google APAC Solution Challenge 2025', 
        organizer: 'Hack2Skill',
        featureLink: 'https://www.youtube.com/watch?v=EcPemPmNJa8',
        title: 'Bantala: Community-Powered Disaster Web Application'
    }
]

export const TECH_STACK: TechStack[] = [
    { icon: SiReact, name: 'React', type: "frameworks/libraries" },
    { icon: SiNextdotjs, name: 'Next.js', type: "frameworks/libraries" },
    { icon: SiTypescript, name: 'TypeScript', type: "languages" },
    { icon: SiJavascript, name: 'JavaScript', type: "languages" },
    { icon: SiHtml5, name: 'HTML5', type: "languages" },
    { icon: SiTailwindcss, name: 'TailwindCSS', type: "frameworks/libraries" },
    { icon: SiMysql, name: 'MySQL', type: "databases" },
    { icon: SiSupabase, name: 'Supabase', type: "tools" },
    { icon: BiLogoFirebase, name: 'Firebase', type: "databases" },
    { icon: SiPython, name: 'Python', type: "languages" },
    { icon: SiArduino, name: 'Arduino', type: "tools" },
    { icon: SiPhp, name: 'PHP', type: "languages" }
]