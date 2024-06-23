import React from 'react';
import { Question } from '../models/interfaces';

interface QuestionProps {
  q: Question;
  index: number;
  handleQuestionChange: (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const EachQuestion: React.FC<QuestionProps> = ({ q, index, handleQuestionChange }) => {
  return (
    <div className="mb-6 p-4 bg-gray-200 rounded-lg shadow-lg">
      <label className="block text-lg font-semibold text-gray-800">Question {index + 1}</label>
      <input
        type="text"
        name="questionText"
        value={q.questionText}
        onChange={(e) => handleQuestionChange(index, e)}
        placeholder="Enter question"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-300"
      />
      <div className="flex gap-3 mt-2">
        {q.options.map((option, optionIndex) => (
          <div key={optionIndex} className="mt-2 w-1/4">
            <label className="block text-sm font-semibold text-gray-700">Option {optionIndex + 1}</label>
            <input
              type="text"
              name={`option${optionIndex}`}
              value={option}
              onChange={(e) => handleQuestionChange(index, e)}
              placeholder="Enter option"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-300"
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <label className="block text-sm font-semibold text-gray-700">Select Correct Answer</label>
        <select
          name="correctAnswer"
          value={q.correctAnswer}
          onChange={(e) => handleQuestionChange(index, e)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-300"
        >
          <option value="">Select correct answer</option>
          {q.options.map((option, optionIndex) => (
            <option key={optionIndex} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EachQuestion;
