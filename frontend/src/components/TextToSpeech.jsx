"use client"
import 'regenerator-runtime/runtime'; // Add this line
import 'core-js/stable'; // Add this line
import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";

// Dynamically import the Speech component to prevent SSR issues
const Speech = dynamic(() => import('react-speech'), { ssr: false });

const TextToSpeechComponent = () => {
  // Texts for different languages
  const texts = {
    en: [
      "e w x a c", 
      "here tall for sky bed", 
      "My village is very big", 
      "There is a big monkey. He lives on a tree. He likes to jump. He also likes bananas.", 
      "A big tree stood in a garden. It was alone and lonely. One day a bird came and sat on it. The bird held a seed in its beak. It dropped the seed near the tree. A small plant grew there. Soon there were many more trees. The big tree was happy."
    ],
    'hi-IN': [
      "क ख ग घ", 
      "यहाँ लंबा आकाश के लिए बिस्तर", 
      "मेरा गाँव बहुत बड़ा है", 
      "वहाँ एक बड़ा बंदर है। वह एक पेड़ पर रहता है। उसे कूदना पसंद है। उसे केले भी पसंद हैं।", 
      "एक बड़ा पेड़ एक बगीचे में खड़ा था। वह अकेला और उदास था। एक दिन एक पक्षी आया और उस पर बैठ गया। पक्षी अपनी चोंच में एक बीज लेकर आया। उसने बीज को पेड़ के पास गिरा दिया। वहाँ एक छोटा पौधा उग आया। जल्द ही वहाँ कई और पेड़ हो गए। बड़ा पेड़ खुश था।"
    ],
    mr: [
      "क ख ग घ", 
      "इथे उंच आकाशासाठी पलंग", 
      "माझं गाव खूप मोठं आहे", 
      "तिथे एक मोठा माकड आहे. तो एका झाडावर राहतो. त्याला उड्या मारायला आवडतात. त्याला केळीही आवडतात.", 
      "एक मोठं झाड बागेत उभं होतं. ते एकटं आणि दु:खी होतं. एके दिवशी एक पक्षी आला आणि त्यावर बसला. पक्षाने आपल्या चोचीत एक बीज पकडलं होतं. त्याने ते बीज झाडाजवळ टाकलं. तिथे एक छोटं रोप उगवलं. लवकरच तिथे आणखी अनेक झाडं झाली. मोठं झाड आनंदी झालं."
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0); // Index to track current item
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English
  const [inputText, setInputText] = useState(texts[selectedLanguage][currentIndex]); // Default text
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechRef = useRef(null);

  const handleButton = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % texts[selectedLanguage].length;
      setInputText(texts[selectedLanguage][newIndex]);
      return newIndex;
    });
  };

  const handleSpeak = () => {
    if (inputText.trim() !== '') {
      try {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(inputText);

        // Set language based on selectedLanguage state
        utterance.lang = selectedLanguage;

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

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    setCurrentIndex(0); // Reset index to 0 when language changes
    setInputText(texts[newLanguage][0]); // Update input text based on selected language
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
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Language:
          </label>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-400"
          >
            <option value="en">English</option>
            <option value="hi-IN">Hindi</option>
            <option value="mr">Marathi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechComponent;
