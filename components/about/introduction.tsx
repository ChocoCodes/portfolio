"use client";

import { StaggerWrapper } from "../stagger-wrapper";

export const Introduction = () => {
    return (
        <section className="flex flex-col gap-6 w-full text-default text-[10px] md:text-base leading-relaxed">
            <StaggerWrapper delay={ 0.1 }>
                <p className="text-center font-semibold font-sora text-xl md:text-4xl text-default mb-6">About Me</p>
                <p> 
                    Hi, I'm <span className="font-bold text-accent">Jhong!</span> I am a third-year Computer Science student working toward becoming a <span className="font-medium text-accent">Software Engineer</span>. 
                    Back in Junior High School, I hated programming because I barely understood it and I mostly spent time in the computer lab enjoying the air conditioning.
                    I started my programming journey back when I was in 12th Grade, where I was able to gain hands-on experience in building an <span className="font-medium text-accent">IoT system</span> for our capstone.
                </p>
            </StaggerWrapper>
            <StaggerWrapper delay={ 0.2 }>
                <p>
                    Since then, I have continued developing both my technical and leadership skills throughout college. 
                    During my term as <span className="font-medium text-accent">Chief Technology Officer</span>, I supervised multiple departmental projects and initiatives, including hands-on workshops and collaborative events. 
                    As <span className="font-medium text-accent">Web Development Lead</span>, I further strengthened my frontend development skills by transitioning from native web technologies to modern frameworks such as React and Next.js.
                </p>
            </StaggerWrapper>
            <StaggerWrapper delay={ 0.3 }>
                <p>
                    I approach programming with a mindset centered on <span className="font-medium text-accent">simplicity, practicality, and algorithmic thinking</span>, always aiming to create solutions that are both efficient and meaningful.
                    Outside of coding, I enjoy building LEGO cars and staying active through exercising, going to the gym, and practicing Muay Thai. I also enjoy playing chill games and spending my free time upskilling and exploring new technologies.
                </p>
            </StaggerWrapper>
        </section>
    )
}