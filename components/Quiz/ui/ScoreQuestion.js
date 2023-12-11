import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const ScoreQuestion = ({ questionNumber, answer, question }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.label}>Pytanie {questionNumber + 1}</Text>
      <View style={styles.questionBox}>
        {answer === "correct" ? (
          <Ionicons name="checkmark" size={24} color="#26B726" />
        ) : (
          <Ionicons name="close" size={24} color="red" />
        )}

        <Text style={styles.questionText}>Wybierz flagę dla {question}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  questionContainer: {
    marginVertical: 2,
  },
  label: {
    width: "100%",
    color: "#CAAFE8",
    textAlign: "left",
    marginBottom: 5,
    fontWeight: "600",
    fontSize: 14,
  },
  questionBox: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#9264C6",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  questionText: {
    fontSize: 12,
    color: "white",
    fontWeight: "400",
    width: "100%",
    textAlign: "center",
  },
});
export default ScoreQuestion;
