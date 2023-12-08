import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import debounce from "debounce";
import { verticalScale } from "../util/Dimensions";
const { height } = Dimensions.get("window");
const Tile = ({ onPress, icon, header, color, content, image, id }) => {
  return (
    <View style={styles.tileContainer}>
      <Pressable
        style={({ pressed }) =>
          !pressed ? styles.tileBox : [styles.tileBox, styles.tileBoxPressed]
        }
        id={id}
        onPress={debounce(onPress, 300)}
      >
        {content === "icon" && (
          <Ionicons name={icon} color={color} size={100} />
        )}
        {content === "image" && <Image style={styles.image} source={image} />}
      </Pressable>
      <Text style={[styles.header, { fontSize: height < 780 ? 10 : 14 }]}>
        {header}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: "column",
    margin: 10,
  },
  tileBox: {
    backgroundColor: "#7B41BB",
    width: verticalScale(160),
    height: verticalScale(160),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 10,
  },
  image: {
    width: verticalScale(160),
    height: verticalScale(160),
    resizeMode: "contain",
  },
  tileBoxPressed: {
    opacity: 0.5,
  },
  header: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
    color: "white",
  },
});
export default Tile;
