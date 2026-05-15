"use client";

import { useState } from 'react';
import { ProjectCard } from './project-card';
import { PROJECTS } from '@/utils/contents';
import { StaggerWrapper } from '../stagger-wrapper';
import { Carousel } from '../carousel';

const ProjectCarousel = () => {
    return (
        <StaggerWrapper 
            delay={ 0.3 }
            className="w-full max-w-4/5 mx-auto"
        >
            <Carousel items={ PROJECTS } renderItem={ project => <ProjectCard {...project} /> }/>
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
