import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const RecentAnswers = ({ comments, commentsSum }) => {
  return (
    <View style={styles.recentAnswersContainer}>
      <View style={styles.recentAnswersBox}>
        {comments.map((comment, index) => {
          let style = styles[`icon${index}`];
          return (
            <Text
              style={[
                styles.recentAnswerIcon,
                style,
                { backgroundColor: comment.iconBackgroundColor },
              ]}
              key={index}
            >
              {comment.usernameShort === "anonymous" ? (
                <Ionicons name="eye-outline" size={15} color="white" />
              ) : (
                comment.usernameShort
              )}
            </Text>
          );
        })}
      </View>
      {commentsSum > 0 && (
        <Text style={styles.plusText}>+{commentsSum - 3}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  recentAnswersContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: "#9264C6",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  recentAnswersBox: {
    position: "relative",
    width: 90,
    height: 30,
  },
  recentAnswerIcon: {
    position: "absolute",
    top: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
  icon0: {
    left: 0,
    zIndex: 3,
  },
  icon1: {
    left: 25,
    backgroundColor: "blue",
    zIndex: 2,
  },
  icon2: {
    left: 50,
    backgroundColor: "green",
    zIndex: 1,
  },
  plusText: {
    color: "#E8D7FC",
    fontSize: 16,
  },
});
export default RecentAnswers;
