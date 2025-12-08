"use client";

import { useState } from 'react';
import { MdOutlineContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

interface CopyButtonProps {
    value: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!value) return;
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }
    
    return (
        <div className="relative group flex items-center hover:cursor-pointer text-lg text-secondary font-manrope">
            <button onClick={ handleCopy }>
                { copied ? <FaCheck /> : <MdOutlineContentCopy /> }
            </button>
            <span 
                className="
                    absolute left-1/2 -translate-x-1/2 
                    -bottom-6 px-2 py-1 text-xs rounded bg-surface text-default opacity-0
                    group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
                "
            >
                { copied ? "Copied!" : value }
            </span>
        </div>
    )
} 