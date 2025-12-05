import { Tag } from '@/components/_components';
import { TECH_STACK } from "@/utils/contents";

export const TechStackSection = () => {
    return (
        <div className="w-4/5 md:w-3/5 flex flex-col mx-auto text-default gap-2 md:gap-6 border-2 border-accent p-6 rounded-lg">
            <p className="font-sora font-medium md:text-3xl">What I work with</p>
            <div className="flex flex-wrap gap-4 w-full">
                { TECH_STACK.map((stack, i) => (
                    <Tag key={ i } icon={ stack.icon } text={ stack.name } />
                ))}
            </div>
        </div>
    )
}

