"use client";

import { TECH_STACK } from "@/utils/contents";
import { StaggerWrapper } from '../stagger-wrapper';
import { StackTile } from './stack-tile';

export const TechStackSection = () => {
    return (
        <StaggerWrapper delay={ 0.4 }
            className="w-full flex flex-col mx-auto text-default text-center gap-8"
        >
            <p className="font-sora font-semibold text-lg md:text-3xl">What I Work With</p>
            <p className='-mt-6 text-xl text-secondary font-manrope'>My go-to stack for developing personal, academic, and experimental projects.</p>
            <div className="grid grid-cols-5 gap-6">
                { TECH_STACK.sort((a, b) => a.type.localeCompare(b.type)).map((stack, i) => (
                    <StackTile key={i} {...stack} />
                ))}
            </div>
        </StaggerWrapper>
    )
}

