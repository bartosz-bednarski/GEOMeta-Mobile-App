import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForumMenuScreen from "../screens/Forum/ForumMenuScreen";
import HeaderIcon from "../ui/HeaderIcon";
import AddNewTopicScreen from "../screens/Forum/AddNewTopicScreen";
import TopicComments from "../screens/Forum/TopicComments";
const ForumNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7B41BB",
        },
        headerTintColor: "white",
        headerRight: () => {
          return <HeaderIcon navType="stack" />;
        },
      }}
    >
      <Stack.Screen
        component={ForumMenuScreen}
        name="ForumMenu"
        options={{
          headerTitle: "Forum",
        }}
      />
      <Stack.Screen
        component={AddNewTopicScreen}
        name="AddNewTopic"
        options={{
          headerTitle: "Dodaj nowy temat",
        }}
      />
      <Stack.Screen
        component={TopicComments}
        name="TopicComments"
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default ForumNavigator;
