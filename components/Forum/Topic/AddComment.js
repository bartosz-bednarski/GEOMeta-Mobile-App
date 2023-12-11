import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import { useState, useLayoutEffect } from "react";
import UsernameIcon from "../../../ui/UsernameIcon";
import { Ionicons } from "@expo/vector-icons";
import { sendComment } from "../forumHelper";
const AddComment = ({ topicId, onCommentSent, isFetching }) => {
  const usernameShort = useSelector(
    (state) => state.authorization.usernameShort
  );
  const iconBackgroundColor = useSelector(
    (state) => state.authorization.iconBackgroundColor
  );
  const accessToken = useSelector((state) => state.authorization.accessToken);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [commentTextInput, setCommentTextInput] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const sendCommentHandler = async () => {
    if (commentTextInput !== "") {
      setShowSpinner(true);
      Keyboard.dismiss();
      const newComment = {
        topic_id: topicId,
        usernameShort: usernameShort,
        iconBackgroundColor: iconBackgroundColor,
        content: commentTextInput,
      };

      await sendComment(accessToken, topicId, newComment);
      setCommentTextInput("");
      setShowSpinner(false);
      onCommentSent();
    }
  };

  useLayoutEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View
      style={[styles.addCommentContainer, { flex: isKeyboardVisible ? 2 : 1 }]}
    >
      <View style={styles.iconBox}>
        <UsernameIcon size="sm" />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Aa"
        value={commentTextInput}
        onChangeText={(text) => setCommentTextInput(text)}
      />
      {showSpinner && (
        <View style={styles.postIconBox}>
          <ActivityIndicator size="small" />
        </View>
      )}
      {!isFetching ? (
        <Pressable style={styles.postIconBox} onPress={sendCommentHandler}>
          <Ionicons name="send-outline" color="#E8D7FC" size={24} />
        </Pressable>
      ) : (
        <View style={styles.postIconBox}>
          <ActivityIndicator size="small" />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  addCommentContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#340867",
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  iconBox: {
    width: "10%",
  },
  textInput: {
    height: "70%",
    backgroundColor: "#9264C6",
    width: "80%",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: "white",
  },
  postIconBox: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddComment;
