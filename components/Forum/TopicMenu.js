import { Pressable, Text, StyleSheet, View } from "react-native";
import TopicRecentAnswers from "./TopicRecentAnswers";
const TopicMenu = ({
  id,
  comments,
  commentsSum,
  time,
  navigation,
  topic,
  author,
}) => {
  const topicOnPressHandler = () => {
    navigation.navigate("TopicComments", {
      id: id,
      topic: topic,
      author: author,
    });
  };
  return (
    <Pressable style={styles.topicMenuContainer} onPress={topicOnPressHandler}>
      <View style={styles.headerContainer}>
        <Text
          style={[
            styles.userNameIcon,
            { backgroundColor: author.iconBackgroundColor },
          ]}
        >
          {author.usernameShort}
        </Text>

        <Text style={styles.headerText}>{author.username}</Text>
      </View>
      <Text style={styles.topicText}>{topic}</Text>
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
    paddingBottom: 0,
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
