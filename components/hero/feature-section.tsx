"use client";

import Image from 'next/image';
import { Features } from '@/components/hero/_components';
import { StaggerWrapper } from '../stagger-wrapper';

export const FeatureSection = () => {
    return (
        <StaggerWrapper delay={ 0.3 }
            className="flex w-4/5 lg:w-3/5 lg:h-[260px] gap-6 mx-auto"
        >
            <Features />
            {/* Finalist Solution Images */}
            <div className='relative hidden md:block md:w-2/5 border-2 border-accent rounded-lg'>
                <Image src='/img/projects/eSkolar-logo.png' alt="eSkolar" fill className='object-cover rounded-lg'/>
            </div>
        </StaggerWrapper>
    )
}