import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { moderateScale, verticalScale } from "../../util/Dimensions";
const { height } = Dimensions.get("window");
const AboutItem = ({ data }) => {
  const img = data.img === null ? "" : data.img;
  return (
    <View style={[styles.iconContainer]}>
      {data.header}
      <Text style={styles.text}>{data.text1}</Text>
      <Image
        source={img}
        style={[
          styles.image,
          { width: height < 700 ? 180 : 240, height: height < 700 ? 180 : 240 },
        ]}
      />
      <Text style={styles.text}>{data.text2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    marginVertical: verticalScale(30),
  },
  text: {
    color: "white",
    fontSize: moderateScale(16),
    marginVertical: verticalScale(20),
    textAlign: "center",
    fontWeight: "500",
  },
  image: {
    marginVertical: verticalScale(40),
    width: moderateScale(240),
    height: moderateScale(240),
  },
});
export default AboutItem;
