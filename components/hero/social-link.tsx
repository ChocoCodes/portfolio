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
    contact: string
}

interface SocialLinksProps {
    borderedIcons?: boolean;
}

export const SocialIcon = ({ name, link, contact, icon: Icon, borderedIcons, extendedClass, iconSize }: SocialIconProps) => {
    return (
        <Link 
            href={ link } 
            target={ name !== 'Email' ? "_blank" : '_self' } 
            aria-label={ name }
            className={`${ borderedIcons ? 'border border-transparent hover:text-accent hover:scale-105 rounded-full px-6 hover:border-accent transition-transform duration-300 ease-out' : '' } ${ extendedClass } flex items-center gap-2`}
            rel="noopener noreferrer"
        >
            <Icon className={`${ iconSize } text-center shrink-0`} />
            <p className="text-default/95 font-medium">{ contact }</p>
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
                    extendedClass='min-w-5 h-5 md:min-w-10 md:h-10' 
                    iconSize='md:w-6 md:h-6'
                />
            ))}
        </div>
    )
}
