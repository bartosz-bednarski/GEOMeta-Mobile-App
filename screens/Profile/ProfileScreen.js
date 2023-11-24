import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authStatus-reducer";
import Tile from "../../ui/Tile";
const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("email");
    await AsyncStorage.removeItem("iconBackgroundColor");
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("usernameShort");
    dispatch(logout());
  };
  return (
    <View style={styles.profileContainer}>
      <View style={styles.rowContainer}>
        <Tile
          icon="person"
          content="icon"
          color="#44B6C6"
          header="Dane użytkownika"
          onPress={() => navigation.navigate("Personal")}
        />
        <Tile
          icon="lock-closed"
          content="icon"
          color="#44B6C6"
          header="Hasło"
          onPress={() => navigation.navigate("Password")}
        />
      </View>
      <View style={styles.rowContainer}>
        <Tile
          icon="trophy"
          content="icon"
          color="#44B6C6"
          header="Osiągnięcia"
          onPress={() => navigation.navigate("Achievements")}
        />
        <Tile
          icon="power"
          content="icon"
          color="red"
          header="Wyloguj się"
          onPress={logoutHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tileContainer: {
    backgroundColor: "#9264C6",
    width: 150,
    height: 150,
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});
export default ProfileScreen;
