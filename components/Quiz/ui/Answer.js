import { Pressable, Image, StyleSheet } from "react-native";
import { verticalScale } from "../../../util/Dimensions";

const Answer = ({ answer, id, onPress, quizType }) => {
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
      "../../../assets/country/emblems",
      false,
      /\.(webp|jpe?g|png)$/
    )
  );
  let flags;
  flags = importAll(
    require.context(
      "../../../assets/country/flags",
      false,
      /\.(webp|jpe?g|png)$/
    )
  );
  let plates;
  plates = importAll(
    require.context(
      "../../../assets/country/plates",
      false,
      /\.(webp|jpe?g|png)$/
    )
  );
  let images;
  let imageStyles;
  switch (quizType) {
    case "Flags":
      images = flags;
      imageStyles = styles.flagImg;
      break;
    case "Emblems":
      images = emblems;
      imageStyles = styles.emblemImg;
      break;
    case "Plates":
      images = plates;
      imageStyles = styles.flagImg;
      break;
    default:
      images = flags;
      break;
  }
  return (
    <Pressable style={styles.tileContainer} onPress={onPress}>
      <Image style={imageStyles} source={images[answer]} />
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
    width: verticalScale(160),
    height: verticalScale(100),
    borderRadius: 10,
    resizeMode: "contain",
  },
  emblemImg: {
    width: verticalScale(160),
    height: verticalScale(160),
    borderRadius: 10,
    resizeMode: "contain",
  },
});
export default Answer;
