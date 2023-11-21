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
  },
  text: {
    fontSize: 12,
    color: "white",
  },
  largeContainer: {
    width: 80,
    height: 80,
  },
  largeText: {
    fontSize: 24,
    fontWeight: "600",
  },
});
export default UsernameIcon;
