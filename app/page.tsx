import { Header } from '@/components/header';
import { Hero, Features, TechStackSection } from '@/components/hero/_components';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col bg-background gap-10 min-h-screen py-3 items-center md:py-6">
        <Hero />
        <div className="flex w-full md:w-3/5 h-[260px] gap-10">
          <Features />
          <div className='relative hidden md:block md:w-2/5 border-2 border-accent rounded-lg'>
            <Image src='/img/profile-octavio.jpg' alt="Image of John Octavio" fill className='object-cover rounded-lg'/>
          </div>
        </div>
        <TechStackSection />
      </section>
    </>
  );
}
