import { Pressable, Text, StyleSheet, View } from "react-native";
import TopicRecentAnswers from "./TopicRecentAnswers";
const TopicMenu = ({ id, comments, commentsSum, time }) => {
  return (
    <Pressable style={styles.topicMenuContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.userNameIcon}>BB</Text>

        <Text style={styles.headerText}>Bartosz</Text>
      </View>
      <Text style={styles.topicText}>
        Które regiony geograficzne w GeoGuessr uważacie za najtrudniejsze, a
        które za najłatwiejsze? Dlaczego?
      </Text>
      <TopicRecentAnswers comments={comments} commentsSum={commentsSum} />
      <Text style={styles.time}>{time}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  topicMenuContainer: {
    paddingBottom: 40,
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 50,
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#9264C6",
    height: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
    marginBottom: 5,
  },
  userNameIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
  headerText: {
    fontSize: 14,
    color: "#E8D7FC",
  },
  topicText: {
    fontSize: 14,
    color: "white",
    backgroundColor: "#9264C6",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  time: {
    width: "100%",
    color: "#E8D7FC",
    textAlign: "right",
    fontSize: 10,
    marginVertical: 5,
    paddingRight: 10,
  },
});
export default TopicMenu;
