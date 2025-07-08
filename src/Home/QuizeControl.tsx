import { Button } from "@/components/ui/button";
import { nextQuestion, previusQution } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizeControl() {
  const {  currentQuestionIndex, userAnswer } = useAppSelector(
    // questions,
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();
  const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;

  const handelNext = () => {
    if (isAnswerSelected) {
      dispatch(nextQuestion());
    }
  };
  const handelPrev = () => {
    dispatch(previusQution());
  };
  return (
    <div className="flex justify-between mt-3 space-x-4">
      <Button onClick={handelPrev}>previous</Button>
      <Button onClick={handelNext}>next</Button>
    </div>
  );
}
