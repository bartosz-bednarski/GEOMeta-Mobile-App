import { Text, View, StyleSheet, TextInput } from "react-native";
import UsernameIcon from "../../ui/UsernameIcon";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { useState, useEffect } from "react";
import LoaderOverlay from "../../ui/LoaderOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { changeShortname } from "../../redux/authStatus-reducer";
const PersonalScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [shortName, setShortName] = useState("");
  const [shortNameWarning, setShortNameWarning] = useState({
    status: false,
    message: "",
  });
  const [isFetching, setIsFetching] = useState(false);
  const username = useSelector((state) => state.authorization.username);
  const email = useSelector((state) => state.authorization.email);
  const accessToken = useSelector((state) => state.authorization.accessToken);
  useEffect(() => {
    if (shortName.length < 3) {
      setShortNameWarning({ status: false, message: "" });
    }
  }, [shortName]);
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
      const url =
        "https://geo-meta-rest-api.vercel.app/api/profile/changeShortname";
      const response = await fetch(url, {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          usernameShort: shortName,
        }),
      });
      const data = await response.json();
      setIsFetching(false);
      if (data.message === "ok") {
        await AsyncStorage.removeItem("usernameShort");
        await AsyncStorage.setItem("usernameShort", data.body.usernameShort);
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
      <View style={styles.tabContainer}>
        <UsernameIcon size="lg" />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.tabContainer}>
        <Text
          style={
            !shortNameWarning.status
              ? styles.label
              : [styles.label, styles.labelWarning]
          }
        >
          Zmień krótką nazwę
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
          placeholder="max 2 znaki"
          value={shortName}
          onChangeText={(text) => setShortName(text)}
        />
        {shortNameWarning.status && (
          <Text style={styles.warningMessage}>{shortNameWarning.message}</Text>
        )}
        <Button title="Zatwierdź" onPress={submitHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  personalContainer: {
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
  username: {
    color: "#CAAFE8",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 5,
  },
  email: {
    color: "#CAAFE8",
    fontSize: 16,
    marginTop: 5,
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
  labelWarning: {
    color: "#de350b",
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
