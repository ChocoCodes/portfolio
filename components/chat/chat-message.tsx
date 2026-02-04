import { UIMessage } from '@ai-sdk/react';
import clsx from 'clsx';
import Image from 'next/image';

interface ChatMessageProps {
    sender: "John O." | "me";
    messages: UIMessage;
}

export const ChatMessage = ({ sender, messages }: ChatMessageProps) => {
    return (
        <div 
            className={clsx(
                'flex flex-col gap-2', 
                {
                    'items-start': sender === "John O.",
                    'items-end': sender !== "John O."
                }
            )}
        >
            { sender === "John O." && (
                <div className="flex gap-3 items-center text-default">
                    <div className="relative w-7 h-7">
                        <Image 
                            src="/img/profile-octavio.jpg" 
                            className="object-cover rounded-full" 
                            alt="Image of John Octavio" 
                            fill
                        />
                    </div>
                    <p className='text-sm'>{ sender }</p>
                </div>
            )}
            <div 
                className={clsx(
                    'max-w-4/5 rounded-sm p-3 text-surface flex flex-col gap-1',
                    { 
                        'bg-accent': sender === "John O.",
                        'bg-green': sender !== "John O."
                    }
                )}
            >
                {messages.parts.map((part, index) => {
                    switch(part.type) {
                        case 'text':
                            return <p key={index} className='text-xs'>{part.text}</p>
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
}