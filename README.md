# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


-- Details --
Build an Online Quiz Platform: Create a simple online quiz platform where users can take quizzes, view their scores, and review correct answers. The application should be responsive and use modern web technologies.
Requirements: Use React, Vite, Typescript and Tailwind CSS.
Functionality:
Quiz Creation (Admin): Allow an admin to create quizzes with multiple-choice questions. Each question should have one correct answer.
Take Quiz (User): Allow users to take a quiz by answering multiple-choice questions.
Submit Quiz: After completing the quiz, users should be able to submit their answers and receive a score.
View Results: Display the user's score and correct answers after submission.
Review Answers: Allow users to review the questions and their answers with the correct answers highlighted.
Use Tailwind CSS to create a clean and responsive design.
Ensure the application is mobile-friendly.
Include form validation and error handling for quiz creation and taking quizzes.
Use TypeScript (preferrable) or javascript.  
Implement local storage to save quiz progress and allow users to resume later.
Use Tailwind CSS animations for quiz transitions and results display.

Deliverables:
A GitHub repository with the complete source code.
A live demo link (such as netlify).
Submission deadline: 23 June, 2024