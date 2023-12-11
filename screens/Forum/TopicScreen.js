import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { View, ScrollView, StyleSheet, Keyboard } from "react-native";
import TopicHeader from "../../components/Forum/Topic/TopicHeader";
import Comment from "../../components/Forum/Topic/Comment";
import LoaderOverlay from "../../ui/LoaderOverlay";
import AddComment from "../../components/Forum/Topic/AddComment";
import { useDispatch } from "react-redux";
import { updateData } from "../../redux/forum-reducer";
const TopicScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const scrollView = useRef(null);
  const topic = route.params.topic;
  const topicAuthor = route.params.author;
  const topicId = route.params.id;
  const getComments = async (topicId) => {
    firstLoad ? setShowLoader(true) : setShowLoader(false);
    setIsFetching(true);
    const response = await fetch(
      `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/getComments`,
      { mode: "cors" }
    );
    const data = await response.json();
    setCommentsFetched(data.data);
    setIsFetching(false);
    setFirstLoad(false);
    setCommentSent(false);
    setShowLoader(false);
    dispatch(updateData());
  };
  const [commentsFetched, setCommentsFetched] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [commentSent, setCommentSent] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    getComments(topicId);
  }, [commentSent]);
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
  if (showLoader) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.commentsContainer}>
      <View style={styles.scrollViewBox}>
        <ScrollView
          ref={scrollView}
          onContentSizeChange={() =>
            scrollView.current.scrollToEnd({ animated: true })
          }
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
      </View>
      <AddComment
        topicId={topicId}
        onCommentSent={() => {
          setCommentSent(true);
          setIsFetching(true);
        }}
        isFetching={isFetching}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  commentsContainer: {
    flex: 1,
    backgroundColor: "#7131B7",
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  scrollViewBox: {
    flex: 9,
  },
  scrollView: {
    paddingHorizontal: 10,
    marginTop: "5%",
    marginBottom: "1%",
  },
});
export default TopicScreen;
