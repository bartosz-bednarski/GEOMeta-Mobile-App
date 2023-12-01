import { createSlice } from "@reduxjs/toolkit";

const quizInitialState = {
  questions: [],
  actualQuestion: {
    id: 0,
    question: "",
    answers: [],
    correctAnswer: "",
  },
  answers: [],
};

const quizSlice = createSlice({
  name: "Quiz",
  initialState: quizInitialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
      state.actualQuestion = {
        id: action.payload[0].id,
        question: action.payload[0].question,
        answers: action.payload[0].data,
        correctAnswer: action.payload[0].answer,
      };
    },
    setAnswer: (state, action) => {
      state.answers = [...state.answers, action.payload];
    },
    resetQuiz: (state) => {
      (state.questions = []),
        (state.actualQuestion = {
          id: 0,
          question: "",
          answers: [],
          correctAnswer: "",
        }),
        (state.answers = []);
    },
  },
});

export const setQuestions = quizSlice.actions.setQuestions;
export const setAnswer = quizSlice.actions.setAnswer;
export const resetQuiz = quizSlice.actions.resetQuiz;
export default quizSlice.reducer;
