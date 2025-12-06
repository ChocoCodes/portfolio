import { LuTrophy } from "react-icons/lu";
import Link from 'next/link';
import { FEATURES } from '@/utils/contents';

interface FeatureCardProps {
    achievement: string;
    competition: string;
    organizer: string;
    featureLink: string;
    title: string;
}

const FeatureCard = ({ achievement, competition, organizer, featureLink, title }: FeatureCardProps) => {
    return (
        <Link 
            href={ featureLink } 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-surface gap-4 border-2 border-accent rounded-lg p-3 md:p-4 w-full text-default shadow-[0_0_25px_0_rgba(56,189,248,0.15)] hover:-translate-y-1 transition-transform duration-200 font-manrope"
        >
            <div className="flex items-center">
                <LuTrophy className="text-2xl md:text-4xl" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <p className="text-sm md:text-2xl font-semibold">{ achievement }</p>
                    <p className="text-[10px] md:text-base text-secondary/80 font-medium">{ competition } by { organizer }</p>
                </div>
                <p className="text-[10px] md:text-xs italic">{ title }</p>
            </div>
        </Link>
    )
}

export const Features = () => {
    return (
        <div className="flex grow gap-4 flex-col md:justify-between items-center">
            { FEATURES.map((feature, i) => (
                <FeatureCard 
                    key={ i }
                    achievement={ feature.achievement } 
                    competition={ feature.competition } 
                    organizer={ feature.organizer } 
                    featureLink={ feature.featureLink }
                    title={ feature.title }
                />
            ))}
        </div>
    )
}