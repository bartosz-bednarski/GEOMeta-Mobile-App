import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
const UsernameIcon = ({ size }) => {
  const iconBackgroundColor = useSelector(
    (state) => state.authorization.iconBackgroundColor
  );
  const usernameShort = useSelector(
    (state) => state.authorization.usernameShort
  );
  let containerStyle;
  let textStyle;
  if (size === "sm") {
    containerStyle = [
      styles.container,
      { backgroundColor: iconBackgroundColor },
    ];
    textStyle = styles.text;
  } else if (size === "lg") {
    containerStyle = [
      styles.container,
      styles.largeContainer,
      { backgroundColor: iconBackgroundColor },
    ];
    textStyle = [styles.text, styles.largeText];
  } else if (size === "md") {
    containerStyle = [
      styles.container,
      styles.mediumContainer,
      { backgroundColor: iconBackgroundColor },
    ];
    textStyle = [styles.text, styles.mediumText];
  }
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{usernameShort}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: "black",
  },
  text: {
    fontSize: 12,
    color: "white",
  },
  largeContainer: {
    width: 80,
    height: 80,
  },
  mediumContainer: {
    width: 50,
    height: 50,
  },
  largeText: {
    fontSize: 24,
    fontWeight: "600",
  },
  mediumText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
export default UsernameIcon;
