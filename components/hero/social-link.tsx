import { IconType } from 'react-icons';
import Link from 'next/link';
import { SOCIALS } from '@/utils/contents';

interface SocialIconProps {
    name: string;
    link: string;
    icon: IconType;
}

const SocialIcon = ({ name, link, icon: Icon }: SocialIconProps) => {
    return (
        <Link 
            href={ link } 
            target="_blank"
            aria-label={ name }
            className="text-default/80 flex justify-center items-center border border-default/80 rounded-sm p-1 w-5 h-5"
        >
            <Icon />
        </Link>
    )
}

export const SocialLinks = () => {
    return (
        <div className="flex gap-2 items-center">
            {SOCIALS.map((social, i) => (
                <SocialIcon key={ i } name={ social.name } link={ social.link } icon={ social.icon } />
            ))}
        </div>
    )
}