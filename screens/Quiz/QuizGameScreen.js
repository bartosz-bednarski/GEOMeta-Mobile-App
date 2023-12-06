import { useLayoutEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { setQuestions } from "../../redux/quiz-reducer";
import QuizQuestion from "../../components/Quiz/QuizQuestion";
import LoaderOverlay from "../../ui/LoaderOverlay";
import QuizScore from "../../components/Quiz/QuizScore";
import { resetQuiz } from "../../redux/quiz-reducer";
import { getQuizGame } from "../../components/Quiz/quizHelper";
const QuizGameScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const quizTypeLoader = async (route) => {
    setIsFetching(true);
    dispatch(resetQuiz());
    const data = await getQuizGame(route);
    setDataQuestions(data);
    setActualQuestion({
      id: data[0].id,
      question: data[0].question,
      answers: data[0].data,
      correctAnswer: data[0].answer,
    });
    setIsFetching(false);
  };
  const [dataQuestions, setDataQuestions] = useState("");
  const [actualQuestion, setActualQuestion] = useState({
    id: "",
    question: "",
    answers: "",
    correctAnswer: "",
  });
  const nextQuestion = (nextQuestionNumber) => {
    if (nextQuestionNumber === 5) {
      setActualQuestion({
        id: 5,
        question: "",
        answers: "",
        correctAnswer: "",
      });
    }
    if (nextQuestionNumber < 5) {
      setActualQuestion({
        id: dataQuestions[nextQuestionNumber].id,
        question: dataQuestions[nextQuestionNumber].question,
        answers: dataQuestions[nextQuestionNumber].data,
        correctAnswer: dataQuestions[nextQuestionNumber].answer,
      });
    }
  };
  const [isFetching, setIsFetching] = useState(false);

  useLayoutEffect(() => {
    const quizType = route.params.quizType;

    quizTypeLoader(quizType);
  }, [route]);
  if (isFetching) {
    return <LoaderOverlay />;
  } else if (actualQuestion.id !== "" && actualQuestion.id < 5) {
    return (
      <QuizQuestion
        actualQuestion={actualQuestion}
        nextQuestion={nextQuestion}
        quizType={route.params.quizType}
      />
    );
  } else if (actualQuestion.id === 5) {
    return (
      <QuizScore
        quizType={route.params.quizType}
        questions={dataQuestions.map((question) => question.question)}
        navigation={navigation}
      />
    );
  }
};
export default QuizGameScreen;
