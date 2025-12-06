import { ProjectTag } from '@/utils/types';
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
    imgPath,
    competition,
    tags
}: ProjectCardProps) => {

}