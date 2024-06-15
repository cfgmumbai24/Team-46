"use client"
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

  const [score, setScore] = useState(null);

  const correctAnswers = {
    q1: 8,
    q2: 5,
    q3: 24,
    q4: 6,
    q5: 13,
    q6: 6,
    q7: 24,
    q8: 6,
    q9: 13,
    q10: 5,
    q11: 18,
    q12: 6,
    q13: 13,
    q14: 6,
    q15: 16,
  };

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let score = 0;
    for (let key in correctAnswers) {
      if (parseInt(answers[key]) === correctAnswers[key]) {
        score += 1;
      }
    }
    setScore(score);
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
            <span className="text-lg font-medium">2. 12 - 7 = ?</span>
            <Input name="q2" type="number" className="w-20" onChange={handleChange} value={answers.q2} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">3. 4 x 6 = ?</span>
            <Input name="q3" type="number" className="w-20" onChange={handleChange} value={answers.q3} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">4. 18 ÷ 3 = ?</span>
            <Input name="q4" type="number" className="w-20" onChange={handleChange} value={answers.q4} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">5. 9 + 4 = ?</span>
            <Input name="q5" type="number" className="w-20" onChange={handleChange} value={answers.q5} />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">6. 11 - 5 = ?</span>
            <Input name="q6" type="number" className="w-20" onChange={handleChange} value={answers.q6} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">7. 3 x 8 = ?</span>
            <Input name="q7" type="number" className="w-20" onChange={handleChange} value={answers.q7} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">8. 24 ÷ 4 = ?</span>
            <Input name="q8" type="number" className="w-20" onChange={handleChange} value={answers.q8} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">9. 7 + 6 = ?</span>
            <Input name="q9" type="number" className="w-20" onChange={handleChange} value={answers.q9} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">10. 13 - 8 = ?</span>
            <Input name="q10" type="number" className="w-20" onChange={handleChange} value={answers.q10} />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">11. 2 x 9 = ?</span>
            <Input name="q11" type="number" className="w-20" onChange={handleChange} value={answers.q11} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">12. 36 ÷ 6 = ?</span>
            <Input name="q12" type="number" className="w-20" onChange={handleChange} value={answers.q12} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">13. 8 + 5 = ?</span>
            <Input name="q13" type="number" className="w-20" onChange={handleChange} value={answers.q13} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">14. 15 - 9 = ?</span>
            <Input name="q14" type="number" className="w-20" onChange={handleChange} value={answers.q14} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">15. 4 x 4 = ?</span>
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
      {score !== null && (
        <div className="mt-4 text-xl font-semibold">
          You got {score} out of 15 correct!
        </div>
      )}
    </div>
  );
}
