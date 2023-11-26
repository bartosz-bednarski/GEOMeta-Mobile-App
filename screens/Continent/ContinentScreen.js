import { useLayoutEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import LoaderOverlay from "../../ui/LoaderOverlay";
const ContinentScreen = ({ navigation, route }) => {
  const continentId = route.params.continentId;
  const [continentData, setContinentData] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const fetchContinentData = async () => {
    const response = await fetch(
      `https://geo-meta-rest-api.vercel.app/api/continents/${continentId}`,
      { mode: "cors" }
    );
    const data = await response.json();
    setContinentData(data.data);
    setIsFetching(false);
  };
  useLayoutEffect(() => {
    fetchContinentData();
  }, []);
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.continentContainer}>
      <FlatList
        data={continentData}
        keyExtractor={(item) => item.country}
        renderItem={(item) => {
          return <Text style={{ color: "black" }}>{item.item.country}</Text>;
        }}
      />
      <Text>Continent screen {continentId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  continentContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
export default ContinentScreen;
