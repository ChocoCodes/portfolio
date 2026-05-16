import Image from 'next/image';
import { Certificate } from '@/utils/types';

export const CertificateCard = ({ title, path, id, obtainedOn }: Certificate) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-default/25">
                <Image 
                    fill
                    src={ path }
                    alt={`${title} Certificate`}
                    className="object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                />
            </div>
            <div className="flex justify-between items-center px-1">
                <p className='text-base md:text-xl font-medium font-sora'>{ title }</p>
                { obtainedOn && <p className='text-secondary text-xs md:text-base'>{ obtainedOn }</p> }
            </div>
            { id && <p className="italic text-secondary -mt-3 px-1">{ id }</p> }
        </div>
    )
}

