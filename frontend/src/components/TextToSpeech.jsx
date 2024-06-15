import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Speech component to prevent SSR issues
const Speech = dynamic(() => import('react-speech'), { ssr: false });

const TextToSpeechComponent = () => {
  // Texts for different languages
  const texts = {
    en: "Chhatrapati Shivaji Maharaj was a great warrior king and a visionary leader in Indian history. Born in 1630, he founded the Maratha Empire and played a crucial role in resisting the Mughal Empire's expansion in India. Shivaji Maharaj is renowned for his military tactics, innovative forts, and administrative reforms.",
    'hi-IN': "छत्रपती शिवाजी महाराज भारतीय इतिहास में एक महान योद्धा राजा और दृष्टिपटली नेता थे। 1630 में जन्मे, उन्होंने मराठा साम्राज्य की स्थापना की और भारत में मुग़ल साम्राज्य के विस्तार का सख्त विरोध किया। शिवाजी महाराज अपनी सैन्य रणनीतियों, नवाचारी किल्लों और प्रशासनिक सुधारों के लिए प्रसिद्ध हैं। उन्होंने स्वराज्य के विचार का प्रचार किया, जिसका अर्थ स्वाधीनता और स्वतंत्रता है, और धार्मिक सहिष्णुता के पक्षधर थे। ",
    mr: "छत्रपती शिवाजी महाराज हे भारतीय इतिहासातील एक महान योद्धा राजा आणि दृष्टिपटलेले नेते होते. 1630 मध्ये त्यांचे जन्म झाले, त्यांनी मराठा साम्राज्याची स्थापना केली आणि भारतात मुग़ल साम्राज्याच्या विस्तार का सख्त विरोध केला। शिवाजी महाराज हे आपल्या सैन्य युद्धतंत्रांचे, नवीन किल्ल्यांचे आणि प्रशासनिक सुधारणांचे प्रसिद्ध आहेत. त्यांनी स्वराज्याच्या आणि स्वतंत्रतेच्या अवधारणेचा प्रचार केला होता, ज्याचा अर्थ स्वाधीनता आणि स्वतंत्रता आहे, आणि धार्मिक सहिष्णुतेच्या पक्षपाती होते. "
  };

  const [inputText, setInputText] = useState(texts.en); // Default text in English
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English
  const speechRef = useRef(null);

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

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    setInputText(texts[value]); // Update input text based on selected language
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mx-40 my-4">
        <h2 className="text-2xl font-bold mb-4">Text to Speech Converter</h2>
        <textarea
          value={inputText}
          onChange={handleChange}
          rows={Math.ceil(inputText.length / 50)} // Adjust rows based on text length
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-400"
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
            onChange={(e) => handleLanguageChange(e.target.value)}
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
