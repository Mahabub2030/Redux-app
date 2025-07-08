import { quizData } from "@/Home/quizData";
import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

const initialState  = {
  questions: quizData,
  currentQuestionIndex:0,
  userAnswer:Array(quizData.length).fill(null)
};
console.log( typeof length)

export const quizeSclie = createSlice({
  name: "quiz",
  initialState ,
  reducers: {
setAuswer:(state, action)=>{
const {questionIndex, answer}= action.payload;
state.userAnswer[questionIndex]= answer
}
  },
});
export const { setAuswer } = quizeSclie.actions;

export default quizeSclie.reducer;
