import { Introduction } from '@/components/about/_components';
import { TechStackSection } from '@/components/about/_components';
import { Tabs } from '@/components/about/_components';

export const metadata = {
    title: "About",
    description: "Learn more about John Octavio, his experience, skills, and interests in software development."
};


export default function About() {
  return (
    <>
      <section className="flex flex-col gap-8 md:gap-14 w-4/5 font-manrope">
        <Introduction />
        <TechStackSection />
        <Tabs />
      </section>
    </>
  )
}