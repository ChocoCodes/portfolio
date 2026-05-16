"use client";

import { useState } from 'react';
import { ProjectTag } from '@/utils/types';
import Image from 'next/image';
import { Tag } from '../_components';
import { ExternalLink } from './external-link';

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
    const links = [
        githubLink ? { href: githubLink, icon: 'github' } : null,
        demoLink ? { href: demoLink, icon: 'external' } : null,
    ];
    return (
        <div className="flex flex-col text-default gap-3">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-default/25 shadow-md hover:shadow-lg">
                <Image 
                    fill 
                    src={ imgPath } 
                    alt={`Project ${ name }`} 
                    className="object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                />
            </div>
            <div className="flex flex-col gap-1 px-1">
                <div className="flex justify-between items-center">
                    <p className="text-base md:text-xl font-medium font-sora">{name}</p>
                    <div className="flex gap-3 items-center">
                        {links.map((link, i) => (
                            link ? (
                                <ExternalLink key={ i } href={ link.href! } icon={ link.icon as "github" | "external" } /> 
                            ) : null
                        ))}
                    </div>
                </div>
                <p className='font-manrope text-[10px] md:text-sm text-secondary'>{ description }</p>
            </div>
            <div className="flex flex-wrap w-full gap-1 md:gap-2 px-1">
                {tags && (
                    tags.map((tag, i) => 
                        <Tag 
                            key={ i }
                            text={ typeof tag === 'string' ? tag : tag.name }
                            extendedClass='text-[10px] md:text-sm py-1 px-2'
                            icon={ typeof tag === 'string' ? undefined : tag.icon }
                        />
                    )
                )}
            </div>
        </div>
    )
}