import { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Keyboard } from "react-native";
import TopicHeader from "../../components/Forum/TopicHeader";
import Comment from "../../components/Forum/Comment";
import LoaderOverlay from "../../ui/LoaderOverlay";
import TypeComment from "../../components/Forum/TypeComment";
const TopicComments = ({ navigation, route }) => {
  const topic = route.params.topic;
  const topicAuthor = route.params.author;
  const topicId = route.params.id;
  const getComments = async (topicId) => {
    setIsFetching(true);
    const response = await fetch(
      `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/getComments`,
      { mode: "cors" }
    );
    const data = await response.json();
    setCommentsFetched(data.data);
    setIsFetching(false);
  };
  const [commentsFetched, setCommentsFetched] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    getComments(topicId);
  }, []);
  useLayoutEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.commentsContainer}>
      <ScrollView
        style={[
          styles.scrollView,
          { height: isKeyboardVisible ? "82%" : "88.5%" },
        ]}
      >
        <View style={styles.commentsBox}>
          <TopicHeader topic={topic} topicAuthor={topicAuthor} />
          {commentsFetched !== "" &&
            commentsFetched.map((comment) => (
              <Comment
                content={comment.content}
                date={comment.dateString + " " + comment.timeString}
                author={{
                  username: comment.username,
                  usernameShort: comment.usernameShort,
                  iconBackgroundColor: comment.iconBackgroundColor,
                }}
                comment_id={comment.comment_id}
                key={comment.comment_id}
              />
            ))}
        </View>
      </ScrollView>
      <TypeComment topicId={topicId} />
    </View>
  );
};
const styles = StyleSheet.create({
  commentsContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  scrollView: {
    height: "88.5%",
    paddingHorizontal: 10,
    marginTop: "5%",
    marginBottom: "1%",
  },
});
export default TopicComments;
