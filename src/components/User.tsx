import React, { useState, useEffect } from "react";
import { Test } from "../models/interfaces";
import EachTest from "./EachTest";
import SelectedTestQues from "./SelectedTestQues";
import Results from "./Results";

interface UserProps {
  tests: Test[];
  setRoleHandler: (newRole: string | null) => void;
}

const User: React.FC<UserProps> = ({ tests, setRoleHandler }) => {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (selectedTest) {
      const storedAnswers = localStorage.getItem(
        `userAnswers-${selectedTest.id}`
      );
      if (storedAnswers) {
        setUserAnswers(JSON.parse(storedAnswers));
      } else {
        const initialAnswers: Record<string, string> = {};
        selectedTest.questions.forEach((question) => {
          initialAnswers[question.id] = "";
        });
        setUserAnswers(initialAnswers);
      }
    }
  }, [selectedTest]);

  useEffect(() => {
    if (selectedTest) {
      localStorage.setItem(
        `userAnswers-${selectedTest.id}`,
        JSON.stringify(userAnswers)
      );
    }
  }, [userAnswers, selectedTest]);

  const handleTestSelect = (test: Test) => {
    setSelectedTest(test);
    setShowResults(false);
    setScore(0);
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer,
    });
  };

  const handleSubmit = () => {
    if (selectedTest) {
      let newScore = 0;
      selectedTest.questions.forEach((question) => {
        if (userAnswers[question.id] === question.correctAnswer) {
          newScore++;
        }
      });
      setScore(newScore);
      setShowResults(true);
    }
  };

  const handleRetake = () => {
    const initialAnswers: Record<string, string> = {};
    selectedTest?.questions.forEach((question) => {
      initialAnswers[question.id] = "";
    });
    setUserAnswers(initialAnswers);
    setShowResults(false);
    setScore(0);
  };

  const handleResetProgress = () => {
    if (selectedTest) {
      localStorage.removeItem(`userAnswers-${selectedTest.id}`);
      const initialAnswers: Record<string, string> = {};
      selectedTest.questions.forEach((question) => {
        initialAnswers[question.id] = "";
      });
      setUserAnswers(initialAnswers);
      setShowResults(false);
      setScore(0);
    }
  };

  return (
    <div className="p-4">
      {!selectedTest ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{tests.length === 0 ? "No Quizzes Available!" : "Available Quizzes"}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tests.map((test) => (
              <EachTest key={test.id} test={test} handleTestSelect={handleTestSelect} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">{selectedTest.title}</h1>
          {!showResults ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              {selectedTest.questions.map((question) => (
                <SelectedTestQues question={question} userAnswers={userAnswers} handleAnswerChange={handleAnswerChange} />
              ))}
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Submit Quiz
              </button>
              <button
                type="button"
                onClick={handleResetProgress}
                className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Reset Progress
              </button>
            </form>
          ) : (
            <Results score={score} selectedTest={selectedTest} userAnswers={userAnswers} handleRetake={handleRetake} setSelectedTest={setSelectedTest} />
          )}
        </div>
      )}
      <button
        onClick={() => setRoleHandler(null)}
        className="mt-14 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default User;
