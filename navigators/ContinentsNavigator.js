import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContinentsScreen from "../screens/Continents/ContinentsScreen";
import ContinentScreen from "../screens/Continent/ContinentScreen";

const ContinentsNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Continents" component={ContinentsScreen} />
      <Stack.Screen name="Continent" component={ContinentScreen} />
      {/* <Stack.Screen componet={ContinentScreen} /> */}
    </Stack.Navigator>
  );
};

export default ContinentsNavigator;
