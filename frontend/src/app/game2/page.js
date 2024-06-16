"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [attempts, setAttempts] = useState(5); // Total attempts allowed
  const [score, setScore] = useState(0); // Current score
  const [correctAnswers, setCorrectAnswers] = useState(0); // Correct answers count
  const [currentHit, setCurrentHit] = useState(null); // Current target number to hit
  const [gameOver, setGameOver] = useState(false); // State to track if game is over
  const router = useRouter();

  // Initialize game on component mount
  useEffect(() => {
    newHit(); // First hit number
  }, []);

  // Function to generate bubbles
  const makeBubble = () => {
    let bubbles = [];

    // Generate random numbers including currentHit
    const randomNumbers = Array.from({ length: 14 }, () => Math.floor(Math.random() * 90) + 10); // 10-99 range
    const allNumbers = [...randomNumbers, currentHit].sort(() => Math.random() - 0.5);

    for (let i = 1; i <= 15; i++) { // Generate 15 bubbles
      let rn = allNumbers[i - 1];
      bubbles.push(
        <div
          key={i}
          className="w-16 h-16 flex items-center justify-center bg-blue-200 border-2 border-blue-500 rounded-lg font-bold text-lg cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={handleClick}
        >
          {rn}
        </div>
      );
    }
    return bubbles;
  };

  // Function to handle bubble click
  const handleClick = (event) => {
    if (parseInt(event.target.textContent) === currentHit) {
      increaseScore(); // Increase score for correct hit
      newHit(); // Generate new hit number
      checkGameStatus(); // Check if game should end
    }
    // Decrease attempts for every click
    setAttempts(attempts - 1);
  };

  // Function to generate new hit number
  const newHit = () => {
    const ranno = Math.floor(Math.random() * 90) + 10; // Random number between 10 and 99
    setCurrentHit(ranno);
  };

  // Function to increase score and correct answers count
  const increaseScore = () => {
    setScore(score + 10);
    setCorrectAnswers(correctAnswers + 1);
  };

  // Function to check game status
  const checkGameStatus = () => {
    if (correctAnswers === 4) {
      setGameOver(true); // Set game over state to true
    }
  };

  // Function to handle next page navigation
  const navigateTonextlevel = () => {
    router.push('/maths'); // Navigate to the 'maths' page
  };

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="w-3/4 h-5/6 bg-white rounded-lg overflow-hidden">
        <div className="h-20 bg-blue-800 flex justify-between items-center px-20 text-white">
          <div className="btn">
            <h1 className="text-3xl">Hit</h1>
            <div className="box hitval">{currentHit}</div>
          </div>
          <div className="btn">
            <h1 className="text-3xl">Attempts Left</h1>
            <div className="box timerval">{attempts}</div>
          </div>
          <div className="btn">
            <h1 className="text-3xl">Score</h1>
            <div className="box scoreval">{score}</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 p-4">
          {currentHit !== null && makeBubble()} {/* Ensure bubbles are generated only when currentHit is available */}
        </div>
        {gameOver && (
          <div className="flex justify-center">
            <p>You have passed this level</p>
            <button
              onClick={navigateTonextlevel}
              className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Next Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
