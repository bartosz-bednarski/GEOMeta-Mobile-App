import { View, Text, StyleSheet, TextInput } from "react-native";
import UsernameIcon from "../../ui/UsernameIcon";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import LoaderOverlay from "../../ui/LoaderOverlay";
import { createTopic } from "../../components/Forum/forumHelper";
import { updateData } from "../../redux/forum-reducer";

const Month = [
  "Sty",
  "Lut",
  "Mar",
  "Kwi",
  "Maj",
  "Cze",
  "Lip",
  "Sie",
  "Wrz",
  "Paź",
  "Lis",
  "Gru",
];

const NewTopicScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  let date = new Date();
  let day = new String(date.getDate());
  day = day.length === 1 ? `0${day}` : day;
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
  const username = useSelector((state) => state.authorization.username);
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
      <View style={styles.headerBox}>
        <UsernameIcon size="md" />
        <View>
          <Text style={styles.headerText}>{username}</Text>
          <Text style={styles.headerText}>{`${day} ${
            Month[date.getMonth()]
          } ${date.getFullYear()}`}</Text>
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Dodaj treść tematu ..."
        placeholderTextColor="#E8D7FC"
        cursorColor="white"
        onChangeText={(text) => setTextInput(text)}
        value={textInput}
      />
      <View style={styles.submitBox}>
        <Button
          title="Opublikuj"
          color="purple"
          disabled={!allowSubmit}
          onPress={submitHandler}
        />
      </View>
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
  headerBox: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#9264C6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 16,
    color: "#E8D7FC",
  },
  textInput: {
    flex: 3,
    width: "100%",
    backgroundColor: "#9264C6",
    paddingHorizontal: 20,
    color: "white",
  },
  submitBox: {
    flex: 3,
    marginTop: 5,
    backgroundColor: "#9264C6",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default NewTopicScreen;
