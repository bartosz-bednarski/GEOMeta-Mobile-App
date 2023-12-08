import { Pressable, Image, Text, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../util/Dimensions";
const CountryIcon = ({ onPress, countryIcon, countryName }) => {
  return (
    <Pressable style={styles.countryBox} onPress={onPress}>
      <Image style={styles.image} source={countryIcon} />
      <Text style={styles.text}>{countryName}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  countryBox: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: verticalScale(75),
    height: verticalScale(110),
    marginHorizontal: 2,
  },

  text: {
    textAlign: "center",
    color: "white",
    fontSize: 10,
  },
  image: {
    width: verticalScale(60),
    height: verticalScale(60),
    resizeMode: "contain",
  },
});
export default CountryIcon;
