'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'motion/react';
import { FaUserClock } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/utils/contents';
import { 
    navVariants, 
    mobileVariants, 
    linkVariants, 
    containerVariants 
} from '@/utils/motion-variants';

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
                        className={`${ currentPath === nav.link ? 'border-l-2 md:border-l-0 md:border-b-2 border-accent' : '' } px-2 md:px-1 md:pb-1`}
                        whileHover={ currentPath !== nav.link ? { y: -5 } : {}}
                    >
                        <Link href={ nav.link }>{ nav.title }</Link>
                    </motion.li>
                ))}
            </motion.ul>
        </nav>
    )
}

const TimeDisplay = () => {
    const [time, setTime] = useState("");
    const MINUTE = 1000 * 60;

    useEffect(() => {
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Manila",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

        const update = () => setTime(formatter.format(new Date()));
        update();

        const interval = setInterval(update, MINUTE);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="flex gap-1 md:gap-2 items-center justify-center text-[8px] md:text-base lg:text-lg">
            <FaUserClock />
            <p>{ time } (PHT)</p>
        </div>
    )
}

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header 
            className="flex flex-col md:flex-row w-full bg-background text-default font-sora p-6 md:px-8 lg:px-14"
        >
            <motion.div 
                className="flex w-full lg:w-3/5 justify-between items-center mx-auto" 
                variants={ containerVariants }
                initial="closed"
                animate="open"
            >
                <Link href="/" className='text-xs md:text-base lg:text-lg'>John Octavio.</Link>
                <NavBar 
                    navClass='hidden md:flex' 
                    listClass='flex gap-8' 
                    initial="closed" 
                    animate="open"
                />
                <div className='flex items-center gap-2'>
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