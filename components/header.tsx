'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'motion/react';
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
                {NAV_ITEMS.filter(nav => nav.title !== "Home").map(nav => (
                    <motion.li 
                        key={ nav.title } 
                        variants={ linkVariants }
                        className={`${ currentPath === nav.link ? 'text-accent' : '' } px-2 md:px-1 md:pb-1`}
                        whileHover={ currentPath !== nav.link ? { y: -5 } : {}}
                    >
                        <Link href={ nav.link }>{ nav.title }</Link>
                    </motion.li>
                ))}
            </motion.ul>
        </nav>
    )
}

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();

    return (
        <header 
            className="flex flex-col md:flex-row w-full text-default font-sora py-3"
        >
            <motion.div 
                className="flex w-full lg:w-4/5 justify-between items-center mx-auto p-6 lg:py-4 lg:px-2" 
                variants={ containerVariants }
                initial="closed"
                animate="open"
            >
                {/* Home Navigation */}
                <div className="flex gap-2 items-center">
                    <div className="relative h-6 w-6">
                        <Image src="/logo-32x32.png" alt="Icon of John Octavio's Website" fill className='object-cover'/>
                    </div>
                    <Link href="/" className={`text-xs md:text-base lg:text-lg ${currentPath === '/' ? 'text-accent' : ''}`}>
                        John Octavio.
                    </Link>
                </div>
                {/* PC Navbar */}
                <NavBar 
                    navClass='hidden md:flex' 
                    listClass='flex gap-6' 
                    initial="closed" 
                    animate="open"
                />
                {/* Mobile Hamburger Menu */}
                <button className='block md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <RxHamburgerMenu />
                </button>
            </motion.div>
            {/* Mobile NavBar */}
            <motion.div
                initial={ false }
                animate={ isMenuOpen ? "open" : "closed" }
                variants={ mobileVariants }
                className='block md:hidden'    
            >
                <NavBar 
                    navClass='flex flex-col w-full py-3' 
                    listClass='flex flex-col gap-4 text-sm md:text-md text-center'
                    initial="closed" 
                    animate={ isMenuOpen ? "open": "closed" }
                />
            </motion.div>
        </header>
    );
}