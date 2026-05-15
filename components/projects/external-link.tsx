import { IoLogoGithub } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from 'next/link';
import { IconType } from "react-icons";

type IconKeys = keyof typeof ICONS;

interface ExternalLinkProps {
    href: string;
    icon: IconKeys;
};

const ICONS = {
    github: IoLogoGithub,
    external: HiOutlineExternalLink
};

export const ExternalLink = ({ href, icon }: ExternalLinkProps) => {
    const Icon: IconType = ICONS[icon];
    return (
        <Link 
            href={ href } 
            rel="noopener noreferrer"
            target="_blank"
            className="rounded-full flex items-center text-surface hover:text-accent transition-colors duration-200"
        >
            <Icon className="md:text-2xl"/>
        </Link>
    )
}
