"use client";

import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    itemsPerView?: number;
}

const useItemsPerView = (desktop: number): number => {
    const [itemsPerView, setItemsPerView] = useState(desktop);


    useEffect(() => {
        const update = () => setItemsPerView(window.innerWidth < 768 ? 1 : desktop);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [desktop]);

    return itemsPerView;
}
export const Carousel = <T,>({ items, renderItem, itemsPerView: desktopItems = 2}: CarouselProps<T>) => {
    const itemsPerView = useItemsPerView(desktopItems);
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = Math.max(0, items.length - itemsPerView);

    const next = () => setCurrentIndex(prev => Math.min(prev + 2, maxIndex));
    const prev = () => setCurrentIndex(prev => Math.max(prev - 2, 0));

    useEffect(() => {
        setCurrentIndex(0);
    }, [itemsPerView]);

    return (
        <div className="relative">
            <div className="flex overflow-hidden">
                <div className="flex w-full transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
                    { items.map((item, i) => (
                        <div key={ i } className="shrink-0 px-2" style={{ width: `${ 100 / itemsPerView}%`}}>
                            { renderItem(item, i) }
                        </div>
                    ))}
                </div>
            </div>
            { currentIndex > 0 && (
                <button
                    onClick={ prev }
                    className="absolute -left-5 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-default text-background rounded-full p-1 shadow-md"
                >
                    <HiChevronLeft size={ 24 } />
                </button>
            )}
            { currentIndex < maxIndex && (
                <button
                    onClick={ next }
                    className="absolute -right-5 top-1/2 translate-x-1/2 -translate-y-1/2 
                        bg-default text-background rounded-full p-1 shadow-md"
                >
                    <HiChevronRight size={ 24 } />
                </button>
            )}
        </div>
    )
}