import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { data } from "../util/home-data";
import AboutItem from "../components/Home/AboutItem";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../util/Dimensions";
const HomeScreen = () => {
  const renderAboutItem = (data) => {
    return <AboutItem styles={styles} data={data.item} />;
  };
  return (
    <View style={styles.scrollContainer}>
      <FlatList
        data={data}
        renderItem={renderAboutItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(30),
    flex: 1,
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  text: {
    color: "white",
    fontSize: moderateScale(16),
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
export default HomeScreen;
