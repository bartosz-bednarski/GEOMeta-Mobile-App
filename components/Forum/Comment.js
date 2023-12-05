import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Comment = ({ date, author, content, comment_id }) => {
  return (
    <View style={styles.commentContainer} id={comment_id}>
      <View style={styles.commentBox}>
        <Text
          style={[
            styles.userNameIcon,
            { backgroundColor: author.iconBackgroundColor },
          ]}
        >
          {author.usernameShort === "anonymous" ? (
            <Ionicons name="eye-outline" size={15} color="white" />
          ) : (
            author.usernameShort
          )}
        </Text>
        <Text style={styles.commentText}>{content}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  commentContainer: {
    width: "100%",
    height: "auto",
    marginVertical: 10,
  },
  commentBox: {
    width: "100%",
    flexDirection: "row",
    height: "auto",
    gap: 10,
    marginBottom: 5,
    alignItems: "center",
    marginleft: 5,
    marginRight: 20,
  },
  userNameIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "red",
    color: "white",
  },
  commentText: {
    width: "90%",
    fontSize: 14,
    height: "auto",
    color: "#7131B7",
    paddingHorizontal: 10,
    backgroundColor: "#E8D7FC",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  date: {
    width: "100%",
    textAlign: "right",
    color: "#E8D7FC",
    fontSize: 10,
  },
});
export default Comment;
