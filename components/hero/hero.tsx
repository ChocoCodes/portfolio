"use client";

import Image from 'next/image';
import { GrLocationPin } from "react-icons/gr";
import { CTA } from './cta';
import { FaDownload } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { StaggerWrapper } from "../stagger-wrapper";

export const Hero = () => {
    return (
        <StaggerWrapper delay={ 0.2 }
            className="flex flex-col items-center my-auto text-center w-4/5 lg:w-3/5 gap-3 mx-auto p-4 md:py-6 md:px-8"
        >
            <div className="flex flex-col gap-2 justify-between items-center">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 md:w-13 md:h-13 relative">
                        <Image src='/img/profile-octavio.jpg' alt="Image of John Octavio" fill className='object-cover rounded-sm'/>
                    </div>
                    <p className='font-sora font-medium md:text-2xl lg:text-3xl text-default'>John Roland Octavio</p>
                </div>
                <p className='font-manrope text-sm lg:text-xl'>Third Year CS Student @ USLS - Bacolod</p>
            </div>
            <p className="inline-flex gap-1 text-sm lg:text-lg items-center font-manrope text-secondary font-medium"> <GrLocationPin /> Bacolod City, Philippines</p>
            <p className="w-full text-xs lg:text-xl text-default">
                I build clean, practical, and effective solutions. 
                Served as the <span className="font-semibold text-accent">Chief Technology Officer</span> and <span className="font-semibold text-accent">Web Development Lead</span> of  
                <span className="italic"> Google Developer Groups on Campus-USLS</span>.
            </p>
            <div className="flex gap-6 md:gap-12 items-center mt-5">
                <CTA 
                    className='border border-accent text-accent hover:text-background hover:bg-accent transition-colors duration-200' 
                    icon={ FaDownload } 
                    text='Resume' 
                    link='https://drive.google.com/file/d/15RlLx6T4VmIiO0gVO_F0aS3TIgHjJUnI/view?usp=sharing'
                />
                <CTA 
                    className='bg-accent text-background border-0 hover:bg-accent-dark transition-colors duration-300' 
                    icon={ HiOutlineArrowNarrowRight } 
                    text='My Works' 
                    link='/projects'
                    toSelf={ true }
                />
            </div>
        </StaggerWrapper>
    )
}