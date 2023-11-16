import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import GeoMetaIconM from "../../ui/svg/GeoMetaIconM";
import GeoMetaIconL from "../../ui/svg/GeoMetaIconL";
const Welcome = ({ styles }) => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <GeoMetaIconL />
        <Text style={styles.text}>
          Twój kompleksowy przewodnik po grze GeoGuessr, który dostarczy Ci
          niezbędnych narzędzi i wskazówek, abyś mógł odkrywać świat w pełni
          świadomie i skutecznie!
        </Text>
        <Image
          source={require("../../assets/world.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};
export default Welcome;
