import { StaggerWrapper } from "../stagger-wrapper";

export const Invite = () => {
    return (
        <StaggerWrapper 
            delay={ 0.3 } 
            className="w-full text-default text-2xl md:text-4xl"
        >
            <p>Have a vision in mind? <span className="font-bold text-accent"><br></br>Let’s turn it into something real.</span></p>
            <span className='inline-flex gap-2 items-center text-secondary text-2xl'><div className="w-2 h-2 rounded-full bg-accent"></div>Open to work</span>
        </StaggerWrapper>

    )
}