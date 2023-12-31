import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContinentsScreen from "../screens/Continents/ContinentsScreen";
import ContinentScreen from "../screens/Continent/ContinentScreen";
import HeaderIcon from "../ui/HeaderIcon";
import CountryScreen from "../screens/Country/CountryScreen";
const ContinentsNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Continents"
        component={ContinentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Continent"
        component={ContinentScreen}
        options={({ route }) => {
          const header = route.params.header;
          return {
            headerShown: true,
            headerTitle: header,
            headerRight: () => {
              return <HeaderIcon navType="stack" />;
            },
            headerStyle: {
              backgroundColor: "#7B41BB",
            },
            headerTintColor: "white",
          };
        }}
      />
      <Stack.Screen
        name="Country"
        component={CountryScreen}
        options={({ route }) => {
          const header = route.params.header;
          return {
            headerShown: true,
            headerTitle: header,
            headerRight: () => {
              return <HeaderIcon navType="stack" />;
            },
            headerStyle: {
              backgroundColor: "#7B41BB",
            },
            headerTintColor: "white",
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default ContinentsNavigator;
