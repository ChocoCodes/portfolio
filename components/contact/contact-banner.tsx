import Image from 'next/image';
import { StaggerWrapper } from "../stagger-wrapper";

export const ContactBanner = () => {
    return (
        <StaggerWrapper 
            delay={ 0.1 }
            className="flex gap-4 text-default items-end"
        >
            <div className="relative w-12 h-12">
              <Image 
                src="/img/profile-octavio.jpg" 
                alt='Image of John Roland Octavio' 
                fill
                className='object-cover rounded-md'
              />
            </div>
            <p className='text-xs md:text-2xl font-semibold font-sora'>John Roland Octavio</p>
        </StaggerWrapper>
    )
}