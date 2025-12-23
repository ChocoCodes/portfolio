import { 
  Hero, 
  FeatureSection, 
  TechStackSection
} from '@/components/hero/_components';

export const metadata = {
  title: "Home",
  description: "Home Page of John Octavio's Personal Portfolio",
  openGraph: {
    title: "John Roland Octavio's Portfolio",
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
      <FeatureSection />
      <TechStackSection />
    </>
  );
}
