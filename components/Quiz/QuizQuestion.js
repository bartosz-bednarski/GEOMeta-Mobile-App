import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { useLayoutEffect } from "react";
const QuizQuestion = () => {
  const questionCountry = useSelector(
    (state) => state.quiz.actualQuestion.question
  );
  const answers = useSelector((state) => state.quiz.actualQuestion.answers);
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });

    return images;
  }
  let emblems;
  emblems = importAll(
    require.context(
      "../../assets/country/emblems",
      false,
      /\.(webp|jpe?g|png)$/
    )
  );
  let flags;
  flags = importAll(
    require.context("../../assets/country/flags", false, /\.(webp|jpe?g|png)$/)
  );
  let plates;
  plates = importAll(
    require.context("../../assets/country/plates", false, /\.(webp|jpe?g|png)$/)
  );
  useLayoutEffect(() => {}, [answers]);
  if (answers.length > 0) {
    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Wybierz flagę {questionCountry}</Text>
        {answers.map((answer, index) => {
          return (
            <Pressable
              style={{ width: 150, height: 100, backgroundColor: "red" }}
              id={index}
              onPress={() => console.log("123")}
            >
              <Image
                style={{ width: 150, height: 100 }}
                source={flags[answer.country_flag]}
              />
            </Pressable>
          );
        })}
      </View>
    );
  }
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
  tileContainer: {
    backgroundColor: "#9264C6",
    width: 150,
    height: 150,
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});
export default QuizQuestion;
