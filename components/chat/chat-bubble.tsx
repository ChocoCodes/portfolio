"use client";
import { useState } from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { motion, Transition } from 'motion/react';
import { ChatPanel } from './chat-panel';

const wiggleTransition = {
  repeatType: "reverse",
  duration: 0.5,
  delay: 0,
  ease: "easeInOut",
} satisfies Transition;

export const ChatBubble = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);
    
    return (
        <div className="fixed bottom-8 right-6 md:right-10 flex gap-3 flex-col z-50">
            <ChatPanel open={ isOpen } onClose={ toggleChat } />
            <div className='self-end'>
                <button 
                    className="inline-flex gap-2 items-center hover:cursor-pointer bg-accent hover:bg-accent/90 text-default font-manrope font-medium p-3 md:px-6 md:py-3 rounded-full"
                    onClick={ toggleChat }
                >
                    <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                    transition={{
                        ...wiggleTransition,
                        delay: 1.5, 
                        repeat: Infinity, 
                        repeatDelay: 5, 
                    }}
                    >
                        <IoChatbubbleEllipses className="text-2xl"/>
                    </motion.div>
                    <p className='hidden md:flex'>Chat with John</p>
                </button>
            </div>
        </div> 
    )
}