import { View, StyleSheet } from "react-native";
import { default as QuizIcon } from "../../ui/Tile";
const QuizScreen = ({ navigation }) => {
  return (
    <View style={styles.continentsContainer}>
      <View style={styles.rowContainer}>
        <QuizIcon
          content="image"
          image={require("../../assets/country/flags/greatBritain.webp")}
          header="Flagi"
          id="flags"
          onPress={() =>
            navigation.navigate("QuizType", {
              quizType: "Flags",
            })
          }
        />
        <QuizIcon
          content="image"
          image={require("../../assets/country/emblems/greatBritain.webp")}
          header="Herby"
          id="emblems"
          onPress={() => {
            navigation.navigate("QuizType", {
              quizType: "Emblems",
            });
          }}
        />
      </View>
      <View style={styles.rowContainer}>
        <QuizIcon
          content="image"
          image={require("../../assets/country/plates/bolivia.jpg")}
          header="Rejestracje"
          id="plates"
          onPress={() =>
            navigation.navigate("QuizType", {
              quizType: "Plates",
            })
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  continentsContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tileContainer: {
    backgroundColor: "#9264C6",
    width: 150,
    height: 150,
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
  },
});
export default QuizScreen;
