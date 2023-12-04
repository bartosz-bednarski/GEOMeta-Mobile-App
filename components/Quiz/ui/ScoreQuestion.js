import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const ScoreQuestion = ({ questionNumber, answer, question }) => {
  return (
    <>
      <Text style={styles.label}>Pytanie {questionNumber + 1}</Text>
      <View style={styles.questionBox}>
        {answer === "correct" ? (
          <Ionicons name="checkmark" size={30} color="#26B726" />
        ) : (
          <Ionicons name="close" size={30} color="red" />
        )}

        <Text style={styles.questionText}>Wybierz flagę dla {question}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  label: {
    width: "100%",
    color: "#CAAFE8",
    textAlign: "left",
    marginVertical: 10,
    fontWeight: "600",
    fontSize: 14,
  },
  questionBox: {
    width: "100%",
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#9264C6",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  questionText: {
    fontSize: 14,
    color: "white",
    fontWeight: "400",
    width: "100%",
    textAlign: "center",
  },
});
export default ScoreQuestion;
