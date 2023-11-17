import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/Auth/AuthScreen";
import RegisterScreen from "../screens/Auth/Register";
import HeaderIcon from "../ui/HeaderIcon";
const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7B41BB",
        },
      }}
    >
      <Stack.Screen
        name="Authorization"
        component={AuthScreen}
        options={{
          headerRight: () => {
            return <HeaderIcon />;
          },
          headerTintColor: "transparent",
        }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
