import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HeaderIcon from "./ui/HeaderIcon";
import AuthNavigator from "./navigators/AuthNavigator";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import UsernameIcon from "./ui/UsernameIcon";
import ProfileNavigator from "./navigators/ProfileNavigator";
import DataNavigator from "./navigators/DataNavigator";
import QuizNavigator from "./navigators/QuizNavigator";
import ForumNavigator from "./navigators/FoumNavigator";
export default function App() {
  const navTheme = DefaultTheme;
  navTheme.colors.background = "#7131B7";
  const displayProfileIcon = () => {
    const authStatus = useSelector((state) => state.authorization.loggedIn);
    const username = useSelector((state) => state.authorization.username);

    return {
      title: `${authStatus ? username : "Profil"}`,
      tabBarIcon: ({ color, size }) => {
        if (authStatus) {
          return <UsernameIcon size="sm" />;
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
          <NavigationContainer theme={navTheme}>
            <BottomTabs.Navigator
              screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: "#7B41BB" },
                headerTintColor: "white",
                tabBarStyle: {
                  backgroundColor: "#7B41BB",
                  borderBlockColor: "transparent",
                },
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
                name="Data"
                component={DataNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="bulb" size={size} color={color} />;
                  },
                  headerShown: false,
                }}
              />
              <BottomTabs.Screen
                name="Forum"
                component={ForumNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => {
                    return (
                      <Ionicons
                        name="chatbubbles-outline"
                        size={size}
                        color={color}
                      />
                    );
                  },
                  headerShown: false,
                }}
              />
              <BottomTabs.Screen
                name="Quiz"
                component={QuizNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => {
                    return (
                      <Ionicons
                        name="timer-outline"
                        size={size}
                        color={color}
                      />
                    );
                  },
                  headerShown: false,
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
