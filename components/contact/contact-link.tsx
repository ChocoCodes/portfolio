"use client";
import { IconType } from "react-icons";
import { SocialIcon } from "../hero/social-link";
import { SOCIALS } from "@/utils/contents";
import { StaggerWrapper } from "../stagger-wrapper";

interface ContactLinkProps { 
    name: string;
    link: string;
    icon: IconType;
    contact: string;
    borderedIcons?: boolean;
    extendedClass: string;
    iconSize: string;
}

export const ContactLink = ({ name, link, contact, icon, borderedIcons = true, extendedClass, iconSize }: ContactLinkProps) => {
    return (
        <SocialIcon 
            name={ name } 
            link={ link } 
            icon={ icon } 
            contact={ contact }
            borderedIcons={ borderedIcons } 
            extendedClass={ extendedClass }
            iconSize={ iconSize }
        />
    )
}

export const ContactLinks = () => {
    return (
        <StaggerWrapper 
            delay={ 0.4 }
            className="flex flex-col gap-3 items-start"
        >
            {SOCIALS.map((social, i) => (
                <ContactLink 
                    key={ i } 
                    { ...social }
                    extendedClass="min-w-10 h-10 md:min-w-15 md:h-15"
                    iconSize="w-6 h-6 md:w-8 md:h-8"
                />
            ))}
        </StaggerWrapper>
    )
}
