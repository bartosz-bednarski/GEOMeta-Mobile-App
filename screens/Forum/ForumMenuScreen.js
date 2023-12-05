import { Text, View, StyleSheet, ScrollView } from "react-native";
import AddTopicMenu from "../../components/Forum/AddTopicMenu";
import TopicMenu from "../../components/Forum/TopicMenu";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoaderOverlay from "../../ui/LoaderOverlay";

const ForumMenuScreen = ({ route, navigation }) => {
  const accessToken = useSelector((state) => state.authorization.accessToken);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedTopics, setFetchedTopics] = useState("");
  const getTopics = async () => {
    setIsFetching(true);
    const response = await fetch(
      "https://geo-meta-rest-api.vercel.app/api/forum/getTopics",
      // "http://localhost:9001/api/forum/getTopics",
      {
        method: "GET",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    setFetchedTopics(data.data);
    setIsFetching(false);
  };
  useEffect(() => {
    getTopics();
  }, []);
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <ScrollView>
      <View style={styles.forumContainer}>
        <AddTopicMenu navigation={navigation} />

        {fetchedTopics != "" &&
          fetchedTopics.map((topic) => {
            return (
              <TopicMenu
                id={topic.topic_id}
                key={topic._id}
                topic={topic.topic}
                comments={topic.comments
                  .slice(topic.comments.length - 3)
                  .reverse()}
                commentsSum={topic.comments.length}
                time={
                  topic.comments[topic.comments.length - 1].date +
                  " " +
                  topic.comments[topic.comments.length - 1].time
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
export default ForumMenuScreen;
