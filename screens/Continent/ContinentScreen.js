import { useLayoutEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import LoaderOverlay from "../../ui/LoaderOverlay";
import Europe from "../../ui/svg/continents/Europe";
import CountryIconBox from "../../components/Continent/CountryIconBox";
// import africa from "../../assets/continents/";
const ContinentScreen = ({ navigation, route }) => {
  let continentId = route.params.continentId;
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });

    return images;
  }
  let images;

  if (continentId === "northAmerica") {
    images = importAll(
      require.context(
        "../../assets/continent/northAmerica",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "southAmerica") {
    images = importAll(
      require.context(
        "../../assets/continent/southAmerica",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "africa") {
    images = importAll(
      require.context(
        "../../assets/continent/africa",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "europe") {
    images = importAll(
      require.context(
        "../../assets/continent/europe",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "asia") {
    images = importAll(
      require.context(
        "../../assets/continent/asia",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "oceania") {
    images = importAll(
      require.context(
        "../../assets/continent/oceania",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }

  const [continentData, setContinentData] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const fetchContinentData = async () => {
    const response = await fetch(
      `https://geo-meta-rest-api.vercel.app/api/continents/${continentId}`,
      { mode: "cors" }
    );
    const data = await response.json();
    const dataMod = data.data.map((obj) => {
      return { country: obj.country, img: obj.img.replace("svg", "webp") };
    });
    setContinentData(dataMod);
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
            <CountryIconBox
              image={images[item.item.img]}
              country={item.item.country}
              onPress={() =>
                navigation.navigate("Country", {
                  header: item.item.country,
                })
              }
            />
          );
          // <Text style={{ color: "black" }}>{item.item.country}</Text>;
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
  continentHeader: {
    fontSize: 16,
    textShadowColor: "red",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 2,
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
