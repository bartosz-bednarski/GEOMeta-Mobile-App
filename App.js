import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainBottomTabsNav from "./navigators/MainBottomTabsNav";
import HeaderIcon from "./ui/HeaderIcon";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#7B41BB" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="MainBottomTabsNav"
            component={MainBottomTabsNav}
            options={{
              headerRight: () => {
                return <HeaderIcon />;
              },
            }}
            // options={{
            //   headerTitle: () => {
            //     <HeaderIcon />;
            //   },
            // }}
            // options={{ headerShown: false }}
          />
        </Stack.Navigator>
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
