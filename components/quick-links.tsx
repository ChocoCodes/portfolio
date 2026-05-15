"use client";
import { SOCIALS } from '@/utils/contents';
import { SocialIcon } from './hero/social-link';
import { ChatBubble } from './chat/chat-bubble';

export const QuickLinks = () => {
    const displayed = SOCIALS.filter(s => ['Github', 'LinkedIn'].includes(s.name));

    return (
        <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center justify-center border border-accent p-3 rounded-full text-accent">
            { displayed.map((social, i) => (
                <SocialIcon 
                    borderedIcons={ false }    
                    key={ i }                 
                    { ...social }
                    extendedClass="w-8 h-8"
                    iconSize="w-8 h-8 hover:-translate-y-0.5 transition-transform duration-150"/> 
            ))}
            <ChatBubble />
        </div>
    );
}