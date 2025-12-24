"use client";
import { IconType } from "react-icons";
import { SocialIcon } from "../hero/social-link";
import { CopyButton } from "./_components";
import { SOCIALS } from "@/utils/contents";
import { StaggerWrapper } from "../stagger-wrapper";

interface ContactLinkProps { 
    name: string;
    link: string;
    icon: IconType;
    borderedIcons?: boolean;
    contact?: string;
    extendedClass: string;
    iconSize: string;
}

export const ContactLink = ({ name, link, icon, borderedIcons = true, contact, extendedClass, iconSize }: ContactLinkProps) => {
    return (
        <div className="flex md:flex-col gap-2 items-center text-center">
            <SocialIcon 
                name={ name } 
                link={ link } 
                icon={ icon } 
                borderedIcons={ borderedIcons } 
                extendedClass={ extendedClass }
                iconSize={ iconSize }
            />
            <div className="flex gap-2">
                <p className="text-default/95 text-lg font-semibold">{ name }</p>
                { contact && <CopyButton value={ contact } />  }
            </div>
        </div>
    )
}

export const ContactLinks = () => {
    return (
        <StaggerWrapper 
            delay={ 0.4 }
            className="flex flex-col md:flex-row gap-6 md:gap-14 items-start md:justify-center mx-auto"
        >
            {SOCIALS.map((social, i) => (
                <ContactLink 
                    key={ i } 
                    { ...social }
                    borderedIcons={ false }
                    extendedClass="w-10 h-10 md:w-15 md:h-15"
                    iconSize="w-6 h-6 md:w-8 md:h-8"
                />
            ))}
        </StaggerWrapper>
    )
}