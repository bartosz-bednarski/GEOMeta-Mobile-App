import { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../../redux/quiz-reducer";
import QuizQuestion from "../../components/Quiz/QuizQuestion";
const QuizScreen = ({ route }) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.actualQuestion);
  const quizTypeLoader = async (route) => {
    const url = `https://geo-meta-rest-api.vercel.app/api/quiz/get${route}`;
    // const url = `http://localhost:9001/api/quiz/get${
    //   params.quizType[0].toUpperCase() + params.quizType.slice(1)
    // }`;
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    const dataMod = data.data.map((question) => {
      return {
        ...question,
        data: question.data.map((img) => {
          return { country_flag: img.country_flag.replace("svg", "webp") };
        }),
      };
    });
    dispatch(setQuestions(dataMod));
  };
  useLayoutEffect(() => {
    const quizType = route.params.quizType;
    quizTypeLoader(quizType);
  }, []);
  return <QuizQuestion />;
};
export default QuizScreen;
