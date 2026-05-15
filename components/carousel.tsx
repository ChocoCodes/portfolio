"use client";

import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    itemsPerView?: number;
}

export const Carousel = <T,>({ items, renderItem, itemsPerView = 2}: CarouselProps<T>) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = Math.max(0, items.length - itemsPerView);

    const next = () => setCurrentIndex(prev => Math.min(prev + 2, maxIndex));
    const prev = () => setCurrentIndex(prev => Math.max(prev - 2, 0));

    return (
        <div className="relative">
            <div className="flex overflow-hidden">
                <div className="flex w-full transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
                    { items.map((item, i) => (
                        <div key={ i } className="basis-1/2 shrink-0 px-2 snap-start">
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