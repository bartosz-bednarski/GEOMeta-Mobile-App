import { Pressable, Text, StyleSheet, View } from "react-native";

const Button = ({ onPress, title, color, styling, disabled }) => {
  return (
    <View>
      {color === "aqua" && (
        <Pressable
          disabled={disabled}
          onPress={onPress}
          style={({ pressed }) =>
            pressed
              ? [
                  styles.buttonContainer,
                  styles.aquaBackground,
                  styles.buttonPressed,
                ]
              : disabled
              ? [styles.buttonContainer, { backgroundColor: "grey" }]
              : [styles.buttonContainer, styles.aquaBackground]
          }
        >
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      )}
      {color === "purple" && (
        <Pressable
          disabled={disabled}
          onPress={onPress}
          style={({ pressed }) =>
            pressed
              ? [
                  styles.buttonContainer,
                  styles.purpleBackground,
                  styles.buttonPressed,
                  styling,
                ]
              : disabled
              ? [styles.buttonContainer, { backgroundColor: "grey" }]
              : [styles.buttonContainer, styles.purpleBackground, styling]
          }
        >
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 2,
    elevation: 5,
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 2 },
    marginVertical: 30,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  aquaBackground: {
    backgroundColor: "#44B6C6",
  },
  purpleBackground: {
    backgroundColor: "#7B41BB",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});
export default Button;
