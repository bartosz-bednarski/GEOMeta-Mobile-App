import { View, ActivityIndicator, StyleSheet } from "react-native";

const LoaderOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#44B6C6" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7131B7",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoaderOverlay;
