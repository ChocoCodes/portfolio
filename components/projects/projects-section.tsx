"use client"; 

import { ProjectCard } from './project-card';
import { PROJECTS } from '@/utils/contents';

export const ProjectsSection = () => {
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap w-4/5 md:w-3/5 gap-4">
            { PROJECTS.map((project, i) => (
                <ProjectCard key={ i } { ...project } />
            ))}
        </div>
    )
}