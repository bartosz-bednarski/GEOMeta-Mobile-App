import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import icon from "../assets/GEOMeta.svg";
import GeoMetaIconS from "./svg/GeoMetaIconS";

const HeaderIcon = ({ navType }) => {
  return (
    <View style={navType === "stack" ? styles.stackImgBox : styles.imgBox}>
      <View style={styles.imgBox}>
        <GeoMetaIconS />
      </View>

      {/* <Text style={styles.text}>123434</Text> */}
    </View>
  );
};
export default HeaderIcon;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgBox: {
    marginLeft: "auto",
    marginRight: 16,
  },
  stackImgBox: {
    marginLeft: "auto",
    marginRight: 0,
  },
  //   img: {
  //     width: 100,
  //     height: 30,
  //   },
  //   text: {
  //     color: "white",
  //     fontSize: 16,
  //     textShadowRadius: 1,
  //     textShadowColor: "#921717",
  //     textShadowOffset: { width: 2, height: 4 },
  //   },
});
