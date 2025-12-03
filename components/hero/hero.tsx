import { GrLocationPin } from "react-icons/gr";
import { CTA } from './cta';
import { SocialLinks } from "./social-link";
import { FaDownload } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Hero = () => {
    return (
       <div className="flex flex-col w-full">
            <div className="flex flex-col justify-start w-4/5 md:w-3/5 border gap-2 md:gap-4 border-accent rounded-lg mx-auto p-4 md:py-6 md:px-8">
                <div className="flex justify-between items-center">
                    <p className='font-sora font-medium text-sm md:text-3xl text-default'>John Roland Octavio</p>
                    <SocialLinks />
                </div>
                <p className="inline-flex gap-1 text-[10px] lg:text-lg items-center font-manrope text-secondary -mt-2 md:-mt-4"> <GrLocationPin /> Bacolod City, Philippines</p>
                <p className="w-full text-[10px] lg:text-lg text-default">
                    I specialize in building clean, practical, and effective solutions for 3 years. Currently serving as the <span className="font-semibold">Chief Technology Officer</span> and a former <span className="font-semibold">Web Development Lead</span>.
                </p>
                <div className="flex gap-2 md:gap-4 items-center mt-1">
                    <CTA 
                        className='border border-accent text-accent' 
                        icon={ FaDownload } 
                        text='Resume' 
                        link=''
                    />
                    <CTA 
                        className='bg-accent text-default border-0' 
                        icon={ HiOutlineArrowNarrowRight } 
                        text='My Projects' 
                        link='/projects'
                    />
                </div>
            </div>
       </div>
    )
}