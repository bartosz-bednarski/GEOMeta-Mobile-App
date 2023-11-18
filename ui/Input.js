import { TextInput, StyleSheet } from "react-native";

const Input = () => {
  return (
    <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      autoCorrect={false}
      keyboardType="default"
    />
  );
};
const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    padding: 5,
    color: "white",
    borderRadius: 5,
    backgroundColor: "#9264C6",
  },
});

export default Input;
