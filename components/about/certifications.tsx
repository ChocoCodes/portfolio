"use client";

import { StaggerWrapper } from '../stagger-wrapper';
import { CertsMarquee } from './certs-marquee';

export const Certifications = () => {
    return (
        <StaggerWrapper delay={ 0.4 } className="flex flex-col gap-8">
          <p className="text-3xl text-default font-sora font-semibold">Certifications</p>
          <CertsMarquee />
        </StaggerWrapper>
    )
}