import Link from 'next/link'
import { IconType } from 'react-icons';

interface CTAProps {
    className: string;
    icon: IconType;
    text: string;
    link: string;
};

export const CTA = ({ className, icon: Icon, text, link}: CTAProps) => {
    return (
        <Link className={`flex gap-2 items-center justify-center rounded-xs ${ className }`} href={ link }>
            <Icon />
            <p>{ text }</p>
        </Link>
    )
}