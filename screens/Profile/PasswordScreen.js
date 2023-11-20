import { Text, View, StyleSheet } from "react-native";

const PasswordScreen = () => {
  return (
    <View style={styles.passwordContainer}>
      <Text>Password screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  passwordContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PasswordScreen;
