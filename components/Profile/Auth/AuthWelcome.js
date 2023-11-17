import { Text, View, StyleSheet, Image } from "react-native";
import GeoMetaIconL from "../../../ui/svg/GeoMetaIconL";
import Button from "../../../ui/Button";

const AuthWelcome = () => {
  return (
    <View style={styles.authContainer}>
      <GeoMetaIconL />
      <Image
        source={require("../../../assets/world.png")}
        style={styles.image}
      />
      <Button title="Zaloguj się" />
      <Button title="Utwórz Konto" />
    </View>
  );
};
const styles = StyleSheet.create({
  authContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginVertical: 30,
    width: 250,
    height: 250,
  },
});
export default AuthWelcome;
