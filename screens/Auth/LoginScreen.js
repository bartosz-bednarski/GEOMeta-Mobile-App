import { View, Text, StyleSheet, TextInput, Keyboard } from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";
import Button from "../../ui/Button";
import LoaderOverlay from "../../ui/LoaderOverlay";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authStatus-reducer";
import GeoMetaIconL from "../../ui/svg/GeoMetaIconL";
import { loginUser } from "../../components/Auth/authHelper";
const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
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
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    if (username.length > 0) {
      setUsernameWarning({ status: false, message: "" });
    }
    if (password.length >= 6) {
      setPasswordWarning({ status: false, message: "" });
    }
  }, [username, password]);
  useLayoutEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const submitHandler = async () => {
    if (username.length === 0) {
      setUsernameWarning({
        status: true,
        message: "Uzupełnij nazwę użytkownika",
      });
    }
    if (password.length < 6) {
      setPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
    }
    if (username.length > 0 && password.length >= 6) {
      setIsFetching(true);
      const data = await loginUser(username, password);
      setIsFetching(false);

      if (data.message === "Login or password too short") {
        setUsernameWarning({
          status: true,
          message: "Uzupełnij nazwę użytkownika",
        });
        setPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
      }
      if (data.message === "Wrong username") {
        setUsernameWarning({ status: true, message: "Zła nazwa użytkownika" });
      }
      if (data.message === "Wrong password") {
        setPasswordWarning({ status: true, message: "Złe hasło" });
        setPassword("");
      }
      if (data.message === "loggedIn") {
        dispatch(
          login({
            accessToken: data.body.accessToken,
            email: data.body.email,
            iconBackgroundColor: data.body.iconBackgroundColor,
            username: data.body.username,
            usernameShort: data.body.usernameShort,
          })
        );
        navigation.navigate("Home");
      }
    }
  };
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View
      style={[
        styles.loginContainer,
        { paddingTop: isKeyboardVisible ? 70 : 0 },
      ]}
    >
      {!isKeyboardVisible && <GeoMetaIconL />}
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
        placeholderTextColor="white"
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
      <Button title="Zaloguj się" onPress={submitHandler} color="purple" />
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
    marginTop: 20,
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
export default LoginScreen;
