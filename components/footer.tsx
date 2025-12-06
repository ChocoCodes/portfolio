import { SocialLinks } from '@/components/hero/_components';

export const Footer = () => {
    return (
        <footer className="w-4/5 md:w-3/5 text-default font-sora py-2 mt-auto flex items-center justify-between">
            <SocialLinks borderedIcons={ false } />
            <div className="flex gap-1 md:gap-2 text-[8px] md:text-base items-center">
                <p className="text-[8px] md:text-base">&copy; { new Date().getFullYear() } </p> 
                <p>John Roland Octavio</p>
            </div>
        </footer>
    )
}