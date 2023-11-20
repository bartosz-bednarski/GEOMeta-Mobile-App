import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Tile = ({ onPress, icon, header, color }) => {
  return (
    <View style={styles.tileContainer}>
      <Pressable
        style={({ pressed }) =>
          !pressed ? styles.tileBox : [styles.tileBox, styles.tileBoxPressed]
        }
        onPress={onPress}
      >
        <Ionicons name={icon} color={color} size={100} />
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
    backgroundColor: "#9264C6",
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
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
