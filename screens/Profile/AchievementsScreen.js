import { Text, View, StyleSheet } from "react-native";
import QuizScoreTab from "../../components/Profile/QuizScoreTab";

const AchievementsScreen = () => {
  return (
    <View style={styles.achievementsContainer}>
      <QuizScoreTab quizType="Flagi" score={100} gamesPlayed={10} />
      <QuizScoreTab quizType="Herby" score={100} gamesPlayed={10} />
      <QuizScoreTab quizType="Rejestracje" score={100} gamesPlayed={10} />
    </View>
  );
};
const styles = StyleSheet.create({
  achievementsContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
export default AchievementsScreen;
