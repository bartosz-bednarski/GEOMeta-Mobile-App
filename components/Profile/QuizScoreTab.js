import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const QuizScoreTab = ({ quizType, score, gamesPlayed }) => {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.label}>Quiz {quizType}</Text>
      <View style={styles.rowContainer}>
        <View style={styles.rowBox}>
          <View style={styles.iconBox}>
            <Ionicons name="star" color="#FFCC00" size={24} />
          </View>
          <Text style={styles.scoreText}>{score} punktów</Text>
        </View>
        <View style={styles.rowBox}>
          <View style={styles.iconBox}>
            <Ionicons name="game-controller" color="#FFCC00" size={24} />
          </View>
          <Text style={styles.scoreText}>{gamesPlayed} gier</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tabContainer: {
    flex: 3,
    backgroundColor: "#E8D7FC",
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    elevation: 10,
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 20,
    marginVertical: 15,
  },
  rowBox: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  label: {
    color: "#7131B7",
    fontSize: 16,
    width: "100%",
    textAlign: "left",
    fontWeight: "700",
  },
  iconBox: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#9264C6",
  },
  scoreText: {
    color: "#7131B7",
    fontSize: 16,
    textAlign: "left",
  },
});
export default QuizScoreTab;
