import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from "react";
import Button from "../../ui/Button";
const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameWarning, setUsernameWarning] = useState({
    status: false,
    message: "",
  });
  const [passwordWarning, setPasswordWarning] = useState({
    status: false,
    message: "",
  });
  useEffect(() => {
    if (username.length > 0) {
      setUsernameWarning({ status: false, message: "" });
    }
    if (password.length >= 6) {
      setPasswordWarning({ status: false, message: "" });
    }
  }, [username, password]);
  const submitHandler = () => {
    if (username.length === 0) {
      setUsernameWarning({
        status: true,
        message: "Uzupełnij nazwę użytkownika",
      });
    }
    if (password.length < 6) {
      setPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
    }
  };
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.label}>Użytkownik</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        keyboardType="default"
        textContentType="nickname"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      {usernameWarning.status && (
        <Text style={styles.warningMessage}>{usernameWarning.message}</Text>
      )}
      <Text style={styles.label}>Hasło</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        keyboardType="default"
        textContentType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
        placeholder="minimum 6 znaków"
      />
      {passwordWarning.status && (
        <Text style={styles.warningMessage}>{passwordWarning.message}</Text>
      )}
      <Button title="Zaloguj się" onPress={submitHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: 30,
    textAlign: "left",
    width: "100%",
    color: "white",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 40,
    padding: 5,
    color: "white",
    borderRadius: 5,
    backgroundColor: "#9264C6",
  },
  warningMessage: {
    color: "red",
    width: "100%",
    textAlign: "left",
    marginTop: 5,
  },
});
export default LoginScreen;
