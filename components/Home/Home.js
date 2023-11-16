import { View, Text, StyleSheet, ScrollView } from "react-native";
import GeoMetaIconM from "../../ui/svg/GeoMetaIconM";
import Welcome from "./Welcome";
import Continents from "./Continents";
import Quiz from "./Quiz";
import Forum from "./Forum";

const Home = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.homeContainer}>
        <Welcome styles={styles} />
        <Continents styles={styles} />
        <Quiz styles={styles} />
        <Forum styles={styles} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#7131B7",
    paddingVertical: 40,
    paddingHorizontal: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginVertical: 30,
    textAlign: "center",
    fontWeight: "500",
  },
  image: {
    marginVertical: 30,
    width: 250,
    height: 250,
  },
});
