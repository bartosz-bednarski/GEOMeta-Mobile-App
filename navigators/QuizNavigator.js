import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizTypesScreen from "../screens/Quiz/QuizTypesScreen";
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
        name="QuizTypes"
        component={QuizTypesScreen}
        options={{
          headerTitle: "",
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
