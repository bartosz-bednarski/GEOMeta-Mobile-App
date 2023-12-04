import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizMenuScreen from "../screens/Quiz/QuizMenuScreen";
import QuizScreen from "../screens/Quiz/QuizScreen";
import HeaderIcon from "../ui/HeaderIcon";
const QuizNavigator = () => {
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
        name="QuizMenu"
        component={QuizMenuScreen}
        options={{
          headerTitle: "Quiz",
        }}
      />
      <Stack.Screen
        name="QuizType"
        component={QuizScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};
export default QuizNavigator;
