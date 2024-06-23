import React from "react";
import { Question } from "../models/interfaces";

interface SelectedTestQuesProps{
    question:Question,
     userAnswers: Record<string, string>,
     handleAnswerChange: (questionID:string, answer:string)=>void
}

const SelectedTestQues:React.FC<SelectedTestQuesProps> = ({question, userAnswers, handleAnswerChange}) => {
  return (
    <div key={question.id} className="mb-4 bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-blue-500">
        {question.questionText}
      </h2>
      <div className="mt-2 space-y-2">
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center justify-start space-x-2 ">
            <input
              type="radio"
              name={question.id}
              id={`${question.id}-${index}`}
              value={option}
              checked={userAnswers[question.id] === option}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              className="form-radio text-blue-500 cursor-pointer"
            />
            <label className="text-white cursor-pointer" htmlFor={`${question.id}-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedTestQues;
