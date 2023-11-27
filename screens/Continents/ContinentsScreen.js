import { Text, View, StyleSheet } from "react-native";
import Tile from "../../ui/Tile";
import Europe from "../../ui/svg/continents/Europe";
import Africa from "../../ui/svg/continents/Africa";
import Asia from "../../ui/svg/continents/Asia";
import Oceania from "../../ui/svg/continents/Oceania";
import NorthAmerica from "../../ui/svg/continents/NorthAmerica";
import SouthAmerica from "../../ui/svg/continents/SouthAmerica";

const ContinentsScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("Continent");
  };
  return (
    <View style={styles.continentsContainer}>
      <View style={styles.rowContainer}>
        <Tile
          content="image"
          image={require("../../assets/continents/europe.webp")}
          header="Europa"
          id="europe"
          onPress={() =>
            navigation.navigate("Continent", {
              continentId: "europe",
              header: "Europa",
              image: require("../../assets/continents/europe.webp"),
              headerImage: <Europe />,
            })
          }
        />
        <Tile
          content="image"
          image={require("../../assets/continents/africa.webp")}
          header="Afryka"
          id="africa"
          onPress={() =>
            navigation.navigate("Continent", {
              continentId: "africa",
              header: "Afryka",
              image: require("../../assets/continents/africa.webp"),
              headerImage: <Africa />,
            })
          }
        />
      </View>
      <View style={styles.rowContainer}>
        <Tile
          content="image"
          image={require("../../assets/continents/northAmerica.webp")}
          header="Ameryka Północna"
          id="northAmerica"
          onPress={() =>
            navigation.navigate("Continent", {
              continentId: "northAmerica",
              header: "Ameryka Północna",
              image: require("../../assets/continents/northAmerica.webp"),
              headerImage: <NorthAmerica />,
            })
          }
        />
        <Tile
          content="image"
          image={require("../../assets/continents/southAmerica.webp")}
          header="Ameryka Południowa"
          id="southAmerica"
          onPress={() =>
            navigation.navigate("Continent", {
              continentId: "southAmerica",
              header: "Ameryka Południowa",
              image: require("../../assets/continents/southAmerica.webp"),
              headerImage: <SouthAmerica />,
            })
          }
        />
      </View>
      <View style={styles.rowContainer}>
        <Tile
          content="image"
          image={require("../../assets/continents/asia.webp")}
          header="Azja"
          id="asia"
          onPress={() =>
            navigation.navigate("Continent", {
              continentId: "asia",
              header: "Azja",
              image: require("../../assets/continents/asia.webp"),
              headerImage: <Asia />,
            })
          }
        />
        <Tile
          content="image"
          image={require("../../assets/continents/oceania.webp")}
          header="Oceania"
          id="oceania"
          onPress={() =>
            navigation.navigate("Continent", {
              continentId: "oceania",
              header: "Oceania",
              image: require("../../assets/continents/oceania.webp"),
              headerImage: <Oceania />,
            })
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  continentsContainer: {
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
export default ContinentsScreen;
