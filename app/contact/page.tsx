import Image from 'next/image';
import { ContactLinks } from '@/components/contact/_components';

export const generateMetadata = () => {
  return {
    title: `Contact | John Octavio`,
    description: `Contact Page of John Octavio's Personal Portfolio`
  };
}

export default function Contact() {
    return (
      <>
        <div className="w-3/5 md:w-4/5 flex flex-col gap-8 items-center justify-center font-manrope my-auto">
          <div className="flex w-1/4 gap-4 mx-auto text-default items-center">
            <div className="relative w-20 h-20">
              <Image src="/img/profile-octavio.jpg" alt='Image of John Roland Octavio' fill className='object-cover rounded-full'/>
            </div>
            <div className="flex flex-col">
              <p className='text-xs md:text-base font-medium'>John Roland Octavio</p>
              <span className='inline-flex gap-2 items-center text-green'><div className="w-2 h-2 rounded-full bg-green"></div>Available</span>
            </div>
          </div>
          <p className="text-center w-full text-default text-2xl md:text-5xl">Have a vision in mind? <span className="font-bold text-accent">Let’s turn it into something real.</span></p>
          <ContactLinks />
        </div>
      </>
    )
}