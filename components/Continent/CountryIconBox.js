import { Pressable, Image, Text, StyleSheet } from "react-native";
const CountryIconBox = ({ onPress, image, country }) => {
  return (
    <Pressable style={styles.countryBox} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{country}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  countryBox: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 75,
    height: 110,
    marginHorizontal: 5,
  },

  text: {
    textAlign: "center",
    color: "white",
    fontSize: 12,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});
export default CountryIconBox;
