"use client";

import { useState } from 'react';
import { ProjectCard } from './project-card';
import { PROJECTS } from '@/utils/contents';
import { StaggerWrapper } from '../stagger-wrapper';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const ProjectCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = Math.max(0, PROJECTS.length - 2);

    const next = () => setCurrentIndex(prev => Math.min(prev + 2, maxIndex));
    const prev = () => setCurrentIndex(prev => Math.max(prev - 2, 0));

    return (
        <StaggerWrapper 
            delay={ 0.3 }
            className="w-full max-w-4/5 mx-auto"
        >
            <div className="relative">
                <div className="flex overflow-hidden">
                    <div className="flex w-full transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
                        { PROJECTS.map((project, i) => (
                            <div key={ i } className="basis-1/2 shrink-0 px-2 snap-start">
                                <ProjectCard { ...project } />
                            </div>
                        ))}
                    </div>
                </div>
                { currentIndex > 0 && (
                    <button
                        onClick={ prev }
                        className="absolute -left-5 top-1/2 -translate-x-1/2 -translate-y-1/2 
                            bg-default text-background rounded-full p-1 shadow-md"
                    >
                        <HiChevronLeft size={ 24 } />
                    </button>
                )}
                { currentIndex < maxIndex && (
                    <button
                        onClick={ next }
                        className="absolute -right-5 top-1/2 translate-x-1/2 -translate-y-1/2 
                            bg-default text-background rounded-full p-1 shadow-md"
                    >
                        <HiChevronRight size={ 24 } />
                    </button>
                )}
            </div>
        </StaggerWrapper>
    )
}

export const ProjectsSection = () => {
    return (
        <>
            <StaggerWrapper
                delay={ 0.1 }
                className="w-4/5 lg:w-3/5 text-center font-sora text-default"
            >
                <p className='text-xl md:text-4xl font-semibold'>Featured Projects</p>
                <p className='mt-2 text-xl text-secondary font-manrope font-medium'>Selected projects from my academic and personal work.</p>
            </StaggerWrapper>
            <ProjectCarousel />
        </>
    )
}
