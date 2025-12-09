import Image from 'next/image';
import { StaggerWrapper } from "../stagger-wrapper";

export const ContactBanner = () => {
    return (
        <StaggerWrapper 
            delay={ 0.1 }
            className="flex md:w-1/4 gap-4 mx-auto text-default items-center"
        >
            <div className="relative w-20 h-20">
              <Image 
                src="/img/profile-octavio.jpg" 
                alt='Image of John Roland Octavio' 
                fill
                className='object-cover rounded-full'
              />
            </div>
            <div className="flex flex-col">
              <p className='text-xs md:text-base font-medium'>John Roland Octavio</p>
              <span className='inline-flex gap-2 items-center text-green'><div className="w-2 h-2 rounded-full bg-green"></div>Available</span>
            </div>
        </StaggerWrapper>
    )
}