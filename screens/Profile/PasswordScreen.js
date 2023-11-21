import { Text, View, StyleSheet, TextInput } from "react-native";
import Button from "../../ui/Button";
import { Ionicons } from "@expo/vector-icons";
const PasswordScreen = () => {
  return (
    <View style={styles.passwordContainer}>
      <View style={styles.tabContainer}>
        <View style={styles.headerIconBox}>
          <Ionicons name="lock-closed" color="white" size={40} />
        </View>
        <Text style={styles.label}>Wprowadź stare hasło:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          keyboardType="default"
          textContentType="password"
          secureTextEntry={true}
        />
        <Text style={styles.label}>Wprowadź nowe hasło:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          keyboardType="default"
          textContentType="password"
          secureTextEntry={true}
        />
        <Text style={styles.label}>Potwierdź nowe hasło:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          keyboardType="default"
          textContentType="password"
          secureTextEntry={true}
        />
        <Button title="Zatwierdź" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  passwordContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tabContainer: {
    backgroundColor: "#7B41BB",
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  headerIconBox: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#44B6C6",
    marginBottom: 30,
  },
  label: {
    color: "#CAAFE8",
    fontSize: 16,
    width: "100%",
    textAlign: "left",
  },
  input: {
    width: "100%",
    height: 40,
    padding: 5,
    color: "white",
    borderRadius: 5,
    backgroundColor: "#9264C6",
    marginVertical: 10,
  },
});
export default PasswordScreen;
