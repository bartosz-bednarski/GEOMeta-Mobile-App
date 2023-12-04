import { createSlice } from "@reduxjs/toolkit";

const achievementsInitialState = {
  flagsQuiz: {
    name: "Flagi",
    points: "",
    games: "",
  },
  emblemsQuiz: {
    name: "Herby",
    points: "",
    games: "",
  },
  platesQuiz: {
    name: "Rejestracje",
    points: "",
    games: "",
  },
};

const achievementsSlice = createSlice({
  name: "Achievements",
  initialState: achievementsInitialState,
  reducers: {
    setAchievements: (state, action) => {
      state.flagsQuiz = {
        name: "Flagi",
        points: action.payload.flags_quiz_score,
        games: action.payload.flags_quiz_counter,
      };
      state.emblemsQuiz = {
        name: "Herby",
        points: action.payload.emblems_quiz_score,
        games: action.payload.emblems_quiz_counter,
      };
      state.platesQuiz = {
        name: "Rejestracje",
        points: action.payload.plates_quiz_score,
        games: action.payload.plates_quiz_counter,
      };
    },
    updateAchievements: (state) => {
      state.flagsQuiz = {
        name: "",
        points: "",
        games: "",
      };
      state.emblemsQuiz = {
        name: "",
        points: "",
        games: "",
      };
      state.platesQuiz = {
        name: "",
        points: "",
        games: "",
      };
    },
  },
});

export default achievementsSlice.reducer;
export const setAchievements = achievementsSlice.actions.setAchievements;
export const updateAchievements = achievementsSlice.actions.updateAchievements;
