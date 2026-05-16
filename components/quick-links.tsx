"use client";
import { SOCIALS } from '@/utils/contents';
import { SocialIcon } from './hero/social-link';
import { ChatBubble } from './chat/chat-bubble';
import { StaggerWrapper } from './stagger-wrapper';

export const QuickLinks = () => {
    const displayed = SOCIALS.filter(s => ['Github', 'LinkedIn'].includes(s.name));

    return (
        <StaggerWrapper delay={0.5} className="fixed bottom-20 left-1/2 -translate-x-1/2 lg:right-10 lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col gap-4 items-center justify-center border border-accent p-3 rounded-full text-accent">
            { displayed.map((social, i) => (
                <SocialIcon 
                    borderedIcons={ false }    
                    key={ i }                 
                    { ...social }
                    extendedClass="w-6 h-6 lg:w-8 lg:h-8"
                    iconSize="w-6 h-6 lg:w-8 lg:h-8 hover:-translate-y-0.5 transition-transform duration-150"/> 
            ))}
            <ChatBubble />
        </StaggerWrapper>
    );
}