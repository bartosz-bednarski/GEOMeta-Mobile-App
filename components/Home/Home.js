import { View, StyleSheet, FlatList } from "react-native";
import Welcome from "./Welcome";
import { data } from "../../util/home-data";
import AboutItem from "./AboutItem";
const Home = () => {
  const renderAboutItem = (data) => {
    return <AboutItem styles={styles} data={data.item} />;
  };
  return (
    <View style={styles.scrollContainer}>
      <FlatList
        data={data}
        renderItem={renderAboutItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Welcome styles={styles} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingHorizontal: 30,
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
