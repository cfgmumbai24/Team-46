"use client";
import 'regenerator-runtime/runtime'; // Add this line
import 'core-js/stable'; // Add this line
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const MathsBeginnerUI = () => {
  const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(getRandomNumber()); // Default random number
  const [output, setOutput] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Check if the transcript is a valid number between 1 and 100
    const num = parseInt(transcript, 10);
    if (!isNaN(num) && num === currentNumber) {
      handleStop();
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  const handleClick = () => {
    resetTranscript();
    setCurrentNumber(getRandomNumber()); // Generate new random number
  };

  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
    setIsListening(true);
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
    axios.post('http://127.0.0.1:5000/chat', {
      "original_number": currentNumber,
      "user_text": transcript
    })
      .then(response => {
        console.log('Data sent successfully:', response.data);
        const accuracy = parseFloat(response.data.accuracy);
        if (accuracy > 80) {
          setScore(prevScore => prevScore + 1);
        }
        setOutput(prevOutput => [...prevOutput, response.data.answer.split('%')[0]]);
        // Increment attempts and check if the limit has been reached
        setAttempts(prevAttempts => prevAttempts + 1);
        if (attempts < 4) {
          setCurrentNumber(getRandomNumber());
        }
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };

  const handleReset = () => {
    resetTranscript();
  };

  if (attempts >= 5) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className='items-center justify-center text-center mx-40 my-4'>
          <h2 className='text-2xl font-bold mb-4'>Final Score: {score}</h2>
          <Button onClick={() => router.push('/user-dashboard')}>Go to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='items-center justify-center text-center mx-40 my-4'>
        <h2 className='text-2xl font-bold mb-4'>Read this number: </h2>
        <p>{currentNumber}</p>
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
      <div>Score: {score}</div>
      <div>Attempts: {attempts}/5</div>
    </div>
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
  );
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
  );
}

export default MathsBeginnerUI;
