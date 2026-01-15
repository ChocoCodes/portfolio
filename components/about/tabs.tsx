"use client";

import { useState } from 'react';
import { PROFESSIONAL_DETAILS } from '@/utils/contents';
import { StaggerWrapper } from '../stagger-wrapper';
import { motion } from 'motion/react';

type TabKey = "experience" | "education";

interface TabHeaderProps {
    currentTab: TabKey;
    setCurrentTab: (tab: TabKey) => void;
}

interface TabContentProps {
    currentTab: TabKey;
}

export const TabHeader = ({ currentTab, setCurrentTab }: TabHeaderProps) => {
    const TAB_ITEMS: TabKey[] = ['experience', 'education'];
    return (
        <div className="w-full p-1 md:p-2 rounded-md flex gap-2 font-sora bg-surface">
            {TAB_ITEMS.map((tab, i) => {
                const isSelected = currentTab === tab;
                const label = tab.charAt(0).toUpperCase() + tab.slice(1);
                
                return (
                    <button 
                        key={ i } 
                        onClick={ () => setCurrentTab(tab) }
                        className={`${ isSelected ? 'bg-accent text-surface' : 'text-accent'} relative text-[10px] md:text-lg w-1/2 p-1 rounded-sm hover:cursor-pointer`}
                        style={{ background: "none", border: "none" }}
                        tabIndex={0}
                    >
                        {isSelected && (
                            <motion.div
                                layoutId="tab-bg"
                                className="absolute inset-0 bg-accent rounded-sm z-0"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                            />
                        )}
                        <span className={`relative z-10 ${isSelected ? "text-surface" : "text-accent"}`}>
                            {label}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}

export const TabContent = ({ currentTab }: TabContentProps) => {
    const items = PROFESSIONAL_DETAILS.filter(item => item.domain === currentTab);

    return (
        <ul className='w-full flex flex-col gap-4 md:gap-6 font-sora text-default h-40 md:h-[245px]'>
            {items.map((item, i) => (
                <li key={ i } className="flex flex-col lg:gap-1">
                    <div className="flex justify-between items-center">
                        <p className='text-xs md:text-lg lg:text-2xl font-medium max-w-3/5'>{ item.title }</p>
                        <p className='text-[10px] md:text-sm'>{ item.duration }</p>
                    </div>
                    <p className='text-[10px] md:text-base lg:text-lg text-secondary max-w-1/2'>{ item.name }</p>
                </li>
            ))}
        </ul>
    )
}

export const Tabs = () => {
    const [currentTab, setCurrentTab] = useState<TabKey>("experience");

    return (
        <StaggerWrapper delay={ 0.3 } className='flex flex-col gap-5'>
            <TabHeader currentTab={ currentTab } setCurrentTab={ setCurrentTab } />
            <TabContent currentTab={ currentTab }/>
        </StaggerWrapper>
    )
}