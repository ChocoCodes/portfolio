"use client";

import { StaggerWrapper } from "../stagger-wrapper";

export const Introduction = () => {
    return (
        <section className="flex flex-col gap-4 w-full text-default text-[10px] md:text-xl leading-relaxed">
            <StaggerWrapper delay={ 0.1 }>
                <p> I am a third-year Computer Science student working toward becoming a <span className="font-semibold text-accent">Software Engineer</span>. </p>
                <p> During my term as <span className="font-semibold text-accent">Chief Technology Officer</span>, I supervised multiple departmental projects and initiatives, including hands-on workshops and collaborative events. I coordinated teams and helped establish partnerships to provide learning opportunities that go beyond the classroom and are directly relevant to the industry. </p>
            </StaggerWrapper>
            <StaggerWrapper delay={ 0.2 }>
                <p> As <span className="font-semibold text-accent">Web Development Lead</span>, I strengthened my frontend development skills, transitioning from native web languages to React and Next.js frameworks. </p>
                <p>
                I am known for being <span className="font-semibold text-accent">rigorous</span> with projects to ensure the highest quality, and people often describe me as <span className="font-semibold text-accent">technical</span> and <span className="font-semibold text-accent">detail-oriented</span>.
                Outside of coding, I enjoy building LEGO cars and engaging in physical activities such as exercising, going to the gym, or practicing Muay Thai. 
                I also like playing chill games and often dedicate my free time to upskilling and exploring new technologies.
                </p>
            </StaggerWrapper>
        </section>
    )
}