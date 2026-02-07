"use client";

import { useEffect, useRef } from 'react';
import { UIMessage } from 'ai';
import { useChat } from '@ai-sdk/react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import { FiMinimize2 } from "react-icons/fi";
import { ChatMessage, ChatInput } from '@/components/chat/_components';

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
    <div className="flex w-full justify-between items-center text-default border-b border-accent rounded-t-lg py-3 px-4 pointer-events-auto">
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status } = useChat<UIMessage>({
    onError: err => {
      console.error(`Chat error: ${ err.message }`);
    },
    messages: [
      {
        id: 'welcome',
        role: 'assistant',
        parts: [{
          type: 'text',
          text: '안녕하세요! Ask me anything about myself and my projects!'
        }],
      }
    ]
  });

  const handleSubmit = async (query: string) => {
    if (!query.trim()) return;
    await sendMessage({ text: query });
  }

  const atBottom = () => {
    if (!scrollContainerRef.current) return false;
    
    const { scrollHeight, scrollTop, clientHeight } = scrollContainerRef.current;

    return scrollHeight - scrollTop <= clientHeight + 100;
  }

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const last = messages[messages.length - 1];
    if (last || atBottom()) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages])

  const isStreaming = status === "streaming" || status === "submitted";

  return (
    <motion.div
      className={`relative flex flex-col w-84 h-130 border border-accent rounded-lg overflow-hidden bg-surface font-sora ${ open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      initial="closed"
      animate={ open ? "open" : "closed" }
      variants={ chatPanelVariants }
    >
      <ChatHeader onClose={ onClose }/>
      <div 
        ref={ scrollContainerRef }
        className="flex flex-col flex-1 gap-4 p-4 overflow-y-auto scrollbar-none" 
      >
        {messages.map(message => {
          const hasContent = message.parts.some(part => 
            part.type === 'text' && part.text && part.text.trim().length > 0
          );
    
          if (!hasContent && message.role === 'assistant') {
            return null;
          }

          return <ChatMessage key={ message.id } sender={ message.role === 'assistant' ? "John O." : "me" } messages={ message } />
        })}

        {isStreaming && (
          <ChatMessage 
            sender="John O."
            messages={ {} as UIMessage }
            isTyping={ true } 
          />
        )}

      </div>
      <ChatInput onSend={ handleSubmit } status={ status }/>
    </motion.div>
  )
}

