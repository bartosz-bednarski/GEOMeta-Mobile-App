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
import UsernameIcon from "../../ui/UsernameIcon";
import { Ionicons } from "@expo/vector-icons";
const TypeComment = ({ topicId, onCommentSent, isFetching }) => {
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
    const url = accessToken
      ? `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/createComment/authorized`
      : `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/createComment/unauthorized`;
    if (commentTextInput !== "") {
      setShowSpinner(true);
      setCommentTextInput("");
      Keyboard.dismiss();
      const response = await fetch(url, {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          topic_id: topicId,
          usernameShort: usernameShort,
          iconBackgroundColor: iconBackgroundColor,
          content: commentTextInput,
        }),
      });
      const data = await response.json();
      setShowSpinner(false);
      onCommentSent();
    }
  };
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
  return (
    <View
      style={[
        styles.typeCommentContainer,
        { height: isKeyboardVisible ? "12%" : "8%" },
      ]}
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
  typeCommentContainer: {
    height: "8%",
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
export default TypeComment;
