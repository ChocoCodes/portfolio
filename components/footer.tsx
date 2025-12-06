import { FaRegCopyright } from "react-icons/fa6";
import { SocialLinks } from '@/components/hero/_components';

export const Footer = () => {
    return (
        <footer className="w-4/5 md:w-3/5 text-default font-sora py-2 mt-auto flex items-center justify-between">
            <SocialLinks borderedIcons={ false } />
            <div className="flex gap-1 text-[8px] items-center">
                <p className="text-[8px]">&copy; {new Date().getFullYear()} </p> 
                <p>John Roland Octavio</p>
            </div>
        </footer>
    )
}