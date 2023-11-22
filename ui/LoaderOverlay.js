import { View, StyleSheet, Animated, Easing, Text } from "react-native";
import AirPlane from "./svg/AirPlane";
import EarthImage from "./svg/EarthImage";
const LoaderOverlay = () => {
  spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={styles.spinnerContainer}>
      <View style={styles.spinnerBox}>
        <Animated.View
          style={[styles.spinner, { transform: [{ rotate: spin }] }]}
        >
          <AirPlane style={styles.plane} />
        </Animated.View>
        <EarthImage style={styles.earthImage} />
      </View>
      <Text style={styles.text}>Ładowanie...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    backgroundColor: "#7131B7",
    alignItems: "center",
    justifyContent: "center",
  },
  spinnerBox: {
    position: "relative",
  },
  spinner: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 220,
    height: 220,
    borderRadius: 110,
    borderRightWidth: 5,
    borderRightColor: "#0866ff",
  },
  plane: {
    position: "absolute",
    width: 30,
    height: 30,
    zIndex: 10,
    bottom: -15,
    transform: [{ rotate: "180deg" }],
  },
  earthImage: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 180,
    height: 180,
  },
  text: {
    marginTop: 40,
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
});
export default LoaderOverlay;
