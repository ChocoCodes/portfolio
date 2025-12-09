import Link from 'next/link'
import { IconType } from 'react-icons';

interface CTAProps {
    className: string;
    icon: IconType;
    text: string;
    link: string;
    toSelf?: boolean
};

export const CTA = ({ className, icon: Icon, text, link, toSelf = false }: CTAProps) => {
    return (
        <Link 
            className={`flex gap-2 items-center justify-center rounded-xs text-xs py-1 px-2 md:text-lg md:px-4 md:rounded-md ${ className }`} 
            href={ link }
            target={ toSelf ? "_self" : "_blank" }
        >
            <p>{ text }</p>
            <Icon />
        </Link>
    )
}