import React, { useState } from "react";
import { Test } from "../models/interfaces";
import CreateQuiz from "./CreateQuiz";
import { MdDelete } from "react-icons/md";

interface AdminProps {
  tests: Test[];
  addTestHandler: (newTest: Test) => void;
  deleteTestHandler: (testID: string) => void;
  setRoleHandler: (newRole: string | null) => void;
}

const Admin: React.FC<AdminProps> = ({ tests, addTestHandler, deleteTestHandler, setRoleHandler }) => {
  const [formOpen, setFormOpen] = useState<boolean>(false);

  const cancelTestHandler = () => {
    setFormOpen(false);
  };

  return (
    <div className="p-4">
      {formOpen ? (
        <CreateQuiz
          addTestHandler={addTestHandler}
          cancelTestHandler={cancelTestHandler}
        />
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-8">All Tests</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tests.map((test) => (
              <div
                key={test.id}
                className="bg-gray-800 min-w-[130px] mx-auto rounded-lg p-4 text-center shadow-md transform transition duration-300 hover:scale-105"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-[#2D0000] w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">{test.title}</span> 
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-white">{test.title}</h2>
                <p className="text-gray-400">{test.description}</p>
                <MdDelete
                    className="text-2xl text-red-600 cursor-pointer my-3 mx-auto"
                    onClick={() => deleteTestHandler(test.id)}
                  />
              </div>
            ))}
          </div>

            <div className="flex gap-4 items-center justify-center  my-8">
            <button
              onClick={() => setFormOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add New Test
            </button>
          <button
              onClick={() => setRoleHandler(null)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600"
            >
              Go Back
            </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
