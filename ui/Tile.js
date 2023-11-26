import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Tile = ({ onPress, icon, header, color, content, image, id }) => {
  return (
    <View style={styles.tileContainer}>
      <Pressable
        style={({ pressed }) =>
          !pressed ? styles.tileBox : [styles.tileBox, styles.tileBoxPressed]
        }
        id={id}
        onPress={onPress}
      >
        {content === "icon" && (
          <Ionicons name={icon} color={color} size={100} />
        )}
        {content === "image" && <Image style={[styles.image]} source={image} />}
      </Pressable>
      <Text style={styles.header}>{header}</Text>
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
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 10,
  },
  image: {
    width: 140,
    height: 140,
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
