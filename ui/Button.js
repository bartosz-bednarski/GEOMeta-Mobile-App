import { Pressable, Text, StyleSheet, View } from "react-native";

const Button = ({ onPress, title, color, styling }) => {
  return (
    <View>
      {color === "aqua" && (
        <Pressable
          onPress={onPress}
          style={({ pressed }) =>
            pressed
              ? [
                  styles.buttonContainer,
                  styles.aquaBackground,
                  styles.buttonPressed,
                ]
              : [styles.buttonContainer, styles.aquaBackground]
          }
        >
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      )}
      {color === "purple" && (
        <Pressable
          onPress={onPress}
          style={({ pressed }) =>
            pressed
              ? [
                  styles.buttonContainer,
                  styles.purpleBackground,
                  styles.buttonPressed,
                  styling,
                ]
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
    paddingHorizontal: 60,
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 2,
    elevation: 5,
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 2 },
    marginVertical: 30,
    width: 230,
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
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});
export default Button;
