import Image from 'next/image';
import { Certificate } from '@/utils/types';
import { CERTS } from '@/utils/contents';

interface MarqueeItemProps {
    items: Certificate[];
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
                    <div className="relative aspect-video h-50">
                        <Image src={ item.path } alt={ item.title } fill className="object-cover"/>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export const CertsMarquee = () => {
    return (
        <div 
            className="marquee-container w-full flex scrollbar-none mask-[linear-gradient(to_right,transparent,black_4rem,black_calc(100%-2rem),transparent)] overflow-hidden"
        >
            <MarqueeItem items={ CERTS } speed={ 20 } direction={ "left" } />
            <MarqueeItem items={ CERTS } isHidden={ true } speed={ 20 } direction={ "left" } />
        </div>
    )
}
