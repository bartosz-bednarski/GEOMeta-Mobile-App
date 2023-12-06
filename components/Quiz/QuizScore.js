import { Text, View, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "../../redux/quiz-reducer";
import ScoreQuestion from "./ui/ScoreQuestion";
import Button from "../../ui/Button";
import LoaderOverlay from "../../ui/LoaderOverlay";
import { updateAchievements } from "../../redux/achievements-reducer";
import { postQuizAnswers } from "./quizHelper";
const QuizScore = ({ quizType, questions, navigation }) => {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const accessToken = useSelector((state) => state.authorization.accessToken);
  const answersUser = useSelector((state) => state.quiz.answers);
  const [response, setResponse] = useState("");

  const postAnswersHTTP = async (route, accessToken, answersUser) => {
    setIsFetching(true);
    const data = await postQuizAnswers(route, accessToken, answersUser);
    dispatch(updateAchievements());
    setIsFetching(false);
    if ((data.message = "ok")) {
      setResponse(data.data);
    }
  };
  useLayoutEffect(() => {
    if (answersUser.length > 0) {
      postAnswersHTTP(quizType, accessToken, answersUser);
    }
  }, []);
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.scoreContainer}>
      {response !== "" &&
        response.user_correct_answers.map((question) => {
          return (
            <ScoreQuestion
              questionNumber={question.question_number}
              answer={question.userAnswer}
              key={question.question_number}
              question={questions[question.question_number]}
            />
          );
        })}

      <Text style={styles.scoreText}>Zdobyte punkty </Text>
      <Text style={styles.scoreText}>{response.user_score}</Text>
      <Button
        color="purple"
        title="Zagraj jeszcze raz"
        styling={{ width: 300, marginVertical: 5 }}
        onPress={() => {
          dispatch(resetQuiz());
          navigation.navigate("QuizType", {
            quizType: quizType,
          });
        }}
      />
      <Button
        color="purple"
        title="Inne quizy"
        styling={{ width: 300, marginVertical: 5 }}
        onPress={() => {
          dispatch(resetQuiz());
          navigation.navigate("QuizMenu");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  scoreContainer: {
    backgroundColor: "#7131B7",
    marginTop: 70,
    paddingBottom: 40,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 28,
    width: "100%",
    textAlign: "center",
    marginVertical: 10,
    color: "gold",
    fontWeight: "600",
  },
});
export default QuizScore;
