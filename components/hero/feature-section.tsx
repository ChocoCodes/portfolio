"use client";

import Image from 'next/image';
import { Features } from '@/components/hero/_components';
import { motion } from 'motion/react';
import { childVariant } from '@/utils/motion-variants';

export const FeatureSection = () => {
    return (
        <motion.div 
            variants={ childVariant }
            className="flex w-4/5 md:w-3/5 md:h-[260px] gap-6 mx-auto"
            initial="closed"
            animate="open"
            transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
        >
            <Features />
            <div className='relative hidden md:block md:w-2/5 border-2 border-accent rounded-lg'>
            <Image src='/img/profile-octavio.jpg' alt="Image of John Octavio" fill className='object-cover rounded-lg'/>
            </div>
        </motion.div>
    )
}