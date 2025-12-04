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
            className="flex items-center gap-4 border-2 border-accent rounded-lg p-4 w-full text-default shadow-[0_0_25px_0_rgba(56,189,248,0.15)] hover:-translate-y-1 transition-transform duration-200"
        >
            <div className="flex items-center">
                <LuTrophy className="text-4xl" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <p className="text-2xl font-bold">{ achievement }</p>
                    <p className="text-secondary/80 font-medium">{ competition } by { organizer }</p>
                </div>
                <p className="text-sm italic">{ title }</p>
            </div>
        </Link>
    )
}

export const Features = () => {
    return (
        <div className="flex grow flex-col justify-between items-start">
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