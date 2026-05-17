"use client";

import { StaggerWrapper } from '../stagger-wrapper';
import { CertificateCard } from './certificate-card';
import { CERTS } from '@/utils/contents';
import { Carousel } from '../carousel';

export const Certifications = () => {
    return (
        <div className="flex flex-col gap-6 w-full my-auto">
            <StaggerWrapper delay={ 0.1 } className="text-center font-sora text-default">
                <p className="text-xl md:text-4xl text-default font-sora font-semibold">Certifications</p>
                <p className='mt-2 text-xs md:text-xl text-secondary font-manrope font-medium'>Certifications from platforms, programs, and trainings I have completed.</p>
            </StaggerWrapper>
            <StaggerWrapper delay={ 0.3 } className="w-full max-w-4/5 mx-auto">
                <Carousel items={ CERTS } renderItem={ cert => <CertificateCard {...cert} /> }/>
            </StaggerWrapper>
        </div>
    )
}