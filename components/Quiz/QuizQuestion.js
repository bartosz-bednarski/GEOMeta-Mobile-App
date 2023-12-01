import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { useLayoutEffect, useState, useRef, useEffect } from "react";
import { setAnswer } from "../../redux/quiz-reducer";
import Answer from "./Answer";
const QuizQuestion = ({ actualQuestion, nextQuestion }) => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(3);
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
  };
  useEffect(() => {
    if (actualQuestion.id < 5) {
      intervalID.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1010);

      timeout.current = setTimeout(() => {
        setTimeLeft(3);

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
      }, 3000);
    }
  }, [actualQuestion]);

  console.log(timeLeft);
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>
        Wybierz flagę {actualQuestion.question}
      </Text>
      <View style={styles.questionsBox}>
        {actualQuestion.answers.map((answer, index) => {
          return (
            <Answer
              answer={answer.country_flag}
              key={index}
              id={actualQuestion.id}
              onPress={() => userChooseAnswerHandler(index)}
            />
          );
        })}
      </View>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  questionText: {
    fontSize: 28,
    color: "white",
    fontWeight: "600",
    width: "70%",
    textAlign: "center",
  },
  questionsBox: {
    marginVertical: 50,
    width: "100%",
    height: "auto",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 20,
  },
});
export default QuizQuestion;
