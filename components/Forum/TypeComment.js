import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";
import { useState, useLayoutEffect } from "react";
import UsernameIcon from "../../ui/UsernameIcon";
import { Ionicons } from "@expo/vector-icons";
const TypeComment = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
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
  // const usernameShort = useSelector(state=>state.authorization.usernameShort)
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
      <TextInput style={styles.textInput} placeholder="Aa" />
      <Pressable style={styles.postIconBox}>
        <Ionicons name="send-outline" color="#E8D7FC" size={24} />
      </Pressable>
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
