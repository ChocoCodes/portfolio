import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoFirebase } from "react-icons/bi";
import { 
    Project, 
    Feature, 
    TechStack 
} from './types';
import { 
    SiDiscord,
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

export const SOCIALS = [
    { name: 'Email', link: 'mailto:johnrlnd1704@gmail.com?subject=Inquiry%20From%20Porfolio', icon: IoMail, contact: 'johnrlnd1704@gmail.com' },
    { name: 'Github', link: 'https://github.com/ChocoCodes', icon: IoLogoGithub, contact: 'ChocoCodes' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/johnrlnd', icon: FaLinkedinIn },
    { name: 'Discord', link: 'https://discord.com/users/335627275821252608', icon: SiDiscord, contact: 'ambasingh404' }
];

export const PROJECTS: Project[] = [
    { 
        name: 'eSkolar', 
        description: 'Proof-of-Concept Centralized Scholarship Management Platform.', 
        githubLink: 'https://github.com/ChocoCodes/eskolar', 
        demoLink: 'https://drive.google.com/file/d/1QrwFCAgyd5lCa1kblCC9X1f-2Bm_GMco/view?usp=sharing', 
        isFeatured: true,
        competition: 'NextGenPH',
        imgPath: '/img/projects/eskolar-login.png',
        tags: [
            ...TECH_STACK.filter(t => (
                ['Next.js', 'TypeScript', 'Supabase'].includes(t.name)
            )),
            "RAG",
            "AI",
        ]
    },
    { 
        name: 'Kinot', 
        description: 'Expense Tracking System for Harvard: CS50x.', 
        githubLink: 'https://github.com/ChocoCodes/kinot', 
        demoLink: 'https://www.youtube.com/watch?v=rR93CpdobmA',
        imgPath: '/img/projects/kinot.png',
        tags: [
            ...TECH_STACK.filter(t => (
                ['React', 'TypeScript', 'Python'].includes(t.name)
            )),
            "Flask",
        ] 
    },
    { 
        name: 'Bantala', 
        description: 'Community-Powered Web Application with RAG.',
        githubLink: 'https://github.com/ChocoCodes/solcha-bb', 
        demoLink: 'https://www.youtube.com/watch?v=EcPemPmNJa8',
        isFeatured: true,
        competition: 'Google APAC Solution Challenge 2025',
        imgPath: '/img/projects/bantala.png',
        tags: TECH_STACK.filter(t => (
                ['Next.js', 'Firebase', 'TypeScript', 'Python'].includes(t.name)
        ))
    },
    { 
        name: 'Nixar POS', 
        description: 'Point of Sale (POS) system for Nixar Auto Glass & Car Tint.', 
        githubLink: 'https://github.com/ChocoCodes/nixar-pos', 
        demoLink: 'https://drive.google.com/file/d/1WrP2BQSUlMnlElFJBkaaJfB0jaCJPhhL/view?usp=sharing', 
        imgPath: '/img/projects/nixar-pos.png',
        tags: TECH_STACK.filter(t => (
            ['PHP', 'MySQL', 'JavaScript'].includes(t.name)
        ))
    },
    { 
        name: 'MatrixLab', 
        description: 'Simple Matrix Arithmetic calculator.', 
        githubLink: 'https://github.com/ChocoCodes/matrix-lab',
        demoLink: 'https://matrix-lab-sigma.vercel.app/',
        imgPath: '/img/projects/matrixlab.png',
        tags: [
            ...TECH_STACK.filter(t => (
                ['HTML5', 'JavaScript'].includes(t.name)
            )),
            "CSS"
        ], 
    },
    { 
        name: 'Smart Irrigation System', 
        description: 'Smartphone-Controlled Irrigation System using HC05 bluetooth module.', 
        githubLink: 'https://github.com/ChocoCodes/automated-irrigation-system',
        imgPath: '/img/projects/smartphone.png',
        tags: [
            TECH_STACK.find(t => t.name === 'Arduino')!,
            "MIT App Inventor",
            "IoT"
        ] 
    },
    { 
        name: 'Portfolio v0', 
        description: 'My portfolio using native web stack and PHP.', 
        githubLink: 'https://github.com/ChocoCodes/cbad-midterm-portfolio', 
        demoLink: 'https://drive.google.com/file/d/1RKcgusxV9cNrQ4cSfZMmr5toLY6ZHf8J/view?usp=sharing', 
        imgPath: '/img/projects/portfoliov0.png',
        tags: [
            ...TECH_STACK.filter(t => (
                ['PHP', 'HTML5', 'JavaScript'].includes(t.name)
            )),
            'Bootstrap',
            'CSS'
        ]
    },
    {
        name: 'Scientia Aeternum',
        description: 'Curated reflections and key takeaways from the STS course.',
        githubLink: 'https://github.com/ChocoCodes/scientia-aeternum',
        demoLink: 'https://scientia-aeternum.vercel.app',
        imgPath: '/img/projects/aeternum.png',
        tags: [
            ...TECH_STACK.filter(t => (
                ['React', 'TypeScript'].includes(t.name)
            )),
            "CSS",
        ]
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
