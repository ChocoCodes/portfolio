import { Tabs } from '@/components/about/tabs';
import { CertsMarquee } from '@/components/about/certs-marquee';

export const generateMetadata = () => {
  return {
    title: `About | John Octavio`,
    description: `About Page of John Octavio's Personal Portfolio`
  };
}

export default function About() {
  return (
    <>
      <section className="flex flex-col gap-8 md:gap-14 w-4/5 md:w-3/5 font-manrope">
        <section className="flex flex-col gap-4 w-full text-default text-[10px] md:text-xl leading-relaxed">
          <p> I am a third-year Computer Science student working toward becoming a <span className="font-semibold text-accent">Software Engineer</span>. </p>
          <p> During my term as <span className="font-semibold text-accent">Chief Technology Officer</span>, I supervised multiple departmental projects and initiatives, including hands-on workshops and collaborative events. I coordinated teams and helped establish partnerships to provide learning opportunities that go beyond the classroom and are directly relevant to the industry. </p>
          <p> As <span className="font-semibold text-accent">Web Development Lead</span>, I strengthened my frontend development skills, transitioning from native web languages to React and Next.js frameworks. </p>
          <p>
            I am known for being <span className="font-semibold text-accent">rigorous</span> with projects to ensure the highest quality, and people often describe me as <span className="font-semibold text-accent">technical</span> and <span className="font-semibold text-accent">detail-oriented</span>.
            Outside of coding, I enjoy building LEGO cars and engaging in physical activities such as exercising, going to the gym, or practicing Muay Thai. 
            I also like playing chill games and often dedicate my free time to upskilling and exploring new technologies.
          </p>
        </section>
        <Tabs />
        <div className="flex flex-col gap-8">
          <p className="text-3xl text-default font-sora font-semibold">Certifications</p>
          <CertsMarquee />
        </div>
      </section>
    </>
  )
}