import { Question } from "../models/interfaces";

export default function createQuizValidate(title:string, description:string, questions: Question[]) {
    if (title === '' || description === '') {
        return false;
      }
    
      for (const question of questions) {
        if (question.questionText.trim() === '') {
          return false;
        }
        for (const option of question.options) {
          if (option.trim() === '') {
            return false;
          }
        }
      }
    return true;
}