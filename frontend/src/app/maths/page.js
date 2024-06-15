"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";

export default function Component() {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: '',
  });

  const [scores, setScores] = useState({
    addition: 0,
    subtraction: 0,
    multiplication: 0,
    division: 0,
  });

  const correctAnswers = {
    q1: { answer: 8, category: 'addition' },
    q2: { answer: 19, category: 'addition' },
    q3: { answer: 10, category: 'addition' },
    q4: { answer: 21, category: 'addition' },
    q5: { answer: 5, category: 'subtraction' },
    q6: { answer: 6, category: 'subtraction' },
    q7: { answer: 5, category: 'subtraction' },
    q8: { answer: 20, category: 'subtraction' },
    q9: { answer: 42, category: 'multiplication' },
    q10: { answer: 24, category: 'multiplication' },
    q11: { answer: 18, category: 'multiplication' },
    q12: { answer: 36, category: 'multiplication' },
    q13: { answer: 2, category: 'division' },
    q14: { answer: 3, category: 'division' },
    q15: { answer: 1, category: 'division' },
  };

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const newScores = {
      addition: 0,
      subtraction: 0,
      multiplication: 0,
      division: 0,
    };

    for (let key in correctAnswers) {
      if (parseInt(answers[key]) === correctAnswers[key].answer) {
        newScores[correctAnswers[key].category] += 1;
      }
    }

    setScores(newScores);
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <h1 className="mb-8 text-3xl font-bold">Math Problems</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">1. 5 + 3 = ?</span>
            <Input name="q1" type="number" className="w-20" onChange={handleChange} value={answers.q1} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">2. 12 + 7 = ?</span>
            <Input name="q2" type="number" className="w-20" onChange={handleChange} value={answers.q2} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">3. 4 + 6 = ?</span>
            <Input name="q3" type="number" className="w-20" onChange={handleChange} value={answers.q3} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">4. 18 + 3 = ?</span>
            <Input name="q4" type="number" className="w-20" onChange={handleChange} value={answers.q4} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">5. 9 - 4 = ?</span>
            <Input name="q5" type="number" className="w-20" onChange={handleChange} value={answers.q5} />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">6. 11 - 5 = ?</span>
            <Input name="q6" type="number" className="w-20" onChange={handleChange} value={answers.q6} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">7. 13 - 8 = ?</span>
            <Input name="q7" type="number" className="w-20" onChange={handleChange} value={answers.q7} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">8. 24 - 4 = ?</span>
            <Input name="q8" type="number" className="w-20" onChange={handleChange} value={answers.q8} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">9. 7 x 6 = ?</span>
            <Input name="q9" type="number" className="w-20" onChange={handleChange} value={answers.q9} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">10. 3 x 8 = ?</span>
            <Input name="q10" type="number" className="w-20" onChange={handleChange} value={answers.q10} />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">11. 2 x 9 = ?</span>
            <Input name="q11" type="number" className="w-20" onChange={handleChange} value={answers.q11} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">12. 6 x 6 = ?</span>
            <Input name="q12" type="number" className="w-20" onChange={handleChange} value={answers.q12} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">13. 10 ÷ 5 = ?</span>
            <Input name="q13" type="number" className="w-20" onChange={handleChange} value={answers.q13} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">14. 15 ÷ 5 = ?</span>
            <Input name="q14" type="number" className="w-20" onChange={handleChange} value={answers.q14} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">15. 4 ÷ 4 = ?</span>
            <Input name="q15" type="number" className="w-20" onChange={handleChange} value={answers.q15} />
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
      {Object.values(scores).some(score => score > 0) && (
        <div className="mt-4 text-xl font-semibold">
          <p>You got {scores.addition} out of 4 correct in Addition!</p>
          <p>You got {scores.subtraction} out of 4 correct in Subtraction!</p>
          <p>You got {scores.multiplication} out of 4 correct in Multiplication!</p>
          <p>You got {scores.division} out of 3 correct in Division!</p>
        </div>
      )}
    </div>
  );
}
