"use client"
import 'regenerator-runtime/runtime'; // Add this line
import 'core-js/stable'; // Add this line
import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";

// Dynamically import the Speech component to prevent SSR issues
const Speech = dynamic(() => import('react-speech'), { ssr: false });

const TextToSpeechComponent = () => {
  // Texts for different units
  const texts = [
    "e w x a c", 
    "here tall for sky bed", 
    "My village is very big", 
    "There is a big monkey. He lives on a tree. He likes to jump. He also likes bananas.", 
    "A big tree stood in a garden. It was alone and lonely. One day a bird came and sat on it. The bird held a seed in its beak. It dropped the seed near the tree. A small plant grew there. Soon there were many more trees. The big tree was happy."
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Index to track current item
  const [inputText, setInputText] = useState(texts[currentIndex]); // Default text
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechRef = useRef(null);

  const handleButton = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % texts.length;
      setInputText(texts[newIndex]);
      return newIndex;
    });
  };

  const handleSpeak = () => {
    if (inputText.trim() !== '') {
      try {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(inputText);

        utterance.lang = 'en'; // Set language to English

        utterance.onstart = () => {
          console.log("Speech started.");
          setIsSpeaking(true);
        };

        utterance.onend = () => {
          console.log("Speech ended.");
          setIsSpeaking(false);
        };

        utterance.onerror = (error) => {
          console.error("Speech synthesis error:", error);
          setIsSpeaking(false);
        };

        speechSynthesis.cancel(); // Cancel any ongoing speech
        speechSynthesis.speak(utterance);
      } catch (error) {
        console.error("Error while initializing speech synthesis:", error);
        setIsSpeaking(false);
      }
    }
  };

  const handleStop = () => {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mx-4 my-4 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">Correct Answer</h2>
        <textarea
          value={inputText}
          onChange={handleChange}
          rows={Math.ceil(inputText.length / 50)} // Adjust rows based on text length
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-400 resize-none"
          placeholder="Enter text to speak..."
        />
      </div>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={handleSpeak}
            disabled={isSpeaking}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
              isSpeaking ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSpeaking ? 'Speaking...' : (
              <>
                🔊 Listen
              </>
            )}
          </button>
          <button
            onClick={handleStop}
            disabled={!isSpeaking}
            className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ${
              !isSpeaking ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Stop
          </button>
        </div>
        <div className='flex justify-center'>
          <Button onClick={handleButton}>Next</Button>
        </div>
        {isSpeaking && (
          <p className="text-lg font-bold text-gray-800 mb-4">Speaking...</p>
        )}
        <div className="speech-container">
          <Speech
            ref={speechRef}
            text={inputText}
            onStart={() => console.log('Speech started')}
            onEnd={() => console.log('Speech ended')}
            onPaused={() => console.log('Speech paused')}
            onBoundary={() => console.log('Speech boundary')}
          />
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechComponent;
