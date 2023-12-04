import { Text, View, StyleSheet } from "react-native";
import QuizScoreTab from "../../components/Profile/QuizScoreTab";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAchievements } from "../../redux/achievements-reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoaderOverlay from "../../ui/LoaderOverlay";
const AchievementsScreen = () => {
  const dispatch = useDispatch();
  const flags = useSelector((state) => state.achievements.flagsQuiz);
  const emblems = useSelector((state) => state.achievements.emblemsQuiz);
  const plates = useSelector((state) => state.achievements.platesQuiz);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const getProfileData = async () => {
      setIsFetching(true);
      const accessToken = await AsyncStorage.getItem("accessToken");
      const response = await fetch(
        `https://geo-meta-rest-api.vercel.app/api/profile/getProfile`,
        {
          method: "GET",
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      dispatch(setAchievements(data.body));
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
