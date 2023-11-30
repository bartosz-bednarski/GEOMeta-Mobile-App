import { Pressable, Image, StyleSheet } from "react-native";

const Answer = ({ answer, id, onPress }) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });

    return images;
  }
  let emblems;
  emblems = importAll(
    require.context(
      "../../assets/country/emblems",
      false,
      /\.(webp|jpe?g|png)$/
    )
  );
  let flags;
  flags = importAll(
    require.context("../../assets/country/flags", false, /\.(webp|jpe?g|png)$/)
  );
  let plates;
  plates = importAll(
    require.context("../../assets/country/plates", false, /\.(webp|jpe?g|png)$/)
  );
  return (
    <Pressable style={styles.tileContainer} onPress={onPress}>
      <Image style={styles.flagImg} source={flags[answer]} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  tileContainer: {
    backgroundColor: "transparent",
    width: "auto",
    height: "auto",
    flexGrow: 2,
  },
  flagImg: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
});
export default Answer;
