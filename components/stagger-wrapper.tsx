"use client";
import { motion } from 'motion/react';
import { childVariant } from '@/utils/motion-variants';

interface StaggerWrapperProps {
    children: React.ReactNode;
    delay: number;
    className?: string;
}

export const StaggerWrapper = ({ children, delay, className = "" }: StaggerWrapperProps) => {
    return (
        <motion.div
            variants={ childVariant }
            initial="closed"
            animate="open"
            transition={{ delay: delay, duration: 0.3, ease: "easeInOut" }}
            className={ className }
        >
            { children }
        </motion.div>
    )
}