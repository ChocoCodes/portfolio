"use client";
import { motion } from 'motion/react';
import { childVariant } from '@/utils/motion-variants';

export const Footer = () => {
    return (
        <motion.footer 
            variants={ childVariant }
            className="w-4/5 md:w-3/5 text-secondary font-sora py-5 mx-auto mt-auto flex flex-col items-center justify-center text-[10px] md:text-base font-normal border-t border-default/50"
            initial="closed"
            animate="open"
            transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
        >
            <div className="flex flex-col lg:flex-row items-center md:gap-1">
                <p> Built using <span className="font-medium text-default">Next.js</span>, <span className="font-medium text-default">TypeScript</span>, and <span className="font-medium text-default">Tailwind</span>.</p>
                <p>
                    <span>&copy; { new Date().getFullYear() }</span> John Octavio, all rights reserved.
                </p>
            </div>
        </motion.footer>
    )
}