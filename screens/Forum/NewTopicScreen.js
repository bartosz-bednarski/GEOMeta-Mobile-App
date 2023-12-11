import { View, StyleSheet, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import LoaderOverlay from "../../ui/LoaderOverlay";
import { createTopic } from "../../components/Forum/forumHelper";
import { updateData } from "../../redux/forum-reducer";

const NewTopicScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const submitHandler = async () => {
    if (textInput.length > 6 && accessToken) {
      dispatch(updateData());
      setIsFetching(true);
      await createTopic(
        accessToken,
        usernameShort,
        textInput,
        iconBackgroundColor
      );
      setIsFetching(false);
      setTextInput("");
      navigation.navigate("ForumMenu");
    }
  };
  const iconBackgroundColor = useSelector(
    (state) => state.authorization.iconBackgroundColor
  );
  const usernameShort = useSelector(
    (state) => state.authorization.usernameShort
  );
  const accessToken = useSelector((state) => state.authorization.accessToken);
  const [textInput, setTextInput] = useState("");
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    if (textInput.length > 6) {
      setAllowSubmit(true);
    }
    if (textInput.length <= 6) {
      setAllowSubmit(false);
    }
  }, [textInput]);
  if (isFetching) {
    return <LoaderOverlay />;
  }
  return (
    <View style={styles.addNewTopicContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Dodaj treść tematu ..."
        placeholderTextColor="#E8D7FC"
        cursorColor="white"
        onChangeText={(text) => setTextInput(text)}
        value={textInput}
        autoFocus={true}
      />

      <Button
        title="Opublikuj"
        color="purple"
        disabled={!allowSubmit}
        onPress={submitHandler}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  addNewTopicContainer: {
    backgroundColor: "#7131B7",
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  textInput: {
    flex: 3,
    width: "100%",
    backgroundColor: "#9264C6",
    paddingHorizontal: 20,
    color: "white",
  },
});
export default NewTopicScreen;
