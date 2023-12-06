import { Text, Pressable, StyleSheet } from "react-native";
import UsernameIcon from "../../ui/UsernameIcon";
const AddTopic = ({ navigation }) => {
  return (
    <Pressable
      style={styles.addTopicContainer}
      onPress={() => navigation.navigate("AddNewTopic")}
    >
      <UsernameIcon size="sm" />
      <Text style={styles.text}>Dodaj nowy temat</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addTopicContainer: {
    height: 50,
    backgroundColor: "#9264C6",
    flexDirection: "row",
    width: "100%",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  text: {
    color: "#E8D7FC",
    fontSize: 16,
  },
});
export default AddTopic;
