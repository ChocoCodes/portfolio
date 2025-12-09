import { StaggerWrapper } from "../stagger-wrapper";

export const Invite = () => {
    return (
        <StaggerWrapper 
            delay={ 0.3 } 
            className="text-center w-full text-default text-2xl md:text-5xl"
        >
            <p>Have a vision in mind? <span className="font-bold text-accent">Let’s turn it into something real.</span></p>
        </StaggerWrapper>

    )
}