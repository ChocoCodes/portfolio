"use client";

// import { useState } from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import { FiMinimize2 } from "react-icons/fi";
import { ChatMessage } from './chat-message';

const chatPanelVariants = {
  closed: { 
    opacity: 0, 
    scale: 0.8,
    y: 10,
    transition: { duration: 0.2 }
  },
  open: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 300, 
      damping: 30 
    }
  }
} satisfies Variants;

interface ChatPanelProps {
  open?: boolean;
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatPanelProps) => {
  return (
    <div className="flex w-full justify-between items-center text-default border border-accent rounded-t-lg py-3 px-4">
      <div className="flex gap-3 items-center">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image 
              src="/img/profile-octavio.jpg" 
              alt='Image of John Roland Octavio' 
              fill
              className='object-cover rounded-full'
            />
          </div>
          <div className="flex flex-col">
            <p className='text-sm font-medium'>John Octavio</p>
            <p className='inline-flex items-center gap-2 text-[12px]'><span className="w-1.5 h-1.5 bg-green rounded-full"></span>Active Now</p>
          </div>
      </div>
      <button onClick={ onClose } className='hover:cursor-pointer'>
        <FiMinimize2 className='text-xl'/>
      </button>
    </div>
  )
}

export const ChatPanel = ({ open, onClose }: ChatPanelProps) => {
  return (
    <motion.div
      className='w-84 h-130 border border-accent rounded-lg bg-surface font-sora'
      initial="closed"
      animate={ open ? "open" : "closed" }
      variants={ chatPanelVariants }
    >
      <ChatHeader onClose={ onClose }/>
      <div className="flex flex-col gap-4 px-4 py-4">
        <ChatMessage sender="John O." message="Ask me anything about myself and my projects!" />
        <ChatMessage sender="me" message="Coming Soon!" />
      </div>
    </motion.div>
  )
}

