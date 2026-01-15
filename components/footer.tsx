"use client";
import { motion } from 'motion/react';
import { childVariant } from '@/utils/motion-variants';

export const Footer = () => {
    return (
        <motion.footer 
            variants={ childVariant }
            className="w-4/5 md:w-3/5 text-secondary font-sora py-5 mx-auto mt-auto flex flex-col items-center justify-center text-[10px] md:text-base lg:text-xl font-normal"
            initial="closed"
            animate="open"
            transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
        >
            <p>Built using <span className="font-medium text-default">Next.js</span>, <span className="font-medium text-default">TypeScript</span>, and <span className="font-medium text-default">Tailwind</span>.</p>
            <div className="flex gap-3">
                <div className="flex gap-1 items-center">
                    <p>&copy;</p>
                    <p>{ new Date().getFullYear() }</p>
                </div>
                <p>John Octavio. All rights reserved.</p>
            </div>
        </motion.footer>
    )
}