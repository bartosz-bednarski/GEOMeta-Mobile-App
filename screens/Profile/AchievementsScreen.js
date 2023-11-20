import { Text, View, StyleSheet } from "react-native";

const AchievementsScreen = () => {
  return (
    <View style={styles.achievementsContainer}>
      <Text>Achievements screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  achievementsContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AchievementsScreen;
