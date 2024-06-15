import 'regenerator-runtime/runtime'; // Add this line
import 'core-js/stable'; // Add this line

import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from "@/components/ui/button"

const SpeechRecognitionComponent = () => {
  const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true });
    setIsListening(true);
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  const handleReset = () => {
    resetTranscript();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className='items-center justify-center text-center mx-40 my-4'>
        <h2 className='text-2xl font-bold mb-4'>Read this: </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam obcaecati facere quibusdam asperiores impedit numquam possimus enim alias commodi provident libero ab aspernatur tempora ipsum, saepe accusamus nostrum illo voluptates. Neque.</p>
    </div>
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Voice Recording</h2>
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