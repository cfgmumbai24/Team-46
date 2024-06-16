"use client"
import 'regenerator-runtime/runtime'; // Add this line
import 'core-js/stable'; // Add this line
import axios from 'axios';

import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const SpeechRecognitionComponent = () => {
  const [arr, setArray] = useState(["e w x a c", "here tall for sky bed", "My village is very big", "There is a big monkey.He lives on a tree.He likes to jump.He also likes the bananas ", "A big tree stood in a garden . It was alone and lonely. One day a bird came and sat on it.The bird held a seed in his beak.It dropped the seed near the tree. A small plant grew there. Soon there were many more trees.The big tree was happy."]);
  const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English
  const [passage, setPassage] = useState(arr[0]); // Default passage is the first item in the array
  const [output, setOutput] = useState([]);
  const router = useRouter();

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  const handleClick = async () => {
    resetTranscript();
    if (arr.length === 0) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/get_grade', {
          grade: 'Class 1',
          accuracy: {
            Letters: arr[0],
            Words: arr[1],
            Sentences: arr[2],
            Paragraphs: arr[3],
            Story: arr[4]
          }
        });
        
        const { output } = response.data;
  
        await axios.post('http://localhost:8000/api/update', {
          newLevel: 'string',
          newScore: output
        }, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
  
        router.push('/user-dashboard');
        console.log('Data sent successfully:', response.data);
        console.log('Data:', response.data.output[0]);
  
      } catch (error) {
        console.error('Error sending data:', error);
      }
    } else {
      const newArray = [...arr];
      const firstElement = newArray.shift(); // Pop the first element
      console.log('First element:', firstElement);
      setArray(newArray); // Update the array state
      setPassage(firstElement); // Update the passage state
    }
  };
  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true, language: selectedLanguage });
    setIsListening(true);
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
    axios.post('http://127.0.0.1:5000/chat', {
      "original_text": passage,
      "user_text": transcript
    })
      .then(response => {
        console.log('Data sent successfully:', response.data);
        setOutput(prevOutput => [...prevOutput, response.data.answer.split('%')[0]]);
        console.log("arr" + output);
      })
      .catch(error => {
        // Handle error
        console.error('Error sending data:', error);
      });
  };

  const handleReset = () => {
    resetTranscript();
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    resetTranscript(); // Reset transcript when language changes
    setPassage("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='items-center justify-center text-center mx-40 my-4'>
        <div className="flex justify-center mb-4">
          <LanguageDropdown selectedLanguage={selectedLanguage} onChange={handleLanguageChange} />
        </div>
        <h2 className='text-2xl font-bold mb-4'>Read this: </h2>
        <p>{passage}</p>
      </div>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center space-x-4 mb-6">
          <Button onClick={handleStart} disabled={isListening}>
            <MicIcon className="mr-2 h-5 w-5" />
            Start Recording
          </Button>
          <Button className="bg-red-500" variant="danger" onClick={handleStop} disabled={!isListening}>
            <CircleStopIcon className="mr-2 h-5 w-5" />
            Stop Recording
          </Button>
        </div>
        <p>{transcript}</p>
      </div>
      <Button className="m-4 ml-8" onClick={handleClick}>Next</Button>
    </div>
  );
};

const LanguageDropdown = ({ selectedLanguage, onChange }) => {
  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'hi-IN', label: 'Hindi' },
    { value: 'mr', label: 'Marathi' }
  ];

  return (
    <select
      value={selectedLanguage}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    >
      {languageOptions.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

function CircleStopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <rect width="6" height="6" x="9" y="9" />
    </svg>
  )
}

function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}

export default SpeechRecognitionComponent;
