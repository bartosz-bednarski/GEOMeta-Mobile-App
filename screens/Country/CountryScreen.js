import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useState, useLayoutEffect } from "react";
import IconBox from "../../components/Country/IconBox";
import LoaderOverlay from "../../ui/LoaderOverlay";
import {
  fetchCountryData,
  importEmblemsIcons,
  importFlagsIcons,
  importPlatesIcons,
} from "../../components/Country/countryHelper";
const CountryScreen = ({ navigation, route }) => {
  const countryName = route.params.header;
  const emblems = importEmblemsIcons();
  const flags = importFlagsIcons();
  const plates = importPlatesIcons();
  const [countrytData, setCountryData] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const getCountyDataHandler = async (countryName) => {
    setIsFetching(true);
    setCountryData(await fetchCountryData(countryName));
    setIsFetching(false);
  };

  useLayoutEffect(() => {
    getCountyDataHandler(countryName);
  }, []);
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
      <View style={styles.countryContainer}>
        <Text style={styles.label}>Flaga</Text>
        <Image
          source={flags[countrytData.country_flag]}
          style={styles.flagueImg}
        />
        <View style={styles.rowContainer}>
          <IconBox type="emblem" emblem={emblems[countrytData.emblem]} />
          <IconBox type="temperature" temperature={countrytData.temperature} />
          <IconBox type="movement" movement={countrytData.movement} />
        </View>
        <Text style={styles.label}>Stolica</Text>
        <View style={styles.tileLong}>
          <Text style={styles.tileLongText}>{countrytData.capitol}</Text>
        </View>
        <Text style={styles.label}>Waluta</Text>
        <View style={styles.tileLong}>
          <Text style={styles.tileLongText}>{countrytData.currency}</Text>
        </View>
        <Text style={styles.label}>Strona rządu</Text>
        <View style={styles.tileLong}>
          <Text style={styles.tileLongText}>{countrytData.website}</Text>
        </View>
        <Text style={styles.label}>Rejestracja</Text>
        <Image source={plates[countrytData.plate]} style={styles.plateImg} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  countryContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 50,
  },
  label: {
    width: "100%",
    color: "#CAAFE8",
    textAlign: "left",
    marginVertical: 10,
    fontWeight: "600",
    fontSize: 16,
  },
  flagueImg: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  plateImg: {
    width: "auto",
    height: 100,
    resizeMode: "contain",
  },
  rowContainer: {
    flexDirection: "row",
  },
  tileLong: {
    width: "100%",
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#9264C6",
    alignItems: "center",
    justifyContent: "center",
  },
  tileLongText: {
    fontSize: 20,
    color: "#E8D7FC",
    textAlign: "center",
  },
});
export default CountryScreen;
