import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderIcon from "../ui/HeaderIcon";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import PersonalScreen from "../screens/Profile/PersonalScreen";
import PasswordScreen from "../screens/Profile/PasswordScreen";
import AchievementsScreen from "../screens/Profile/AchievementsScreen";
const ProfileNavigator = () => {
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
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Personal"
        component={PersonalScreen}
        options={{
          headerTitle: "Użytkownik",
        }}
      />
      <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{
          headerTitle: "Hasło",
        }}
      />
      <Stack.Screen
        name="Achievements"
        component={AchievementsScreen}
        options={{
          headerTitle: "Osiągnięcia",
        }}
      />
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
