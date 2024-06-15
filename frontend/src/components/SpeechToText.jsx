import 'regenerator-runtime/runtime'; // Add this line
import 'core-js/stable'; // Add this line

import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

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
    <div>
      <button onClick={handleStart} disabled={isListening}>Start Listening</button>
      <button onClick={handleStop} disabled={!isListening}>Stop Listening</button>
      <button onClick={handleReset}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
