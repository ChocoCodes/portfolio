"use client";

import { useState } from 'react';
import { PROFESSIONAL_DETAILS } from '@/utils/contents';

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
                        className={`${ isSelected ? 'bg-accent text-surface' : 'text-accent'} text-[10px] md:text-lg w-1/2 p-1 rounded-sm hover:cursor-pointer`}
                    >
                        { label }
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
                <li key={ i } className="flex flex-col md:gap-1">
                    <div className="flex justify-between items-center">
                        <p className='text-xs md:text-2xl font-medium max-w-3/5'>{ item.title }</p>
                        <p className='text-[10px] md:text-base'>{ item.duration }</p>
                    </div>
                    <p className='text-[10px] md:text-lg text-secondary max-w-1/2'>{ item.name }</p>
                </li>
            ))}
        </ul>
    )
}

export const Tabs = () => {
    const [currentTab, setCurrentTab] = useState<TabKey>("experience");

    return (
        <div className='flex flex-col gap-5'>
            <TabHeader currentTab={ currentTab } setCurrentTab={ setCurrentTab } />
            <TabContent currentTab={ currentTab }/>
        </div>
    )
}