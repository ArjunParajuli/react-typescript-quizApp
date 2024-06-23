import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Test, Question } from '../models/interfaces';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EachQuestion from './EachQuestion';
import createQuizValidate from '../utils/createQuizValidate';

interface CreateQuizProps {
  addTestHandler: (test: Test) => void;
  cancelTestHandler: () => void;
}

const CreateQuiz: React.FC<CreateQuizProps> = ({ addTestHandler, cancelTestHandler }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([
    { id: uuidv4(), questionText: '', options: ['', '', '', ''], correctAnswer: '' }
  ]);

  const handleQuestionChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newQuestions = [...questions];
    if (e.target.name === 'questionText') {
      newQuestions[index].questionText = e.target.value;
    } else if (e.target.name === 'correctAnswer') {
      newQuestions[index].correctAnswer = e.target.value;
    } else {
      const optionIndex = parseInt(e.target.name[6]);
      newQuestions[index].options[optionIndex] = e.target.value;
    }
    setQuestions(newQuestions);
  };

  const addQuestionHandler = () => {
    setQuestions([...questions, { id: uuidv4(), questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(createQuizValidate(title, description, questions)){
      const newTest: Test = {
        id: uuidv4(),
        title,
        description,
        questions,
      };
      addTestHandler(newTest);
     toast.success('Quiz created', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })

      setTitle('');
      setDescription('');
      setQuestions([{ id: uuidv4(), questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
    }else{
      toast.error('Options cannot be empty!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded shadow-md">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Create a Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-800">Quiz Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-800">Quiz Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-300"
          />
        </div>

        {questions.map((q, index) => (
          <EachQuestion
            key={q.id}
            q={q}
            index={index}
            handleQuestionChange={handleQuestionChange}
          />
        ))}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={addQuestionHandler}
            className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow"
          >
            Add Question
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow"
          >
            Save Quiz
          </button>

          <button
            type="button"
            onClick={() => { cancelTestHandler();  }}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
