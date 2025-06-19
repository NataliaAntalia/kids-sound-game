import {createSlice} from "@reduxjs/toolkit";

export const quizSlice= createSlice({
    name: "quizSlice",
    initialState:{correct:0, incorrect:0},
    reducers:{
        incrementCorrect: (state) => {
            state.correct += 1;
        },
        incrementIncorrect: (state) => {
            state.incorrect += 1;
        },
        resetQuiz: (state) => {
            state.correct = 0;
            state.incorrect = 0;
        },
    }
})

export const { incrementCorrect, incrementIncorrect, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;