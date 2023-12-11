import { Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { setAnswer } from "../../redux/quiz-reducer";
import Answer from "./ui/Answer";
const QuizQuestion = ({ actualQuestion, nextQuestion, quizType }) => {
  let quizTypeHeader;
  let answerImage;
  switch (quizType) {
    case "Flags":
      quizTypeHeader = " flagę ";
      answerImage = "country_flag";
      break;
    case "Emblems":
      quizTypeHeader = " herb ";
      answerImage = "country_emblem";
      break;
    case "Plates":
      quizTypeHeader = " rejestrację ";
      answerImage = "country_plate";
      break;
    default:
      quizTypeHeader = " flagę ";
      answerImage = "country_flag";
      break;
  }
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(10);
  let intervalID = useRef(null);
  let timeout = useRef(null);
  const userChooseAnswerHandler = (userAnswer) => {
    clearInterval(intervalID.current),
      clearTimeout(timeout.current),
      dispatch(
        setAnswer({
          id: String(actualQuestion.id),
          user_answer: String(userAnswer),
          correct_answer: actualQuestion.correctAnswer,
        })
      );
    nextQuestion(actualQuestion.id + 1);
    setTimeLeft(10);
  };
  useEffect(() => {
    if (actualQuestion.id < 5) {
      intervalID.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1010);

      timeout.current = setTimeout(() => {
        setTimeLeft(10);

        return (
          clearInterval(intervalID.current),
          clearTimeout(timeout.current),
          dispatch(
            setAnswer({
              id: actualQuestion.id,
              user_answer: "",
              correct_answer: actualQuestion.correctAnswer,
            })
          ),
          nextQuestion(actualQuestion.id + 1)
        );
      }, 10000);
    }
  }, [actualQuestion]);
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>
        Wybierz{quizTypeHeader}
        {actualQuestion.question}
      </Text>
      <View style={styles.questionsBox}>
        {actualQuestion.answers.map((answer, index) => {
          return (
            <Answer
              answer={answer[answerImage]}
              key={index}
              id={actualQuestion.id}
              quizType={quizType}
              onPress={() => userChooseAnswerHandler(index)}
            />
          );
        })}
      </View>
      <View style={styles.timerBox}>
        <View style={[styles.timerFill, { width: `${timeLeft * 10}%` }]}></View>
      </View>
      <Text style={styles.timerText}>{timeLeft}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: "#7131B7",
    marginTop: 70,
    paddingBottom: 40,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    fontSize: 24,
    flex: 2,
    color: "white",
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
  },
  questionsBox: {
    marginVertical: 50,
    flex: 7,
    marginVertical: "auto",
    width: "100%",
    height: "auto",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  timerBox: {
    height: 50,
    width: "100%",
    marginVertical: 10,
    justifyContent: "flex-start",
    borderRadius: 20,
    flex: 1,
  },
  timerFill: {
    backgroundColor: "gold",
    height: 20,
    borderRadius: 20,
  },
  timerText: {
    fontSize: 24,
    color: "gold",
    width: "100%",
    textAlign: "center",
  },
});
export default QuizQuestion;
