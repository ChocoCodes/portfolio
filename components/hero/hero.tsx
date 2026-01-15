"use client";

import { GrLocationPin } from "react-icons/gr";
import { CTA } from './cta';
import { SocialLinks } from "./social-link";
import { FaDownload } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { StaggerWrapper } from "../stagger-wrapper";

export const Hero = () => {
    return (
        <StaggerWrapper delay={ 0.2 }
            className="flex flex-col justify-start w-4/5 lg:w-3/5 border gap-2 md:gap-4 border-accent rounded-lg mx-auto p-4 md:py-6 md:px-8"
        >
            <div className="flex justify-between items-center">
                <div className="flex gap-2 md:gap-4 items-center">
                    <p className='font-sora font-medium text-[12px] md:text-2xl lg:text-3xl text-default'>John Roland Octavio</p>
                    <div className="flex items-center gap-1 md:gap-2 text-[6px] md:text-sm text-secondary font-manrope">
                        <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-green"></div>
                        <p>Available</p>
                    </div>
                </div>
                <SocialLinks />
            </div>
            <p className="inline-flex gap-1 text-[8px] lg:text-lg items-center font-manrope text-secondary -mt-2 md:-mt-4"> <GrLocationPin /> Bacolod City, Philippines</p>
            <p className="w-full text-[10px] lg:text-lg text-default">
                I specialize in building clean, practical, and effective solutions for 3 years. 
                Currently serving as the <span className="font-semibold">Chief Technology Officer</span> and was a former <span className="font-semibold">Web Development Lead</span> of  
                <span className="italic"> Google Developer Groups on Campus-USLS</span>.
            </p>
            <div className="flex gap-2 md:gap-4 items-center mt-1">
                <CTA 
                    className='border border-accent text-accent hover:text-background hover:bg-accent transition-colors duration-200' 
                    icon={ FaDownload } 
                    text='Resume' 
                    link='https://drive.google.com/file/d/1DSpayPFPo9L_05WBO_2r7YBQLbqk583P/view?usp=sharing'
                />
                <CTA 
                    className='bg-accent text-default border-0 hover:bg-accent/75 transition-colors duration-300' 
                    icon={ HiOutlineArrowNarrowRight } 
                    text='My Works' 
                    link='/projects'
                    toSelf={ true }
                />
            </div>
        </StaggerWrapper>
    )
}