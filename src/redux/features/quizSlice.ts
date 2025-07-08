import { quizData } from "@/Home/quizData";
import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

const initialState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
};
console.log(typeof length);

export const quizeSclie = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAuswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previusQution:(state)=>{
      if(state.currentQuestionIndex >0){
        state.currentQuestionIndex -= 1;
      }

    }
  },
});
export const { setAuswer, nextQuestion,previusQution } = quizeSclie.actions;

export default quizeSclie.reducer;
