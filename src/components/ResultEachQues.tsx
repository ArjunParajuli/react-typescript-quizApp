import React from "react";
import { Question } from "../models/interfaces";

const ResultEachQues: React.FC<{
  question: Question;
  userAnswers: Record<string, string>;
}> = ({ question, userAnswers }) => {
  return (
    <div key={question.id} className="mb-4 bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-white">
        {question.questionText}
      </h3>
      <div className="mt-2 space-y-2">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 text-white`}
          >
            <span
              className={` ${
                option === question.correctAnswer && "text-green-500"
              } ${ (option === userAnswers[question.id] && option !== question.correctAnswer) && "text-red-500" } `}
            >
              {option}
            </span>
            {option === userAnswers[question.id] &&
              option !== question.correctAnswer && (
                <span className="text-red-500 ml-2">(Your answer)</span>
              )}
            {option === question.correctAnswer && (
              <span className="text-green-500 ml-2">(Correct answer)</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultEachQues;
