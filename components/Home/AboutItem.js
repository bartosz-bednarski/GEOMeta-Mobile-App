import { View, Text, Image } from "react-native";
const AboutItem = ({ styles, data }) => {
  const img = data.img === null ? "" : data.img;
  return (
    <View>
      <View style={styles.iconContainer}>
        {data.header}
        <Text style={styles.text}>{data.text1}</Text>
        <Image source={img} style={styles.image} />
        <Text style={styles.text}>{data.text2}</Text>
      </View>
    </View>
  );
};
export default AboutItem;
