import React from "react";
import ResultEachQues from "./ResultEachQues";
import { Test } from "../models/interfaces";

interface ResultsProps {
  score: number;
  selectedTest: Test;
  userAnswers: Record<string, string>;
  handleRetake: () => void;
  setSelectedTest: (value: React.SetStateAction<Test | null>) => void;
}

const Results: React.FC<ResultsProps> = ({ score, selectedTest, userAnswers, handleRetake, setSelectedTest }) => {
  return (
    <div className="animate-slide-down">
      <h2 className="text-xl font-bold mb-4 text-black">
        Your Score: {score} / {selectedTest.questions.length}
      </h2>
      {selectedTest.questions.map((question) => (
        <ResultEachQues key={question.id} question={question} userAnswers={userAnswers} />
      ))}
      <button
        onClick={handleRetake}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Retake Quiz
      </button>
      <button
        onClick={() => setSelectedTest(null)}
        className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Back to Quizzes
      </button>
    </div>
  );
};

export default Results;
