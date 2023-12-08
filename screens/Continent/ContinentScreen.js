import { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import LoaderOverlay from "../../ui/LoaderOverlay";
import CountryIcon from "../../components/Continent/CountryIcon";
import {
  importCountriesIcons,
  fetchContinentData,
} from "../../components/Continent/continentHelper";
import { verticalScale } from "../../util/Dimensions";
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
      <View style={styles.headerBox}>{route.params.headerImage}</View>

      <Image source={route.params.image} style={styles.continentImg} />
      <Text style={styles.countriesLabel}>Kraje na kontynencie</Text>
      <View style={styles.countriesBox}>
        <FlatList
          // numColumns={4}
          // columnWrapperStyle={{ justifyContent: "flex-start" }}

          data={continentData}
          keyExtractor={(item) => item.country}
          key={(item) => item.country}
          horizontal
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
    </View>
  );
};

const styles = StyleSheet.create({
  continentContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 10,
    paddingHorizontal: 30,
    paddingTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerBox: {
    flex: 3,
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
    marginTop: 20,
    flex: 6,
    width: verticalScale(300),
    height: verticalScale(300),
    resizeMode: "contain",
    marginBottom: "auto",
  },
});
export default ContinentScreen;
