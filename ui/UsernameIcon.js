import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
const UsernameIcon = () => {
  const iconBackgroundColor = useSelector(
    (state) => state.authorization.iconBackgroundColor
  );
  const usernameShort = useSelector(
    (state) => state.authorization.usernameShort
  );
  return (
    <View style={[styles.container, { backgroundColor: iconBackgroundColor }]}>
      <Text style={styles.text}>{usernameShort}</Text>
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
});
export default UsernameIcon;
