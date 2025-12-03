import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

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