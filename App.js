import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import HeaderIcon from "./ui/HeaderIcon";
import AuthNavigator from "./navigators/AuthNavigator";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import UsernameIcon from "./ui/UsernameIcon";
import ProfileNavigator from "./navigators/ProfileNavigator";
export default function App() {
  const displayProfileIcon = () => {
    const authStatus = useSelector((state) => state.authorization.loggedIn);
    const username = useSelector((state) => state.authorization.username);

    return {
      title: `${authStatus ? username : "Profil"}`,
      tabBarIcon: ({ color, size }) => {
        if (authStatus) {
          return <UsernameIcon />;
        } else {
          return <Ionicons name={"person"} color={color} size={size} />;
        }
      },
      headerShown: false,
    };
  };
  const DisplayProfileComponent = () => {
    const authStatus = useSelector((state) => state.authorization.loggedIn);
    if (authStatus) {
      return <ProfileNavigator />;
    } else {
      return <AuthNavigator />;
    }
  };
  const BottomTabs = createBottomTabNavigator();

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
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
                name="Auth"
                component={DisplayProfileComponent}
                options={displayProfileIcon}
              />
            </BottomTabs.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
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
