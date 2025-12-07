import { Tag } from '@/components/_components';
import { TECH_STACK } from "@/utils/contents";

export const TechStackSection = () => {
    return (
        <div className="w-4/5 md:w-3/5 flex flex-col mx-auto text-default gap-4 md:gap-6 border-2 border-accent p-4 md:p-6 rounded-lg">
            <p className="font-sora font-semibold text-lg md:text-3xl">What I work with</p>
            <div className="flex flex-wrap gap-2 md:gap-4 w-full">
                { TECH_STACK.map((stack, i) => (
                    <Tag key={ i } icon={ stack.icon } text={ stack.name } bordered={ false } extendedClass='px-3 py-2 shadow-md text-xs md:text-base shadow-default/40'/>
                ))}
            </div>
        </div>
    )
}

