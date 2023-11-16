import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import ContinentsHeader from "../../ui/svg/ContinentsHeader";
import QuizHeader from "../../ui/svg/QuizHeader";
import ForumHeader from "../../ui/svg/ForumHeader";
const Forum = ({ styles }) => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <ForumHeader />
        <Text style={styles.text}>
          Nasze forum to miejsce, gdzie pasjonaci i eksperci mogą ze sobą
          dzielić swoją wiedzą, doświadczeniem i pasją.
        </Text>
        <Image
          source={require("../../assets/forum.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          To platforma, która stwarza możliwość nawiązywania wartościowych
          interakcji, gdzie użytkownicy wspierają się nawzajem, odpowiadając na
          pytania i udzielając cennych wskazówek.
        </Text>
      </View>
    </View>
  );
};
export default Forum;
