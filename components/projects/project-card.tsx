"use client";

import { useState } from 'react';
import { ProjectTag } from '@/utils/types';
import Image from 'next/image';
import { Tag } from '../_components';

interface ProjectCardProps {
    name: string;
    description: string;
    githubLink?: string;
    demoLink?: string;
    imgPath?: string;
    competition?: string;
    tags?: ProjectTag[]
}

export const ProjectCard = ({
    name,
    description,
    githubLink,
    demoLink,
    imgPath = "",
    competition,
    tags
}: ProjectCardProps) => {
    const [tapped, setTapped] = useState(false);

    const handleMobileTap = (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth > 768) return;
        setTapped(prev => !prev);
    }
    
    return (
        <div 
            className="group relative w-full md:w-[49%] aspect-video text-default rounded-lg overflow-hidden border border-default/25"
            onClick={ e => handleMobileTap(e) }
        >
            <Image 
                fill 
                src={ imgPath } 
                alt={`Project ${ name }`} 
                className={`${ tapped ? 'scale-105' : 'scale-100' } 
                    object-cover rounded-lg md:group-hover:scale-105 active:scale-105 
                    will-change-transform transition-transform duration-200 
                    mask-[linear-gradient(to_top,transparent_5%,#000_80%)]`}
            />
            <div className="absolute inset-0 bg-black opacity-20 md:opacity-10 pointer-events-none rounded-lg" />

            <div 
                className={`
                    w-full flex flex-col gap-2 absolute z-10 bottom-0
                    py-2 md:py-4 px-3 font-sora font-medium transition-all duration-300
                    md:translate-y-full md:opacity-0
                    md:group-hover:translate-y-0 md:group-hover:opacity-100
                    ${ tapped ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0' } 
                `}
            >
                <div className="flex flex-col">
                    <p className='text-base md:text-xl'>{ name }</p>
                    <p className='font-manrope text-[10px] md:text-sm text-secondary'>{ description }</p>
                </div>
                <div className="flex flex-wrap w-full gap-1 md:gap-2">
                    {tags && (
                        tags.map((tag, i) => 
                            <Tag 
                                key={ i }
                                text={ typeof tag === 'string' ? tag : tag.name }
                                extendedClass='text-[10px] md:text-xs py-1 px-2'
                                icon={ typeof tag === 'string' ? undefined : tag.icon }
                                bordered={ false }
                            />
                        )
                    )}
                </div>
            </div>

        </div>
    )
}