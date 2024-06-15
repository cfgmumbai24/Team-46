"use client";
import React, { useEffect, useState } from 'react';
import PromptBox from '@/components/PromptBox';
import axios from 'axios';
import Chat from '@/components/chat';
import { Spotlight } from '@/components/ui/Spotlight';
import toast from 'react-hot-toast';
import { Speaker, Volume } from 'lucide-react';
import { FaVolumeMute } from 'react-icons/fa';
import { FaVolumeHigh } from 'react-icons/fa6';

function ChatPage() {
  const [chatMessages, setChatMessages] = useState([]);
  const [animatePrompt, setAnimatePrompt] = useState(false);
  const [timeMs, setTimeMs] = useState(null);



  const speak = async (text) => {

    const elevenLabsAPIKey = "47b9509274f2a9b8975cb58779828433";
    const t1 = toast.loading("Text to Speech Synthesizing...");
    console.log('Text to synthesize:', text)
    try {
      const response = await axios.post(
        'https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM',
        { text },
        {
          headers: {
            'Content-Type': 'application/json',
            'xi-api-key': elevenLabsAPIKey,
          },
          responseType: 'arraybuffer',
        }
      );

      const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
      const audioURL = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioURL);

      toast.dismiss(t1);
      toast.success("Text to Speech is Playing");
      audio.play();
    } catch (error) {
      console.error('Error synthesizing speech:', error);
      toast.error("Failed to synthesize speech.");
    }
  };

  const onInputSent = async (input) => {
    const userInput = input.trim();
    const t2 = toast.loading("Agent Thinking. Beep! Boop!");
    try {
      setChatMessages(prevMessages => [...prevMessages, userInput]);
      const response = await axios.post(
        'https://one00x-buildathon-entropy.onrender.com/chat/response?query=' + encodeURIComponent(userInput)
      );

      setChatMessages(prevMessages => [...prevMessages, response.data.response]);
      speak(response.data.response);

      if (response.data.time_ms) {
        setTimeMs(response.data.time_ms);
      }

      toast.dismiss(t2);
      toast.success("Agent replied");
    } catch (error) {
      toast.dismiss(t2);
      console.error('Error sending input:', error);
      toast.error("Failed to send Input. Try Again");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Spotlight fill="#0099ff" />
      <div className='flex justify-center py-4'>
      </div>

      <Chat chatData={chatMessages.map((message, index) => ({ isUser: index % 2 === 0, message }))} />
      <div className='flex justify-center items-center'>
        <div className='flex w-[30lvw] justify-end items-center ' title='Please use the TTS sparingly, The quota is not sufficient for larger uses'>
        </div>
      </div>
      <PromptBox onSubmitPressed={onInputSent} animatePrompt={animatePrompt} setAnimatePrompt={setAnimatePrompt} timeMs={timeMs} />
    </div>
  );
}

export default ChatPage;
