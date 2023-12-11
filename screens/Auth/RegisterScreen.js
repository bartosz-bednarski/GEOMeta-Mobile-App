import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from "react";
import Button from "../../ui/Button";
import LoaderOverlay from "../../ui/LoaderOverlay";
import GeoMetaIconL from "../../ui/svg/GeoMetaIconL";
import { registerUser } from "../../components/Auth/authHelper";
const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameWarning, setUsernameWarning] = useState({
    status: false,
    message: "",
  });
  const [passwordWarning, setPasswordWarning] = useState({
    status: false,
    message: "",
  });
  const [emailWarning, setEmailWarning] = useState({
    status: false,
    message: "",
  });
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    if (username.length > 0) {
      setUsernameWarning({ status: false, message: "" });
    }
    if (password.length >= 6) {
      setPasswordWarning({ status: false, message: "" });
    }
    if (email.length > 0) {
      setEmailWarning({ status: false, message: "" });
    }
  }, [username, password, email]);

  const submitHandler = async () => {
    if (username.length === 0) {
      setUsernameWarning({
        status: true,
        message: "Uzupełnij nazwę użytkownika",
      });
    }
    if (email.length === 0) {
      setEmailWarning({ status: true, message: "Uzupełnij email" });
    }
    if (password.length < 6) {
      setPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
    }
    if (username.length > 0 && password.length >= 6 && email.length > 0) {
      setIsFetching(true);
      const data = await registerUser(username, email, password);
      setIsFetching(false);
      if (data.message === "Login,password or email too short") {
        setUsernameWarning({
          status: true,
          message: "Uzupełnij nazwę użytkownika",
        });
        setEmailWarning({ status: true, message: "Uzupełnij email" });
        setPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
      }
      if (data.message === "Username already exists!") {
        setUsernameWarning({
          status: true,
          message: "Podana nazwa użytkownika jest zajęta",
        });
        setUsername("");
      }
      if (data.message === "Email already exists!") {
        setEmailWarning({
          status: true,
          message: "Istnieje już konto na podany adres e-mail",
        });
        setEmail("");
      }
      if (data.message === "registered") {
        navigation.navigate("Login");
      }
    }
  };
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.registerContainer}>
      <GeoMetaIconL />
      <Text
        style={
          usernameWarning.status
            ? [styles.label, styles.labelWarning]
            : styles.label
        }
      >
        Użytkownik
      </Text>
      <TextInput
        style={
          usernameWarning.status
            ? [styles.input, styles.inputWarning]
            : styles.input
        }
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
      <Text
        style={
          emailWarning.status
            ? [styles.label, styles.labelWarning]
            : styles.label
        }
      >
        E-mail
      </Text>
      <TextInput
        style={
          emailWarning.status
            ? [styles.input, styles.inputWarning]
            : styles.input
        }
        underlineColorAndroid="transparent"
        autoCorrect={false}
        keyboardType="default"
        textContentType="emailAddress"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailWarning.status && (
        <Text style={styles.warningMessage}>{emailWarning.message}</Text>
      )}
      <Text
        style={
          passwordWarning.status
            ? [styles.label, styles.labelWarning]
            : styles.label
        }
      >
        Hasło
      </Text>
      <TextInput
        style={
          passwordWarning.status
            ? [styles.input, styles.inputWarning]
            : styles.input
        }
        underlineColorAndroid="transparent"
        autoCorrect={false}
        keyboardType="default"
        textContentType="password"
        secureTextEntry={true}
        value={password}
        placeholderTextColor="white"
        onChangeText={(text) => {
          setPassword(text);
        }}
        placeholder="minimum 6 znaków"
      />
      {passwordWarning.status && (
        <Text style={styles.warningMessage}>{passwordWarning.message}</Text>
      )}
      <Button title="Utwórz konto" onPress={submitHandler} color="purple" />
    </View>
  );
};
const styles = StyleSheet.create({
  registerContainer: {
    backgroundColor: "#7131B7",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: 10,
    textAlign: "left",
    width: "100%",
    color: "white",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  labelWarning: {
    color: "#de350b",
  },
  input: {
    width: "100%",
    height: 40,
    padding: 5,
    color: "white",
    borderRadius: 5,
    backgroundColor: "#9264C6",
  },
  inputWarning: {
    backgroundColor: "#de350b99",
    borderWidth: 1,
    borderColor: "#de350b",
  },
  warningMessage: {
    color: "red",
    width: "100%",
    textAlign: "left",
    marginTop: 5,
  },
});
export default RegisterScreen;
