import { View, StyleSheet, ScrollView } from "react-native";
import AddTopic from "../../components/Forum/AddTopic";
import Topic from "../../components/Forum/Topic";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderOverlay from "../../ui/LoaderOverlay";
import { dataUpdated } from "../../redux/forum-reducer";
import { getTopics } from "../../components/Forum/forumHelper";

const ForumScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.authorization.accessToken);
  const forumUpdate = useSelector((state) => state.forum.update);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedTopics, setFetchedTopics] = useState("");

  const getTopicsHandler = async (accessToken) => {
    setIsFetching(true);
    setFetchedTopics(await getTopics(accessToken));
    setIsFetching(false);
    dispatch(dataUpdated());
  };

  useEffect(() => {
    getTopicsHandler(accessToken);
  }, [forumUpdate]);
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <ScrollView>
      <View style={styles.forumContainer}>
        {accessToken !== "" && <AddTopic navigation={navigation} />}

        {fetchedTopics != "" &&
          fetchedTopics.map((topic) => {
            return (
              <Topic
                id={topic.topic_id}
                key={topic._id}
                topic={topic.topic}
                comments={topic.comments
                  .slice(topic.comments.length - 3)
                  .reverse()}
                commentsSum={
                  topic.comments.length > 0 ? topic.comments.length : 0
                }
                time={
                  topic.comments.length > 0
                    ? topic.comments[topic.comments.length - 1].date +
                      " " +
                      topic.comments[topic.comments.length - 1].time
                    : topic.latestUpdate
                }
                author={{
                  username: topic.username,
                  usernameShort: topic.usernameShort,
                  iconBackgroundColor: topic.iconBackgroundColor,
                }}
                navigation={navigation}
              />
            );
          })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  forumContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
});
export default ForumScreen;
