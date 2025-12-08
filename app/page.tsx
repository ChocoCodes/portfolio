import Image from 'next/image';
import { 
  Hero, 
  Features, 
  TechStackSection
} from '@/components/hero/_components';

export const metadata = {
  title: "Home",
  description: "Home Page of John Octavio's Personal Portfolio",
  openGraph: {
    title: "John Roland Octavio",
    description: "CS Student, Chief Technology Officer, Software Developer",
    url: "https://johnrlnd.dev",
    type: "website",
    siteName: "John Octavio's Portfolio Website"
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

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
