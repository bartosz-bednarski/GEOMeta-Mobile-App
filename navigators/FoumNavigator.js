import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForumScreen from "../screens/Forum/ForumScreen";
import HeaderIcon from "../ui/HeaderIcon";
import NewTopicScreen from "../screens/Forum/NewTopicScreen";
import TopicScreen from "../screens/Forum/TopicScreen";
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
        component={ForumScreen}
        name="ForumMenu"
        options={{
          headerTitle: "Forum",
        }}
      />
      <Stack.Screen
        component={NewTopicScreen}
        name="AddNewTopic"
        options={{
          headerTitle: "Dodaj nowy temat",
        }}
      />
      <Stack.Screen
        component={TopicScreen}
        name="TopicComments"
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default ForumNavigator;
