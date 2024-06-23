import React from "react";
import { Test } from "../models/interfaces";

const EachTest:React.FC<{test: Test, handleTestSelect:(test:Test)=>void}> = ({test, handleTestSelect}) => {
  return (
    <div
      key={test.id}
      className="bg-gray-700 min-w-[50px] rounded-lg p-4 text-center shadow-md transform transition duration-300 hover:scale-105"
    >
      <div className="flex justify-center items-center mb-4">
        <div className="bg-[#2D0000] w-16 h-16 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl">{test.title}</span>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-white">{test.title}</h2>
      <p className="text-gray-400">{test.description}</p>
      <button
        onClick={() => handleTestSelect(test)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Take Quiz
      </button>
    </div>
  );
};

export default EachTest;
