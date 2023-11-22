import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import Button from "../../ui/Button";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { updateAccessToken } from "../../redux/authStatus-reducer";
import LoaderOverlay from "../../ui/LoaderOverlay";
const PasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [oldPasswordWarning, setOldPasswordWarning] = useState({
    status: false,
    message: "",
  });
  const [newPasswordWarning, setNewPasswordWarning] = useState({
    status: false,
    message: "",
  });
  const [newPasswordConfirmWarning, setNewPasswordConfirmWarning] = useState({
    status: false,
    message: "",
  });
  const [responseWarning, setResponseWarning] = useState({
    status: false,
    message: "",
  });
  const [isFetching, setIsFetching] = useState(false);
  const accessToken = useSelector((state) => state.authorization.accessToken);
  const dispatch = useDispatch();
  useEffect(() => {
    setResponseWarning({ status: false, message: "" });
    if (oldPassword.length >= 6) {
      setOldPasswordWarning({ status: false, message: "" });
    }
    if (newPassword.length >= 6) {
      setNewPasswordWarning({ status: false, message: "" });
    }
    if (newPasswordConfirm.length >= 6) {
      setNewPasswordConfirmWarning({ status: false, message: "" });
    }
  }, [oldPassword, newPassword, newPasswordConfirm]);

  const submitHandler = async () => {
    if (oldPassword.length < 6) {
      setOldPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
    }
    if (newPassword.length < 6) {
      setNewPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
    }
    if (newPasswordConfirm.length < 6) {
      setNewPasswordConfirmWarning({
        status: true,
        message: "Hasło jest za krótkie",
      });
    }
    if (newPassword !== newPasswordConfirm) {
      setNewPasswordWarning({ status: true, message: "Hasła różnią się" });
      setNewPasswordConfirmWarning({
        status: true,
        message: "Hasła różnią się",
      });
    }
    if (
      newPassword === newPasswordConfirm &&
      oldPassword.length >= 6 &&
      newPassword.length >= 6 &&
      newPasswordConfirm.length >= 6
    ) {
      setIsFetching(true);
      const url =
        "https://geo-meta-rest-api.vercel.app/api/profile/changePassword";
      const response = await fetch(url, {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          oldPassword: oldPassword,
          newPassword: newPassword,
          newPasswordConfirm: newPasswordConfirm,
        }),
      });
      const data = await response.json();
      setIsFetching(false);
      if (data.message === "Password changed") {
        // setResponseMessage({ status: true, message: "Password changed" });
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.setItem("accessToken", data.body.accessToken);
        dispatch(updateAccessToken(data.body.accessToken));
        setOldPassword("");
        setNewPassword("");
        setNewPasswordConfirm("");
        Alert.alert("Zmiana hasła", "Hasło zmienione", [{ text: "ok" }]);
      }
      if (data.message === "One or more passwords are too short") {
        setResponseWarning({
          status: true,
          message: "Jedno z haseł jest za krótkie",
        });
      }
      if (data.message === "New passwords are different") {
        setResponseWarning({ status: true, message: "Nowe hasła różnią się" });
      }
      if (data.message === "Failed to connect with db") {
        setResponseWarning({
          status: true,
          message: "Problem z połączeniem się z bazą danych",
        });
      }
      if (data.message === "Old password is wrong") {
        setResponseWarning({ status: true, message: "Stare hasło jest złe" });
      }
    }
  };
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.passwordContainer}>
      <View style={styles.tabContainer}>
        <View style={styles.headerIconBox}>
          <Ionicons name="lock-closed" color="white" size={40} />
        </View>
        <Text style={styles.label}>Wprowadź stare hasło:</Text>
        <TextInput
          style={[
            styles.input,
            oldPasswordWarning.status && styles.inputWarning,
          ]}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          keyboardType="default"
          textContentType="password"
          secureTextEntry={true}
          value={oldPassword}
          onChangeText={(text) => {
            setOldPassword(text);
          }}
        />
        {oldPasswordWarning.status && (
          <Text style={styles.labelWarning}>{oldPasswordWarning.message}</Text>
        )}
        <Text style={styles.label}>Wprowadź nowe hasło:</Text>
        <TextInput
          style={[
            styles.input,
            newPasswordWarning.status && styles.inputWarning,
          ]}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          keyboardType="default"
          textContentType="password"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={(text) => {
            setNewPassword(text);
          }}
        />
        {newPasswordWarning.status && (
          <Text style={styles.labelWarning}>{newPasswordWarning.message}</Text>
        )}
        <Text style={styles.label}>Potwierdź nowe hasło:</Text>
        <TextInput
          style={[
            styles.input,
            newPasswordConfirmWarning.status && styles.inputWarning,
          ]}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          keyboardType="default"
          textContentType="password"
          secureTextEntry={true}
          value={newPasswordConfirm}
          onChangeText={(text) => {
            setNewPasswordConfirm(text);
          }}
        />
        {newPasswordConfirmWarning.status && (
          <Text style={styles.labelWarning}>
            {newPasswordConfirmWarning.message}
          </Text>
        )}
        {responseWarning.status && (
          <Text style={styles.labelWarning}>{responseWarning.message}</Text>
        )}
        <Button title="Zatwierdź" onPress={submitHandler} />
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
  labelWarning: {
    width: "100%",
    color: "#de350b",
    textAlign: "left",
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
export default PasswordScreen;
