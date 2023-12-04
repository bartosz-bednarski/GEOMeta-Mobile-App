import { Text, View, StyleSheet } from "react-native";
import AddTopicMenu from "../../components/Forum/AddTopicMenu";

const ForumMenuScreen = ({ route, navigation }) => {
  return (
    <View style={styles.forumContainer}>
      <AddTopicMenu navigation={navigation} />
      <Text>Forum kurde</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  forumContainer: {
    backgroundColor: "#7131B7",
    paddingBottom: 40,
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 50,
  },
});
export default ForumMenuScreen;
