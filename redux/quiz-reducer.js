import { createSlice } from "@reduxjs/toolkit";

const quizInitialState = {
  questions: [],
  actualQuestion: {
    id: 0,
    question: "",
    answers: [],
    correctAnswer: "",
  },
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
  },
});

export const setQuestions = quizSlice.actions.setQuestions;
export default quizSlice.reducer;
