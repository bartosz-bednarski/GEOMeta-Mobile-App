import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import ContinentsHeader from "../../ui/svg/ContinentsHeader";
import QuizHeader from "../../ui/svg/QuizHeader";
const Quiz = ({ styles }) => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <QuizHeader />
        <Text style={styles.text}>
          Zapraszamy do rozpoczęcia przygody z naszymi quizami, gdzie możesz
          stawić czoła wyzwaniom związanymi krajami.
        </Text>
        <Image
          source={require("../../assets/quizIcon.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          Wybierz kategorię, którą chcesz zgłębić, i pokaż, jak dobrze znasz
          świat! Czy jesteś gotowy na to wyzwanie?
        </Text>
      </View>
    </View>
  );
};
export default Quiz;
