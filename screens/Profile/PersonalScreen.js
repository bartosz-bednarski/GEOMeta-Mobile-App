import { Text, View, StyleSheet, TextInput, Keyboard } from "react-native";
import UsernameIcon from "../../ui/UsernameIcon";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { useState, useEffect, useLayoutEffect } from "react";
import LoaderOverlay from "../../ui/LoaderOverlay";
import { changeShortname } from "../../redux/authStatus-reducer";
import { postChangeShortname } from "../../components/Profile/profileHelper";
const PersonalScreen = () => {
  const dispatch = useDispatch();
  const [shortName, setShortName] = useState("");
  const [shortNameWarning, setShortNameWarning] = useState({
    status: false,
    message: "",
  });
  const [isFetching, setIsFetching] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const username = useSelector((state) => state.authorization.username);
  const email = useSelector((state) => state.authorization.email);
  const accessToken = useSelector((state) => state.authorization.accessToken);
  useEffect(() => {
    if (shortName.length < 3) {
      setShortNameWarning({ status: false, message: "" });
    }
  }, [shortName]);
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
    if (shortName.length > 2) {
      setShortNameWarning({ status: true, message: "Nazwa jest za długa" });
    }
    if (shortName.length < 2) {
      setShortNameWarning({ status: true, message: "Nazwa jest za krótka" });
    }
    if (shortName.length === 0) {
      setShortNameWarning({ status: true, message: "Nazwa jest pusta" });
    }
    if (shortName.length === 2) {
      setIsFetching(true);
      const data = await postChangeShortname(accessToken, shortName);
      setIsFetching(false);
      if (data.message === "ok") {
        dispatch(changeShortname(data.body.usernameShort));
        setShortName("");
      }
      if (data.message === "Shortname too long") {
        setLoader({ status: false, type: "" });
        setShortNameWarning({ status: true, message: "Nazwa jest za długa" });
      }
      if (data.message === "Shortname too short") {
        setLoader({ status: false, type: "" });
        setShortNameWarning({ status: true, message: "Nazwa jest za krótka" });
      }
      if (data.message === "Shortname empty") {
        setLoader({ status: false, type: "" });
        setShortNameWarning({ status: true, message: "Nazwa jest pusta" });
      }
    }
  };
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.personalContainer}>
      {!isKeyboardVisible && (
        <View style={styles.tabContainer}>
          <UsernameIcon size="lg" />
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      )}
      <View style={styles.tabContainer}>
        <Text
          style={
            !shortNameWarning.status
              ? styles.label
              : [styles.label, styles.labelWarning]
          }
        >
          Zmień krótką nazwę (2 znaki)
        </Text>
        <TextInput
          style={
            !shortNameWarning.status
              ? styles.input
              : [styles.input, styles.inputWarning]
          }
          underlineColorAndroid="transparent"
          autoCorrect={false}
          keyboardType="default"
          textContentType="username"
          placeholderTextColor="white"
          value={shortName}
          onChangeText={(text) => setShortName(text)}
        />
        {shortNameWarning.status && (
          <Text style={styles.warningMessage}>{shortNameWarning.message}</Text>
        )}
        <Button title="Zatwierdź" color="purple" onPress={submitHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  personalContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingTop: 30,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tabContainer: {
    backgroundColor: "transparent",
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  username: {
    color: "#E8D7FC",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 5,
  },
  email: {
    color: "#E8D7FC",
    fontSize: 16,
    marginTop: 5,
  },
  label: {
    color: "#E8D7FC",
    fontSize: 14,
    width: "100%",
    textAlign: "left",
  },
  input: {
    width: "100%",
    height: 40,
    padding: 5,
    color: "white",
    borderRadius: 5,
    backgroundColor: "#C19AED",
    marginVertical: 10,
    elevation: 5,
  },
  labelWarning: {
    color: "red",
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
export default PersonalScreen;
