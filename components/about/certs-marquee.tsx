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
                    <div className="flex flex-col gap-1">
                        <div className="relative aspect-video h-50 flex flex-col">
                            <Image src={ item.path } alt={ item.title } fill className="object-cover"/>
                        </div>
                        <p className='text-base text-secondary'>{item.title}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export const CertsMarquee = () => {
    return (
        <div 
            className="marquee-container w-full flex scrollbar-none mask-[linear-gradient(to_right,transparent,black_1rem,black_calc(100%-1rem),transparent)] overflow-hidden hover:cursor-pointer"
        >
            <MarqueeItem items={ CERTS } speed={ 20 } direction={ "left" } />
            <MarqueeItem items={ CERTS } isHidden={ true } speed={ 20 } direction={ "left" } />
        </div>
    )
}
