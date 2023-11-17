import { Pressable, Text, StyleSheet, View } from "react-native";

const Button = ({ onPress, title }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.buttonPressed]
            : styles.buttonContainer
        }
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#44B6C6",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 15,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 2,
    shadowOffset: { width: 4, height: 4 },
    marginVertical: 30,
    width: 230,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
});
export default Button;
