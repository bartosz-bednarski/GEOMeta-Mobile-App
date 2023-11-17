import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import HeaderIcon from "./ui/HeaderIcon";
import AuthNavigator from "./navigators/AuthNavigator";
export default function App() {
  const BottomTabs = createBottomTabNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
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
            component={HomeScreen}
            options={{
              headerTitle: "Główna",
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="home" size={size} color={color} />;
              },
              headerRight: () => {
                return <HeaderIcon />;
              },
              headerTintColor: "transparent",
            }}
          />
          <BottomTabs.Screen
            name="Profile"
            component={AuthNavigator}
            options={{
              title: "Profil",
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="person" color={color} size={size} />;
              },
              headerShown: false,
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
