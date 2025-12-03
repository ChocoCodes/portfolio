'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'motion/react';
import { FaUserClock } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { navVariants, mobileVariants, linkVariants, containerVariants } from '@/utils/motion-variants';
import { NAV_ITEMS } from '@/utils/contents';

interface NavBarProps {
    navClass?: string;
    listClass: string;
    initial?: string | boolean;
    animate?: string | boolean;
}

const NavBar = ({ navClass = '', listClass, initial = false, animate = false }: NavBarProps) => { 
    const currentPath = usePathname();
    return (
        <nav className={ navClass }>
            <motion.ul 
                className={ listClass }
                variants={ navVariants }
                initial={ initial }
                animate={ animate }
            >
                {NAV_ITEMS.map(nav => (
                    <motion.li 
                        key={ nav.title } 
                        variants={ linkVariants }
                        className={`${ currentPath === nav.link ? 'border-l-2 md:border-l-0 md:border-b-2 border-accent' : ''} px-2 md:px-1 md:pb-1`}
                    >
                        <Link href={ nav.link }>{ nav.title }</Link>
                    </motion.li>
                ))}
            </motion.ul>
        </nav>
    )
}

const TimeDisplay = () => {
    return (
        <div className="flex gap-2 items-center justify-center">
            <FaUserClock />
            <p>time</p>
        </div>
    )
}

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header 
            className="flex flex-col md:flex-row w-full bg-background text-default font-sora p-8 md:px-14"
        >
            <motion.div 
                className="flex w-full justify-between items-center" 
                variants={containerVariants}
                initial="closed"
                animate="open"
            >
                <p>placeholder</p>
                <NavBar 
                    navClass='hidden md:flex' 
                    listClass='flex gap-8' 
                    initial="closed" 
                    animate="open"
                />
                <div className='flex items-center gap-6'>
                    <TimeDisplay />
                    <button className='block md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <RxHamburgerMenu />
                    </button>
                </div>
            </motion.div>
            <motion.div
                initial={ false }
                animate={ isMenuOpen ? "open" : "closed" }
                variants={ mobileVariants }
                className='block md:hidden'    
            >
                <NavBar 
                    navClass='flex flex-col w-full' 
                    listClass='mt-4 flex flex-col gap-2 text-sm md:text-md'
                    initial="closed" 
                    animate={ isMenuOpen ? "open": "closed" }
                />
            </motion.div>
        </header>
    );
}