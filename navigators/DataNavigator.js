import { createDrawerNavigator } from "@react-navigation/drawer";
import ContinentsNavigator from "./ContinentsNavigator";
import HeaderIcon from "../ui/HeaderIcon";
import { Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
const DataNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#7B41BB" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "#7B41BB" },
        tabBarActiveTintColor: "#ffd700",
        drawerActiveBackgroundColor: "#9264C6",
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "gold",
        drawerStyle: {
          backgroundColor: "#7B41BB",
        },

        headerRight: () => {
          return <HeaderIcon />;
        },
      }}
    >
      <Drawer.Screen
        name="ContinentsDrawer"
        component={ContinentsNavigator}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          return {
            headerTitle: "Kontynenty",
            headerShown: routeName === "Continents" ? true : false,
            drawerLabel: "Kontynenty",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="compass" size={size} color={color} />
            ),
          };
        }}
      />
    </Drawer.Navigator>
  );
};

export default DataNavigator;
