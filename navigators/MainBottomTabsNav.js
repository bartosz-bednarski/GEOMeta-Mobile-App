import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../components/Home/Home";
const MainBottomTabsNav = () => {
  const BottomTabs = createBottomTabNavigator();
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#7B41BB" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "#7B41BB" },
        tabBarActiveTintColor: "#ffd700",
        headerRight: () => {
          <Ionicons name="home" size={20} color="white" />;
        },
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: "Główna",
          tabBarLabel: "Główna",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};
export default MainBottomTabsNav;
