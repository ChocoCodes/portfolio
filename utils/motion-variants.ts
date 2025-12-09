import { Variants } from 'motion/react';

export const linkVariants: Variants = {
    closed: { 
        opacity: 0, 
        y: -20 
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
}

export const childVariant: Variants = {
  closed: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0 },
};

export const containerVariants: Variants = {
    closed: {
        opacity: 0,
        y: -20,
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: "easeInOut",
            when: "afterChildren",
            staggerChildren: 0.3
        }
    }
}

export const navVariants = {
    closed: {
        opacity: 0,
        y: -20,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.13,
            staggerDirection: -1
        }
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.13,
            delayChildren: 0.05
        }
    }
};

export const mobileVariants: Variants = {
    closed: {
        height: 0,
        opacity: 0,
        overflow: 'hidden',
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "afterChildren",
            staggerChildren: 0.05, 
            staggerDirection: -1
        }
    },
    open: {
        height: 'auto',
        opacity: 1,
        overflow: 'visible',
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.05
        }
    }
}