import { useLayoutEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../../redux/quiz-reducer";
import QuizQuestion from "../../components/Quiz/QuizQuestion";
import LoaderOverlay from "../../ui/LoaderOverlay";
import QuizScore from "../../components/Quiz/QuizScore";
const QuizScreen = ({ route, navigation }) => {
  const quizTypeLoader = async (route) => {
    setIsFetching(true);
    const url = `https://geo-meta-rest-api.vercel.app/api/quiz/get${route}`;
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    const dataMod = data.data.map((question) => {
      return {
        ...question,
        data: question.data.map((img) => {
          if (route === "Flags") {
            return { country_flag: img.country_flag.replace("svg", "webp") };
          } else if (route === "Emblems") {
            return {
              country_emblem: img.emblem.replace("svg", "webp"),
            };
          } else if (route === "Plates") {
            return {
              country_plate: img.plate.replace("svg", "webp"),
            };
          }
        }),
      };
    });
    // dispatch(setQuestions(dataMod));
    setDataQuestions(dataMod);
    setActualQuestion({
      id: dataMod[0].id,
      question: dataMod[0].question,
      answers: dataMod[0].data,
      correctAnswer: dataMod[0].answer,
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
    // console.log(dataQuestions);
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
export default QuizScreen;
