import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useState, useLayoutEffect } from "react";
import TileBox from "../../components/Country/TileBox";
import LoaderOverlay from "../../ui/LoaderOverlay";
const CountryScreen = ({ navigation, route }) => {
  const countryName = route.params.header;
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });

    return images;
  }
  let emblems;
  emblems = importAll(
    require.context(
      "../../assets/country/emblems",
      false,
      /\.(webp|jpe?g|png)$/
    )
  );
  let flags;
  flags = importAll(
    require.context("../../assets/country/flags", false, /\.(webp|jpe?g|png)$/)
  );
  let plates;
  plates = importAll(
    require.context("../../assets/country/plates", false, /\.(webp|jpe?g|png)$/)
  );
  const [countrytData, setCountryData] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const fetchContinentData = async () => {
    const response = await fetch(
      `https://geo-meta-rest-api.vercel.app/api/countries/${countryName}`,
      { mode: "cors" }
    );
    const data = await response.json();
    const dataMod = {
      ...data.data[0],
      country_flag: data.data[0].country_flag.replace("svg", "webp"),
      emblem: data.data[0].emblem.replace("svg", "webp"),
      plate: data.data[0].plate.replace("svg", "webp"),
    };
    setCountryData(dataMod);
    setIsFetching(false);
    console.log("data", dataMod);
  };

  useLayoutEffect(() => {
    fetchContinentData();
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
          <TileBox type="emblem" emblem={emblems[countrytData.emblem]} />
          <TileBox type="temperature" temperature={countrytData.temperature} />
          <TileBox type="movement" movement={countrytData.movement} />
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
        {/* <Image source={emblems[countrytData.emblem]} /> */}

        {/* <Image source={plates[countrytData.plate]} /> */}
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
