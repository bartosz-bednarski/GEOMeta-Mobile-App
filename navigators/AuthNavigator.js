import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/Auth/AuthScreen";
import RegisterScreen from "../screens/Auth/Register";
import HeaderIcon from "../ui/HeaderIcon";
import LoginScreen from "../screens/Auth/Login";
const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7B41BB",
        },

        headerRight: () => {
          return <HeaderIcon navType="stack" />;
        },
      }}
    >
      <Stack.Screen
        name="Authorization"
        component={AuthScreen}
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: "Zaloguj się",
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitle: "Utwórz konto",
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
