import { TechStack } from "@/utils/types";
import { Tag } from '@/components/_components';
import { TECH_STACK } from "@/utils/contents";

interface MarqueeProps {
    speed: number;
    items: TechStack[];
    direction?: "left" | "right";
}

interface MarqueeItemProps {
    items: TechStack[];
    isHidden?: boolean;
    speed: number;
    direction: "left" | "right";
}

const MarqueeItem = ({ items, isHidden = false, speed, direction }: MarqueeItemProps) => {
    return (
        <ul 
            aria-hidden={ isHidden } 
            className="flex items-center justify-center gap-8 animate-marquee pr-8"
            style={{
                animationDuration: `${ speed }s`,
                animationDirection: direction === 'left' ? "normal" : "reverse"
            }}
        >
            {items.map((item, i) => (
                <li key={ i }>
                    <Tag icon={ item.icon } text={ item.name } />
                </li>
            ))}
        </ul>
    )
}

const Marquee = ({ speed, items, direction = "right" }: MarqueeProps) => {
    return (
        <div 
            className="w-full flex scrollbar-none mask-[linear-gradient(to_right,transparent,black_4rem,black_calc(100%-4rem),transparent)] py-1"
        >
            <MarqueeItem items={ items } speed={ speed } direction={ direction }/>
            <MarqueeItem items={ items } isHidden={ true } speed={ speed } direction={ direction } />
        </div>
    )
}

export const TechStackSection = () => {
    const topStack = TECH_STACK.filter(stack => ["languages", "frameworks/libraries"].includes(stack.type))
                               .slice(0, Math.ceil(TECH_STACK.length / 2));
    const bottomStack = TECH_STACK.filter(stack => !topStack.includes(stack));

    return (
        <div className="w-4/5 md:w-3/5 flex flex-col mx-auto text-default gap-6 border-2 border-accent p-6 rounded-lg overflow-x-hidden">
            <p className="font-sora font-medium text-3xl">What I work with</p>
            <div className="flex flex-col gap-5">
                <Marquee speed={ 20 } items={ topStack } />
                <Marquee speed={ 18 } items={ bottomStack } direction="left" />
            </div>
        </div>
    )
}

