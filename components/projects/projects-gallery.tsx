"use client";

import { ProjectCard } from './project-card';
import { PROJECTS } from '@/utils/contents';
import { StaggerWrapper } from '../stagger-wrapper';

const ProjectsGallery = () => {
    return (
        <StaggerWrapper 
            delay={ 0.3 }
            className="flex flex-col md:flex-row md:flex-wrap w-4/5 lg:w-3/5 gap-4 mx-auto"
        >
            { PROJECTS.map((project, i) => (
                <ProjectCard key={ i } { ...project } />
            ))}
        </StaggerWrapper>
    )
}

export const ProjectsSection = () => {
    return (
        <>
            <StaggerWrapper
                delay={ 0.1 }
                className="w-4/5 lg:w-3/5 text-start text-xl md:text-3xl font-semibold font-sora text-default"
            >
                <p>Featured Projects</p>
            </StaggerWrapper>
            <ProjectsGallery />
        </>
    )
}
