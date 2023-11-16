import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import ContinentsHeader from "../../ui/svg/ContinentsHeader";
const Continents = ({ styles }) => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <ContinentsHeader />
        <Text style={styles.text}>
          Doskonały sposób na naukę fascynujących ciekawostek o kontynentach i
          ich unikalnych cechach.
        </Text>
        <Image
          source={require("../../assets/africa.1024x977.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          Poznawanie tych informacji będzie nie tylko edukacyjne, ale także
          inspirujące, zachęcając Cię do odkrywania różnorodności naszej
          planety!
        </Text>
      </View>
    </View>
  );
};
export default Continents;
