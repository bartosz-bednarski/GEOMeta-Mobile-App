import { useLayoutEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import LoaderOverlay from "../../ui/LoaderOverlay";
import CountryIcon from "../../components/Continent/CountryIcon";
import {
  importCountriesIcons,
  fetchContinentData,
} from "../../components/Continent/continentHelper";
const ContinentScreen = ({ navigation, route }) => {
  const continentId = route.params.continentId;
  const countriesIcons = importCountriesIcons(continentId);
  const [continentData, setContinentData] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  const getDataHandler = async (continentId) => {
    setIsFetching(true);
    setContinentData(await fetchContinentData(continentId));
    setIsFetching(false);
  };

  useLayoutEffect(() => {
    getDataHandler(continentId);
  }, []);
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.continentContainer}>
      {route.params.headerImage}
      <Image source={route.params.image} style={styles.continentImg} />
      <Text style={styles.countriesLabel}>Kraje na kontynencie</Text>
      <FlatList
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "flex-start" }}
        style={styles.countriesBox}
        data={continentData}
        keyExtractor={(item) => item.country}
        key={(item) => item.country}
        renderItem={(item) => {
          return (
            <CountryIcon
              countryIcon={countriesIcons[item.item.img]}
              countryName={item.item.country}
              key={(item) => item.country}
              onPress={() =>
                navigation.navigate("Country", {
                  header: item.item.country,
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continentContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingHorizontal: 30,
    paddingTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  countriesBox: {
    flexDirection: "column",
    width: "100%",
  },
  countriesLabel: {
    width: "100%",
    color: "#CAAFE8",
    textAlign: "left",
    marginVertical: 10,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
  },
  continentImg: {
    marginVertical: 30,
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
export default ContinentScreen;
