import { View, Text, StyleSheet } from "react-native";
const TopicHeader = ({ topicAuthor, topic }) => {
  return (
    <View style={styles.topicHeader}>
      <Text
        style={[
          styles.userNameIcon,
          { backgroundColor: topicAuthor.iconBackgroundColor },
        ]}
      >
        {topicAuthor.usernameShort}
      </Text>
      <Text style={styles.topicText}>{topic}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  topicHeader: {
    width: "100%",
    backgroundColor: "#340867",
    flexDirection: "row",
    height: "auto",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
    marginBottom: 5,
    alignItems: "center",
  },
  userNameIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
  topicText: {
    fontSize: 14,
    color: "white",
    paddingHorizontal: 10,
    width: "80%",
  },
});
export default TopicHeader;
