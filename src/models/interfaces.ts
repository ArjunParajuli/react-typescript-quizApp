interface Question {
    id: string;
    questionText: string;
    options: string[];
    correctAnswer: string; 
  }
  
  interface Test {
    id: string;
    title: string;
    description: string;
    questions: Question[];
  }

  export type {Question, Test}