import { quizData } from "@/Home/quizData";
import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

const initialState  = {
  question: quizData,
  currentQuestionIndex:0,
  userAnswer:Array(quizData.length).fill(null)
};

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

// export const {} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.quiz.value;
export default quizeSclie.reducer;
