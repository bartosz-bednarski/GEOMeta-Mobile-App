import { View, Image, StyleSheet, Text } from "react-native";
import lowTemperature from "../../assets/country/cold-temperature.webp";
import mediumTemperature from "../../assets/country/medium-temperature.png";
import highTemperature from "../../assets/country/fever.webp";
import rightHand from "../../assets/country/hand-right-outline.webp";
import leftHand from "../../assets/country/hand-left-outline.webp";
const TileBox = ({ temperature, movement, emblem, type }) => {
  let temperatureImg;
  let movementImg;
  switch (temperature) {
    case "low":
      temperatureImg = lowTemperature;
      break;
    case "medium":
      temperatureImg = mediumTemperature;
      break;
    case "high":
      temperatureImg = highTemperature;
      break;
    default:
      temperatureImg = mediumTemperature;
      break;
  }
  switch (movement) {
    case "leftHand":
      movementImg = leftHand;
      break;
    case "rightHand":
      movementImg = rightHand;
      break;
    default:
      movementImg = rightHand;
  }
  console.log(temperature);
  return (
    <View style={styles.tileBox}>
      {type === "emblem" && (
        <>
          <Image source={emblem} style={styles.image} />
          <Text style={styles.label}>Godło</Text>
        </>
      )}
      {type === "temperature" && (
        <>
          <Image source={temperatureImg} style={styles.image} />
          <Text style={styles.label}>Temperatura</Text>
        </>
      )}
      {type === "movement" && (
        <>
          <Image source={movementImg} style={styles.image} />
          <Text style={styles.label}>Ruch drogowy</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tileBox: {
    width: 120,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  label: {
    width: "100%",
    color: "#CAAFE8",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "600",
    fontSize: 14,
  },
});
export default TileBox;