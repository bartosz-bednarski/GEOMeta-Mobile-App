import { Text, View, StyleSheet } from "react-native";

const PersonalScreen = () => {
  return (
    <View style={styles.personalContainer}>
      <Text>Personal screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  personalContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PersonalScreen;
