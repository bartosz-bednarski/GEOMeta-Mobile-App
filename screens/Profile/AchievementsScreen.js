import { View, StyleSheet } from "react-native";
import QuizScoreTab from "../../components/Profile/QuizScoreTab";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAchievements } from "../../redux/achievements-reducer";
import LoaderOverlay from "../../ui/LoaderOverlay";
import { getAchievements } from "../../components/Profile/profileHelper";
const AchievementsScreen = () => {
  const accessToken = useSelector((state) => state.authorization.accessToken);
  const dispatch = useDispatch();
  const flags = useSelector((state) => state.achievements.flagsQuiz);
  const emblems = useSelector((state) => state.achievements.emblemsQuiz);
  const plates = useSelector((state) => state.achievements.platesQuiz);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const getProfileData = async () => {
      setIsFetching(true);
      dispatch(setAchievements(await getAchievements(accessToken)));
      setIsFetching(false);
    };
    flags.points === "" && getProfileData();
  }, [flags]);
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.achievementsContainer}>
      <QuizScoreTab
        quizType={flags.name}
        score={flags.points}
        gamesPlayed={flags.games}
      />
      <QuizScoreTab
        quizType={emblems.name}
        score={emblems.points}
        gamesPlayed={emblems.games}
      />
      <QuizScoreTab
        quizType={plates.name}
        score={plates.points}
        gamesPlayed={plates.games}
      />
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
    paddingHorizontal: 30,
  },
});
export default AchievementsScreen;
