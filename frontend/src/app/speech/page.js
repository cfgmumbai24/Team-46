"use client";
import React, { useEffect, useState } from 'react';
import SpeechRecognitionComponent from '@/components/SpeechToText';

export default function SpeechToText() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we are on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render nothing or a loading state until the client is ready
    return null;
  }

  return (
    <div>
      <SpeechRecognitionComponent />
    </div>
  );
};
