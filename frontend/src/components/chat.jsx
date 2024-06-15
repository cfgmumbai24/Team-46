import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatbotResponse from './ui/ChatbotResponse.jsx';
import UserChat from './UserChat';

export default function Chat({ chatData }) {
    return (
        <ScrollArea className="mt-6 min-h-max h-[580px]">
            <div className="mx-auto max-w-2xl px-4">
                {chatData && chatData.map((chat, index) => (
                    <React.Fragment key={index}>
                        {chat.isUser ? <UserChat message={chat.message} /> : <ChatbotResponse message={chat.message} />}
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    );
}
