"use client";

import { useState, useEffect } from 'react';
import { IoIosSend } from "react-icons/io";

interface ChatInputProps {
    onSend: () => void;
}

const PLACEHOLDERS = [
    "Are you open to work?",
    "Where are you based?",
    "What are your tech stacks?"
];

const MAX_CHAR = 500;
const N_SECS = 3;

export const ChatInput = ({ onSend }: ChatInputProps ) => {
    const [query, setQuery] = useState("");
    const [length, setLength] = useState<number>(0);
    const [placeholder, setPlaceholder] = useState(PLACEHOLDERS[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholder(prev => {
                const rem = PLACEHOLDERS.filter(p => p !== prev);
                return rem[Math.floor(Math.random() * rem.length)];
            })
        }, N_SECS * 1000);

        return () => clearInterval(interval);
    }, [N_SECS]);

    // Manage Tab autocomplete and manual send (Enter)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Tab' && query.length == 0) {
            e.preventDefault();
            setQuery(placeholder);
            setLength(placeholder.length);
        }
        
        if (e.key === 'Enter' && query.length > 0) {
            onSend();
            setQuery("");
            setLength(0);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const q = e.target.value
        setQuery(q);
        setLength(q.length);
    }

    return (
        <div className="flex w-full flex-col py-4 px-3 border-t border-t-accent gap-2">
            <div className="w-full flex gap-4">
                <input 
                    type="text" 
                    name="query" 
                    id="query"  
                    value={ query || "" }
                    maxLength={ MAX_CHAR }
                    onChange={ handleChange }
                    onKeyDown={ handleKeyDown }
                    className='w-full placeholder-secondary text-default border-secondary/40 border-b p-1 focus:border-secondary focus:outline-none text-sm'
                    placeholder={ placeholder }
                />
                <button 
                    className='bg-accent p-2 text-xl rounded-lg hover:bg-accent/85 hover:cursor-pointer'
                    onClick={ onSend }
                >
                    <IoIosSend />
                </button>
            </div>
            <div className="flex justify-between text-xs text-secondary items-center">
                <p className="px-1">
                    { query.length == 0 ? ( 
                            <span>Press <kbd className='py-0.5 px-1 bg-accent text-background rounded mx-1'>Tab</kbd> to autofill questions.</span>
                        ) 
                        : 
                        "Ask and you shall receive."
                    }
                </p>
                <p>{ length } / { MAX_CHAR }</p>
            </div>
        </div>
    )
}