"use client";

import { motion } from 'motion/react';
import { childVariant } from '@/utils/motion-variants';
import { CertsMarquee } from './certs-marquee';

export const Certifications = () => {
    return (
        <motion.div 
            variants={ childVariant }
            initial="closed"
            animate="open"
            transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-8"
        >
          <p className="text-3xl text-default font-sora font-semibold">Certifications</p>
          <CertsMarquee />
        </motion.div>
    )
}