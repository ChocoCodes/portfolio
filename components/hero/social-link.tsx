'use client';

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
            target={ name !== 'Email' ? "_blank" : '_self'}
            aria-label={ name }
            className="text-default/80 flex justify-center items-center border border-default/80 rounded-sm p-1 w-5 h-5 md:w-10 md:h-10 hover:bg-default/80 hover:text-background transition-colors duration-300"
            rel="noopener noreferrer"
        >
            <Icon className='md:w-6 md:h-6 text-center' />
        </Link>
    )
}

export const SocialLinks = () => {
    return (
        <div className="flex gap-2 md:gap-3 items-center">
            {SOCIALS.map((social, i) => (
                <SocialIcon key={ i } name={ social.name } link={ social.link } icon={ social.icon } />
            ))}
        </div>
    )
}