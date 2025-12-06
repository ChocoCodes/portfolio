import Image from 'next/image';
import { 
  Hero, 
  Features, 
  TechStackSection
} from '@/components/hero/_components';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex w-4/5 md:w-3/5 md:h-[260px] gap-6">
        <Features />
        <div className='relative hidden md:block md:w-2/5 border-2 border-accent rounded-lg'>
          <Image src='/img/profile-octavio.jpg' alt="Image of John Octavio" fill className='object-cover rounded-lg'/>
        </div>
      </div>
      <TechStackSection />
    </>
  );
}
