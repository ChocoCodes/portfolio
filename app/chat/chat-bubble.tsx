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
        <div className="fixed bottom-4 right-10 flex gap-3 flex-col">
            <ChatPanel open={ isOpen } onClose={ toggleChat } />
            <div className='self-end'>
                <button 
                    className="inline-flex gap-2 items-center hover:cursor-pointer bg-accent hover:bg-accent/90 text-default font-manrope font-medium px-6 py-3 rounded-full"
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
                    Chat with John
                </button>
            </div>
        </div> 
    )
}