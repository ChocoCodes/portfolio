'use client';

import { IconType } from 'react-icons';
import Link from 'next/link';
import { SOCIALS } from '@/utils/contents';

interface SocialIconProps {
    name: string;
    link: string;
    icon: IconType;
    borderedIcons?: boolean;
    extendedClass: string;
    iconSize: string;
}

interface SocialLinksProps {
    borderedIcons?: boolean;
}

export const SocialIcon = ({ name, link, icon: Icon, borderedIcons, extendedClass, iconSize }: SocialIconProps) => {
    return (
        <Link 
            href={ link } 
            target={ name !== 'Email' ? "_blank" : '_self' } 
            aria-label={ name }
            className={`${ borderedIcons ? 'border border-default/80' : '' } ${ extendedClass } text-default/80 flex justify-center items-center bg-surface rounded-sm p-1 hover:bg-default/80 hover:text-background transition-colors duration-300`}
            rel="noopener noreferrer"
        >
            <Icon className={`${ iconSize } text-center`} />
        </Link>
    )
}

export const SocialLinks = ({ borderedIcons = true }: SocialLinksProps) => {
    return (
        <div className="flex gap-2 md:gap-3 items-center">
            {SOCIALS.filter(social => social.name !== 'Discord').map((social, i) => (
                <SocialIcon 
                    key={ i } 
                    { ...social }
                    borderedIcons={ borderedIcons } 
                    extendedClass='w-5 h-5 md:w-10 md:h-10' 
                    iconSize='md:w-6 md:h-6'
                />
            ))}
        </div>
    )
}