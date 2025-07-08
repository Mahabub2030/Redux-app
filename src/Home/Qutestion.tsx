import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  //   CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizeControl from "./QuizeControl";
import { setAuswer } from "@/redux/features/quizSlice";

function Qutestion() {
  const dispatch = useAppDispatch();
  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const currestQuetion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];


  const handelAnswerChange = (ans: string) => {
    dispatch(setAuswer({ questionIndex: currentQuestionIndex, answer: ans }));
  };
  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currestQuetion.question}</CardTitle>
          {/* //<CardDescription> */}
          {/* {currestQuetion.options} */}
          {/* </CardDescription> */}
        </CardHeader>
        <CardContent>
          <div>
            {currestQuetion.options.map((option, index) => (
              <Button
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handelAnswerChange(option)}
                className="w-full mt-3"
                size={"lg"}
                key={index}
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
        <QuizeControl></QuizeControl>
      </Card>
    </div>
  );
}

export default Qutestion;
