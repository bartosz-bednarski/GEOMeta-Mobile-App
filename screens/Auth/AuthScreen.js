import { View, StyleSheet, Image } from "react-native";
import GeoMetaIconL from "../../ui/svg/GeoMetaIconL";
import Button from "../../ui/Button";
import { verticalScale } from "../../util/Dimensions";
const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.authContainer}>
      <GeoMetaIconL />
      <Image source={require("../../assets/world.png")} style={styles.image} />
      <Button
        title="Zaloguj się"
        onPress={() => {
          navigation.navigate("Login");
        }}
        color="purple"
        styling={{ marginVertical: 5 }}
      />
      <Button
        title="Utwórz Konto"
        color="purple"
        onPress={() => {
          navigation.navigate("Register");
        }}
        styling={{ marginVertical: 5 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  authContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginVertical: 30,
    width: verticalScale(250),
    height: verticalScale(250),
  },
});

export default AuthScreen;
